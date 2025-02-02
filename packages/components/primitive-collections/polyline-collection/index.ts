import { createCommentVNode, defineComponent, getCurrentInstance, h, onUnmounted, watch, WatchStopHandle } from 'vue'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { usePrimitiveCollections } from '@vue-cesium/composables'
import cloneDeep from 'lodash/cloneDeep'
import differenceBy from 'lodash/differenceBy'
import { modelMatrix, debugShowBoundingVolume, show, enableMouseEvent } from '@vue-cesium/utils/cesium-props'
import { addCustomProperty, kebabCase } from '@vue-cesium/utils/util'
import { hSlot } from '@vue-cesium/utils/private/render'

export default defineComponent({
  name: 'VcCollectionPolyline',
  props: {
    ...modelMatrix,
    ...debugShowBoundingVolume,
    ...show,
    ...enableMouseEvent,
    polylines: {
      type: Array,
      default: () => []
    }
  },
  emits: ['beforeLoad', 'ready', 'destroyed'],
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'PolylineCollection'
    const primitiveCollectionsState = usePrimitiveCollections(props, ctx, instance)

    if (primitiveCollectionsState === void 0) {
      return
    }
    // watcher
    instance.alreadyListening.push('polylines')
    let unwatchFns: Array<WatchStopHandle> = []
    unwatchFns.push(
      watch(
        () => cloneDeep(props.polylines),
        (newVal, oldVal) => {
          if (!instance.mounted) {
            return
          }
          const polylineCollection = instance.cesiumObject as Cesium.PolylineCollection

          if (newVal.length === oldVal.length) {
            // 视为修改操作
            // Treated as modified
            const modifies: Array<any> = []
            for (let i = 0; i < newVal.length; i++) {
              const options = newVal[i]
              const oldOptions = oldVal[i]

              if (JSON.stringify(options) !== JSON.stringify(oldOptions)) {
                modifies.push({
                  newOptions: options,
                  oldOptions: oldOptions
                })
              }
            }

            modifies.forEach(modify => {
              const modifyPolyline = polylineCollection._polylines.find(v => v.id === modify.oldOptions.id)
              modifyPolyline &&
                Object.keys(modify.newOptions).forEach(prop => {
                  if (modify.oldOptions[prop] !== modify.newOptions[prop]) {
                    modifyPolyline[prop] = primitiveCollectionsState.transformProp(prop, modify.newOptions[prop])
                  }
                })
            })
          } else {
            const addeds: any = differenceBy(newVal, oldVal, 'id')
            const deletes: any = differenceBy(oldVal, newVal, 'id')
            const deletePolylines: Array<Cesium.Polyline> = []
            for (let i = 0; i < deletes.length; i++) {
              const deletePolyline = polylineCollection._polylines.find(v => v.id === deletes[i].id)
              deletePolyline && deletePolylines.push(deletePolyline)
            }

            deletePolylines.forEach(v => {
              polylineCollection.remove(v)
            })

            addPolylines(polylineCollection, addeds)
          }
        },
        {
          deep: true
        }
      )
    )
    // methods
    const addPolylines = (polylineCollection: Cesium.PolylineCollection, polylines) => {
      for (let i = 0; i < polylines.length; i++) {
        const polylineOptions = polylines[i] as Cesium.Polyline
        polylineOptions.id = Cesium.defined(polylineOptions.id) ? polylineOptions.id : Cesium.createGuid()
        const polylineOptionsTransform = primitiveCollectionsState.transformProps(polylineOptions)
        const polyline = polylineCollection.add(polylineOptionsTransform)
        addCustomProperty(polyline, polylineOptionsTransform)
      }
    }
    instance.createCesiumObject = async () => {
      const options = primitiveCollectionsState.transformProps(props)
      const polylineCollection = new Cesium.PolylineCollection(options)

      addPolylines(polylineCollection, props.polylines)
      return polylineCollection
    }

    // life cycle
    onUnmounted(() => {
      unwatchFns.forEach(item => item())
      unwatchFns = []
    })

    const name = instance.proxy?.$options.name || ''
    return () =>
      ctx.slots.default
        ? h(
            'i',
            {
              class: kebabCase(name),
              style: { display: 'none !important' }
            },
            hSlot(ctx.slots.default)
          )
        : createCommentVNode(kebabCase(name))
  }
})
