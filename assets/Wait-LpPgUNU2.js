const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Demo-Vy_zBnIe.js","./Index-CXgnVAx5.js","./init-BY9hDDrP.js","./init-D7LZQr1R.css","./legacy-BVCVpSRs.js"])))=>i.map(i=>d[i]);
import { r as t } from "./Index-CXgnVAx5.js";
var n = [
	"## 功能\n\n- **独立加载**：元素添加 `.wait` 类显示加载图标\n- **表单遮罩**：表单添加 `.ing` 类显示遮罩与加载图标，防止重复提交\n\n## 使用\n\n```svelte\n<template lang=\"pug\">\n// 独立加载动画\nb.wait\n\n// 表单提交遮罩\nform.ing\n  input(type=\"text\")\n  button(type=\"submit\") 提交\n</template>\n\n<style lang=\"stylus\">\n@import \"com/Wait/Wait.styl\"\n</style>\n```",
	() => t(() => import("./Demo-Vy_zBnIe.js"), __vite__mapDeps([0,1,2,3,4]), import.meta.url),
	[[
		"--waitSvg",
		"/com/Wait/svg/wait.svg",
		"svg/wait.svg"
	]],
	["Wait.css"]
];
export { n as default };
