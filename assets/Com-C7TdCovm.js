import { i as e } from "./MdGithub-DvG2ura7.js";
import { A as t, C as n, D as r, E as l, H as a, I as s, L as o, M as i, N as d, O as c, P as h, R as v, S as p, T as u, U as g, _ as f, a as b, b as x, c as w, d as m, f as q, g as y, h as k, i as z, j as _, k as S, l as C, m as j, n as Y, o as P, p as L, u as I, v as E, w as G, x as T, y as O, z as M } from "./Index-CXgnVAx5.js";
import { t as N } from "./MdTop-bsboj8Zi.js";
var W = T("<button> </button>"), D = {
	hash: "svelte-qgmc0f",
	code: "button.svelte-qgmc0f {display:inline-flex;align-items:center;justify-content:center;gap:4px;padding:0 10px;height:28px;box-sizing:border-box;border-radius:6px;font-size:12px;font-weight:500;border:none;background:rgba(0,113,227,0.078);color:#0071e3;cursor:pointer;transition:all 0.2s cubic-bezier(0.4, 0, 0.2, 1);outline:none;user-select:none;}button.svelte-qgmc0f::before {content:'';width:12px;height:12px;background:var(--copySvg) no-repeat center/contain;filter:invert(30%) sepia(87%) saturate(1915%) hue-rotate(192deg) brightness(97%) contrast(102%);transition:filter 0.2s ease;}button.svelte-qgmc0f:hover {background:rgba(0,113,227,0.149);}button.svelte-qgmc0f:active {transform:scale(0.97);background:rgba(0,113,227,0.22);}button.copied.svelte-qgmc0f {background:#34c759;color:#fff;}button.copied.svelte-qgmc0f::before {background-image:var(--okSvg);filter:invert(100%);}"
};
function J(e, t) {
	M(t, !0), L(e, D);
	let r = P(t, "text", 7, ""), s = h(!1);
	var i = W(), c = S(i, !0);
	return a(i), l(() => {
		m(i, 1, q(u(s) ? "copied" : ""), "svelte-qgmc0f"), E(c, u(s) ? "已复制" : "复制");
	}), n("click", i, () => {
		navigator.clipboard.writeText(r()), d(s, !0), setTimeout(() => {
			d(s, !1);
		}, 1500);
	}), O(e, i), v({
		get text() {
			return r();
		},
		set text($$value = "") {
			r($$value), o();
		}
	});
}
p(["click"]), b(J, { text: {} }, [], [], { mode: "open" });
var X = T("<tr class=\"svelte-quf4hl\"><td class=\"svelte-quf4hl\"><b class=\"svelte-quf4hl\"><code class=\"svelte-quf4hl\"> </code><!></b></td><td class=\"svelte-quf4hl\"><b class=\"svelte-quf4hl\"><img class=\"svelte-quf4hl\"/></b></td><td class=\"svelte-quf4hl\"><code class=\"svelte-quf4hl\"> </code></td></tr>"), $ = T("<article class=\"LG svelte-quf4hl\"><h2 class=\"svelte-quf4hl\">样式变量</h2><table class=\"svelte-quf4hl\"><thead><tr class=\"svelte-quf4hl\"><th class=\"svelte-quf4hl\">变量名</th><th class=\"svelte-quf4hl\">预览</th><th class=\"svelte-quf4hl\">资源文件</th></tr></thead><tbody></tbody></table></article>"), A = {
	hash: "svelte-quf4hl",
	code: ":root {--gap: 24px;}\n@media (max-width: 800px) {:root {--gap: 16px;}\n}article.svelte-quf4hl {margin-top:var(--gap);border-radius:24px;padding:var(--gap);box-sizing:border-box;line-height:normal;}article.svelte-quf4hl h2:where(.svelte-quf4hl) {font-size:15px;font-weight:600;color:#1d1d1f;margin:0 0 16px;}article.svelte-quf4hl table:where(.svelte-quf4hl) {width:100%;border-collapse:collapse;text-align:left;font-size:13px;}article.svelte-quf4hl table:where(.svelte-quf4hl) tr:where(.svelte-quf4hl) {border-bottom:1px solid rgba(0,0,0,0.039);}article.svelte-quf4hl table:where(.svelte-quf4hl) tr:where(.svelte-quf4hl):last-child {border-bottom:0;}article.svelte-quf4hl table:where(.svelte-quf4hl) th:where(.svelte-quf4hl),\narticle.svelte-quf4hl table:where(.svelte-quf4hl) td:where(.svelte-quf4hl) {padding:12px 16px;vertical-align:middle;}article.svelte-quf4hl table:where(.svelte-quf4hl) th:where(.svelte-quf4hl):first-child,\narticle.svelte-quf4hl table:where(.svelte-quf4hl) td:where(.svelte-quf4hl):first-child {padding-left:0;}article.svelte-quf4hl table:where(.svelte-quf4hl) th:where(.svelte-quf4hl):last-child,\narticle.svelte-quf4hl table:where(.svelte-quf4hl) td:where(.svelte-quf4hl):last-child {padding-right:0;}article.svelte-quf4hl table:where(.svelte-quf4hl) th:where(.svelte-quf4hl) {font-weight:600;color:#86868b;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;}article.svelte-quf4hl table:where(.svelte-quf4hl) th:where(.svelte-quf4hl):nth-child(2) {text-align:center;}article.svelte-quf4hl table:where(.svelte-quf4hl) td:where(.svelte-quf4hl):nth-child(1) {font-weight:500;color:#0071e3;width:45%;}article.svelte-quf4hl table:where(.svelte-quf4hl) td:where(.svelte-quf4hl):nth-child(1) b:where(.svelte-quf4hl) {display:flex;align-items:center;gap:8px;white-space:nowrap;}article.svelte-quf4hl table:where(.svelte-quf4hl) td:where(.svelte-quf4hl):nth-child(1) b:where(.svelte-quf4hl) code:where(.svelte-quf4hl) {font-size:12px;color:#0071e3;padding:3px 8px;border-radius:6px;white-space:nowrap;}article.svelte-quf4hl table:where(.svelte-quf4hl) td:where(.svelte-quf4hl):nth-child(2) {width:20%;text-align:center;}article.svelte-quf4hl table:where(.svelte-quf4hl) td:where(.svelte-quf4hl):nth-child(2) b:where(.svelte-quf4hl) {display:inline-flex;align-items:center;justify-content:center;width:48px;height:48px;border-radius:8px;border:1px solid rgba(0,0,0,0.031);background-image:linear-gradient(45deg, #f0f0f0 25%, transparent 25%, transparent 75%, #f0f0f0 75%, #f0f0f0), linear-gradient(45deg, #f0f0f0 25%, #fff 25%, #fff 75%, #f0f0f0 75%, #f0f0f0);background-size:12px 12px;background-position:0 0, 6px 6px;box-shadow:0 2px 8px rgba(0,0,0,0.039);overflow:hidden;user-select:none;}article.svelte-quf4hl table:where(.svelte-quf4hl) td:where(.svelte-quf4hl):nth-child(2) b:where(.svelte-quf4hl) img:where(.svelte-quf4hl) {max-width:32px;max-height:32px;object-fit:contain;transition:transform 0.2s ease;user-select:none;pointer-events:none;}article.svelte-quf4hl table:where(.svelte-quf4hl) td:where(.svelte-quf4hl):nth-child(2) b:where(.svelte-quf4hl):hover img:where(.svelte-quf4hl) {transform:scale(1.15);}article.svelte-quf4hl table:where(.svelte-quf4hl) td:where(.svelte-quf4hl):nth-child(3) {width:35%;}article.svelte-quf4hl table:where(.svelte-quf4hl) td:where(.svelte-quf4hl):nth-child(3) code:where(.svelte-quf4hl) {font-size:12px;color:#515154;padding:3px 8px;border-radius:6px;border:1px solid rgba(0,0,0,0.012);white-space:nowrap;}\n@media (max-width: 800px) {article.svelte-quf4hl {border-radius:16px;padding:var(--gap) 20px;overflow-x:auto;}article.svelte-quf4hl table:where(.svelte-quf4hl) {font-size:12px;}article.svelte-quf4hl table:where(.svelte-quf4hl) th:where(.svelte-quf4hl),\n  article.svelte-quf4hl table:where(.svelte-quf4hl) td:where(.svelte-quf4hl) {padding:8px 12px;}article.svelte-quf4hl table:where(.svelte-quf4hl) th:where(.svelte-quf4hl):first-child,\n  article.svelte-quf4hl table:where(.svelte-quf4hl) td:where(.svelte-quf4hl):first-child {padding-left:0;}article.svelte-quf4hl table:where(.svelte-quf4hl) th:where(.svelte-quf4hl):last-child,\n  article.svelte-quf4hl table:where(.svelte-quf4hl) td:where(.svelte-quf4hl):last-child {padding-right:0;}\n}"
};
function F(e, n) {
	M(n, !0), L(e, A);
	let r = P(n, "svgs", 23, () => []);
	var i = x(), d = t(i), c = (e) => {
		var t = $(), n = _(S(t)), o = _(S(n));
		k(o, 21, r, y, (e, t) => {
			var n = s(() => g(u(t), 3));
			let r = () => u(n)[0];
			var o = X(), i = S(o), d = S(i), c = S(d), h = S(c, !0);
			a(c), J(_(c), { get text() {
				return r();
			} }), a(d), a(i);
			var v = _(i), p = S(v), f = S(p);
			a(p), a(v);
			var b = _(v), x = S(b), w = S(x, !0);
			a(x), a(b), a(o), l(() => {
				E(h, r()), C(f, "src", u(n)[1]), C(f, "alt", r()), E(w, u(n)[2]);
			}), O(e, o);
		}), a(o), a(n), a(t), O(e, t);
	};
	return f(d, (e) => {
		r().length > 0 && e(c);
	}), O(e, i), v({
		get svgs() {
			return r();
		},
		set svgs($$value = []) {
			r($$value), o();
		}
	});
}
b(F, { svgs: {} }, [], [], { mode: "open" });
var H = T("<v-scroll><b class=\"svelte-1dvi356\"><article class=\"LG svelte-1dvi356\"><!><!></article><!></b></v-scroll>", 2), R = {
	hash: "svelte-1dvi356",
	code: ":root {--gap: 24px;}\n@media (max-width: 800px) {:root {--gap: 16px;}\n}v-scroll.svelte-1dvi356 {flex:1;min-width:0;min-height:0;}v-scroll.svelte-1dvi356::part(scroll) {box-sizing:border-box;overflow-x:hidden;}v-scroll.svelte-1dvi356 > b:where(.svelte-1dvi356) {display:flex;flex-direction:column;gap:var(--gap);line-height:1.7;color:#333336;padding:var(--gap) 0;box-sizing:border-box;}\n@media (max-width: 1100px) {v-scroll.svelte-1dvi356 > b:where(.svelte-1dvi356) {padding:var(--gap) var(--gap) var(--gap) 0;}\n}\n@media (max-width: 800px) {v-scroll.svelte-1dvi356 > b:where(.svelte-1dvi356) {padding:var(--gap) 0;}\n}v-scroll.svelte-1dvi356 > b:where(.svelte-1dvi356) article:where(.svelte-1dvi356) {border-radius:24px;padding:var(--gap);box-sizing:border-box;}\n@media (max-width: 800px) {v-scroll.svelte-1dvi356 > b:where(.svelte-1dvi356) {font-size:14px;}v-scroll.svelte-1dvi356 > b:where(.svelte-1dvi356) article:where(.svelte-1dvi356) {padding-top:0;border-radius:16px;}\n}"
};
function U(t, n) {
	M(n, !0), L(t, R);
	let r = P(n, "name", 7, ""), l = P(n, "title", 7, ""), s = P(n, "readme", 7), i = P(n, "svgs", 23, () => []);
	var d = H();
	m(d, 1, "svelte-1dvi356");
	var c = S(d), h = S(c), p = S(h);
	return N(p, {
		get name() {
			return r();
		},
		get title() {
			return l();
		}
	}), e(_(p), { get readme() {
		return s();
	} }), a(h), F(_(h), { get svgs() {
		return i();
	} }), a(c), a(d), O(t, d), v({
		get name() {
			return r();
		},
		set name($$value = "") {
			r($$value), o();
		},
		get title() {
			return l();
		},
		set title($$value = "") {
			l($$value), o();
		},
		get readme() {
			return s();
		},
		set readme($$value) {
			s($$value), o();
		},
		get svgs() {
			return i();
		},
		set svgs($$value = []) {
			i($$value), o();
		}
	});
}
b(U, {
	name: {},
	title: {},
	readme: {},
	svgs: {}
}, [], [], { mode: "open" });
var B = {
	jsdelivr: (e, t) => "//cdn.jsdelivr.net/npm/" + e + "@" + t,
	npmmirror: (e, t) => "//registry.npmmirror.com/" + e + "/" + t + "/files"
}, K = "webc.site", Q = T("<b class=\"code svelte-cb5h7f\" role=\"button\" tabindex=\"0\"><b class=\"svelte-cb5h7f\"><!></b><pre class=\"svelte-cb5h7f\"> </pre></b>"), V = {
	hash: "svelte-cb5h7f",
	code: ":root {--gap: 24px;}\n@media (max-width: 800px) {:root {--gap: 16px;}\n}.code.svelte-cb5h7f {position:relative;display:flex;align-items:center;width:100%;cursor:pointer;background:transparent;border:none;padding:0;text-align:left;}.code.svelte-cb5h7f pre:where(.svelte-cb5h7f) {flex:1;min-width:0;margin:0;overflow-x:auto;font-size:12px;color:#1d1d1f;white-space:pre-wrap;word-break:break-all;}.code.svelte-cb5h7f > b:where(.svelte-cb5h7f) {display:flex;align-items:center;max-width:0;opacity:0;pointer-events:none;overflow:hidden;white-space:nowrap;transform:scale(0.9) translateX(-12px);transition:max-width 0.25s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s ease, margin-right 0.25s ease, transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);}.code.svelte-cb5h7f:hover > b:where(.svelte-cb5h7f) {max-width:90px;margin-right:8px;opacity:1;pointer-events:auto;transform:scale(1) translateX(0);}\n@media (max-width: 800px) {.code.svelte-cb5h7f pre:where(.svelte-cb5h7f) {font-size:11px;}\n}"
};
function Z(e, t) {
	M(t, !0), L(e, V);
	let r = P(t, "text", 7, ""), s = h(void 0), i = (e) => {
		e.target.closest("button") || u(s).querySelector("button").click();
	};
	var c = Q(), p = S(c);
	J(S(p), { get text() {
		return r();
	} }), a(p), w(p, (e) => d(s, e), () => u(s));
	var g = _(p), f = S(g, !0);
	return a(g), a(c), l(() => E(f, r())), n("click", c, i), n("keydown", c, (e) => {
		[13, 32].includes(e.keyCode) && i(e);
	}), O(e, c), v({
		get text() {
			return r();
		},
		set text($$value = "") {
			r($$value), o();
		}
	});
}
p(["click", "keydown"]), b(Z, { text: {} }, [], [], { mode: "open" });
var ee = [["Scroll", [
	"<section class=\"demo-section\">\n  <h2>水平虚拟滚动条</h2>\n  <div class=\"scroll-wrap h-wrap\">\n    <h-scroll>\n      <b></b>\n    </h-scroll>\n  </div>\n\n  <h2>垂直虚拟滚动条</h2>\n  <div class=\"scroll-wrap v-wrap\">\n    <v-scroll>\n      <b></b>\n    </v-scroll>\n  </div>\n</section>\n",
	"const cards_count = 12,\n  h_scroll_container = document.querySelector(\"h-scroll > b\"),\n  v_scroll_container = document.querySelector(\"v-scroll > b\");\n\nif (h_scroll_container) {\n  for (let i = 0; i < cards_count; ++i) {\n    const card = document.createElement(\"b\");\n    card.style.setProperty(\"--theme-hue\", (i * 45) % 360);\n    card.style.setProperty(\"--theme-hue-next\", (i * 45 + 25) % 360);\n    h_scroll_container.appendChild(card);\n  }\n}\n\nif (v_scroll_container) {\n  for (let i = 0; i < cards_count; ++i) {\n    const card = document.createElement(\"b\");\n    card.style.setProperty(\"--theme-hue\", (i * 35) % 360);\n    card.style.setProperty(\"--theme-hue-next\", (i * 35 + 15) % 360);\n    v_scroll_container.appendChild(card);\n  }\n}\n",
	".demo-section {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  width: 100%;\n  max-width: 640px;\n  margin: 0 auto;\n  padding: 24px;\n  box-sizing: border-box;\n\n  h2 {\n    font-size: 13px;\n    font-weight: 600;\n    color: #1d1d1f;\n    letter-spacing: -0.01em;\n    margin-top: 16px;\n    margin-bottom: 12px;\n    display: flex;\n    align-items: center;\n\n    &:first-of-type {\n      margin-top: 0;\n    }\n  }\n\n  .scroll-wrap {\n    width: 100%;\n    max-width: 100%;\n    display: block;\n    background: #ffffff66;\n    border: 1px solid #0000000d;\n    border-radius: 16px;\n    box-shadow: inset 0 1px 0 #ffffff99;\n    overflow: hidden;\n  }\n\n  .v-wrap {\n    height: 300px;\n    max-height: 100%;\n    margin-bottom: 24px;\n  }\n\n  .h-wrap {\n    height: 160px;\n    max-height: 100%;\n  }\n\n  v-scroll,\n  h-scroll {\n    width: 100%;\n    height: 100%;\n  }\n\n  v-scroll {\n    & > b {\n      width: 100%;\n      padding: 20px;\n      box-sizing: border-box;\n      display: flex;\n      flex-direction: column;\n      gap: 8px;\n\n      & > b {\n        height: 64px;\n        background: linear-gradient(\n          135deg,\n          hsl(var(--theme-hue), 35%, 98%) 0,\n          hsl(var(--theme-hue-next), 30%, 96%) 100%\n        );\n        border: 1px solid hsl(var(--theme-hue), 25%, 91%);\n        border-radius: 16px;\n        box-shadow: 0 2px 8px #00000003;\n        transition: all 0.2s ease;\n\n        &:hover {\n          transform: translateY(-1px);\n          box-shadow: 0 4px 12px #00000008;\n        }\n      }\n    }\n  }\n\n  h-scroll {\n    & > b {\n      padding: 20px;\n      box-sizing: border-box;\n      display: flex;\n      align-items: center;\n      height: 100%;\n      gap: 8px;\n\n      & > b {\n        width: 140px;\n        height: 100%;\n        border-radius: 16px;\n        flex-shrink: 0;\n        box-sizing: border-box;\n        box-shadow: 0 2px 8px #00000003;\n        background: linear-gradient(\n          135deg,\n          hsl(var(--theme-hue), 35%, 96%) 0,\n          hsl(var(--theme-hue-next), 30%, 93%) 100%\n        );\n        border: 1px solid hsl(var(--theme-hue), 25%, 88%);\n        transition: all 0.2s ease;\n\n        &:hover {\n          transform: translateY(-2px);\n          box-shadow: 0 4px 16px #0000000a;\n        }\n      }\n    }\n  }\n}\n"
]], ["Wait", [
	"<section class=\"demo-section\">\n  <header>独立加载 (.wait)</header>\n  <div class=\"card-container\">\n    <b class=\"wait\"></b>\n  </div>\n\n  <header>表单提交加载遮罩 (.ing)</header>\n  <div class=\"card-container\">\n    <form class=\"demo-form ing\">\n      <h3>账户登录</h3>\n      <div class=\"form-group\">\n        <label>\n          <span>用户名</span>\n          <input type=\"text\" placeholder=\"输入用户名\" required />\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span>密码</span>\n          <input type=\"password\" placeholder=\"输入密码\" required />\n        </label>\n      </div>\n      <button type=\"submit\">登录</button>\n    </form>\n  </div>\n</section>\n",
	"const form = document.querySelector(\".demo-form\");\nif (form) {\n  form.addEventListener(\"submit\", (e) => {\n    e.preventDefault();\n    form.classList.add(\"ing\");\n    setTimeout(() => {\n      form.classList.remove(\"ing\");\n    }, 2000);\n  });\n}\n",
	".demo-section {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  margin: 0 auto;\n  padding: 24px;\n  box-sizing: border-box;\n\n  header {\n    font-size: 14px;\n    font-weight: 600;\n    color: #1d1d1f;\n    margin-top: 8px;\n  }\n\n  .card-container {\n    background: #ffffff;\n    border: 1px solid #0000000a;\n    border-radius: 16px;\n    padding: 24px;\n    box-shadow:\n      0 4px 20px #00000005,\n      inset 0 1px 0 #ffffff;\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n    box-sizing: border-box;\n\n    &:first-of-type {\n      justify-content: center;\n      align-items: center;\n    }\n  }\n\n  .demo-form {\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n\n    h3 {\n      margin: 0;\n      font-size: 18px;\n      font-weight: 600;\n      color: #1d1d1f;\n    }\n\n    .form-group {\n      label {\n        display: flex;\n        flex-direction: column;\n        gap: 6px;\n        font-size: 12px;\n        font-weight: 500;\n        color: #86868b;\n\n        span {\n          font-weight: 500;\n        }\n      }\n    }\n\n    input {\n      padding: 10px 14px;\n      border-radius: 10px;\n      border: 1px solid #0000000f;\n      background: #f5f5f7;\n      font-size: 14px;\n      outline: none;\n      transition: all 0.2s ease;\n\n      &:focus {\n        border-color: #0071e3;\n        background: #ffffff;\n        box-shadow: 0 0 0 4px #0071e31a;\n      }\n    }\n\n    button {\n      margin-top: 8px;\n      padding: 12px;\n      border-radius: 10px;\n      background: #0071e3;\n      color: #ffffff;\n      font-weight: 600;\n      font-size: 14px;\n      border: none;\n      transition: all 0.2s ease;\n      cursor: pointer;\n\n      &:hover:not(:disabled) {\n        background: #0077ed;\n      }\n\n      &:active:not(:disabled) {\n        transform: scale(0.98);\n      }\n\n      &:disabled {\n        background: #e5e5ea;\n        color: #aeaeae;\n        cursor: not-allowed;\n      }\n    }\n  }\n}\n"
]]], et = T("<button type=\"button\"> </button>"), en = T("<nav></nav>"), er = {
	hash: "svelte-1vwq39h",
	code: "nav.svelte-1vwq39h {position:absolute;top:100%;margin-top:6px;width:var(--width);display:flex;flex-direction:column;gap:6px;z-index:999;\n  animation: svelte-1vwq39h-scale-in 0.15s cubic-bezier(0.16, 1, 0.3, 1);}nav.left.svelte-1vwq39h {left:0;}nav.right.svelte-1vwq39h {right:0;}nav.svelte-1vwq39h button:where(.svelte-1vwq39h) {border:1px solid rgba(0,0,0,0.078);background:rgba(255,255,255,0.6);backdrop-filter:blur(20px) saturate(190%);width:100%;height:32px;padding:0 14px;border-radius:16px;display:inline-flex;align-items:center;justify-content:flex-start;font-size:12px;font-weight:500;color:#1d1d1f;cursor:pointer;box-shadow:0 4px 12px rgba(0,0,0,0.051);transition:all 0.2s cubic-bezier(0.4, 0, 0.2, 1);white-space:nowrap;box-sizing:border-box;}nav.svelte-1vwq39h button:where(.svelte-1vwq39h):hover {background:rgba(255,255,255,0.949);border-color:rgba(0,0,0,0.149);box-shadow:0 6px 16px rgba(0,0,0,0.078);transform:translateY(-1px);color:#0071e3;}nav.svelte-1vwq39h button.selected:where(.svelte-1vwq39h) {color:#0071e3;font-weight:600;background:rgba(255,255,255,0.949);border-color:rgba(0,113,227,0.4);box-shadow:0 6px 16px rgba(0,113,227,0.102);}nav.svelte-1vwq39h button.selected:where(.svelte-1vwq39h):hover {background:#fff;border-color:#0071e3;}\n@-moz-keyframes svelte-1vwq39h-scale-in {\n  0% {\n    opacity: 0;\n    transform: scale(0.96) translateY(-4px);\n    pointer-events: none;\n  }\n  99% {\n    pointer-events: none;\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n    pointer-events: auto;\n  }\n}\n@-webkit-keyframes svelte-1vwq39h-scale-in {\n  0% {\n    opacity: 0;\n    transform: scale(0.96) translateY(-4px);\n    pointer-events: none;\n  }\n  99% {\n    pointer-events: none;\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n    pointer-events: auto;\n  }\n}\n@-o-keyframes svelte-1vwq39h-scale-in {\n  0% {\n    opacity: 0;\n    transform: scale(0.96) translateY(-4px);\n    pointer-events: none;\n  }\n  99% {\n    pointer-events: none;\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n    pointer-events: auto;\n  }\n}\n@keyframes svelte-1vwq39h-scale-in {\n  0% {\n    opacity: 0;\n    transform: scale(0.96) translateY(-4px);\n    pointer-events: none;\n  }\n  99% {\n    pointer-events: none;\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n    pointer-events: auto;\n  }\n}"
};
function el(e, t) {
	M(t, !0), L(e, er);
	let r = P(t, "options", 23, () => []), i = P(t, "value", 7), d = P(t, "align", 7, "left"), c = P(t, "width", 7, "100%"), h = P(t, "onSelect", 7), p = s(() => r().map((e) => "string" == typeof e ? {
		label: e.split(" ")[0],
		value: e
	} : e));
	var g = en();
	return k(g, 21, () => u(p), y, (e, t) => {
		var r = et(), s = S(r, !0);
		a(r), l(() => {
			m(r, 1, q(i() == u(t).value ? "selected" : ""), "svelte-1vwq39h"), E(s, u(t).label);
		}), n("click", r, (e) => h()?.(u(t).value, e)), O(e, r);
	}), a(g), l(() => {
		m(g, 1, q(d()), "svelte-1vwq39h"), I(g, `--width:${c() ?? ""}`);
	}), O(e, g), v({
		get options() {
			return r();
		},
		set options($$value = []) {
			r($$value), o();
		},
		get value() {
			return i();
		},
		set value($$value) {
			i($$value), o();
		},
		get align() {
			return d();
		},
		set align($$value = "left") {
			d($$value), o();
		},
		get width() {
			return c();
		},
		set width($$value = "100%") {
			c($$value), o();
		},
		get onSelect() {
			return h();
		},
		set onSelect($$value) {
			h($$value), o();
		}
	});
}
p(["click"]), b(el, {
	options: {},
	value: {},
	align: {},
	width: {},
	onSelect: {}
}, [], [], { mode: "open" });
var ea = T("<b class=\"svelte-10il9qy\"><button type=\"button\" aria-label=\"在线调试\" class=\"svelte-10il9qy\">在线调试</button><!></b>"), es = {
	hash: "svelte-10il9qy",
	code: "b.svelte-10il9qy {position:relative;display:inline-block;}b.svelte-10il9qy > button:where(.svelte-10il9qy) {display:inline-flex;align-items:center;justify-content:center;background:transparent;color:#0071e3;font-size:12px;font-weight:500;border:none;border-bottom:1px solid currentColor;padding:2px 0;cursor:pointer;transition:all 0.2s ease;outline:none;user-select:none;}b.svelte-10il9qy > button:where(.svelte-10il9qy):hover {color:#ff4500;}b.svelte-10il9qy > button:where(.svelte-10il9qy):active {opacity:0.7;}"
};
function eo(e, t) {
	M(t, !0), L(e, es);
	let r = P(t, "name", 7), l = P(t, "urls_text", 7), s = h(!1), i = h(void 0), p = (e, t) => {
		let n = document.createElement("form");
		for (let [r, l] of (n.method = "POST", n.action = e, n.target = "_blank", Object.entries(t))) {
			let e = document.createElement("input");
			e.type = "hidden", e.name = r, e.value = l, n.appendChild(e);
		}
		document.body.appendChild(n), n.submit(), document.body.removeChild(n);
	}, g = (e) => {
		d(s, !1);
		let t = (() => {
			let e = ee.find(([e]) => e == r());
			if (!e) return;
			let [t, [n, a, s]] = e, o = Y.find(([e]) => e == r()), i = o ? o[1] : "";
			return {
				html: l() + "\n" + n,
				js: a,
				css: s,
				title: r() + " - " + K,
				description: i
			};
		})();
		t && {
			jsfiddle: () => p("https://jsfiddle.net/api/post/library/pure/", t),
			codepen: () => p("https://codepen.io/pen/define/", { data: JSON.stringify(t) })
		}[e]?.();
	};
	var b = ea();
	G("click", c, (e) => {
		u(s) && u(i) && !u(i).contains(e.target) && d(s, !1);
	});
	var x = S(b), m = _(x), q = (e) => {
		el(e, {
			options: [{
				label: "JSFiddle",
				value: "jsfiddle"
			}, {
				label: "CodePen",
				value: "codepen"
			}],
			align: "right",
			width: "90px",
			onSelect: g
		});
	};
	return f(m, (e) => {
		u(s) && e(q);
	}), a(b), w(b, (e) => d(i, e), () => u(i)), n("click", x, (e) => {
		e.stopPropagation(), d(s, !u(s));
	}), O(e, b), v({
		get name() {
			return r();
		},
		set name($$value) {
			r($$value), o();
		},
		get urls_text() {
			return l();
		},
		set urls_text($$value) {
			l($$value), o();
		}
	});
}
p(["click"]), b(eo, {
	name: {},
	urls_text: {}
}, [], [], { mode: "open" });
var ei = T("<i class=\"svelte-1wo880g\"> </i>"), ed = T("<i></i>"), ec = T("<b class=\"svelte-1wo880g\"><button type=\"button\"><b class=\"svelte-1wo880g\"> <!></b><!></button><!></b>"), eh = {
	hash: "svelte-1wo880g",
	code: "b.svelte-1wo880g {position:relative;display:inline-block;}b.svelte-1wo880g button:where(.svelte-1wo880g) {border:1px solid rgba(0,0,0,0.078);background:transparent;padding:0 14px;height:30px;display:inline-flex;align-items:center;font-size:12px;font-weight:300;color:#86868b;border-radius:15px;cursor:pointer;transition:all 0.2s cubic-bezier(0.4, 0, 0.2, 1);outline:none;user-select:none;box-sizing:border-box;}b.svelte-1wo880g button:where(.svelte-1wo880g) b:where(.svelte-1wo880g) {display:inline-flex;align-items:center;white-space:nowrap;}b.svelte-1wo880g button:where(.svelte-1wo880g) b:where(.svelte-1wo880g) i:where(.svelte-1wo880g) {font-style:normal;font-weight:500;color:rgba(255,255,255,0.8);margin-left:4px;}b.svelte-1wo880g button:where(.svelte-1wo880g):hover {color:#1d1d1f;border-color:rgba(0,0,0,0.161);background:rgba(0,0,0,0.02);}b.svelte-1wo880g button.active:where(.svelte-1wo880g) {background:transparent;border-color:#86868b;color:#424245;box-shadow:none;padding-right:22px;}b.svelte-1wo880g button.active:where(.svelte-1wo880g):hover {background:transparent;border-color:#86868b;}b.svelte-1wo880g button.active:where(.svelte-1wo880g) b:where(.svelte-1wo880g) i:where(.svelte-1wo880g) {color:#424245;}b.svelte-1wo880g button.active.open:where(.svelte-1wo880g) b:where(.svelte-1wo880g) i:where(.svelte-1wo880g) {color:#0071e3;}b.svelte-1wo880g button:where(.svelte-1wo880g) .arrow:where(.svelte-1wo880g) {position:absolute;right:8px;top:50%;transform:translateY(-50%);width:12px;height:12px;background-color:currentColor;mask-image:var(--downSvg);mask-size:contain;mask-repeat:no-repeat;mask-position:center;color:#86868b;pointer-events:none;transition:transform 0.25s ease, color 0.2s ease;}b.svelte-1wo880g button:where(.svelte-1wo880g) .arrow.open:where(.svelte-1wo880g) {transform:translateY(-50%) rotate(180deg);}b.svelte-1wo880g button:where(.svelte-1wo880g):hover .arrow:where(.svelte-1wo880g) {color:#1d1d1f;}"
};
function ev(e, t) {
	M(t, !0), L(e, eh);
	let r = P(t, "label", 7), i = P(t, "mode", 7), p = P(t, "active", 15), g = P(t, "value", 15), b = P(t, "options", 23, () => []), x = P(t, "onChange", 7), q = h(!1), y = h(void 0), k = s(() => u(q) && p() == i()), z = (e, t) => {
		t.stopPropagation(), g(e), d(q, !1), x()?.(e);
	};
	var C = ec();
	G("click", c, (e) => {
		u(q) && u(y) && !u(y).contains(e.target) && d(q, !1);
	});
	var j = S(C), Y = S(j), I = S(Y, !0), T = _(I), N = (e) => {
		var t = ei(), n = S(t, !0);
		a(t), l((e) => E(n, e), [() => g()?.split(" ")[0]]), O(e, t);
	};
	f(T, (e) => {
		p() == i() && e(N);
	}), a(Y);
	var W = _(Y), D = (e) => {
		var t = ed();
		l(() => m(t, 1, `arrow ${u(q) ? "open" : ""}`, "svelte-1wo880g")), O(e, t);
	};
	f(W, (e) => {
		p() == i() && e(D);
	}), a(j);
	var J = _(j), X = (e) => {
		el(e, {
			get options() {
				return b();
			},
			get value() {
				return g();
			},
			onSelect: z
		});
	};
	return f(J, (e) => {
		u(k) && e(X);
	}), a(C), w(C, (e) => d(y, e), () => u(y)), l(() => {
		m(j, 1, (p() == i() ? "active " : "") + (u(k) ? "open" : ""), "svelte-1wo880g"), E(I, r());
	}), n("click", j, (e) => {
		e.stopPropagation(), p() != i() ? (p(i()), d(q, !0), x()?.(g())) : d(q, !u(q));
	}), O(e, C), v({
		get label() {
			return r();
		},
		set label($$value) {
			r($$value), o();
		},
		get mode() {
			return i();
		},
		set mode($$value) {
			i($$value), o();
		},
		get active() {
			return p();
		},
		set active($$value) {
			p($$value), o();
		},
		get value() {
			return g();
		},
		set value($$value) {
			g($$value), o();
		},
		get options() {
			return b();
		},
		set options($$value = []) {
			b($$value), o();
		},
		get onChange() {
			return x();
		},
		set onChange($$value) {
			x($$value), o();
		}
	});
}
p(["click"]), b(ev, {
	label: {},
	mode: {},
	active: {},
	value: {},
	options: {},
	onChange: {}
}, [], [], { mode: "open" });
var ep = T("<nav class=\"svelte-1hz2iwf\"><!><!></nav>"), eu = {
	hash: "svelte-1hz2iwf",
	code: "nav.svelte-1hz2iwf {display:inline-flex;align-items:center;margin-left:-4px;gap:8px;}"
};
function eg(e, t) {
	M(t, !0), L(e, eu);
	let n = P(t, "active", 15), r = P(t, "cdn", 15), l = P(t, "cdn_keys", 23, () => []), s = P(t, "runner", 15), i = P(t, "runner_keys", 23, () => []), d = P(t, "onChange", 7);
	var c = ep(), h = S(c);
	return ev(h, {
		label: "在线引用",
		mode: 0,
		get options() {
			return l();
		},
		onChange: (e) => d()?.(0, e),
		get active() {
			return n();
		},
		set active($$value) {
			n($$value);
		},
		get value() {
			return r();
		},
		set value($$value) {
			r($$value);
		}
	}), ev(_(h), {
		label: "打包构建",
		mode: 1,
		get options() {
			return i();
		},
		onChange: (e) => d()?.(1, e),
		get active() {
			return n();
		},
		set active($$value) {
			n($$value);
		},
		get value() {
			return s();
		},
		set value($$value) {
			s($$value);
		}
	}), a(c), O(e, c), v({
		get active() {
			return n();
		},
		set active($$value) {
			n($$value), o();
		},
		get cdn() {
			return r();
		},
		set cdn($$value) {
			r($$value), o();
		},
		get cdn_keys() {
			return l();
		},
		set cdn_keys($$value = []) {
			l($$value), o();
		},
		get runner() {
			return s();
		},
		set runner($$value) {
			s($$value), o();
		},
		get runner_keys() {
			return i();
		},
		set runner_keys($$value = []) {
			i($$value), o();
		},
		get onChange() {
			return d();
		},
		set onChange($$value) {
			d($$value), o();
		}
	});
}
b(eg, {
	active: {},
	cdn: {},
	cdn_keys: {},
	runner: {},
	runner_keys: {},
	onChange: {}
}, [], [], { mode: "open" });
var ef = T("<article class=\"LG svelte-gucowb\"><h2 class=\"svelte-gucowb\"><b class=\"svelte-gucowb\"><!></b><!></h2><!></article>"), eb = {
	hash: "svelte-gucowb",
	code: ":root {--gap: 24px;}\n@media (max-width: 800px) {:root {--gap: 16px;}\n}article.svelte-gucowb {position:relative;z-index:2;border-radius:24px;padding:var(--gap);box-sizing:border-box;line-height:normal;width:100%;}article.svelte-gucowb h2:where(.svelte-gucowb) {font-size:15px;font-weight:600;color:#1d1d1f;margin:0 0 16px;display:flex;align-items:center;justify-content:space-between;}article.svelte-gucowb h2:where(.svelte-gucowb) > b:where(.svelte-gucowb) {display:flex;align-items:center;gap:12px;}\n@media (max-width: 800px) {article.svelte-gucowb {border-radius:16px;padding:0 var(--gap) var(--gap);}\n}"
};
function ex(e, n) {
	M(n, !0), L(e, eb);
	let r = P(n, "name", 7), l = P(n, "files", 23, () => []), c = Object.keys(B), p = [
		"bunx",
		"npx",
		"pnpm dlx",
		"yarn dlx"
	], g = "import_mode", b = "cli_runner", w = h(i(c[0])), m = h(i(p[0])), q = h(0), y = (e, t) => {
		localStorage.setItem(g, e), 0 == e ? localStorage.setItem("cdn", t) : 1 == e && localStorage.setItem(b, t);
	};
	z(() => {
		let e = localStorage.getItem(g);
		if (null != e) {
			let t = Number(e);
			[0, 1].includes(t) && d(q, t, !0);
		}
		let t = localStorage.getItem("cdn");
		t && c.includes(t) && d(w, t, !0);
		let n = localStorage.getItem(b);
		n && p.includes(n) && d(m, n, !0);
	});
	let k = s(() => l().map((e) => {
		let t = B[u(w)](K, "0.1.25") + "/" + e;
		return e.endsWith(".css") ? "<link href=\"" + t + "\" rel=\"stylesheet\">" : e.endsWith(".js") ? "<script type=\"module\">import \"" + t + "\"<\/script>" : t;
	}).join("\n")), C = s(() => u(m) + " webc.add@latest " + r());
	var j = x(), Y = t(j), I = (e) => {
		var t = ef(), n = S(t), l = S(n);
		eg(S(l), {
			get cdn_keys() {
				return c;
			},
			get runner_keys() {
				return p;
			},
			onChange: y,
			get active() {
				return u(q);
			},
			set active($$value) {
				d(q, $$value, !0);
			},
			get cdn() {
				return u(w);
			},
			set cdn($$value) {
				d(w, $$value, !0);
			},
			get runner() {
				return u(m);
			},
			set runner($$value) {
				d(m, $$value, !0);
			}
		}), a(l), eo(_(l), {
			get name() {
				return r();
			},
			get urls_text() {
				return u(k);
			}
		}), a(n);
		var o = _(n);
		{
			let e = s(() => 0 == u(q) ? u(k) : u(C));
			Z(o, { get text() {
				return u(e);
			} });
		}
		a(t), O(e, t);
	};
	return f(Y, (e) => {
		l().length > 0 && e(I);
	}), O(e, j), v({
		get name() {
			return r();
		},
		set name($$value) {
			r($$value), o();
		},
		get files() {
			return l();
		},
		set files($$value = []) {
			l($$value), o();
		}
	});
}
b(ex, {
	name: {},
	files: {}
}, [], [], { mode: "open" });
var ew = T("<!><article class=\"LG svelte-kymqdk\"><b class=\"svelte-kymqdk\"><!></b></article>", 1), em = T("<article class=\"LG svelte-kymqdk\"><b class=\"svelte-kymqdk\"></b></article>"), eq = T("<v-scroll><b class=\"svelte-kymqdk\"><!></b></v-scroll>", 2), ey = {
	hash: "svelte-kymqdk",
	code: ":root {--gap: 24px;}\n@media (max-width: 800px) {:root {--gap: 16px;}\n}v-scroll.svelte-kymqdk {flex:1;min-width:0;min-height:0;}v-scroll.svelte-kymqdk::part(scroll) {box-sizing:border-box;overflow-x:hidden;}v-scroll.svelte-kymqdk > b:where(.svelte-kymqdk) {display:flex;flex-direction:column;gap:var(--gap);padding:var(--gap) var(--gap) var(--gap) 0;box-sizing:border-box;flex:1;}\n@media (max-width: 800px) {v-scroll.svelte-kymqdk > b:where(.svelte-kymqdk) {padding:var(--gap) 0;}\n}article.svelte-kymqdk {display:flex;flex-direction:column;overflow:hidden;border-radius:24px;flex:1 0 auto;}article.svelte-kymqdk > b:where(.svelte-kymqdk) {margin:auto;padding:32px;box-sizing:border-box;max-width:100%;}\n@media (max-width: 800px) {article.svelte-kymqdk {border-radius:16px;}article.svelte-kymqdk > b:where(.svelte-kymqdk) {padding:20px 16px;}\n}"
};
function ek(e, n) {
	M(n, !0), L(e, ey);
	let r = P(n, "name", 7), l = P(n, "active_demo", 7), i = P(n, "files", 23, () => []);
	var d = eq();
	m(d, 1, "svelte-kymqdk");
	var c = S(d), h = S(c), p = (e) => {
		let n = s(l);
		var o = ew(), d = t(o);
		ex(d, {
			get name() {
				return r();
			},
			get files() {
				return i();
			}
		});
		var c = _(d), h = S(c);
		j(S(h), () => u(n), (e, t) => {
			t(e, {});
		}), a(h), a(c), O(e, o);
	}, g = (e) => {
		O(e, em());
	};
	return f(h, (e) => {
		l() ? e(p) : e(g, -1);
	}), a(c), a(d), O(e, d), v({
		get name() {
			return r();
		},
		set name($$value) {
			r($$value), o();
		},
		get active_demo() {
			return l();
		},
		set active_demo($$value) {
			l($$value), o();
		},
		get files() {
			return i();
		},
		set files($$value = []) {
			i($$value), o();
		}
	});
}
b(ek, {
	name: {},
	active_demo: {},
	files: {}
}, [], [], { mode: "open" });
var ez = T("<b class=\"wait svelte-a714y6\"></b>"), e_ = T("<!><b class=\"divider svelte-a714y6\"></b><b class=\"right svelte-a714y6\"><!></b>", 1), eS = {
	hash: "svelte-a714y6",
	code: ":root {--gap: 24px;}\n@media (max-width: 800px) {:root {--gap: 16px;}\n}.wait.svelte-a714y6 {margin:auto;}.divider.svelte-a714y6 {display:none;}\n@media (max-width: 1100px) {.divider.svelte-a714y6 {display:block;height:2px;width:100%;background:var(--dividerSvg) no-repeat center/100% 100%;margin:8px 0;}\n}.right.svelte-a714y6 {display:flex;flex-direction:column;flex:1;min-width:0;min-height:0;gap:var(--gap);padding:0;box-sizing:border-box;}\n@media (max-width: 1100px) {v-scroll {flex:1;min-height:260px;mask-image:linear-gradient(to bottom, #000 calc(100% - var(--gap)), transparent 100%);}.right.svelte-a714y6 {flex:1;min-height:200px;gap:var(--gap);padding:0;}\n}"
};
function eC(e, n) {
	M(n, !0), L(e, eS);
	let l = P(n, "info", 7), s = h(""), i = h([]), c = h([]), p = h(null), g = h(!0);
	r(() => {
		let e = l()?.[2];
		e && (d(g, !0), e().then(async (e) => {
			let [t, n, r, l] = e.default;
			d(s, t, !0), d(i, r || []), d(c, l || []), n ? d(p, (await n()).default) : d(p, null), d(g, !1);
		}));
	});
	var b = x(), w = t(b), m = (e) => {
		O(e, ez());
	}, q = (e) => {
		var n = e_(), r = t(n);
		U(r, {
			get name() {
				return l()[0];
			},
			get title() {
				return l()[1];
			},
			get readme() {
				return u(s);
			},
			get svgs() {
				return u(i);
			}
		});
		var o = _(r, 2);
		ek(S(o), {
			get name() {
				return l()[0];
			},
			get active_demo() {
				return u(p);
			},
			get files() {
				return u(c);
			}
		}), a(o), O(e, n);
	};
	return f(w, (e) => {
		u(g) ? e(m) : e(q, -1);
	}), O(e, b), v({
		get info() {
			return l();
		},
		set info($$value) {
			l($$value), o();
		}
	});
}
b(eC, { info: {} }, [], [], { mode: "open" });
export { eC as default };
