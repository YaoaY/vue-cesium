(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[105],{

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/controls/vc-navigation-sm.md?vue&type=template&id=cf8bcd1e

const vc_navigation_smvue_type_template_id_cf8bcd1e_hoisted_1 = {
  class: "content element-doc"
};

const vc_navigation_smvue_type_template_id_cf8bcd1e_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<h2 id=\"vcnavigationsm\"><a class=\"header-anchor\" href=\"#vcnavigationsm\">¶</a> VcNavigationSm</h2><p>导航组件 —— 高仿超图样式。由 <code>vc-compass-sm</code>、<code>vc-zoom-control-sm</code> 组合而成。</p><p><strong>注意：</strong> 需要引入样式文件: <code>import &#39;vue-cesium/default/index.css&#39;;</code></p><h3 id=\"ji-chu-yong-fa\"><a class=\"header-anchor\" href=\"#ji-chu-yong-fa\">¶</a> 基础用法</h3><p>导航组件的基础用法。</p>", 5);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("将 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-navigation-sm"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 标签作为 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-viewer"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 的子组件挂载即可。")])], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer>\n    <vc-navigation-sm @zoomEvt=\"onNavigationEvt\" @compassEvt=\"onNavigationEvt\" ref=\"navigation\"></vc-navigation-sm>\n    <vc-navigation-sm position=\"left\" :compassOpts=\"{ autoHidden: false }\" :zoomOpts=\"{ autoHidden: false }\"></vc-navigation-sm>\n    <vc-compass-sm :autoHidden=\"false\" position=\"bottom\" :offset=\"[200, 20]\"></vc-compass-sm>\n    <vc-compass-sm position=\"bottom\" :offset=\"[-200, 20]\"></vc-compass-sm>\n    <vc-zoom-control-sm position=\"bottom\" :offset=\"[0, 50]\"></vc-zoom-control-sm>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">销毁</el-button>\n    <el-button type=\"danger\" round @click=\"load\">加载</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">重载</el-button>\n  </el-row>\n</el-row>\n<script>\n  export default {\n    methods: {\n      load() {\n        this.$refs.navigation.load()\n      },\n      reload() {\n        this.$refs.navigation.reload()\n      },\n      unload() {\n        this.$refs.navigation.unload()\n      },\n      onNavigationEvt(e) {\n        console.log(e)\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<h3 id=\"vcnavigationsm-shu-xing\"><a class=\"header-anchor\" href=\"#vcnavigationsm-shu-xing\">¶</a> VcNavigationSm 属性</h3><table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th><th>可选值</th></tr></thead><tbody><tr><td>position</td><td>String</td><td><code>top-right</code></td><td><code>optional</code> 指定导航组件位置。</td><td>top-right/top-left/bottom-right/bottom-left/top/right/bottom/left</td></tr><tr><td>offset</td><td>Array</td><td><code>[0, 0]</code></td><td><code>optional</code> 指定导航组件基于位置的偏移量。</td><td></td></tr><tr><td>compassOpts</td><td>Object|false</td><td>与 <code>VcCompassSm</code> 保持一致</td><td><code>optional</code> 指定罗盘控件参数，false 即不显示。</td><td></td></tr><tr><td>zoomOpts</td><td>Object|false</td><td>与 <code>VcZoomControlSm</code> 保持一致</td><td><code>optional</code> 指定缩放控件参数，false 即不显示。</td><td></td></tr></tbody></table><div class=\"tip\"><p>提示 <code>compassOpts</code>、<code>zoomOpts</code> 默认参数：</p></div><div class=\"tipflex\"><pre><code class=\"hljs language-js\"><span class=\"hljs-comment\">// compassOpts</span>\n{\n  <span class=\"hljs-attr\">enableCompassOuterRing</span>: <span class=\"hljs-literal\">true</span>,\n  <span class=\"hljs-attr\">duration</span>: <span class=\"hljs-number\">1.5</span>,\n  <span class=\"hljs-attr\">autoHidden</span>: <span class=\"hljs-literal\">true</span>,\n  <span class=\"hljs-attr\">tooltip</span>: {\n    <span class=\"hljs-attr\">delay</span>: <span class=\"hljs-number\">1000</span>,\n    <span class=\"hljs-attr\">anchor</span>: <span class=\"hljs-string\">&#39;bottom middle&#39;</span>,\n    <span class=\"hljs-attr\">offset</span>: [<span class=\"hljs-number\">0</span>, <span class=\"hljs-number\">20</span>],\n    <span class=\"hljs-attr\">tip</span>: <span class=\"hljs-keyword\">void</span> <span class=\"hljs-number\">0</span> <span class=\"hljs-comment\">// 未指定则用对应语言的默认值</span>\n  }\n}\n</code></pre><pre><code class=\"hljs language-js\"><span class=\"hljs-comment\">// zoomOpts</span>\n{\n  <span class=\"hljs-attr\">autoHidden</span>: <span class=\"hljs-literal\">true</span>,\n  <span class=\"hljs-attr\">tooltip</span>: {\n    <span class=\"hljs-attr\">delay</span>: <span class=\"hljs-number\">1000</span>,\n    <span class=\"hljs-attr\">anchor</span>: <span class=\"hljs-string\">&#39;bottom middle&#39;</span>,\n    <span class=\"hljs-attr\">offset</span>: [<span class=\"hljs-number\">0</span>, <span class=\"hljs-number\">20</span>],\n    <span class=\"hljs-attr\">zoomInTip</span>: <span class=\"hljs-keyword\">void</span> <span class=\"hljs-number\">0</span>,\n    <span class=\"hljs-attr\">zoomOutTip</span>: <span class=\"hljs-keyword\">void</span> <span class=\"hljs-number\">0</span>,\n    <span class=\"hljs-attr\">zoomBarTip</span>: <span class=\"hljs-keyword\">void</span> <span class=\"hljs-number\">0</span>\n  }\n}\n</code></pre></div><h3 id=\"vcnavigationsm-shi-jian\"><a class=\"header-anchor\" href=\"#vcnavigationsm-shi-jian\">¶</a> VcNavigationSm 事件</h3><table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>zoomEvt</td><td></td><td>操作缩放控件时触发。</td></tr><tr><td>compassEvt</td><td></td><td>操作罗盘控件时触发。</td></tr></tbody></table><h3 id=\"vccompass\"><a class=\"header-anchor\" href=\"#vccompass\">¶</a> VcCompass</h3><p>罗盘组件。</p><h3 id=\"vccompasssm-shu-xing\"><a class=\"header-anchor\" href=\"#vccompasssm-shu-xing\">¶</a> VcCompassSm 属性</h3><table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th><th>可选值</th></tr></thead><tbody><tr><td>position</td><td>String</td><td><code>top-right</code></td><td><code>optional</code> 指定罗盘位置。</td><td>top-right/top-left/bottom-right/bottom-left/top/right/bottom/left</td></tr><tr><td>offset</td><td>Array</td><td><code>[0, 0]</code></td><td><code>optional</code> 指定罗盘基于位置的偏移量。</td><td></td></tr><tr><td>enableCompassOuterRing</td><td>String</td><td><code>true</code></td><td><code>optional</code> 指定罗盘外环是否可以操作。</td><td></td></tr><tr><td>duration</td><td>Number</td><td><code>1.5</code></td><td><code>optional</code> 指定双击罗盘恢复俯仰角飞行时间，单位秒。</td><td></td></tr><tr><td>tooltip</td><td>Object</td><td></td><td><code>optional</code> 指定罗盘提示信息参数。</td><td></td></tr><tr><td>autoHidden</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定是否自动隐藏罗盘部分控件。</td><td></td></tr></tbody></table><h3 id=\"vccompasssm-shi-jian\"><a class=\"header-anchor\" href=\"#vccompasssm-shi-jian\">¶</a> VcCompassSm 事件</h3><table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>compassEvt</td><td></td><td>操作罗盘控件时触发。</td></tr></tbody></table><h3 id=\"vczoomcontrolsm\"><a class=\"header-anchor\" href=\"#vczoomcontrolsm\">¶</a> VcZoomControlSm</h3><p>缩放组件。</p><h3 id=\"vczoomcontrolsm-shu-xing\"><a class=\"header-anchor\" href=\"#vczoomcontrolsm-shu-xing\">¶</a> VcZoomControlSm 属性</h3><table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th><th>可选值</th></tr></thead><tbody><tr><td>position</td><td>String</td><td><code>top-right</code></td><td><code>optional</code> 指定缩放控件位置。</td><td>top-right/top-left/bottom-right/bottom-left/top/right/bottom/left</td></tr><tr><td>offset</td><td>Array</td><td><code>[0, 0]</code></td><td><code>optional</code> 指定缩放控件基于位置的偏移量。</td><td></td></tr><tr><td>tooltip</td><td>Object</td><td></td><td><code>optional</code> 指定罗盘提示信息参数。</td><td></td></tr><tr><td>autoHidden</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定是否自动隐藏放大控件。</td><td></td></tr></tbody></table><h3 id=\"vczoomcontrolsm-shi-jian\"><a class=\"header-anchor\" href=\"#vczoomcontrolsm-shi-jian\">¶</a> VcZoomControlSm 事件</h3><table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>zoomEvt</td><td></td><td>操作缩放控件时触发。</td></tr></tbody></table>", 18);

function vc_navigation_smvue_type_template_id_cf8bcd1e_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_navigation_smvue_type_template_id_cf8bcd1e_hoisted_1, [vc_navigation_smvue_type_template_id_cf8bcd1e_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [_hoisted_8]),
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_7]),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/controls/vc-navigation-sm.md?vue&type=template&id=cf8bcd1e

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/controls/vc-navigation-sm.md?vue&type=script&lang=ts

/* harmony default export */ var vc_navigation_smvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "vue-cesium-demo0": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        withCtx: _withCtx,
        createTextVNode: _createTextVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("销毁");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("加载");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("重载");

      function render(_ctx, _cache) {
        const _component_vc_navigation_sm = _resolveComponent("vc-navigation-sm");

        const _component_vc_compass_sm = _resolveComponent("vc-compass-sm");

        const _component_vc_zoom_control_sm = _resolveComponent("vc-zoom-control-sm");

        const _component_vc_viewer = _resolveComponent("vc-viewer");

        const _component_el_button = _resolveComponent("el-button");

        const _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(() => [_createVNode(_component_vc_viewer, null, {
            default: _withCtx(() => [_createVNode(_component_vc_navigation_sm, {
              onZoomEvt: _ctx.onNavigationEvt,
              onCompassEvt: _ctx.onNavigationEvt,
              ref: "navigation"
            }, null, 8, ["onZoomEvt", "onCompassEvt"]), _createVNode(_component_vc_navigation_sm, {
              position: "left",
              compassOpts: {
                autoHidden: false
              },
              zoomOpts: {
                autoHidden: false
              }
            }), _createVNode(_component_vc_compass_sm, {
              autoHidden: false,
              position: "bottom",
              offset: [200, 20]
            }), _createVNode(_component_vc_compass_sm, {
              position: "bottom",
              offset: [-200, 20]
            }), _createVNode(_component_vc_zoom_control_sm, {
              position: "bottom",
              offset: [0, 50]
            })]),
            _: 1
          }), _createVNode(_component_el_row, {
            class: "demo-toolbar"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.unload
            }, {
              default: _withCtx(() => [_hoisted_1]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.load
            }, {
              default: _withCtx(() => [_hoisted_2]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.reload
            }, {
              default: _withCtx(() => [_hoisted_3]),
              _: 1
            }, 8, ["onClick"])]),
            _: 1
          })]),
          _: 1
        }, 512)]);
      }

      const democomponentExport = {
        methods: {
          load() {
            this.$refs.navigation.load();
          },

          reload() {
            this.$refs.navigation.reload();
          },

          unload() {
            this.$refs.navigation.unload();
          },

          onNavigationEvt(e) {
            console.log(e);
          }

        }
      };
      return {
        render,
        ...democomponentExport
      };
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/controls/vc-navigation-sm.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/controls/vc-navigation-sm.md



vc_navigation_smvue_type_script_lang_ts.render = vc_navigation_smvue_type_template_id_cf8bcd1e_render

/* harmony default export */ var vc_navigation_sm = __webpack_exports__["default"] = (vc_navigation_smvue_type_script_lang_ts);

/***/ })

}]);