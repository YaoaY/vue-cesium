(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[40],{

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/i18n.md?vue&type=template&id=1083f21b

const _hoisted_1 = {
  class: "content element-doc"
};

const _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<h2 id=\"internationalization\"><a class=\"header-anchor\" href=\"#internationalization\">¶</a> Internationalization</h2><p>VueCesium components are using Chinese <strong>by default</strong>, if you wish you use other languages, you can get you answer by keep reading.</p><h3 id=\"global-configuration\"><a class=\"header-anchor\" href=\"#global-configuration\">¶</a> Global configuration</h3><p>VueCesium provides global configurations</p><pre><code class=\"hljs language-typescript\"><span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-title class_\">VueCesium</span> <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue-cesium&#39;</span>\n<span class=\"hljs-keyword\">import</span> enUS <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue-cesium/es/locale/lang/en-us&#39;</span>\n\n<span class=\"hljs-keyword\">const</span> app = <span class=\"hljs-title function_\">createApp</span>(<span class=\"hljs-title class_\">App</span>)\napp.<span class=\"hljs-title function_\">use</span>(<span class=\"hljs-title class_\">VueCesium</span>, {\n  <span class=\"hljs-attr\">locale</span>: enUS\n})\napp.<span class=\"hljs-title function_\">mount</span>(<span class=\"hljs-string\">&#39;#app&#39;</span>)\n</code></pre><h3 id=\"vcconfigprovider\"><a class=\"header-anchor\" href=\"#vcconfigprovider\">¶</a> VcConfigProvider</h3><p>VueCesium also provides a Vue component <a href=\"/#/en-US/component/config-provider\">VcConfigProvider</a> for globally configuring locale and other settings.</p><pre><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">template</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vc-config-provider</span> <span class=\"hljs-attr\">:locale</span>=<span class=\"hljs-string\">&quot;locale&quot;</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">app</span> /&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vc-config-provider</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">template</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span>&gt;</span><span class=\"language-javascript\">\n  <span class=\"hljs-keyword\">import</span> { defineComponent } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n  <span class=\"hljs-keyword\">import</span> { <span class=\"hljs-title class_\">VcConfigProvider</span> } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue-cesium&#39;</span>\n\n  <span class=\"hljs-keyword\">import</span> zhHans <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue-cesium/lib/locale/lang/zh-hans&#39;</span>\n\n  <span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-title function_\">defineComponent</span>({\n    <span class=\"hljs-attr\">components</span>: {\n      <span class=\"hljs-title class_\">VcConfigProvider</span>\n    },\n    <span class=\"hljs-title function_\">setup</span>(<span class=\"hljs-params\"></span>) {\n      <span class=\"hljs-keyword\">return</span> {\n        <span class=\"hljs-attr\">locale</span>: zhHans\n      }\n    }\n  })\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n</code></pre><p>Full documentation refer to: <a href=\"/#/en-US/component/vc-config-provider\">VcConfigProvider</a></p><p><a href=\"https://github.com/zouyaoji/vue-cesium/tree/dev/packages/locale/lang\">Supported Language List</a></p><ul class=\"language-list\"><li>Simplified Chinese (zh-hans)</li><li>English (en-us)</li></ul><p>If you need any other languages, <a href=\"https://github.com/zouyaoji/vue-cesium/pulls\">PR</a> is always welcomed, you only need to add a language file at <a href=\"https://github.com/zouyaoji/vue-cesium/tree/dev/packages/locale/lang\">here</a>.</p><h3 id=\"faqs\"><a class=\"header-anchor\" href=\"#faqs\">¶</a> FAQs</h3><h4 id=\"if-i-want-to-replace-the-default-language-pack-to-reduce-the-size-how-do-i-do\"><a class=\"header-anchor\" href=\"#if-i-want-to-replace-the-default-language-pack-to-reduce-the-size-how-do-i-do\">¶</a> If I want to replace the default language pack to reduce the size, how do I do?</h4><p>When the default language of your app is not <strong>Chinese</strong>, you will be going to need to import another language file, which will increase the bundle size since you have both <strong>English</strong> and <strong>Your desired language</strong> bundled, you can use the plugin <a href=\"https://webpack.js.org/plugins/normal-module-replacement-plugin/#root\">NormalModuleReplacementPlugin</a> provided by <a href=\"https://webpack.js.org\">webpack</a> to replace the default language file, so that you will only get <strong>1</strong> language file bundled. Add the code below into your <code>webpack.config.js</code> to get it work.</p><blockquote><p>webpack.config.js</p></blockquote><pre><code class=\"hljs language-typescript\">{\n  <span class=\"hljs-attr\">plugins</span>: [<span class=\"hljs-keyword\">new</span> webpack.<span class=\"hljs-title class_\">NormalModuleReplacementPlugin</span>(<span class=\"hljs-regexp\">/vue-cesium[\\/\\\\]lib[\\/\\\\]locale[\\/\\\\]lang[\\/\\\\]zh-hans/</span>, <span class=\"hljs-string\">&#39;vue-cesium/lib/locale/lang/en-us&#39;</span>)]\n}\n</code></pre>", 17);

function render(_ctx, _cache) {
  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", _hoisted_1, [_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/i18n.md?vue&type=template&id=1083f21b

// CONCATENATED MODULE: ./website/docs/en-US/i18n.md

const script = {}
script.render = render

/* harmony default export */ var i18n = __webpack_exports__["default"] = (script);

/***/ })

}]);