(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[173],{

/***/ 610:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/providers/vc-provider-imagery-wms.md?vue&type=template&id=45a70090

const vc_provider_imagery_wmsvue_type_template_id_45a70090_hoisted_1 = {
  class: "content element-doc"
};

const vc_provider_imagery_wmsvue_type_template_id_45a70090_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<h2 id=\"vcproviderimagerywms\"><a class=\"header-anchor\" href=\"#vcproviderimagerywms\">¶</a> VcProviderImageryWms</h2><p>用于加载 WMS 标准影像服务，相当于初始化一个 <code>Cesium.WebMapServiceImageryProvider</code> 实例。</p><p><strong>注意</strong>：需要作为 <code>vc-layer-imagery</code> 的子组件才能正常加载。</p><h3 id=\"ji-chu-yong-fa\"><a class=\"header-anchor\" href=\"#ji-chu-yong-fa\">¶</a> 基础用法</h3><p><code>vc-provider-imagery-wms</code> 组件的基础用法。</p>", 5);

const vc_provider_imagery_wmsvue_type_template_id_45a70090_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("使用 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-layer-imagery"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 标签在三维球上添加由 Cesium Ion REST API 提供的影像瓦片服务图层。")])], -1);

const vc_provider_imagery_wmsvue_type_template_id_45a70090_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\">\n    <vc-layer-imagery :alpha=\"alpha\" :brightness=\"brightness\" :contrast=\"contrast\">\n      <vc-provider-imagery-wms\n        ref=\"provider\"\n        url=\"http://geoserver.nationalmap.nicta.com.au/geotopo_250k/ows\"\n        layers=\"Hydrography:bores\"\n        :parameters=\"{transparent: true, format: 'image/png'}\"\n      ></vc-provider-imagery-wms>\n    </vc-layer-imagery>\n  </vc-viewer>\n  <div class=\"demo-toolbar\">\n    <el-row>\n      <el-button type=\"danger\" round @click=\"unload\">销毁</el-button>\n      <el-button type=\"danger\" round @click=\"load\">加载</el-button>\n      <el-button type=\"danger\" round @click=\"reload\">重载</el-button>\n    </el-row>\n    <el-row>\n      <el-col>\n        <div class=\"block\">\n          <span class=\"demonstration\">透明度</span>\n          <el-slider v-model=\"alpha\" :min=\"0\" :max=\"1\" :step=\"0.01\"></el-slider>\n          <span class=\"demonstration\">亮度</span>\n          <el-slider v-model=\"brightness\" :min=\"0\" :max=\"5\" :step=\"0.01\"></el-slider>\n          <span class=\"demonstration\">对比度</span>\n          <el-slider v-model=\"contrast\" :min=\"0\" :max=\"5\" :step=\"0.01\"></el-slider>\n        </div>\n      </el-col>\n    </el-row>\n  </div>\n</el-row>\n\n<script>\n  import { ref, getCurrentInstance } from 'vue'\n  export default {\n    setup() {\n      // state\n      const instance = getCurrentInstance()\n      const provider = ref(null)\n      const alpha = ref(1)\n      const brightness = ref(1)\n      const contrast = ref(1)\n      let viewer = undefined\n      // methods\n      const unload = () => {\n        provider.value.unload()\n      }\n      const reload = () => {\n        provider.value.reload()\n      }\n      const load = () => {\n        provider.value.load()\n      }\n      const onViewerReady = cesiumInstance => {\n        cesiumInstance.viewer.camera.setView({\n          destination: Cesium.Rectangle.fromDegrees(114.591, -45.837, 148.97, -5.73)\n        })\n      }\n      return {\n        provider,\n        unload,\n        reload,\n        load,\n        alpha,\n        brightness,\n        contrast,\n        onViewerReady\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<h3 id=\"shu-xing\"><a class=\"header-anchor\" href=\"#shu-xing\">¶</a> 属性</h3><table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>url</td><td>String|Object</td><td></td><td><code>required</code> 指定 WMS 服务地址。</td></tr><tr><td>layers</td><td>String</td><td></td><td><code>required</code> 指定服务图层，多个图层用&quot;,&quot;隔开。</td></tr><tr><td>parameters</td><td>Object</td><td></td><td><code>optional</code> 在 GetMap URL 中传递给 WMS 服务器的其他参数。</td></tr><tr><td>getFeatureInfoParameters</td><td>Object</td><td></td><td><code>optional</code> 在 GetFeatureInfo URL 中传递给 WMS 服务器的其他参数。</td></tr><tr><td>enablePickFeatures</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定是否支持拾取对象，通过 GetFeatureInfo 获取，需要服务支持。</td></tr><tr><td>getFeatureInfoFormats</td><td>Array</td><td></td><td><code>optional</code> 指定 WMS GetFeatureInfo 请求的格式。</td></tr><tr><td>rectangle</td><td>Object|Array</td><td></td><td><code>optional</code> 指定 WMS 图层矩形范围。</td></tr><tr><td>tilingScheme</td><td>Object</td><td></td><td><code>optional</code> 指定 WMS 服务瓦片投影参数。</td></tr><tr><td>ellipsoid</td><td>Object</td><td></td><td><code>optional</code> 指定 WMS 服务椭球体参数，如果指定了 tilingScheme 此属性无效。</td></tr><tr><td>tileWidth</td><td>Number</td><td><code>256</code></td><td><code>optional</code> 指定像元宽度。</td></tr><tr><td>tileHeight</td><td>Number</td><td><code>256</code></td><td><code>optional</code> 指定像元高度。</td></tr><tr><td>minimumLevel</td><td>Number</td><td><code>0</code></td><td><code>optional</code> 指定图层可以显示的最小层级。</td></tr><tr><td>maximumLevel</td><td>Number</td><td></td><td><code>optional</code> 指定图层可以显示的最大层级，undefined 表示没有限制。</td></tr><tr><td>crs</td><td>String</td><td></td><td><code>optional</code> 指定 CRS 规范，用于 WMS 规范&gt; = 1.3.0。</td></tr><tr><td>srs</td><td>String</td><td></td><td><code>optional</code> 指定 SRS 规范，用于 WMS 规范 1.1.0 或 1.1.1</td></tr><tr><td>credit</td><td>Credit| String</td><td></td><td><code>optional</code> 指定服务描述信息。</td></tr><tr><td>subdomains</td><td>String| Array</td><td><code>&#39;abc&#39;</code></td><td><code>optional</code> 指定服务子域 。</td></tr><tr><td>clock</td><td>Object</td><td></td><td><code>optional</code> 确定时间维度的值时使用的 Clock 实例。 当指定 options.times 时是必需的。</td></tr><tr><td>times</td><td>Object</td><td></td><td><code>optional</code> TimeIntervalCollection 及其数据属性是一个包含时间动态维度及其值的对象。</td></tr></tbody></table><h3 id=\"shi-jian\"><a class=\"header-anchor\" href=\"#shi-jian\">¶</a> 事件</h3><table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>对象销毁时触发。</td></tr><tr><td>errorEvent</td><td>TileProviderError</td><td>当图层提供者发生异步错误时触发, 返回一个 TileProviderError 实例。</td></tr><tr><td>readyPromise</td><td>ImageryProvider</td><td>当图层提供者可用时触发, 返回 ImageryProvider 实例。</td></tr></tbody></table><h3 id=\"can-kao\"><a class=\"header-anchor\" href=\"#can-kao\">¶</a> 参考</h3><ul><li>官方文档： <strong><a href=\"https://cesium.com/docs/cesiumjs-ref-doc/WebMapServiceImageryProvider.html\">WebMapServiceImageryProvider</a></strong></li></ul>", 6);

function vc_provider_imagery_wmsvue_type_template_id_45a70090_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_provider_imagery_wmsvue_type_template_id_45a70090_hoisted_1, [vc_provider_imagery_wmsvue_type_template_id_45a70090_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [vc_provider_imagery_wmsvue_type_template_id_45a70090_hoisted_8]),
    default: Object(vue_esm_browser["withCtx"])(() => [vc_provider_imagery_wmsvue_type_template_id_45a70090_hoisted_7]),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/providers/vc-provider-imagery-wms.md?vue&type=template&id=45a70090

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/providers/vc-provider-imagery-wms.md?vue&type=script&lang=ts

/* harmony default export */ var vc_provider_imagery_wmsvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "vue-cesium-demo0": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        withCtx: _withCtx,
        createTextVNode: _createTextVNode,
        createElementVNode: _createElementVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser;
      const _hoisted_1 = {
        class: "demo-toolbar"
      };

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("销毁");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("加载");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("重载");

      const _hoisted_5 = {
        class: "block"
      };

      const _hoisted_6 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "透明度", -1);

      const _hoisted_7 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "亮度", -1);

      const _hoisted_8 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "对比度", -1);

      function render(_ctx, _cache) {
        const _component_vc_provider_imagery_wms = _resolveComponent("vc-provider-imagery-wms");

        const _component_vc_layer_imagery = _resolveComponent("vc-layer-imagery");

        const _component_vc_viewer = _resolveComponent("vc-viewer");

        const _component_el_button = _resolveComponent("el-button");

        const _component_el_row = _resolveComponent("el-row");

        const _component_el_slider = _resolveComponent("el-slider");

        const _component_el_col = _resolveComponent("el-col");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(() => [_createVNode(_component_vc_viewer, {
            onReady: _ctx.onViewerReady
          }, {
            default: _withCtx(() => [_createVNode(_component_vc_layer_imagery, {
              alpha: _ctx.alpha,
              brightness: _ctx.brightness,
              contrast: _ctx.contrast
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_provider_imagery_wms, {
                ref: "provider",
                url: "http://geoserver.nationalmap.nicta.com.au/geotopo_250k/ows",
                layers: "Hydrography:bores",
                parameters: {
                  transparent: true,
                  format: 'image/png'
                }
              }, null, 512)]),
              _: 1
            }, 8, ["alpha", "brightness", "contrast"])]),
            _: 1
          }, 8, ["onReady"]), _createElementVNode("div", _hoisted_1, [_createVNode(_component_el_row, null, {
            default: _withCtx(() => [_createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.unload
            }, {
              default: _withCtx(() => [_hoisted_2]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.load
            }, {
              default: _withCtx(() => [_hoisted_3]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.reload
            }, {
              default: _withCtx(() => [_hoisted_4]),
              _: 1
            }, 8, ["onClick"])]),
            _: 1
          }), _createVNode(_component_el_row, null, {
            default: _withCtx(() => [_createVNode(_component_el_col, null, {
              default: _withCtx(() => [_createElementVNode("div", _hoisted_5, [_hoisted_6, _createVNode(_component_el_slider, {
                modelValue: _ctx.alpha,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.alpha = $event),
                min: 0,
                max: 1,
                step: 0.01
              }, null, 8, ["modelValue", "step"]), _hoisted_7, _createVNode(_component_el_slider, {
                modelValue: _ctx.brightness,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.brightness = $event),
                min: 0,
                max: 5,
                step: 0.01
              }, null, 8, ["modelValue", "step"]), _hoisted_8, _createVNode(_component_el_slider, {
                modelValue: _ctx.contrast,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.contrast = $event),
                min: 0,
                max: 5,
                step: 0.01
              }, null, 8, ["modelValue", "step"])])]),
              _: 1
            })]),
            _: 1
          })])]),
          _: 1
        }, 512)]);
      }

      const {
        ref,
        getCurrentInstance
      } = vue_esm_browser;
      const democomponentExport = {
        setup() {
          // state
          const instance = getCurrentInstance();
          const provider = ref(null);
          const alpha = ref(1);
          const brightness = ref(1);
          const contrast = ref(1);
          let viewer = undefined; // methods

          const unload = () => {
            provider.value.unload();
          };

          const reload = () => {
            provider.value.reload();
          };

          const load = () => {
            provider.value.load();
          };

          const onViewerReady = cesiumInstance => {
            cesiumInstance.viewer.camera.setView({
              destination: Cesium.Rectangle.fromDegrees(114.591, -45.837, 148.97, -5.73)
            });
          };

          return {
            provider,
            unload,
            reload,
            load,
            alpha,
            brightness,
            contrast,
            onViewerReady
          };
        }

      };
      return {
        render,
        ...democomponentExport
      };
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/providers/vc-provider-imagery-wms.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/providers/vc-provider-imagery-wms.md



vc_provider_imagery_wmsvue_type_script_lang_ts.render = vc_provider_imagery_wmsvue_type_template_id_45a70090_render

/* harmony default export */ var vc_provider_imagery_wms = __webpack_exports__["default"] = (vc_provider_imagery_wmsvue_type_script_lang_ts);

/***/ })

}]);