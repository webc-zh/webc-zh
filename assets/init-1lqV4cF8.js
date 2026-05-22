import { D as e, On as t, newEl as r } from "x";
let o = document.createElement("link").relList;
if (!(o && o.supports && o.supports("modulepreload"))) {
	for (let e of document.querySelectorAll("link[rel=\"modulepreload\"]")) i(e);
	new MutationObserver((e) => {
		for (let t of e) if ("childList" === t.type) for (let e of t.addedNodes) "LINK" === e.tagName && "modulepreload" === e.rel && i(e);
	}).observe(document, {
		childList: !0,
		subtree: !0
	});
}
function i(e) {
	let t;
	if (e.ep) return;
	e.ep = !0;
	let r = (t = {}, e.integrity && (t.integrity = e.integrity), e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy), "use-credentials" === e.crossOrigin ? t.credentials = "include" : "anonymous" === e.crossOrigin ? t.credentials = "omit" : t.credentials = "same-origin", t);
	fetch(e.href, r);
}
(() => {
	let { round: o, max: i, min: l } = Math, n = "drag", s = (e, t, ...o) => {
		let i = r(e);
		return t && i.setAttribute("part", t), i.append(...o), i;
	};
	[[
		"v",
		"Height",
		"Top",
		"Y",
		"flex-direction:column;width:100%;min-height:100%"
	], [
		"h",
		"Width",
		"Left",
		"X",
		"min-width:100%;width:max-content;height:100%"
	]].map(([r, d, a, c, p]) => {
		let u, m, f, h, y, b, g = (u = d.toLowerCase(), m = a.toLowerCase(), f = "client" + d, h = "scroll" + d, y = "scroll" + a, b = "client" + c, (r) => {
			let d, a, c, p = -1, g = r.firstElementChild, v = s("i", "si"), w = s("b", "bar", v), L = (e = v[f]) => {
				let t = r[f], o = g[h];
				return [
					o - t,
					i(1, t - e - 6),
					e,
					t,
					o
				];
			}, x = (e) => {
				if (!w.parentNode) return;
				let [t, n] = L(e), s = i(0, l(r[y], t));
				-1 != p && p != s && (w.style.opacity = 1, clearTimeout(d), d = setTimeout(() => w.style.opacity = 0, 1e3)), p = s, v.style[m] = 3 + o(n * s / t) + "px";
			}, C = (i) => {
				if (a) return;
				let l = e.body;
				l.setPointerCapture(i.pointerId), l.classList.add(n), w.part.add(n);
				let s = i[b], d = () => {
					l.classList.remove(n), w.part.remove(n), c(), a = null;
				}, c = t(l, {
					pointermove: (e) => {
						let [t, i] = L();
						r[y] += o(t * (e[b] - s) / i), s = e[b];
					},
					pointerup: d,
					lostpointercapture: d
				});
				a = d;
			}, T = [
				t(w, { pointerdown: (e) => {
					let t = w.getBoundingClientRect()[m], [n, s, d] = L();
					r[y] = o(n * i(l((e[b] - t - 3 - d / 2) / s, 1), 0)), C(e);
				} }),
				t(v, { pointerdown: (e) => {
					e.stopPropagation(), C(e);
				} }),
				t(r, { scroll: x.bind(null, void 0) })
			], N = new ResizeObserver(() => {
				clearTimeout(c), c = setTimeout(() => {
					let [, , , e, t] = L();
					if (e < t) {
						w.parentNode != r && r.appendChild(w);
						let l = i(16, o(e * e / t));
						v.style[u] = l + "px", x(l);
					} else w.parentNode && w.remove();
				}, 200);
			});
			return w.style.opacity = 0, [r, g].forEach((e) => N.observe(e)), () => {
				clearTimeout(d), clearTimeout(c), T.forEach((e) => e()), a && a(), N.disconnect(), w.parentNode && w.remove();
			};
		});
		customElements.define(r + "-scroll", class extends HTMLElement {
			connectedCallback() {
				let e = s("b", "", s("slot")), t = s("b", "scroll", e);
				e.style.cssText = "display:flex;" + p, this.attachShadow({ mode: "open" }).appendChild(t), this._unbind = g(t);
			}
			disconnectedCallback() {
				this._unbind?.();
			}
		});
	});
})();
