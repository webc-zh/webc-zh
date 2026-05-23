import { a as e, i as t, n as i } from "./init-BY9hDDrP.js";
(() => {
	let { round: l, max: o, min: n } = Math, r = "drag", s = (t, i, ...l) => {
		let o = e(t);
		return i && o.setAttribute("part", i), o.append(...l), o;
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
	]].map(([e, a, d, c, p]) => {
		let m, u, h, b, f, y, v = (m = a.toLowerCase(), u = d.toLowerCase(), h = "client" + a, b = "scroll" + a, f = "scroll" + d, y = "client" + c, (e) => {
			let a, d, c, p = -1, v = e.firstElementChild, w = s("i", "si"), C = s("b", "bar", w), T = (t = w[h]) => {
				let i = e[h], l = v[b];
				return [
					l - i,
					o(1, i - t - 6),
					t,
					i,
					l
				];
			}, g = (t) => {
				if (!C.parentNode) return;
				let [i, r] = T(t), s = o(0, n(e[f], i));
				-1 != p && p != s && (C.style.opacity = 1, clearTimeout(a), a = setTimeout(() => C.style.opacity = 0, 1e3)), p = s, w.style[u] = 3 + l(r * s / i) + "px";
			}, x = (o) => {
				if (d) return;
				let n = t.body;
				n.setPointerCapture(o.pointerId), n.classList.add(r), C.part.add(r);
				let s = o[y], a = () => {
					n.classList.remove(r), C.part.remove(r), c(), d = null;
				}, c = i(n, {
					pointermove: (t) => {
						let [i, o] = T();
						e[f] += l(i * (t[y] - s) / o), s = t[y];
					},
					pointerup: a,
					lostpointercapture: a
				});
				d = a;
			}, L = [
				i(C, { pointerdown: (t) => {
					let i = C.getBoundingClientRect()[u], [r, s, a] = T();
					e[f] = l(r * o(n((t[y] - i - 3 - a / 2) / s, 1), 0)), x(t);
				} }),
				i(w, { pointerdown: (e) => {
					e.stopPropagation(), x(e);
				} }),
				i(e, { scroll: g.bind(null, void 0) })
			], E = new ResizeObserver(() => {
				clearTimeout(c), c = setTimeout(() => {
					let [, , , t, i] = T();
					if (t < i) {
						C.parentNode != e && e.appendChild(C);
						let n = o(16, l(t * t / i));
						w.style[m] = n + "px", g(n);
					} else C.parentNode && C.remove();
				}, 200);
			});
			return C.style.opacity = 0, [e, v].forEach((e) => E.observe(e)), () => {
				clearTimeout(a), clearTimeout(c), L.forEach((e) => e()), d && d(), E.disconnect(), C.parentNode && C.remove();
			};
		});
		customElements.define(e + "-scroll", class extends HTMLElement {
			connectedCallback() {
				let e = s("b", "", s("slot")), t = s("b", "scroll", e);
				e.style.cssText = "display:flex;" + p, this.attachShadow({ mode: "open" }).appendChild(t), this._unbind = v(t);
			}
			disconnectedCallback() {
				this._unbind?.();
			}
		});
	});
})();
