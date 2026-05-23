let e, t, r, i, o, n, l, a = document.createElement("link").relList;
if (!(a && a.supports && a.supports("modulepreload"))) {
	for (let e of document.querySelectorAll("link[rel=\"modulepreload\"]")) s(e);
	new MutationObserver((e) => {
		for (let t of e) if ("childList" === t.type) for (let e of t.addedNodes) "LINK" === e.tagName && "modulepreload" === e.rel && s(e);
	}).observe(document, {
		childList: !0,
		subtree: !0
	});
}
function s(e) {
	let t;
	if (e.ep) return;
	e.ep = !0;
	let r = (t = {}, e.integrity && (t.integrity = e.integrity), e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy), "use-credentials" === e.crossOrigin ? t.credentials = "include" : "anonymous" === e.crossOrigin ? t.credentials = "omit" : t.credentials = "same-origin", t);
	fetch(e.href, r);
}
var c = document, d = c.body, p = c.createElement.bind(c), h = (e, t) => {
	let r, i;
	for (r in t) i = t[r], e.addEventListener(r, i);
	return () => {
		for (r in t) i = t[r], e.removeEventListener(r, i);
	};
}, [u, m, f, v, y, b, g, w] = (e = location.pathname.slice(1), t = [], location.hash && (e += location.hash), r = (t) => {
	e = t;
}, i = (i) => {
	for (let r of (i = i || location.pathname.slice(1), t)) r(i, e);
	r(i);
}, o = (e) => "/" === e[0] ? e.slice(1) : e, n = (e, t) => {
	let r = e.indexOf(t);
	return r >= 0 ? [e.slice(0, r), e.slice(r + 1)] : [e, ""];
}, l = (t) => {
	if ((t = o(t)) !== e) {
		let [i, o] = n(t, "#"), [l] = n(e, "#");
		if (r(t), i !== l) return history.pushState(null, "", "/" + t), 1;
		if (location.hash.slice(1) !== o) {
			location.hash = o;
			return;
		}
	}
	window.dispatchEvent(new HashChangeEvent("hashchange"));
}, h(window, { popstate: () => {
	let t = location.pathname.slice(1);
	t !== n(e, "#")[0] && i(t);
} }), [
	(e) => (t.push(e), e(location.pathname.slice(1)), () => {
		t = t.filter((t) => t !== e);
	}),
	r,
	() => e,
	i,
	o,
	n,
	l,
	(e) => {
		l(e) && i(e);
	}
]);
(() => {
	let { round: e, max: t, min: r } = Math, i = "drag", o = (e, t, ...r) => {
		let i = p(e);
		return t && i.setAttribute("part", t), i.append(...r), i;
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
	]].map(([n, l, a, s, d]) => {
		let p, u, m, f, v, y, b = (p = l.toLowerCase(), u = a.toLowerCase(), m = "client" + l, f = "scroll" + l, v = "scroll" + a, y = "client" + s, (n) => {
			let l, a, s, d = -1, b = n.firstElementChild, g = o("i", "si"), w = o("b", "bar", g), E = (e = g[m]) => {
				let r = n[m], i = b[f];
				return [
					i - r,
					t(1, r - e - 6),
					e,
					r,
					i
				];
			}, L = (i) => {
				if (!w.parentNode) return;
				let [o, a] = E(i), s = t(0, r(n[v], o));
				-1 != d && d != s && (w.style.opacity = 1, clearTimeout(l), l = setTimeout(() => w.style.opacity = 0, 1e3)), d = s, g.style[u] = 3 + e(a * s / o) + "px";
			}, x = (t) => {
				if (a) return;
				let r = c.body;
				r.setPointerCapture(t.pointerId), r.classList.add(i), w.part.add(i);
				let o = t[y], l = () => {
					r.classList.remove(i), w.part.remove(i), s(), a = null;
				}, s = h(r, {
					pointermove: (t) => {
						let [r, i] = E();
						n[v] += e(r * (t[y] - o) / i), o = t[y];
					},
					pointerup: l,
					lostpointercapture: l
				});
				a = l;
			}, C = [
				h(w, { pointerdown: (i) => {
					let o = w.getBoundingClientRect()[u], [l, a, s] = E();
					n[v] = e(l * t(r((i[y] - o - 3 - s / 2) / a, 1), 0)), x(i);
				} }),
				h(g, { pointerdown: (e) => {
					e.stopPropagation(), x(e);
				} }),
				h(n, { scroll: L.bind(null, void 0) })
			], N = new ResizeObserver(() => {
				clearTimeout(s), s = setTimeout(() => {
					let [, , , r, i] = E();
					if (r < i) {
						w.parentNode != n && n.appendChild(w);
						let o = t(16, e(r * r / i));
						g.style[p] = o + "px", L(o);
					} else w.parentNode && w.remove();
				}, 200);
			});
			return w.style.opacity = 0, [n, b].forEach((e) => N.observe(e)), () => {
				clearTimeout(l), clearTimeout(s), C.forEach((e) => e()), a && a(), N.disconnect(), w.parentNode && w.remove();
			};
		});
		customElements.define(n + "-scroll", class extends HTMLElement {
			connectedCallback() {
				let e = o("b", "", o("slot")), t = o("b", "scroll", e);
				e.style.cssText = "display:flex;" + d, this.attachShadow({ mode: "open" }).appendChild(t), this._unbind = b(t);
			}
			disconnectedCallback() {
				this._unbind?.();
			}
		});
	});
})();
var E = (e, t) => {
	var r, i;
	if (e.host === location.host) return {hash: r} = e, i = e.pathname.slice(1) + e.search, r && (i += r), t.preventDefault(), i;
};
d.addEventListener("click", (e) => {
	for (var t, r, i = e.target; i;) {
		if ({nodeName: r} = i, "A" === r) {
			({href: t} = i), t && (void 0 !== (t = E(i, e)) ? w(t) : i.target || (i.target = "_blank"));
			break;
		}
		if ("BODY" === r) break;
		i = i.parentNode;
	}
}), c.getElementById("W").remove();
export { p as a, c as i, h as n, d as r, u as t };
