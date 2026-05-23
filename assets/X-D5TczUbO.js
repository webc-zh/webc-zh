import { i as e, n as t, t as r } from "./MdGithub-DvG2ura7.js";
import { E as l, F as n, H as s, I as a, R as o, T as c, U as w, V as i, _ as v, a as h, d as p, g as d, h as u, j as m, k as f, p as b, s as g, t as x, v as y, x as U, y as k, z as O } from "./Index-CXgnVAx5.js";
import "./legacy-BVCVpSRs.js";
import { t as S } from "./MdTop-bsboj8Zi.js";
var D = [
	[
		"On",
		"绑定与解绑事件监听",
		"- `On(elem, dict)`\n  - `elem`: DOM 元素。\n  - `dict`: 事件与回调对象。键为事件名，值为回调函数。回调函数格式：\n    - 参数：`e`（事件对象）。\n    - 返回值：无。\n  - 返回值：解绑函数。格式为 `() => void`。",
		"export const On = (elem, dict) => {\n  let event, func;\n  for (event in dict) {\n    func = dict[event];\n    elem.addEventListener(event, func);\n  }\n  return () => {\n    for (event in dict) {\n      func = dict[event];\n      elem.removeEventListener(event, func);\n    }\n  };\n};\n"
	],
	[
		"route",
		"路由管理与跳转",
		"- `nowUrl()`\n  - 返回值：当前 URL 路径（不含首部斜杠）。\n\n- `route(hook)`\n  - `hook`: 路由变化时执行的回调函数。格式：\n    - 参数：\n      - `url`: 字符串，新 URL 路径。\n      - `preUrl`: 字符串（可选），旧 URL 路径。\n    - 返回值：无。\n  - 返回值：取消订阅的函数，格式为 `() => void`。\n\n- `setPre(url)`\n  - `url`: 字符串，新的前一次 URL 路径。\n\n- `preUrl()`\n  - 返回值：前一次的 URL 路径。\n\n- `refresh(url)`\n  - `url`: 字符串（可选），要触发回调的 URL 路径，默认是当前 URL。\n\n- `removeSlash(url)`\n  - `url`: 字符串。\n  - 返回值：移除首部斜杠后的字符串。\n\n- `split(str, s)`\n  - `str`: 待拆分字符串。\n  - `s`: 分隔符。\n  - 返回值：包含两个元素的数组 `[前部, 后部]`。\n\n- `setUrl(url)`\n  - `url`: 目标 URL 路径。\n  - 返回值：若路径改变返回 `1`，若仅 hash 改变不返回值。\n\n- `goto(url)`\n  - `url`: 目标 URL 路径。",
		"import { On } from \"x/On.js\";\n\nexport const nowUrl = () => location.pathname.slice(1),\n  [route, setPre, preUrl, refresh, removeSlash, split, setUrl, goto] = (() => {\n    let PRE = nowUrl(),\n      HOOK = [];\n    if (location.hash) PRE += location.hash;\n\n    const HASH = \"#\",\n      route = (hook) => {\n        HOOK.push(hook);\n        hook(nowUrl());\n        return () => {\n          HOOK = HOOK.filter((f) => f !== hook);\n        };\n      },\n      setPre = (url) => {\n        PRE = url;\n      },\n      preUrl = () => PRE,\n      refresh = (url) => {\n        url = url || nowUrl();\n        for (const f of HOOK) f(url, PRE);\n        setPre(url);\n      },\n      removeSlash = (url) => (url[0] === \"/\" ? url.slice(1) : url),\n      split = (str, s) => {\n        const p = str.indexOf(s);\n        return p >= 0 ? [str.slice(0, p), str.slice(p + 1)] : [str, \"\"];\n      },\n      setUrl = (url) => {\n        url = removeSlash(url);\n        if (url !== PRE) {\n          const [path, hash] = split(url, HASH),\n            [p] = split(PRE, HASH);\n          setPre(url);\n          if (path !== p) {\n            history.pushState(null, \"\", \"/\" + url);\n            return 1;\n          }\n          if (location.hash.slice(1) !== hash) {\n            location.hash = hash;\n            return;\n          }\n        }\n        window.dispatchEvent(new HashChangeEvent(\"hashchange\"));\n      },\n      goto = (url) => {\n        if (setUrl(url)) refresh(url);\n      };\n\n    On(window, {\n      popstate: () => {\n        const url = nowUrl();\n        if (url !== split(PRE, HASH)[0]) refresh(url);\n      },\n    });\n\n    return [route, setPre, preUrl, refresh, removeSlash, split, setUrl, goto];\n  })();\n"
	],
	[
		"selfA",
		"同站链接点击校验与处理",
		"- `selfA(p, e)`\n  - `p`: `<a>` 元素。\n  - `e`: 点击事件对象。\n  - 返回值：若是同站链接，阻止默认行为并返回包含 search/hash 的相对路径，否则返回 `undefined`。",
		"// 判断A标签的href是否为当前网站的, 如果是, 返回url, 以实现不刷新跳转\nexport const selfA = (p, e) => {\n  var hash, url;\n  if (p.host === location.host) {\n    ({ hash } = p);\n    url = p.pathname.slice(1) + p.search;\n    if (hash) {\n      url += hash;\n    }\n    e.preventDefault();\n    return url;\n  }\n};\n"
	],
	[
		"dom",
		"DOM 属性与方法简写",
		"- `D`: `document` 实例。\n- `B`: `document.body` 元素。\n- `newEl(tagName)`\n  - `tagName`: 字符串，HTML 标签名。\n  - 返回值：新创建的 DOM 元素。",
		"export const D = document,\n  B = D.body,\n  newEl = D.createElement.bind(D);\n"
	],
	[
		"a",
		"拦截链接点击实现无刷新跳转",
		"无导出函数。导入时自动在 `document.body` 监听点击事件。点击同站链接时阻止默认行为并调用 `goto` 跳转，点击外链且无 `target` 属性时将其设为 `_blank`。",
		"import { goto } from \"x/route.js\";\nimport { selfA } from \"x/selfA.js\";\nimport { B } from \"x/dom.js\";\n\nB.addEventListener(\"click\", (e) => {\n  var href, name, p;\n  p = e.target;\n  while (p) {\n    ({ nodeName: name } = p);\n    if (name === \"A\") {\n      ({ href } = p);\n      if (href) {\n        href = selfA(p, e);\n        if (href !== void 0) {\n          goto(href);\n        } else if (!p.target) {\n          p.target = \"_blank\";\n        }\n      }\n      break;\n    } else if (name === \"BODY\") {\n      break;\n    }\n    p = p.parentNode;\n  }\n});\n"
	],
	[
		"rmWait",
		"移除加载等待元素",
		"无导出函数。导入时自动从 DOM 中移除 ID 为 `W` 的元素。\n\n## 设计意图 & 为什么要放置等待动画于 `pug/_.pug`\n\n在 `pug/_.pug` 中，定义了具有 ID `W` 的 `<style>` 标签，该样式利用 CSS `body:before` 伪类实现了一个无需 JS 依赖的纯 CSS 加载等待动画（旋转的圆环）。\n\n这样做的目的是：\n\n- **首屏秒开体验**：在浏览器解析 HTML 时即刻呈现加载状态，无需等待体积较大的 JS 脚本（或 Svelte 组件框架）下载、解析与执行完毕。\n- **避免白屏**：防止网络较慢或 JS 文件加载时用户看到白屏，提供更好的用户视觉反馈。\n\n## 哪儿被调用 / 移除时机\n\n当主 JS 或组件脚本加载完毕并初始化好 DOM 后，会通过动态导入或模块导入执行 `x/rmWait.js`，瞬间移除 `<style id=\"W\">`，从而销毁加载等待动画。\n\n在 `page/entry/init.js` 结尾的地方导入，移除加载中的动画。",
		"import { D } from \"x/dom.js\";\nD.getElementById(\"W\").remove();\n"
	],
	[
		"routeDelay",
		"延迟路由触发避免重复加载数据",
		"用于 Svelte，避免组件被卸载前触发路由导致重复加载数据。\n\n- `routeDelay(loadUrl)`\n  - `loadUrl`: 路由变化时的回调函数。格式：\n    - 参数：\n      - `url`: 字符串，新 URL 路径。\n      - `preUrl`: 字符串（可选），旧 URL 路径。\n    - 返回值：无。\n  - 返回值：取消路由订阅并清除定时器的函数，格式为 `() => void`。",
		"import { route } from \"x/route.js\";\n\n// 避免 onMount 之前，route 被触发，导致重复加载数据\nexport const routeDelay = (loadUrl) => {\n  let t;\n  const unbind = route((url, preUrl) => {\n    t = setTimeout(() => {\n      loadUrl(url, preUrl);\n    });\n  });\n  return () => {\n    unbind();\n    clearTimeout(t);\n  };\n};\n\nexport default routeDelay;\n"
	]
], R = U("<details class=\"svelte-w0c70t\"><summary class=\"svelte-w0c70t\"><b class=\"svelte-w0c70t\"><h2 class=\"svelte-w0c70t\"> </h2><b class=\"svelte-w0c70t\"> </b></b><b class=\"svelte-w0c70t\"><i class=\"icon-arrow svelte-w0c70t\"></i></b></summary><b class=\"svelte-w0c70t\"><!><b class=\"code-header svelte-w0c70t\">源代码<!></b><b><!></b></b></details>"), E = U("<v-scroll><b class=\"svelte-w0c70t\"><article class=\"svelte-w0c70t\"><!><b class=\"util-list svelte-w0c70t\"></b></article></b></v-scroll>", 2), H = {
	hash: "svelte-w0c70t",
	code: ":root {--gap: 24px;}\n@media (max-width: 800px) {:root {--gap: 16px;}\n}v-scroll.svelte-w0c70t {flex:1;min-width:0;min-height:0;}v-scroll.svelte-w0c70t::part(scroll) {box-sizing:border-box;overflow-x:hidden;}v-scroll.svelte-w0c70t > b:where(.svelte-w0c70t) {display:block;line-height:1.7;color:#333336;padding:var(--gap) var(--gap) var(--gap) 0;box-sizing:border-box;}\n@media (max-width: 800px) {v-scroll.svelte-w0c70t > b:where(.svelte-w0c70t) {padding:var(--gap) 0;}\n}v-scroll.svelte-w0c70t > b:where(.svelte-w0c70t) article:where(.svelte-w0c70t) {padding:0 0 var(--gap);box-sizing:border-box;max-width:800px;margin:0 auto;}v-scroll.svelte-w0c70t > b:where(.svelte-w0c70t) article:where(.svelte-w0c70t) .util-list:where(.svelte-w0c70t) {display:flex;flex-direction:column;gap:var(--gap);margin-top:var(--gap);}v-scroll.svelte-w0c70t > b:where(.svelte-w0c70t) article:where(.svelte-w0c70t) .util-list:where(.svelte-w0c70t) details:where(.svelte-w0c70t) {display:flex;flex-direction:column;border-radius:16px;border:1px solid rgba(0,0,0,0.039);background:rgba(255,255,255,0.333);backdrop-filter:blur(20px);box-shadow:0 4px 12px rgba(0,0,0,0.012), inset 0 1px 1px rgba(255,255,255,0.702);overflow:hidden;transition:all 0.25s ease;}v-scroll.svelte-w0c70t > b:where(.svelte-w0c70t) article:where(.svelte-w0c70t) .util-list:where(.svelte-w0c70t) details:where(.svelte-w0c70t):hover {background:rgba(255,255,255,0.502);border-color:rgba(0,0,0,0.063);box-shadow:0 8px 24px rgba(0,0,0,0.031);}v-scroll.svelte-w0c70t > b:where(.svelte-w0c70t) article:where(.svelte-w0c70t) .util-list:where(.svelte-w0c70t) details[open]:where(.svelte-w0c70t) .icon-arrow:where(.svelte-w0c70t) {transform:rotate(180deg);filter:opacity(80%);}v-scroll.svelte-w0c70t > b:where(.svelte-w0c70t) article:where(.svelte-w0c70t) .util-list:where(.svelte-w0c70t) details:where(.svelte-w0c70t) summary:where(.svelte-w0c70t) {display:flex;align-items:center;justify-content:space-between;padding:var(--gap);background:rgba(0,0,0,0.008);gap:var(--gap);cursor:pointer;user-select:none;outline:none;list-style:none;transition:background-color 0.25s ease;}v-scroll.svelte-w0c70t > b:where(.svelte-w0c70t) article:where(.svelte-w0c70t) .util-list:where(.svelte-w0c70t) details:where(.svelte-w0c70t) summary:where(.svelte-w0c70t)::-webkit-details-marker {display:none;}v-scroll.svelte-w0c70t > b:where(.svelte-w0c70t) article:where(.svelte-w0c70t) .util-list:where(.svelte-w0c70t) details:where(.svelte-w0c70t) summary:where(.svelte-w0c70t):hover {background:rgba(0,0,0,0.024);}v-scroll.svelte-w0c70t > b:where(.svelte-w0c70t) article:where(.svelte-w0c70t) .util-list:where(.svelte-w0c70t) details:where(.svelte-w0c70t) summary:where(.svelte-w0c70t) > b:where(.svelte-w0c70t):first-child {display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;}v-scroll.svelte-w0c70t > b:where(.svelte-w0c70t) article:where(.svelte-w0c70t) .util-list:where(.svelte-w0c70t) details:where(.svelte-w0c70t) summary:where(.svelte-w0c70t) > b:where(.svelte-w0c70t):first-child h2:where(.svelte-w0c70t) {font-size:18px;font-weight:600;color:#1d1d1f;margin:0;}v-scroll.svelte-w0c70t > b:where(.svelte-w0c70t) article:where(.svelte-w0c70t) .util-list:where(.svelte-w0c70t) details:where(.svelte-w0c70t) summary:where(.svelte-w0c70t) > b:where(.svelte-w0c70t):first-child b:where(.svelte-w0c70t) {font-size:13px;color:#86868b;font-weight:400;}v-scroll.svelte-w0c70t > b:where(.svelte-w0c70t) article:where(.svelte-w0c70t) .util-list:where(.svelte-w0c70t) details:where(.svelte-w0c70t) summary:where(.svelte-w0c70t) > b:where(.svelte-w0c70t):last-child {display:flex;align-items:center;gap:16px;flex-shrink:0;}v-scroll.svelte-w0c70t > b:where(.svelte-w0c70t) article:where(.svelte-w0c70t) .util-list:where(.svelte-w0c70t) details:where(.svelte-w0c70t) summary:where(.svelte-w0c70t) > b:where(.svelte-w0c70t):last-child .icon-arrow:where(.svelte-w0c70t) {width:16px;height:16px;background:var(--downSvg) no-repeat center/contain;filter:opacity(40%);transition:transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), filter 0.25s ease;}v-scroll.svelte-w0c70t > b:where(.svelte-w0c70t) article:where(.svelte-w0c70t) .util-list:where(.svelte-w0c70t) details:where(.svelte-w0c70t) > b:where(.svelte-w0c70t) {display:block;padding:var(--gap);border-top:1px solid rgba(0,0,0,0.02);background:rgba(255,255,255,0.133);\n  animation: svelte-w0c70t-fadeIn 0.25s ease;}v-scroll.svelte-w0c70t > b:where(.svelte-w0c70t) article:where(.svelte-w0c70t) .util-list:where(.svelte-w0c70t) details:where(.svelte-w0c70t) > b:where(.svelte-w0c70t) .code-header:where(.svelte-w0c70t) {display:flex;align-items:center;gap:6px;font-size:14px;font-weight:600;color:#1d1d1f;margin-top:var(--gap);margin-bottom:8px;}v-scroll.svelte-w0c70t > b:where(.svelte-w0c70t) article:where(.svelte-w0c70t) .util-list:where(.svelte-w0c70t) details:where(.svelte-w0c70t) > b:where(.svelte-w0c70t) .code-header:where(.svelte-w0c70t) a {width:14px;height:14px;border:none;background:none;backdrop-filter:none;box-shadow:none;color:#86868b;padding:0;transition:color 0.25s ease;}v-scroll.svelte-w0c70t > b:where(.svelte-w0c70t) article:where(.svelte-w0c70t) .util-list:where(.svelte-w0c70t) details:where(.svelte-w0c70t) > b:where(.svelte-w0c70t) .code-header:where(.svelte-w0c70t) a::before {width:14px;height:14px;}v-scroll.svelte-w0c70t > b:where(.svelte-w0c70t) article:where(.svelte-w0c70t) .util-list:where(.svelte-w0c70t) details:where(.svelte-w0c70t) > b:where(.svelte-w0c70t) .code-header:where(.svelte-w0c70t) a:hover {color:#0071e3;background:none;transform:none;box-shadow:none;}v-scroll.svelte-w0c70t > b:where(.svelte-w0c70t) article:where(.svelte-w0c70t) .util-list:where(.svelte-w0c70t) details:where(.svelte-w0c70t) > b:where(.svelte-w0c70t) pre {margin-top:0;margin-bottom:0;}\n@media (max-width: 800px) {v-scroll.svelte-w0c70t > b:where(.svelte-w0c70t) {font-size:14px;}v-scroll.svelte-w0c70t > b:where(.svelte-w0c70t) article:where(.svelte-w0c70t) {padding:0 20px var(--gap);}\n}\n@-moz-keyframes svelte-w0c70t-fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@-webkit-keyframes svelte-w0c70t-fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@-o-keyframes svelte-w0c70t-fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes svelte-w0c70t-fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}"
};
function j(h, U) {
	O(U, !1), b(h, H);
	let j = x[0], L = x[1];
	g();
	var P = E();
	p(P, 1, "svelte-w0c70t");
	var A = f(P), z = f(A), I = f(z);
	S(I, {
		get name() {
			return j;
		},
		get title() {
			return L;
		},
		prefix: !0
	});
	var M = m(I);
	u(M, 5, () => D, d, (o, h) => {
		var p = a(() => w(c(h), 4));
		let d = () => c(p)[0], u = () => c(p)[2];
		var b = R(), g = f(b), x = f(g), U = f(x), O = f(U, !0);
		s(U);
		var S = m(U), D = f(S, !0);
		s(S), s(x), i(), s(g);
		var E = m(g), H = f(E), j = (t) => {
			e(t, { get readme() {
				return u();
			} });
		};
		v(H, (e) => {
			u() && e(j);
		});
		var L = m(H), P = m(f(L));
		{
			let e = n(() => t("x/" + d() + ".js"));
			r(P, { get url() {
				return c(e);
			} });
		}
		s(L);
		var A = m(L);
		e(f(A), { get readme() {
			return `\`\`\`javascript
${c(p)[3] ?? ""}
\`\`\``;
		} }), s(A), s(E), s(b), l(() => {
			y(O, d()), y(D, c(p)[1]);
		}), k(o, b);
	}), s(M), s(z), s(A), s(P), k(h, P), o();
}
function L(e) {
	j(e, {});
}
h(j, {}, [], [], { mode: "open" }), h(L, {}, [], [], { mode: "open" });
export { L as default };
