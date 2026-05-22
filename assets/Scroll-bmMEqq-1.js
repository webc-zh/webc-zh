import { D as e, On as t, newEl as l } from "x";
(() => {
	let { round: o, max: i, min: r } = Math, n = "drag", s = (e, t, ...o) => {
		let i = l(e);
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
	]].map(([l, a, d, c, p]) => {
		let m, u, h, b, f, y, v = (m = a.toLowerCase(), u = d.toLowerCase(), h = "client" + a, b = "scroll" + a, f = "scroll" + d, y = "client" + c, (l) => {
			let a, d, c, p = -1, v = l.firstElementChild, w = s("i", "si"), C = s("b", "bar", w), T = (e = w[h]) => {
				let t = l[h], o = v[b];
				return [
					o - t,
					i(1, t - e - 6),
					e,
					t,
					o
				];
			}, x = (e) => {
				if (!C.parentNode) return;
				let [t, n] = T(e), s = i(0, r(l[f], t));
				-1 != p && p != s && (C.style.opacity = 1, clearTimeout(a), a = setTimeout(() => C.style.opacity = 0, 1e3)), p = s, w.style[u] = 3 + o(n * s / t) + "px";
			}, g = (i) => {
				if (d) return;
				let r = e.body;
				r.setPointerCapture(i.pointerId), r.classList.add(n), C.part.add(n);
				let s = i[y], a = () => {
					r.classList.remove(n), C.part.remove(n), c(), d = null;
				}, c = t(r, {
					pointermove: (e) => {
						let [t, i] = T();
						l[f] += o(t * (e[y] - s) / i), s = e[y];
					},
					pointerup: a,
					lostpointercapture: a
				});
				d = a;
			}, L = [
				t(C, { pointerdown: (e) => {
					let t = C.getBoundingClientRect()[u], [n, s, a] = T();
					l[f] = o(n * i(r((e[y] - t - 3 - a / 2) / s, 1), 0)), g(e);
				} }),
				t(w, { pointerdown: (e) => {
					e.stopPropagation(), g(e);
				} }),
				t(l, { scroll: x.bind(null, void 0) })
			], E = new ResizeObserver(() => {
				clearTimeout(c), c = setTimeout(() => {
					let [, , , e, t] = T();
					if (e < t) {
						C.parentNode != l && l.appendChild(C);
						let r = i(16, o(e * e / t));
						w.style[m] = r + "px", x(r);
					} else C.parentNode && C.remove();
				}, 200);
			});
			return C.style.opacity = 0, [l, v].forEach((e) => E.observe(e)), () => {
				clearTimeout(a), clearTimeout(c), L.forEach((e) => e()), d && d(), E.disconnect(), C.parentNode && C.remove();
			};
		});
		customElements.define(l + "-scroll", class extends HTMLElement {
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
