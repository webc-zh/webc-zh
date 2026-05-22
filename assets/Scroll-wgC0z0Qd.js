const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Demo-BRN4Pyhx.js","./Index-BgrWomkK.js","./init-1lqV4cF8.js","./init-BKyKWG2m.css","./Index-D2nR6Vig.css","./legacy-BppKfBCf.js"])))=>i.map(i=>d[i]);
import { t as l } from "./Index-BgrWomkK.js";
var n = [
	"## 功能\n\n- **双向滚动**：提供垂直（`v-scroll`）和水平（`h-scroll`）滚动容器\n- **尺寸响应**：监听内容与容器尺寸变化，自动更新滚动条尺寸与位置，无溢出时自动隐藏\n- **交互支持**：支持滚轮滚动、滑块拖拽与轨道点击定位\n- **状态显隐**：悬停或滚动时显示并加宽滑块，静止时自动隐藏\n\n## 使用\n\n在 HTML 中直接使用自定义标签：\n\n```html\n<!-- 垂直滚动 -->\n<v-scroll>\n  <div>滚动内容</div>\n</v-scroll>\n\n<!-- 水平滚动 -->\n<h-scroll>\n  <div>滚动内容</div>\n</h-scroll>\n```\n\n在 JS 中引入组件：\n\n```javascript\nimport \"com/Scroll/scroll.js\";\n```\n\n## 演示代码\n\n```svelte\n<script>\nimport \"com/Scroll/scroll.js\";\n<\/script>\n\n<template lang=\"pug\">\nv-scroll\n  b(style=\"height:1000px;\") 垂直滚动内容\n</template>\n\n<style lang=\"stylus\">\nv-scroll\n  width 300px\n  height 400px\n  border 1px solid #0000000f\n</style>\n```",
	() => l(() => import("./Demo-BRN4Pyhx.js"), __vite__mapDeps([0,1,2,3,4,5]), import.meta.url),
	[
		[
			"--cursorGrabSvg",
			"giUzPhnYmbjOG3VzqseH5g",
			"cursor/grab.svg"
		],
		[
			"--cursorScrollhSvg",
			"yhI9x3s8u28j5vUN45useQ",
			"cursor/scrollh.svg"
		],
		[
			"--cursorScrollvSvg",
			"sgoOOaKyF_KnkUoRKxWczw",
			"cursor/scrollv.svg"
		]
	],
	["Scroll.css", "Scroll.js"]
];
export { n as default };
