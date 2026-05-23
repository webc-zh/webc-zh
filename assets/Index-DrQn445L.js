let e, t, n;
import { r, t as a } from "./init-ht2V0RCQ.js";
var l, s, i, o, c, d, u, f, h, p, v, g = Object.create, b = Object.defineProperty, x = Object.getOwnPropertyDescriptor, m = Object.getOwnPropertyNames, w = Object.getPrototypeOf, y = Object.prototype.hasOwnProperty, k = Array.isArray, _ = Array.prototype.indexOf, $ = Array.prototype.includes, q = Array.from, S = Object.keys, j = Object.defineProperty, E = Object.getOwnPropertyDescriptor, A = Object.getOwnPropertyDescriptors, z = Object.prototype, F = Array.prototype, C = Object.getPrototypeOf, P = Object.isExtensible, L = () => {};
function O(e) {
	return e();
}
function T(e) {
	for (var t = 0; t < e.length; t++) e[t]();
}
function M() {
	var e, t;
	return {
		promise: new Promise((n, r) => {
			e = n, t = r;
		}),
		resolve: e,
		reject: t
	};
}
function D(e, t) {
	if (Array.isArray(e)) return e;
	if (void 0 === t || !(Symbol.iterator in e)) return Array.from(e);
	let n = [];
	for (let r of e) if (n.push(r), n.length === t) break;
	return n;
}
var R = Symbol("$state"), N = Symbol("legacy props"), B = Symbol(""), U = Symbol("attributes"), H = Symbol("class"), W = Symbol("style"), G = Symbol("text"), Y = Symbol("form reset"), V = new class extends Error {
	name = "StaleReactionError";
	message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), X = !!globalThis.document?.contentType && globalThis.document.contentType.includes("xml"), J = {}, K = Symbol("uninitialized");
function Z(e) {
	console.warn("https://svelte.dev/e/hydration_mismatch");
}
var Q = !1;
function ee(e) {
	if (null === e) throw Z(), J;
	return c = e;
}
function et() {
	return ee(e9(c));
}
function en(e) {
	if (Q) {
		if (null !== e9(c)) throw Z(), J;
		c = e;
	}
}
function er(e = 1) {
	if (Q) {
		for (var t = e, n = c; t--;) n = e9(n);
		c = n;
	}
}
function ea(e = !0) {
	for (var t = 0, n = c;;) {
		if (8 === n.nodeType) {
			var r = n.data;
			if ("]" === r) {
				if (0 === t) return n;
				t -= 1;
			} else "[" !== r && "[!" !== r && ("[" !== r[0] || isNaN(Number(r.slice(1)))) || (t += 1);
		}
		var a = e9(n);
		e && n.remove(), n = a;
	}
}
function el(e) {
	if (!e || 8 !== e.nodeType) throw Z(), J;
	return e.data;
}
function es(e) {
	return e === this.v;
}
function ei(e) {
	var t;
	return t = this.v, e != e ? t != t : e === t && (null === e || "object" != typeof e) && "function" != typeof e;
}
var eo = !1, ec = null;
function ed(e, t = !1, n) {
	ec = {
		p: ec,
		i: !1,
		c: null,
		e: null,
		s: e,
		x: null,
		r: tz,
		l: eo && !t ? {
			s: null,
			u: null,
			$: []
		} : null
	};
}
function eu(e) {
	var t = ec, n = t.e;
	if (null !== n) for (var r of (t.e = null, n)) tp(r);
	return void 0 !== e && (t.x = e), t.i = !0, ec = t.p, e ?? {};
}
function ef() {
	return !eo || null !== ec && null === ec.l;
}
var eh = [];
function ep() {
	var e = eh;
	eh = [], T(e);
}
function ev(e) {
	if (0 === eh.length && !eE) {
		var t = eh;
		queueMicrotask(() => {
			t === eh && ep();
		});
	}
	eh.push(e);
}
function eg(e) {
	var t = tz;
	if (null === t) return tE.f |= 8388608, e;
	if ((32768 & t.f) == 0 && (4 & t.f) == 0) throw e;
	eb(e, t);
}
function eb(e, t) {
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
function ex(e, t) {
	e.f = -7169 & e.f | t;
}
function em(e) {
	(512 & e.f) != 0 || null === e.deps ? ex(e, 1024) : ex(e, 4096);
}
function ew(e, t, n) {
	(2048 & e.f) != 0 ? t.add(e) : 4096 & e.f && n.add(e), function e(t) {
		if (null !== t) for (let n of t) 2 & n.f && 65536 & n.f && (n.f ^= 65536, e(n.deps));
	}(e.deps), ex(e, 1024);
}
var ey = !1, ek = null, e_ = null, e$ = null, eq = null, eS = null, ej = null, eE = !1, eA = !1, ez = null, eF = null, eC = 0, eP = 1, eL = class e {
	id = eP++;
	#e = !1;
	linked = !0;
	#t = null;
	#n = null;
	async_deriveds = /* @__PURE__ */ new Map();
	current = /* @__PURE__ */ new Map();
	previous = /* @__PURE__ */ new Map();
	unblocked = /* @__PURE__ */ new Set();
	#r = /* @__PURE__ */ new Set();
	#a = /* @__PURE__ */ new Set();
	#l = /* @__PURE__ */ new Set();
	#s = 0;
	#i = /* @__PURE__ */ new Map();
	#o = null;
	#c = [];
	#d = [];
	#u = /* @__PURE__ */ new Set();
	#f = /* @__PURE__ */ new Set();
	#h = /* @__PURE__ */ new Map();
	#p = /* @__PURE__ */ new Set();
	is_fork = !1;
	#v = !1;
	#g() {
		if (this.is_fork) return !0;
		for (let n of this.#i.keys()) {
			for (var e = n, t = !1; null !== e.parent;) {
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
		}), this.#p.delete(e);
	}
	unskip_effect(e, t = (e) => this.schedule(e)) {
		var n = this.#h.get(e);
		if (n) {
			for (var r of (this.#h.delete(e), n.d)) ex(r, 2048), t(r);
			for (r of n.m) ex(r, 4096), t(r);
		}
		this.#p.add(e);
	}
	#b() {
		if (this.#e = !0, eC++ > 1e3 && (this.#x(), function() {
			try {
				throw Error("https://svelte.dev/e/effect_update_depth_exceeded");
			} catch (e) {
				eb(e, ej);
			}
		}()), !this.#g()) {
			for (let e of this.#u) this.#f.delete(e), ex(e, 2048), this.schedule(e);
			for (let e of this.#f) ex(e, 4096), this.schedule(e);
		}
		let t = this.#c;
		this.#c = [], this.apply();
		var n = ez = [], r = [], a = eF = [];
		for (let e of t) try {
			this.#m(e, n, r);
		} catch (t) {
			throw function e(t) {
				ex(t, 1024);
				for (var n = t.first; null !== n;) e(n), n = n.next;
			}(e), t;
		}
		if (e$ = null, a.length > 0) {
			var l = e.ensure();
			for (let e of a) l.schedule(e);
		}
		if (ez = null, eF = null, this.#g()) {
			for (let [e, t] of (this.#w(r), this.#w(n), this.#h)) (function e(t, n) {
				if ((32 & t.f) == 0 || (1024 & t.f) == 0) {
					(2048 & t.f) != 0 ? n.d.push(t) : 4096 & t.f && n.m.push(t), ex(t, 1024);
					for (var r = t.first; null !== r;) e(r, n), r = r.next;
				}
			})(e, t);
			a.length > 0 && e$.#b();
			return;
		}
		let s = this.#y();
		if (s) return void s.#k(this);
		for (let e of (this.#u.clear(), this.#f.clear(), this.#r)) e(this);
		this.#r.clear(), eq = this, eM(r), eM(n), eq = null, this.#o?.resolve();
		var i = e$;
		if (this.linked && 0 === this.#s && this.#x(), this.#c.length > 0) {
			null === i && (i = this, this.#_());
			let e = i;
			e.#c.push(...this.#c.filter((t) => !e.#c.includes(t)));
		}
		null !== i && i.#b();
	}
	#m(e, t, n) {
		e.f ^= 1024;
		for (var r = e.first; null !== r;) {
			var a = r.f, l = (96 & a) != 0;
			if (!(l && (1024 & a) != 0 || (8192 & a) != 0 || this.#h.has(r)) && null !== r.fn) {
				l ? r.f ^= 1024 : (4 & a) != 0 ? t.push(r) : tR(r) && (16 & a && this.#f.add(r), tI(r));
				var s = r.first;
				if (null !== s) {
					r = s;
					continue;
				}
			}
			for (; null !== r;) {
				var i = r.next;
				if (null !== i) {
					r = i;
					break;
				}
				r = r.parent;
			}
		}
	}
	#y() {
		for (var e = this.#t; null !== e;) {
			if (!e.is_fork) {
				for (let [t, [, n]] of this.current) if (e.current.has(t) && !n) return e;
			}
			e = e.#t;
		}
		return null;
	}
	#k(e) {
		for (let [t, n] of e.current) !this.previous.has(t) && e.previous.has(t) && this.previous.set(t, e.previous.get(t)), this.current.set(t, n);
		for (let [t, n] of e.async_deriveds) {
			let e = this.async_deriveds.get(t);
			e && n.promise.then(e.resolve);
		}
		let t = (e) => {
			var n = e.reactions;
			if (null !== n) for (let e of n) {
				var r = e.f;
				(2 & r) != 0 ? t(e) : 4194320 & r && !this.async_deriveds.has(e) && (this.#f.delete(e), ex(e, 2048), this.schedule(e));
			}
		};
		for (let e of this.current.keys()) t(e);
		this.oncommit(() => e.discard()), e.#x(), e$ = this, this.#b();
	}
	#w(e) {
		for (var t = 0; t < e.length; t += 1) ew(e[t], this.#u, this.#f);
	}
	capture(e, t, n = !1) {
		e.v === K || this.previous.has(e) || this.previous.set(e, e.v), !(8388608 & e.f) && (this.current.set(e, [t, n]), eS?.set(e, t)), this.is_fork || (e.v = t);
	}
	activate() {
		e$ = this;
	}
	deactivate() {
		e$ = null, eS = null;
	}
	flush() {
		try {
			eA = !0, e$ = this, this.#b();
		} finally {
			eC = 0, ej = null, ez = null, eF = null, eA = !1, e$ = null, eS = null, eK.clear();
		}
	}
	discard() {
		for (let e of this.#a) e(this);
		this.#a.clear(), this.#l.clear(), this.#x();
	}
	register_created_effect(e) {
		this.#d.push(e);
	}
	#$() {
		this.#x();
		for (let c = ek; null !== c; c = c.#n) {
			var e = c.id < this.id, t = [];
			for (let [r, [a, l]] of this.current) {
				if (c.current.has(r)) {
					var n = c.current.get(r)[0];
					if (!e || a === n) continue;
					c.current.set(r, [a, l]);
				}
				t.push(r);
			}
			if (e) for (let [e, t] of this.async_deriveds) {
				let n = c.async_deriveds.get(e);
				n && t.promise.then(n.resolve);
			}
			if (c.#e) {
				var r = [...c.current.keys()].filter((e) => !this.current.has(e));
				if (0 === r.length) e && c.discard();
				else if (t.length > 0) {
					if (e) for (let e of this.#p) c.unskip_effect(e, (e) => {
						(4194320 & e.f) != 0 ? c.schedule(e) : c.#w([e]);
					});
					c.activate();
					var a = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map();
					for (var s of t) (function e(t, n, r, a) {
						if (!r.has(t) && (r.add(t), null !== t.reactions)) for (let l of t.reactions) {
							let t = l.f;
							(2 & t) != 0 ? e(l, n, r, a) : 4194320 & t && !(2048 & t) && eD(l, n, a) && (ex(l, 2048), eR(l));
						}
					})(s, r, a, l);
					l = /* @__PURE__ */ new Map();
					var i = [...c.current.keys()].filter((e) => !this.current.has(e) || this.current.get(e)[0] !== e.v);
					if (i.length > 0) for (let e of this.#d) !(155648 & e.f) && eD(e, i, l) && ((4194320 & e.f) != 0 ? (ex(e, 2048), c.schedule(e)) : c.#u.add(e));
					if (c.#c.length > 0 && !c.#v) {
						for (var o of (c.apply(), c.#c)) c.#m(o, [], []);
						c.#c = [];
					}
					c.deactivate();
				}
			}
		}
	}
	increment(e, t) {
		if (this.#s += 1, e) {
			let e = this.#i.get(t) ?? 0;
			this.#i.set(t, e + 1);
		}
	}
	decrement(e, t) {
		if (this.#s -= 1, e) {
			let e = this.#i.get(t) ?? 0;
			1 === e ? this.#i.delete(t) : this.#i.set(t, e - 1);
		}
		this.#v || (this.#v = !0, ev(() => {
			this.#v = !1, this.linked && this.flush();
		}));
	}
	transfer_effects(e, t) {
		for (let t of e) this.#u.add(t);
		for (let e of t) this.#f.add(e);
		e.clear(), t.clear();
	}
	oncommit(e) {
		this.#r.add(e);
	}
	ondiscard(e) {
		this.#a.add(e);
	}
	on_fork_commit(e) {
		this.#l.add(e);
	}
	run_fork_commit_callbacks() {
		for (let e of this.#l) e(this);
		this.#l.clear();
	}
	settled() {
		return (this.#o ??= M()).promise;
	}
	static ensure() {
		if (null === e$) {
			let t = e$ = new e();
			t.#_(), eA || eE || ev(() => {
				t.#e || t.flush();
			});
		}
		return e$;
	}
	apply() {
		eS = null;
	}
	schedule(e) {
		if (ej = e, e.b?.is_pending && (16777228 & e.f) != 0 && (32768 & e.f) == 0) return void e.b.defer_effect(e);
		for (var t = e; null !== t.parent;) {
			var n = (t = t.parent).f;
			if (null !== ez && t === tz && (null === tE || (2 & tE.f) == 0)) return;
			if ((96 & n) != 0) {
				if ((1024 & n) == 0) return;
				t.f ^= 1024;
			}
		}
		this.#c.push(t);
	}
	#_() {
		null === e_ ? ek = e_ = this : (e_.#n = this, this.#t = e_), e_ = this;
	}
	#x() {
		var e = this.#t, t = this.#n;
		null === e ? ek = t : e.#n = t, null === t ? e_ = e : t.#t = e, this.linked = !1;
	}
};
function eO(e) {
	var t, n = eE;
	eE = !0;
	try {
		for (e && (null === e$ || e$.is_fork || e$.flush(), t = e());;) {
			for (; eh.length > 0;) ep();
			if (null === e$) return t;
			e$.flush();
		}
	} finally {
		eE = n;
	}
}
var eT = null;
function eM(e) {
	var t = e.length;
	if (0 !== t) {
		for (var n = 0; n < t;) {
			var r = e[n++];
			if ((24576 & r.f) == 0 && tR(r) && (eT = /* @__PURE__ */ new Set(), tI(r), null === r.deps && null === r.first && null === r.nodes && null === r.teardown && null === r.ac && tk(r), eT?.size > 0)) {
				for (let e of (eK.clear(), eT)) {
					if ((24576 & e.f) != 0) continue;
					let t = [e], n = e.parent;
					for (; null !== n;) eT.has(n) && (eT.delete(n), t.push(n)), n = n.parent;
					for (let e = t.length - 1; e >= 0; e--) {
						let n = t[e];
						!(24576 & n.f) && tI(n);
					}
				}
				eT.clear();
			}
		}
		eT = null;
	}
}
function eD(e, t, n) {
	let r = n.get(e);
	if (void 0 !== r) return r;
	if (null !== e.deps) for (let r of e.deps) {
		if ($.call(t, r)) return !0;
		if ((2 & r.f) != 0 && eD(r, t, n)) return n.set(r, !0), !0;
	}
	return n.set(e, !1), !1;
}
function eR(e) {
	e$.schedule(e);
}
var eN = class {
	parent;
	is_pending = !1;
	transform_error;
	#q;
	#S = Q ? c : null;
	#j;
	#E;
	#A;
	#z = null;
	#F = null;
	#C = null;
	#P = null;
	#L = 0;
	#O = 0;
	#T = !1;
	#u = /* @__PURE__ */ new Set();
	#f = /* @__PURE__ */ new Set();
	#M = null;
	#D = (function(e) {
		let t, n = 0, r = eQ(0);
		return () => {
			tu() && (tH(r), tv(() => (0 === n && (t = tW(() => e(() => e8(r)))), n += 1, () => {
				ev(() => {
					0 == (n -= 1) && (t?.(), t = void 0, e8(r));
				});
			})));
		};
	})(() => (this.#M = eQ(this.#L), () => {
		this.#M = null;
	}));
	constructor(e, t, n, r) {
		this.#q = e, this.#j = t, this.#E = (e) => {
			var t = tz;
			t.b = this, t.f |= 128, n(e);
		}, this.parent = tz.b, this.transform_error = r ?? this.parent?.transform_error ?? ((e) => e), this.#A = tb(() => {
			if (Q) {
				let e = this.#S;
				et();
				let t = "[!" === e.data;
				if (e.data.startsWith("[?")) {
					let t = JSON.parse(e.data.slice(2));
					this.#R(t);
				} else t ? this.#N() : this.#B();
			} else this.#I();
		}, 589824), Q && (this.#q = c);
	}
	#B() {
		try {
			this.#z = tx(() => this.#E(this.#q));
		} catch (e) {
			this.error(e);
		}
	}
	#R(e) {
		let t = this.#j.failed;
		t && (this.#C = tx(() => {
			t(this.#q, () => e, () => () => {});
		}));
	}
	#N() {
		let e = this.#j.pending;
		e && (this.is_pending = !0, this.#F = tx(() => e(this.#q)), ev(() => {
			var e = this.#P = document.createDocumentFragment(), t = e7();
			e.append(t), this.#z = this.#U(() => tx(() => this.#E(t))), 0 === this.#O && (this.#q.before(e), this.#P = null, t_(this.#F, () => {
				this.#F = null;
			}), this.#H(e$));
		}));
	}
	#I() {
		try {
			if (this.is_pending = this.has_pending_snippet(), this.#O = 0, this.#L = 0, this.#z = tx(() => {
				this.#E(this.#q);
			}), this.#O > 0) {
				var e = this.#P = document.createDocumentFragment();
				tq(this.#z, e);
				let t = this.#j.pending;
				this.#F = tx(() => t(this.#q));
			} else this.#H(e$);
		} catch (e) {
			this.error(e);
		}
	}
	#H(e) {
		this.is_pending = !1, e.transfer_effects(this.#u, this.#f);
	}
	defer_effect(e) {
		ew(e, this.#u, this.#f);
	}
	is_rendered() {
		return !this.is_pending && (!this.parent || this.parent.is_rendered());
	}
	has_pending_snippet() {
		return !!this.#j.pending;
	}
	#U(e) {
		var t = tz, n = tE, r = ec;
		tz = this.#A, tE = this.#A, ec = this.#A.ctx;
		try {
			return eL.ensure(), e();
		} catch (e) {
			return eg(e), null;
		} finally {
			tz = t, tE = n, ec = r;
		}
	}
	#W(e, t) {
		if (!this.has_pending_snippet()) {
			this.parent && this.parent.#W(e, t);
			return;
		}
		this.#O += e, 0 === this.#O && (this.#H(t), this.#F && t_(this.#F, () => {
			this.#F = null;
		}), this.#P && (this.#q.before(this.#P), this.#P = null));
	}
	update_pending_count(e, t) {
		this.#W(e, t), this.#L += e, this.#M && !this.#T && (this.#T = !0, ev(() => {
			this.#T = !1, this.#M && e5(this.#M, this.#L);
		}));
	}
	get_effect_pending() {
		return this.#D(), tH(this.#M);
	}
	error(e) {
		if (!this.#j.onerror && !this.#j.failed) throw e;
		e$?.is_fork ? (this.#z && e$.skip_effect(this.#z), this.#F && e$.skip_effect(this.#F), this.#C && e$.skip_effect(this.#C), e$.on_fork_commit(() => {
			this.#G(e);
		})) : this.#G(e);
	}
	#G(e) {
		this.#z && (ty(this.#z), this.#z = null), this.#F && (ty(this.#F), this.#F = null), this.#C && (ty(this.#C), this.#C = null), Q && (ee(this.#S), er(), ee(ea()));
		var t = this.#j.onerror;
		let n = this.#j.failed;
		var r = !1, a = !1;
		let l = () => {
			r ? console.warn("https://svelte.dev/e/svelte_boundary_reset_noop") : (r = !0, a && function() {
				throw Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
			}(), null !== this.#C && t_(this.#C, () => {
				this.#C = null;
			}), this.#U(() => {
				this.#I();
			}));
		}, s = (e) => {
			try {
				a = !0, t?.(e, l), a = !1;
			} catch (e) {
				eb(e, this.#A && this.#A.parent);
			}
			n && (this.#C = this.#U(() => {
				try {
					return tx(() => {
						var t = tz;
						t.b = this, t.f |= 128, n(this.#q, () => e, () => l);
					});
				} catch (e) {
					return eb(e, this.#A.parent), null;
				}
			}));
		};
		ev(() => {
			var t;
			try {
				t = this.transform_error(e);
			} catch (e) {
				eb(e, this.#A && this.#A.parent);
				return;
			}
			null !== t && "object" == typeof t && "function" == typeof t.then ? t.then(s, (e) => eb(e, this.#A && this.#A.parent)) : s(t);
		});
	}
};
function eB(e = !0) {
	tz = null, tE = null, ec = null, e && e$?.deactivate();
}
function eI() {
	var e = tz, t = e.b, n = e$, r = t.is_rendered();
	return t.update_pending_count(1, n), n.increment(r, e), () => {
		t.update_pending_count(-1, n), n.decrement(r, e);
	};
}
function eU(e) {
	return null !== tz && (tz.f |= 524288), {
		ctx: ec,
		deps: null,
		effects: null,
		equals: es,
		f: 2050,
		fn: e,
		reactions: null,
		rv: 0,
		v: K,
		wv: 0,
		parent: tz,
		ac: null
	};
}
var eH = Symbol("obsolete");
function eW(e) {
	let t = eU(e);
	return tC(t), t;
}
function eG(e) {
	let t = eU(e);
	return t.equals = ei, t;
}
function eY(e) {
	var t, n = tz, r = e.parent;
	if (!tj && null !== r && e.v !== K && (24576 & r.f) != 0) return console.warn("https://svelte.dev/e/derived_inert"), e.v;
	tz = r;
	try {
		e.f &= -65537;
		var a = e.effects;
		if (null !== a) {
			e.effects = null;
			for (var l = 0; l < a.length; l += 1) ty(a[l]);
		}
		t = tN(e);
	} finally {
		tz = n;
	}
	return t;
}
function eV(e) {
	var t = eY(e);
	e.equals(t) || (e.wv = ++tT, e$?.is_fork && null !== e.deps) || (null !== e$ ? (e$.capture(e, t, !0), eq?.capture(e, t, !0)) : e.v = t, null !== e.deps) ? !tj && (null !== eS ? (tu() || e$?.is_fork) && eS.set(e, t) : em(e)) : ex(e, 1024);
}
function eX(e) {
	if (null !== e.effects) for (let t of e.effects) t.teardown && null !== t.fn && tI(t);
}
var eJ = /* @__PURE__ */ new Set(), eK = /* @__PURE__ */ new Map(), eZ = !1;
function eQ(e, t) {
	return {
		f: 0,
		v: e,
		reactions: null,
		equals: es,
		rv: 0,
		wv: 0
	};
}
function e0(e, t) {
	let n = eQ(e, t);
	return tC(n), n;
}
function e1(e, t = !1, n = !0) {
	let r = eQ(e);
	return t || (r.equals = ei), eo && n && null !== ec && null !== ec.l && (ec.l.s ??= []).push(r), r;
}
function e2(e, t, n = !1) {
	return null !== tE && (!tA || 131072 & tE.f) && ef() && 4325394 & tE.f && (null === tF || !$.call(tF, e)) && function() {
		throw Error("https://svelte.dev/e/state_unsafe_mutation");
	}(), e5(e, n ? e3(t) : t, eF);
}
function e5(e, t, n = null) {
	if (!e.equals(t)) {
		eK.set(e, tj ? t : e.v);
		var r = eL.ensure();
		r.capture(e, t), 2 & e.f && (2048 & e.f && eY(e), null === eS && em(e)), e.wv = ++tT, function e(t, n, r) {
			var a = t.reactions;
			if (null !== a) for (var l = ef(), s = a.length, i = 0; i < s; i++) {
				var o = a[i], c = o.f;
				if (l || o !== tz) {
					var d = (2048 & c) == 0;
					d && ex(o, n), (131072 & c) != 0 ? eJ.add(o) : (2 & c) != 0 ? (eS?.delete(o), !(65536 & c) && (512 & c && (null === tz || !(2097152 & tz.f)) && (o.f |= 65536), e(o, 4096, r))) : d && (16 & c && null !== eT && eT.add(o), null !== r ? r.push(o) : eR(o));
				}
			}
		}(e, 2048, n), ef() && null !== tz && 1024 & tz.f && !(96 & tz.f) && (null === tO ? tO = [e] : tO.push(e)), r.is_fork || !(eJ.size > 0) || eZ || function() {
			for (let e of (eZ = !1, eJ)) {
				let t;
				1024 & e.f && ex(e, 4096);
				try {
					t = tR(e);
				} catch {
					t = !0;
				}
				t && tI(e);
			}
			eJ.clear();
		}();
	}
	return t;
}
function e8(e) {
	e2(e, e.v + 1);
}
function e3(e) {
	if ("object" != typeof e || null === e || R in e) return e;
	let t = C(e);
	if (t !== z && t !== F) return e;
	var n = /* @__PURE__ */ new Map(), r = k(e), a = e0(0), l = tD, s = (e) => {
		if (tD === l) return e();
		var t = tE, n = tD;
		tE = null, tD = l;
		var r = e();
		return tE = t, tD = n, r;
	};
	return r && n.set("length", e0(e.length, null)), new Proxy(e, {
		defineProperty(e, t, r) {
			"value" in r && !1 !== r.configurable && !1 !== r.enumerable && !1 !== r.writable || function() {
				throw Error("https://svelte.dev/e/state_descriptors_fixed");
			}();
			var a = n.get(t);
			return void 0 === a ? s(() => {
				var e = e0(r.value, null);
				return n.set(t, e), e;
			}) : e2(a, r.value, !0), !0;
		},
		deleteProperty(e, t) {
			var r = n.get(t);
			if (void 0 === r) {
				if (t in e) {
					let e = s(() => e0(K, null));
					n.set(t, e), e8(a);
				}
			} else e2(r, K), e8(a);
			return !0;
		},
		get(t, r, a) {
			if (r === R) return e;
			var l = n.get(r), i = r in t;
			if (void 0 === l && (!i || E(t, r)?.writable) && (l = s(() => e0(e3(i ? t[r] : K), null)), n.set(r, l)), void 0 !== l) {
				var o = tH(l);
				return o === K ? void 0 : o;
			}
			return Reflect.get(t, r, a);
		},
		getOwnPropertyDescriptor(e, t) {
			var r = Reflect.getOwnPropertyDescriptor(e, t);
			if (r && "value" in r) {
				var a = n.get(t);
				a && (r.value = tH(a));
			} else if (void 0 === r) {
				var l = n.get(t), s = l?.v;
				if (void 0 !== l && s !== K) return {
					enumerable: !0,
					configurable: !0,
					value: s,
					writable: !0
				};
			}
			return r;
		},
		has(e, t) {
			if (t === R) return !0;
			var r = n.get(t), a = void 0 !== r && r.v !== K || Reflect.has(e, t);
			return (!(void 0 !== r || null !== tz && (!a || E(e, t)?.writable)) || (void 0 === r && (r = s(() => e0(a ? e3(e[t]) : K, null)), n.set(t, r)), tH(r) !== K)) && a;
		},
		set(e, t, l, i) {
			var o = n.get(t), c = t in e;
			if (r && "length" === t) for (var d = l; d < o.v; d += 1) {
				var u = n.get(d + "");
				void 0 !== u ? e2(u, K) : d in e && (u = s(() => e0(K, null)), n.set(d + "", u));
			}
			void 0 === o ? (!c || E(e, t)?.writable) && (e2(o = s(() => e0(void 0, null)), e3(l)), n.set(t, o)) : (c = o.v !== K, e2(o, s(() => e3(l))));
			var f = Reflect.getOwnPropertyDescriptor(e, t);
			if (f?.set && f.set.call(i, l), !c) {
				if (r && "string" == typeof t) {
					var h = n.get("length"), p = Number(t);
					Number.isInteger(p) && p >= h.v && e2(h, p + 1);
				}
				e8(a);
			}
			return !0;
		},
		ownKeys(e) {
			tH(a);
			var t = Reflect.ownKeys(e).filter((e) => {
				var t = n.get(e);
				return void 0 === t || t.v !== K;
			});
			for (var [r, l] of n) l.v === K || r in e || t.push(r);
			return t;
		},
		setPrototypeOf() {
			throw Error("https://svelte.dev/e/state_prototype_fixed");
		}
	});
}
function e4() {
	if (void 0 === d) {
		d = window, u = /Firefox/.test(navigator.userAgent);
		var e = Element.prototype, t = Node.prototype, n = Text.prototype;
		f = E(t, "firstChild").get, h = E(t, "nextSibling").get, P(e) && (e[H] = void 0, e[U] = null, e[W] = void 0, e.__e = void 0), P(n) && (n[G] = void 0);
	}
}
function e7(e = "") {
	return document.createTextNode(e);
}
function e6(e) {
	return f.call(e);
}
function e9(e) {
	return h.call(e);
}
function te(e, t) {
	if (!Q) return e6(e);
	var n = e6(c);
	if (null === n) n = c.appendChild(e7());
	else if (t && 3 !== n.nodeType) {
		var r = e7();
		return n?.before(r), ee(r), r;
	}
	return t && tl(n), ee(n), n;
}
function tt(e, t = !1) {
	if (!Q) {
		var n = e6(e);
		return n instanceof Comment && "" === n.data ? e9(n) : n;
	}
	if (t) {
		if (c?.nodeType !== 3) {
			var r = e7();
			return c?.before(r), ee(r), r;
		}
		tl(c);
	}
	return c;
}
function tn(e, t = 1, n = !1) {
	let r = Q ? c : e;
	for (; t--;) a = r, r = e9(r);
	if (!Q) return r;
	if (n) {
		if (r?.nodeType !== 3) {
			var a, l = e7();
			return null === r ? a?.after(l) : r.before(l), ee(l), l;
		}
		tl(r);
	}
	return ee(r), r;
}
function tr(e) {
	e.textContent = "";
}
function ta(e, t, n) {
	return document.createElementNS(t ?? "http://www.w3.org/1999/xhtml", e, n ? { is: n } : void 0);
}
function tl(e) {
	if (e.nodeValue.length < 65536) return;
	let t = e.nextSibling;
	for (; null !== t && 3 === t.nodeType;) t.remove(), e.nodeValue += t.nodeValue, t = e.nextSibling;
}
var ts = !1;
function ti() {
	ts || (ts = !0, document.addEventListener("reset", (e) => {
		Promise.resolve().then(() => {
			if (!e.defaultPrevented) for (let t of e.target.elements) t[Y]?.();
		});
	}, { capture: !0 }));
}
function to(e) {
	var t = tE, n = tz;
	tE = null, tz = null;
	try {
		return e();
	} finally {
		tE = t, tz = n;
	}
}
function tc(e) {
	if (null === tz) throw null === tE && function() {
		throw Error("https://svelte.dev/e/effect_orphan");
	}(), Error("https://svelte.dev/e/effect_in_unowned_derived");
	tj && function() {
		throw Error("https://svelte.dev/e/effect_in_teardown");
	}();
}
function td(e, t) {
	var n = tz;
	null !== n && 8192 & n.f && (e |= 8192);
	var r = {
		ctx: ec,
		deps: null,
		nodes: null,
		f: e | 2560,
		first: null,
		fn: t,
		last: null,
		next: null,
		parent: n,
		b: n && n.b,
		prev: null,
		teardown: null,
		wv: 0,
		ac: null
	};
	e$?.register_created_effect(r);
	var a = r;
	if ((4 & e) != 0) null !== ez ? ez.push(r) : eL.ensure().schedule(r);
	else if (null !== t) {
		try {
			tI(r);
		} catch (e) {
			throw ty(r), e;
		}
		null === a.deps && null === a.teardown && null === a.nodes && a.first === a.last && !(524288 & a.f) && (a = a.first, 16 & e && 65536 & e && null !== a && (a.f |= 65536));
	}
	if (null !== a && (a.parent = n, null !== n && (l = a, null === (s = n.last) ? n.last = n.first = l : (s.next = l, l.prev = s, n.last = l)), null !== tE && (2 & tE.f) != 0 && (64 & e) == 0)) {
		var l, s, i = tE;
		(i.effects ??= []).push(a);
	}
	return r;
}
function tu() {
	return null !== tE && !tA;
}
function tf(e) {
	let t = td(8, null);
	return ex(t, 1024), t.teardown = e, t;
}
function th(e) {
	tc("$effect");
	var t = tz.f;
	if (tE || (32 & t) == 0 || (32768 & t) != 0) return tp(e);
	var n = ec;
	(n.e ??= []).push(e);
}
function tp(e) {
	return td(1048580, e);
}
function tv(e, t = 0) {
	return td(8 | t, e);
}
function tg(e, t = [], n = [], r = []) {
	(function(e, t, n, r) {
		let a = ef() ? eU : eG;
		var l, s, i, o, c = e.filter((e) => !e.settled);
		if (0 === n.length && 0 === c.length) return r(t.map(a));
		var d = tz, u = (l = tz, s = tE, i = ec, o = e$, function(e = !0) {
			tz = l, tE = s, ec = i, e && !(16384 & l.f) && (o?.activate(), o?.apply());
		}), f = 1 === c.length ? c[0].promise : c.length > 1 ? Promise.all(c.map((e) => e.promise)) : null;
		function h(e) {
			if ((16384 & d.f) == 0) {
				u();
				try {
					r(e);
				} catch (e) {
					eb(e, d);
				}
				eB();
			}
		}
		var p = eI();
		if (0 === n.length) return f.then(() => h(t.map(a))).finally(p);
		function v() {
			Promise.all(n.map((e) => {
				var t, n, r, a, l;
				let s;
				return t = e, null === (s = tz) && function() {
					throw Error("https://svelte.dev/e/async_derived_orphan");
				}(), n = void 0, r = eQ(K), a = !tE, l = /* @__PURE__ */ new Set(), td(4718592, () => {
					var e = tz, i = M();
					n = i.promise;
					try {
						Promise.resolve(t()).then(i.resolve, (e) => {
							e !== V && i.reject(e);
						}).finally(eB);
					} catch (e) {
						i.reject(e), eB();
					}
					var o = e$;
					if (a) {
						if ((32768 & e.f) != 0) var c = eI();
						if (s.b.is_rendered()) o.async_deriveds.get(e)?.reject(eH);
						else for (let e of l.values()) e.reject(eH);
						l.add(i), o.async_deriveds.set(e, i);
					}
					let d = (e, t) => {
						c?.(), l.delete(i), t !== eH && (o.activate(), t ? (r.f |= 8388608, e5(r, t)) : (8388608 & r.f && (r.f ^= 8388608), e5(r, e)), o.deactivate());
					};
					i.promise.then(d, (e) => d(null, e || "unknown"));
				}), tf(() => {
					for (let e of l) e.reject(eH);
				}), new Promise((e) => {
					(function t(a) {
						function l() {
							a === n ? e(r) : t(n);
						}
						a.then(l, l);
					})(n);
				});
			})).then((e) => h([...t.map(a), ...e])).catch((e) => eb(e, d)).finally(p);
		}
		f ? f.then(() => {
			u(), v(), eB();
		}) : v();
	})(r, t, n, (t) => {
		td(8, () => e(...t.map(tH)));
	});
}
function tb(e, t = 0) {
	return td(16 | t, e);
}
function tx(e) {
	return td(524320, e);
}
function tm(e) {
	var t = e.teardown;
	if (null !== t) {
		let e = tj, n = tE;
		tj = !0, tE = null;
		try {
			t.call(null);
		} finally {
			tj = e, tE = n;
		}
	}
}
function tw(e, t = !1) {
	var n = e.first;
	for (e.first = e.last = null; null !== n;) {
		let e = n.ac;
		null !== e && to(() => {
			e.abort(V);
		});
		var r = n.next;
		(64 & n.f) != 0 ? n.parent = null : ty(n, t), n = r;
	}
}
function ty(e, t = !0) {
	var n = !1;
	(t || 262144 & e.f) && null !== e.nodes && null !== e.nodes.end && (function(e, t) {
		for (; null !== e;) {
			var n = e === t ? null : e9(e);
			e.remove(), e = n;
		}
	}(e.nodes.start, e.nodes.end), n = !0), ex(e, 33554432), tw(e, t && !n), tB(e, 0);
	var r = e.nodes && e.nodes.t;
	if (null !== r) for (let e of r) e.stop();
	tm(e), e.f ^= 33554432, e.f |= 16384;
	var a = e.parent;
	null !== a && null !== a.first && tk(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function tk(e) {
	var t = e.parent, n = e.prev, r = e.next;
	null !== n && (n.next = r), null !== r && (r.prev = n), null !== t && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function t_(e, t, n = !0) {
	var r = [];
	(function e(t, n, r) {
		if ((8192 & t.f) == 0) {
			t.f ^= 8192;
			var a = t.nodes && t.nodes.t;
			if (null !== a) for (let e of a) (e.is_global || r) && n.push(e);
			for (var l = t.first; null !== l;) {
				var s = l.next;
				if ((64 & l.f) == 0) {
					var i = (65536 & l.f) != 0 || (32 & l.f) != 0 && (16 & t.f) != 0;
					e(l, n, !!i && r);
				}
				l = s;
			}
		}
	})(e, r, !0);
	var a = () => {
		n && ty(e), t && t();
	}, l = r.length;
	if (l > 0) {
		var s = () => --l || a();
		for (var i of r) i.out(s);
	} else a();
}
function t$(e, t) {
	if ((8192 & e.f) != 0) {
		e.f ^= 8192, !(1024 & e.f) && (ex(e, 2048), eL.ensure().schedule(e));
		for (var n = e.first; null !== n;) {
			var r = n.next, a = (65536 & n.f) != 0 || (32 & n.f) != 0;
			t$(n, !!a && t), n = r;
		}
		var l = e.nodes && e.nodes.t;
		if (null !== l) for (let e of l) (e.is_global || t) && e.in();
	}
}
function tq(e, t) {
	if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; null !== n;) {
		var a = n === r ? null : e9(n);
		t.append(n), n = a;
	}
}
var tS = !1, tj = !1, tE = null, tA = !1, tz = null, tF = null;
function tC(e) {
	null !== tE && (null === tF ? tF = [e] : tF.push(e));
}
var tP = null, tL = 0, tO = null, tT = 1, tM = 0, tD = 0;
function tR(e) {
	var t = e.f;
	if ((2048 & t) != 0) return !0;
	if (2 & t && (e.f &= -65537), (4096 & t) != 0) {
		for (var n = e.deps, r = n.length, a = 0; a < r; a++) {
			var l = n[a];
			if (tR(l) && eV(l), l.wv > e.wv) return !0;
		}
		512 & t && null === eS && ex(e, 1024);
	}
	return !1;
}
function tN(e) {
	var t = tP, n = tL, r = tO, a = tE, l = tF, s = ec, i = tA, o = tD, c = e.f;
	tP = null, tL = 0, tO = null, tE = (96 & c) == 0 ? e : null, tF = null, ec = e.ctx, tA = !1, tD = ++tM, null !== e.ac && (to(() => {
		e.ac.abort(V);
	}), e.ac = null);
	try {
		e.f |= 2097152;
		var d, u = (0, e.fn)();
		e.f |= 32768;
		var f = e.deps, h = e$?.is_fork;
		if (null !== tP) {
			if (h || tB(e, tL), null !== f && tL > 0) for (f.length = tL + tP.length, d = 0; d < tP.length; d++) f[tL + d] = tP[d];
			else e.deps = f = tP;
			if (tu() && (512 & e.f) != 0) for (d = tL; d < f.length; d++) (f[d].reactions ??= []).push(e);
		} else !h && null !== f && tL < f.length && (tB(e, tL), f.length = tL);
		if (ef() && null !== tO && !tA && null !== f && (6146 & e.f) == 0) for (d = 0; d < tO.length; d++) (function e(t, n, r = !0) {
			var a = t.reactions;
			if (null !== a && !(null !== tF && $.call(tF, t))) for (var l = 0; l < a.length; l++) {
				var s = a[l];
				(2 & s.f) != 0 ? e(s, n, !1) : n === s && (r ? ex(s, 2048) : 1024 & s.f && ex(s, 4096), eR(s));
			}
		})(tO[d], e);
		if (null !== a && a !== e) {
			if (tM++, null !== a.deps) for (let e = 0; e < n; e += 1) a.deps[e].rv = tM;
			if (null !== t) for (let e of t) e.rv = tM;
			null !== tO && (null === r ? r = tO : r.push(...tO));
		}
		return 8388608 & e.f && (e.f ^= 8388608), u;
	} catch (e) {
		return eg(e);
	} finally {
		e.f ^= 2097152, tP = t, tL = n, tO = r, tE = a, tF = l, ec = s, tA = i, tD = o;
	}
}
function tB(e, t) {
	var n = e.deps;
	if (null !== n) for (var r = t; r < n.length; r++) (function(e, t) {
		let n = t.reactions;
		if (null !== n) {
			var r = _.call(n, e);
			if (-1 !== r) {
				var a = n.length - 1;
				0 === a ? n = t.reactions = null : (n[r] = n[a], n.pop());
			}
		}
		if (null === n && (2 & t.f) != 0 && (null === tP || !$.call(tP, t))) {
			512 & t.f && (t.f ^= 512, t.f &= -65537), t.v !== K && em(t);
			if (null !== t.effects) for (let e of t.effects) (e.teardown || e.ac) && (e.teardown?.(), e.ac?.abort(V), null !== e.fn && (e.teardown = L), e.ac = null, tB(e, 0), tw(e));
			tB(t, 0);
		}
	})(e, n[r]);
}
function tI(e) {
	var t = e.f;
	if ((16384 & t) == 0) {
		ex(e, 1024);
		var n = tz, r = tS;
		tz = e, tS = !0;
		try {
			if ((16777232 & t) != 0) for (var a = e.first; null !== a;) {
				var l = a.next;
				!(32 & a.f) && ty(a), a = l;
			}
			else tw(e);
			tm(e);
			var s = tN(e);
			e.teardown = "function" == typeof s ? s : null, e.wv = tT;
		} finally {
			tS = r, tz = n;
		}
	}
}
async function tU() {
	await Promise.resolve(), eO();
}
function tH(e) {
	var t = (2 & e.f) != 0;
	if (null !== tE && !tA && (null === tz || (16384 & tz.f) == 0) && (null === tF || !$.call(tF, e))) {
		var n = tE.deps;
		if ((2097152 & tE.f) != 0) e.rv < tM && (e.rv = tM, null === tP && null !== n && n[tL] === e ? tL++ : null === tP ? tP = [e] : tP.push(e));
		else {
			tE.deps ??= [], $.call(tE.deps, e) || tE.deps.push(e);
			var r = e.reactions;
			null === r ? e.reactions = [tE] : $.call(r, tE) || r.push(tE);
		}
	}
	if (tj && eK.has(e)) return eK.get(e);
	if (t) {
		if (tj) {
			var a = e.v;
			return (!(1024 & e.f) && null !== e.reactions || function e(t) {
				if (t.v === K) return !0;
				if (null === t.deps) return !1;
				for (let n of t.deps) if (eK.has(n) || (2 & n.f) != 0 && e(n)) return !0;
				return !1;
			}(e)) && (a = eY(e)), eK.set(e, a), a;
		}
		var l = (512 & e.f) == 0 && !tA && null !== tE && (tS || (512 & tE.f) != 0), s = (32768 & e.f) == 0;
		tR(e) && (l && (e.f |= 512), eV(e)), l && !s && (eX(e), function e(t) {
			if (t.f |= 512, null !== t.deps) for (let n of t.deps) (n.reactions ??= []).push(t), 2 & n.f && !(512 & n.f) && (eX(n), e(n));
		}(e));
	}
	if (eS?.has(e)) return eS.get(e);
	if ((8388608 & e.f) != 0) throw e.v;
	return e.v;
}
function tW(e) {
	var t = tA;
	try {
		return tA = !0, e();
	} finally {
		tA = t;
	}
}
function tG(e, t = /* @__PURE__ */ new Set()) {
	if ("object" == typeof e && null !== e && !(e instanceof EventTarget) && !t.has(e)) {
		for (let n in t.add(e), e instanceof Date && e.getTime(), e) try {
			tG(e[n], t);
		} catch (e) {}
		let n = C(e);
		if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
			let t = A(n);
			for (let n in t) {
				let r = t[n].get;
				if (r) try {
					r.call(e);
				} catch (e) {}
			}
		}
	}
}
var tY = ["touchstart", "touchmove"];
var tV = Symbol("events"), tX = /* @__PURE__ */ new Set(), tJ = /* @__PURE__ */ new Set();
function tK(e, t, n, r, a) {
	var l = {
		capture: r,
		passive: a
	}, s = function(e, t, n, r = {}) {
		function a(e) {
			if (r.capture || t0.call(t, e), !e.cancelBubble) return to(() => n?.call(this, e));
		}
		return e.startsWith("pointer") || e.startsWith("touch") || "wheel" === e ? ev(() => {
			t.addEventListener(e, a, r);
		}) : t.addEventListener(e, a, r), a;
	}(e, t, n, l);
	(t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && tf(() => {
		t.removeEventListener(e, s, l);
	});
}
function tZ(e, t, n) {
	(t[tV] ??= {})[e] = n;
}
function tQ(e) {
	for (var t = 0; t < e.length; t++) tX.add(e[t]);
	for (var n of tJ) n(e);
}
function t0(e) {
	var t = this.ownerDocument, n = e.type, r = e.composedPath?.() || [], a = r[0] || e.target, l = 0, s = e == e && e[tV];
	if (s) {
		var i = r.indexOf(s);
		if (-1 !== i && (this === document || this === window)) {
			e[tV] = this;
			return;
		}
		var o = r.indexOf(this);
		if (-1 === o) return;
		i <= o && (l = i);
	}
	if ((a = r[l] || e.target) !== this) {
		j(e, "currentTarget", {
			configurable: !0,
			get: () => a || t
		});
		var c = tE, d = tz;
		tE = null, tz = null;
		try {
			for (var u, f = []; null !== a;) {
				var h = a.assignedSlot || a.parentNode || a.host || null;
				try {
					var p = a[tV]?.[n];
					null == p || a.disabled && e.target !== a || p.call(a, e);
				} catch (e) {
					u ? f.push(e) : u = e;
				}
				if (e.cancelBubble || h === this || null === h) break;
				a = h;
			}
			if (u) {
				for (let e of f) queueMicrotask(() => {
					throw e;
				});
				throw u;
			}
		} finally {
			e[tV] = this, delete e.currentTarget, tE = c, tz = d;
		}
	}
}
var t1 = globalThis?.window?.trustedTypes && globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function t2(e, t) {
	var n = tz;
	null === n.nodes && (n.nodes = {
		start: e,
		end: t,
		a: null,
		t: null
	});
}
function t5(e, t) {
	var n, r = (1 & t) != 0, a = (2 & t) != 0, l = !e.startsWith("<!>");
	return () => {
		if (Q) return t2(c, null), c;
		if (void 0 === n) {
			var t = l ? e : "<!>" + e, s = ta("template"), i = t.replaceAll("<!>", "<!---->");
			s.innerHTML = t1?.createHTML(i) ?? i, n = s.content, r || (n = e6(n));
		}
		var o = a || u ? document.importNode(n, !0) : n.cloneNode(!0);
		return r ? t2(e6(o), o.lastChild) : t2(o, o), o;
	};
}
function t8() {
	if (Q) return t2(c, null), c;
	var e = document.createDocumentFragment(), t = document.createComment(""), n = e7();
	return e.append(t, n), t2(t, n), e;
}
function t3(e, t) {
	if (Q) {
		var n = tz;
		(!(32768 & n.f) || null === n.nodes.end) && (n.nodes.end = c), et();
		return;
	}
	null !== e && e.before(t);
}
function t4(e, t) {
	var n = null == t ? "" : "object" == typeof t ? `${t}` : t;
	n !== (e[G] ??= e.nodeValue) && (e[G] = n, e.nodeValue = `${n}`);
}
var t7 = /* @__PURE__ */ new Map();
function t6(e, { target: t, anchor: n, props: r = {}, events: a, context: l, intro: s = !0, transformError: i }) {
	let o;
	e4();
	var d, u = void 0, f = (d = () => {
		var s = n ?? t.appendChild(e7());
		new eN(s, { pending: () => {} }, (t) => {
			ed({});
			var n = ec;
			if (l && (n.c = l), a && (r.$$events = a), Q && t2(t, null), u = e(t, r) || {}, Q && (tz.nodes.end = c, null === c || 8 !== c.nodeType || "]" !== c.data)) throw Z(), J;
			eu();
		}, i);
		var o = /* @__PURE__ */ new Set(), d = (e) => {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				if (!o.has(r)) {
					o.add(r);
					var a = tY.includes(r);
					for (let e of [t, document]) {
						var l = t7.get(e);
						void 0 === l && (l = /* @__PURE__ */ new Map(), t7.set(e, l));
						var s = l.get(r);
						void 0 === s ? (e.addEventListener(r, t0, { passive: a }), l.set(r, 1)) : l.set(r, s + 1);
					}
				}
			}
		};
		return d(q(tX)), tJ.add(d), () => {
			for (var e of o) for (let n of [t, document]) {
				var r = t7.get(n), a = r.get(e);
				0 == --a ? (n.removeEventListener(e, t0), r.delete(e), 0 === r.size && t7.delete(n)) : r.set(e, a);
			}
			tJ.delete(d), s !== n && s.parentNode?.removeChild(s);
		};
	}, eL.ensure(), o = td(524352, d), (e = {}) => new Promise((t) => {
		e.outro ? t_(o, () => {
			ty(o), t(void 0);
		}) : (ty(o), t(void 0));
	}));
	return t9.set(u, f), u;
}
var t9 = /* @__PURE__ */ new WeakMap(), ne = class {
	anchor;
	#Y = /* @__PURE__ */ new Map();
	#V = /* @__PURE__ */ new Map();
	#X = /* @__PURE__ */ new Map();
	#J = /* @__PURE__ */ new Set();
	#K = !0;
	constructor(e, t = !0) {
		this.anchor = e, this.#K = t;
	}
	#$ = (e) => {
		if (this.#Y.has(e)) {
			var t = this.#Y.get(e), n = this.#V.get(t);
			if (n) t$(n, !0), this.#J.delete(t);
			else {
				var r = this.#X.get(t);
				r && (this.#V.set(t, r.effect), this.#X.delete(t), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), n = r.effect);
			}
			for (let [t, n] of this.#Y) {
				if (this.#Y.delete(t), t === e) break;
				let r = this.#X.get(n);
				r && (ty(r.effect), this.#X.delete(n));
			}
			for (let [e, r] of this.#V) {
				if (e === t || this.#J.has(e)) continue;
				let a = () => {
					if (Array.from(this.#Y.values()).includes(e)) {
						var t = document.createDocumentFragment();
						tq(r, t), t.append(e7()), this.#X.set(e, {
							effect: r,
							fragment: t
						});
					} else ty(r);
					this.#J.delete(e), this.#V.delete(e);
				};
				this.#K || !n ? (this.#J.add(e), t_(r, a, !1)) : a();
			}
		}
	};
	#Z = (e) => {
		this.#Y.delete(e);
		let t = Array.from(this.#Y.values());
		for (let [e, n] of this.#X) t.includes(e) || (ty(n.effect), this.#X.delete(e));
	};
	ensure(e, t) {
		var n = e$;
		if (t && !this.#V.has(e) && !this.#X.has(e)) this.#V.set(e, tx(() => t(this.anchor)));
		this.#Y.set(n, e);
		Q && (this.anchor = c), this.#$(n);
	}
};
function nt(e, t, n = !1) {
	Q && (r = c, et());
	var r, a = new ne(e);
	function l(e, t) {
		if (Q && e !== parseInt(el(r).substring(1))) {
			var n = ea();
			ee(n), a.anchor = n, Q = !1, a.ensure(e, t), Q = !0;
			return;
		}
		a.ensure(e, t);
	}
	tb(() => {
		var e = !1;
		t((t, n = 0) => {
			e = !0, l(n, t);
		}), e || l(-1, null);
	}, 65536 * !!n);
}
function nn(e, t) {
	return t;
}
function nr(e, t, n = !0) {
	var r;
	if (e.pending.size > 0) for (let t of (r = /* @__PURE__ */ new Set(), e.pending.values())) for (let n of t) r.add(e.items.get(n).e);
	for (var a = 0; a < t.length; a++) {
		var l = t[a];
		r?.has(l) ? (l.f |= 33554432, tq(l, document.createDocumentFragment())) : ty(t[a], n);
	}
}
function na(e, t, n, r, a, l = null) {
	var s, i = e, o = /* @__PURE__ */ new Map();
	4 & t && (i = Q ? ee(e6(e)) : e.appendChild(e7())), Q && et();
	var d = null, u = eG(() => {
		var e = n();
		return k(e) ? e : null == e ? [] : q(e);
	}), f = /* @__PURE__ */ new Map(), h = !0;
	function v(e) {
		!(16384 & b.effect.f) && (b.pending.delete(e), b.fallback = d, function(e, t, n, r, a) {
			var l = (8 & r) != 0, s = t.length, i = e.items, o = nl(e.effect.first), c = null, d = [], u = [];
			if (l) for (b = 0; b < s; b += 1) v = a(t[b], b), !(33554432 & (g = i.get(v).e).f) && (g.nodes?.a?.measure(), (p ??= /* @__PURE__ */ new Set()).add(g));
			for (b = 0; b < s; b += 1) {
				if (v = a(t[b], b), g = i.get(v).e, null !== e.outrogroups) for (let t of e.outrogroups) t.pending.delete(g), t.done.delete(g);
				if (8192 & g.f && (t$(g, !0), l && (g.nodes?.a?.unfix(), (p ??= /* @__PURE__ */ new Set()).delete(g))), (33554432 & g.f) != 0) if (g.f ^= 33554432, g === o) ns(g, null, n);
				else {
					var f = c ? c.next : o;
					g === e.effect.last && (e.effect.last = g.prev), g.prev && (g.prev.next = g.next), g.next && (g.next.prev = g.prev), ni(e, c, g), ni(e, g, f), ns(g, f, n), d = [], u = [], o = nl((c = g).next);
					continue;
				}
				if (g !== o) {
					if (void 0 !== h && h.has(g)) {
						if (d.length < u.length) {
							var h, p, v, g, b, x, m = u[0];
							c = m.prev;
							var w = d[0], y = d[d.length - 1];
							for (x = 0; x < d.length; x += 1) ns(d[x], m, n);
							for (x = 0; x < u.length; x += 1) h.delete(u[x]);
							ni(e, w.prev, y.next), ni(e, c, w), ni(e, y, m), o = m, c = y, b -= 1, d = [], u = [];
						} else h.delete(g), ns(g, o, n), ni(e, g.prev, g.next), ni(e, g, null === c ? e.effect.first : c.next), ni(e, c, g), c = g;
						continue;
					}
					for (d = [], u = []; null !== o && o !== g;) (h ??= /* @__PURE__ */ new Set()).add(o), u.push(o), o = nl(o.next);
					if (null === o) continue;
				}
				!(33554432 & g.f) && d.push(g), c = g, o = nl(g.next);
			}
			if (null !== e.outrogroups) {
				for (let t of e.outrogroups) 0 === t.pending.size && (nr(e, q(t.done)), e.outrogroups?.delete(t));
				0 === e.outrogroups.size && (e.outrogroups = null);
			}
			if (null !== o || void 0 !== h) {
				var k = [];
				if (void 0 !== h) for (g of h) !(8192 & g.f) && k.push(g);
				for (; null !== o;) !(8192 & o.f) && o !== e.fallback && k.push(o), o = nl(o.next);
				var _ = k.length;
				if (_ > 0) {
					if (l) {
						for (b = 0; b < _; b += 1) k[b].nodes?.a?.measure();
						for (b = 0; b < _; b += 1) k[b].nodes?.a?.fix();
					}
					(function(e, t, n) {
						for (var r, a = t.length, l = t.length, s = 0; s < a; s++) {
							let n = t[s];
							t_(n, () => {
								if (r) {
									if (r.pending.delete(n), r.done.add(n), 0 === r.pending.size) {
										var t = e.outrogroups;
										nr(e, q(r.done)), t.delete(r), 0 === t.size && (e.outrogroups = null);
									}
								} else l -= 1;
							}, !1);
						}
						if (0 === l) {
							var i = null !== n;
							if (i) {
								var o = n.parentNode;
								tr(o), o.append(n), e.items.clear();
							}
							nr(e, t, !i);
						} else r = {
							pending: new Set(t),
							done: /* @__PURE__ */ new Set()
						}, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(r);
					})(e, k, (4 & r) != 0 && 0 === s ? n : null);
				}
			}
			l && ev(() => {
				if (void 0 !== p) for (g of p) g.nodes?.a?.apply();
			});
		}(b, s, i, t, r), null !== d) && (0 === s.length ? (33554432 & d.f) == 0 ? t$(d, !0) : (d.f ^= 33554432, ns(d, null, i)) : t_(d, () => {
			d = null;
		}));
	}
	var b = {
		effect: tb(() => {
			var e = (s = tH(u)).length;
			let b = !1;
			Q && "[!" === el(i) != (0 === e) && (ee(i = ea()), Q = !1, b = !0);
			for (var x = /* @__PURE__ */ new Set(), m = e$, w = 0; w < e; w += 1) {
				Q && 8 === c.nodeType && "]" === c.data && (i = c, b = !0, Q = !1);
				var y = s[w], k = r(y, w), _ = h ? null : o.get(k);
				_ ? (_.v && e5(_.v, y), _.i && e5(_.i, w)) : (_ = function(e, t, n, r, a, l, s, i) {
					var o = (1 & s) != 0 ? (16 & s) == 0 ? e1(n, !1, !1) : eQ(n) : null, c = (2 & s) != 0 ? eQ(a) : null;
					return {
						v: o,
						i: c,
						e: tx(() => (l(t, o ?? n, c ?? a, i), () => {
							e.delete(r);
						}))
					};
				}(o, h ? i : p ??= e7(), y, k, w, a, t, n), h || (_.e.f |= 33554432), o.set(k, _)), x.add(k);
			}
			if (0 === e && l && !d && (h ? d = tx(() => l(i)) : (d = tx(() => l(p ??= e7())), d.f |= 33554432)), e > x.size && function() {
				throw Error("https://svelte.dev/e/each_key_duplicate");
			}(), Q && e > 0 && ee(ea()), !h) {
				if (f.set(m, x), 1) v(m);
			}
			b && (Q = !0), tH(u);
		}),
		flags: t,
		items: o,
		pending: f,
		outrogroups: null,
		fallback: d
	};
	h = !1, Q && (i = c);
}
function nl(e) {
	for (; null !== e && (32 & e.f) == 0;) e = e.next;
	return e;
}
function ns(e, t, n) {
	if (e.nodes) for (var r = e.nodes.start, a = e.nodes.end, l = t && (33554432 & t.f) == 0 ? t.nodes.start : n; null !== r;) {
		var s = e9(r);
		if (l.before(r), r === a) return;
		r = s;
	}
}
function ni(e, t, n) {
	null === t ? e.effect.first = n : t.next = n, null === n ? e.effect.last = t : n.prev = t;
}
function no(e, t) {
	td(4, () => {
		var n = e.getRootNode(), r = n.host ? n : n.head ?? n.ownerDocument.head;
		if (!r.querySelector("#" + t.hash)) {
			let e = ta("style");
			e.id = t.hash, e.textContent = t.code, r.appendChild(e);
		}
	});
}
function nc(e) {
	return "object" == typeof e ? function() {
		for (var e, t, n = 0, r = "", a = arguments.length; n < a; n++) (e = arguments[n]) && (t = function e(t) {
			var n, r, a = "";
			if ("string" == typeof t || "number" == typeof t) a += t;
			else if ("object" == typeof t) if (Array.isArray(t)) {
				var l = t.length;
				for (n = 0; n < l; n++) t[n] && (r = e(t[n])) && (a && (a += " "), a += r);
			} else for (r in t) t[r] && (a && (a += " "), a += r);
			return a;
		}(e)) && (r && (r += " "), r += t);
		return r;
	}(e) : e ?? "";
}
var nd = [..." 	\n\r\f\xA0\v﻿"];
function nu(e, t = !1) {
	var n = t ? " !important;" : ";", r = "";
	for (var a of Object.keys(e)) {
		var l = e[a];
		null != l && "" !== l && (r += " " + a + ": " + l + n);
	}
	return r;
}
function nf(e) {
	return "-" !== e[0] || "-" !== e[1] ? e.toLowerCase() : e;
}
function nh(e, t, n, r, a, l) {
	var s = e[H];
	if (Q || s !== n || void 0 === s) {
		var i = function(e, t, n) {
			var r = null == e ? "" : "" + e;
			if (t && (r = r ? r + " " + t : t), n) {
				for (var a of Object.keys(n)) if (n[a]) r = r ? r + " " + a : a;
				else if (r.length) for (var l = a.length, s = 0; (s = r.indexOf(a, s)) >= 0;) {
					var i = s + l;
					(0 === s || nd.includes(r[s - 1])) && (i === r.length || nd.includes(r[i])) ? r = (0 === s ? "" : r.substring(0, s)) + r.substring(i + 1) : s = i;
				}
			}
			return "" === r ? null : r;
		}(n, r, l);
		Q && i === e.getAttribute("class") || (null == i ? e.removeAttribute("class") : t ? e.className = i : e.setAttribute("class", i)), e[H] = n;
	} else if (l && a !== l) for (var o in l) {
		var c = !!l[o];
		(null == a || !!a[o] !== c) && e.classList.toggle(o, c);
	}
	return l;
}
function np(e, t = {}, n, r) {
	for (var a in n) {
		var l = n[a];
		t[a] !== l && (null == n[a] ? e.style.removeProperty(a) : e.style.setProperty(a, l, r));
	}
}
function nv(e, t, n, r) {
	var a = e[W];
	if (Q || a !== t) {
		var l = function(e, t) {
			if (t) {
				var n, r, a = "";
				if (Array.isArray(t) ? (n = t[0], r = t[1]) : n = t, e) {
					e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
					var l = !1, s = 0, i = !1, o = [];
					n && o.push(...Object.keys(n).map(nf)), r && o.push(...Object.keys(r).map(nf));
					var c = 0, d = -1;
					let t = e.length;
					for (var u = 0; u < t; u++) {
						var f = e[u];
						if (i ? "/" === f && "*" === e[u - 1] && (i = !1) : l ? l === f && (l = !1) : "/" === f && "*" === e[u + 1] ? i = !0 : "\"" === f || "'" === f ? l = f : "(" === f ? s++ : ")" === f && s--, !i && !1 === l && 0 === s) {
							if (":" === f && -1 === d) d = u;
							else if (";" === f || u === t - 1) {
								if (-1 !== d) {
									var h = nf(e.substring(c, d).trim());
									o.includes(h) || (";" !== f && u++, a += " " + e.substring(c, u).trim() + ";");
								}
								c = u + 1, d = -1;
							}
						}
					}
				}
				return n && (a += nu(n)), r && (a += nu(r, !0)), "" === (a = a.trim()) ? null : a;
			}
			return null == e ? null : String(e);
		}(t, r);
		Q && l === e.getAttribute("style") || (null == l ? e.removeAttribute("style") : e.style.cssText = l), e[W] = t;
	} else r && (Array.isArray(r) ? (np(e, n?.[0], r[0]), np(e, n?.[1], r[1], "important")) : np(e, n, r));
	return r;
}
var ng = Symbol("is custom element"), nb = Symbol("is html"), nx = X ? "link" : "LINK";
function nm(e, t, n, r) {
	var a, l = (a = e, a[U] ??= {
		[ng]: a.nodeName.includes("-"),
		[nb]: "http://www.w3.org/1999/xhtml" === a.namespaceURI
	});
	Q && (l[t] = e.getAttribute(t), "src" === t || "srcset" === t || "href" === t && e.nodeName === nx) || l[t] !== (l[t] = n) && ("loading" === t && (e[B] = n), null == n ? e.removeAttribute(t) : "string" != typeof n && (function(e) {
		var t, n = e.getAttribute("is") || e.nodeName, r = nw.get(n);
		if (r) return r;
		nw.set(n, r = []);
		for (var a = e, l = Element.prototype; l !== a;) {
			for (var s in t = A(a)) t[s].set && "innerHTML" !== s && "textContent" !== s && "innerText" !== s && r.push(s);
			a = C(a);
		}
		return r;
	})(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
var nw = /* @__PURE__ */ new Map();
function ny(e) {
	var t = e.type;
	return "number" === t || "range" === t;
}
function nk(e) {
	return "" === e ? null : +e;
}
function n_(e, t) {
	return e === t || e?.[R] === t;
}
function n$(e = {}, t, n, r) {
	var a = ec.r, l = tz;
	return td(4, () => {
		var s, i;
		return tv(() => {
			s = i, i = r?.() || [], tW(() => {
				!n_(n(...i), e) && (t(e, ...i), s && n_(n(...s), e) && t(null, ...s));
			});
		}), () => {
			let r = l;
			for (; r !== a && null !== r.parent && 33554432 & r.parent.f;) r = r.parent;
			let s = r.teardown;
			r.teardown = () => {
				i && n_(n(...i), e) && t(null, ...i), s?.();
			};
		};
	}), e;
}
function nq(e, t) {
	if (e.l.s) for (let t of e.l.s) tH(t);
	t();
}
function nS(e, t, n, r) {
	let a;
	var l, s, i = !eo || (2 & n) != 0, o = (8 & n) != 0, c = (16 & n) != 0, d = r, u = !0, f = void 0, h = () => c && i ? tH(f ??= eU(r)) : (u && (u = !1, d = c ? tW(r) : r), d);
	if (o) {
		var p = R in e || N in e;
		a = E(e, t)?.set ?? (p && t in e ? (n) => e[t] = n : void 0);
	}
	var v = !1;
	if (o ? [l, v] = function(e) {
		var t = ey;
		try {
			return ey = !1, [e(), ey];
		} finally {
			ey = t;
		}
	}(() => e[t]) : l = e[t], void 0 === l && void 0 !== r && (l = h(), a && (i && function() {
		throw Error("https://svelte.dev/e/props_invalid_value");
	}(), a(l))), s = i ? () => {
		var n = e[t];
		return void 0 === n ? h() : (u = !0, n);
	} : () => {
		var n = e[t];
		return void 0 !== n && (d = void 0), void 0 === n ? d : n;
	}, i && (4 & n) == 0) return s;
	if (a) {
		var g = e.$$legacy;
		return function(e, t) {
			return arguments.length > 0 ? ((!i || !t || g || v) && a(t ? s() : e), e) : s();
		};
	}
	var b = !1, x = ((1 & n) != 0 ? eU : eG)(() => (b = !1, s()));
	o && tH(x);
	var m = tz;
	return function(e, t) {
		if (arguments.length > 0) {
			let n = t ? tH(x) : i && o ? e3(e) : e;
			return e2(x, n), b = !0, void 0 !== d && (d = n), e;
		}
		return tj && b || (16384 & m.f) != 0 ? x.v : tH(x);
	};
}
var nj = class {
	#Q;
	#ee;
	constructor(e) {
		var t = /* @__PURE__ */ new Map(), n = (e, n) => {
			var r = e1(n, !1, !1);
			return t.set(e, r), r;
		};
		let r = new Proxy({
			...e.props || {},
			$$events: {}
		}, {
			get: (e, r) => tH(t.get(r) ?? n(r, Reflect.get(e, r))),
			has: (e, r) => r === N || (tH(t.get(r) ?? n(r, Reflect.get(e, r))), Reflect.has(e, r)),
			set: (e, r, a) => (e2(t.get(r) ?? n(r, a), a), Reflect.set(e, r, a))
		});
		for (let t of (this.#ee = (e.hydrate ? function(e, t) {
			e4(), t.intro = t.intro ?? !1;
			let n = t.target, r = Q, a = c;
			try {
				for (var l = e6(n); l && (8 !== l.nodeType || "[" !== l.data);) l = e9(l);
				if (!l) throw J;
				Q = !0, ee(l);
				let r = t6(e, {
					...t,
					anchor: l
				});
				return Q = !1, r;
			} catch (r) {
				if (r instanceof Error && r.message.split("\n").some((e) => e.startsWith("https://svelte.dev/e/"))) throw r;
				return r !== J && console.warn("Failed to hydrate: ", r), !1 === t.recover && function() {
					throw Error("https://svelte.dev/e/hydration_failed");
				}(), e4(), tr(n), Q = !1, t6(e, t);
			} finally {
				Q = r, ee(a);
			}
		} : function(e, t) {
			return t6(e, t);
		})(e.component, {
			target: e.target,
			anchor: e.anchor,
			props: r,
			context: e.context,
			intro: e.intro ?? !1,
			recover: e.recover,
			transformError: e.transformError
		}), e?.props?.$$host && !1 !== e.sync || eO(), this.#Q = r.$$events, Object.keys(this.#ee))) "$set" !== t && "$destroy" !== t && "$on" !== t && j(this, t, {
			get() {
				return this.#ee[t];
			},
			set(e) {
				this.#ee[t] = e;
			},
			enumerable: !0
		});
		this.#ee.$set = (e) => {
			Object.assign(r, e);
		}, this.#ee.$destroy = () => {
			var e;
			let t;
			e = this.#ee, (t = t9.get(e)) ? (t9.delete(e), t(void 0)) : Promise.resolve();
		};
	}
	$set(e) {
		this.#ee.$set(e);
	}
	$on(e, t) {
		this.#Q[e] = this.#Q[e] || [];
		let n = (...e) => t.call(this, ...e);
		return this.#Q[e].push(n), () => {
			this.#Q[e] = this.#Q[e].filter((e) => e !== n);
		};
	}
	$destroy() {
		this.#ee.$destroy();
	}
};
function nE(e, t, n, r) {
	let a = n[e]?.type;
	if (t = "Boolean" === a && "boolean" != typeof t ? null != t : t, !r || !n[e]) return t;
	if ("toAttribute" === r) switch (a) {
		case "Object":
		case "Array": return null == t ? null : JSON.stringify(t);
		case "Boolean": return t ? "" : null;
		case "Number": return null == t ? null : t;
		default: return t;
	}
	switch (a) {
		case "Object":
		case "Array": return t && JSON.parse(t);
		case "Boolean":
		default: return t;
		case "Number": return null != t ? +t : t;
	}
}
function nA(e, t, n, r, a, l) {
	let s = class extends v {
		constructor() {
			super(e, n, a), this.$$p_d = t;
		}
		static get observedAttributes() {
			return S(t).map((e) => (t[e].attribute || e).toLowerCase());
		}
	};
	return S(t).forEach((e) => {
		j(s.prototype, e, {
			get() {
				return this.$$c && e in this.$$c ? this.$$c[e] : this.$$d[e];
			},
			set(n) {
				n = nE(e, n, t), this.$$d[e] = n;
				var r = this.$$c;
				r && (E(r, e)?.get ? r[e] = n : r.$set({ [e]: n }));
			}
		});
	}), r.forEach((e) => {
		j(s.prototype, e, { get() {
			return this.$$c?.[e];
		} });
	}), l && (s = l(s)), e.element = s, s;
}
function nz(e) {
	var t;
	null === ec && function() {
		throw Error("https://svelte.dev/e/lifecycle_outside_component");
	}(), eo && null !== ec.l ? (t = ec.l, t.u ??= {
		a: [],
		b: [],
		m: []
	}).m.push(e) : th(() => {
		let t = tW(e);
		if ("function" == typeof t) return t;
	});
}
"function" == typeof HTMLElement && (v = class extends HTMLElement {
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
	constructor(e, t, n) {
		super(), this.$$ctor = e, this.$$s = t, n && (this.$$shadowRoot = this.attachShadow(n));
	}
	addEventListener(e, t, n) {
		if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(t), this.$$c) {
			let n = this.$$c.$on(e, t);
			this.$$l_u.set(t, n);
		}
		super.addEventListener(e, t, n);
	}
	removeEventListener(e, t, n) {
		if (super.removeEventListener(e, t, n), this.$$c) {
			let e = this.$$l_u.get(t);
			e && (e(), this.$$l_u.delete(t));
		}
	}
	async connectedCallback() {
		if (this.$$cn = !0, !this.$$c) {
			var e, t;
			let r, a;
			if (await Promise.resolve(), !this.$$cn || this.$$c) return;
			function n(e) {
				return (t) => {
					let n = ta("slot");
					"default" !== e && (n.name = e), t3(t, n);
				};
			}
			let l = {}, s = (t = this, a = {}, t.childNodes.forEach((e) => {
				a[e.slot || "default"] = !0;
			}), a);
			for (let e of this.$$s) e in s && ("default" !== e || this.$$d.children ? l[e] = n(e) : (this.$$d.children = n(e), l.default = !0));
			for (let e of this.attributes) {
				let t = this.$$g_p(e.name);
				t in this.$$d || (this.$$d[t] = nE(t, e.value, this.$$p_d, "toProp"));
			}
			for (let e in this.$$p_d) e in this.$$d || void 0 === this[e] || (this.$$d[e] = this[e], delete this[e]);
			for (let t in this.$$c = new nj({
				component: this.$$ctor,
				target: this.$$shadowRoot || this,
				props: {
					...this.$$d,
					$$slots: l,
					$$host: this
				}
			}), this.$$me = (e = () => {
				tv(() => {
					for (let e of (this.$$r = !0, S(this.$$c))) {
						if (!this.$$p_d[e]?.reflect) continue;
						this.$$d[e] = this.$$c[e];
						let t = nE(e, this.$$d[e], this.$$p_d, "toAttribute");
						null == t ? this.removeAttribute(this.$$p_d[e].attribute || e) : this.setAttribute(this.$$p_d[e].attribute || e, t);
					}
					this.$$r = !1;
				});
			}, eL.ensure(), r = td(524352, e), () => {
				ty(r);
			}), this.$$l) for (let e of this.$$l[t]) {
				let n = this.$$c.$on(t, e);
				this.$$l_u.set(e, n);
			}
			this.$$l = {};
		}
	}
	attributeChangedCallback(e, t, n) {
		this.$$r || (e = this.$$g_p(e), this.$$d[e] = nE(e, n, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
	}
	disconnectedCallback() {
		this.$$cn = !1, Promise.resolve().then(() => {
			!this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
		});
	}
	$$g_p(e) {
		return S(this.$$p_d).find((t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e) || e;
	}
}), "u" > typeof window && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
var nF = {}, nC = function(e, t, n) {
	let r = Promise.resolve();
	if (t && t.length > 0) {
		let e = document.getElementsByTagName("link"), a = document.querySelector("meta[property=csp-nonce]"), l = a?.nonce || a?.getAttribute("nonce");
		r = Promise.all(t.map((t) => {
			if ((t = new URL(t, n).href) in nF) return;
			nF[t] = !0;
			let r = t.endsWith(".css");
			if (n) for (let n = e.length - 1; n >= 0; n--) {
				let a = e[n];
				if (a.href === t && (!r || "stylesheet" === a.rel)) return;
			}
			else if (document.querySelector(`link[href="${t}"]${r ? "[rel=\"stylesheet\"]" : ""}`)) return;
			let a = document.createElement("link");
			if (a.rel = r ? "stylesheet" : "modulepreload", r || (a.as = "script"), a.crossOrigin = "", a.href = t, l && a.setAttribute("nonce", l), document.head.appendChild(a), r) return new Promise((e, n) => {
				a.addEventListener("load", e), a.addEventListener("error", () => n(Error(`Unable to preload CSS for ${t}`)));
			});
		}).map((e) => Promise.resolve(e).then((e) => ({
			status: "fulfilled",
			value: e
		}), (e) => ({
			status: "rejected",
			reason: e
		}))));
	}
	function a(e) {
		let t = new Event("vite:preloadError", { cancelable: !0 });
		if (t.payload = e, window.dispatchEvent(t), !t.defaultPrevented) throw e;
	}
	return r.then((t) => {
		for (let e of t || []) "rejected" === e.status && a(e.reason);
		return e().catch(a);
	});
}, nP = [[
	"Scroll",
	"自定义虚拟滚动条",
	() => nC(() => import("./Scroll-BFmT8va9.js"), [], import.meta.url)
], [
	"Wait",
	"加载动画与表单提交遮罩",
	() => nC(() => import("./Wait-BktIVgCA.js"), [], import.meta.url)
]], nL = t5("<b class=\"aside-header svelte-paud8n\"><a href=\"/\"><i class=\"icon-home svelte-paud8n\"></i><b>主页</b></a><a href=\"https://groups.google.com/g/webc-site\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"svelte-paud8n\"><i class=\"icon-forum svelte-paud8n\"></i><b>论坛</b></a></b>"), nO = {
	hash: "svelte-paud8n",
	code: ".aside-header.svelte-paud8n {display:flex;gap:8px;margin-bottom:12px;}.aside-header.svelte-paud8n a:where(.svelte-paud8n) {flex:1;display:flex;align-items:center;justify-content:center;gap:8px;padding:10px;font-size:13px;font-weight:500;border-radius:10px;border:1px solid rgba(0,0,0,0.02);background:rgba(255,255,255,0.4);color:#1d1d1f;text-align:left;cursor:pointer;position:relative;text-decoration:none;box-shadow:0 1px 2px rgba(0,0,0,0.02);transition:all 0.25s cubic-bezier(0.4, 0, 0.2, 1);}.aside-header.svelte-paud8n a:where(.svelte-paud8n):hover {background:rgba(255,255,255,0.702);border-color:rgba(0,0,0,0.059);box-shadow:0 4px 12px rgba(0,0,0,0.039);transform:translateY(-0.5px);}.aside-header.svelte-paud8n a.active:where(.svelte-paud8n) {background:rgba(0,113,227,0.078);border-color:rgba(0,113,227,0.2);color:#0071e3;font-weight:600;}.aside-header.svelte-paud8n a:where(.svelte-paud8n) i:where(.svelte-paud8n) {width:16px;height:16px;mask-size:contain;mask-repeat:no-repeat;mask-position:center;display:inline-block;background:currentColor;}.aside-header.svelte-paud8n a:where(.svelte-paud8n) i.icon-home:where(.svelte-paud8n) {mask-image:var(--homeSvg);}.aside-header.svelte-paud8n a:where(.svelte-paud8n) i.icon-forum:where(.svelte-paud8n) {mask-image:var(--groupSvg);}"
};
function nT(e, t) {
	ed(t, !0), no(e, nO);
	let n = nS(t, "active_index", 7);
	var r = nL(), a = te(r);
	return er(), en(r), tg(() => nh(a, 1, nc(-2 == n() ? "active" : ""), "svelte-paud8n")), t3(e, r), eu({
		get active_index() {
			return n();
		},
		set active_index($$value) {
			n($$value), eO();
		}
	});
}
nA(nT, { active_index: {} }, [], [], { mode: "open" });
var nM = t5("<b class=\"svelte-jjbop4\"><input type=\"text\" placeholder=\"搜索组件...\" class=\"svelte-jjbop4\"/></b>"), nD = {
	hash: "svelte-jjbop4",
	code: ":root {--gap: 24px;}\n@media (max-width: 800px) {:root {--gap: 16px;}\n}b.svelte-jjbop4 {position:relative;display:flex;}\n@media (max-width: 800px) {b.svelte-jjbop4 {align-items:center;gap:12px;padding:20px 16px 8px;}\n}b.svelte-jjbop4 input:where(.svelte-jjbop4) {box-sizing:border-box;flex:1;min-width:0;padding:10px 36px 10px 16px;font-size:14px;border-radius:10px;font-family:inherit;transition:all 0.3s cubic-bezier(0.4, 0, 0.2, 1);background:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' stroke='%2386868b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='7' cy='7' r='4'/%3E%3Cpath d='m11 11 3.5 3.5'/%3E%3C/svg%3E\") no-repeat right 12px center, linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0));border:1px solid rgba(0,0,0,0.122);color:#1d1d1f;outline:none;}b.svelte-jjbop4 input:where(.svelte-jjbop4)::placeholder {color:#86868b;font-weight:normal;}b.svelte-jjbop4 input:where(.svelte-jjbop4):focus {border-color:#0071e3;background:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' stroke='%2386868b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='7' cy='7' r='4'/%3E%3Cpath d='m11 11 3.5 3.5'/%3E%3C/svg%3E\") no-repeat right 12px center, linear-gradient(to bottom, rgba(255,255,255,0.8), rgba(255,255,255,0.302));}\n@media (max-width: 800px) {b.svelte-jjbop4 input:where(.svelte-jjbop4) {font-size:16px;}\n}"
};
function nR(e, t) {
	ed(t, !0), no(e, nD);
	let n = nS(t, "search_query", 15);
	var r = nM(), a = te(r);
	if (Q) {
		var l = !1, s = () => {
			if (!l) {
				if (l = !0, a.hasAttribute("value")) {
					var e = a.value;
					nm(a, "value", null), a.value = e;
				}
				if (a.hasAttribute("checked")) {
					var t = a.checked;
					nm(a, "checked", null), a.checked = t;
				}
			}
		};
		a[Y] = s, ev(s), ti();
	}
	return en(r), function(e, t, n = t) {
		var r = /* @__PURE__ */ new WeakSet();
		(function(e, t, n, r = n) {
			e.addEventListener(t, () => to(n));
			let a = e[Y];
			a ? e[Y] = () => {
				a(), r(!0);
			} : e[Y] = () => r(!0), ti();
		})(e, "input", async (a) => {
			var l = a ? e.defaultValue : e.value;
			if (n(l = ny(e) ? nk(l) : l), null !== e$ && r.add(e$), await tU(), l !== (l = t())) {
				var s = e.selectionStart, i = e.selectionEnd, o = e.value.length;
				if (e.value = l ?? "", null !== i) {
					var c = e.value.length;
					s === i && i === o && c > o ? (e.selectionStart = c, e.selectionEnd = c) : (e.selectionStart = s, e.selectionEnd = Math.min(i, c));
				}
			}
		}), (Q && e.defaultValue !== e.value || null == tW(t) && e.value) && (n(ny(e) ? nk(e.value) : e.value), null !== e$ && r.add(e$)), tv(() => {
			var n = t();
			if (e === document.activeElement) {
				var a = e$;
				if (r.has(a)) return;
			}
			ny(e) && n === nk(e.value) || ("date" !== e.type || n || e.value) && n !== e.value && (e.value = n ?? "");
		});
	}(a, n), t3(e, r), eu({
		get search_query() {
			return n();
		},
		set search_query($$value) {
			n($$value), eO();
		}
	});
}
nA(nR, { search_query: {} }, [], [], { mode: "open" });
var nN = t5("<a><b class=\"svelte-1xkx02v\">←</b><b class=\"svelte-1xkx02v\"> </b><b class=\"svelte-1xkx02v\"> </b></a>"), nB = t5("<aside><v-scroll><nav class=\"svelte-1xkx02v\"><!><!><b class=\"x-nav svelte-1xkx02v\"><a href=\"/x\"><b class=\"svelte-1xkx02v\">←</b><b class=\"svelte-1xkx02v\">x</b><b class=\"svelte-1xkx02v\"> </b></a></b><b class=\"nav-list svelte-1xkx02v\"></b></nav></v-scroll></aside>", 2), nI = {
	hash: "svelte-1xkx02v",
	code: ":root {--gap: 24px;}\n@media (max-width: 800px) {:root {--gap: 16px;}\n}aside.svelte-1xkx02v {width:248px;display:flex;flex-direction:column;flex-shrink:0;box-sizing:border-box;}aside.svelte-1xkx02v v-scroll:where(.svelte-1xkx02v) {flex:1;min-height:0;}aside.svelte-1xkx02v v-scroll:where(.svelte-1xkx02v)::part(scroll) {box-sizing:border-box;}aside.svelte-1xkx02v nav:where(.svelte-1xkx02v) {width:100%;padding:var(--gap) var(--gap) var(--gap) 0;display:flex;flex-direction:column;box-sizing:border-box;}aside.svelte-1xkx02v .nav-list:where(.svelte-1xkx02v),\naside.svelte-1xkx02v .x-nav:where(.svelte-1xkx02v) {display:flex;flex-direction:column;gap:6px;margin-top:12px;}aside.svelte-1xkx02v .nav-list:where(.svelte-1xkx02v) a:where(.svelte-1xkx02v),\naside.svelte-1xkx02v .x-nav:where(.svelte-1xkx02v) a:where(.svelte-1xkx02v) {box-sizing:border-box;padding:12px 16px;font-size:14px;border-radius:10px;font-family:inherit;transition:all 0.25s cubic-bezier(0.4, 0, 0.2, 1);display:flex;flex-direction:column;align-items:stretch;gap:4px;background:rgba(255,255,255,0.4);border:1px solid rgba(0,0,0,0.031);color:#1d1d1f;text-align:left;cursor:pointer;position:relative;text-decoration:none;box-shadow:0 1px 2px rgba(0,0,0,0.02);}aside.svelte-1xkx02v .nav-list:where(.svelte-1xkx02v) a:where(.svelte-1xkx02v):hover,\naside.svelte-1xkx02v .x-nav:where(.svelte-1xkx02v) a:where(.svelte-1xkx02v):hover {background:rgba(255,255,255,0.702);border-color:rgba(0,0,0,0.059);box-shadow:0 4px 12px rgba(0,0,0,0.039);transform:translateY(-1px);padding-left:38px;}aside.svelte-1xkx02v .nav-list:where(.svelte-1xkx02v) a:where(.svelte-1xkx02v):hover > b:where(.svelte-1xkx02v):nth-child(1),\naside.svelte-1xkx02v .x-nav:where(.svelte-1xkx02v) a:where(.svelte-1xkx02v):hover > b:where(.svelte-1xkx02v):nth-child(1) {opacity:1;transform:translateX(0);}aside.svelte-1xkx02v .nav-list:where(.svelte-1xkx02v) a.active:where(.svelte-1xkx02v),\naside.svelte-1xkx02v .x-nav:where(.svelte-1xkx02v) a.active:where(.svelte-1xkx02v) {background:rgba(0,113,227,0.078);border-color:rgba(0,113,227,0.2);color:#0071e3;box-shadow:inset 0 1px 1px rgba(255,255,255,0.502);text-align:right;}aside.svelte-1xkx02v .nav-list:where(.svelte-1xkx02v) a.active:where(.svelte-1xkx02v) > b:where(.svelte-1xkx02v):nth-child(2),\naside.svelte-1xkx02v .x-nav:where(.svelte-1xkx02v) a.active:where(.svelte-1xkx02v) > b:where(.svelte-1xkx02v):nth-child(2) {color:#0071e3;}aside.svelte-1xkx02v .nav-list:where(.svelte-1xkx02v) a.active:where(.svelte-1xkx02v) > b:where(.svelte-1xkx02v):nth-child(3),\naside.svelte-1xkx02v .x-nav:where(.svelte-1xkx02v) a.active:where(.svelte-1xkx02v) > b:where(.svelte-1xkx02v):nth-child(3) {color:rgba(0,113,227,0.8);}aside.svelte-1xkx02v .nav-list:where(.svelte-1xkx02v) a.active:where(.svelte-1xkx02v) > b:where(.svelte-1xkx02v):nth-child(1),\naside.svelte-1xkx02v .x-nav:where(.svelte-1xkx02v) a.active:where(.svelte-1xkx02v) > b:where(.svelte-1xkx02v):nth-child(1) {opacity:1;color:#0071e3;transform:translateX(0);}aside.svelte-1xkx02v .nav-list:where(.svelte-1xkx02v) a:where(.svelte-1xkx02v) > b:where(.svelte-1xkx02v):nth-child(1),\naside.svelte-1xkx02v .x-nav:where(.svelte-1xkx02v) a:where(.svelte-1xkx02v) > b:where(.svelte-1xkx02v):nth-child(1) {position:absolute;left:12px;top:50%;margin-top:-8px;opacity:0;transform:translateX(-6px);transition:all 0.25s ease;}aside.svelte-1xkx02v .nav-list:where(.svelte-1xkx02v) a:where(.svelte-1xkx02v) > b:where(.svelte-1xkx02v):nth-child(2),\naside.svelte-1xkx02v .x-nav:where(.svelte-1xkx02v) a:where(.svelte-1xkx02v) > b:where(.svelte-1xkx02v):nth-child(2) {font-size:15px;font-weight:600;}aside.svelte-1xkx02v .nav-list:where(.svelte-1xkx02v) a:where(.svelte-1xkx02v) > b:where(.svelte-1xkx02v):nth-child(3),\naside.svelte-1xkx02v .x-nav:where(.svelte-1xkx02v) a:where(.svelte-1xkx02v) > b:where(.svelte-1xkx02v):nth-child(3) {font-size:12px;color:#86868b;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:400;transition:color 0.25s ease;}aside.svelte-1xkx02v .nav-list:where(.svelte-1xkx02v) {margin-top:6px;}\n@media (max-width: 800px) {aside.svelte-1xkx02v {position:fixed;top:0;right:0;bottom:0;left:auto;width:280px;max-width:85%;z-index:100;background:rgba(245,245,247,0.933);backdrop-filter:blur(40px);transform:translateX(100%);transition:transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);padding:0;}aside.svelte-1xkx02v nav:where(.svelte-1xkx02v) {padding:16px 16px 32px;}aside.show.svelte-1xkx02v {transform:translateX(0);}\n}::highlight(search-match) {background:#ffe066;color:#000;}"
};
function nU(e, t) {
	ed(t, !0), no(e, nI);
	let n = "search-match", r = nS(t, "active_index", 15), a = nS(t, "aside_open", 15), l = nS(t, "class", 7, ""), s = e0(""), i = e0(null), o = 0, c = 0, d = eW(() => {
		let e, t;
		return t = (e = tH(s).trim().toLowerCase()) ? e.split(/\s+/) : [], nP.map((e, t) => [e, t]).filter(([[e, n]]) => {
			if (!t.length) return !0;
			let r = e.toLowerCase(), a = n.toLowerCase();
			return t.some((e) => r.includes(e) || a.includes(e));
		});
	});
	th(() => {
		let e;
		if (tH(d), !tH(i) || "u" < typeof CSS || !CSS.highlights) return;
		CSS.highlights.delete(n);
		let t = tH(s).trim().toLowerCase(), r = t ? t.split(/\s+/).filter(Boolean) : [];
		if (!r.length) return;
		let a = [], l = document.createTreeWalker(tH(i), NodeFilter.SHOW_TEXT);
		for (; e = l.nextNode();) {
			if (e.parentElement?.matches("a > b:nth-child(3)")) continue;
			let t = e.textContent.toLowerCase();
			for (let n of r) {
				let r = 0;
				for (; -1 != (r = t.indexOf(n, r));) {
					let t = new Range();
					t.setStart(e, r), t.setEnd(e, r + n.length), a.push(t), r += n.length;
				}
			}
		}
		if (a.length) {
			let e = new Highlight(...a);
			CSS.highlights.set(n, e);
		}
	});
	var u = nB(), f = te(u);
	nh(f, 1, "svelte-1xkx02v");
	var h = te(f), p = te(h);
	nT(p, { get active_index() {
		return r();
	} });
	var v = tn(p);
	nR(v, {
		get search_query() {
			return tH(s);
		},
		set search_query($$value) {
			e2(s, $$value, !0);
		}
	});
	var g = tn(v), b = te(g), x = tn(te(b), 2), m = te(x, !0);
	en(x), en(b), en(g);
	var w = tn(g);
	return na(w, 21, () => tH(d), nn, (e, t) => {
		var n = eW(() => D(tH(t), 2)), a = eW(() => D(tH(n)[0], 2));
		let l = () => tH(a)[0];
		var s = nN(), i = tn(te(s)), o = te(i, !0);
		en(i);
		var c = tn(i), d = te(c, !0);
		en(c), en(s), tg(() => {
			nh(s, 1, nc(tH(n)[1] == r() ? "active" : ""), "svelte-1xkx02v"), nm(s, "href", "/" + l()), t4(o, l()), t4(d, tH(a)[1]);
		}), t3(e, s);
	}), en(w), en(h), n$(h, (e) => e2(i, e), () => tH(i)), en(f), en(u), tg(() => {
		nh(u, 1, nc(l()), "svelte-1xkx02v"), nh(b, 1, nc(-3 == r() ? "active" : ""), "svelte-1xkx02v"), t4(m, "webc.site 的基础依赖库");
	}), tZ("touchstart", u, (e) => {
		e.touches && e.touches[0] && (o = e.touches[0].clientX, c = e.touches[0].clientY);
	}), tZ("touchend", u, (e) => {
		if (e.changedTouches && e.changedTouches[0]) {
			let t = e.changedTouches[0], n = t.clientX - o;
			Math.abs(n) > 1.5 * Math.abs(t.clientY - c) && Math.abs(n) > 50 && a(!1);
		}
	}), t3(e, u), eu({
		get active_index() {
			return r();
		},
		set active_index($$value) {
			r($$value), eO();
		},
		get aside_open() {
			return a();
		},
		set aside_open($$value) {
			a($$value), eO();
		},
		get class() {
			return l();
		},
		set class($$value = "") {
			l($$value), eO();
		}
	});
}
tQ(["touchstart", "touchend"]), nA(nU, {
	active_index: {},
	aside_open: {},
	class: {}
}, [], [], { mode: "open" });
var nH = t5("<button> </button>"), nW = {
	hash: "svelte-qgmc0f",
	code: "button.svelte-qgmc0f {display:inline-flex;align-items:center;justify-content:center;gap:4px;padding:0 10px;height:28px;box-sizing:border-box;border-radius:6px;font-size:12px;font-weight:500;border:none;background:rgba(0,113,227,0.078);color:#0071e3;cursor:pointer;transition:all 0.2s cubic-bezier(0.4, 0, 0.2, 1);outline:none;user-select:none;}button.svelte-qgmc0f::before {content:'';width:12px;height:12px;background:var(--copySvg) no-repeat center/contain;filter:invert(30%) sepia(87%) saturate(1915%) hue-rotate(192deg) brightness(97%) contrast(102%);transition:filter 0.2s ease;}button.svelte-qgmc0f:hover {background:rgba(0,113,227,0.149);}button.svelte-qgmc0f:active {transform:scale(0.97);background:rgba(0,113,227,0.22);}button.copied.svelte-qgmc0f {background:#34c759;color:#fff;}button.copied.svelte-qgmc0f::before {background-image:var(--okSvg);filter:invert(100%);}"
};
function nG(e, t) {
	ed(t, !0), no(e, nW);
	let n = nS(t, "text", 7, ""), r = e0(!1);
	var a = nH(), l = te(a, !0);
	return en(a), tg(() => {
		nh(a, 1, nc(tH(r) ? "copied" : ""), "svelte-qgmc0f"), t4(l, tH(r) ? "已复制" : "复制");
	}), tZ("click", a, () => {
		navigator.clipboard.writeText(n()), e2(r, !0), setTimeout(() => {
			e2(r, !1);
		}, 1500);
	}), t3(e, a), eu({
		get text() {
			return n();
		},
		set text($$value = "") {
			n($$value), eO();
		}
	});
}
tQ(["click"]), nA(nG, { text: {} }, [], [], { mode: "open" });
var nY = t5("<tr class=\"svelte-quf4hl\"><td class=\"svelte-quf4hl\"><b class=\"svelte-quf4hl\"><code class=\"svelte-quf4hl\"> </code><!></b></td><td class=\"svelte-quf4hl\"><b class=\"svelte-quf4hl\"><img class=\"svelte-quf4hl\"/></b></td><td class=\"svelte-quf4hl\"><code class=\"svelte-quf4hl\"> </code></td></tr>"), nV = t5("<article class=\"LG svelte-quf4hl\"><h2 class=\"svelte-quf4hl\">样式变量</h2><table class=\"svelte-quf4hl\"><thead><tr class=\"svelte-quf4hl\"><th class=\"svelte-quf4hl\">变量名</th><th class=\"svelte-quf4hl\">预览</th><th class=\"svelte-quf4hl\">资源文件</th></tr></thead><tbody></tbody></table></article>"), nX = {
	hash: "svelte-quf4hl",
	code: ":root {--gap: 24px;}\n@media (max-width: 800px) {:root {--gap: 16px;}\n}article.svelte-quf4hl {margin-top:var(--gap);border-radius:24px;padding:var(--gap);box-sizing:border-box;line-height:normal;}article.svelte-quf4hl h2:where(.svelte-quf4hl) {font-size:15px;font-weight:600;color:#1d1d1f;margin:0 0 16px;}article.svelte-quf4hl table:where(.svelte-quf4hl) {width:100%;border-collapse:collapse;text-align:left;font-size:13px;}article.svelte-quf4hl table:where(.svelte-quf4hl) tr:where(.svelte-quf4hl) {border-bottom:1px solid rgba(0,0,0,0.039);}article.svelte-quf4hl table:where(.svelte-quf4hl) tr:where(.svelte-quf4hl):last-child {border-bottom:0;}article.svelte-quf4hl table:where(.svelte-quf4hl) th:where(.svelte-quf4hl),\narticle.svelte-quf4hl table:where(.svelte-quf4hl) td:where(.svelte-quf4hl) {padding:12px 16px;vertical-align:middle;}article.svelte-quf4hl table:where(.svelte-quf4hl) th:where(.svelte-quf4hl):first-child,\narticle.svelte-quf4hl table:where(.svelte-quf4hl) td:where(.svelte-quf4hl):first-child {padding-left:0;}article.svelte-quf4hl table:where(.svelte-quf4hl) th:where(.svelte-quf4hl):last-child,\narticle.svelte-quf4hl table:where(.svelte-quf4hl) td:where(.svelte-quf4hl):last-child {padding-right:0;}article.svelte-quf4hl table:where(.svelte-quf4hl) th:where(.svelte-quf4hl) {font-weight:600;color:#86868b;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;}article.svelte-quf4hl table:where(.svelte-quf4hl) th:where(.svelte-quf4hl):nth-child(2) {text-align:center;}article.svelte-quf4hl table:where(.svelte-quf4hl) td:where(.svelte-quf4hl):nth-child(1) {font-weight:500;color:#0071e3;width:45%;}article.svelte-quf4hl table:where(.svelte-quf4hl) td:where(.svelte-quf4hl):nth-child(1) b:where(.svelte-quf4hl) {display:flex;align-items:center;gap:8px;white-space:nowrap;}article.svelte-quf4hl table:where(.svelte-quf4hl) td:where(.svelte-quf4hl):nth-child(1) b:where(.svelte-quf4hl) code:where(.svelte-quf4hl) {font-family:source-code-pro, Menlo, Monaco, Consolas, monospace;font-size:12px;color:#0071e3;padding:3px 8px;border-radius:6px;white-space:nowrap;}article.svelte-quf4hl table:where(.svelte-quf4hl) td:where(.svelte-quf4hl):nth-child(2) {width:20%;text-align:center;}article.svelte-quf4hl table:where(.svelte-quf4hl) td:where(.svelte-quf4hl):nth-child(2) b:where(.svelte-quf4hl) {display:inline-flex;align-items:center;justify-content:center;width:48px;height:48px;border-radius:8px;border:1px solid rgba(0,0,0,0.031);background-image:linear-gradient(45deg, #f0f0f0 25%, transparent 25%, transparent 75%, #f0f0f0 75%, #f0f0f0), linear-gradient(45deg, #f0f0f0 25%, #fff 25%, #fff 75%, #f0f0f0 75%, #f0f0f0);background-size:12px 12px;background-position:0 0, 6px 6px;box-shadow:0 2px 8px rgba(0,0,0,0.039);overflow:hidden;user-select:none;}article.svelte-quf4hl table:where(.svelte-quf4hl) td:where(.svelte-quf4hl):nth-child(2) b:where(.svelte-quf4hl) img:where(.svelte-quf4hl) {max-width:32px;max-height:32px;object-fit:contain;transition:transform 0.2s ease;user-select:none;pointer-events:none;}article.svelte-quf4hl table:where(.svelte-quf4hl) td:where(.svelte-quf4hl):nth-child(2) b:where(.svelte-quf4hl):hover img:where(.svelte-quf4hl) {transform:scale(1.15);}article.svelte-quf4hl table:where(.svelte-quf4hl) td:where(.svelte-quf4hl):nth-child(3) {width:35%;}article.svelte-quf4hl table:where(.svelte-quf4hl) td:where(.svelte-quf4hl):nth-child(3) code:where(.svelte-quf4hl) {font-family:source-code-pro, Menlo, Monaco, Consolas, monospace;font-size:12px;color:#515154;padding:3px 8px;border-radius:6px;border:1px solid rgba(0,0,0,0.012);white-space:nowrap;}\n@media (max-width: 800px) {article.svelte-quf4hl {border-radius:16px;padding:var(--gap) 20px;overflow-x:auto;}article.svelte-quf4hl table:where(.svelte-quf4hl) {font-size:12px;}article.svelte-quf4hl table:where(.svelte-quf4hl) th:where(.svelte-quf4hl),\n  article.svelte-quf4hl table:where(.svelte-quf4hl) td:where(.svelte-quf4hl) {padding:8px 12px;}article.svelte-quf4hl table:where(.svelte-quf4hl) th:where(.svelte-quf4hl):first-child,\n  article.svelte-quf4hl table:where(.svelte-quf4hl) td:where(.svelte-quf4hl):first-child {padding-left:0;}article.svelte-quf4hl table:where(.svelte-quf4hl) th:where(.svelte-quf4hl):last-child,\n  article.svelte-quf4hl table:where(.svelte-quf4hl) td:where(.svelte-quf4hl):last-child {padding-right:0;}\n}"
};
function nJ(e, t) {
	ed(t, !0), no(e, nX);
	let n = nS(t, "svgs", 23, () => []);
	var r = t8(), a = tt(r), l = (e) => {
		var t = nV(), r = tn(te(t)), a = tn(te(r));
		na(a, 21, n, nn, (e, t) => {
			var n = eW(() => D(tH(t), 3));
			let r = () => tH(n)[0];
			var a = nY(), l = te(a), s = te(l), i = te(s), o = te(i, !0);
			en(i), nG(tn(i), { get text() {
				return r();
			} }), en(s), en(l);
			var c = tn(l), d = te(c), u = te(d);
			en(d), en(c);
			var f = tn(c), h = te(f), p = te(h, !0);
			en(h), en(f), en(a), tg(() => {
				t4(o, r()), nm(u, "src", tH(n)[1]), nm(u, "alt", r()), t4(p, tH(n)[2]);
			}), t3(e, a);
		}), en(a), en(r), en(t), t3(e, t);
	};
	return nt(a, (e) => {
		n().length > 0 && e(l);
	}), t3(e, r), eu({
		get svgs() {
			return n();
		},
		set svgs($$value = []) {
			n($$value), eO();
		}
	});
}
nA(nJ, { svgs: {} }, [], [], { mode: "open" });
var nK = (e) => {
	switch (e) {
		case 1: return 3;
		case 2: return 4;
		case 3: return 5;
		case 4: return 6;
		case 5: return 7;
		default: return 8;
	}
};
function nZ(e) {
	0 !== e.text.length && (console.assert(e.len > 0, "Never adding text to root"), e.renderer.add_text(e.renderer.data, e.text), e.text = "");
}
function nQ(e) {
	console.assert(e.len > 0, "No nodes to end"), e.len -= 1, e.token = e.tokens[e.len], e.renderer.end_token(e.renderer.data);
}
function n0(e, t) {
	(24 === e.tokens[e.len] || 23 === e.tokens[e.len]) && 25 !== t && nQ(e), e.len += 1, e.tokens[e.len] = t, e.token = t, e.renderer.add_token(e.renderer.data, t);
}
function n1(e, t) {
	for (e.fence_start = 0; e.len > t;) nQ(e);
}
function n2(e, t) {
	let n = 0;
	for (let r = 0; r <= e.len && !((t -= e.spaces[r]) < 0); r += 1) switch (e.tokens[r]) {
		case 9:
		case 10:
		case 20:
		case 25: n = r;
	}
	for (; e.len > n;) nQ(e);
	return t;
}
function n5(e, t) {
	let n = -1, r = -1;
	for (let a = e.blockquote_idx + 1; a <= e.len; a += 1) if (25 === e.tokens[a]) {
		if (e.indent_len < e.spaces[a]) {
			r = -1;
			break;
		}
		r = a;
	} else e.tokens[a] === t && (n = a);
	return -1 === r ? -1 === n ? (n1(e, e.blockquote_idx), n0(e, t), !0) : (n1(e, n), !1) : (n1(e, r), n0(e, t), !0);
}
function n8(e, t) {
	n0(e, 25), e.spaces[e.len] = e.indent_len + t, n3(e), e.token = 103;
}
function n3(e) {
	e.indent = "", e.indent_len = 0, e.pending = "";
}
function n4(e) {
	switch (e) {
		case 48:
		case 49:
		case 50:
		case 51:
		case 52:
		case 53:
		case 54:
		case 55:
		case 56:
		case 57: return !0;
		default: return !1;
	}
}
function n7(e, t) {
	for (let r of t) {
		if (101 === e.token) {
			switch (r) {
				case " ":
					e.indent_len += 1;
					continue;
				case "	":
					e.indent_len += 4;
					continue;
			}
			let t = n2(e, e.indent_len);
			e.indent_len = 0, e.token = e.tokens[e.len], t > 0 && n7(e, " ".repeat(t));
		}
		let t = e.pending + r;
		switch (e.token) {
			case 21:
			case 1:
			case 20:
			case 24:
			case 23:
				switch (console.assert(0 === e.text.length, "Root should not have any text"), e.pending[0]) {
					case void 0:
						e.pending = r;
						continue;
					case " ":
						console.assert(1 === e.pending.length), e.pending = r, e.indent += " ", e.indent_len += 1;
						continue;
					case "	":
						console.assert(1 === e.pending.length), e.pending = r, e.indent += "	", e.indent_len += 4;
						continue;
					case "\n":
						if (console.assert(1 === e.pending.length), 25 === e.tokens[e.len] && 21 === e.token) {
							nQ(e), n3(e), e.pending = r;
							continue;
						}
						n1(e, e.blockquote_idx), n3(e), e.blockquote_idx = 0, e.fence_start = 0, e.pending = r;
						continue;
					case "#":
						switch (r) {
							case "#":
								if (e.pending.length < 6) {
									e.pending = t;
									continue;
								}
								break;
							case " ":
								n2(e, e.indent_len), n0(e, nK(e.pending.length)), n3(e);
								continue;
						}
						break;
					case ">": {
						let t = function(e, t) {
							for (; t <= e.len;) {
								if (20 === e.tokens[t]) return t;
								t += 1;
							}
							return -1;
						}(e, e.blockquote_idx + 1);
						-1 === t ? (n1(e, e.blockquote_idx), e.blockquote_idx += 1, e.fence_start = 0, n0(e, 20)) : e.blockquote_idx = t, n3(e), e.pending = r;
						continue;
					}
					case "-":
					case "*":
					case "_":
						if (0 === e.hr_chars && (console.assert(1 === e.pending.length, "Pending should be one character"), e.hr_chars = 1, e.hr_char = e.pending), e.hr_chars > 0) {
							switch (r) {
								case e.hr_char:
									e.hr_chars += 1, e.pending = t;
									continue;
								case " ":
									e.pending = t;
									continue;
								case "\n":
									if (e.hr_chars < 3) break;
									n2(e, e.indent_len), e.renderer.add_token(e.renderer.data, 22), e.renderer.end_token(e.renderer.data), n3(e), e.hr_chars = 0;
									continue;
							}
							e.hr_chars = 0;
						}
						if ("_" !== e.pending[0] && " " === e.pending[1]) {
							n5(e, 23), n8(e, 2), n7(e, t.slice(2));
							continue;
						}
						break;
					case "`":
						if (e.pending.length < 3) {
							if ("`" === r) {
								e.pending = t, e.fence_start = t.length;
								continue;
							}
							e.fence_start = 0;
							break;
						}
						switch (r) {
							case "`":
								e.pending.length === e.fence_start ? (e.pending = t, e.fence_start = t.length) : (n0(e, 2), n3(e), e.fence_start = 0, n7(e, t));
								continue;
							case "\n":
								n2(e, e.indent_len), n0(e, 10), e.pending.length > e.fence_start && e.renderer.set_attr(e.renderer.data, 4, e.pending.slice(e.fence_start)), n3(e), e.token = 101;
								continue;
							default:
								e.pending = t;
								continue;
						}
					case "+":
						if (" " !== r) break;
						n5(e, 23), n8(e, 2);
						continue;
					case "0":
					case "1":
					case "2":
					case "3":
					case "4":
					case "5":
					case "6":
					case "7":
					case "8":
					case "9":
						if ("." === e.pending[e.pending.length - 1]) {
							if (" " !== r) break;
							n5(e, 24) && "1." !== e.pending && e.renderer.set_attr(e.renderer.data, 16, e.pending.slice(0, -1)), n8(e, e.pending.length + 1);
							continue;
						}
						{
							let n = r.charCodeAt(0);
							if (46 === n || n4(n)) {
								e.pending = t;
								continue;
							}
						}
						break;
					case "|":
						n1(e, e.blockquote_idx), n0(e, 27), n0(e, 28), e.pending = "", n7(e, r);
						continue;
				}
				let a = t;
				if (21 === e.token) e.token = e.tokens[e.len], e.renderer.add_token(e.renderer.data, 21), e.renderer.end_token(e.renderer.data);
				else if (e.indent_len >= 4) {
					let n = 0;
					for (; n < 4; n += 1) if ("	" === e.indent[n]) {
						n += 1;
						break;
					}
					a = e.indent.slice(n) + t, n0(e, 9);
				} else n0(e, 2);
				n3(e), n7(e, a);
				continue;
			case 27:
				if (1 === e.table_state) switch (r) {
					case "-":
					case " ":
					case "|":
					case ":":
						e.pending = t;
						continue;
					case "\n":
						e.table_state = 2, e.pending = "";
						continue;
					default: nQ(e), e.table_state = 0;
				}
				else switch (e.pending) {
					case "|":
						n0(e, 28), e.pending = "", n7(e, r);
						continue;
					case "\n":
						nQ(e), e.pending = "", e.table_state = 0, n7(e, r);
						continue;
				}
				break;
			case 28:
				switch (e.pending) {
					case "": break;
					case "|":
						n0(e, 29), nQ(e), e.pending = "", n7(e, r);
						continue;
					case "\n":
						nQ(e), e.table_state = Math.min(e.table_state + 1, 2), e.pending = "", n7(e, r);
						continue;
					default:
						n0(e, 29), n7(e, r);
						continue;
				}
				break;
			case 29:
				if ("|" === e.pending) {
					nZ(e), nQ(e), e.pending = "", n7(e, r);
					continue;
				}
				break;
			case 9: switch (t) {
				case "\n    ":
				case "\n   	":
				case "\n  	":
				case "\n 	":
				case "\n	":
					e.text += "\n", e.pending = "";
					continue;
				case "\n":
				case "\n ":
				case "\n  ":
				case "\n   ":
					e.pending = t;
					continue;
				default:
					0 !== e.pending.length ? (nZ(e), nQ(e), e.pending = r) : e.text += r;
					continue;
			}
			case 10:
				switch (r) {
					case "`":
						e.pending = t;
						continue;
					case "\n":
						if (t.length === e.fence_start + e.fence_end + 1) {
							nZ(e), nQ(e), e.pending = "", e.fence_start = 0, e.fence_end = 0, e.token = 101;
							continue;
						}
						e.token = 101;
						break;
					case " ": if ("\n" === e.pending[0]) {
						e.pending = t, e.fence_end += 1;
						continue;
					}
				}
				e.text += e.pending, e.pending = r, e.fence_end = 1;
				continue;
			case 11: switch (r) {
				case "`":
					t.length === e.fence_start + Number(" " === e.pending[0]) ? (nZ(e), nQ(e), e.pending = "", e.fence_start = 0) : e.pending = t;
					continue;
				case "\n":
					e.text += e.pending, e.pending = "", e.token = 21, e.blockquote_idx = 0, nZ(e);
					continue;
				case " ":
					e.text += e.pending, e.pending = r;
					continue;
				default:
					e.text += t, e.pending = "";
					continue;
			}
			case 103:
				switch (e.pending.length) {
					case 0:
						if ("[" !== r) break;
						e.pending = t;
						continue;
					case 1:
						if (" " !== r && "x" !== r) break;
						e.pending = t;
						continue;
					case 2:
						if ("]" !== r) break;
						e.pending = t;
						continue;
					case 3:
						if (" " !== r) break;
						e.renderer.add_token(e.renderer.data, 26), "x" === e.pending[1] && e.renderer.set_attr(e.renderer.data, 8, ""), e.renderer.end_token(e.renderer.data), e.pending = " ";
						continue;
				}
				e.token = e.tokens[e.len], e.pending = "", n7(e, t);
				continue;
			case 14:
			case 15: {
				let t = "*", n = 12;
				if (15 === e.token && (t = "_", n = 13), t === e.pending) {
					if (nZ(e), t === r) {
						nQ(e), e.pending = "";
						continue;
					}
					n0(e, n), e.pending = r;
					continue;
				}
				break;
			}
			case 12:
			case 13: {
				let n = "*", a = 14;
				switch (13 === e.token && (n = "_", a = 15), e.pending) {
					case n:
						n === r ? e.tokens[e.len - 1] === a ? e.pending = t : (nZ(e), n0(e, a), e.pending = "") : (nZ(e), nQ(e), e.pending = r);
						continue;
					case n + n:
						let l = e.token;
						nZ(e), nQ(e), nQ(e), n !== r ? (n0(e, l), e.pending = r) : e.pending = "";
						continue;
				}
				break;
			}
			case 16:
				if ("~~" === t) {
					nZ(e), nQ(e), e.pending = "";
					continue;
				}
				break;
			case 105:
				"\n" === r ? (nZ(e), n0(e, 30), e.pending = "") : (e.token = e.tokens[e.len], "\\" === e.pending[0] ? e.text += "[" : e.text += "$$", e.pending = "", n7(e, r));
				continue;
			case 30:
				if ("\\]" === t || "$$" === t) {
					nZ(e), nQ(e), e.pending = "";
					continue;
				}
				break;
			case 31:
				if ("\\)" === t || "$" === e.pending[0]) {
					nZ(e), nQ(e), ")" === r ? e.pending = "" : e.pending = r;
					continue;
				}
				break;
			case 102:
				"http://" === t || "https://" === t ? (nZ(e), n0(e, 18), e.pending = t, e.text = t) : "http:/"[e.pending.length] === r || "https:/"[e.pending.length] === r ? e.pending = t : (e.token = e.tokens[e.len], n7(e, r));
				continue;
			case 17:
			case 19:
				if ("]" === e.pending) {
					nZ(e), "(" === r ? e.pending = t : (nQ(e), e.pending = r);
					continue;
				}
				if ("]" === e.pending[0] && "(" === e.pending[1]) {
					if (")" === r) {
						let t = 17 === e.token ? 1 : 2, n = e.pending.slice(2);
						e.renderer.set_attr(e.renderer.data, t, n), nQ(e), e.pending = "";
					} else e.pending += r;
					continue;
				}
				break;
			case 18:
				" " === r || "\n" === r || "\\" === r ? (e.renderer.set_attr(e.renderer.data, 1, e.pending), nZ(e), nQ(e), e.pending = r) : (e.text += r, e.pending = t);
				continue;
			case 104:
				if (t.startsWith("<br")) {
					if (3 === t.length || " " === r || "/" === r && (4 === t.length || " " === e.pending[e.pending.length - 1])) {
						e.pending = t;
						continue;
					}
					if (">" === r) {
						nZ(e), e.token = e.tokens[e.len], e.renderer.add_token(e.renderer.data, 21), e.renderer.end_token(e.renderer.data), e.pending = "";
						continue;
					}
				}
				e.token = e.tokens[e.len], e.text += "<", e.pending = e.pending.slice(1), n7(e, r);
				continue;
		}
		switch (e.pending[0]) {
			case "\\":
				if (19 === e.token || 30 === e.token || 31 === e.token) break;
				switch (r) {
					case "(":
						nZ(e), n0(e, 31), e.pending = "";
						continue;
					case "[":
						e.token = 105, e.pending = t;
						continue;
					case "\n":
						e.pending = r;
						continue;
					default:
						let l = r.charCodeAt(0);
						e.pending = "", e.text += n4(l) || l >= 65 && l <= 90 || l >= 97 && l <= 122 ? t : r;
						continue;
				}
			case "\n":
				switch (e.token) {
					case 19:
					case 30:
					case 31: break;
					case 3:
					case 4:
					case 5:
					case 6:
					case 7:
					case 8:
						nZ(e), n1(e, e.blockquote_idx), e.blockquote_idx = 0, e.pending = r;
						continue;
					default:
						nZ(e), e.pending = r, e.token = 21, e.blockquote_idx = 0;
						continue;
				}
				break;
			case "<":
				if (19 !== e.token && 30 !== e.token && 31 !== e.token) {
					nZ(e), e.pending = t, e.token = 104;
					continue;
				}
				break;
			case "`":
				if (19 === e.token) break;
				"`" === r ? (e.fence_start += 1, e.pending = t) : (e.fence_start += 1, nZ(e), n0(e, 11), e.text = " " === r || "\n" === r ? "" : r, e.pending = "");
				continue;
			case "_":
			case "*": {
				if (19 === e.token || 30 === e.token || 31 === e.token || 14 === e.token) break;
				let n = 12, a = 14, l = e.pending[0];
				if ("_" === l && (n = 13, a = 15), 1 === e.pending.length) {
					if (l === r) {
						e.pending = t;
						continue;
					}
					if (" " !== r && "\n" !== r) {
						nZ(e), n0(e, n), e.pending = r;
						continue;
					}
				} else {
					if (l === r) {
						nZ(e), n0(e, a), n0(e, n), e.pending = "";
						continue;
					}
					if (" " !== r && "\n" !== r) {
						nZ(e), n0(e, a), e.pending = r;
						continue;
					}
				}
				break;
			}
			case "~":
				if (19 !== e.token && 16 !== e.token) {
					if ("~" === e.pending) {
						if ("~" === r) {
							e.pending = t;
							continue;
						}
					} else if (" " !== r && "\n" !== r) {
						nZ(e), n0(e, 16), e.pending = r;
						continue;
					}
				}
				break;
			case "$":
				if (19 !== e.token && 16 !== e.token && "$" === e.pending) if ("$" === r) {
					e.token = 105, e.pending = t;
					continue;
				} else {
					var n;
					if (n4(n = r.charCodeAt(0)) || function(e) {
						switch (e) {
							case 32:
							case 58:
							case 59:
							case 41:
							case 44:
							case 33:
							case 46:
							case 63:
							case 93:
							case 10: return !0;
							default: return !1;
						}
					}(n));
					else {
						nZ(e), n0(e, 31), e.pending = r;
						continue;
					}
				}
				break;
			case "[":
				if (19 !== e.token && 17 !== e.token && 30 !== e.token && 31 !== e.token && "]" !== r) {
					nZ(e), n0(e, 17), e.pending = r;
					continue;
				}
				break;
			case "!":
				if (19 !== e.token && "[" === r) {
					nZ(e), n0(e, 19), e.pending = "";
					continue;
				}
				break;
			case " ": if (1 === e.pending.length && " " === r) continue;
		}
		if (19 !== e.token && 17 !== e.token && 30 !== e.token && 31 !== e.token && "h" === r && (" " === e.pending || "" === e.pending)) {
			e.text += e.pending, e.pending = r, e.token = 102;
			continue;
		}
		e.text += e.pending, e.pending = r;
	}
	nZ(e);
}
function n6(e, t) {
	let n, r = e.nodes[e.index];
	switch (t) {
		case 1: return;
		case 20:
			n = document.createElement("blockquote");
			break;
		case 2:
			n = document.createElement("p");
			break;
		case 21:
			n = document.createElement("br");
			break;
		case 22:
			n = document.createElement("hr");
			break;
		case 3:
			n = document.createElement("h1");
			break;
		case 4:
			n = document.createElement("h2");
			break;
		case 5:
			n = document.createElement("h3");
			break;
		case 6:
			n = document.createElement("h4");
			break;
		case 7:
			n = document.createElement("h5");
			break;
		case 8:
			n = document.createElement("h6");
			break;
		case 12:
		case 13:
			n = document.createElement("em");
			break;
		case 14:
		case 15:
			n = document.createElement("strong");
			break;
		case 16:
			n = document.createElement("s");
			break;
		case 11:
			n = document.createElement("code");
			break;
		case 18:
		case 17:
			n = document.createElement("a");
			break;
		case 19:
			n = document.createElement("img");
			break;
		case 23:
			n = document.createElement("ul");
			break;
		case 24:
			n = document.createElement("ol");
			break;
		case 25:
			n = document.createElement("li");
			break;
		case 26:
			let a = n = document.createElement("input");
			a.type = "checkbox", a.disabled = !0;
			break;
		case 9:
		case 10:
			r = r.appendChild(document.createElement("pre")), n = document.createElement("code");
			break;
		case 27:
			n = document.createElement("table");
			break;
		case 28:
			switch (r.children.length) {
				case 0:
					r = r.appendChild(document.createElement("thead"));
					break;
				case 1:
					r = r.appendChild(document.createElement("tbody"));
					break;
				default: r = r.children[1];
			}
			n = document.createElement("tr");
			break;
		case 29:
			n = document.createElement(r.parentElement?.tagName === "THEAD" ? "th" : "td");
			break;
		case 30:
			n = document.createElement("equation-block");
			break;
		case 31: n = document.createElement("equation-inline");
	}
	e.nodes[++e.index] = r.appendChild(n);
}
function n9(e) {
	e.index -= 1;
}
function re(e, t) {
	e.nodes[e.index].appendChild(document.createTextNode(t));
}
function rt(e, t, n) {
	e.nodes[e.index].setAttribute(function(e) {
		switch (e) {
			case 1: return "href";
			case 2: return "src";
			case 4: return "class";
			case 8: return "checked";
			case 16: return "start";
		}
	}(t), n);
}
var rn = ((e, t, n, r) => {
	if (t && "object" == typeof t || "function" == typeof t) for (var a, l = m(t), s = 0, i = l.length; s < i; s++) a = l[s], y.call(e, a) || a === n || b(e, a, {
		get: ((e) => t[e]).bind(null, a),
		enumerable: !(r = x(t, a)) || r.enumerable
	});
	return e;
})(b(null != (n = (e = (e, t) => {
	var n, r, a = function(e) {
		var t = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, n = 0, r = {}, a = {
			manual: e.Prism && e.Prism.manual,
			disableWorkerMessageHandler: e.Prism && e.Prism.disableWorkerMessageHandler,
			util: {
				encode: function e(t) {
					return t instanceof l ? new l(t.type, e(t.content), t.alias) : Array.isArray(t) ? t.map(e) : t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
				},
				type: function(e) {
					return Object.prototype.toString.call(e).slice(8, -1);
				},
				objId: function(e) {
					return e.__id || Object.defineProperty(e, "__id", { value: ++n }), e.__id;
				},
				clone: function e(t, n) {
					var r, l;
					switch (n = n || {}, a.util.type(t)) {
						case "Object":
							if (n[l = a.util.objId(t)]) return n[l];
							for (var s in r = {}, n[l] = r, t) t.hasOwnProperty(s) && (r[s] = e(t[s], n));
							return r;
						case "Array":
							if (n[l = a.util.objId(t)]) return n[l];
							return r = [], n[l] = r, t.forEach(function(t, a) {
								r[a] = e(t, n);
							}), r;
						default: return t;
					}
				},
				getLanguage: function(e) {
					for (; e;) {
						var n = t.exec(e.className);
						if (n) return n[1].toLowerCase();
						e = e.parentElement;
					}
					return "none";
				},
				setLanguage: function(e, n) {
					e.className = e.className.replace(RegExp(t, "gi"), ""), e.classList.add("language-" + n);
				},
				currentScript: function() {
					if ("u" < typeof document) return null;
					if (document.currentScript && "SCRIPT" === document.currentScript.tagName && 1) return document.currentScript;
					try {
						throw Error();
					} catch (r) {
						var e = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r.stack) || [])[1];
						if (e) {
							var t = document.getElementsByTagName("script");
							for (var n in t) if (t[n].src == e) return t[n];
						}
						return null;
					}
				},
				isActive: function(e, t, n) {
					for (var r = "no-" + t; e;) {
						var a = e.classList;
						if (a.contains(t)) return !0;
						if (a.contains(r)) return !1;
						e = e.parentElement;
					}
					return !!n;
				}
			},
			languages: {
				plain: r,
				plaintext: r,
				text: r,
				txt: r,
				extend: function(e, t) {
					var n = a.util.clone(a.languages[e]);
					for (var r in t) n[r] = t[r];
					return n;
				},
				insertBefore: function(e, t, n, r) {
					var l = (r = r || a.languages)[e], s = {};
					for (var i in l) if (l.hasOwnProperty(i)) {
						if (i == t) for (var o in n) n.hasOwnProperty(o) && (s[o] = n[o]);
						n.hasOwnProperty(i) || (s[i] = l[i]);
					}
					var c = r[e];
					return r[e] = s, a.languages.DFS(a.languages, function(t, n) {
						n === c && t != e && (this[t] = s);
					}), s;
				},
				DFS: function e(t, n, r, l) {
					l = l || {};
					var s = a.util.objId;
					for (var i in t) if (t.hasOwnProperty(i)) {
						n.call(t, i, t[i], r || i);
						var o = t[i], c = a.util.type(o);
						"Object" !== c || l[s(o)] ? "Array" !== c || l[s(o)] || (l[s(o)] = !0, e(o, n, i, l)) : (l[s(o)] = !0, e(o, n, null, l));
					}
				}
			},
			plugins: {},
			highlightAll: function(e, t) {
				a.highlightAllUnder(document, e, t);
			},
			highlightAllUnder: function(e, t, n) {
				var r = {
					callback: n,
					container: e,
					selector: "code[class*=\"language-\"], [class*=\"language-\"] code, code[class*=\"lang-\"], [class*=\"lang-\"] code"
				};
				a.hooks.run("before-highlightall", r), r.elements = Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)), a.hooks.run("before-all-elements-highlight", r);
				for (var l, s = 0; l = r.elements[s++];) a.highlightElement(l, !0 === t, r.callback);
			},
			highlightElement: function(t, n, r) {
				var l = a.util.getLanguage(t), s = a.languages[l];
				a.util.setLanguage(t, l);
				var i = t.parentElement;
				i && "pre" === i.nodeName.toLowerCase() && a.util.setLanguage(i, l);
				var o = {
					element: t,
					language: l,
					grammar: s,
					code: t.textContent
				};
				function c(e) {
					o.highlightedCode = e, a.hooks.run("before-insert", o), o.element.innerHTML = o.highlightedCode, a.hooks.run("after-highlight", o), a.hooks.run("complete", o), r && r.call(o.element);
				}
				if (a.hooks.run("before-sanity-check", o), (i = o.element.parentElement) && "pre" === i.nodeName.toLowerCase() && !i.hasAttribute("tabindex") && i.setAttribute("tabindex", "0"), !o.code) {
					a.hooks.run("complete", o), r && r.call(o.element);
					return;
				}
				if (a.hooks.run("before-highlight", o), !o.grammar) return void c(a.util.encode(o.code));
				if (n && e.Worker) {
					var d = new Worker(a.filename);
					d.onmessage = function(e) {
						c(e.data);
					}, d.postMessage(JSON.stringify({
						language: o.language,
						code: o.code,
						immediateClose: !0
					}));
				} else c(a.highlight(o.code, o.grammar, o.language));
			},
			highlight: function(e, t, n) {
				var r = {
					code: e,
					grammar: t,
					language: n
				};
				if (a.hooks.run("before-tokenize", r), !r.grammar) throw Error("The language \"" + r.language + "\" has no grammar.");
				return r.tokens = a.tokenize(r.code, r.grammar), a.hooks.run("after-tokenize", r), l.stringify(a.util.encode(r.tokens), r.language);
			},
			tokenize: function(e, t) {
				var n = t.rest;
				if (n) {
					for (var r in n) t[r] = n[r];
					delete t.rest;
				}
				var c = new i();
				return o(c, c.head, e), function e(t, n, r, i, c, d) {
					for (var u in r) if (r.hasOwnProperty(u) && r[u]) {
						var f = r[u];
						f = Array.isArray(f) ? f : [f];
						for (var h = 0; h < f.length; ++h) {
							if (d && d.cause == u + "," + h) return;
							var p = f[h], v = p.inside, g = !!p.lookbehind, b = !!p.greedy, x = p.alias;
							if (b && !p.pattern.global) {
								var m = p.pattern.toString().match(/[imsuy]*$/)[0];
								p.pattern = RegExp(p.pattern.source, m + "g");
							}
							for (var w = p.pattern || p, y = i.next, k = c; y !== n.tail && (!d || !(k >= d.reach)); k += y.value.length, y = y.next) {
								var _, $ = y.value;
								if (n.length > t.length) return;
								if (!($ instanceof l)) {
									var q = 1;
									if (b) {
										if (!(_ = s(w, k, t, g)) || _.index >= t.length) break;
										var S = _.index, j = _.index + _[0].length, E = k;
										for (E += y.value.length; S >= E;) E += (y = y.next).value.length;
										if (E -= y.value.length, k = E, y.value instanceof l) continue;
										for (var A = y; A !== n.tail && (E < j || "string" == typeof A.value); A = A.next) q++, E += A.value.length;
										q--, $ = t.slice(k, E), _.index -= k;
									} else if (!(_ = s(w, 0, $, g))) continue;
									var S = _.index, z = _[0], F = $.slice(0, S), C = $.slice(S + z.length), P = k + $.length;
									d && P > d.reach && (d.reach = P);
									var L = y.prev;
									if (F && (L = o(n, L, F), k += F.length), function(e, t, n) {
										for (var r = t.next, a = 0; a < n && r !== e.tail; a++) r = r.next;
										t.next = r, r.prev = t, e.length -= a;
									}(n, L, q), y = o(n, L, new l(u, v ? a.tokenize(z, v) : z, x, z)), C && o(n, y, C), q > 1) {
										var O = {
											cause: u + "," + h,
											reach: P
										};
										e(t, n, r, y.prev, k, O), d && O.reach > d.reach && (d.reach = O.reach);
									}
								}
							}
						}
					}
				}(e, c, t, c.head, 0), function(e) {
					for (var t = [], n = e.head.next; n !== e.tail;) t.push(n.value), n = n.next;
					return t;
				}(c);
			},
			hooks: {
				all: {},
				add: function(e, t) {
					var n = a.hooks.all;
					n[e] = n[e] || [], n[e].push(t);
				},
				run: function(e, t) {
					var n = a.hooks.all[e];
					if (n && n.length) for (var r, l = 0; r = n[l++];) r(t);
				}
			},
			Token: l
		};
		function l(e, t, n, r) {
			this.type = e, this.content = t, this.alias = n, this.length = 0 | (r || "").length;
		}
		function s(e, t, n, r) {
			e.lastIndex = t;
			var a = e.exec(n);
			if (a && r && a[1]) {
				var l = a[1].length;
				a.index += l, a[0] = a[0].slice(l);
			}
			return a;
		}
		function i() {
			var e = {
				value: null,
				prev: null,
				next: null
			}, t = {
				value: null,
				prev: e,
				next: null
			};
			e.next = t, this.head = e, this.tail = t, this.length = 0;
		}
		function o(e, t, n) {
			var r = t.next, a = {
				value: n,
				prev: t,
				next: r
			};
			return t.next = a, r.prev = a, e.length++, a;
		}
		if (e.Prism = a, l.stringify = function e(t, n) {
			if ("string" == typeof t) return t;
			if (Array.isArray(t)) {
				var r = "";
				return t.forEach(function(t) {
					r += e(t, n);
				}), r;
			}
			var l = {
				type: t.type,
				content: e(t.content, n),
				tag: "span",
				classes: ["token", t.type],
				attributes: {},
				language: n
			}, s = t.alias;
			s && (Array.isArray(s) ? Array.prototype.push.apply(l.classes, s) : l.classes.push(s)), a.hooks.run("wrap", l);
			var i = "";
			for (var o in l.attributes) i += " " + o + "=\"" + (l.attributes[o] || "").replace(/"/g, "&quot;") + "\"";
			return "<" + l.tag + " class=\"" + l.classes.join(" ") + "\"" + i + ">" + l.content + "</" + l.tag + ">";
		}, !e.document) return !e.addEventListener || a.disableWorkerMessageHandler || e.addEventListener("message", function(t) {
			var n = JSON.parse(t.data), r = n.language, l = n.code, s = n.immediateClose;
			e.postMessage(a.highlight(l, a.languages[r], r)), s && e.close();
		}, !1), a;
		var c = a.util.currentScript();
		function d() {
			a.manual || a.highlightAll();
		}
		if (c && (a.filename = c.src, c.hasAttribute("data-manual") && (a.manual = !0)), !a.manual) {
			var u = document.readyState;
			"loading" === u || "interactive" === u && c && c.defer ? document.addEventListener("DOMContentLoaded", d) : window.requestAnimationFrame ? window.requestAnimationFrame(d) : window.setTimeout(d, 16);
		}
		return a;
	}("u" > typeof window ? window : "u" > typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {});
	void 0 !== t && t.exports && (t.exports = a), "u" > typeof global && (global.Prism = a), a.languages.markup = {
		comment: {
			pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
			greedy: !0
		},
		prolog: {
			pattern: /<\?[\s\S]+?\?>/,
			greedy: !0
		},
		doctype: {
			pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
			greedy: !0,
			inside: {
				"internal-subset": {
					pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
					lookbehind: !0,
					greedy: !0,
					inside: null
				},
				string: {
					pattern: /"[^"]*"|'[^']*'/,
					greedy: !0
				},
				punctuation: /^<!|>$|[[\]]/,
				"doctype-tag": /^DOCTYPE/i,
				name: /[^\s<>'"]+/
			}
		},
		cdata: {
			pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
			greedy: !0
		},
		tag: {
			pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
			greedy: !0,
			inside: {
				tag: {
					pattern: /^<\/?[^\s>\/]+/,
					inside: {
						punctuation: /^<\/?/,
						namespace: /^[^\s>\/:]+:/
					}
				},
				"special-attr": [],
				"attr-value": {
					pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
					inside: { punctuation: [{
						pattern: /^=/,
						alias: "attr-equals"
					}, {
						pattern: /^(\s*)["']|["']$/,
						lookbehind: !0
					}] }
				},
				punctuation: /\/?>/,
				"attr-name": {
					pattern: /[^\s>\/]+/,
					inside: { namespace: /^[^\s>\/:]+:/ }
				}
			}
		},
		entity: [{
			pattern: /&[\da-z]{1,8};/i,
			alias: "named-entity"
		}, /&#x?[\da-f]{1,8};/i]
	}, a.languages.markup.tag.inside["attr-value"].inside.entity = a.languages.markup.entity, a.languages.markup.doctype.inside["internal-subset"].inside = a.languages.markup, a.hooks.add("wrap", function(e) {
		"entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"));
	}), Object.defineProperty(a.languages.markup.tag, "addInlined", { value: function(e, t) {
		var n = {};
		n["language-" + t] = {
			pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
			lookbehind: !0,
			inside: a.languages[t]
		}, n.cdata = /^<!\[CDATA\[|\]\]>$/i;
		var r = { "included-cdata": {
			pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
			inside: n
		} };
		r["language-" + t] = {
			pattern: /[\s\S]+/,
			inside: a.languages[t]
		};
		var l = {};
		l[e] = {
			pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
				return e;
			}), "i"),
			lookbehind: !0,
			greedy: !0,
			inside: r
		}, a.languages.insertBefore("markup", "cdata", l);
	} }), Object.defineProperty(a.languages.markup.tag, "addAttribute", { value: function(e, t) {
		a.languages.markup.tag.inside["special-attr"].push({
			pattern: RegExp(/(^|["'\s])/.source + "(?:" + e + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"),
			lookbehind: !0,
			inside: {
				"attr-name": /^[^\s=]+/,
				"attr-value": {
					pattern: /=[\s\S]+/,
					inside: {
						value: {
							pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
							lookbehind: !0,
							alias: [t, "language-" + t],
							inside: a.languages[t]
						},
						punctuation: [{
							pattern: /^=/,
							alias: "attr-equals"
						}, /"|'/]
					}
				}
			}
		});
	} }), a.languages.html = a.languages.markup, a.languages.mathml = a.languages.markup, a.languages.svg = a.languages.markup, a.languages.xml = a.languages.extend("markup", {}), a.languages.ssml = a.languages.xml, a.languages.atom = a.languages.xml, a.languages.rss = a.languages.xml, n = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/, a.languages.css = {
		comment: /\/\*[\s\S]*?\*\//,
		atrule: {
			pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + n.source + ")*?" + /(?:;|(?=\s*\{))/.source),
			inside: {
				rule: /^@[\w-]+/,
				"selector-function-argument": {
					pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
					lookbehind: !0,
					alias: "selector"
				},
				keyword: {
					pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
					lookbehind: !0
				}
			}
		},
		url: {
			pattern: RegExp("\\burl\\((?:" + n.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
			greedy: !0,
			inside: {
				function: /^url/i,
				punctuation: /^\(|\)$/,
				string: {
					pattern: RegExp("^" + n.source + "$"),
					alias: "url"
				}
			}
		},
		selector: {
			pattern: RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" + n.source + ")*(?=\\s*\\{)"),
			lookbehind: !0
		},
		string: {
			pattern: n,
			greedy: !0
		},
		property: {
			pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
			lookbehind: !0
		},
		important: /!important\b/i,
		function: {
			pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
			lookbehind: !0
		},
		punctuation: /[(){};:,]/
	}, a.languages.css.atrule.inside.rest = a.languages.css, (r = a.languages.markup) && (r.tag.addInlined("style", "css"), r.tag.addAttribute("style", "css")), a.languages.clike = {
		comment: [{
			pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
			lookbehind: !0,
			greedy: !0
		}, {
			pattern: /(^|[^\\:])\/\/.*/,
			lookbehind: !0,
			greedy: !0
		}],
		string: {
			pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
			greedy: !0
		},
		"class-name": {
			pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
			lookbehind: !0,
			inside: { punctuation: /[.\\]/ }
		},
		keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
		boolean: /\b(?:false|true)\b/,
		function: /\b\w+(?=\()/,
		number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
		operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
		punctuation: /[{}[\];(),.:]/
	}, a.languages.javascript = a.languages.extend("clike", {
		"class-name": [a.languages.clike["class-name"], {
			pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
			lookbehind: !0
		}],
		keyword: [{
			pattern: /((?:^|\})\s*)catch\b/,
			lookbehind: !0
		}, {
			pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
			lookbehind: !0
		}],
		function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
		number: {
			pattern: RegExp(/(^|[^\w$])/.source + "(?:" + (/NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|") + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source + ")" + /(?![\w$])/.source),
			lookbehind: !0
		},
		operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
	}), a.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, a.languages.insertBefore("javascript", "keyword", {
		regex: {
			pattern: RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),
			lookbehind: !0,
			greedy: !0,
			inside: {
				"regex-source": {
					pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
					lookbehind: !0,
					alias: "language-regex",
					inside: a.languages.regex
				},
				"regex-delimiter": /^\/|\/$/,
				"regex-flags": /^[a-z]+$/
			}
		},
		"function-variable": {
			pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
			alias: "function"
		},
		parameter: [
			{
				pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
				lookbehind: !0,
				inside: a.languages.javascript
			},
			{
				pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
				lookbehind: !0,
				inside: a.languages.javascript
			},
			{
				pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
				lookbehind: !0,
				inside: a.languages.javascript
			},
			{
				pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
				lookbehind: !0,
				inside: a.languages.javascript
			}
		],
		constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
	}), a.languages.insertBefore("javascript", "string", {
		hashbang: {
			pattern: /^#!.*/,
			greedy: !0,
			alias: "comment"
		},
		"template-string": {
			pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
			greedy: !0,
			inside: {
				"template-punctuation": {
					pattern: /^`|`$/,
					alias: "string"
				},
				interpolation: {
					pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
					lookbehind: !0,
					inside: {
						"interpolation-punctuation": {
							pattern: /^\$\{|\}$/,
							alias: "punctuation"
						},
						rest: a.languages.javascript
					}
				},
				string: /[\s\S]+/
			}
		},
		"string-property": {
			pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
			lookbehind: !0,
			greedy: !0,
			alias: "property"
		}
	}), a.languages.insertBefore("javascript", "operator", { "literal-property": {
		pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
		lookbehind: !0,
		alias: "property"
	} }), a.languages.markup && (a.languages.markup.tag.addInlined("script", "javascript"), a.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript")), a.languages.js = a.languages.javascript, function() {
		if (void 0 !== a && "u" > typeof document) {
			Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
			var e = {
				js: "javascript",
				py: "python",
				rb: "ruby",
				ps1: "powershell",
				psm1: "powershell",
				sh: "bash",
				bat: "batch",
				h: "c",
				tex: "latex"
			}, t = "data-src-status", n = "loading", r = "loaded", l = "pre[data-src]:not([" + t + "=\"" + r + "\"]):not([" + t + "=\"" + n + "\"])";
			a.hooks.add("before-highlightall", function(e) {
				e.selector += ", " + l;
			}), a.hooks.add("before-sanity-check", function(s) {
				var i = s.element;
				if (i.matches(l)) {
					s.code = "", i.setAttribute(t, n);
					var o, c, d, u = i.appendChild(document.createElement("CODE"));
					u.textContent = "Loading…";
					var f = i.getAttribute("data-src"), h = s.language;
					if ("none" === h) {
						var p = (/\.(\w+)$/.exec(f) || [, "none"])[1];
						h = e[p] || p;
					}
					a.util.setLanguage(u, h), a.util.setLanguage(i, h);
					var v = a.plugins.autoloader;
					v && v.loadLanguages(h), o = function(e) {
						i.setAttribute(t, r);
						var n = function(e) {
							var t = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(e || "");
							if (t) {
								var n = Number(t[1]), r = t[2], a = t[3];
								return r ? a ? [n, Number(a)] : [n, void 0] : [n, n];
							}
						}(i.getAttribute("data-range"));
						if (n) {
							var l = e.split(/\r\n?|\n/g), s = n[0], o = null == n[1] ? l.length : n[1];
							s < 0 && (s += l.length), s = Math.max(0, Math.min(s - 1, l.length)), o < 0 && (o += l.length), o = Math.max(0, Math.min(o, l.length)), e = l.slice(s, o).join("\n"), i.hasAttribute("data-start") || i.setAttribute("data-start", String(s + 1));
						}
						u.textContent = e, a.highlightElement(u);
					}, c = function(e) {
						i.setAttribute(t, "failed"), u.textContent = e;
					}, (d = new XMLHttpRequest()).open("GET", f, !0), d.onreadystatechange = function() {
						var e;
						4 == d.readyState && (d.status < 400 && d.responseText ? o(d.responseText) : d.status >= 400 ? c((e = d.status, "✖ Error " + e + " while fetching file: " + d.statusText)) : c("✖ Error: File does not exist or is empty"));
					}, d.send(null);
				}
			}), a.plugins.fileHighlight = { highlight: function(e) {
				for (var t, n = (e || document).querySelectorAll(l), r = 0; t = n[r++];) a.highlightElement(t);
			} };
			var s = !1;
			a.fileHighlight = function() {
				s || (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."), s = !0), a.plugins.fileHighlight.highlight.apply(this, arguments);
			};
		}
	}();
}, () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports))()) ? g(w(n)) : {}, "default", {
	value: n,
	enumerable: !0
}), n);
(function(e) {
	e.languages.pug = {
		comment: {
			pattern: /(^([\t ]*))\/\/.*(?:(?:\r?\n|\r)\2[\t ].+)*/m,
			lookbehind: !0
		},
		"multiline-script": {
			pattern: /(^([\t ]*)script\b.*\.[\t ]*)(?:(?:\r?\n|\r(?!\n))(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/m,
			lookbehind: !0,
			inside: e.languages.javascript
		},
		filter: {
			pattern: /(^([\t ]*)):.+(?:(?:\r?\n|\r(?!\n))(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/m,
			lookbehind: !0,
			inside: {
				"filter-name": {
					pattern: /^:[\w-]+/,
					alias: "variable"
				},
				text: /\S[\s\S]*/
			}
		},
		"multiline-plain-text": {
			pattern: /(^([\t ]*)[\w\-#.]+\.[\t ]*)(?:(?:\r?\n|\r(?!\n))(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/m,
			lookbehind: !0
		},
		markup: {
			pattern: /(^[\t ]*)<.+/m,
			lookbehind: !0,
			inside: e.languages.markup
		},
		doctype: {
			pattern: /((?:^|\n)[\t ]*)doctype(?: .+)?/,
			lookbehind: !0
		},
		"flow-control": {
			pattern: /(^[\t ]*)(?:case|default|each|else|if|unless|when|while)\b(?: .+)?/m,
			lookbehind: !0,
			inside: {
				each: {
					pattern: /^each .+? in\b/,
					inside: {
						keyword: /\b(?:each|in)\b/,
						punctuation: /,/
					}
				},
				branch: {
					pattern: /^(?:case|default|else|if|unless|when|while)\b/,
					alias: "keyword"
				},
				rest: e.languages.javascript
			}
		},
		keyword: {
			pattern: /(^[\t ]*)(?:append|block|extends|include|prepend)\b.+/m,
			lookbehind: !0
		},
		mixin: [{
			pattern: /(^[\t ]*)mixin .+/m,
			lookbehind: !0,
			inside: {
				keyword: /^mixin/,
				function: /\w+(?=\s*\(|\s*$)/,
				punctuation: /[(),.]/
			}
		}, {
			pattern: /(^[\t ]*)\+.+/m,
			lookbehind: !0,
			inside: {
				name: {
					pattern: /^\+\w+/,
					alias: "function"
				},
				rest: e.languages.javascript
			}
		}],
		script: {
			pattern: /(^[\t ]*script(?:(?:&[^(]+)?\([^)]+\))*[\t ]).+/m,
			lookbehind: !0,
			inside: e.languages.javascript
		},
		"plain-text": {
			pattern: /(^[\t ]*(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?[\t ]).+/m,
			lookbehind: !0
		},
		tag: {
			pattern: /(^[\t ]*)(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?:?/m,
			lookbehind: !0,
			inside: {
				attributes: [{
					pattern: /&[^(]+\([^)]+\)/,
					inside: e.languages.javascript
				}, {
					pattern: /\([^)]+\)/,
					inside: {
						"attr-value": {
							pattern: /(=\s*(?!\s))(?:\{[^}]*\}|[^,)\r\n]+)/,
							lookbehind: !0,
							inside: e.languages.javascript
						},
						"attr-name": /[\w-]+(?=\s*!?=|\s*[,)])/,
						punctuation: /[!=(),]+/
					}
				}],
				punctuation: /:/,
				"attr-id": /#[\w\-]+/,
				"attr-class": /\.[\w\-]+/
			}
		},
		code: [{
			pattern: /(^[\t ]*(?:-|!?=)).+/m,
			lookbehind: !0,
			inside: e.languages.javascript
		}],
		punctuation: /[.\-!=|]+/
	};
	for (var t = /(^([\t ]*)):<filter_name>(?:(?:\r?\n|\r(?!\n))(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/.source, n = [
		{
			filter: "atpl",
			language: "twig"
		},
		{
			filter: "coffee",
			language: "coffeescript"
		},
		"ejs",
		"handlebars",
		"less",
		"livescript",
		"markdown",
		{
			filter: "sass",
			language: "scss"
		},
		"stylus"
	], r = {}, a = 0, l = n.length; a < l; a++) {
		var s = n[a];
		s = "string" == typeof s ? {
			filter: s,
			language: s
		} : s, e.languages[s.language] && (r["filter-" + s.filter] = {
			pattern: RegExp(t.replace("<filter_name>", function() {
				return s.filter;
			}), "m"),
			lookbehind: !0,
			inside: {
				"filter-name": {
					pattern: /^:[\w-]+/,
					alias: "variable"
				},
				text: {
					pattern: /\S[\s\S]*/,
					alias: [s.language, "language-" + s.language],
					inside: e.languages[s.language]
				}
			}
		});
	}
	e.languages.insertBefore("pug", "filter", r);
})(Prism), l = Prism, (o = {
	comment: {
		pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
		lookbehind: !0
	},
	url: {
		pattern: /\burl\((["']?).*?\1\)/i,
		greedy: !0
	},
	string: {
		pattern: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
		greedy: !0
	},
	interpolation: null,
	func: null,
	important: /\B!(?:important|optional)\b/i,
	keyword: {
		pattern: /(^|\s+)(?:(?:else|for|if|return|unless)(?=\s|$)|@[\w-]+)/,
		lookbehind: !0
	},
	hexcode: /#[\da-f]{3,6}/i,
	color: [/\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i, {
		pattern: /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
		inside: {
			unit: s = {
				pattern: /(\b\d+)(?:%|[a-z]+)/,
				lookbehind: !0
			},
			number: i = {
				pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
				lookbehind: !0
			},
			function: /[\w-]+(?=\()/,
			punctuation: /[(),]/
		}
	}],
	entity: /\\[\da-f]{1,8}/i,
	unit: s,
	boolean: /\b(?:false|true)\b/,
	operator: [/~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.{2,3}|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/],
	number: i,
	punctuation: /[{}()\[\];:,]/
}).interpolation = {
	pattern: /\{[^\r\n}:]+\}/,
	alias: "variable",
	inside: {
		delimiter: {
			pattern: /^\{|\}$/,
			alias: "punctuation"
		},
		rest: o
	}
}, o.func = {
	pattern: /[\w-]+\([^)]*\).*/,
	inside: {
		function: /^[^(]+/,
		rest: o
	}
}, l.languages.stylus = {
	"atrule-declaration": {
		pattern: /(^[ \t]*)@.+/m,
		lookbehind: !0,
		inside: {
			atrule: /^@[\w-]+/,
			rest: o
		}
	},
	"variable-declaration": {
		pattern: /(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:\{[^{}]*\}|\S.*|$)/m,
		lookbehind: !0,
		inside: {
			variable: /^\S+/,
			rest: o
		}
	},
	statement: {
		pattern: /(^[ \t]*)(?:else|for|if|return|unless)[ \t].+/m,
		lookbehind: !0,
		inside: {
			keyword: /^\S+/,
			rest: o
		}
	},
	"property-declaration": {
		pattern: /((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)(?!\s)[^{\r\n]*(?:;|[^{\r\n,]$(?!(?:\r?\n|\r)(?:\{|\2[ \t])))/m,
		lookbehind: !0,
		inside: {
			property: {
				pattern: /^[^\s:]+/,
				inside: { interpolation: o.interpolation }
			},
			rest: o
		}
	},
	selector: {
		pattern: /(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t])))/m,
		lookbehind: !0,
		inside: {
			interpolation: o.interpolation,
			comment: o.comment,
			punctuation: /[{},]/
		}
	},
	func: o.func,
	string: o.string,
	comment: {
		pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
		lookbehind: !0,
		greedy: !0
	},
	interpolation: o.interpolation,
	punctuation: /[{}()\[\];:.]/
}, rn.default.languages.svelte = rn.default.languages.markup;
var rr = t5("<b class=\"svelte-dy2xt3\"></b>"), ra = {
	hash: "svelte-dy2xt3",
	code: ":root {--gap: 24px;}\n@media (max-width: 800px) {:root {--gap: 16px;}\n}b.svelte-dy2xt3 {display:block;}b.svelte-dy2xt3 h1,\nb.svelte-dy2xt3 h2,\nb.svelte-dy2xt3 h3,\nb.svelte-dy2xt3 h4 {color:#1d1d1f;font-weight:600;margin-top:24px;margin-bottom:16px;}b.svelte-dy2xt3 h1 {font-size:26px;}b.svelte-dy2xt3 h2 {font-size:20px;}b.svelte-dy2xt3 h3 {font-size:16px;}b.svelte-dy2xt3 p {margin-bottom:16px;}b.svelte-dy2xt3 ul {margin-bottom:16px;padding-left:20px;list-style-type:disc;}b.svelte-dy2xt3 ul li {margin-bottom:6px;}b.svelte-dy2xt3 code {font-family:SFMono-Regular, SF Mono, Menlo, Monaco, Consolas, monospace;font-size:13px;padding:2px 6px;border-radius:4px;color:#0071e3;border:1px solid rgba(0,113,227,0.102);background:rgba(0,113,227,0.051);}b.svelte-dy2xt3 pre {border:1px dashed #ccc;border-radius:12px;padding:14px 16px;overflow-x:auto;margin-bottom:20px;margin-top:12px;background:rgba(255,255,255,0.451);backdrop-filter:blur(25px) saturate(180%);box-shadow:inset 0 1px 0 0 rgba(255,255,255,0.651), 0 4px 12px rgba(0,0,0,0.02);}b.svelte-dy2xt3 pre code {background:transparent;border:0;padding:0;border-radius:0;color:#1d1d1f;line-height:1.6;}b.svelte-dy2xt3 pre .token.comment,\nb.svelte-dy2xt3 pre .token.prolog,\nb.svelte-dy2xt3 pre .token.doctype,\nb.svelte-dy2xt3 pre .token.cdata {color:#86868b;font-style:italic;}b.svelte-dy2xt3 pre .token.punctuation {color:#57606a;}b.svelte-dy2xt3 pre .token.keyword {color:#ff2d55;font-weight:600;}b.svelte-dy2xt3 pre .token.string,\nb.svelte-dy2xt3 pre .token.char,\nb.svelte-dy2xt3 pre .token.attr-value {color:#116329;}b.svelte-dy2xt3 pre .token.number,\nb.svelte-dy2xt3 pre .token.boolean {color:#af52de;}b.svelte-dy2xt3 pre .token.function {color:#0071e3;}b.svelte-dy2xt3 pre .token.class-name,\nb.svelte-dy2xt3 pre .token.maybe-class-name {color:#953800;}b.svelte-dy2xt3 pre .token.tag,\nb.svelte-dy2xt3 pre .token.operator {color:#ff2d55;}b.svelte-dy2xt3 pre .token.attr-name {color:#bf5af2;}b.svelte-dy2xt3 pre .token.selector {color:#953800;}b.svelte-dy2xt3 pre .token.property {color:#1d1d1f;}b.svelte-dy2xt3 pre .token.regex {color:#a25a00;}b.svelte-dy2xt3 pre[class*='language-'],\nb.svelte-dy2xt3 code[class*='language-'],\nb.svelte-dy2xt3 :not(pre) > code[class*='language-'] {background:transparent;}b.svelte-dy2xt3 a {color:#0071e3;text-decoration:none;border-bottom:1px solid rgba(0,113,227,0.2);transition:all 0.25s ease;}b.svelte-dy2xt3 a:hover {color:#0077ed;border-bottom-color:#0077ed;}b.svelte-dy2xt3 blockquote.alert {margin:20px 0;padding:16px 20px 16px 52px;border-left:4px solid;border-radius:12px;box-sizing:border-box;position:relative;background:rgba(255,255,255,0.451);backdrop-filter:blur(25px) saturate(180%);box-shadow:inset 0 1px 0 0 rgba(255,255,255,0.651), 0 4px 12px rgba(0,0,0,0.02);border:1px solid rgba(255,255,255,0.2);}b.svelte-dy2xt3 blockquote.alert .alert-title {position:absolute;left:16px;top:16px;font-size:0;margin:0;padding:0;}b.svelte-dy2xt3 blockquote.alert .alert-title .alert-icon {display:block;width:22px;height:22px;mask-size:contain;mask-repeat:no-repeat;mask-position:center;flex-shrink:0;}b.svelte-dy2xt3 blockquote.alert p {margin:0;color:#1d1d1f;}b.svelte-dy2xt3 blockquote.alert p:not(:last-child) {margin-bottom:8px;}b.svelte-dy2xt3 blockquote.alert-note {border-left-color:#0071e3;}b.svelte-dy2xt3 blockquote.alert-note .alert-icon {mask-image:var(--noteSvg);background:#0071e3;}b.svelte-dy2xt3 blockquote.alert-tip {border-left-color:#34c759;}b.svelte-dy2xt3 blockquote.alert-tip .alert-icon {mask-image:var(--tipSvg);background:#24b24b;}b.svelte-dy2xt3 blockquote.alert-important {border-left-color:#af52de;}b.svelte-dy2xt3 blockquote.alert-important .alert-icon {mask-image:var(--importantSvg);background:#af52de;}b.svelte-dy2xt3 blockquote.alert-warning {border-left-color:#ff9500;}b.svelte-dy2xt3 blockquote.alert-warning .alert-icon {mask-image:var(--warningSvg);background:#e08200;}b.svelte-dy2xt3 blockquote.alert-caution {border-left-color:#ff3b30;}b.svelte-dy2xt3 blockquote.alert-caution .alert-icon {mask-image:var(--cautionSvg);background:#ff3b30;}\n@media (max-width: 800px) {b.svelte-dy2xt3 h1 {font-size:20px;}b.svelte-dy2xt3 h2 {font-size:17px;}b.svelte-dy2xt3 pre {padding:12px;border-radius:8px;font-size:12px;}b.svelte-dy2xt3 blockquote.alert {padding:12px 14px 12px 42px;border-radius:8px;}b.svelte-dy2xt3 blockquote.alert .alert-title {left:12px;top:12px;}b.svelte-dy2xt3 blockquote.alert .alert-title .alert-icon {width:18px;height:18px;}\n}"
};
function rl(e, t) {
	ed(t, !0), no(e, ra);
	let n = nS(t, "readme", 7), r = e0(null);
	th(() => {
		((e, t) => {
			var n;
			let r;
			if (!e || !t) return;
			e.innerHTML = "";
			let a = (n = {
				add_token: n6,
				end_token: n9,
				add_text: re,
				set_attr: rt,
				data: {
					nodes: [
						e,
						,
						,
						,
						,
					],
					index: 0
				}
			}, (r = new Uint32Array(24))[0] = 1, {
				renderer: n,
				text: "",
				pending: "",
				tokens: r,
				len: 0,
				token: 1,
				fence_end: 0,
				blockquote_idx: 0,
				hr_char: "",
				hr_chars: 0,
				fence_start: 0,
				spaces: new Uint8Array(24),
				indent: "",
				indent_len: 0,
				table_state: 0
			});
			n7(a, t), a.pending.length > 0 && n7(a, "\n"), e.querySelectorAll("pre code").forEach((e) => {
				let t = [];
				e.classList.forEach((e) => {
					e.startsWith("language-") || e.startsWith("lang-") || t.push("language-" + e);
				}), t.forEach((t) => {
					e.classList.add(t), e.parentElement && "PRE" == e.parentElement.tagName && e.parentElement.classList.add(t);
				}), rn.default.highlightElement(e);
			}), e.querySelectorAll("blockquote").forEach((e) => {
				let t = e.firstElementChild || e, n = t.innerHTML;
				if (n) {
					let r = n.match(/^(?:\[!(TIP|NOTE|WARNING|IMPORTANT|CAUTION)\]|<a>!(TIP|NOTE|WARNING|IMPORTANT|CAUTION)<\/a>)\s*(?:<br\s*\/?>)?/i);
					if (r) {
						let a = (r[1] || r[2]).toUpperCase(), l = n.slice(r[0].length).trim(), s = document.createElement("b"), i = document.createElement("i");
						"" == l ? t.remove() : t.innerHTML = l, e.classList.add("alert", "alert-" + a.toLowerCase()), i.className = "alert-icon", s.className = "alert-title", s.appendChild(i), s.appendChild(document.createTextNode(" " + a)), e.insertBefore(s, e.firstChild);
					}
				}
			});
		})(tH(r), n());
	});
	var a = rr();
	return n$(a, (e) => e2(r, e), () => tH(r)), t3(e, a), eu({
		get readme() {
			return n();
		},
		set readme($$value) {
			n($$value), eO();
		}
	});
}
nA(rl, { readme: {} }, [], [], { mode: "open" });
var rs = t5("<a target=\"_blank\" title=\"查看源码\" aria-label=\"GitHub\" class=\"svelte-1w7oxzi\"></a>"), ri = {
	hash: "svelte-1w7oxzi",
	code: "a.svelte-1w7oxzi {display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:50%;border:1px solid rgba(0,0,0,0.078);color:#1d1d1f;background:linear-gradient(135deg, rgba(255,255,255,0.4), rgba(255,255,255,0.122));backdrop-filter:blur(8px);box-shadow:inset 0 1px 1px rgba(255,255,255,0.6), 0 1px 2px rgba(0,0,0,0.039);transition:all 0.25s cubic-bezier(0.4, 0, 0.2, 1);text-decoration:none;box-sizing:border-box;}a.svelte-1w7oxzi::before {content:'';width:20px;height:20px;background-color:currentColor;mask-image:var(--githubSvg);mask-size:contain;mask-repeat:no-repeat;mask-position:center;}a.svelte-1w7oxzi:hover {color:#0071e3;border-color:rgba(0,71,227,0.2);background:linear-gradient(135deg, rgba(255,255,255,0.6), rgba(255,255,255,0.2));transform:scale(1.06) translateY(-1px);box-shadow:inset 0 1px 1px rgba(255,255,255,0.8), 0 4px 12px rgba(0,0,0,0.059), 0 1px 2px rgba(0,0,0,0.039);}a.svelte-1w7oxzi:active {transform:scale(0.96);background:linear-gradient(135deg, rgba(255,255,255,0.302), rgba(255,255,255,0.059));box-shadow:inset 0 1px 2px rgba(0,0,0,0.051);}"
};
function ro(e, t) {
	ed(t, !0), no(e, ri);
	let n = nS(t, "url", 7, "");
	var r = t8(), a = tt(r), l = (e) => {
		var t = rs();
		tg(() => nm(t, "href", n())), tZ("click", t, (e) => e.stopPropagation()), t3(e, t);
	};
	return nt(a, (e) => {
		n() && e(l);
	}), t3(e, r), eu({
		get url() {
			return n();
		},
		set url($$value = "") {
			n($$value), eO();
		}
	});
}
tQ(["click"]), nA(ro, { url: {} }, [], [], { mode: "open" });
var rc = t5("<b class=\"svelte-1cfqs8w\"> </b>"), rd = t5("<b class=\"svelte-1cfqs8w\"><h1 class=\"svelte-1cfqs8w\"> <!></h1><!></b>"), ru = {
	hash: "svelte-1cfqs8w",
	code: ":root {--gap: 24px;}\n@media (max-width: 800px) {:root {--gap: 16px;}\n}b.svelte-1cfqs8w {display:flex;align-items:center;justify-content:space-between;gap:16px;margin:0 0 var(--gap);}\n@media (max-width: 800px) {b.svelte-1cfqs8w {align-items:flex-start;}\n}\n@media (max-width: 800px) {b.svelte-1cfqs8w a {margin-right:44px;}\n}h1.svelte-1cfqs8w {display:flex;align-items:baseline;gap:12px;font-size:28px;font-weight:700;color:#1d1d1f;line-height:1.2;margin:0;}h1.svelte-1cfqs8w b:where(.svelte-1cfqs8w) {font-size:16px;font-weight:400;color:#86868b;margin-bottom:0;}\n@media (max-width: 800px) {h1.svelte-1cfqs8w {font-size:22px;}h1.svelte-1cfqs8w b:where(.svelte-1cfqs8w) {font-size:13px;}\n}"
};
function rf(e, t) {
	ed(t, !0), no(e, ru);
	let n = nS(t, "name", 7, ""), r = nS(t, "title", 7, ""), a = nS(t, "prefix", 7, "com/"), l = eW(() => "//github.com/webc-zh/webc-zh.github.io/tree/main/" + (a() + n()));
	var s = t8(), i = tt(s), o = (e) => {
		var t = rd(), a = te(t), s = te(a, !0), i = tn(s), o = (e) => {
			var t = rc(), n = te(t, !0);
			en(t), tg(() => t4(n, r())), t3(e, t);
		};
		nt(i, (e) => {
			r() && e(o);
		}), en(a), ro(tn(a), { get url() {
			return tH(l);
		} }), en(t), tg(() => t4(s, n())), t3(e, t);
	};
	return nt(i, (e) => {
		n() && e(o);
	}), t3(e, s), eu({
		get name() {
			return n();
		},
		set name($$value = "") {
			n($$value), eO();
		},
		get title() {
			return r();
		},
		set title($$value = "") {
			r($$value), eO();
		},
		get prefix() {
			return a();
		},
		set prefix($$value = "com/") {
			a($$value), eO();
		}
	});
}
nA(rf, {
	name: {},
	title: {},
	prefix: {}
}, [], [], { mode: "open" });
var rh = t5("<v-scroll><b class=\"svelte-1dvi356\"><article class=\"LG svelte-1dvi356\"><!><!></article><!></b></v-scroll>", 2), rp = {
	hash: "svelte-1dvi356",
	code: ":root {--gap: 24px;}\n@media (max-width: 800px) {:root {--gap: 16px;}\n}v-scroll.svelte-1dvi356 {flex:1;min-width:0;min-height:0;}v-scroll.svelte-1dvi356::part(scroll) {box-sizing:border-box;overflow-x:hidden;}v-scroll.svelte-1dvi356 > b:where(.svelte-1dvi356) {display:flex;flex-direction:column;gap:var(--gap);line-height:1.7;color:#333336;padding:var(--gap) 0;box-sizing:border-box;}v-scroll.svelte-1dvi356 > b:where(.svelte-1dvi356) article:where(.svelte-1dvi356) {border-radius:24px;padding:var(--gap);box-sizing:border-box;}\n@media (max-width: 800px) {v-scroll.svelte-1dvi356 > b:where(.svelte-1dvi356) {font-size:14px;}v-scroll.svelte-1dvi356 > b:where(.svelte-1dvi356) article:where(.svelte-1dvi356) {padding-top:0;border-radius:16px;}\n}"
};
function rv(e, t) {
	ed(t, !0), no(e, rp);
	let n = nS(t, "name", 7, ""), r = nS(t, "title", 7, ""), a = nS(t, "readme", 7), l = nS(t, "svgs", 23, () => []);
	var s = rh();
	nh(s, 1, "svelte-1dvi356");
	var i = te(s), o = te(i), c = te(o);
	return rf(c, {
		get name() {
			return n();
		},
		get title() {
			return r();
		}
	}), rl(tn(c), { get readme() {
		return a();
	} }), en(o), nJ(tn(o), { get svgs() {
		return l();
	} }), en(i), en(s), t3(e, s), eu({
		get name() {
			return n();
		},
		set name($$value = "") {
			n($$value), eO();
		},
		get title() {
			return r();
		},
		set title($$value = "") {
			r($$value), eO();
		},
		get readme() {
			return a();
		},
		set readme($$value) {
			a($$value), eO();
		},
		get svgs() {
			return l();
		},
		set svgs($$value = []) {
			l($$value), eO();
		}
	});
}
nA(rv, {
	name: {},
	title: {},
	readme: {},
	svgs: {}
}, [], [], { mode: "open" });
var rg = {
	jsdelivr: (e, t) => "//cdn.jsdelivr.net/npm/" + e + "@" + t,
	npmmirror: (e, t) => "//registry.npmmirror.com/" + e + "/" + t + "/files"
}, rb = "webc.site", rx = t5("<b class=\"code svelte-cb5h7f\" role=\"button\" tabindex=\"0\"><b class=\"svelte-cb5h7f\"><!></b><pre class=\"svelte-cb5h7f\"> </pre></b>"), rm = {
	hash: "svelte-cb5h7f",
	code: ":root {--gap: 24px;}\n@media (max-width: 800px) {:root {--gap: 16px;}\n}.code.svelte-cb5h7f {position:relative;display:flex;align-items:center;width:100%;cursor:pointer;background:transparent;border:none;padding:0;text-align:left;}.code.svelte-cb5h7f pre:where(.svelte-cb5h7f) {flex:1;min-width:0;margin:0;overflow-x:auto;font-family:source-code-pro, Menlo, Monaco, Consolas, monospace;font-size:12px;color:#1d1d1f;white-space:pre-wrap;word-break:break-all;}.code.svelte-cb5h7f > b:where(.svelte-cb5h7f) {display:flex;align-items:center;max-width:0;opacity:0;pointer-events:none;overflow:hidden;white-space:nowrap;transform:scale(0.9) translateX(-12px);transition:max-width 0.25s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s ease, margin-right 0.25s ease, transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);}.code.svelte-cb5h7f:hover > b:where(.svelte-cb5h7f) {max-width:90px;margin-right:8px;opacity:1;pointer-events:auto;transform:scale(1) translateX(0);}\n@media (max-width: 800px) {.code.svelte-cb5h7f pre:where(.svelte-cb5h7f) {font-size:11px;}\n}"
};
function rw(e, t) {
	ed(t, !0), no(e, rm);
	let n = nS(t, "text", 7, ""), r = e0(void 0), a = (e) => {
		e.target.closest("button") || tH(r).querySelector("button").click();
	};
	var l = rx(), s = te(l);
	nG(te(s), { get text() {
		return n();
	} }), en(s), n$(s, (e) => e2(r, e), () => tH(r));
	var i = tn(s), o = te(i, !0);
	return en(i), en(l), tg(() => t4(o, n())), tZ("click", l, a), tZ("keydown", l, (e) => {
		[13, 32].includes(e.keyCode) && a(e);
	}), t3(e, l), eu({
		get text() {
			return n();
		},
		set text($$value = "") {
			n($$value), eO();
		}
	});
}
tQ(["click", "keydown"]), nA(rw, { text: {} }, [], [], { mode: "open" });
var ry = [["Scroll", [
	"<section class=\"demo-section\">\n  <h2>水平虚拟滚动条</h2>\n  <div class=\"scroll-wrap h-wrap\">\n    <h-scroll>\n      <b></b>\n    </h-scroll>\n  </div>\n\n  <h2>垂直虚拟滚动条</h2>\n  <div class=\"scroll-wrap v-wrap\">\n    <v-scroll>\n      <b></b>\n    </v-scroll>\n  </div>\n</section>\n",
	"const cards_count = 12,\n  h_scroll_container = document.querySelector(\"h-scroll > b\"),\n  v_scroll_container = document.querySelector(\"v-scroll > b\");\n\nif (h_scroll_container) {\n  for (let i = 0; i < cards_count; ++i) {\n    const card = document.createElement(\"b\");\n    card.style.setProperty(\"--theme-hue\", (i * 45) % 360);\n    card.style.setProperty(\"--theme-hue-next\", (i * 45 + 25) % 360);\n    h_scroll_container.appendChild(card);\n  }\n}\n\nif (v_scroll_container) {\n  for (let i = 0; i < cards_count; ++i) {\n    const card = document.createElement(\"b\");\n    card.style.setProperty(\"--theme-hue\", (i * 35) % 360);\n    card.style.setProperty(\"--theme-hue-next\", (i * 35 + 15) % 360);\n    v_scroll_container.appendChild(card);\n  }\n}\n",
	".demo-section {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  width: 100%;\n  max-width: 640px;\n  margin: 0 auto;\n  padding: 24px;\n  box-sizing: border-box;\n\n  h2 {\n    font-size: 13px;\n    font-weight: 600;\n    color: #1d1d1f;\n    letter-spacing: -0.01em;\n    margin-top: 16px;\n    margin-bottom: 12px;\n    display: flex;\n    align-items: center;\n\n    &:first-of-type {\n      margin-top: 0;\n    }\n  }\n\n  .scroll-wrap {\n    width: 100%;\n    max-width: 100%;\n    display: block;\n    background: #ffffff66;\n    border: 1px solid #0000000d;\n    border-radius: 16px;\n    box-shadow: inset 0 1px 0 #ffffff99;\n    overflow: hidden;\n  }\n\n  .v-wrap {\n    height: 300px;\n    max-height: 100%;\n    margin-bottom: 24px;\n  }\n\n  .h-wrap {\n    height: 160px;\n    max-height: 100%;\n  }\n\n  v-scroll,\n  h-scroll {\n    width: 100%;\n    height: 100%;\n  }\n\n  v-scroll {\n    & > b {\n      width: 100%;\n      padding: 20px;\n      box-sizing: border-box;\n      display: flex;\n      flex-direction: column;\n      gap: 8px;\n\n      & > b {\n        height: 64px;\n        background: linear-gradient(\n          135deg,\n          hsl(var(--theme-hue), 35%, 98%) 0,\n          hsl(var(--theme-hue-next), 30%, 96%) 100%\n        );\n        border: 1px solid hsl(var(--theme-hue), 25%, 91%);\n        border-radius: 16px;\n        box-shadow: 0 2px 8px #00000003;\n        transition: all 0.2s ease;\n\n        &:hover {\n          transform: translateY(-1px);\n          box-shadow: 0 4px 12px #00000008;\n        }\n      }\n    }\n  }\n\n  h-scroll {\n    & > b {\n      padding: 20px;\n      box-sizing: border-box;\n      display: flex;\n      align-items: center;\n      height: 100%;\n      gap: 8px;\n\n      & > b {\n        width: 140px;\n        height: 100%;\n        border-radius: 16px;\n        flex-shrink: 0;\n        box-sizing: border-box;\n        box-shadow: 0 2px 8px #00000003;\n        background: linear-gradient(\n          135deg,\n          hsl(var(--theme-hue), 35%, 96%) 0,\n          hsl(var(--theme-hue-next), 30%, 93%) 100%\n        );\n        border: 1px solid hsl(var(--theme-hue), 25%, 88%);\n        transition: all 0.2s ease;\n\n        &:hover {\n          transform: translateY(-2px);\n          box-shadow: 0 4px 16px #0000000a;\n        }\n      }\n    }\n  }\n}\n"
]], ["Wait", [
	"<section class=\"demo-section\">\n  <header>独立加载 (.wait)</header>\n  <div class=\"card-container\">\n    <b class=\"wait\"></b>\n  </div>\n\n  <header>表单提交加载遮罩 (.ing)</header>\n  <div class=\"card-container\">\n    <form class=\"demo-form ing\">\n      <h3>账户登录</h3>\n      <div class=\"form-group\">\n        <label>\n          <span>用户名</span>\n          <input type=\"text\" placeholder=\"输入用户名\" required />\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span>密码</span>\n          <input type=\"password\" placeholder=\"输入密码\" required />\n        </label>\n      </div>\n      <button type=\"submit\">登录</button>\n    </form>\n  </div>\n</section>\n",
	"const form = document.querySelector(\".demo-form\");\nif (form) {\n  form.addEventListener(\"submit\", (e) => {\n    e.preventDefault();\n    form.classList.add(\"ing\");\n    setTimeout(() => {\n      form.classList.remove(\"ing\");\n    }, 2000);\n  });\n}\n",
	".demo-section {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  margin: 0 auto;\n  padding: 24px;\n  box-sizing: border-box;\n\n  header {\n    font-size: 14px;\n    font-weight: 600;\n    color: #1d1d1f;\n    margin-top: 8px;\n  }\n\n  .card-container {\n    background: #ffffff;\n    border: 1px solid #0000000a;\n    border-radius: 16px;\n    padding: 24px;\n    box-shadow:\n      0 4px 20px #00000005,\n      inset 0 1px 0 #ffffff;\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n    box-sizing: border-box;\n\n    &:first-of-type {\n      justify-content: center;\n      align-items: center;\n    }\n  }\n\n  .demo-form {\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n\n    h3 {\n      margin: 0;\n      font-size: 18px;\n      font-weight: 600;\n      color: #1d1d1f;\n    }\n\n    .form-group {\n      label {\n        display: flex;\n        flex-direction: column;\n        gap: 6px;\n        font-size: 12px;\n        font-weight: 500;\n        color: #86868b;\n\n        span {\n          font-weight: 500;\n        }\n      }\n    }\n\n    input {\n      padding: 10px 14px;\n      border-radius: 10px;\n      border: 1px solid #0000000f;\n      background: #f5f5f7;\n      font-size: 14px;\n      outline: none;\n      transition: all 0.2s ease;\n\n      &:focus {\n        border-color: #0071e3;\n        background: #ffffff;\n        box-shadow: 0 0 0 4px #0071e31a;\n      }\n    }\n\n    button {\n      margin-top: 8px;\n      padding: 12px;\n      border-radius: 10px;\n      background: #0071e3;\n      color: #ffffff;\n      font-weight: 600;\n      font-size: 14px;\n      border: none;\n      transition: all 0.2s ease;\n      cursor: pointer;\n\n      &:hover:not(:disabled) {\n        background: #0077ed;\n      }\n\n      &:active:not(:disabled) {\n        transform: scale(0.98);\n      }\n\n      &:disabled {\n        background: #e5e5ea;\n        color: #aeaeae;\n        cursor: not-allowed;\n      }\n    }\n  }\n}\n"
]]], rk = t5("<button type=\"button\"> </button>"), r_ = t5("<nav></nav>"), r$ = {
	hash: "svelte-1vwq39h",
	code: "nav.svelte-1vwq39h {position:absolute;top:100%;margin-top:6px;width:var(--width);display:flex;flex-direction:column;gap:6px;z-index:999;\n  animation: svelte-1vwq39h-scale-in 0.15s cubic-bezier(0.16, 1, 0.3, 1);}nav.left.svelte-1vwq39h {left:0;}nav.right.svelte-1vwq39h {right:0;}nav.svelte-1vwq39h button:where(.svelte-1vwq39h) {border:1px solid rgba(0,0,0,0.078);background:rgba(255,255,255,0.6);backdrop-filter:blur(20px) saturate(190%);width:100%;height:32px;padding:0 14px;border-radius:16px;display:inline-flex;align-items:center;justify-content:flex-start;font-size:12px;font-weight:500;color:#1d1d1f;cursor:pointer;box-shadow:0 4px 12px rgba(0,0,0,0.051);transition:all 0.2s cubic-bezier(0.4, 0, 0.2, 1);white-space:nowrap;box-sizing:border-box;}nav.svelte-1vwq39h button:where(.svelte-1vwq39h):hover {background:rgba(255,255,255,0.949);border-color:rgba(0,0,0,0.149);box-shadow:0 6px 16px rgba(0,0,0,0.078);transform:translateY(-1px);color:#0071e3;}nav.svelte-1vwq39h button.selected:where(.svelte-1vwq39h) {color:#0071e3;font-weight:600;background:rgba(255,255,255,0.949);border-color:rgba(0,113,227,0.4);box-shadow:0 6px 16px rgba(0,113,227,0.102);}nav.svelte-1vwq39h button.selected:where(.svelte-1vwq39h):hover {background:#fff;border-color:#0071e3;}\n@-moz-keyframes svelte-1vwq39h-scale-in {\n  0% {\n    opacity: 0;\n    transform: scale(0.96) translateY(-4px);\n    pointer-events: none;\n  }\n  99% {\n    pointer-events: none;\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n    pointer-events: auto;\n  }\n}\n@-webkit-keyframes svelte-1vwq39h-scale-in {\n  0% {\n    opacity: 0;\n    transform: scale(0.96) translateY(-4px);\n    pointer-events: none;\n  }\n  99% {\n    pointer-events: none;\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n    pointer-events: auto;\n  }\n}\n@-o-keyframes svelte-1vwq39h-scale-in {\n  0% {\n    opacity: 0;\n    transform: scale(0.96) translateY(-4px);\n    pointer-events: none;\n  }\n  99% {\n    pointer-events: none;\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n    pointer-events: auto;\n  }\n}\n@keyframes svelte-1vwq39h-scale-in {\n  0% {\n    opacity: 0;\n    transform: scale(0.96) translateY(-4px);\n    pointer-events: none;\n  }\n  99% {\n    pointer-events: none;\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n    pointer-events: auto;\n  }\n}"
};
function rq(e, t) {
	ed(t, !0), no(e, r$);
	let n = nS(t, "options", 23, () => []), r = nS(t, "value", 7), a = nS(t, "align", 7, "left"), l = nS(t, "width", 7, "100%"), s = nS(t, "onSelect", 7), i = eW(() => n().map((e) => "string" == typeof e ? {
		label: e.split(" ")[0],
		value: e
	} : e));
	var o = r_();
	return na(o, 21, () => tH(i), nn, (e, t) => {
		var n = rk(), a = te(n, !0);
		en(n), tg(() => {
			nh(n, 1, nc(r() == tH(t).value ? "selected" : ""), "svelte-1vwq39h"), t4(a, tH(t).label);
		}), tZ("click", n, (e) => s()?.(tH(t).value, e)), t3(e, n);
	}), en(o), tg(() => {
		nh(o, 1, nc(a()), "svelte-1vwq39h"), nv(o, `--width:${l() ?? ""}`);
	}), t3(e, o), eu({
		get options() {
			return n();
		},
		set options($$value = []) {
			n($$value), eO();
		},
		get value() {
			return r();
		},
		set value($$value) {
			r($$value), eO();
		},
		get align() {
			return a();
		},
		set align($$value = "left") {
			a($$value), eO();
		},
		get width() {
			return l();
		},
		set width($$value = "100%") {
			l($$value), eO();
		},
		get onSelect() {
			return s();
		},
		set onSelect($$value) {
			s($$value), eO();
		}
	});
}
tQ(["click"]), nA(rq, {
	options: {},
	value: {},
	align: {},
	width: {},
	onSelect: {}
}, [], [], { mode: "open" });
var rS = t5("<b class=\"svelte-10il9qy\"><button type=\"button\" aria-label=\"在线调试\" class=\"svelte-10il9qy\">在线调试</button><!></b>"), rj = {
	hash: "svelte-10il9qy",
	code: "b.svelte-10il9qy {position:relative;display:inline-block;}b.svelte-10il9qy > button:where(.svelte-10il9qy) {display:inline-flex;align-items:center;justify-content:center;background:transparent;color:#0071e3;font-size:12px;font-weight:500;border:none;border-bottom:1px solid currentColor;padding:2px 0;cursor:pointer;transition:all 0.2s ease;outline:none;user-select:none;}b.svelte-10il9qy > button:where(.svelte-10il9qy):hover {color:#ff4500;}b.svelte-10il9qy > button:where(.svelte-10il9qy):active {opacity:0.7;}"
};
function rE(e, t) {
	ed(t, !0), no(e, rj);
	let n = nS(t, "name", 7), r = nS(t, "urls_text", 7), a = e0(!1), l = e0(void 0), s = (e, t) => {
		let n = document.createElement("form");
		for (let [r, a] of (n.method = "POST", n.action = e, n.target = "_blank", Object.entries(t))) {
			let e = document.createElement("input");
			e.type = "hidden", e.name = r, e.value = a, n.appendChild(e);
		}
		document.body.appendChild(n), n.submit(), document.body.removeChild(n);
	}, i = (e) => {
		e2(a, !1);
		let t = (() => {
			let e = ry.find(([e]) => e == n());
			if (!e) return;
			let [t, [a, l, s]] = e, i = nP.find(([e]) => e == n()), o = i ? i[1] : "";
			return {
				html: r() + "\n" + a,
				js: l,
				css: s,
				title: n() + " - " + rb,
				description: o
			};
		})();
		t && {
			jsfiddle: () => s("https://jsfiddle.net/api/post/library/pure/", t),
			codepen: () => s("https://codepen.io/pen/define/", { data: JSON.stringify(t) })
		}[e]?.();
	};
	var o = rS();
	tK("click", d, (e) => {
		tH(a) && tH(l) && !tH(l).contains(e.target) && e2(a, !1);
	});
	var c = te(o), u = tn(c), f = (e) => {
		rq(e, {
			options: [{
				label: "JSFiddle",
				value: "jsfiddle"
			}, {
				label: "CodePen",
				value: "codepen"
			}],
			align: "right",
			width: "90px",
			onSelect: i
		});
	};
	return nt(u, (e) => {
		tH(a) && e(f);
	}), en(o), n$(o, (e) => e2(l, e), () => tH(l)), tZ("click", c, (e) => {
		e.stopPropagation(), e2(a, !tH(a));
	}), t3(e, o), eu({
		get name() {
			return n();
		},
		set name($$value) {
			n($$value), eO();
		},
		get urls_text() {
			return r();
		},
		set urls_text($$value) {
			r($$value), eO();
		}
	});
}
tQ(["click"]), nA(rE, {
	name: {},
	urls_text: {}
}, [], [], { mode: "open" });
var rA = t5("<i class=\"svelte-1wo880g\"> </i>"), rz = t5("<i></i>"), rF = t5("<b class=\"svelte-1wo880g\"><button type=\"button\"><b class=\"svelte-1wo880g\"> <!></b><!></button><!></b>"), rC = {
	hash: "svelte-1wo880g",
	code: "b.svelte-1wo880g {position:relative;display:inline-block;}b.svelte-1wo880g button:where(.svelte-1wo880g) {border:1px solid rgba(0,0,0,0.078);background:transparent;padding:0 14px;height:30px;display:inline-flex;align-items:center;font-size:12px;font-weight:300;color:#86868b;border-radius:15px;cursor:pointer;transition:all 0.2s cubic-bezier(0.4, 0, 0.2, 1);outline:none;user-select:none;box-sizing:border-box;}b.svelte-1wo880g button:where(.svelte-1wo880g) b:where(.svelte-1wo880g) {display:inline-flex;align-items:center;white-space:nowrap;}b.svelte-1wo880g button:where(.svelte-1wo880g) b:where(.svelte-1wo880g) i:where(.svelte-1wo880g) {font-style:normal;font-weight:500;color:rgba(255,255,255,0.8);margin-left:4px;}b.svelte-1wo880g button:where(.svelte-1wo880g):hover {color:#1d1d1f;border-color:rgba(0,0,0,0.161);background:rgba(0,0,0,0.02);}b.svelte-1wo880g button.active:where(.svelte-1wo880g) {background:transparent;border-color:#86868b;color:#424245;box-shadow:none;padding-right:22px;}b.svelte-1wo880g button.active:where(.svelte-1wo880g):hover {background:transparent;border-color:#86868b;}b.svelte-1wo880g button.active:where(.svelte-1wo880g) b:where(.svelte-1wo880g) i:where(.svelte-1wo880g) {color:#424245;}b.svelte-1wo880g button.active.open:where(.svelte-1wo880g) b:where(.svelte-1wo880g) i:where(.svelte-1wo880g) {color:#0071e3;}b.svelte-1wo880g button:where(.svelte-1wo880g) .arrow:where(.svelte-1wo880g) {position:absolute;right:8px;top:50%;transform:translateY(-50%);width:12px;height:12px;background-color:currentColor;mask-image:var(--downSvg);mask-size:contain;mask-repeat:no-repeat;mask-position:center;color:#86868b;pointer-events:none;transition:transform 0.25s ease, color 0.2s ease;}b.svelte-1wo880g button:where(.svelte-1wo880g) .arrow.open:where(.svelte-1wo880g) {transform:translateY(-50%) rotate(180deg);}b.svelte-1wo880g button:where(.svelte-1wo880g):hover .arrow:where(.svelte-1wo880g) {color:#1d1d1f;}"
};
function rP(e, t) {
	ed(t, !0), no(e, rC);
	let n = nS(t, "label", 7), r = nS(t, "mode", 7), a = nS(t, "active", 15), l = nS(t, "value", 15), s = nS(t, "options", 23, () => []), i = nS(t, "onChange", 7), o = e0(!1), c = e0(void 0), u = eW(() => tH(o) && a() == r()), f = (e, t) => {
		t.stopPropagation(), l(e), e2(o, !1), i()?.(e);
	};
	var h = rF();
	tK("click", d, (e) => {
		tH(o) && tH(c) && !tH(c).contains(e.target) && e2(o, !1);
	});
	var p = te(h), v = te(p), g = te(v, !0), b = tn(g), x = (e) => {
		var t = rA(), n = te(t, !0);
		en(t), tg((e) => t4(n, e), [() => l()?.split(" ")[0]]), t3(e, t);
	};
	nt(b, (e) => {
		a() == r() && e(x);
	}), en(v);
	var m = tn(v), w = (e) => {
		var t = rz();
		tg(() => nh(t, 1, `arrow ${tH(o) ? "open" : ""}`, "svelte-1wo880g")), t3(e, t);
	};
	nt(m, (e) => {
		a() == r() && e(w);
	}), en(p);
	var y = tn(p), k = (e) => {
		rq(e, {
			get options() {
				return s();
			},
			get value() {
				return l();
			},
			onSelect: f
		});
	};
	return nt(y, (e) => {
		tH(u) && e(k);
	}), en(h), n$(h, (e) => e2(c, e), () => tH(c)), tg(() => {
		nh(p, 1, (a() == r() ? "active " : "") + (tH(u) ? "open" : ""), "svelte-1wo880g"), t4(g, n());
	}), tZ("click", p, (e) => {
		e.stopPropagation(), a() != r() ? (a(r()), e2(o, !0), i()?.(l())) : e2(o, !tH(o));
	}), t3(e, h), eu({
		get label() {
			return n();
		},
		set label($$value) {
			n($$value), eO();
		},
		get mode() {
			return r();
		},
		set mode($$value) {
			r($$value), eO();
		},
		get active() {
			return a();
		},
		set active($$value) {
			a($$value), eO();
		},
		get value() {
			return l();
		},
		set value($$value) {
			l($$value), eO();
		},
		get options() {
			return s();
		},
		set options($$value = []) {
			s($$value), eO();
		},
		get onChange() {
			return i();
		},
		set onChange($$value) {
			i($$value), eO();
		}
	});
}
tQ(["click"]), nA(rP, {
	label: {},
	mode: {},
	active: {},
	value: {},
	options: {},
	onChange: {}
}, [], [], { mode: "open" });
var rL = t5("<nav class=\"svelte-1hz2iwf\"><!><!></nav>"), rO = {
	hash: "svelte-1hz2iwf",
	code: "nav.svelte-1hz2iwf {display:inline-flex;align-items:center;margin-left:-4px;gap:8px;}"
};
function rT(e, t) {
	ed(t, !0), no(e, rO);
	let n = nS(t, "active", 15), r = nS(t, "cdn", 15), a = nS(t, "cdn_keys", 23, () => []), l = nS(t, "runner", 15), s = nS(t, "runner_keys", 23, () => []), i = nS(t, "onChange", 7);
	var o = rL(), c = te(o);
	return rP(c, {
		label: "直接使用",
		mode: 0,
		get options() {
			return a();
		},
		onChange: (e) => i()?.(0, e),
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
	}), rP(tn(c), {
		label: "打包构建",
		mode: 1,
		get options() {
			return s();
		},
		onChange: (e) => i()?.(1, e),
		get active() {
			return n();
		},
		set active($$value) {
			n($$value);
		},
		get value() {
			return l();
		},
		set value($$value) {
			l($$value);
		}
	}), en(o), t3(e, o), eu({
		get active() {
			return n();
		},
		set active($$value) {
			n($$value), eO();
		},
		get cdn() {
			return r();
		},
		set cdn($$value) {
			r($$value), eO();
		},
		get cdn_keys() {
			return a();
		},
		set cdn_keys($$value = []) {
			a($$value), eO();
		},
		get runner() {
			return l();
		},
		set runner($$value) {
			l($$value), eO();
		},
		get runner_keys() {
			return s();
		},
		set runner_keys($$value = []) {
			s($$value), eO();
		},
		get onChange() {
			return i();
		},
		set onChange($$value) {
			i($$value), eO();
		}
	});
}
nA(rT, {
	active: {},
	cdn: {},
	cdn_keys: {},
	runner: {},
	runner_keys: {},
	onChange: {}
}, [], [], { mode: "open" });
var rM = t5("<article class=\"LG svelte-gucowb\"><h2 class=\"svelte-gucowb\"><b class=\"svelte-gucowb\"><!></b><!></h2><!></article>"), rD = {
	hash: "svelte-gucowb",
	code: ":root {--gap: 24px;}\n@media (max-width: 800px) {:root {--gap: 16px;}\n}article.svelte-gucowb {position:relative;z-index:2;border-radius:24px;padding:var(--gap);box-sizing:border-box;line-height:normal;width:100%;}article.svelte-gucowb h2:where(.svelte-gucowb) {font-size:15px;font-weight:600;color:#1d1d1f;margin:0 0 16px;display:flex;align-items:center;justify-content:space-between;}article.svelte-gucowb h2:where(.svelte-gucowb) > b:where(.svelte-gucowb) {display:flex;align-items:center;gap:12px;}\n@media (max-width: 800px) {article.svelte-gucowb {border-radius:16px;padding:0 var(--gap) var(--gap);}\n}"
};
function rR(e, t) {
	ed(t, !0), no(e, rD);
	let n = nS(t, "name", 7), r = nS(t, "files", 23, () => []), a = Object.keys(rg), l = [
		"bunx",
		"npx",
		"pnpm dlx",
		"yarn dlx"
	], s = "import_mode", i = "cli_runner", o = e0(e3(a[0])), c = e0(e3(l[0])), d = e0(0), u = (e, t) => {
		localStorage.setItem(s, e), 0 == e ? localStorage.setItem("cdn", t) : 1 == e && localStorage.setItem(i, t);
	};
	nz(() => {
		let e = localStorage.getItem(s);
		if (null != e) {
			let t = Number(e);
			[0, 1].includes(t) && e2(d, t, !0);
		}
		let t = localStorage.getItem("cdn");
		t && a.includes(t) && e2(o, t, !0);
		let n = localStorage.getItem(i);
		n && l.includes(n) && e2(c, n, !0);
	});
	let f = eW(() => r().map((e) => {
		let t = rg[tH(o)](rb, "0.1.25") + "/" + e;
		return e.endsWith(".css") ? "<link href=\"" + t + "\" rel=\"stylesheet\">" : e.endsWith(".js") ? "<script type=\"module\">import \"" + t + "\"<\/script>" : t;
	}).join("\n")), h = eW(() => tH(c) + " webc.add@latest " + n());
	var p = t8(), v = tt(p), g = (e) => {
		var t = rM(), r = te(t), s = te(r);
		rT(te(s), {
			get cdn_keys() {
				return a;
			},
			get runner_keys() {
				return l;
			},
			onChange: u,
			get active() {
				return tH(d);
			},
			set active($$value) {
				e2(d, $$value, !0);
			},
			get cdn() {
				return tH(o);
			},
			set cdn($$value) {
				e2(o, $$value, !0);
			},
			get runner() {
				return tH(c);
			},
			set runner($$value) {
				e2(c, $$value, !0);
			}
		}), en(s), rE(tn(s), {
			get name() {
				return n();
			},
			get urls_text() {
				return tH(f);
			}
		}), en(r);
		var i = tn(r);
		{
			let e = eW(() => 0 == tH(d) ? tH(f) : tH(h));
			rw(i, { get text() {
				return tH(e);
			} });
		}
		en(t), t3(e, t);
	};
	return nt(v, (e) => {
		r().length > 0 && e(g);
	}), t3(e, p), eu({
		get name() {
			return n();
		},
		set name($$value) {
			n($$value), eO();
		},
		get files() {
			return r();
		},
		set files($$value = []) {
			r($$value), eO();
		}
	});
}
nA(rR, {
	name: {},
	files: {}
}, [], [], { mode: "open" });
var rN = t5("<!><article class=\"LG svelte-kymqdk\"><b class=\"svelte-kymqdk\"><!></b></article>", 1), rB = t5("<article class=\"LG svelte-kymqdk\"><b class=\"svelte-kymqdk\"></b></article>"), rI = t5("<v-scroll><b class=\"svelte-kymqdk\"><!></b></v-scroll>", 2), rU = {
	hash: "svelte-kymqdk",
	code: ":root {--gap: 24px;}\n@media (max-width: 800px) {:root {--gap: 16px;}\n}v-scroll.svelte-kymqdk {flex:1;min-width:0;min-height:0;}v-scroll.svelte-kymqdk::part(scroll) {box-sizing:border-box;overflow-x:hidden;}v-scroll.svelte-kymqdk > b:where(.svelte-kymqdk) {display:flex;flex-direction:column;min-height:100%;gap:var(--gap);padding:var(--gap) 0;box-sizing:border-box;}article.svelte-kymqdk {flex:1;display:flex;flex-direction:column;overflow:hidden;border-radius:24px;flex:none;}article.svelte-kymqdk > b:where(.svelte-kymqdk) {margin:auto;padding:32px;box-sizing:border-box;}\n@media (max-width: 800px) {article.svelte-kymqdk {border-radius:16px;}article.svelte-kymqdk > b:where(.svelte-kymqdk) {padding:20px 16px;}\n}"
};
function rH(e, t) {
	ed(t, !0), no(e, rU);
	let n = nS(t, "name", 7), r = nS(t, "active_demo", 7), a = nS(t, "files", 23, () => []);
	var l = rI();
	nh(l, 1, "svelte-kymqdk");
	var s = te(l), i = te(s), o = (e) => {
		let t = eW(r);
		var l, s, i, o, d = rN(), u = tt(d);
		rR(u, {
			get name() {
				return n();
			},
			get files() {
				return a();
			}
		});
		var f = tn(u), h = te(f);
		l = te(h), s = (e, t) => {
			t(e, {});
		}, Q && (i = c, et()), o = new ne(l), tb(() => {
			var e = tH(t) ?? null;
			if (Q && "[" === el(i) != (null !== e)) {
				var n = ea();
				ee(n), o.anchor = n, Q = !1, o.ensure(e, e && ((t) => s(t, e))), Q = !0;
				return;
			}
			o.ensure(e, e && ((t) => s(t, e)));
		}, 65536), en(h), en(f), t3(e, d);
	}, d = (e) => {
		t3(e, rB());
	};
	return nt(i, (e) => {
		r() ? e(o) : e(d, -1);
	}), en(s), en(l), t3(e, l), eu({
		get name() {
			return n();
		},
		set name($$value) {
			n($$value), eO();
		},
		get active_demo() {
			return r();
		},
		set active_demo($$value) {
			r($$value), eO();
		},
		get files() {
			return a();
		},
		set files($$value = []) {
			a($$value), eO();
		}
	});
}
nA(rH, {
	name: {},
	active_demo: {},
	files: {}
}, [], [], { mode: "open" });
var rW = t5("<b class=\"wait svelte-16jlhhk\"></b>"), rG = t5("<!><b class=\"right svelte-16jlhhk\"><!></b>", 1), rY = t5("<b class=\"svelte-16jlhhk\"><!></b>"), rV = {
	hash: "svelte-16jlhhk",
	code: ":root {--gap: 24px;}\n@media (max-width: 800px) {:root {--gap: 16px;}\n}b.svelte-16jlhhk {flex:1;display:flex;gap:var(--gap);overflow:hidden;}b.svelte-16jlhhk .right:where(.svelte-16jlhhk) {display:flex;flex-direction:column;flex:1;min-width:0;min-height:0;gap:var(--gap);padding:0;box-sizing:border-box;}\n@media (max-width: 800px) {b.svelte-16jlhhk .right:where(.svelte-16jlhhk) {border-top:2px dashed #ccc;}\n}b.svelte-16jlhhk .wait:where(.svelte-16jlhhk) {margin:auto;}\n@media (max-width: 800px) {b.svelte-16jlhhk {flex-direction:column;gap:0;}b.svelte-16jlhhk .right:where(.svelte-16jlhhk) {gap:var(--gap);padding:0;}\n}"
};
function rX(e, t) {
	ed(t, !0), no(e, rV);
	let n = nS(t, "info", 7), r = nS(t, "readme", 7), a = nS(t, "svgs", 23, () => []), l = nS(t, "files", 23, () => []), s = nS(t, "active_demo", 7, null), i = nS(t, "loading", 7, !1);
	var o = rY(), c = te(o), d = (e) => {
		t3(e, rW());
	}, u = (e) => {
		var t = rG(), i = tt(t);
		rv(i, {
			get name() {
				return n()[0];
			},
			get title() {
				return n()[1];
			},
			get readme() {
				return r();
			},
			get svgs() {
				return a();
			}
		});
		var o = tn(i);
		rH(te(o), {
			get name() {
				return n()[0];
			},
			get active_demo() {
				return s();
			},
			get files() {
				return l();
			}
		}), en(o), t3(e, t);
	};
	return nt(c, (e) => {
		i() ? e(d) : e(u, -1);
	}), en(o), t3(e, o), eu({
		get info() {
			return n();
		},
		set info($$value) {
			n($$value), eO();
		},
		get readme() {
			return r();
		},
		set readme($$value) {
			r($$value), eO();
		},
		get svgs() {
			return a();
		},
		set svgs($$value = []) {
			a($$value), eO();
		},
		get files() {
			return l();
		},
		set files($$value = []) {
			l($$value), eO();
		},
		get active_demo() {
			return s();
		},
		set active_demo($$value = null) {
			s($$value), eO();
		},
		get loading() {
			return i();
		},
		set loading($$value = !1) {
			i($$value), eO();
		}
	});
}
nA(rX, {
	info: {},
	readme: {},
	svgs: {},
	files: {},
	active_demo: {},
	loading: {}
}, [], [], { mode: "open" });
var rJ = t5("<v-scroll><b class=\"svelte-1odvyyj\"><article class=\"svelte-1odvyyj\"><b class=\"svelte-1odvyyj\"><h1 class=\"svelte-1odvyyj\"> </h1><!></b><!></article></b></v-scroll>", 2), rK = {
	hash: "svelte-1odvyyj",
	code: ":root {--gap: 24px;}\n@media (max-width: 800px) {:root {--gap: 16px;}\n}v-scroll.svelte-1odvyyj {flex:1;min-width:0;min-height:0;}v-scroll.svelte-1odvyyj::part(scroll) {box-sizing:border-box;overflow-x:hidden;}v-scroll.svelte-1odvyyj > b:where(.svelte-1odvyyj) {display:block;line-height:1.7;color:#333336;padding:var(--gap) 0;box-sizing:border-box;}v-scroll.svelte-1odvyyj > b:where(.svelte-1odvyyj) article:where(.svelte-1odvyyj) {padding:0 var(--gap) var(--gap);box-sizing:border-box;max-width:800px;margin:0 auto;}v-scroll.svelte-1odvyyj > b:where(.svelte-1odvyyj) article:where(.svelte-1odvyyj) > b:where(.svelte-1odvyyj) {display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:var(--gap);}\n@media (max-width: 800px) {v-scroll.svelte-1odvyyj > b:where(.svelte-1odvyyj) article:where(.svelte-1odvyyj) > b:where(.svelte-1odvyyj) {align-items:flex-start;}\n}\n@media (max-width: 800px) {v-scroll.svelte-1odvyyj > b:where(.svelte-1odvyyj) article:where(.svelte-1odvyyj) > b:where(.svelte-1odvyyj) a {margin-right:44px;}\n}v-scroll.svelte-1odvyyj > b:where(.svelte-1odvyyj) article:where(.svelte-1odvyyj) > b:where(.svelte-1odvyyj) h1:where(.svelte-1odvyyj) {font-size:28px;font-weight:700;color:#1d1d1f;line-height:1.2;margin:0;}\n@media (max-width: 800px) {v-scroll.svelte-1odvyyj > b:where(.svelte-1odvyyj) article:where(.svelte-1odvyyj) > b:where(.svelte-1odvyyj) h1:where(.svelte-1odvyyj) {font-size:22px;}\n}\n@media (max-width: 800px) {v-scroll.svelte-1odvyyj > b:where(.svelte-1odvyyj) {font-size:14px;}v-scroll.svelte-1odvyyj > b:where(.svelte-1odvyyj) article:where(.svelte-1odvyyj) {padding:0 20px var(--gap);}\n}"
};
function rZ(e, t) {
	ed(t, !0), no(e, rK);
	let n = nS(t, "name", 7), r = nS(t, "readme", 7), a = eW(() => "WebC" == n() ? "//github.com/webc-zh/webc-zh.github.io" : "//github.com/webc-zh/webc-zh.github.io/tree/main/com/" + n());
	var l = rJ();
	nh(l, 1, "svelte-1odvyyj");
	var s = te(l), i = te(s), o = te(i), c = te(o), d = te(c, !0);
	return en(c), ro(tn(c), { get url() {
		return tH(a);
	} }), en(o), rl(tn(o), { get readme() {
		return r();
	} }), en(i), en(s), en(l), tg(() => t4(d, n())), t3(e, l), eu({
		get name() {
			return n();
		},
		set name($$value) {
			n($$value), eO();
		},
		get readme() {
			return r();
		},
		set readme($$value) {
			r($$value), eO();
		}
	});
}
nA(rZ, {
	name: {},
	readme: {}
}, [], [], { mode: "open" }), eo = !0;
var rQ = [
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
], r0 = t5("<details class=\"svelte-w0c70t\"><summary class=\"svelte-w0c70t\"><b class=\"svelte-w0c70t\"><h2 class=\"svelte-w0c70t\"> </h2><b class=\"svelte-w0c70t\"> </b></b><b class=\"svelte-w0c70t\"><i class=\"icon-arrow svelte-w0c70t\"></i></b></summary><b class=\"svelte-w0c70t\"><!><b class=\"code-header svelte-w0c70t\">源代码<!></b><b><!></b></b></details>"), r1 = t5("<v-scroll><b class=\"svelte-w0c70t\"><article class=\"svelte-w0c70t\"><!><b class=\"util-list svelte-w0c70t\"></b></article></b></v-scroll>", 2), r2 = {
	hash: "svelte-w0c70t",
	code: ":root {--gap: 24px;}\n@media (max-width: 800px) {:root {--gap: 16px;}\n}v-scroll.svelte-w0c70t {flex:1;min-width:0;min-height:0;}v-scroll.svelte-w0c70t::part(scroll) {box-sizing:border-box;overflow-x:hidden;}v-scroll.svelte-w0c70t > b:where(.svelte-w0c70t) {display:block;line-height:1.7;color:#333336;padding:var(--gap) 0;box-sizing:border-box;}v-scroll.svelte-w0c70t > b:where(.svelte-w0c70t) article:where(.svelte-w0c70t) {padding:0 var(--gap) var(--gap);box-sizing:border-box;max-width:800px;margin:0 auto;}v-scroll.svelte-w0c70t > b:where(.svelte-w0c70t) article:where(.svelte-w0c70t) .util-list:where(.svelte-w0c70t) {display:flex;flex-direction:column;gap:var(--gap);margin-top:var(--gap);}v-scroll.svelte-w0c70t > b:where(.svelte-w0c70t) article:where(.svelte-w0c70t) .util-list:where(.svelte-w0c70t) details:where(.svelte-w0c70t) {display:flex;flex-direction:column;border-radius:16px;border:1px solid rgba(0,0,0,0.039);background:rgba(255,255,255,0.333);backdrop-filter:blur(20px);box-shadow:0 4px 12px rgba(0,0,0,0.012), inset 0 1px 1px rgba(255,255,255,0.702);overflow:hidden;transition:all 0.25s ease;}v-scroll.svelte-w0c70t > b:where(.svelte-w0c70t) article:where(.svelte-w0c70t) .util-list:where(.svelte-w0c70t) details:where(.svelte-w0c70t):hover {background:rgba(255,255,255,0.502);border-color:rgba(0,0,0,0.063);box-shadow:0 8px 24px rgba(0,0,0,0.031);}v-scroll.svelte-w0c70t > b:where(.svelte-w0c70t) article:where(.svelte-w0c70t) .util-list:where(.svelte-w0c70t) details[open]:where(.svelte-w0c70t) .icon-arrow:where(.svelte-w0c70t) {transform:rotate(180deg);filter:opacity(80%);}v-scroll.svelte-w0c70t > b:where(.svelte-w0c70t) article:where(.svelte-w0c70t) .util-list:where(.svelte-w0c70t) details:where(.svelte-w0c70t) summary:where(.svelte-w0c70t) {display:flex;align-items:center;justify-content:space-between;padding:var(--gap);background:rgba(0,0,0,0.008);gap:var(--gap);cursor:pointer;user-select:none;outline:none;list-style:none;transition:background-color 0.25s ease;}v-scroll.svelte-w0c70t > b:where(.svelte-w0c70t) article:where(.svelte-w0c70t) .util-list:where(.svelte-w0c70t) details:where(.svelte-w0c70t) summary:where(.svelte-w0c70t)::-webkit-details-marker {display:none;}v-scroll.svelte-w0c70t > b:where(.svelte-w0c70t) article:where(.svelte-w0c70t) .util-list:where(.svelte-w0c70t) details:where(.svelte-w0c70t) summary:where(.svelte-w0c70t):hover {background:rgba(0,0,0,0.024);}v-scroll.svelte-w0c70t > b:where(.svelte-w0c70t) article:where(.svelte-w0c70t) .util-list:where(.svelte-w0c70t) details:where(.svelte-w0c70t) summary:where(.svelte-w0c70t) > b:where(.svelte-w0c70t):first-child {display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;}v-scroll.svelte-w0c70t > b:where(.svelte-w0c70t) article:where(.svelte-w0c70t) .util-list:where(.svelte-w0c70t) details:where(.svelte-w0c70t) summary:where(.svelte-w0c70t) > b:where(.svelte-w0c70t):first-child h2:where(.svelte-w0c70t) {font-size:18px;font-weight:600;color:#1d1d1f;margin:0;}v-scroll.svelte-w0c70t > b:where(.svelte-w0c70t) article:where(.svelte-w0c70t) .util-list:where(.svelte-w0c70t) details:where(.svelte-w0c70t) summary:where(.svelte-w0c70t) > b:where(.svelte-w0c70t):first-child b:where(.svelte-w0c70t) {font-size:13px;color:#86868b;font-weight:400;}v-scroll.svelte-w0c70t > b:where(.svelte-w0c70t) article:where(.svelte-w0c70t) .util-list:where(.svelte-w0c70t) details:where(.svelte-w0c70t) summary:where(.svelte-w0c70t) > b:where(.svelte-w0c70t):last-child {display:flex;align-items:center;gap:16px;flex-shrink:0;}v-scroll.svelte-w0c70t > b:where(.svelte-w0c70t) article:where(.svelte-w0c70t) .util-list:where(.svelte-w0c70t) details:where(.svelte-w0c70t) summary:where(.svelte-w0c70t) > b:where(.svelte-w0c70t):last-child .icon-arrow:where(.svelte-w0c70t) {width:16px;height:16px;background:var(--downSvg) no-repeat center/contain;filter:opacity(40%);transition:transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), filter 0.25s ease;}v-scroll.svelte-w0c70t > b:where(.svelte-w0c70t) article:where(.svelte-w0c70t) .util-list:where(.svelte-w0c70t) details:where(.svelte-w0c70t) > b:where(.svelte-w0c70t) {display:block;padding:var(--gap);border-top:1px solid rgba(0,0,0,0.02);background:rgba(255,255,255,0.133);\n  animation: svelte-w0c70t-fadeIn 0.25s ease;}v-scroll.svelte-w0c70t > b:where(.svelte-w0c70t) article:where(.svelte-w0c70t) .util-list:where(.svelte-w0c70t) details:where(.svelte-w0c70t) > b:where(.svelte-w0c70t) .code-header:where(.svelte-w0c70t) {display:flex;align-items:center;gap:6px;font-size:14px;font-weight:600;color:#1d1d1f;margin-top:var(--gap);margin-bottom:8px;}v-scroll.svelte-w0c70t > b:where(.svelte-w0c70t) article:where(.svelte-w0c70t) .util-list:where(.svelte-w0c70t) details:where(.svelte-w0c70t) > b:where(.svelte-w0c70t) .code-header:where(.svelte-w0c70t) a {width:14px;height:14px;border:none;background:none;backdrop-filter:none;box-shadow:none;color:#86868b;padding:0;transition:color 0.25s ease;}v-scroll.svelte-w0c70t > b:where(.svelte-w0c70t) article:where(.svelte-w0c70t) .util-list:where(.svelte-w0c70t) details:where(.svelte-w0c70t) > b:where(.svelte-w0c70t) .code-header:where(.svelte-w0c70t) a::before {width:14px;height:14px;}v-scroll.svelte-w0c70t > b:where(.svelte-w0c70t) article:where(.svelte-w0c70t) .util-list:where(.svelte-w0c70t) details:where(.svelte-w0c70t) > b:where(.svelte-w0c70t) .code-header:where(.svelte-w0c70t) a:hover {color:#0071e3;background:none;transform:none;box-shadow:none;}v-scroll.svelte-w0c70t > b:where(.svelte-w0c70t) article:where(.svelte-w0c70t) .util-list:where(.svelte-w0c70t) details:where(.svelte-w0c70t) > b:where(.svelte-w0c70t) pre {margin-top:0;margin-bottom:0;}\n@media (max-width: 800px) {v-scroll.svelte-w0c70t > b:where(.svelte-w0c70t) {font-size:14px;}v-scroll.svelte-w0c70t > b:where(.svelte-w0c70t) article:where(.svelte-w0c70t) {padding:0 20px var(--gap);}\n}\n@-moz-keyframes svelte-w0c70t-fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@-webkit-keyframes svelte-w0c70t-fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@-o-keyframes svelte-w0c70t-fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes svelte-w0c70t-fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}"
};
function r5(e, t) {
	ed(t, !1), no(e, r2);
	(function(e = !1) {
		let t = ec, n = t.l.u;
		if (!n) return;
		let r = () => (function(e) {
			if (!("object" != typeof e || !e || e instanceof EventTarget)) {
				if (R in e) tG(e);
				else if (!Array.isArray(e)) for (let t in e) {
					let n = e[t];
					"object" == typeof n && n && R in n && tG(n);
				}
			}
		})(t.s);
		if (e) {
			let e = 0, n = {}, a = eU(() => {
				let r = !1, a = t.s;
				for (let e in a) a[e] !== n[e] && (n[e] = a[e], r = !0);
				return r && e++, e;
			});
			r = () => tH(a);
		}
		n.b.length && (tc("$effect.pre"), td(1048584, () => {
			nq(t, r), T(n.b);
		})), th(() => {
			let e = tW(() => n.m.map(O));
			return () => {
				for (let t of e) "function" == typeof t && t();
			};
		}), n.a.length && th(() => {
			nq(t, r), T(n.a);
		});
	})();
	var n = r1();
	nh(n, 1, "svelte-w0c70t");
	var r = te(n), a = te(r), l = te(a);
	rf(l, {
		get name() {
			return "x";
		},
		get title() {
			return "webc.site 的基础依赖库";
		},
		prefix: !0
	});
	var s = tn(l);
	na(s, 5, () => rQ, nn, (e, t) => {
		var n = eW(() => D(tH(t), 4));
		let r = () => tH(n)[0], a = () => tH(n)[2];
		var l = r0(), s = te(l), i = te(s), o = te(i), c = te(o, !0);
		en(o);
		var d = tn(o), u = te(d, !0);
		en(d), en(i), er(), en(s);
		var f = tn(s), h = te(f), p = (e) => {
			rl(e, { get readme() {
				return a();
			} });
		};
		nt(h, (e) => {
			a() && e(p);
		});
		var v = tn(h), g = tn(te(v));
		{
			let e = eG(() => "//github.com/webc-zh/webc-zh.github.io/tree/main/x/" + r() + ".js");
			ro(g, { get url() {
				return tH(e);
			} });
		}
		en(v);
		var b = tn(v);
		rl(te(b), { get readme() {
			return `\`\`\`javascript
${tH(n)[3] ?? ""}
\`\`\``;
		} }), en(b), en(f), en(l), tg(() => {
			t4(c, r()), t4(u, tH(n)[1]);
		}), t3(e, l);
	}), en(s), en(a), en(r), en(n), t3(e, n), eu();
}
nA(r5, {}, [], [], { mode: "open" });
var r8 = t5("<button class=\"menu-toggle svelte-d2ss8n\" aria-label=\"菜单\"><b class=\"svelte-d2ss8n\"></b><b class=\"svelte-d2ss8n\"></b><b class=\"svelte-d2ss8n\"></b></button>"), r3 = t5("<button class=\"overlay svelte-d2ss8n\" aria-label=\"关闭\"></button>"), r4 = t5("<article class=\"LG svelte-d2ss8n\"><h2>请选择一个组件查看文档</h2></article>"), r7 = t5("<main class=\"svelte-d2ss8n\"><!><!><section class=\"svelte-d2ss8n\"><!></section><!></main>"), r6 = {
	hash: "svelte-d2ss8n",
	code: ":root {--gap: 24px;}\n@media (max-width: 800px) {:root {--gap: 16px;}\n}main.svelte-d2ss8n {display:flex;height:100dvh;width:100vw;background:var(--bgSvg) no-repeat center/cover;color:#1d1d1f;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;overflow:hidden;padding-left:var(--gap);gap:var(--gap);box-sizing:border-box;position:relative;}\n@media (max-width: 800px) {main.svelte-d2ss8n {padding:0;}\n}.menu-toggle.svelte-d2ss8n {display:none;}\n@media (max-width: 800px) {.menu-toggle.svelte-d2ss8n {display:inline-flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;position:absolute;top:var(--gap);right:20px;z-index:102;width:32px;height:32px;border-radius:50%;border:1px solid rgba(0,0,0,0.078);color:#1d1d1f;background:linear-gradient(135deg, rgba(255,255,255,0.4), rgba(255,255,255,0.122));backdrop-filter:blur(8px);box-shadow:inset 0 1px 1px rgba(255,255,255,0.6), 0 1px 2px rgba(0,0,0,0.039);transition:all 0.25s cubic-bezier(0.4, 0, 0.2, 1);cursor:pointer;padding:0;}.menu-toggle.svelte-d2ss8n:hover {color:#0071e3;border-color:rgba(0,71,227,0.2);background:linear-gradient(135deg, rgba(255,255,255,0.6), rgba(255,255,255,0.2));transform:scale(1.06) translateY(-1px);box-shadow:inset 0 1px 1px rgba(255,255,255,0.8), 0 4px 12px rgba(0,0,0,0.059), 0 1px 2px rgba(0,0,0,0.039);}.menu-toggle.svelte-d2ss8n:hover > b:where(.svelte-d2ss8n) {background:currentColor;}.menu-toggle.svelte-d2ss8n:active {transform:scale(0.96);background:linear-gradient(135deg, rgba(255,255,255,0.302), rgba(255,255,255,0.059));box-shadow:inset 0 1px 2px rgba(0,0,0,0.051);}.menu-toggle.svelte-d2ss8n > b:where(.svelte-d2ss8n) {width:14px;height:2px;background:currentColor;border-radius:1px;transition:all 0.3s ease;}\n}.overlay.svelte-d2ss8n {display:none;}\n@media (max-width: 800px) {.overlay.svelte-d2ss8n {display:block;position:fixed;inset:0;z-index:99;background:rgba(0,0,0,0.2);backdrop-filter:blur(4px);\n    animation: svelte-d2ss8n-fadeIn 0.25s ease;}\n}section.svelte-d2ss8n {flex:1;display:flex;flex-direction:column;overflow:hidden;}section.svelte-d2ss8n > article:where(.svelte-d2ss8n) {flex:1;display:flex;align-items:center;justify-content:center;color:#86868b;border-radius:24px;}\n@media (max-width: 800px) {section.svelte-d2ss8n {padding:0;}section.svelte-d2ss8n > article:where(.svelte-d2ss8n) {border-radius:16px;}\n}\n@-moz-keyframes svelte-d2ss8n-fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes svelte-d2ss8n-fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-o-keyframes svelte-d2ss8n-fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes svelte-d2ss8n-fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}"
};
function r9(e, t) {
	ed(t, !0), no(e, r6);
	let n = e0(-1), r = e0(""), l = e0(null), s = e0([]), i = e0([]), o = e0(!1), c = e0(!1), d = e0(""), u = e0(""), f = eW(() => nP[tH(n)]), h = () => {
		e2(o, !tH(o));
	}, p = async () => {
		if (e2(n, -2), e2(o, !1), !tH(u)) {
			var e;
			e2(c, !0), e2(d, (e = D((await nC(() => import("./readme-Cv72Sh89.js"), [], import.meta.url)).default, 2))[0], !0), e2(u, e[1], !0), e2(c, !1);
		}
		e2(r, tH(u), !0), e2(s, []), e2(i, []), e2(l, null);
	}, v = async (e) => {
		e2(n, e, !0), e2(o, !1);
		let t = nP[e];
		if (t) {
			e2(c, !0);
			let [e, n, a] = t, [o, d, u, f] = (await a()).default;
			e2(r, o, !0), e2(s, u || []), e2(i, f || []), d ? e2(l, (await d()).default) : e2(l, null), e2(c, !1);
		} else e2(r, ""), e2(l, null), e2(s, []), e2(i, []);
	};
	nz(() => {
		var e;
		let t, c;
		return e = (e) => {
			if (!e) return void p();
			let t = nP.findIndex(([t]) => t.toLowerCase() == e.toLowerCase());
			-1 == t ? "x" == e.toLowerCase() ? (e2(n, -3), e2(o, !1), e2(r, ""), e2(s, []), e2(i, []), e2(l, null)) : p() : v(t);
		}, c = a((n, r) => {
			t = setTimeout(() => {
				e(n);
			});
		}), () => {
			c(), clearTimeout(t);
		};
	});
	var g = r7(), b = te(g), x = (e) => {
		var t = r8();
		tZ("click", t, h), t3(e, t);
	};
	nt(b, (e) => {
		tH(o) || e(x);
	});
	var m = tn(b), w = (e) => {
		var t = r3();
		tZ("click", t, h), t3(e, t);
	};
	nt(m, (e) => {
		tH(o) && e(w);
	});
	var y = tn(m), k = te(y), _ = (e) => {
		rZ(e, {
			get name() {
				return tH(d);
			},
			get readme() {
				return tH(u);
			}
		});
	}, $ = (e) => {
		r5(e, {});
	}, q = (e) => {
		rX(e, {
			get info() {
				return tH(f);
			},
			get readme() {
				return tH(r);
			},
			get svgs() {
				return tH(s);
			},
			get files() {
				return tH(i);
			},
			get active_demo() {
				return tH(l);
			},
			get loading() {
				return tH(c);
			}
		});
	}, S = (e) => {
		t3(e, r4());
	};
	nt(k, (e) => {
		-2 == tH(n) ? e(_) : -3 == tH(n) ? e($, 1) : tH(f) ? e(q, 2) : e(S, -1);
	}), en(y);
	var j = tn(y);
	{
		let e = eW(() => tH(o) ? "show" : "");
		nU(j, {
			get class() {
				return tH(e);
			},
			get active_index() {
				return tH(n);
			},
			set active_index($$value) {
				e2(n, $$value, !0);
			},
			get aside_open() {
				return tH(o);
			},
			set aside_open($$value) {
				e2(o, $$value, !0);
			}
		});
	}
	en(g), t3(e, g), eu();
}
tQ(["click"]), nA(r9, {}, [], [], { mode: "open" }), t6(r9, { target: r });
export { no as a, t3 as c, tn as d, en as f, nh as i, t5 as l, nA as n, na as o, nv as r, nn as s, nC as t, te as u };
