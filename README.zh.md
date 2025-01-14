<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-04-29 16:12:05
 * @LastEditTime: 2021-12-01 15:16:40
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\README.zh.md
-->

# VUE CESIUM

<p align="center">
  <img width="300px" src="https://zouyaoji.top/vue-cesium/favicon.png">
</p>

<p align="center">
  <a href="https://github.com/zouyaoji/vue-cesium/actions/workflows/publish-npm.yml" target="_blank">
    <img src="https://img.shields.io/github/workflow/status/zouyaoji/vue-cesium/Publish%20to%20NPM%20registry?style=plastic">
  </a>
  <a href="https://www.npmjs.com/package/vue-cesium" target="_blank">
    <img src="https://img.shields.io/npm/v/vue-cesium/next?style=plastic">
  </a>
  <a href="https://npmcharts.com/compare/vue-cesium?minimal=true" target="_blank">
    <img src="https://img.shields.io/npm/dm/vue-cesium?style=plastic">
  </a>
  <a href="https://github.com/zouyaoji/vue-cesium/blob/dev/LICENSE" target="_blank">
    <img src="https://img.shields.io/github/license/zouyaoji/vue-cesium?style=plastic">
  </a>
  <!-- <a href="https://coveralls.io/github/zouyaoji/vue-cesium?branch=dev" target="_blank">
    <img src="https://img.shields.io/coveralls/github/zouyaoji/vue-cesium?style=plastic">
  </a> -->
  <br>
</p>

<p align="center">VueCesium - 一套为 GISer 准备的基于 Vue 2.x & Vue 3.x 的 Cesium 组件库。</p>

- 💪 Vue 3.0 Composition API
- 🔥 Written in TypeScript

## 状态: Beta

该项目仍在大力开发中。欢迎加入我们，提出您的第一个 Pull Request。

## 文档

请访问 [https://zouyaoji.top/vue-cesium/#/](https://zouyaoji.top/vue-cesium/#/)

国内码云[加速镜像站点](https://zouyaoji.gitee.io/vue-cesium/)

VueCesium 支持引入官方 CesiumJS，或者其他基于 CesiumJS 的第三方平台，目前测试支持加载的有:

- [官方 CesiumJS](https://cesium.com/platform/cesiumjs/)
- [超图 SuperMap iClient3D for WebGL](http://support.supermap.com.cn:8090/webgl/web/index.html)
- [西部世界 Earth SDK](http://www.earthsdk.com/)
- [火星科技 Mars3D](http://mars3d.cn/)
- [数字视觉 DC-SDK](http://dc.dvgis.cn/#/index)

## 开始

命令

```bash
$ pnpm i
```

将安装所有依赖，并且用 `lerna bootstrap` 初始化项目。

## 预览

命令

```bash
$ pnpm website-dev
```

将启动站点供您预览已开发的组件和相关文档。

## 创建组件

命令

```bash
$ pnpm gen component-name
```

注意组件名称 `component-name` 必须用短横线写法 `kebab-case`。

## 提交模板

命令

```bash
pnpm cz
```

例如

```
[TYPE](SCOPE):DESCRIPTION#[ISSUE]
# example feat(viewer):add type 'viewer' for form usage #1234
```

## 许可

VueCesium is open source software licensed as
[MIT](https://github.com/zouyaoji/vue-cesium/blob/master/LICENSE).

## 捐赠者

[链接](https://zouyaoji.top/vue-cesium/#/zh-CN/donations)

## 贡献者

如果没有以下出色的贡献者，这个项目就不会存在

<a href="https://github.com/zouyaoji/vue-cesium/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=zouyaoji/vue-cesium" />
</a>
