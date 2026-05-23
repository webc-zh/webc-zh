import { n as e, t as s } from "./MdGithub-DvG2ura7.js";
import { A as t, E as a, H as i, I as n, L as r, R as l, T as f, _ as p, a as o, b as m, j as x, k as c, o as w, p as g, v as h, x as v, y as d, z as b } from "./Index-CXgnVAx5.js";
var q = v("<b class=\"svelte-1cfqs8w\"> </b>"), u = v("<b class=\"svelte-1cfqs8w\"><h1 class=\"svelte-1cfqs8w\"> <!></h1><!></b>"), z = {
	hash: "svelte-1cfqs8w",
	code: ":root {--gap: 24px;}\n@media (max-width: 800px) {:root {--gap: 16px;}\n}b.svelte-1cfqs8w {display:flex;align-items:center;justify-content:space-between;gap:16px;margin:0 0 var(--gap);}\n@media (max-width: 800px) {b.svelte-1cfqs8w {align-items:flex-start;}\n}\n@media (max-width: 800px) {b.svelte-1cfqs8w a {margin-right:44px;}\n}h1.svelte-1cfqs8w {display:flex;align-items:baseline;gap:12px;font-size:28px;font-weight:700;color:#1d1d1f;line-height:1.2;margin:0;}h1.svelte-1cfqs8w b:where(.svelte-1cfqs8w) {font-size:16px;font-weight:400;color:#86868b;margin-bottom:0;}\n@media (max-width: 800px) {h1.svelte-1cfqs8w {font-size:22px;}h1.svelte-1cfqs8w b:where(.svelte-1cfqs8w) {font-size:13px;}\n}"
};
function j(o, v) {
	b(v, !0), g(o, z);
	let j = w(v, "name", 7, ""), y = w(v, "title", 7, ""), I = w(v, "prefix", 7, "com/"), M = n(() => e(I() + j()));
	var T = m(), k = t(T), A = (e) => {
		var t = u(), n = c(t), r = c(n, !0), l = x(r), o = (e) => {
			var s = q(), t = c(s, !0);
			i(s), a(() => h(t, y())), d(e, s);
		};
		p(l, (e) => {
			y() && e(o);
		}), i(n), s(x(n), { get url() {
			return f(M);
		} }), i(t), a(() => h(r, j())), d(e, t);
	};
	return p(k, (e) => {
		j() && e(A);
	}), d(o, T), l({
		get name() {
			return j();
		},
		set name($$value = "") {
			j($$value), r();
		},
		get title() {
			return y();
		},
		set title($$value = "") {
			y($$value), r();
		},
		get prefix() {
			return I();
		},
		set prefix($$value = "com/") {
			I($$value), r();
		}
	});
}
o(j, {
	name: {},
	title: {},
	prefix: {}
}, [], [], { mode: "open" });
export { j as t };
