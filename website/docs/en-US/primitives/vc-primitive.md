## VcPrimitive

Loading a geometry of primitive, the geometry can be from a single `GeometryInstance` or from an array of instances, or `vc-geometry-xxx` component. It is equivalent to initializing a `Cesium.Primitive` instance.

### Basic usage

Basic usage of VcPrimitive component.

:::demo Use the `vc-primitive`, `vc-instance-geometry` and `vc-geometry-circle` tag to add a rectangle and circle to the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-primitive ref="primitive" @click="onClicked" :appearance="appearance" :geometryInstances="geometryInstances">
      <vc-instance-geometry>
        <vc-geometry-circle ref="geometryRef" :center="[103, 32]" :radius="250000"></vc-geometry-circle>
      </vc-instance-geometry>
    </vc-primitive>
  </vc-viewer>
  <el-row class="demo-toolbar">
    <el-button type="danger" round @click="unload">Unload</el-button>
    <el-button type="danger" round @click="load">Load</el-button>
    <el-button type="danger" round @click="reload">Reload</el-button>
  </el-row>
</el-row>

<script>
  export default {
    data() {
      return {
        geometryInstances: {},
        appearance: {}
      }
    },
    methods: {
      onViewerReady({ Cesium, viewer }) {
        const rectangle = { west: 105.5, south: 29.5, east: 115.5, north: 35.5 }
        this.geometryInstances = new Cesium.GeometryInstance({
          geometry: new Cesium.RectangleGeometry({
            rectangle: Cesium.Rectangle.fromDegrees(rectangle.west, rectangle.south, rectangle.east, rectangle.north)
          })
        })
        this.appearance = new Cesium.MaterialAppearance({
          material: Cesium.Material.fromType('Checkerboard', {
            repeat: new Cesium.Cartesian2(20.0, 6.0)
          }),
          materialSupport: Cesium.MaterialAppearance.MaterialSupport.TEXTURED
        })
      },
      onClicked(e) {
        console.log(e)
      },
      unload() {
        this.$refs.primitive.unload()
      },
      load() {
        this.$refs.primitive.load()
      },
      reload() {
        this.$refs.primitive.reload()
      }
    }
  }
</script>
```

:::

### Props

<!-- prettier-ignore -->
| Name | Type | Default | Description | Accepted Values |
| ---- | ---- | ------- | ----------- | --------------- |
| geometryInstances | Object\|Array | | `optional` The geometry instances - or a single geometry instance - to render. |
| appearance | Object | | `optional` The appearance used to render the primitive. |
| depthFailAppearance | Object | | `optional` The appearance used to shade this primitive when it fails the depth test. |
| show | Boolean | `true` | `optional` Determines if this primitive will be shown. |
| modelMatrix | Object | | `optional` The 4x4 transformation matrix that transforms the primitive (all geometry instances) from model to world coordinates. |
| vertexCacheOptimize | Boolean | `false` | `optional` When true, geometry vertices are optimized for the pre and post-vertex-shader caches. |
| interleave | Boolean | `false` | `optional` When true, geometry vertex attributes are interleaved, which can slightly improve rendering performance but increases load time. |
| compressVertices | Boolean | `true` | `optional` When true, the geometry vertices are compressed, which will save memory. |
| releaseGeometryInstances | Boolean | `true` | `optional` When true, the primitive does not keep a reference to the input geometryInstances to save memory. |
| allowPicking | Boolean | `true` | `optional` When true, each geometry instance will only be pickable with Scene#pick. When false, GPU memory is saved. |
| cull | Boolean | `true` | `optional` When true, the renderer frustum culls and horizon culls the primitive's commands based on their bounding volume. Set this to false for a small performance gain if you are manually culling the primitive. |
| asynchronous | Boolean | `true` | `optional` Determines if the primitive will be created asynchronously or block until ready. |
| debugShowBoundingVolume | Boolean | `false` | `optional` For debugging only. Determines if this primitive's commands' bounding spheres are shown. |
| shadows | Number | `0` | `optional` Determines whether this primitive casts or receives shadows from each light source. **DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3** |0/1/2/3|
| enableMouseEvent | Boolean | `true` | `optional` Specify whether the mouse event takes effect. |

### Events

| Name       | Parameters                                                 | Description                                                      |
| ---------- | ---------------------------------------------------------- | ---------------------------------------------------------------- |
| beforeLoad | Vue Instance                                               | Triggers before the cesiumObject is loaded.                      |
| ready      | {Cesium, viewer, cesiumObject, vm}                         | Triggers when the cesiumObject is successfully loaded.           |
| destroyed  | Vue Instance                                               | Triggers when the cesiumObject is destroyed.                     |
| mousedown  | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggers when the mouse is pressed on this primitive.            |
| mouseup    | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggers when the mouse bounces up on this primitive.            |
| click      | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggers when the mouse clicks on the primitive.                 |
| clickout   | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggers when the mouse clicks outside the primitive.            |
| dblclick   | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggers when the left mouse button double-clicks the primitive. |
| mousemove  | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggers when the mouse moves on this primitive.                 |
| mouseover  | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggers when the mouse moves to this primitive.                 |
| mouseout   | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggers when the mouse moves out of this primitive.             |

### Slots

<!-- prettier-ignore -->
| Name | Description | Subtags |
| ---- | ----------- | ------- |
| default | This is where vc-instance-geometry tag content goes. | vc-instance-geometry |

### Reference

- Refer to the official documentation: **[Primitive](https://cesium.com/docs/cesiumjs-ref-doc/Primitive.html)**
