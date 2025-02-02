import { useCommon, useLocaleInject } from '@vue-cesium/composables'
import usePosition from '@vue-cesium/composables/private/use-position'
import { VcBtn, VcTooltip } from '@vue-cesium/components/ui'
import { $ } from '@vue-cesium/utils/private/vm'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import {
  computed,
  createCommentVNode,
  CSSProperties,
  defineComponent,
  getCurrentInstance,
  h,
  onUnmounted,
  PropType,
  reactive,
  ref,
  VNode,
  WatchStopHandle
} from 'vue'
import VcViewer from '@vue-cesium/components/viewer'
import { hSlot } from '@vue-cesium/utils/private/render'

export default defineComponent({
  name: 'VcOverviewMap',
  props: {
    position: {
      type: String as PropType<string>,
      default: 'bottom-right',
      validator: (v: string) => ['top-right', 'top-left', 'bottom-right', 'bottom-left'].includes(v)
    },
    offset: {
      type: Array,
      validator: (v: Array<string>) => v.length === 2
    },
    width: {
      type: String,
      default: '150px'
    },
    height: {
      type: String,
      default: '150px'
    },
    border: {
      type: String,
      default: 'solid 4px rgb(255, 255, 255)'
    },
    borderRadius: {
      type: String
    },
    toggleOpts: {
      type: Object
    },
    viewerOpts: {
      type: Object
    }
  },
  emits: ['beforeLoad', 'ready', 'destroyed'],
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'VcOverviewMap'
    instance.cesiumEvents = []
    const commonState = useCommon(props, ctx, instance)
    if (commonState === void 0) {
      return
    }
    const { t } = useLocaleInject()
    const { $services } = commonState
    const rootRef = ref<HTMLElement | null>(null)
    const rootStyle = reactive<CSSProperties>({})
    const toggleBtnRef = ref<typeof VcBtn | null>(null)
    const tooltipRef = ref<typeof VcTooltip | null>(null)
    const viewerRef = ref<typeof VcViewer | null>(null)
    const positionState = usePosition(props, $services)
    let minimized = false
    let unwatchFns: Array<WatchStopHandle> = []
    let overviewViewer: Cesium.Viewer

    // computed
    const toggleOpts = computed(() => {
      return Object.assign(
        {},
        {
          show: true,
          color: '#fff',
          background: '#3f4854',
          icon: 'vc-icons-overview-toggle',
          size: '15px',
          tooltip: {
            delay: 500,
            anchor: 'bottom middle',
            offset: [0, 20],
            tip: void 0
          }
        },
        props.toggleOpts
      )
    })

    const viewerOpts = computed(() => {
      return Object.assign(
        {},
        {
          removeCesiumScript: false,
          showCredit: false,
          sceneMode: 2
        },
        props.viewerOpts
      )
    })
    // watch

    // methods
    instance.createCesiumObject = async () => {
      const { viewer } = $services
      const viewerElement = (viewer as any)._element
      viewerElement.appendChild($(rootRef))
      return [$(rootRef), $(viewerRef)]
    }

    instance.mount = async () => {
      updateRootStyle()
      const { viewer } = $services
      viewer.clock.onTick.addEventListener(onClockTick)
      return true
    }

    instance.unmount = async () => {
      const { viewer } = $services
      const viewerElement = (viewer as any)._element
      viewer.clock.onTick.removeEventListener(onClockTick)
      viewerElement.contains($(rootRef)) && viewerElement.removeChild($(rootRef))
      return true
    }

    const onClockTick = () => {
      const { viewer } = $services
      overviewViewer &&
        overviewViewer.camera.flyTo({
          destination: viewer.camera.position,
          orientation: {
            heading: viewer.camera.heading,
            pitch: viewer.camera.pitch,
            roll: viewer.camera.roll
          },
          duration: 0.0
        })
    }

    const onViewerReady = ({ viewer }) => {
      overviewViewer = viewer
      const control = viewer.scene.screenSpaceCameraController
      control.enableRotate = false
      control.enableTranslate = false
      control.enableZoom = false
      control.enableTilt = false
      control.enableLook = false
    }

    const updateRootStyle = () => {
      const css: CSSProperties = positionState.style.value
      rootStyle.left = css.left
      rootStyle.top = css.top
      rootStyle.transform = css.transform

      css.borderRadius = props.borderRadius
      css.border = props.border
      css.width = props.width
      css.height = props.height
      minimized = false

      Object.assign(rootStyle, css)
    }

    // const onTooltipBeforeShow = () => {

    // }

    const onToggle = () => {
      if (!minimized) {
        minimize()
      } else {
        restore()
      }

      minimized = !minimized
    }

    const minimize = () => {
      if (toggleOpts.value.show) {
        const reg = /(\d+)/g
        const regResult = reg.exec(props.border)
        const boder = regResult?.length ? parseFloat(regResult[0]) : 0
        const toggleBtnRefStyle = getComputedStyle($(toggleBtnRef)?.$el)
        rootStyle.width = `${parseFloat(toggleBtnRefStyle.width) + parseFloat(toggleBtnRefStyle.padding) + boder}px`
        rootStyle.height = `${parseFloat(toggleBtnRefStyle.height) + parseFloat(toggleBtnRefStyle.padding) + boder}px`
      } else {
        rootStyle.display = 'block'
      }
    }

    const restore = () => {
      if (toggleOpts.value.show) {
        rootStyle.width = props.width
        rootStyle.height = props.height
      } else {
        rootStyle.display = 'none'
      }
    }

    // life cycle
    onUnmounted(() => {
      unwatchFns.forEach(item => item())
      unwatchFns = []
    })

    return () => {
      const children: Array<VNode> = []
      children.push(
        h(
          VcBtn,
          {
            ref: toggleBtnRef,
            class: 'toggle toggle-' + props.position + (minimized ? ' minimized ' : ''),
            flat: true,
            dense: true,
            icon: toggleOpts.value.icon,
            size: toggleOpts.value.size,
            style: { color: toggleOpts.value.color, background: toggleOpts.value.background },
            onClick: onToggle
          },
          () =>
            toggleOpts.value.tooltip
              ? h(
                  VcTooltip,
                  {
                    ref: tooltipRef,
                    ...toggleOpts.value.tooltip
                    // onBeforeShow: onTooltipBeforeShow
                  },
                  () => h('strong', {}, toggleOpts.value.tooltip.tip || t(`vc.overview.${minimized ? 'show' : 'hidden'}`))
                )
              : createCommentVNode('v-if')
        )
      )
      children.push(
        h(
          VcViewer,
          {
            ref: viewerRef,
            ...viewerOpts.value,
            onReady: onViewerReady
          },
          () => hSlot(ctx.slots.default)
        )
      )
      return h(
        'div',
        {
          ref: rootRef,
          class: 'vc-overview-map ' + positionState.classes.value,
          style: rootStyle
        },
        children
      )
    }
  }
})
