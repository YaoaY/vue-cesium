/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-15 09:47:36
 * @LastEditTime: 2021-10-26 14:25:22
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\composables\use-drawing\use-drawing-action.ts
 */
// import { enableMouseEvent } from '@vue-cesium/utils/cesium-props'
import { DrawTipOpts, VcComponentInternalInstance, VcComponentPublicInstance, VcViewerProvider } from '@vue-cesium/utils/types'
import { Ref, ref, toRef } from 'vue'
import { t } from '@vue-cesium/locale'
import { DrawStatus } from '@vue-cesium/shared'
import useTimeout from '@vue-cesium/composables/private/use-timeout'
import { kebabCase } from '@vue-cesium/utils/util'

export default function (props, ctx, instance: VcComponentInternalInstance, cmpName: string, $services: VcViewerProvider) {
  instance.cesiumClass = cmpName
  instance.cesiumEvents = []
  const { emit } = ctx
  const tips = kebabCase(cmpName).split('-')
  if (cmpName === 'VcMeasurementDistance' && props.showComponentLines) {
    tips[2] = 'component-distance'
  }
  if (cmpName === 'VcDrawingRegular' || cmpName === 'VcMeasurementRegular') {
    if (props.edge === 4) {
      tips[2] = 'rectangle'
    }
    if (props.edge === 360) {
      tips[2] = 'circle'
    }
  }
  let drawingType = tips[2]

  tips[3] && (drawingType = `${tips[2]}-${tips[3]}`)

  const drawTip = ref('')
  const drawTipOpts = ref<DrawTipOpts>({
    drawingTipStart: props.drawtip.drawingTipStart || t(`${tips[0]}.${tips[1]}.${tips[2]}.drawingTipStart`),
    drawingTipEnd: props.drawtip.drawingTipEnd || t(`${tips[0]}.${tips[1]}.${tips[2]}.drawingTipEnd`),
    drawingTipEditing: props.drawtip.drawingTipEditing || t(`${tips[0]}.${tips[1]}.${tips[2]}.drawingTipEditing`)
  })

  const drawStatus = ref(DrawStatus.BeforeDraw)
  const canShowDrawTip = ref(false)
  const drawTipPosition = ref<Array<number> | Cesium.Cartesian3>([0, 0, 0])
  const showEditor = ref(false)
  const editorPosition = ref<Array<number> | Cesium.Cartesian3>([0, 0, 0])
  const mouseoverPoint = ref<any>(null)
  const editingPoint = ref<any>(null)
  const primitiveCollectionRef = ref<VcComponentPublicInstance>(null!)
  const editorType = ref('')

  const { registerTimeout, removeTimeout } = useTimeout()

  // methods
  instance.createCesiumObject = async () => {
    return primitiveCollectionRef
  }

  const onMouseoverPoints = e => {
    const { drawingHandlerActive, viewer } = $services
    if (props.editable && drawStatus.value !== DrawStatus.Drawing && drawingHandlerActive) {
      e.pickedFeature.primitive.pixelSize = props.pointOpts?.pixelSize * 1.5
      removeTimeout()
      registerTimeout(() => {
        mouseoverPoint.value = e.pickedFeature.primitive
        editorPosition.value = e.pickedFeature.primitive.position
        showEditor.value = true
        canShowDrawTip.value = false
        drawTipPosition.value = [0, 0, 0]
      }, props.editorOpts?.delay)
    }

    emit(
      'mouseEvt',
      {
        type: e.type,
        name: drawingType,
        target: e
      },
      viewer
    )
  }

  const onMouseoutPoints = e => {
    const { viewer, selectedDrawingActionInstance } = $services
    if (props.editable) {
      e.pickedFeature.primitive.pixelSize = props.pointOpts?.pixelSize * 1.0
      removeTimeout()
      registerTimeout(() => {
        editorPosition.value = [0, 0, 0]
        mouseoverPoint.value = undefined
        showEditor.value = false
      }, props.editorOpts?.hideDelay)
      selectedDrawingActionInstance && (canShowDrawTip.value = true)
    }

    emit(
      'mouseEvt',
      {
        type: e.type,
        name: drawingType,
        target: e
      },
      viewer
    )
  }

  const onMouseenterEditor = evt => {
    removeTimeout()
  }

  const onMouseleaveEditor = evt => {
    removeTimeout()
    registerTimeout(() => {
      editorPosition.value = [0, 0, 0]
      mouseoverPoint.value.pixelSize = props.pointOpts?.pixelSize * 1.0
      mouseoverPoint.value = undefined
      showEditor.value = false
    }, props.editorOpts?.hideDelay)
  }

  const onPrimitiveCollectionReady = ({ cesiumObject }) => {
    cesiumObject._vcId = cmpName
  }

  const onVcCollectionPointReady = function (e) {
    const { cesiumObject: pointPrimitiveCollection } = e
    const originalUpdate = pointPrimitiveCollection.update

    pointPrimitiveCollection.update = function (frameState) {
      const originalLength = frameState.commandList.length
      originalUpdate.call(this, frameState)
      const endLength = frameState.commandList.length
      for (let i = originalLength; i < endLength; ++i) {
        frameState.commandList[i].pass = Cesium['Pass'].TRANSLUCENT
        frameState.commandList[i].renderState = Cesium['RenderState'].fromCache({
          depthTest: {
            enabled: false
          },
          depthMask: false
        })
      }
    }
  }

  const onVcCollectionLabelReady = e => {
    const { cesiumObject: labelCollection } = e
    const originalUpdate = labelCollection.update

    labelCollection.update = function (frameState) {
      const originalLength = frameState.commandList.length
      originalUpdate.call(this, frameState)
      const endLength = frameState.commandList.length
      for (let i = originalLength; i < endLength; ++i) {
        frameState.commandList[i].pass = Cesium['Pass'].OVERLAY
        frameState.commandList[i].renderState = Cesium['RenderState'].fromCache({
          depthTest: {
            enabled: false
          },
          depthMask: false,
          blending: Cesium.BlendingState.ALPHA_BLEND
        })
      }
    }
  }

  const onVcPrimitiveReady = e => {
    const { cesiumObject: primitive } = e
    const originalPrimitiveUpdate = primitive.update

    primitive.update = function (frameState) {
      const originalLength = frameState.commandList.length
      originalPrimitiveUpdate.call(this, frameState)
      const endLength = frameState.commandList.length
      for (let i = originalLength; i < endLength; ++i) {
        if (frameState.commandList[i].pass !== Cesium['Pass'].TRANSLUCENT) {
          continue
        }
        frameState.commandList[i].pass = Cesium['Pass'].OPAQUE
        frameState.commandList[i].renderState = Cesium['RenderState'].fromCache({
          depthTest: {
            enabled: false
          },
          depthMask: false,
          blending: Cesium.BlendingState.ALPHA_BLEND
        })
      }
    }
  }

  return {
    drawingType,
    drawTip,
    drawTipOpts,
    drawStatus,
    canShowDrawTip,
    drawTipPosition,
    showEditor,
    editorPosition,
    mouseoverPoint,
    editingPoint,
    primitiveCollectionRef,
    editorType,
    onMouseoverPoints,
    onMouseoutPoints,
    onMouseenterEditor,
    onMouseleaveEditor,
    onPrimitiveCollectionReady,
    onVcCollectionPointReady,
    onVcPrimitiveReady,
    onVcCollectionLabelReady
  }
}