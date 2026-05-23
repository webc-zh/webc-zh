const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Home-Du5Lvvb_.js","./MdGithub-DvG2ura7.js","./MdGithub-D2nR6Vig.css","./X-D5TczUbO.js","./legacy-BVCVpSRs.js","./MdTop-bsboj8Zi.js","./Com-C7TdCovm.js"])))=>i.map(i=>d[i]);
import { r as e, t } from "./init-BY9hDDrP.js";
var r, n, i, s, l, a, o, f = Array.isArray, u = Array.prototype.indexOf, c = Array.prototype.includes, d = Array.from, h = Object.keys, v = Object.defineProperty, p = Object.getOwnPropertyDescriptor, x = Object.getOwnPropertyDescriptors, g = Object.prototype, b = Array.prototype, _ = Object.getPrototypeOf, m = Object.isExtensible, w = () => {};
function y(e) {
	return e();
}
function k(e) {
	for (var t = 0; t < e.length; t++) e[t]();
}
function $() {
	var e, t;
	return {
		promise: new Promise((r, n) => {
			e = r, t = n;
		}),
		resolve: e,
		reject: t
	};
}
function S(e, t) {
	if (Array.isArray(e)) return e;
	if (void 0 === t || !(Symbol.iterator in e)) return Array.from(e);
	let r = [];
	for (let n of e) if (r.push(n), r.length === t) break;
	return r;
}
var E = Symbol("$state"), j = Symbol("legacy props"), A = Symbol(""), P = Symbol("attributes"), O = Symbol("class"), C = Symbol("style"), L = Symbol("text"), M = Symbol("form reset"), z = new class extends Error {
	name = "StaleReactionError";
	message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), N = !!globalThis.document?.contentType && globalThis.document.contentType.includes("xml"), q = {}, R = Symbol("uninitialized");
function D(e) {
	console.warn("https://svelte.dev/e/hydration_mismatch");
}
var V = !1;
function F(e) {
	if (null === e) throw D(), q;
	return r = e;
}
function I() {
	return F(eG(r));
}
function W(e) {
	if (V) {
		if (null !== eG(r)) throw D(), q;
		r = e;
	}
}
function H(e = 1) {
	if (V) {
		for (var t = e, n = r; t--;) n = eG(n);
		r = n;
	}
}
function X(e = !0) {
	for (var t = 0, n = r;;) {
		if (8 === n.nodeType) {
			var i = n.data;
			if ("]" === i) {
				if (0 === t) return n;
				t -= 1;
			} else "[" !== i && "[!" !== i && ("[" !== i[0] || isNaN(Number(i.slice(1)))) || (t += 1);
		}
		var s = eG(n);
		e && n.remove(), n = s;
	}
}
function B(e) {
	if (!e || 8 !== e.nodeType) throw D(), q;
	return e.data;
}
function Y(e) {
	return e === this.v;
}
function U(e) {
	var t;
	return t = this.v, e != e ? t != t : e === t && (null === e || "object" != typeof e) && "function" != typeof e;
}
var J = !1;
function K() {
	J = !0;
}
var G = null;
function Q(e, t = !1, r) {
	G = {
		p: G,
		i: !1,
		c: null,
		e: null,
		s: e,
		x: null,
		r: tb,
		l: J && !t ? {
			s: null,
			u: null,
			$: []
		} : null
	};
}
function Z(e) {
	var t = G, r = t.e;
	if (null !== r) for (var n of (t.e = null, r)) tr(n);
	return void 0 !== e && (t.x = e), t.i = !0, G = t.p, e ?? {};
}
function ee() {
	return !J || null !== G && null === G.l;
}
var et = [];
function er() {
	var e = et;
	et = [], k(e);
}
function en(e) {
	if (0 === et.length && !ex) {
		var t = et;
		queueMicrotask(() => {
			t === et && er();
		});
	}
	et.push(e);
}
function ei(e) {
	var t = tb;
	if (null === t) return tx.f |= 8388608, e;
	if ((32768 & t.f) == 0 && (4 & t.f) == 0) throw e;
	es(e, t);
}
function es(e, t) {
	for (; null !== t;) {
		if ((128 & t.f) != 0) {
			if ((32768 & t.f) == 0) throw e;
			try {
				t.b.error(e);
				return;
			} catch (t) {
				e = t;
			}
		}
		t = t.parent;
	}
	throw e;
}
function el(e, t) {
	e.f = -7169 & e.f | t;
}
function ea(e) {
	(512 & e.f) != 0 || null === e.deps ? el(e, 1024) : el(e, 4096);
}
function eo(e, t, r) {
	(2048 & e.f) != 0 ? t.add(e) : 4096 & e.f && r.add(e), function e(t) {
		if (null !== t) for (let r of t) 2 & r.f && 65536 & r.f && (r.f ^= 65536, e(r.deps));
	}(e.deps), el(e, 1024);
}
var ef = !1, eu = null, ec = null, ed = null, eh = null, ev = null, ep = null, ex = !1, eg = !1, eb = null, e_ = null, em = 0, ew = 1, ey = class e {
	id = ew++;
	#e = !1;
	linked = !0;
	#t = null;
	#r = null;
	async_deriveds = /* @__PURE__ */ new Map();
	current = /* @__PURE__ */ new Map();
	previous = /* @__PURE__ */ new Map();
	unblocked = /* @__PURE__ */ new Set();
	#n = /* @__PURE__ */ new Set();
	#i = /* @__PURE__ */ new Set();
	#s = /* @__PURE__ */ new Set();
	#l = 0;
	#a = /* @__PURE__ */ new Map();
	#o = null;
	#f = [];
	#u = [];
	#c = /* @__PURE__ */ new Set();
	#d = /* @__PURE__ */ new Set();
	#h = /* @__PURE__ */ new Map();
	#v = /* @__PURE__ */ new Set();
	is_fork = !1;
	#p = !1;
	#x() {
		if (this.is_fork) return !0;
		for (let r of this.#a.keys()) {
			for (var e = r, t = !1; null !== e.parent;) {
				if (this.#h.has(e)) {
					t = !0;
					break;
				}
				e = e.parent;
			}
			if (!t) return !0;
		}
		return !1;
	}
	skip_effect(e) {
		this.#h.has(e) || this.#h.set(e, {
			d: [],
			m: []
		}), this.#v.delete(e);
	}
	unskip_effect(e, t = (e) => this.schedule(e)) {
		var r = this.#h.get(e);
		if (r) {
			for (var n of (this.#h.delete(e), r.d)) el(n, 2048), t(n);
			for (n of r.m) el(n, 4096), t(n);
		}
		this.#v.add(e);
	}
	#g() {
		if (this.#e = !0, em++ > 1e3 && (this.#b(), function() {
			try {
				throw Error("https://svelte.dev/e/effect_update_depth_exceeded");
			} catch (e) {
				es(e, ep);
			}
		}()), !this.#x()) {
			for (let e of this.#c) this.#d.delete(e), el(e, 2048), this.schedule(e);
			for (let e of this.#d) el(e, 4096), this.schedule(e);
		}
		let t = this.#f;
		this.#f = [], this.apply();
		var r = eb = [], n = [], i = e_ = [];
		for (let e of t) try {
			this.#_(e, r, n);
		} catch (t) {
			throw function e(t) {
				el(t, 1024);
				for (var r = t.first; null !== r;) e(r), r = r.next;
			}(e), t;
		}
		if (ed = null, i.length > 0) {
			var s = e.ensure();
			for (let e of i) s.schedule(e);
		}
		if (eb = null, e_ = null, this.#x()) {
			for (let [e, t] of (this.#m(n), this.#m(r), this.#h)) (function e(t, r) {
				if ((32 & t.f) == 0 || (1024 & t.f) == 0) {
					(2048 & t.f) != 0 ? r.d.push(t) : 4096 & t.f && r.m.push(t), el(t, 1024);
					for (var n = t.first; null !== n;) e(n, r), n = n.next;
				}
			})(e, t);
			i.length > 0 && ed.#g();
			return;
		}
		let l = this.#w();
		if (l) return void l.#y(this);
		for (let e of (this.#c.clear(), this.#d.clear(), this.#n)) e(this);
		this.#n.clear(), eh = this, eS(n), eS(r), eh = null, this.#o?.resolve();
		var a = ed;
		if (this.linked && 0 === this.#l && this.#b(), this.#f.length > 0) {
			null === a && (a = this, this.#k());
			let e = a;
			e.#f.push(...this.#f.filter((t) => !e.#f.includes(t)));
		}
		null !== a && a.#g();
	}
	#_(e, t, r) {
		e.f ^= 1024;
		for (var n = e.first; null !== n;) {
			var i = n.f, s = (96 & i) != 0;
			if (!(s && (1024 & i) != 0 || (8192 & i) != 0 || this.#h.has(n)) && null !== n.fn) {
				s ? n.f ^= 1024 : (4 & i) != 0 ? t.push(n) : tj(n) && (16 & i && this.#d.add(n), tP(n));
				var l = n.first;
				if (null !== l) {
					n = l;
					continue;
				}
			}
			for (; null !== n;) {
				var a = n.next;
				if (null !== a) {
					n = a;
					break;
				}
				n = n.parent;
			}
		}
	}
	#w() {
		for (var e = this.#t; null !== e;) {
			if (!e.is_fork) {
				for (let [t, [, r]] of this.current) if (e.current.has(t) && !r) return e;
			}
			e = e.#t;
		}
		return null;
	}
	#y(e) {
		for (let [t, r] of e.current) !this.previous.has(t) && e.previous.has(t) && this.previous.set(t, e.previous.get(t)), this.current.set(t, r);
		for (let [t, r] of e.async_deriveds) {
			let e = this.async_deriveds.get(t);
			e && r.promise.then(e.resolve);
		}
		let t = (e) => {
			var r = e.reactions;
			if (null !== r) for (let e of r) {
				var n = e.f;
				(2 & n) != 0 ? t(e) : 4194320 & n && !this.async_deriveds.has(e) && (this.#d.delete(e), el(e, 2048), this.schedule(e));
			}
		};
		for (let e of this.current.keys()) t(e);
		this.oncommit(() => e.discard()), e.#b(), ed = this, this.#g();
	}
	#m(e) {
		for (var t = 0; t < e.length; t += 1) eo(e[t], this.#c, this.#d);
	}
	capture(e, t, r = !1) {
		e.v === R || this.previous.has(e) || this.previous.set(e, e.v), !(8388608 & e.f) && (this.current.set(e, [t, r]), ev?.set(e, t)), this.is_fork || (e.v = t);
	}
	activate() {
		ed = this;
	}
	deactivate() {
		ed = null, ev = null;
	}
	flush() {
		try {
			eg = !0, ed = this, this.#g();
		} finally {
			em = 0, ep = null, eb = null, e_ = null, eg = !1, ed = null, ev = null, eD.clear();
		}
	}
	discard() {
		for (let e of this.#i) e(this);
		this.#i.clear(), this.#s.clear(), this.#b();
	}
	register_created_effect(e) {
		this.#u.push(e);
	}
	#$() {
		this.#b();
		for (let f = eu; null !== f; f = f.#r) {
			var e = f.id < this.id, t = [];
			for (let [n, [i, s]] of this.current) {
				if (f.current.has(n)) {
					var r = f.current.get(n)[0];
					if (!e || i === r) continue;
					f.current.set(n, [i, s]);
				}
				t.push(n);
			}
			if (e) for (let [e, t] of this.async_deriveds) {
				let r = f.async_deriveds.get(e);
				r && t.promise.then(r.resolve);
			}
			if (f.#e) {
				var n = [...f.current.keys()].filter((e) => !this.current.has(e));
				if (0 === n.length) e && f.discard();
				else if (t.length > 0) {
					if (e) for (let e of this.#v) f.unskip_effect(e, (e) => {
						(4194320 & e.f) != 0 ? f.schedule(e) : f.#m([e]);
					});
					f.activate();
					var i = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Map();
					for (var l of t) (function e(t, r, n, i) {
						if (!n.has(t) && (n.add(t), null !== t.reactions)) for (let s of t.reactions) {
							let t = s.f;
							(2 & t) != 0 ? e(s, r, n, i) : 4194320 & t && !(2048 & t) && eE(s, r, i) && (el(s, 2048), ej(s));
						}
					})(l, n, i, s);
					s = /* @__PURE__ */ new Map();
					var a = [...f.current.keys()].filter((e) => !this.current.has(e) || this.current.get(e)[0] !== e.v);
					if (a.length > 0) for (let e of this.#u) !(155648 & e.f) && eE(e, a, s) && ((4194320 & e.f) != 0 ? (el(e, 2048), f.schedule(e)) : f.#c.add(e));
					if (f.#f.length > 0 && !f.#p) {
						for (var o of (f.apply(), f.#f)) f.#_(o, [], []);
						f.#f = [];
					}
					f.deactivate();
				}
			}
		}
	}
	increment(e, t) {
		if (this.#l += 1, e) {
			let e = this.#a.get(t) ?? 0;
			this.#a.set(t, e + 1);
		}
	}
	decrement(e, t) {
		if (this.#l -= 1, e) {
			let e = this.#a.get(t) ?? 0;
			1 === e ? this.#a.delete(t) : this.#a.set(t, e - 1);
		}
		this.#p || (this.#p = !0, en(() => {
			this.#p = !1, this.linked && this.flush();
		}));
	}
	transfer_effects(e, t) {
		for (let t of e) this.#c.add(t);
		for (let e of t) this.#d.add(e);
		e.clear(), t.clear();
	}
	oncommit(e) {
		this.#n.add(e);
	}
	ondiscard(e) {
		this.#i.add(e);
	}
	on_fork_commit(e) {
		this.#s.add(e);
	}
	run_fork_commit_callbacks() {
		for (let e of this.#s) e(this);
		this.#s.clear();
	}
	settled() {
		return (this.#o ??= $()).promise;
	}
	static ensure() {
		if (null === ed) {
			let t = ed = new e();
			t.#k(), eg || ex || en(() => {
				t.#e || t.flush();
			});
		}
		return ed;
	}
	apply() {
		ev = null;
	}
	schedule(e) {
		if (ep = e, e.b?.is_pending && (16777228 & e.f) != 0 && (32768 & e.f) == 0) return void e.b.defer_effect(e);
		for (var t = e; null !== t.parent;) {
			var r = (t = t.parent).f;
			if (null !== eb && t === tb && (null === tx || (2 & tx.f) == 0)) return;
			if ((96 & r) != 0) {
				if ((1024 & r) == 0) return;
				t.f ^= 1024;
			}
		}
		this.#f.push(t);
	}
	#k() {
		null === ec ? eu = ec = this : (ec.#r = this, this.#t = ec), ec = this;
	}
	#b() {
		var e = this.#t, t = this.#r;
		null === e ? eu = t : e.#r = t, null === t ? ec = e : t.#t = e, this.linked = !1;
	}
};
function ek(e) {
	var t, r = ex;
	ex = !0;
	try {
		for (e && (null === ed || ed.is_fork || ed.flush(), t = e());;) {
			for (; et.length > 0;) er();
			if (null === ed) return t;
			ed.flush();
		}
	} finally {
		ex = r;
	}
}
var e$ = null;
function eS(e) {
	var t = e.length;
	if (0 !== t) {
		for (var r = 0; r < t;) {
			var n = e[r++];
			if ((24576 & n.f) == 0 && tj(n) && (e$ = /* @__PURE__ */ new Set(), tP(n), null === n.deps && null === n.first && null === n.nodes && null === n.teardown && null === n.ac && tu(n), e$?.size > 0)) {
				for (let e of (eD.clear(), e$)) {
					if ((24576 & e.f) != 0) continue;
					let t = [e], r = e.parent;
					for (; null !== r;) e$.has(r) && (e$.delete(r), t.push(r)), r = r.parent;
					for (let e = t.length - 1; e >= 0; e--) {
						let r = t[e];
						!(24576 & r.f) && tP(r);
					}
				}
				e$.clear();
			}
		}
		e$ = null;
	}
}
function eE(e, t, r) {
	let n = r.get(e);
	if (void 0 !== n) return n;
	if (null !== e.deps) for (let n of e.deps) {
		if (c.call(t, n)) return !0;
		if ((2 & n.f) != 0 && eE(n, t, r)) return r.set(n, !0), !0;
	}
	return r.set(e, !1), !1;
}
function ej(e) {
	ed.schedule(e);
}
var eA = class {
	parent;
	is_pending = !1;
	transform_error;
	#S;
	#E = V ? r : null;
	#j;
	#A;
	#T;
	#P = null;
	#O = null;
	#C = null;
	#L = null;
	#M = 0;
	#z = 0;
	#N = !1;
	#c = /* @__PURE__ */ new Set();
	#d = /* @__PURE__ */ new Set();
	#q = null;
	#R = (function(e) {
		let t, r = 0, n = eF(0);
		return () => {
			e7() && (tC(n), tn(() => (0 === r && (t = tL(() => e(() => eB(n)))), r += 1, () => {
				en(() => {
					0 == (r -= 1) && (t?.(), t = void 0, eB(n));
				});
			})));
		};
	})(() => (this.#q = eF(this.#M), () => {
		this.#q = null;
	}));
	constructor(e, t, n, i) {
		this.#S = e, this.#j = t, this.#A = (e) => {
			var t = tb;
			t.b = this, t.f |= 128, n(e);
		}, this.parent = tb.b, this.transform_error = i ?? this.parent?.transform_error ?? ((e) => e), this.#T = ts(() => {
			if (V) {
				let e = this.#E;
				I();
				let t = "[!" === e.data;
				if (e.data.startsWith("[?")) {
					let t = JSON.parse(e.data.slice(2));
					this.#D(t);
				} else t ? this.#V() : this.#F();
			} else this.#I();
		}, 589824), V && (this.#S = r);
	}
	#F() {
		try {
			this.#P = tl(() => this.#A(this.#S));
		} catch (e) {
			this.error(e);
		}
	}
	#D(e) {
		let t = this.#j.failed;
		t && (this.#C = tl(() => {
			t(this.#S, () => e, () => () => {});
		}));
	}
	#V() {
		let e = this.#j.pending;
		e && (this.is_pending = !0, this.#O = tl(() => e(this.#S)), en(() => {
			var e = this.#L = document.createDocumentFragment(), t = eJ();
			e.append(t), this.#P = this.#W(() => tl(() => this.#A(t))), 0 === this.#z && (this.#S.before(e), this.#L = null, tc(this.#O, () => {
				this.#O = null;
			}), this.#H(ed));
		}));
	}
	#I() {
		try {
			if (this.is_pending = this.has_pending_snippet(), this.#z = 0, this.#M = 0, this.#P = tl(() => {
				this.#A(this.#S);
			}), this.#z > 0) {
				var e = this.#L = document.createDocumentFragment();
				th(this.#P, e);
				let t = this.#j.pending;
				this.#O = tl(() => t(this.#S));
			} else this.#H(ed);
		} catch (e) {
			this.error(e);
		}
	}
	#H(e) {
		this.is_pending = !1, e.transfer_effects(this.#c, this.#d);
	}
	defer_effect(e) {
		eo(e, this.#c, this.#d);
	}
	is_rendered() {
		return !this.is_pending && (!this.parent || this.parent.is_rendered());
	}
	has_pending_snippet() {
		return !!this.#j.pending;
	}
	#W(e) {
		var t = tb, r = tx, n = G;
		tb = this.#T, tx = this.#T, G = this.#T.ctx;
		try {
			return ey.ensure(), e();
		} catch (e) {
			return ei(e), null;
		} finally {
			tb = t, tx = r, G = n;
		}
	}
	#X(e, t) {
		if (!this.has_pending_snippet()) {
			this.parent && this.parent.#X(e, t);
			return;
		}
		this.#z += e, 0 === this.#z && (this.#H(t), this.#O && tc(this.#O, () => {
			this.#O = null;
		}), this.#L && (this.#S.before(this.#L), this.#L = null));
	}
	update_pending_count(e, t) {
		this.#X(e, t), this.#M += e, this.#q && !this.#N && (this.#N = !0, en(() => {
			this.#N = !1, this.#q && eX(this.#q, this.#M);
		}));
	}
	get_effect_pending() {
		return this.#R(), tC(this.#q);
	}
	error(e) {
		if (!this.#j.onerror && !this.#j.failed) throw e;
		ed?.is_fork ? (this.#P && ed.skip_effect(this.#P), this.#O && ed.skip_effect(this.#O), this.#C && ed.skip_effect(this.#C), ed.on_fork_commit(() => {
			this.#B(e);
		})) : this.#B(e);
	}
	#B(e) {
		this.#P && (tf(this.#P), this.#P = null), this.#O && (tf(this.#O), this.#O = null), this.#C && (tf(this.#C), this.#C = null), V && (F(this.#E), H(), F(X()));
		var t = this.#j.onerror;
		let r = this.#j.failed;
		var n = !1, i = !1;
		let s = () => {
			n ? console.warn("https://svelte.dev/e/svelte_boundary_reset_noop") : (n = !0, i && function() {
				throw Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
			}(), null !== this.#C && tc(this.#C, () => {
				this.#C = null;
			}), this.#W(() => {
				this.#I();
			}));
		}, l = (e) => {
			try {
				i = !0, t?.(e, s), i = !1;
			} catch (e) {
				es(e, this.#T && this.#T.parent);
			}
			r && (this.#C = this.#W(() => {
				try {
					return tl(() => {
						var t = tb;
						t.b = this, t.f |= 128, r(this.#S, () => e, () => s);
					});
				} catch (e) {
					return es(e, this.#T.parent), null;
				}
			}));
		};
		en(() => {
			var t;
			try {
				t = this.transform_error(e);
			} catch (e) {
				es(e, this.#T && this.#T.parent);
				return;
			}
			null !== t && "object" == typeof t && "function" == typeof t.then ? t.then(l, (e) => es(e, this.#T && this.#T.parent)) : l(t);
		});
	}
};
function eT(e = !0) {
	tb = null, tx = null, G = null, e && ed?.deactivate();
}
function eP() {
	var e = tb, t = e.b, r = ed, n = t.is_rendered();
	return t.update_pending_count(1, r), r.increment(n, e), () => {
		t.update_pending_count(-1, r), r.decrement(n, e);
	};
}
function eO(e) {
	return null !== tb && (tb.f |= 524288), {
		ctx: G,
		deps: null,
		effects: null,
		equals: Y,
		f: 2050,
		fn: e,
		reactions: null,
		rv: 0,
		v: R,
		wv: 0,
		parent: tb,
		ac: null
	};
}
var eC = Symbol("obsolete");
function eL(e) {
	let t = eO(e);
	return tm(t), t;
}
function eM(e) {
	let t = eO(e);
	return t.equals = U, t;
}
function ez(e) {
	var t, r = tb, n = e.parent;
	if (!tp && null !== n && e.v !== R && (24576 & n.f) != 0) return console.warn("https://svelte.dev/e/derived_inert"), e.v;
	tb = n;
	try {
		e.f &= -65537;
		var i = e.effects;
		if (null !== i) {
			e.effects = null;
			for (var s = 0; s < i.length; s += 1) tf(i[s]);
		}
		t = tA(e);
	} finally {
		tb = r;
	}
	return t;
}
function eN(e) {
	var t = ez(e);
	e.equals(t) || (e.wv = ++t$, ed?.is_fork && null !== e.deps) || (null !== ed ? (ed.capture(e, t, !0), eh?.capture(e, t, !0)) : e.v = t, null !== e.deps) ? !tp && (null !== ev ? (e7() || ed?.is_fork) && ev.set(e, t) : ea(e)) : el(e, 1024);
}
function eq(e) {
	if (null !== e.effects) for (let t of e.effects) t.teardown && null !== t.fn && tP(t);
}
var eR = /* @__PURE__ */ new Set(), eD = /* @__PURE__ */ new Map(), eV = !1;
function eF(e, t) {
	return {
		f: 0,
		v: e,
		reactions: null,
		equals: Y,
		rv: 0,
		wv: 0
	};
}
function eI(e, t) {
	let r = eF(e, t);
	return tm(r), r;
}
function eW(e, t = !1, r = !0) {
	let n = eF(e);
	return t || (n.equals = U), J && r && null !== G && null !== G.l && (G.l.s ??= []).push(n), n;
}
function eH(e, t, r = !1) {
	return null !== tx && (!tg || 131072 & tx.f) && ee() && 4325394 & tx.f && (null === t_ || !c.call(t_, e)) && function() {
		throw Error("https://svelte.dev/e/state_unsafe_mutation");
	}(), eX(e, r ? eY(t) : t, e_);
}
function eX(e, t, r = null) {
	if (!e.equals(t)) {
		eD.set(e, tp ? t : e.v);
		var n = ey.ensure();
		n.capture(e, t), 2 & e.f && (2048 & e.f && ez(e), null === ev && ea(e)), e.wv = ++t$, function e(t, r, n) {
			var i = t.reactions;
			if (null !== i) for (var s = ee(), l = i.length, a = 0; a < l; a++) {
				var o = i[a], f = o.f;
				if (s || o !== tb) {
					var u = (2048 & f) == 0;
					u && el(o, r), (131072 & f) != 0 ? eR.add(o) : (2 & f) != 0 ? (ev?.delete(o), !(65536 & f) && (512 & f && (null === tb || !(2097152 & tb.f)) && (o.f |= 65536), e(o, 4096, n))) : u && (16 & f && null !== e$ && e$.add(o), null !== n ? n.push(o) : ej(o));
				}
			}
		}(e, 2048, r), ee() && null !== tb && 1024 & tb.f && !(96 & tb.f) && (null === tk ? tk = [e] : tk.push(e)), n.is_fork || !(eR.size > 0) || eV || function() {
			for (let e of (eV = !1, eR)) {
				let t;
				1024 & e.f && el(e, 4096);
				try {
					t = tj(e);
				} catch {
					t = !0;
				}
				t && tP(e);
			}
			eR.clear();
		}();
	}
	return t;
}
function eB(e) {
	eH(e, e.v + 1);
}
function eY(e) {
	if ("object" != typeof e || null === e || E in e) return e;
	let t = _(e);
	if (t !== g && t !== b) return e;
	var r = /* @__PURE__ */ new Map(), n = f(e), i = eI(0), s = tE, l = (e) => {
		if (tE === s) return e();
		var t = tx, r = tE;
		tx = null, tE = s;
		var n = e();
		return tx = t, tE = r, n;
	};
	return n && r.set("length", eI(e.length, null)), new Proxy(e, {
		defineProperty(e, t, n) {
			"value" in n && !1 !== n.configurable && !1 !== n.enumerable && !1 !== n.writable || function() {
				throw Error("https://svelte.dev/e/state_descriptors_fixed");
			}();
			var i = r.get(t);
			return void 0 === i ? l(() => {
				var e = eI(n.value, null);
				return r.set(t, e), e;
			}) : eH(i, n.value, !0), !0;
		},
		deleteProperty(e, t) {
			var n = r.get(t);
			if (void 0 === n) {
				if (t in e) {
					let e = l(() => eI(R, null));
					r.set(t, e), eB(i);
				}
			} else eH(n, R), eB(i);
			return !0;
		},
		get(t, n, i) {
			if (n === E) return e;
			var s = r.get(n), a = n in t;
			if (void 0 === s && (!a || p(t, n)?.writable) && (s = l(() => eI(eY(a ? t[n] : R), null)), r.set(n, s)), void 0 !== s) {
				var o = tC(s);
				return o === R ? void 0 : o;
			}
			return Reflect.get(t, n, i);
		},
		getOwnPropertyDescriptor(e, t) {
			var n = Reflect.getOwnPropertyDescriptor(e, t);
			if (n && "value" in n) {
				var i = r.get(t);
				i && (n.value = tC(i));
			} else if (void 0 === n) {
				var s = r.get(t), l = s?.v;
				if (void 0 !== s && l !== R) return {
					enumerable: !0,
					configurable: !0,
					value: l,
					writable: !0
				};
			}
			return n;
		},
		has(e, t) {
			if (t === E) return !0;
			var n = r.get(t), i = void 0 !== n && n.v !== R || Reflect.has(e, t);
			return (!(void 0 !== n || null !== tb && (!i || p(e, t)?.writable)) || (void 0 === n && (n = l(() => eI(i ? eY(e[t]) : R, null)), r.set(t, n)), tC(n) !== R)) && i;
		},
		set(e, t, s, a) {
			var o = r.get(t), f = t in e;
			if (n && "length" === t) for (var u = s; u < o.v; u += 1) {
				var c = r.get(u + "");
				void 0 !== c ? eH(c, R) : u in e && (c = l(() => eI(R, null)), r.set(u + "", c));
			}
			void 0 === o ? (!f || p(e, t)?.writable) && (eH(o = l(() => eI(void 0, null)), eY(s)), r.set(t, o)) : (f = o.v !== R, eH(o, l(() => eY(s))));
			var d = Reflect.getOwnPropertyDescriptor(e, t);
			if (d?.set && d.set.call(a, s), !f) {
				if (n && "string" == typeof t) {
					var h = r.get("length"), v = Number(t);
					Number.isInteger(v) && v >= h.v && eH(h, v + 1);
				}
				eB(i);
			}
			return !0;
		},
		ownKeys(e) {
			tC(i);
			var t = Reflect.ownKeys(e).filter((e) => {
				var t = r.get(e);
				return void 0 === t || t.v !== R;
			});
			for (var [n, s] of r) s.v === R || n in e || t.push(n);
			return t;
		},
		setPrototypeOf() {
			throw Error("https://svelte.dev/e/state_prototype_fixed");
		}
	});
}
function eU() {
	if (void 0 === n) {
		n = window, i = /Firefox/.test(navigator.userAgent);
		var e = Element.prototype, t = Node.prototype, r = Text.prototype;
		s = p(t, "firstChild").get, l = p(t, "nextSibling").get, m(e) && (e[O] = void 0, e[P] = null, e[C] = void 0, e.__e = void 0), m(r) && (r[L] = void 0);
	}
}
function eJ(e = "") {
	return document.createTextNode(e);
}
function eK(e) {
	return s.call(e);
}
function eG(e) {
	return l.call(e);
}
function eQ(e, t) {
	if (!V) return eK(e);
	var n = eK(r);
	if (null === n) n = r.appendChild(eJ());
	else if (t && 3 !== n.nodeType) {
		var i = eJ();
		return n?.before(i), F(i), i;
	}
	return t && e5(n), F(n), n;
}
function eZ(e, t = !1) {
	if (!V) {
		var n = eK(e);
		return n instanceof Comment && "" === n.data ? eG(n) : n;
	}
	if (t) {
		if (r?.nodeType !== 3) {
			var i = eJ();
			return r?.before(i), F(i), i;
		}
		e5(r);
	}
	return r;
}
function e0(e, t = 1, n = !1) {
	let i = V ? r : e;
	for (; t--;) s = i, i = eG(i);
	if (!V) return i;
	if (n) {
		if (i?.nodeType !== 3) {
			var s, l = eJ();
			return null === i ? s?.after(l) : i.before(l), F(l), l;
		}
		e5(i);
	}
	return F(i), i;
}
function e1(e) {
	e.textContent = "";
}
function e2(e, t, r) {
	return document.createElementNS(t ?? "http://www.w3.org/1999/xhtml", e, r ? { is: r } : void 0);
}
function e5(e) {
	if (e.nodeValue.length < 65536) return;
	let t = e.nextSibling;
	for (; null !== t && 3 === t.nodeType;) t.remove(), e.nodeValue += t.nodeValue, t = e.nextSibling;
}
var e8 = !1;
function e4() {
	e8 || (e8 = !0, document.addEventListener("reset", (e) => {
		Promise.resolve().then(() => {
			if (!e.defaultPrevented) for (let t of e.target.elements) t[M]?.();
		});
	}, { capture: !0 }));
}
function e6(e) {
	var t = tx, r = tb;
	tx = null, tb = null;
	try {
		return e();
	} finally {
		tx = t, tb = r;
	}
}
function e3(e) {
	if (null === tb) throw null === tx && function() {
		throw Error("https://svelte.dev/e/effect_orphan");
	}(), Error("https://svelte.dev/e/effect_in_unowned_derived");
	tp && function() {
		throw Error("https://svelte.dev/e/effect_in_teardown");
	}();
}
function e9(e, t) {
	var r = tb;
	null !== r && 8192 & r.f && (e |= 8192);
	var n = {
		ctx: G,
		deps: null,
		nodes: null,
		f: e | 2560,
		first: null,
		fn: t,
		last: null,
		next: null,
		parent: r,
		b: r && r.b,
		prev: null,
		teardown: null,
		wv: 0,
		ac: null
	};
	ed?.register_created_effect(n);
	var i = n;
	if ((4 & e) != 0) null !== eb ? eb.push(n) : ey.ensure().schedule(n);
	else if (null !== t) {
		try {
			tP(n);
		} catch (e) {
			throw tf(n), e;
		}
		null === i.deps && null === i.teardown && null === i.nodes && i.first === i.last && !(524288 & i.f) && (i = i.first, 16 & e && 65536 & e && null !== i && (i.f |= 65536));
	}
	if (null !== i && (i.parent = r, null !== r && (s = i, null === (l = r.last) ? r.last = r.first = s : (l.next = s, s.prev = l, r.last = s)), null !== tx && (2 & tx.f) != 0 && (64 & e) == 0)) {
		var s, l, a = tx;
		(a.effects ??= []).push(i);
	}
	return n;
}
function e7() {
	return null !== tx && !tg;
}
function te(e) {
	let t = e9(8, null);
	return el(t, 1024), t.teardown = e, t;
}
function tt(e) {
	e3("$effect");
	var t = tb.f;
	if (tx || (32 & t) == 0 || (32768 & t) != 0) return tr(e);
	var r = G;
	(r.e ??= []).push(e);
}
function tr(e) {
	return e9(1048580, e);
}
function tn(e, t = 0) {
	return e9(8 | t, e);
}
function ti(e, t = [], r = [], n = []) {
	(function(e, t, r, n) {
		let i = ee() ? eO : eM;
		var s, l, a, o, f = e.filter((e) => !e.settled);
		if (0 === r.length && 0 === f.length) return n(t.map(i));
		var u = tb, c = (s = tb, l = tx, a = G, o = ed, function(e = !0) {
			(function(e) {
				tb = e;
			})(s), function(e) {
				tx = e;
			}(l), G = a, e && !(16384 & s.f) && (o?.activate(), o?.apply());
		}), d = 1 === f.length ? f[0].promise : f.length > 1 ? Promise.all(f.map((e) => e.promise)) : null;
		function h(e) {
			if ((16384 & u.f) == 0) {
				c();
				try {
					n(e);
				} catch (e) {
					es(e, u);
				}
				eT();
			}
		}
		var v = eP();
		if (0 === r.length) return d.then(() => h(t.map(i))).finally(v);
		function p() {
			Promise.all(r.map((e) => {
				var t, r, n, i, s;
				let l;
				return t = e, null === (l = tb) && function() {
					throw Error("https://svelte.dev/e/async_derived_orphan");
				}(), r = void 0, n = eF(R), i = !tx, s = /* @__PURE__ */ new Set(), e9(4718592, () => {
					var e = tb, a = $();
					r = a.promise;
					try {
						Promise.resolve(t()).then(a.resolve, (e) => {
							e !== z && a.reject(e);
						}).finally(eT);
					} catch (e) {
						a.reject(e), eT();
					}
					var o = ed;
					if (i) {
						if ((32768 & e.f) != 0) var f = eP();
						if (l.b.is_rendered()) o.async_deriveds.get(e)?.reject(eC);
						else for (let e of s.values()) e.reject(eC);
						s.add(a), o.async_deriveds.set(e, a);
					}
					let u = (e, t) => {
						f?.(), s.delete(a), t !== eC && (o.activate(), t ? (n.f |= 8388608, eX(n, t)) : (8388608 & n.f && (n.f ^= 8388608), eX(n, e)), o.deactivate());
					};
					a.promise.then(u, (e) => u(null, e || "unknown"));
				}), te(() => {
					for (let e of s) e.reject(eC);
				}), new Promise((e) => {
					(function t(i) {
						function s() {
							i === r ? e(n) : t(r);
						}
						i.then(s, s);
					})(r);
				});
			})).then((e) => h([...t.map(i), ...e])).catch((e) => es(e, u)).finally(v);
		}
		d ? d.then(() => {
			c(), p(), eT();
		}) : p();
	})(n, t, r, (t) => {
		e9(8, () => e(...t.map(tC)));
	});
}
function ts(e, t = 0) {
	return e9(16 | t, e);
}
function tl(e) {
	return e9(524320, e);
}
function ta(e) {
	var t = e.teardown;
	if (null !== t) {
		let e = tp, r = tx;
		tp = !0, tx = null;
		try {
			t.call(null);
		} finally {
			tp = e, tx = r;
		}
	}
}
function to(e, t = !1) {
	var r = e.first;
	for (e.first = e.last = null; null !== r;) {
		let e = r.ac;
		null !== e && e6(() => {
			e.abort(z);
		});
		var n = r.next;
		(64 & r.f) != 0 ? r.parent = null : tf(r, t), r = n;
	}
}
function tf(e, t = !0) {
	var r = !1;
	(t || 262144 & e.f) && null !== e.nodes && null !== e.nodes.end && (function(e, t) {
		for (; null !== e;) {
			var r = e === t ? null : eG(e);
			e.remove(), e = r;
		}
	}(e.nodes.start, e.nodes.end), r = !0), el(e, 33554432), to(e, t && !r), tT(e, 0);
	var n = e.nodes && e.nodes.t;
	if (null !== n) for (let e of n) e.stop();
	ta(e), e.f ^= 33554432, e.f |= 16384;
	var i = e.parent;
	null !== i && null !== i.first && tu(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function tu(e) {
	var t = e.parent, r = e.prev, n = e.next;
	null !== r && (r.next = n), null !== n && (n.prev = r), null !== t && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function tc(e, t, r = !0) {
	var n = [];
	(function e(t, r, n) {
		if ((8192 & t.f) == 0) {
			t.f ^= 8192;
			var i = t.nodes && t.nodes.t;
			if (null !== i) for (let e of i) (e.is_global || n) && r.push(e);
			for (var s = t.first; null !== s;) {
				var l = s.next;
				if ((64 & s.f) == 0) {
					var a = (65536 & s.f) != 0 || (32 & s.f) != 0 && (16 & t.f) != 0;
					e(s, r, !!a && n);
				}
				s = l;
			}
		}
	})(e, n, !0);
	var i = () => {
		r && tf(e), t && t();
	}, s = n.length;
	if (s > 0) {
		var l = () => --s || i();
		for (var a of n) a.out(l);
	} else i();
}
function td(e, t) {
	if ((8192 & e.f) != 0) {
		e.f ^= 8192, !(1024 & e.f) && (el(e, 2048), ey.ensure().schedule(e));
		for (var r = e.first; null !== r;) {
			var n = r.next, i = (65536 & r.f) != 0 || (32 & r.f) != 0;
			td(r, !!i && t), r = n;
		}
		var s = e.nodes && e.nodes.t;
		if (null !== s) for (let e of s) (e.is_global || t) && e.in();
	}
}
function th(e, t) {
	if (e.nodes) for (var r = e.nodes.start, n = e.nodes.end; null !== r;) {
		var i = r === n ? null : eG(r);
		t.append(r), r = i;
	}
}
var tv = !1, tp = !1, tx = null, tg = !1, tb = null, t_ = null;
function tm(e) {
	null !== tx && (null === t_ ? t_ = [e] : t_.push(e));
}
var tw = null, ty = 0, tk = null, t$ = 1, tS = 0, tE = 0;
function tj(e) {
	var t = e.f;
	if ((2048 & t) != 0) return !0;
	if (2 & t && (e.f &= -65537), (4096 & t) != 0) {
		for (var r = e.deps, n = r.length, i = 0; i < n; i++) {
			var s = r[i];
			if (tj(s) && eN(s), s.wv > e.wv) return !0;
		}
		512 & t && null === ev && el(e, 1024);
	}
	return !1;
}
function tA(e) {
	var t = tw, r = ty, n = tk, i = tx, s = t_, l = G, a = tg, o = tE, f = e.f;
	tw = null, ty = 0, tk = null, tx = (96 & f) == 0 ? e : null, t_ = null, G = e.ctx, tg = !1, tE = ++tS, null !== e.ac && (e6(() => {
		e.ac.abort(z);
	}), e.ac = null);
	try {
		e.f |= 2097152;
		var u, d = (0, e.fn)();
		e.f |= 32768;
		var h = e.deps, v = ed?.is_fork;
		if (null !== tw) {
			if (v || tT(e, ty), null !== h && ty > 0) for (h.length = ty + tw.length, u = 0; u < tw.length; u++) h[ty + u] = tw[u];
			else e.deps = h = tw;
			if (e7() && (512 & e.f) != 0) for (u = ty; u < h.length; u++) (h[u].reactions ??= []).push(e);
		} else !v && null !== h && ty < h.length && (tT(e, ty), h.length = ty);
		if (ee() && null !== tk && !tg && null !== h && (6146 & e.f) == 0) for (u = 0; u < tk.length; u++) (function e(t, r, n = !0) {
			var i = t.reactions;
			if (null !== i && !(null !== t_ && c.call(t_, t))) for (var s = 0; s < i.length; s++) {
				var l = i[s];
				(2 & l.f) != 0 ? e(l, r, !1) : r === l && (n ? el(l, 2048) : 1024 & l.f && el(l, 4096), ej(l));
			}
		})(tk[u], e);
		if (null !== i && i !== e) {
			if (tS++, null !== i.deps) for (let e = 0; e < r; e += 1) i.deps[e].rv = tS;
			if (null !== t) for (let e of t) e.rv = tS;
			null !== tk && (null === n ? n = tk : n.push(...tk));
		}
		return 8388608 & e.f && (e.f ^= 8388608), d;
	} catch (e) {
		return ei(e);
	} finally {
		e.f ^= 2097152, tw = t, ty = r, tk = n, tx = i, t_ = s, G = l, tg = a, tE = o;
	}
}
function tT(e, t) {
	var r = e.deps;
	if (null !== r) for (var n = t; n < r.length; n++) (function(e, t) {
		let r = t.reactions;
		if (null !== r) {
			var n = u.call(r, e);
			if (-1 !== n) {
				var i = r.length - 1;
				0 === i ? r = t.reactions = null : (r[n] = r[i], r.pop());
			}
		}
		if (null === r && (2 & t.f) != 0 && (null === tw || !c.call(tw, t))) {
			512 & t.f && (t.f ^= 512, t.f &= -65537), t.v !== R && ea(t);
			if (null !== t.effects) for (let e of t.effects) (e.teardown || e.ac) && (e.teardown?.(), e.ac?.abort(z), null !== e.fn && (e.teardown = w), e.ac = null, tT(e, 0), to(e));
			tT(t, 0);
		}
	})(e, r[n]);
}
function tP(e) {
	var t = e.f;
	if ((16384 & t) == 0) {
		el(e, 1024);
		var r = tb, n = tv;
		tb = e, tv = !0;
		try {
			if ((16777232 & t) != 0) for (var i = e.first; null !== i;) {
				var s = i.next;
				!(32 & i.f) && tf(i), i = s;
			}
			else to(e);
			ta(e);
			var l = tA(e);
			e.teardown = "function" == typeof l ? l : null, e.wv = t$;
		} finally {
			tv = n, tb = r;
		}
	}
}
async function tO() {
	await Promise.resolve(), ek();
}
function tC(e) {
	var t = (2 & e.f) != 0;
	if (null !== tx && !tg && (null === tb || (16384 & tb.f) == 0) && (null === t_ || !c.call(t_, e))) {
		var r = tx.deps;
		if ((2097152 & tx.f) != 0) e.rv < tS && (e.rv = tS, null === tw && null !== r && r[ty] === e ? ty++ : null === tw ? tw = [e] : tw.push(e));
		else {
			tx.deps ??= [], c.call(tx.deps, e) || tx.deps.push(e);
			var n = e.reactions;
			null === n ? e.reactions = [tx] : c.call(n, tx) || n.push(tx);
		}
	}
	if (tp && eD.has(e)) return eD.get(e);
	if (t) {
		if (tp) {
			var i = e.v;
			return (!(1024 & e.f) && null !== e.reactions || function e(t) {
				if (t.v === R) return !0;
				if (null === t.deps) return !1;
				for (let r of t.deps) if (eD.has(r) || (2 & r.f) != 0 && e(r)) return !0;
				return !1;
			}(e)) && (i = ez(e)), eD.set(e, i), i;
		}
		var s = (512 & e.f) == 0 && !tg && null !== tx && (tv || (512 & tx.f) != 0), l = (32768 & e.f) == 0;
		tj(e) && (s && (e.f |= 512), eN(e)), s && !l && (eq(e), function e(t) {
			if (t.f |= 512, null !== t.deps) for (let r of t.deps) (r.reactions ??= []).push(t), 2 & r.f && !(512 & r.f) && (eq(r), e(r));
		}(e));
	}
	if (ev?.has(e)) return ev.get(e);
	if ((8388608 & e.f) != 0) throw e.v;
	return e.v;
}
function tL(e) {
	var t = tg;
	try {
		return tg = !0, e();
	} finally {
		tg = t;
	}
}
function tM(e, t = /* @__PURE__ */ new Set()) {
	if ("object" == typeof e && null !== e && !(e instanceof EventTarget) && !t.has(e)) {
		for (let r in t.add(e), e instanceof Date && e.getTime(), e) try {
			tM(e[r], t);
		} catch (e) {}
		let r = _(e);
		if (r !== Object.prototype && r !== Array.prototype && r !== Map.prototype && r !== Set.prototype && r !== Date.prototype) {
			let t = x(r);
			for (let r in t) {
				let n = t[r].get;
				if (n) try {
					n.call(e);
				} catch (e) {}
			}
		}
	}
}
var tz = ["touchstart", "touchmove"];
var tN = Symbol("events"), tq = /* @__PURE__ */ new Set(), tR = /* @__PURE__ */ new Set();
function tD(e, t, r, n, i) {
	var s = {
		capture: n,
		passive: i
	}, l = function(e, t, r, n = {}) {
		function i(e) {
			if (n.capture || tI.call(t, e), !e.cancelBubble) return e6(() => r?.call(this, e));
		}
		return e.startsWith("pointer") || e.startsWith("touch") || "wheel" === e ? en(() => {
			t.addEventListener(e, i, n);
		}) : t.addEventListener(e, i, n), i;
	}(e, t, r, s);
	(t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && te(() => {
		t.removeEventListener(e, l, s);
	});
}
function tV(e, t, r) {
	(t[tN] ??= {})[e] = r;
}
function tF(e) {
	for (var t = 0; t < e.length; t++) tq.add(e[t]);
	for (var r of tR) r(e);
}
function tI(e) {
	var t = this.ownerDocument, r = e.type, n = e.composedPath?.() || [], i = n[0] || e.target, s = 0, l = e == e && e[tN];
	if (l) {
		var a = n.indexOf(l);
		if (-1 !== a && (this === document || this === window)) {
			e[tN] = this;
			return;
		}
		var o = n.indexOf(this);
		if (-1 === o) return;
		a <= o && (s = a);
	}
	if ((i = n[s] || e.target) !== this) {
		v(e, "currentTarget", {
			configurable: !0,
			get: () => i || t
		});
		var f = tx, u = tb;
		tx = null, tb = null;
		try {
			for (var c, d = []; null !== i;) {
				var h = i.assignedSlot || i.parentNode || i.host || null;
				try {
					var p = i[tN]?.[r];
					null == p || i.disabled && e.target !== i || p.call(i, e);
				} catch (e) {
					c ? d.push(e) : c = e;
				}
				if (e.cancelBubble || h === this || null === h) break;
				i = h;
			}
			if (c) {
				for (let e of d) queueMicrotask(() => {
					throw e;
				});
				throw c;
			}
		} finally {
			e[tN] = this, delete e.currentTarget, tx = f, tb = u;
		}
	}
}
var tW = globalThis?.window?.trustedTypes && globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function tH(e, t) {
	var r = tb;
	null === r.nodes && (r.nodes = {
		start: e,
		end: t,
		a: null,
		t: null
	});
}
function tX(e, t) {
	var n, s = (1 & t) != 0, l = (2 & t) != 0, a = !e.startsWith("<!>");
	return () => {
		if (V) return tH(r, null), r;
		if (void 0 === n) {
			var t = a ? e : "<!>" + e, o = e2("template"), f = t.replaceAll("<!>", "<!---->");
			o.innerHTML = tW?.createHTML(f) ?? f, n = o.content, s || (n = eK(n));
		}
		var u = l || i ? document.importNode(n, !0) : n.cloneNode(!0);
		return s ? tH(eK(u), u.lastChild) : tH(u, u), u;
	};
}
function tB() {
	if (V) return tH(r, null), r;
	var e = document.createDocumentFragment(), t = document.createComment(""), n = eJ();
	return e.append(t, n), tH(t, n), e;
}
function tY(e, t) {
	if (V) {
		var n = tb;
		(!(32768 & n.f) || null === n.nodes.end) && (n.nodes.end = r), I();
		return;
	}
	null !== e && e.before(t);
}
function tU(e, t) {
	var r = null == t ? "" : "object" == typeof t ? `${t}` : t;
	r !== (e[L] ??= e.nodeValue) && (e[L] = r, e.nodeValue = `${r}`);
}
var tJ = /* @__PURE__ */ new Map();
function tK(e, { target: t, anchor: n, props: i = {}, events: s, context: l, intro: a = !0, transformError: o }) {
	let f;
	eU();
	var u, c = void 0, h = (u = () => {
		var a = n ?? t.appendChild(eJ());
		new eA(a, { pending: () => {} }, (t) => {
			Q({});
			var n = G;
			if (l && (n.c = l), s && (i.$$events = s), V && tH(t, null), c = e(t, i) || {}, V && (tb.nodes.end = r, null === r || 8 !== r.nodeType || "]" !== r.data)) throw D(), q;
			Z();
		}, o);
		var f = /* @__PURE__ */ new Set(), u = (e) => {
			for (var r = 0; r < e.length; r++) {
				var n = e[r];
				if (!f.has(n)) {
					f.add(n);
					var i = tz.includes(n);
					for (let e of [t, document]) {
						var s = tJ.get(e);
						void 0 === s && (s = /* @__PURE__ */ new Map(), tJ.set(e, s));
						var l = s.get(n);
						void 0 === l ? (e.addEventListener(n, tI, { passive: i }), s.set(n, 1)) : s.set(n, l + 1);
					}
				}
			}
		};
		return u(d(tq)), tR.add(u), () => {
			for (var e of f) for (let n of [t, document]) {
				var r = tJ.get(n), i = r.get(e);
				0 == --i ? (n.removeEventListener(e, tI), r.delete(e), 0 === r.size && tJ.delete(n)) : r.set(e, i);
			}
			tR.delete(u), a !== n && a.parentNode?.removeChild(a);
		};
	}, ey.ensure(), f = e9(524352, u), (e = {}) => new Promise((t) => {
		e.outro ? tc(f, () => {
			tf(f), t(void 0);
		}) : (tf(f), t(void 0));
	}));
	return tG.set(c, h), c;
}
var tG = /* @__PURE__ */ new WeakMap(), tQ = class {
	anchor;
	#Y = /* @__PURE__ */ new Map();
	#U = /* @__PURE__ */ new Map();
	#J = /* @__PURE__ */ new Map();
	#K = /* @__PURE__ */ new Set();
	#G = !0;
	constructor(e, t = !0) {
		this.anchor = e, this.#G = t;
	}
	#$ = (e) => {
		if (this.#Y.has(e)) {
			var t = this.#Y.get(e), r = this.#U.get(t);
			if (r) td(r, !0), this.#K.delete(t);
			else {
				var n = this.#J.get(t);
				n && (this.#U.set(t, n.effect), this.#J.delete(t), n.fragment.lastChild.remove(), this.anchor.before(n.fragment), r = n.effect);
			}
			for (let [t, r] of this.#Y) {
				if (this.#Y.delete(t), t === e) break;
				let n = this.#J.get(r);
				n && (tf(n.effect), this.#J.delete(r));
			}
			for (let [e, n] of this.#U) {
				if (e === t || this.#K.has(e)) continue;
				let i = () => {
					if (Array.from(this.#Y.values()).includes(e)) {
						var t = document.createDocumentFragment();
						th(n, t), t.append(eJ()), this.#J.set(e, {
							effect: n,
							fragment: t
						});
					} else tf(n);
					this.#K.delete(e), this.#U.delete(e);
				};
				this.#G || !r ? (this.#K.add(e), tc(n, i, !1)) : i();
			}
		}
	};
	#Q = (e) => {
		this.#Y.delete(e);
		let t = Array.from(this.#Y.values());
		for (let [e, r] of this.#J) t.includes(e) || (tf(r.effect), this.#J.delete(e));
	};
	ensure(e, t) {
		var n = ed;
		if (t && !this.#U.has(e) && !this.#J.has(e)) this.#U.set(e, tl(() => t(this.anchor)));
		this.#Y.set(n, e);
		V && (this.anchor = r), this.#$(n);
	}
};
function tZ(e, t, n = !1) {
	V && (i = r, I());
	var i, s = new tQ(e);
	function l(e, t) {
		if (V && e !== parseInt(B(i).substring(1))) {
			var r = X();
			F(r), s.anchor = r, V = !1, s.ensure(e, t), V = !0;
			return;
		}
		s.ensure(e, t);
	}
	ts(() => {
		var e = !1;
		t((t, r = 0) => {
			e = !0, l(r, t);
		}), e || l(-1, null);
	}, 65536 * !!n);
}
function t0(e, t) {
	return t;
}
function t1(e, t, r = !0) {
	var n;
	if (e.pending.size > 0) for (let t of (n = /* @__PURE__ */ new Set(), e.pending.values())) for (let r of t) n.add(e.items.get(r).e);
	for (var i = 0; i < t.length; i++) {
		var s = t[i];
		n?.has(s) ? (s.f |= 33554432, th(s, document.createDocumentFragment())) : tf(t[i], r);
	}
}
function t2(e, t, n, i, s, l = null) {
	var o, u = e, c = /* @__PURE__ */ new Map();
	4 & t && (u = V ? F(eK(e)) : e.appendChild(eJ())), V && I();
	var h = null, v = eM(() => {
		var e = n();
		return f(e) ? e : null == e ? [] : d(e);
	}), p = /* @__PURE__ */ new Map(), x = !0;
	function g(e) {
		!(16384 & _.effect.f) && (_.pending.delete(e), _.fallback = h, function(e, t, r, n, i) {
			var s = (8 & n) != 0, l = t.length, a = e.items, o = t5(e.effect.first), f = null, u = [], c = [];
			if (s) for (b = 0; b < l; b += 1) x = i(t[b], b), !(33554432 & (g = a.get(x).e).f) && (g.nodes?.a?.measure(), (p ??= /* @__PURE__ */ new Set()).add(g));
			for (b = 0; b < l; b += 1) {
				if (x = i(t[b], b), g = a.get(x).e, null !== e.outrogroups) for (let t of e.outrogroups) t.pending.delete(g), t.done.delete(g);
				if (8192 & g.f && (td(g, !0), s && (g.nodes?.a?.unfix(), (p ??= /* @__PURE__ */ new Set()).delete(g))), (33554432 & g.f) != 0) if (g.f ^= 33554432, g === o) t8(g, null, r);
				else {
					var h = f ? f.next : o;
					g === e.effect.last && (e.effect.last = g.prev), g.prev && (g.prev.next = g.next), g.next && (g.next.prev = g.prev), t4(e, f, g), t4(e, g, h), t8(g, h, r), u = [], c = [], o = t5((f = g).next);
					continue;
				}
				if (g !== o) {
					if (void 0 !== v && v.has(g)) {
						if (u.length < c.length) {
							var v, p, x, g, b, _, m = c[0];
							f = m.prev;
							var w = u[0], y = u[u.length - 1];
							for (_ = 0; _ < u.length; _ += 1) t8(u[_], m, r);
							for (_ = 0; _ < c.length; _ += 1) v.delete(c[_]);
							t4(e, w.prev, y.next), t4(e, f, w), t4(e, y, m), o = m, f = y, b -= 1, u = [], c = [];
						} else v.delete(g), t8(g, o, r), t4(e, g.prev, g.next), t4(e, g, null === f ? e.effect.first : f.next), t4(e, f, g), f = g;
						continue;
					}
					for (u = [], c = []; null !== o && o !== g;) (v ??= /* @__PURE__ */ new Set()).add(o), c.push(o), o = t5(o.next);
					if (null === o) continue;
				}
				!(33554432 & g.f) && u.push(g), f = g, o = t5(g.next);
			}
			if (null !== e.outrogroups) {
				for (let t of e.outrogroups) 0 === t.pending.size && (t1(e, d(t.done)), e.outrogroups?.delete(t));
				0 === e.outrogroups.size && (e.outrogroups = null);
			}
			if (null !== o || void 0 !== v) {
				var k = [];
				if (void 0 !== v) for (g of v) !(8192 & g.f) && k.push(g);
				for (; null !== o;) !(8192 & o.f) && o !== e.fallback && k.push(o), o = t5(o.next);
				var $ = k.length;
				if ($ > 0) {
					if (s) {
						for (b = 0; b < $; b += 1) k[b].nodes?.a?.measure();
						for (b = 0; b < $; b += 1) k[b].nodes?.a?.fix();
					}
					(function(e, t, r) {
						for (var n, i = t.length, s = t.length, l = 0; l < i; l++) {
							let r = t[l];
							tc(r, () => {
								if (n) {
									if (n.pending.delete(r), n.done.add(r), 0 === n.pending.size) {
										var t = e.outrogroups;
										t1(e, d(n.done)), t.delete(n), 0 === t.size && (e.outrogroups = null);
									}
								} else s -= 1;
							}, !1);
						}
						if (0 === s) {
							var a = null !== r;
							if (a) {
								var o = r.parentNode;
								e1(o), o.append(r), e.items.clear();
							}
							t1(e, t, !a);
						} else n = {
							pending: new Set(t),
							done: /* @__PURE__ */ new Set()
						}, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(n);
					})(e, k, (4 & n) != 0 && 0 === l ? r : null);
				}
			}
			s && en(() => {
				if (void 0 !== p) for (g of p) g.nodes?.a?.apply();
			});
		}(_, o, u, t, i), null !== h) && (0 === o.length ? (33554432 & h.f) == 0 ? td(h, !0) : (h.f ^= 33554432, t8(h, null, u)) : tc(h, () => {
			h = null;
		}));
	}
	var _ = {
		effect: ts(() => {
			var e = (o = tC(v)).length;
			let f = !1;
			V && "[!" === B(u) != (0 === e) && (F(u = X()), V = !1, f = !0);
			for (var d = /* @__PURE__ */ new Set(), _ = ed, m = 0; m < e; m += 1) {
				V && 8 === r.nodeType && "]" === r.data && (u = r, f = !0, V = !1);
				var w = o[m], y = i(w, m), k = x ? null : c.get(y);
				k ? (k.v && eX(k.v, w), k.i && eX(k.i, m)) : (k = function(e, t, r, n, i, s, l, a) {
					var o = (1 & l) != 0 ? (16 & l) == 0 ? eW(r, !1, !1) : eF(r) : null, f = (2 & l) != 0 ? eF(i) : null;
					return {
						v: o,
						i: f,
						e: tl(() => (s(t, o ?? r, f ?? i, a), () => {
							e.delete(n);
						}))
					};
				}(c, x ? u : a ??= eJ(), w, y, m, s, t, n), x || (k.e.f |= 33554432), c.set(y, k)), d.add(y);
			}
			if (0 === e && l && !h && (x ? h = tl(() => l(u)) : (h = tl(() => l(a ??= eJ())), h.f |= 33554432)), e > d.size && function() {
				throw Error("https://svelte.dev/e/each_key_duplicate");
			}(), V && e > 0 && F(X()), !x) {
				if (p.set(_, d), 1) g(_);
			}
			f && (V = !0), tC(v);
		}),
		flags: t,
		items: c,
		pending: p,
		outrogroups: null,
		fallback: h
	};
	x = !1, V && (u = r);
}
function t5(e) {
	for (; null !== e && (32 & e.f) == 0;) e = e.next;
	return e;
}
function t8(e, t, r) {
	if (e.nodes) for (var n = e.nodes.start, i = e.nodes.end, s = t && (33554432 & t.f) == 0 ? t.nodes.start : r; null !== n;) {
		var l = eG(n);
		if (s.before(n), n === i) return;
		n = l;
	}
}
function t4(e, t, r) {
	null === t ? e.effect.first = r : t.next = r, null === r ? e.effect.last = t : r.prev = t;
}
function t6(e, t, n) {
	V && (i = r, I());
	var i, s = new tQ(e);
	ts(() => {
		var e = t() ?? null;
		if (V && "[" === B(i) != (null !== e)) {
			var r = X();
			F(r), s.anchor = r, V = !1, s.ensure(e, e && ((t) => n(t, e))), V = !0;
			return;
		}
		s.ensure(e, e && ((t) => n(t, e)));
	}, 65536);
}
function t3(e, t) {
	e9(4, () => {
		var r = e.getRootNode(), n = r.host ? r : r.head ?? r.ownerDocument.head;
		if (!n.querySelector("#" + t.hash)) {
			let e = e2("style");
			e.id = t.hash, e.textContent = t.code, n.appendChild(e);
		}
	});
}
function t9(e) {
	return "object" == typeof e ? function() {
		for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++) (e = arguments[r]) && (t = function e(t) {
			var r, n, i = "";
			if ("string" == typeof t || "number" == typeof t) i += t;
			else if ("object" == typeof t) if (Array.isArray(t)) {
				var s = t.length;
				for (r = 0; r < s; r++) t[r] && (n = e(t[r])) && (i && (i += " "), i += n);
			} else for (n in t) t[n] && (i && (i += " "), i += n);
			return i;
		}(e)) && (n && (n += " "), n += t);
		return n;
	}(e) : e ?? "";
}
var t7 = [..." 	\n\r\f\xA0\v﻿"];
function re(e, t = !1) {
	var r = t ? " !important;" : ";", n = "";
	for (var i of Object.keys(e)) {
		var s = e[i];
		null != s && "" !== s && (n += " " + i + ": " + s + r);
	}
	return n;
}
function rt(e) {
	return "-" !== e[0] || "-" !== e[1] ? e.toLowerCase() : e;
}
function rr(e, t, r, n, i, s) {
	var l = e[O];
	if (V || l !== r || void 0 === l) {
		var a = function(e, t, r) {
			var n = null == e ? "" : "" + e;
			if (t && (n = n ? n + " " + t : t), r) {
				for (var i of Object.keys(r)) if (r[i]) n = n ? n + " " + i : i;
				else if (n.length) for (var s = i.length, l = 0; (l = n.indexOf(i, l)) >= 0;) {
					var a = l + s;
					(0 === l || t7.includes(n[l - 1])) && (a === n.length || t7.includes(n[a])) ? n = (0 === l ? "" : n.substring(0, l)) + n.substring(a + 1) : l = a;
				}
			}
			return "" === n ? null : n;
		}(r, n, s);
		V && a === e.getAttribute("class") || (null == a ? e.removeAttribute("class") : t ? e.className = a : e.setAttribute("class", a)), e[O] = r;
	} else if (s && i !== s) for (var o in s) {
		var f = !!s[o];
		(null == i || !!i[o] !== f) && e.classList.toggle(o, f);
	}
	return s;
}
function rn(e, t = {}, r, n) {
	for (var i in r) {
		var s = r[i];
		t[i] !== s && (null == r[i] ? e.style.removeProperty(i) : e.style.setProperty(i, s, n));
	}
}
function ri(e, t, r, n) {
	var i = e[C];
	if (V || i !== t) {
		var s = function(e, t) {
			if (t) {
				var r, n, i = "";
				if (Array.isArray(t) ? (r = t[0], n = t[1]) : r = t, e) {
					e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
					var s = !1, l = 0, a = !1, o = [];
					r && o.push(...Object.keys(r).map(rt)), n && o.push(...Object.keys(n).map(rt));
					var f = 0, u = -1;
					let t = e.length;
					for (var c = 0; c < t; c++) {
						var d = e[c];
						if (a ? "/" === d && "*" === e[c - 1] && (a = !1) : s ? s === d && (s = !1) : "/" === d && "*" === e[c + 1] ? a = !0 : "\"" === d || "'" === d ? s = d : "(" === d ? l++ : ")" === d && l--, !a && !1 === s && 0 === l) {
							if (":" === d && -1 === u) u = c;
							else if (";" === d || c === t - 1) {
								if (-1 !== u) {
									var h = rt(e.substring(f, u).trim());
									o.includes(h) || (";" !== d && c++, i += " " + e.substring(f, c).trim() + ";");
								}
								f = c + 1, u = -1;
							}
						}
					}
				}
				return r && (i += re(r)), n && (i += re(n, !0)), "" === (i = i.trim()) ? null : i;
			}
			return null == e ? null : String(e);
		}(t, n);
		V && s === e.getAttribute("style") || (null == s ? e.removeAttribute("style") : e.style.cssText = s), e[C] = t;
	} else n && (Array.isArray(n) ? (rn(e, r?.[0], n[0]), rn(e, r?.[1], n[1], "important")) : rn(e, r, n));
	return n;
}
var rs = Symbol("is custom element"), rl = Symbol("is html"), ra = N ? "link" : "LINK";
function ro(e, t, r, n) {
	var i, s = (i = e, i[P] ??= {
		[rs]: i.nodeName.includes("-"),
		[rl]: "http://www.w3.org/1999/xhtml" === i.namespaceURI
	});
	V && (s[t] = e.getAttribute(t), "src" === t || "srcset" === t || "href" === t && e.nodeName === ra) || s[t] !== (s[t] = r) && ("loading" === t && (e[A] = r), null == r ? e.removeAttribute(t) : "string" != typeof r && (function(e) {
		var t, r = e.getAttribute("is") || e.nodeName, n = rf.get(r);
		if (n) return n;
		rf.set(r, n = []);
		for (var i = e, s = Element.prototype; s !== i;) {
			for (var l in t = x(i)) t[l].set && "innerHTML" !== l && "textContent" !== l && "innerText" !== l && n.push(l);
			i = _(i);
		}
		return n;
	})(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
var rf = /* @__PURE__ */ new Map();
function ru(e) {
	var t = e.type;
	return "number" === t || "range" === t;
}
function rc(e) {
	return "" === e ? null : +e;
}
function rd(e, t) {
	return e === t || e?.[E] === t;
}
function rh(e = {}, t, r, n) {
	var i = G.r, s = tb;
	return e9(4, () => {
		var l, a;
		return tn(() => {
			l = a, a = n?.() || [], tL(() => {
				!rd(r(...a), e) && (t(e, ...a), l && rd(r(...l), e) && t(null, ...l));
			});
		}), () => {
			let n = s;
			for (; n !== i && null !== n.parent && 33554432 & n.parent.f;) n = n.parent;
			let l = n.teardown;
			n.teardown = () => {
				a && rd(r(...a), e) && t(null, ...a), l?.();
			};
		};
	}), e;
}
function rv(e = !1) {
	let t = G, r = t.l.u;
	if (!r) return;
	let n = () => (function(e) {
		if (!("object" != typeof e || !e || e instanceof EventTarget)) {
			if (E in e) tM(e);
			else if (!Array.isArray(e)) for (let t in e) {
				let r = e[t];
				"object" == typeof r && r && E in r && tM(r);
			}
		}
	})(t.s);
	if (e) {
		let e = 0, r = {}, i = eO(() => {
			let n = !1, i = t.s;
			for (let e in i) i[e] !== r[e] && (r[e] = i[e], n = !0);
			return n && e++, e;
		});
		n = () => tC(i);
	}
	r.b.length && (e3("$effect.pre"), e9(1048584, () => {
		rp(t, n), k(r.b);
	})), tt(() => {
		let e = tL(() => r.m.map(y));
		return () => {
			for (let t of e) "function" == typeof t && t();
		};
	}), r.a.length && tt(() => {
		rp(t, n), k(r.a);
	});
}
function rp(e, t) {
	if (e.l.s) for (let t of e.l.s) tC(t);
	t();
}
function rx(e, t, r, n) {
	let i;
	var s, l, a = !J || (2 & r) != 0, o = (8 & r) != 0, f = (16 & r) != 0, u = n, c = !0, d = void 0, h = () => f && a ? tC(d ??= eO(n)) : (c && (c = !1, u = f ? tL(n) : n), u);
	if (o) {
		var v = E in e || j in e;
		i = p(e, t)?.set ?? (v && t in e ? (r) => e[t] = r : void 0);
	}
	var x = !1;
	if (o ? [s, x] = function(e) {
		var t = ef;
		try {
			return ef = !1, [e(), ef];
		} finally {
			ef = t;
		}
	}(() => e[t]) : s = e[t], void 0 === s && void 0 !== n && (s = h(), i && (a && function() {
		throw Error("https://svelte.dev/e/props_invalid_value");
	}(), i(s))), l = a ? () => {
		var r = e[t];
		return void 0 === r ? h() : (c = !0, r);
	} : () => {
		var r = e[t];
		return void 0 !== r && (u = void 0), void 0 === r ? u : r;
	}, a && (4 & r) == 0) return l;
	if (i) {
		var g = e.$$legacy;
		return function(e, t) {
			return arguments.length > 0 ? ((!a || !t || g || x) && i(t ? l() : e), e) : l();
		};
	}
	var b = !1, _ = ((1 & r) != 0 ? eO : eM)(() => (b = !1, l()));
	o && tC(_);
	var m = tb;
	return function(e, t) {
		if (arguments.length > 0) {
			let r = t ? tC(_) : a && o ? eY(e) : e;
			return eH(_, r), b = !0, void 0 !== u && (u = r), e;
		}
		return tp && b || (16384 & m.f) != 0 ? _.v : tC(_);
	};
}
var rg = class {
	#Z;
	#ee;
	constructor(e) {
		var t = /* @__PURE__ */ new Map(), n = (e, r) => {
			var n = eW(r, !1, !1);
			return t.set(e, n), n;
		};
		let i = new Proxy({
			...e.props || {},
			$$events: {}
		}, {
			get: (e, r) => tC(t.get(r) ?? n(r, Reflect.get(e, r))),
			has: (e, r) => r === j || (tC(t.get(r) ?? n(r, Reflect.get(e, r))), Reflect.has(e, r)),
			set: (e, r, i) => (eH(t.get(r) ?? n(r, i), i), Reflect.set(e, r, i))
		});
		for (let t of (this.#ee = (e.hydrate ? function(e, t) {
			eU(), t.intro = t.intro ?? !1;
			let n = t.target, i = V, s = r;
			try {
				for (var l = eK(n); l && (8 !== l.nodeType || "[" !== l.data);) l = eG(l);
				if (!l) throw q;
				V = !0, F(l);
				let r = tK(e, {
					...t,
					anchor: l
				});
				return V = !1, r;
			} catch (r) {
				if (r instanceof Error && r.message.split("\n").some((e) => e.startsWith("https://svelte.dev/e/"))) throw r;
				return r !== q && console.warn("Failed to hydrate: ", r), !1 === t.recover && function() {
					throw Error("https://svelte.dev/e/hydration_failed");
				}(), eU(), e1(n), V = !1, tK(e, t);
			} finally {
				V = i, F(s);
			}
		} : function(e, t) {
			return tK(e, t);
		})(e.component, {
			target: e.target,
			anchor: e.anchor,
			props: i,
			context: e.context,
			intro: e.intro ?? !1,
			recover: e.recover,
			transformError: e.transformError
		}), e?.props?.$$host && !1 !== e.sync || ek(), this.#Z = i.$$events, Object.keys(this.#ee))) "$set" !== t && "$destroy" !== t && "$on" !== t && v(this, t, {
			get() {
				return this.#ee[t];
			},
			set(e) {
				this.#ee[t] = e;
			},
			enumerable: !0
		});
		this.#ee.$set = (e) => {
			Object.assign(i, e);
		}, this.#ee.$destroy = () => {
			var e;
			let t;
			e = this.#ee, (t = tG.get(e)) ? (tG.delete(e), t(void 0)) : Promise.resolve();
		};
	}
	$set(e) {
		this.#ee.$set(e);
	}
	$on(e, t) {
		this.#Z[e] = this.#Z[e] || [];
		let r = (...e) => t.call(this, ...e);
		return this.#Z[e].push(r), () => {
			this.#Z[e] = this.#Z[e].filter((e) => e !== r);
		};
	}
	$destroy() {
		this.#ee.$destroy();
	}
};
function rb(e, t, r, n) {
	let i = r[e]?.type;
	if (t = "Boolean" === i && "boolean" != typeof t ? null != t : t, !n || !r[e]) return t;
	if ("toAttribute" === n) switch (i) {
		case "Object":
		case "Array": return null == t ? null : JSON.stringify(t);
		case "Boolean": return t ? "" : null;
		case "Number": return null == t ? null : t;
		default: return t;
	}
	switch (i) {
		case "Object":
		case "Array": return t && JSON.parse(t);
		case "Boolean":
		default: return t;
		case "Number": return null != t ? +t : t;
	}
}
function r_(e, t, r, n, i, s) {
	let l = class extends o {
		constructor() {
			super(e, r, i), this.$$p_d = t;
		}
		static get observedAttributes() {
			return h(t).map((e) => (t[e].attribute || e).toLowerCase());
		}
	};
	return h(t).forEach((e) => {
		v(l.prototype, e, {
			get() {
				return this.$$c && e in this.$$c ? this.$$c[e] : this.$$d[e];
			},
			set(r) {
				r = rb(e, r, t), this.$$d[e] = r;
				var n = this.$$c;
				n && (p(n, e)?.get ? n[e] = r : n.$set({ [e]: r }));
			}
		});
	}), n.forEach((e) => {
		v(l.prototype, e, { get() {
			return this.$$c?.[e];
		} });
	}), s && (l = s(l)), e.element = l, l;
}
function rm(e) {
	var t;
	null === G && function() {
		throw Error("https://svelte.dev/e/lifecycle_outside_component");
	}(), J && null !== G.l ? (t = G.l, t.u ??= {
		a: [],
		b: [],
		m: []
	}).m.push(e) : tt(() => {
		let t = tL(e);
		if ("function" == typeof t) return t;
	});
}
"function" == typeof HTMLElement && (o = class extends HTMLElement {
	$$ctor;
	$$s;
	$$c;
	$$cn = !1;
	$$d = {};
	$$r = !1;
	$$p_d = {};
	$$l = {};
	$$l_u = /* @__PURE__ */ new Map();
	$$me;
	$$shadowRoot = null;
	constructor(e, t, r) {
		super(), this.$$ctor = e, this.$$s = t, r && (this.$$shadowRoot = this.attachShadow(r));
	}
	addEventListener(e, t, r) {
		if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(t), this.$$c) {
			let r = this.$$c.$on(e, t);
			this.$$l_u.set(t, r);
		}
		super.addEventListener(e, t, r);
	}
	removeEventListener(e, t, r) {
		if (super.removeEventListener(e, t, r), this.$$c) {
			let e = this.$$l_u.get(t);
			e && (e(), this.$$l_u.delete(t));
		}
	}
	async connectedCallback() {
		if (this.$$cn = !0, !this.$$c) {
			var e, t;
			let n, i;
			if (await Promise.resolve(), !this.$$cn || this.$$c) return;
			function r(e) {
				return (t) => {
					let r = e2("slot");
					"default" !== e && (r.name = e), tY(t, r);
				};
			}
			let s = {}, l = (t = this, i = {}, t.childNodes.forEach((e) => {
				i[e.slot || "default"] = !0;
			}), i);
			for (let e of this.$$s) e in l && ("default" !== e || this.$$d.children ? s[e] = r(e) : (this.$$d.children = r(e), s.default = !0));
			for (let e of this.attributes) {
				let t = this.$$g_p(e.name);
				t in this.$$d || (this.$$d[t] = rb(t, e.value, this.$$p_d, "toProp"));
			}
			for (let e in this.$$p_d) e in this.$$d || void 0 === this[e] || (this.$$d[e] = this[e], delete this[e]);
			for (let t in this.$$c = new rg({
				component: this.$$ctor,
				target: this.$$shadowRoot || this,
				props: {
					...this.$$d,
					$$slots: s,
					$$host: this
				}
			}), this.$$me = (e = () => {
				tn(() => {
					for (let e of (this.$$r = !0, h(this.$$c))) {
						if (!this.$$p_d[e]?.reflect) continue;
						this.$$d[e] = this.$$c[e];
						let t = rb(e, this.$$d[e], this.$$p_d, "toAttribute");
						null == t ? this.removeAttribute(this.$$p_d[e].attribute || e) : this.setAttribute(this.$$p_d[e].attribute || e, t);
					}
					this.$$r = !1;
				});
			}, ey.ensure(), n = e9(524352, e), () => {
				tf(n);
			}), this.$$l) for (let e of this.$$l[t]) {
				let r = this.$$c.$on(t, e);
				this.$$l_u.set(e, r);
			}
			this.$$l = {};
		}
	}
	attributeChangedCallback(e, t, r) {
		this.$$r || (e = this.$$g_p(e), this.$$d[e] = rb(e, r, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
	}
	disconnectedCallback() {
		this.$$cn = !1, Promise.resolve().then(() => {
			!this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
		});
	}
	$$g_p(e) {
		return h(this.$$p_d).find((t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e) || e;
	}
}), "u" > typeof window && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
var rw = {}, ry = function(e, t, r) {
	let n = Promise.resolve();
	if (t && t.length > 0) {
		let e = document.getElementsByTagName("link"), i = document.querySelector("meta[property=csp-nonce]"), s = i?.nonce || i?.getAttribute("nonce");
		n = Promise.all(t.map((t) => {
			if ((t = new URL(t, r).href) in rw) return;
			rw[t] = !0;
			let n = t.endsWith(".css");
			if (r) for (let r = e.length - 1; r >= 0; r--) {
				let i = e[r];
				if (i.href === t && (!n || "stylesheet" === i.rel)) return;
			}
			else if (document.querySelector(`link[href="${t}"]${n ? "[rel=\"stylesheet\"]" : ""}`)) return;
			let i = document.createElement("link");
			if (i.rel = n ? "stylesheet" : "modulepreload", n || (i.as = "script"), i.crossOrigin = "", i.href = t, s && i.setAttribute("nonce", s), document.head.appendChild(i), n) return new Promise((e, r) => {
				i.addEventListener("load", e), i.addEventListener("error", () => r(Error(`Unable to preload CSS for ${t}`)));
			});
		}).map((e) => Promise.resolve(e).then((e) => ({
			status: "fulfilled",
			value: e
		}), (e) => ({
			status: "rejected",
			reason: e
		}))));
	}
	function i(e) {
		let t = new Event("vite:preloadError", { cancelable: !0 });
		if (t.payload = e, window.dispatchEvent(t), !t.defaultPrevented) throw e;
	}
	return n.then((t) => {
		for (let e of t || []) "rejected" === e.status && i(e.reason);
		return e().catch(i);
	});
}, rk = [[
	"Scroll",
	"自定义虚拟滚动条",
	() => ry(() => import("./Scroll-DANi7iBQ.js"), [], import.meta.url)
], [
	"Wait",
	"加载动画与表单提交遮罩",
	() => ry(() => import("./Wait-LpPgUNU2.js"), [], import.meta.url)
]], r$ = [
	"x",
	"webc.site 的基础依赖库",
	""
], rS = tX("<b class=\"aside-header svelte-paud8n\"><a href=\"/\"><i class=\"icon-home svelte-paud8n\"></i><b>主页</b></a><a href=\"https://groups.google.com/g/webc-site\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"svelte-paud8n\"><i class=\"icon-forum svelte-paud8n\"></i><b>论坛</b></a></b>"), rE = {
	hash: "svelte-paud8n",
	code: ".aside-header.svelte-paud8n {display:flex;gap:8px;margin-bottom:12px;}.aside-header.svelte-paud8n a:where(.svelte-paud8n) {flex:1;display:flex;align-items:center;justify-content:center;gap:8px;padding:10px;font-size:13px;font-weight:500;border-radius:10px;border:1px solid rgba(0,0,0,0.02);background:rgba(255,255,255,0.4);color:#1d1d1f;text-align:left;cursor:pointer;position:relative;text-decoration:none;box-shadow:0 1px 2px rgba(0,0,0,0.02);transition:all 0.25s cubic-bezier(0.4, 0, 0.2, 1);}.aside-header.svelte-paud8n a:where(.svelte-paud8n):hover {background:rgba(255,255,255,0.702);border-color:rgba(0,0,0,0.059);box-shadow:0 4px 12px rgba(0,0,0,0.039);transform:translateY(-0.5px);}.aside-header.svelte-paud8n a.active:where(.svelte-paud8n) {background:rgba(0,113,227,0.078);border-color:rgba(0,113,227,0.2);color:#0071e3;font-weight:600;}.aside-header.svelte-paud8n a:where(.svelte-paud8n) i:where(.svelte-paud8n) {width:16px;height:16px;mask-size:contain;mask-repeat:no-repeat;mask-position:center;display:inline-block;background:currentColor;}.aside-header.svelte-paud8n a:where(.svelte-paud8n) i.icon-home:where(.svelte-paud8n) {mask-image:var(--homeSvg);}.aside-header.svelte-paud8n a:where(.svelte-paud8n) i.icon-forum:where(.svelte-paud8n) {mask-image:var(--groupSvg);}"
};
function rj(e, t) {
	Q(t, !0), t3(e, rE);
	let r = rx(t, "active_index", 7);
	var n = rS(), i = eQ(n);
	return H(), W(n), ti(() => rr(i, 1, t9(-2 == r() ? "active" : ""), "svelte-paud8n")), tY(e, n), Z({
		get active_index() {
			return r();
		},
		set active_index($$value) {
			r($$value), ek();
		}
	});
}
r_(rj, { active_index: {} }, [], [], { mode: "open" });
var rA = tX("<b class=\"svelte-jjbop4\"><input type=\"text\" placeholder=\"搜索组件...\" class=\"svelte-jjbop4\"/></b>"), rT = {
	hash: "svelte-jjbop4",
	code: ":root {--gap: 24px;}\n@media (max-width: 800px) {:root {--gap: 16px;}\n}b.svelte-jjbop4 {position:relative;display:flex;}b.svelte-jjbop4 input:where(.svelte-jjbop4) {box-sizing:border-box;flex:1;min-width:0;padding:10px 36px 10px 16px;font-size:14px;border-radius:10px;transition:all 0.3s cubic-bezier(0.4, 0, 0.2, 1);background:var(--searchSvg) no-repeat right 12px center, linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0));border:1px solid rgba(0,0,0,0.122);color:#1d1d1f;outline:none;}b.svelte-jjbop4 input:where(.svelte-jjbop4)::placeholder {color:#86868b;font-weight:normal;}b.svelte-jjbop4 input:where(.svelte-jjbop4):focus {border-color:#0071e3;background:var(--searchSvg) no-repeat right 12px center, linear-gradient(to bottom, rgba(255,255,255,0.8), rgba(255,255,255,0.302));}\n@media (max-width: 800px) {b.svelte-jjbop4 input:where(.svelte-jjbop4) {font-size:16px;}\n}"
};
function rP(e, t) {
	Q(t, !0), t3(e, rT);
	let r = rx(t, "search_query", 15);
	var n = rA(), i = eQ(n);
	if (V) {
		var s = !1, l = () => {
			if (!s) {
				if (s = !0, i.hasAttribute("value")) {
					var e = i.value;
					ro(i, "value", null), i.value = e;
				}
				if (i.hasAttribute("checked")) {
					var t = i.checked;
					ro(i, "checked", null), i.checked = t;
				}
			}
		};
		i[M] = l, en(l), e4();
	}
	return W(n), function(e, t, r = t) {
		var n = /* @__PURE__ */ new WeakSet();
		(function(e, t, r, n = r) {
			e.addEventListener(t, () => e6(r));
			let i = e[M];
			i ? e[M] = () => {
				i(), n(!0);
			} : e[M] = () => n(!0), e4();
		})(e, "input", async (i) => {
			var s = i ? e.defaultValue : e.value;
			if (r(s = ru(e) ? rc(s) : s), null !== ed && n.add(ed), await tO(), s !== (s = t())) {
				var l = e.selectionStart, a = e.selectionEnd, o = e.value.length;
				if (e.value = s ?? "", null !== a) {
					var f = e.value.length;
					l === a && a === o && f > o ? (e.selectionStart = f, e.selectionEnd = f) : (e.selectionStart = l, e.selectionEnd = Math.min(a, f));
				}
			}
		}), (V && e.defaultValue !== e.value || null == tL(t) && e.value) && (r(ru(e) ? rc(e.value) : e.value), null !== ed && n.add(ed)), tn(() => {
			var r = t();
			if (e === document.activeElement) {
				var i = ed;
				if (n.has(i)) return;
			}
			ru(e) && r === rc(e.value) || ("date" !== e.type || r || e.value) && r !== e.value && (e.value = r ?? "");
		});
	}(i, r), tY(e, n), Z({
		get search_query() {
			return r();
		},
		set search_query($$value) {
			r($$value), ek();
		}
	});
}
r_(rP, { search_query: {} }, [], [], { mode: "open" });
var rO = tX("<a><b class=\"svelte-1xkx02v\">→</b><b class=\"svelte-1xkx02v\"> </b><b class=\"svelte-1xkx02v\"> </b></a>"), rC = tX("<aside><v-scroll><nav class=\"svelte-1xkx02v\"><!><!><b class=\"x-nav svelte-1xkx02v\"><a href=\"/x\"><b class=\"svelte-1xkx02v\">→</b><b class=\"svelte-1xkx02v\">x</b><b class=\"svelte-1xkx02v\"> </b></a></b><b class=\"nav-list svelte-1xkx02v\"></b></nav></v-scroll></aside>", 2), rL = {
	hash: "svelte-1xkx02v",
	code: ":root {--gap: 24px;}\n@media (max-width: 800px) {:root {--gap: 16px;}\n}aside.svelte-1xkx02v {width:248px;display:flex;flex-direction:column;flex-shrink:0;box-sizing:border-box;}aside.svelte-1xkx02v v-scroll:where(.svelte-1xkx02v) {flex:1;min-height:0;}aside.svelte-1xkx02v v-scroll:where(.svelte-1xkx02v)::part(scroll) {box-sizing:border-box;padding-left:var(--gap);}aside.svelte-1xkx02v nav:where(.svelte-1xkx02v) {width:100%;padding:var(--gap) 0;display:flex;flex-direction:column;box-sizing:border-box;}aside.svelte-1xkx02v .nav-list:where(.svelte-1xkx02v),\naside.svelte-1xkx02v .x-nav:where(.svelte-1xkx02v) {display:flex;flex-direction:column;gap:6px;}aside.svelte-1xkx02v .nav-list:where(.svelte-1xkx02v) a:where(.svelte-1xkx02v),\naside.svelte-1xkx02v .x-nav:where(.svelte-1xkx02v) a:where(.svelte-1xkx02v) {box-sizing:border-box;padding:12px 16px;font-size:14px;border-radius:10px;transition:all 0.25s cubic-bezier(0.4, 0, 0.2, 1);display:flex;flex-direction:column;align-items:stretch;gap:4px;background:rgba(255,255,255,0.4);border:1px solid rgba(0,0,0,0.031);color:#1d1d1f;text-align:left;cursor:pointer;position:relative;text-decoration:none;box-shadow:0 1px 2px rgba(0,0,0,0.02);}aside.svelte-1xkx02v .nav-list:where(.svelte-1xkx02v) a:where(.svelte-1xkx02v):hover,\naside.svelte-1xkx02v .x-nav:where(.svelte-1xkx02v) a:where(.svelte-1xkx02v):hover,\naside.svelte-1xkx02v .nav-list:where(.svelte-1xkx02v) a.active:where(.svelte-1xkx02v),\naside.svelte-1xkx02v .x-nav:where(.svelte-1xkx02v) a.active:where(.svelte-1xkx02v) {padding-right:38px;}aside.svelte-1xkx02v .nav-list:where(.svelte-1xkx02v) a:where(.svelte-1xkx02v):hover,\naside.svelte-1xkx02v .x-nav:where(.svelte-1xkx02v) a:where(.svelte-1xkx02v):hover {background:rgba(255,255,255,0.702);border-color:rgba(0,0,0,0.059);box-shadow:0 4px 12px rgba(0,0,0,0.039);transform:translateY(-1px);}aside.svelte-1xkx02v .nav-list:where(.svelte-1xkx02v) a:where(.svelte-1xkx02v):hover > b:where(.svelte-1xkx02v):nth-child(1),\naside.svelte-1xkx02v .x-nav:where(.svelte-1xkx02v) a:where(.svelte-1xkx02v):hover > b:where(.svelte-1xkx02v):nth-child(1) {opacity:1;transform:translateX(0);}aside.svelte-1xkx02v .nav-list:where(.svelte-1xkx02v) a.active:where(.svelte-1xkx02v),\naside.svelte-1xkx02v .x-nav:where(.svelte-1xkx02v) a.active:where(.svelte-1xkx02v) {background:rgba(0,113,227,0.078);border-color:rgba(0,113,227,0.2);color:#0071e3;box-shadow:inset 0 1px 1px rgba(255,255,255,0.502);}aside.svelte-1xkx02v .nav-list:where(.svelte-1xkx02v) a.active:where(.svelte-1xkx02v) > b:where(.svelte-1xkx02v):nth-child(2),\naside.svelte-1xkx02v .x-nav:where(.svelte-1xkx02v) a.active:where(.svelte-1xkx02v) > b:where(.svelte-1xkx02v):nth-child(2) {color:#0071e3;}aside.svelte-1xkx02v .nav-list:where(.svelte-1xkx02v) a.active:where(.svelte-1xkx02v) > b:where(.svelte-1xkx02v):nth-child(3),\naside.svelte-1xkx02v .x-nav:where(.svelte-1xkx02v) a.active:where(.svelte-1xkx02v) > b:where(.svelte-1xkx02v):nth-child(3) {color:rgba(0,113,227,0.8);}aside.svelte-1xkx02v .nav-list:where(.svelte-1xkx02v) a.active:where(.svelte-1xkx02v) > b:where(.svelte-1xkx02v):nth-child(1),\naside.svelte-1xkx02v .x-nav:where(.svelte-1xkx02v) a.active:where(.svelte-1xkx02v) > b:where(.svelte-1xkx02v):nth-child(1) {opacity:1;color:#0071e3;transform:translateX(0);}aside.svelte-1xkx02v .nav-list:where(.svelte-1xkx02v) a:where(.svelte-1xkx02v) > b:where(.svelte-1xkx02v):nth-child(1),\naside.svelte-1xkx02v .x-nav:where(.svelte-1xkx02v) a:where(.svelte-1xkx02v) > b:where(.svelte-1xkx02v):nth-child(1) {position:absolute;right:12px;left:auto;top:50%;margin-top:-8px;opacity:0;transform:translateX(6px);transition:all 0.25s ease;}aside.svelte-1xkx02v .nav-list:where(.svelte-1xkx02v) a:where(.svelte-1xkx02v) > b:where(.svelte-1xkx02v):nth-child(2),\naside.svelte-1xkx02v .x-nav:where(.svelte-1xkx02v) a:where(.svelte-1xkx02v) > b:where(.svelte-1xkx02v):nth-child(2) {font-size:15px;font-weight:600;}aside.svelte-1xkx02v .nav-list:where(.svelte-1xkx02v) a:where(.svelte-1xkx02v) > b:where(.svelte-1xkx02v):nth-child(3),\naside.svelte-1xkx02v .x-nav:where(.svelte-1xkx02v) a:where(.svelte-1xkx02v) > b:where(.svelte-1xkx02v):nth-child(3) {font-size:12px;color:#86868b;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:400;transition:color 0.25s ease;}aside.svelte-1xkx02v .x-nav:where(.svelte-1xkx02v) {margin-top:12px;}aside.svelte-1xkx02v .nav-list:where(.svelte-1xkx02v) {margin-top:6px;}\n@media (max-width: 800px) {aside.svelte-1xkx02v {position:fixed;top:0;right:0;bottom:0;left:auto;width:280px;max-width:85%;z-index:100;background:rgba(245,245,247,0.933);backdrop-filter:blur(40px);transform:translateX(100%);transition:transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);padding:0;}aside.svelte-1xkx02v v-scroll:where(.svelte-1xkx02v)::part(scroll) {padding-left:0;}aside.svelte-1xkx02v nav:where(.svelte-1xkx02v) {padding:16px 16px 32px;}aside.show.svelte-1xkx02v {transform:translateX(0);}\n}::highlight(search-match) {background:#ffe066;color:#000;}"
};
function rM(e, t) {
	Q(t, !0), t3(e, rL);
	let r = "search-match", n = rx(t, "active_index", 15), i = rx(t, "aside_open", 15), s = rx(t, "class", 7, ""), l = eI(""), a = eI(null), o = 0, f = 0, u = eL(() => {
		let e, t;
		return t = (e = tC(l).trim().toLowerCase()) ? e.split(/\s+/) : [], rk.map((e, t) => [e, t]).filter(([[e, r]]) => {
			if (!t.length) return !0;
			let n = e.toLowerCase(), i = r.toLowerCase();
			return t.some((e) => n.includes(e) || i.includes(e));
		});
	});
	tt(() => {
		let e;
		if (tC(u), !tC(a) || "u" < typeof CSS || !CSS.highlights) return;
		CSS.highlights.delete(r);
		let t = tC(l).trim().toLowerCase(), n = t ? t.split(/\s+/).filter(Boolean) : [];
		if (!n.length) return;
		let i = [], s = document.createTreeWalker(tC(a), NodeFilter.SHOW_TEXT);
		for (; e = s.nextNode();) {
			if (e.parentElement?.matches("a > b:nth-child(3)")) continue;
			let t = e.textContent.toLowerCase();
			for (let r of n) {
				let n = 0;
				for (; -1 != (n = t.indexOf(r, n));) {
					let t = new Range();
					t.setStart(e, n), t.setEnd(e, n + r.length), i.push(t), n += r.length;
				}
			}
		}
		if (i.length) {
			let e = new Highlight(...i);
			CSS.highlights.set(r, e);
		}
	});
	var c = rC(), d = eQ(c);
	rr(d, 1, "svelte-1xkx02v");
	var h = eQ(d), v = eQ(h);
	rj(v, { get active_index() {
		return n();
	} });
	var p = e0(v);
	rP(p, {
		get search_query() {
			return tC(l);
		},
		set search_query($$value) {
			eH(l, $$value, !0);
		}
	});
	var x = e0(p), g = eQ(x), b = e0(eQ(g), 2), _ = eQ(b, !0);
	W(b), W(g), W(x);
	var m = e0(x);
	return t2(m, 21, () => tC(u), t0, (e, t) => {
		var r = eL(() => S(tC(t), 2)), i = eL(() => S(tC(r)[0], 2));
		let s = () => tC(i)[0];
		var l = rO(), a = e0(eQ(l)), o = eQ(a, !0);
		W(a);
		var f = e0(a), u = eQ(f, !0);
		W(f), W(l), ti(() => {
			rr(l, 1, t9(tC(r)[1] == n() ? "active" : ""), "svelte-1xkx02v"), ro(l, "href", "/" + s()), tU(o, s()), tU(u, tC(i)[1]);
		}), tY(e, l);
	}), W(m), W(h), rh(h, (e) => eH(a, e), () => tC(a)), W(d), W(c), ti(() => {
		rr(c, 1, t9(s()), "svelte-1xkx02v"), rr(g, 1, t9(-3 == n() ? "active" : ""), "svelte-1xkx02v"), tU(_, r$[1]);
	}), tV("touchstart", c, (e) => {
		e.touches && e.touches[0] && (o = e.touches[0].clientX, f = e.touches[0].clientY);
	}), tV("touchend", c, (e) => {
		if (e.changedTouches && e.changedTouches[0]) {
			let t = e.changedTouches[0], r = t.clientX - o;
			Math.abs(r) > 1.5 * Math.abs(t.clientY - f) && Math.abs(r) > 50 && i(!1);
		}
	}), tY(e, c), Z({
		get active_index() {
			return n();
		},
		set active_index($$value) {
			n($$value), ek();
		},
		get aside_open() {
			return i();
		},
		set aside_open($$value) {
			i($$value), ek();
		},
		get class() {
			return s();
		},
		set class($$value = "") {
			s($$value), ek();
		}
	});
}
tF(["touchstart", "touchend"]), r_(rM, {
	active_index: {},
	aside_open: {},
	class: {}
}, [], [], { mode: "open" });
var rz = tX("<button aria-label=\"菜单\" class=\"svelte-eeffe1\"><b class=\"svelte-eeffe1\"></b><b class=\"svelte-eeffe1\"></b><b class=\"svelte-eeffe1\"></b></button>"), rN = {
	hash: "svelte-eeffe1",
	code: ":root {--gap: 24px;}\n@media (max-width: 800px) {:root {--gap: 16px;}\n}button.svelte-eeffe1 {display:none;}\n@media (max-width: 800px) {button.svelte-eeffe1 {display:inline-flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;position:absolute;top:var(--gap);right:20px;z-index:102;width:32px;height:32px;border-radius:50%;border:1px solid rgba(0,0,0,0.078);color:#1d1d1f;background:linear-gradient(135deg, rgba(255,255,255,0.4), rgba(255,255,255,0.122));backdrop-filter:blur(8px);box-shadow:inset 0 1px 1px rgba(255,255,255,0.6), 0 1px 2px rgba(0,0,0,0.039);transition:all 0.25s cubic-bezier(0.4, 0, 0.2, 1);cursor:pointer;padding:0;}button.svelte-eeffe1:hover {color:#0071e3;border-color:rgba(0,71,227,0.2);background:linear-gradient(135deg, rgba(255,255,255,0.6), rgba(255,255,255,0.2));transform:scale(1.06) translateY(-1px);box-shadow:inset 0 1px 1px rgba(255,255,255,0.8), 0 4px 12px rgba(0,0,0,0.059), 0 1px 2px rgba(0,0,0,0.039);}button.svelte-eeffe1:hover > b:where(.svelte-eeffe1) {background:currentColor;}button.svelte-eeffe1:active {transform:scale(0.96);background:linear-gradient(135deg, rgba(255,255,255,0.302), rgba(255,255,255,0.059));box-shadow:inset 0 1px 2px rgba(0,0,0,0.051);}button.svelte-eeffe1 > b:where(.svelte-eeffe1) {width:14px;height:2px;background:currentColor;border-radius:1px;transition:all 0.3s ease;}\n}"
};
function rq(e, t) {
	Q(t, !0), t3(e, rN);
	let r = rx(t, "onclick", 7);
	var n = rz();
	return tV("click", n, function(...e) {
		r()?.apply(this, e);
	}), tY(e, n), Z({
		get onclick() {
			return r();
		},
		set onclick($$value) {
			r($$value), ek();
		}
	});
}
tF(["click"]), r_(rq, { onclick: {} }, [], [], { mode: "open" });
var rR = tX("<b class=\"wait svelte-d2ss8n\"></b>"), rD = tX("<b class=\"wrap svelte-d2ss8n\"><!></b>"), rV = tX("<main class=\"svelte-d2ss8n\"><!><!><section class=\"svelte-d2ss8n\"><!></section></main>"), rF = {
	hash: "svelte-d2ss8n",
	code: ":root {--gap: 24px;}\n@media (max-width: 800px) {:root {--gap: 16px;}\n}main.svelte-d2ss8n {display:flex;height:100dvh;width:100vw;background:var(--bgSvg) no-repeat center/cover;color:#1d1d1f;overflow:hidden;gap:var(--gap);box-sizing:border-box;position:relative;}section.svelte-d2ss8n {flex:1;display:flex;flex-direction:column;overflow:hidden;}section.svelte-d2ss8n .wait:where(.svelte-d2ss8n) {margin:auto;}section.svelte-d2ss8n .wrap:where(.svelte-d2ss8n) {flex:1;display:flex;gap:var(--gap);overflow:hidden;}\n@media (max-width: 800px) {\n}"
};
function rI(e, r) {
	Q(r, !0), t3(e, rF);
	let n = eI(-1), i = eI(!1), s = eI(null), l = eL(() => rk[tC(n)]), a = () => {
		eH(i, !tC(i));
	};
	rm(() => {
		var e;
		let r, l;
		return e = async (e) => {
			let t;
			if (eH(i, !1), eH(s, null), e) {
				let t = e.toLowerCase();
				if ("x" == t) eH(n, -3);
				else {
					let e = rk.findIndex(([e]) => e.toLowerCase() == t);
					eH(n, -1 == e ? -2 : e, !0);
				}
			} else eH(n, -2);
			-2 == tC(n) ? t = await ry(() => import("./Home-Du5Lvvb_.js"), __vite__mapDeps([0,1,2]), import.meta.url) : -3 == tC(n) ? t = await ry(() => import("./X-D5TczUbO.js"), __vite__mapDeps([3,1,2,4,5]), import.meta.url) : tC(n) >= 0 && (t = await ry(() => import("./Com-C7TdCovm.js"), __vite__mapDeps([6,1,2,5]), import.meta.url)), t && eH(s, t.default, !0);
		}, l = t((t, n) => {
			r = setTimeout(() => {
				e(t);
			});
		}), () => {
			l(), clearTimeout(r);
		};
	});
	var o = rV(), f = eQ(o), u = (e) => {
		rq(e, { onclick: a });
	};
	tZ(f, (e) => {
		tC(i) || e(u);
	});
	var c = e0(f);
	{
		let e = eL(() => tC(i) ? "show" : "");
		rM(c, {
			get class() {
				return tC(e);
			},
			get active_index() {
				return tC(n);
			},
			set active_index($$value) {
				eH(n, $$value, !0);
			},
			get aside_open() {
				return tC(i);
			},
			set aside_open($$value) {
				eH(i, $$value, !0);
			}
		});
	}
	var d = e0(c), h = eQ(d), v = (e) => {
		tY(e, rR());
	}, p = (e) => {
		var t = rD();
		t6(eQ(t), () => tC(s), (e, t) => {
			t(e, { get info() {
				return tC(l);
			} });
		}), W(t), tY(e, t);
	};
	tZ(h, (e) => {
		tC(s) ? e(p, -1) : e(v);
	}), W(d), W(o), tY(e, o), Z();
}
r_(rI, {}, [], [], { mode: "open" }), tK(rI, { target: e });
export { eZ as A, K as B, tV as C, tt as D, ti as E, eM as F, W as H, eL as I, ek as L, eY as M, eH as N, n as O, eI as P, Z as R, tF as S, tC as T, S as U, H as V, tZ as _, r_ as a, tB as b, rh as c, rr as d, t9 as f, t0 as g, t2 as h, rm as i, e0 as j, eQ as k, ro as l, t6 as m, rk as n, rx as o, t3 as p, ry as r, rv as s, r$ as t, ri as u, tU as v, tD as w, tX as x, tY as y, Q as z };
