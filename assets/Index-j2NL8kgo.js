let e, t, n, s;
import "./init-1lqV4cF8.js";
import { B as a, delayRoute as i, goto as l, nowUrl as o } from "x";
var c, d, u, f, h, p, v, g, b, m, x, w = Object.create, k = Object.defineProperty, y = Object.getOwnPropertyDescriptor, _ = Object.getOwnPropertyNames, $ = Object.getPrototypeOf, S = Object.prototype.hasOwnProperty, E = Array.isArray, A = Array.prototype.indexOf, q = Array.prototype.includes, F = Array.from, z = Object.keys, j = Object.defineProperty, C = Object.getOwnPropertyDescriptor, P = Object.getOwnPropertyDescriptors, L = Object.prototype, M = Array.prototype, O = Object.getPrototypeOf, T = Object.isExtensible, B = () => {};
function D() {
	var e, t;
	return {
		promise: new Promise((n, r) => {
			e = n, t = r;
		}),
		resolve: e,
		reject: t
	};
}
function N(e, t) {
	if (Array.isArray(e)) return e;
	if (void 0 === t || !(Symbol.iterator in e)) return Array.from(e);
	let n = [];
	for (let r of e) if (n.push(r), n.length === t) break;
	return n;
}
var R = Symbol("$state"), G = Symbol("legacy props"), W = Symbol(""), H = Symbol("attributes"), Y = Symbol("class"), V = Symbol("style"), X = Symbol("text"), U = Symbol("form reset"), Z = new class extends Error {
	name = "StaleReactionError";
	message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), J = !!globalThis.document?.contentType && globalThis.document.contentType.includes("xml"), K = {}, Q = Symbol("uninitialized");
function ee(e) {
	console.warn("https://svelte.dev/e/hydration_mismatch");
}
var et = !1;
function en(e) {
	if (null === e) throw ee(), K;
	return h = e;
}
function er() {
	return en(tt(h));
}
function es(e) {
	if (et) {
		if (null !== tt(h)) throw ee(), K;
		h = e;
	}
}
function ea(e = !0) {
	for (var t = 0, n = h;;) {
		if (8 === n.nodeType) {
			var r = n.data;
			if ("]" === r) {
				if (0 === t) return n;
				t -= 1;
			} else "[" !== r && "[!" !== r && ("[" !== r[0] || isNaN(Number(r.slice(1)))) || (t += 1);
		}
		var s = tt(n);
		e && n.remove(), n = s;
	}
}
function ei(e) {
	if (!e || 8 !== e.nodeType) throw ee(), K;
	return e.data;
}
function el(e) {
	return e === this.v;
}
function eo(e) {
	var t;
	return t = this.v, e != e ? t != t : e === t && (null === e || "object" != typeof e) && "function" != typeof e;
}
var ec = !1;
function ed() {
	ec = !0;
}
var eu = null;
function ef(e, t = !1, n) {
	eu = {
		p: eu,
		i: !1,
		c: null,
		e: null,
		s: e,
		x: null,
		r: tj,
		l: ec && !t ? {
			s: null,
			u: null,
			$: []
		} : null
	};
}
function eh(e) {
	var t = eu, n = t.e;
	if (null !== n) for (var r of (t.e = null, n)) tv(r);
	return void 0 !== e && (t.x = e), t.i = !0, eu = t.p, e ?? {};
}
function ep() {
	return !ec || null !== eu && null === eu.l;
}
var ev = [];
function eg() {
	var e = ev;
	ev = [];
	for (var t = 0; t < e.length; t++) e[t]();
}
function eb(e) {
	if (0 === ev.length && !ez) {
		var t = ev;
		queueMicrotask(() => {
			t === ev && eg();
		});
	}
	ev.push(e);
}
function em(e) {
	var t = tj;
	if (null === t) return tF.f |= 8388608, e;
	if ((32768 & t.f) == 0 && (4 & t.f) == 0) throw e;
	ex(e, t);
}
function ex(e, t) {
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
function ew(e, t) {
	e.f = -7169 & e.f | t;
}
function ek(e) {
	(512 & e.f) != 0 || null === e.deps ? ew(e, 1024) : ew(e, 4096);
}
function ey(e, t, n) {
	(2048 & e.f) != 0 ? t.add(e) : 4096 & e.f && n.add(e), function e(t) {
		if (null !== t) for (let n of t) 2 & n.f && 65536 & n.f && (n.f ^= 65536, e(n.deps));
	}(e.deps), ew(e, 1024);
}
var e_ = !1, e$ = null, eS = null, eE = null, eA = null, eq = null, eF = null, ez = !1, ej = !1, eC = null, eP = null, eL = 0, eM = 1, eO = class e {
	id = eM++;
	#e = !1;
	linked = !0;
	#t = null;
	#n = null;
	async_deriveds = /* @__PURE__ */ new Map();
	current = /* @__PURE__ */ new Map();
	previous = /* @__PURE__ */ new Map();
	unblocked = /* @__PURE__ */ new Set();
	#r = /* @__PURE__ */ new Set();
	#s = /* @__PURE__ */ new Set();
	#a = /* @__PURE__ */ new Set();
	#i = 0;
	#l = /* @__PURE__ */ new Map();
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
		for (let n of this.#l.keys()) {
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
			for (var r of (this.#h.delete(e), n.d)) ew(r, 2048), t(r);
			for (r of n.m) ew(r, 4096), t(r);
		}
		this.#p.add(e);
	}
	#b() {
		if (this.#e = !0, eL++ > 1e3 && (this.#m(), function() {
			try {
				throw Error("https://svelte.dev/e/effect_update_depth_exceeded");
			} catch (e) {
				ex(e, eF);
			}
		}()), !this.#g()) {
			for (let e of this.#u) this.#f.delete(e), ew(e, 2048), this.schedule(e);
			for (let e of this.#f) ew(e, 4096), this.schedule(e);
		}
		let t = this.#c;
		this.#c = [], this.apply();
		var n = eC = [], r = [], s = eP = [];
		for (let e of t) try {
			this.#x(e, n, r);
		} catch (t) {
			throw function e(t) {
				ew(t, 1024);
				for (var n = t.first; null !== n;) e(n), n = n.next;
			}(e), t;
		}
		if (eE = null, s.length > 0) {
			var a = e.ensure();
			for (let e of s) a.schedule(e);
		}
		if (eC = null, eP = null, this.#g()) {
			for (let [e, t] of (this.#w(r), this.#w(n), this.#h)) (function e(t, n) {
				if ((32 & t.f) == 0 || (1024 & t.f) == 0) {
					(2048 & t.f) != 0 ? n.d.push(t) : 4096 & t.f && n.m.push(t), ew(t, 1024);
					for (var r = t.first; null !== r;) e(r, n), r = r.next;
				}
			})(e, t);
			s.length > 0 && eE.#b();
			return;
		}
		let i = this.#k();
		if (i) return void i.#y(this);
		for (let e of (this.#u.clear(), this.#f.clear(), this.#r)) e(this);
		this.#r.clear(), eA = this, eD(r), eD(n), eA = null, this.#o?.resolve();
		var l = eE;
		if (this.linked && 0 === this.#i && this.#m(), this.#c.length > 0) {
			null === l && (l = this, this.#_());
			let e = l;
			e.#c.push(...this.#c.filter((t) => !e.#c.includes(t)));
		}
		null !== l && l.#b();
	}
	#x(e, t, n) {
		e.f ^= 1024;
		for (var r = e.first; null !== r;) {
			var s = r.f, a = (96 & s) != 0;
			if (!(a && (1024 & s) != 0 || (8192 & s) != 0 || this.#h.has(r)) && null !== r.fn) {
				a ? r.f ^= 1024 : (4 & s) != 0 ? t.push(r) : tN(r) && (16 & s && this.#f.add(r), tW(r));
				var i = r.first;
				if (null !== i) {
					r = i;
					continue;
				}
			}
			for (; null !== r;) {
				var l = r.next;
				if (null !== l) {
					r = l;
					break;
				}
				r = r.parent;
			}
		}
	}
	#k() {
		for (var e = this.#t; null !== e;) {
			if (!e.is_fork) {
				for (let [t, [, n]] of this.current) if (e.current.has(t) && !n) return e;
			}
			e = e.#t;
		}
		return null;
	}
	#y(e) {
		for (let [t, n] of e.current) !this.previous.has(t) && e.previous.has(t) && this.previous.set(t, e.previous.get(t)), this.current.set(t, n);
		for (let [t, n] of e.async_deriveds) {
			let e = this.async_deriveds.get(t);
			e && n.promise.then(e.resolve);
		}
		let t = (e) => {
			var n = e.reactions;
			if (null !== n) for (let e of n) {
				var r = e.f;
				(2 & r) != 0 ? t(e) : 4194320 & r && !this.async_deriveds.has(e) && (this.#f.delete(e), ew(e, 2048), this.schedule(e));
			}
		};
		for (let e of this.current.keys()) t(e);
		this.oncommit(() => e.discard()), e.#m(), eE = this, this.#b();
	}
	#w(e) {
		for (var t = 0; t < e.length; t += 1) ey(e[t], this.#u, this.#f);
	}
	capture(e, t, n = !1) {
		e.v === Q || this.previous.has(e) || this.previous.set(e, e.v), !(8388608 & e.f) && (this.current.set(e, [t, n]), eq?.set(e, t)), this.is_fork || (e.v = t);
	}
	activate() {
		eE = this;
	}
	deactivate() {
		eE = null, eq = null;
	}
	flush() {
		try {
			ej = !0, eE = this, this.#b();
		} finally {
			eL = 0, eF = null, eC = null, eP = null, ej = !1, eE = null, eq = null, eQ.clear();
		}
	}
	discard() {
		for (let e of this.#s) e(this);
		this.#s.clear(), this.#a.clear(), this.#m();
	}
	register_created_effect(e) {
		this.#d.push(e);
	}
	#$() {
		this.#m();
		for (let c = e$; null !== c; c = c.#n) {
			var e = c.id < this.id, t = [];
			for (let [r, [s, a]] of this.current) {
				if (c.current.has(r)) {
					var n = c.current.get(r)[0];
					if (!e || s === n) continue;
					c.current.set(r, [s, a]);
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
					var s = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Map();
					for (var i of t) (function e(t, n, r, s) {
						if (!r.has(t) && (r.add(t), null !== t.reactions)) for (let a of t.reactions) {
							let t = a.f;
							(2 & t) != 0 ? e(a, n, r, s) : 4194320 & t && !(2048 & t) && eN(a, n, s) && (ew(a, 2048), eR(a));
						}
					})(i, r, s, a);
					a = /* @__PURE__ */ new Map();
					var l = [...c.current.keys()].filter((e) => !this.current.has(e) || this.current.get(e)[0] !== e.v);
					if (l.length > 0) for (let e of this.#d) !(155648 & e.f) && eN(e, l, a) && ((4194320 & e.f) != 0 ? (ew(e, 2048), c.schedule(e)) : c.#u.add(e));
					if (c.#c.length > 0 && !c.#v) {
						for (var o of (c.apply(), c.#c)) c.#x(o, [], []);
						c.#c = [];
					}
					c.deactivate();
				}
			}
		}
	}
	increment(e, t) {
		if (this.#i += 1, e) {
			let e = this.#l.get(t) ?? 0;
			this.#l.set(t, e + 1);
		}
	}
	decrement(e, t) {
		if (this.#i -= 1, e) {
			let e = this.#l.get(t) ?? 0;
			1 === e ? this.#l.delete(t) : this.#l.set(t, e - 1);
		}
		this.#v || (this.#v = !0, eb(() => {
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
		this.#s.add(e);
	}
	on_fork_commit(e) {
		this.#a.add(e);
	}
	run_fork_commit_callbacks() {
		for (let e of this.#a) e(this);
		this.#a.clear();
	}
	settled() {
		return (this.#o ??= D()).promise;
	}
	static ensure() {
		if (null === eE) {
			let t = eE = new e();
			t.#_(), ej || ez || eb(() => {
				t.#e || t.flush();
			});
		}
		return eE;
	}
	apply() {
		eq = null;
	}
	schedule(e) {
		if (eF = e, e.b?.is_pending && (16777228 & e.f) != 0 && (32768 & e.f) == 0) return void e.b.defer_effect(e);
		for (var t = e; null !== t.parent;) {
			var n = (t = t.parent).f;
			if (null !== eC && t === tj && (null === tF || (2 & tF.f) == 0)) return;
			if ((96 & n) != 0) {
				if ((1024 & n) == 0) return;
				t.f ^= 1024;
			}
		}
		this.#c.push(t);
	}
	#_() {
		null === eS ? e$ = eS = this : (eS.#n = this, this.#t = eS), eS = this;
	}
	#m() {
		var e = this.#t, t = this.#n;
		null === e ? e$ = t : e.#n = t, null === t ? eS = e : t.#t = e, this.linked = !1;
	}
};
function eT(e) {
	var t, n = ez;
	ez = !0;
	try {
		for (e && (null === eE || eE.is_fork || eE.flush(), t = e());;) {
			for (; ev.length > 0;) eg();
			if (null === eE) return t;
			eE.flush();
		}
	} finally {
		ez = n;
	}
}
var eB = null;
function eD(e) {
	var t = e.length;
	if (0 !== t) {
		for (var n = 0; n < t;) {
			var r = e[n++];
			if ((24576 & r.f) == 0 && tN(r) && (eB = /* @__PURE__ */ new Set(), tW(r), null === r.deps && null === r.first && null === r.nodes && null === r.teardown && null === r.ac && t_(r), eB?.size > 0)) {
				for (let e of (eQ.clear(), eB)) {
					if ((24576 & e.f) != 0) continue;
					let t = [e], n = e.parent;
					for (; null !== n;) eB.has(n) && (eB.delete(n), t.push(n)), n = n.parent;
					for (let e = t.length - 1; e >= 0; e--) {
						let n = t[e];
						!(24576 & n.f) && tW(n);
					}
				}
				eB.clear();
			}
		}
		eB = null;
	}
}
function eN(e, t, n) {
	let r = n.get(e);
	if (void 0 !== r) return r;
	if (null !== e.deps) for (let r of e.deps) {
		if (q.call(t, r)) return !0;
		if ((2 & r.f) != 0 && eN(r, t, n)) return n.set(r, !0), !0;
	}
	return n.set(e, !1), !1;
}
function eR(e) {
	eE.schedule(e);
}
var eG = class {
	parent;
	is_pending = !1;
	transform_error;
	#S;
	#E = et ? h : null;
	#A;
	#q;
	#F;
	#z = null;
	#j = null;
	#C = null;
	#P = null;
	#L = 0;
	#M = 0;
	#O = !1;
	#u = /* @__PURE__ */ new Set();
	#f = /* @__PURE__ */ new Set();
	#T = null;
	#B = (function(e) {
		let t, n = 0, r = e1(0);
		return () => {
			tf() && (tH(r), tg(() => (0 === n && (t = tY(() => e(() => e6(r)))), n += 1, () => {
				eb(() => {
					0 == (n -= 1) && (t?.(), t = void 0, e6(r));
				});
			})));
		};
	})(() => (this.#T = e1(this.#L), () => {
		this.#T = null;
	}));
	constructor(e, t, n, r) {
		this.#S = e, this.#A = t, this.#q = (e) => {
			var t = tj;
			t.b = this, t.f |= 128, n(e);
		}, this.parent = tj.b, this.transform_error = r ?? this.parent?.transform_error ?? ((e) => e), this.#F = tm(() => {
			if (et) {
				let e = this.#E;
				er();
				let t = "[!" === e.data;
				if (e.data.startsWith("[?")) {
					let t = JSON.parse(e.data.slice(2));
					this.#D(t);
				} else t ? this.#N() : this.#R();
			} else this.#G();
		}, 589824), et && (this.#S = h);
	}
	#R() {
		try {
			this.#z = tx(() => this.#q(this.#S));
		} catch (e) {
			this.error(e);
		}
	}
	#D(e) {
		let t = this.#A.failed;
		t && (this.#C = tx(() => {
			t(this.#S, () => e, () => () => {});
		}));
	}
	#N() {
		let e = this.#A.pending;
		e && (this.is_pending = !0, this.#j = tx(() => e(this.#S)), eb(() => {
			var e = this.#P = document.createDocumentFragment(), t = e7();
			e.append(t), this.#z = this.#W(() => tx(() => this.#q(t))), 0 === this.#M && (this.#S.before(e), this.#P = null, t$(this.#j, () => {
				this.#j = null;
			}), this.#I(eE));
		}));
	}
	#G() {
		try {
			if (this.is_pending = this.has_pending_snippet(), this.#M = 0, this.#L = 0, this.#z = tx(() => {
				this.#q(this.#S);
			}), this.#M > 0) {
				var e = this.#P = document.createDocumentFragment();
				tE(this.#z, e);
				let t = this.#A.pending;
				this.#j = tx(() => t(this.#S));
			} else this.#I(eE);
		} catch (e) {
			this.error(e);
		}
	}
	#I(e) {
		this.is_pending = !1, e.transfer_effects(this.#u, this.#f);
	}
	defer_effect(e) {
		ey(e, this.#u, this.#f);
	}
	is_rendered() {
		return !this.is_pending && (!this.parent || this.parent.is_rendered());
	}
	has_pending_snippet() {
		return !!this.#A.pending;
	}
	#W(e) {
		var t = tj, n = tF, r = eu;
		tj = this.#F, tF = this.#F, eu = this.#F.ctx;
		try {
			return eO.ensure(), e();
		} catch (e) {
			return em(e), null;
		} finally {
			tj = t, tF = n, eu = r;
		}
	}
	#H(e, t) {
		if (!this.has_pending_snippet()) {
			this.parent && this.parent.#H(e, t);
			return;
		}
		this.#M += e, 0 === this.#M && (this.#I(t), this.#j && t$(this.#j, () => {
			this.#j = null;
		}), this.#P && (this.#S.before(this.#P), this.#P = null));
	}
	update_pending_count(e, t) {
		this.#H(e, t), this.#L += e, this.#T && !this.#O && (this.#O = !0, eb(() => {
			this.#O = !1, this.#T && e3(this.#T, this.#L);
		}));
	}
	get_effect_pending() {
		return this.#B(), tH(this.#T);
	}
	error(e) {
		if (!this.#A.onerror && !this.#A.failed) throw e;
		eE?.is_fork ? (this.#z && eE.skip_effect(this.#z), this.#j && eE.skip_effect(this.#j), this.#C && eE.skip_effect(this.#C), eE.on_fork_commit(() => {
			this.#Y(e);
		})) : this.#Y(e);
	}
	#Y(e) {
		this.#z && (ty(this.#z), this.#z = null), this.#j && (ty(this.#j), this.#j = null), this.#C && (ty(this.#C), this.#C = null), et && (en(this.#E), function(e = 1) {
			if (et) {
				for (var t = e, n = h; t--;) n = tt(n);
				h = n;
			}
		}(), en(ea()));
		var t = this.#A.onerror;
		let n = this.#A.failed;
		var r = !1, s = !1;
		let a = () => {
			r ? console.warn("https://svelte.dev/e/svelte_boundary_reset_noop") : (r = !0, s && function() {
				throw Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
			}(), null !== this.#C && t$(this.#C, () => {
				this.#C = null;
			}), this.#W(() => {
				this.#G();
			}));
		}, i = (e) => {
			try {
				s = !0, t?.(e, a), s = !1;
			} catch (e) {
				ex(e, this.#F && this.#F.parent);
			}
			n && (this.#C = this.#W(() => {
				try {
					return tx(() => {
						var t = tj;
						t.b = this, t.f |= 128, n(this.#S, () => e, () => a);
					});
				} catch (e) {
					return ex(e, this.#F.parent), null;
				}
			}));
		};
		eb(() => {
			var t;
			try {
				t = this.transform_error(e);
			} catch (e) {
				ex(e, this.#F && this.#F.parent);
				return;
			}
			null !== t && "object" == typeof t && "function" == typeof t.then ? t.then(i, (e) => ex(e, this.#F && this.#F.parent)) : i(t);
		});
	}
};
function eW(e = !0) {
	tj = null, tF = null, eu = null, e && eE?.deactivate();
}
function eI() {
	var e = tj, t = e.b, n = eE, r = t.is_rendered();
	return t.update_pending_count(1, n), n.increment(r, e), () => {
		t.update_pending_count(-1, n), n.decrement(r, e);
	};
}
function eH(e) {
	return null !== tj && (tj.f |= 524288), {
		ctx: eu,
		deps: null,
		effects: null,
		equals: el,
		f: 2050,
		fn: e,
		reactions: null,
		rv: 0,
		v: Q,
		wv: 0,
		parent: tj,
		ac: null
	};
}
var eY = Symbol("obsolete");
function eV(e) {
	let t = eH(e);
	return tP(t), t;
}
function eX(e) {
	let t = eH(e);
	return t.equals = eo, t;
}
function eU(e) {
	var t, n = tj, r = e.parent;
	if (!tq && null !== r && e.v !== Q && (24576 & r.f) != 0) return console.warn("https://svelte.dev/e/derived_inert"), e.v;
	tj = r;
	try {
		e.f &= -65537;
		var s = e.effects;
		if (null !== s) {
			e.effects = null;
			for (var a = 0; a < s.length; a += 1) ty(s[a]);
		}
		t = tR(e);
	} finally {
		tj = n;
	}
	return t;
}
function eZ(e) {
	var t = eU(e);
	e.equals(t) || (e.wv = ++tT, eE?.is_fork && null !== e.deps) || (null !== eE ? (eE.capture(e, t, !0), eA?.capture(e, t, !0)) : e.v = t, null !== e.deps) ? !tq && (null !== eq ? (tf() || eE?.is_fork) && eq.set(e, t) : ek(e)) : ew(e, 1024);
}
function eJ(e) {
	if (null !== e.effects) for (let t of e.effects) t.teardown && null !== t.fn && tW(t);
}
var eK = /* @__PURE__ */ new Set(), eQ = /* @__PURE__ */ new Map(), e0 = !1;
function e1(e, t) {
	return {
		f: 0,
		v: e,
		reactions: null,
		equals: el,
		rv: 0,
		wv: 0
	};
}
function e2(e, t) {
	let n = e1(e, t);
	return tP(n), n;
}
function e5(e, t = !1, n = !0) {
	let r = e1(e);
	return t || (r.equals = eo), ec && n && null !== eu && null !== eu.l && (eu.l.s ??= []).push(r), r;
}
function e8(e, t, n = !1) {
	return null !== tF && (!tz || 131072 & tF.f) && ep() && 4325394 & tF.f && (null === tC || !q.call(tC, e)) && function() {
		throw Error("https://svelte.dev/e/state_unsafe_mutation");
	}(), e3(e, n ? e4(t) : t, eP);
}
function e3(e, t, n = null) {
	if (!e.equals(t)) {
		eQ.set(e, tq ? t : e.v);
		var r = eO.ensure();
		r.capture(e, t), 2 & e.f && (2048 & e.f && eU(e), null === eq && ek(e)), e.wv = ++tT, function e(t, n, r) {
			var s = t.reactions;
			if (null !== s) for (var a = ep(), i = s.length, l = 0; l < i; l++) {
				var o = s[l], c = o.f;
				if (a || o !== tj) {
					var d = (2048 & c) == 0;
					d && ew(o, n), (131072 & c) != 0 ? eK.add(o) : (2 & c) != 0 ? (eq?.delete(o), !(65536 & c) && (512 & c && (null === tj || !(2097152 & tj.f)) && (o.f |= 65536), e(o, 4096, r))) : d && (16 & c && null !== eB && eB.add(o), null !== r ? r.push(o) : eR(o));
				}
			}
		}(e, 2048, n), ep() && null !== tj && 1024 & tj.f && !(96 & tj.f) && (null === tO ? tO = [e] : tO.push(e)), r.is_fork || !(eK.size > 0) || e0 || function() {
			for (let e of (e0 = !1, eK)) {
				let t;
				1024 & e.f && ew(e, 4096);
				try {
					t = tN(e);
				} catch {
					t = !0;
				}
				t && tW(e);
			}
			eK.clear();
		}();
	}
	return t;
}
function e6(e) {
	e8(e, e.v + 1);
}
function e4(e) {
	if ("object" != typeof e || null === e || R in e) return e;
	let t = O(e);
	if (t !== L && t !== M) return e;
	var n = /* @__PURE__ */ new Map(), r = E(e), s = e2(0), a = tD, i = (e) => {
		if (tD === a) return e();
		var t = tF, n = tD;
		tF = null, tD = a;
		var r = e();
		return tF = t, tD = n, r;
	};
	return r && n.set("length", e2(e.length, null)), new Proxy(e, {
		defineProperty(e, t, r) {
			"value" in r && !1 !== r.configurable && !1 !== r.enumerable && !1 !== r.writable || function() {
				throw Error("https://svelte.dev/e/state_descriptors_fixed");
			}();
			var s = n.get(t);
			return void 0 === s ? i(() => {
				var e = e2(r.value, null);
				return n.set(t, e), e;
			}) : e8(s, r.value, !0), !0;
		},
		deleteProperty(e, t) {
			var r = n.get(t);
			if (void 0 === r) {
				if (t in e) {
					let e = i(() => e2(Q, null));
					n.set(t, e), e6(s);
				}
			} else e8(r, Q), e6(s);
			return !0;
		},
		get(t, r, s) {
			if (r === R) return e;
			var a = n.get(r), l = r in t;
			if (void 0 === a && (!l || C(t, r)?.writable) && (a = i(() => e2(e4(l ? t[r] : Q), null)), n.set(r, a)), void 0 !== a) {
				var o = tH(a);
				return o === Q ? void 0 : o;
			}
			return Reflect.get(t, r, s);
		},
		getOwnPropertyDescriptor(e, t) {
			var r = Reflect.getOwnPropertyDescriptor(e, t);
			if (r && "value" in r) {
				var s = n.get(t);
				s && (r.value = tH(s));
			} else if (void 0 === r) {
				var a = n.get(t), i = a?.v;
				if (void 0 !== a && i !== Q) return {
					enumerable: !0,
					configurable: !0,
					value: i,
					writable: !0
				};
			}
			return r;
		},
		has(e, t) {
			if (t === R) return !0;
			var r = n.get(t), s = void 0 !== r && r.v !== Q || Reflect.has(e, t);
			return (!(void 0 !== r || null !== tj && (!s || C(e, t)?.writable)) || (void 0 === r && (r = i(() => e2(s ? e4(e[t]) : Q, null)), n.set(t, r)), tH(r) !== Q)) && s;
		},
		set(e, t, a, l) {
			var o = n.get(t), c = t in e;
			if (r && "length" === t) for (var d = a; d < o.v; d += 1) {
				var u = n.get(d + "");
				void 0 !== u ? e8(u, Q) : d in e && (u = i(() => e2(Q, null)), n.set(d + "", u));
			}
			void 0 === o ? (!c || C(e, t)?.writable) && (e8(o = i(() => e2(void 0, null)), e4(a)), n.set(t, o)) : (c = o.v !== Q, e8(o, i(() => e4(a))));
			var f = Reflect.getOwnPropertyDescriptor(e, t);
			if (f?.set && f.set.call(l, a), !c) {
				if (r && "string" == typeof t) {
					var h = n.get("length"), p = Number(t);
					Number.isInteger(p) && p >= h.v && e8(h, p + 1);
				}
				e6(s);
			}
			return !0;
		},
		ownKeys(e) {
			tH(s);
			var t = Reflect.ownKeys(e).filter((e) => {
				var t = n.get(e);
				return void 0 === t || t.v !== Q;
			});
			for (var [r, a] of n) a.v === Q || r in e || t.push(r);
			return t;
		},
		setPrototypeOf() {
			throw Error("https://svelte.dev/e/state_prototype_fixed");
		}
	});
}
function e9() {
	if (void 0 === p) {
		p = window, v = /Firefox/.test(navigator.userAgent);
		var e = Element.prototype, t = Node.prototype, n = Text.prototype;
		g = C(t, "firstChild").get, b = C(t, "nextSibling").get, T(e) && (e[Y] = void 0, e[H] = null, e[V] = void 0, e.__e = void 0), T(n) && (n[X] = void 0);
	}
}
function e7(e = "") {
	return document.createTextNode(e);
}
function te(e) {
	return g.call(e);
}
function tt(e) {
	return b.call(e);
}
function tn(e, t) {
	if (!et) return te(e);
	var n = te(h);
	if (null === n) n = h.appendChild(e7());
	else if (t && 3 !== n.nodeType) {
		var r = e7();
		return n?.before(r), en(r), r;
	}
	return t && tl(n), en(n), n;
}
function tr(e, t = !1) {
	if (!et) {
		var n = te(e);
		return n instanceof Comment && "" === n.data ? tt(n) : n;
	}
	if (t) {
		if (h?.nodeType !== 3) {
			var r = e7();
			return h?.before(r), en(r), r;
		}
		tl(h);
	}
	return h;
}
function ts(e, t = 1, n = !1) {
	let r = et ? h : e;
	for (; t--;) s = r, r = tt(r);
	if (!et) return r;
	if (n) {
		if (r?.nodeType !== 3) {
			var s, a = e7();
			return null === r ? s?.after(a) : r.before(a), en(a), a;
		}
		tl(r);
	}
	return en(r), r;
}
function ta(e) {
	e.textContent = "";
}
function ti(e, t, n) {
	return document.createElementNS(t ?? "http://www.w3.org/1999/xhtml", e, n ? { is: n } : void 0);
}
function tl(e) {
	if (e.nodeValue.length < 65536) return;
	let t = e.nextSibling;
	for (; null !== t && 3 === t.nodeType;) t.remove(), e.nodeValue += t.nodeValue, t = e.nextSibling;
}
var to = !1;
function tc() {
	to || (to = !0, document.addEventListener("reset", (e) => {
		Promise.resolve().then(() => {
			if (!e.defaultPrevented) for (let t of e.target.elements) t[U]?.();
		});
	}, { capture: !0 }));
}
function td(e) {
	var t = tF, n = tj;
	tF = null, tj = null;
	try {
		return e();
	} finally {
		tF = t, tj = n;
	}
}
function tu(e, t) {
	var n = tj;
	null !== n && 8192 & n.f && (e |= 8192);
	var r = {
		ctx: eu,
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
	eE?.register_created_effect(r);
	var s = r;
	if ((4 & e) != 0) null !== eC ? eC.push(r) : eO.ensure().schedule(r);
	else if (null !== t) {
		try {
			tW(r);
		} catch (e) {
			throw ty(r), e;
		}
		null === s.deps && null === s.teardown && null === s.nodes && s.first === s.last && !(524288 & s.f) && (s = s.first, 16 & e && 65536 & e && null !== s && (s.f |= 65536));
	}
	if (null !== s && (s.parent = n, null !== n && (a = s, null === (i = n.last) ? n.last = n.first = a : (i.next = a, a.prev = i, n.last = a)), null !== tF && (2 & tF.f) != 0 && (64 & e) == 0)) {
		var a, i, l = tF;
		(l.effects ??= []).push(s);
	}
	return r;
}
function tf() {
	return null !== tF && !tz;
}
function th(e) {
	let t = tu(8, null);
	return ew(t, 1024), t.teardown = e, t;
}
function tp(e) {
	if (null === tj) throw null === tF && function() {
		throw Error("https://svelte.dev/e/effect_orphan");
	}(), Error("https://svelte.dev/e/effect_in_unowned_derived");
	tq && function() {
		throw Error("https://svelte.dev/e/effect_in_teardown");
	}();
	var t = tj.f;
	if (tF || (32 & t) == 0 || (32768 & t) != 0) return tv(e);
	var n = eu;
	(n.e ??= []).push(e);
}
function tv(e) {
	return tu(1048580, e);
}
function tg(e, t = 0) {
	return tu(8 | t, e);
}
function tb(e, t = [], n = [], r = []) {
	(function(e, t, n, r) {
		let s = ep() ? eH : eX;
		var a, i, l, o, c = e.filter((e) => !e.settled);
		if (0 === n.length && 0 === c.length) return r(t.map(s));
		var d = tj, u = (a = tj, i = tF, l = eu, o = eE, function(e = !0) {
			tj = a, tF = i, eu = l, e && !(16384 & a.f) && (o?.activate(), o?.apply());
		}), f = 1 === c.length ? c[0].promise : c.length > 1 ? Promise.all(c.map((e) => e.promise)) : null;
		function h(e) {
			if ((16384 & d.f) == 0) {
				u();
				try {
					r(e);
				} catch (e) {
					ex(e, d);
				}
				eW();
			}
		}
		var p = eI();
		if (0 === n.length) return f.then(() => h(t.map(s))).finally(p);
		function v() {
			Promise.all(n.map((e) => {
				var t, n, r, s, a;
				let i;
				return t = e, null === (i = tj) && function() {
					throw Error("https://svelte.dev/e/async_derived_orphan");
				}(), n = void 0, r = e1(Q), s = !tF, a = /* @__PURE__ */ new Set(), tu(4718592, () => {
					var e = tj, l = D();
					n = l.promise;
					try {
						Promise.resolve(t()).then(l.resolve, (e) => {
							e !== Z && l.reject(e);
						}).finally(eW);
					} catch (e) {
						l.reject(e), eW();
					}
					var o = eE;
					if (s) {
						if ((32768 & e.f) != 0) var c = eI();
						if (i.b.is_rendered()) o.async_deriveds.get(e)?.reject(eY);
						else for (let e of a.values()) e.reject(eY);
						a.add(l), o.async_deriveds.set(e, l);
					}
					let d = (e, t) => {
						c?.(), a.delete(l), t !== eY && (o.activate(), t ? (r.f |= 8388608, e3(r, t)) : (8388608 & r.f && (r.f ^= 8388608), e3(r, e)), o.deactivate());
					};
					l.promise.then(d, (e) => d(null, e || "unknown"));
				}), th(() => {
					for (let e of a) e.reject(eY);
				}), new Promise((e) => {
					(function t(s) {
						function a() {
							s === n ? e(r) : t(n);
						}
						s.then(a, a);
					})(n);
				});
			})).then((e) => h([...t.map(s), ...e])).catch((e) => ex(e, d)).finally(p);
		}
		f ? f.then(() => {
			u(), v(), eW();
		}) : v();
	})(r, t, n, (t) => {
		tu(8, () => e(...t.map(tH)));
	});
}
function tm(e, t = 0) {
	return tu(16 | t, e);
}
function tx(e) {
	return tu(524320, e);
}
function tw(e) {
	var t = e.teardown;
	if (null !== t) {
		let e = tq, n = tF;
		tq = !0, tF = null;
		try {
			t.call(null);
		} finally {
			tq = e, tF = n;
		}
	}
}
function tk(e, t = !1) {
	var n = e.first;
	for (e.first = e.last = null; null !== n;) {
		let e = n.ac;
		null !== e && td(() => {
			e.abort(Z);
		});
		var r = n.next;
		(64 & n.f) != 0 ? n.parent = null : ty(n, t), n = r;
	}
}
function ty(e, t = !0) {
	var n = !1;
	(t || 262144 & e.f) && null !== e.nodes && null !== e.nodes.end && (function(e, t) {
		for (; null !== e;) {
			var n = e === t ? null : tt(e);
			e.remove(), e = n;
		}
	}(e.nodes.start, e.nodes.end), n = !0), ew(e, 33554432), tk(e, t && !n), tG(e, 0);
	var r = e.nodes && e.nodes.t;
	if (null !== r) for (let e of r) e.stop();
	tw(e), e.f ^= 33554432, e.f |= 16384;
	var s = e.parent;
	null !== s && null !== s.first && t_(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function t_(e) {
	var t = e.parent, n = e.prev, r = e.next;
	null !== n && (n.next = r), null !== r && (r.prev = n), null !== t && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function t$(e, t, n = !0) {
	var r = [];
	(function e(t, n, r) {
		if ((8192 & t.f) == 0) {
			t.f ^= 8192;
			var s = t.nodes && t.nodes.t;
			if (null !== s) for (let e of s) (e.is_global || r) && n.push(e);
			for (var a = t.first; null !== a;) {
				var i = a.next;
				if ((64 & a.f) == 0) {
					var l = (65536 & a.f) != 0 || (32 & a.f) != 0 && (16 & t.f) != 0;
					e(a, n, !!l && r);
				}
				a = i;
			}
		}
	})(e, r, !0);
	var s = () => {
		n && ty(e), t && t();
	}, a = r.length;
	if (a > 0) {
		var i = () => --a || s();
		for (var l of r) l.out(i);
	} else s();
}
function tS(e, t) {
	if ((8192 & e.f) != 0) {
		e.f ^= 8192, !(1024 & e.f) && (ew(e, 2048), eO.ensure().schedule(e));
		for (var n = e.first; null !== n;) {
			var r = n.next, s = (65536 & n.f) != 0 || (32 & n.f) != 0;
			tS(n, !!s && t), n = r;
		}
		var a = e.nodes && e.nodes.t;
		if (null !== a) for (let e of a) (e.is_global || t) && e.in();
	}
}
function tE(e, t) {
	if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; null !== n;) {
		var s = n === r ? null : tt(n);
		t.append(n), n = s;
	}
}
var tA = !1, tq = !1, tF = null, tz = !1, tj = null, tC = null;
function tP(e) {
	null !== tF && (null === tC ? tC = [e] : tC.push(e));
}
var tL = null, tM = 0, tO = null, tT = 1, tB = 0, tD = 0;
function tN(e) {
	var t = e.f;
	if ((2048 & t) != 0) return !0;
	if (2 & t && (e.f &= -65537), (4096 & t) != 0) {
		for (var n = e.deps, r = n.length, s = 0; s < r; s++) {
			var a = n[s];
			if (tN(a) && eZ(a), a.wv > e.wv) return !0;
		}
		512 & t && null === eq && ew(e, 1024);
	}
	return !1;
}
function tR(e) {
	var t = tL, n = tM, r = tO, s = tF, a = tC, i = eu, l = tz, o = tD, c = e.f;
	tL = null, tM = 0, tO = null, tF = (96 & c) == 0 ? e : null, tC = null, eu = e.ctx, tz = !1, tD = ++tB, null !== e.ac && (td(() => {
		e.ac.abort(Z);
	}), e.ac = null);
	try {
		e.f |= 2097152;
		var d, u = (0, e.fn)();
		e.f |= 32768;
		var f = e.deps, h = eE?.is_fork;
		if (null !== tL) {
			if (h || tG(e, tM), null !== f && tM > 0) for (f.length = tM + tL.length, d = 0; d < tL.length; d++) f[tM + d] = tL[d];
			else e.deps = f = tL;
			if (tf() && (512 & e.f) != 0) for (d = tM; d < f.length; d++) (f[d].reactions ??= []).push(e);
		} else !h && null !== f && tM < f.length && (tG(e, tM), f.length = tM);
		if (ep() && null !== tO && !tz && null !== f && (6146 & e.f) == 0) for (d = 0; d < tO.length; d++) (function e(t, n, r = !0) {
			var s = t.reactions;
			if (null !== s && !(null !== tC && q.call(tC, t))) for (var a = 0; a < s.length; a++) {
				var i = s[a];
				(2 & i.f) != 0 ? e(i, n, !1) : n === i && (r ? ew(i, 2048) : 1024 & i.f && ew(i, 4096), eR(i));
			}
		})(tO[d], e);
		if (null !== s && s !== e) {
			if (tB++, null !== s.deps) for (let e = 0; e < n; e += 1) s.deps[e].rv = tB;
			if (null !== t) for (let e of t) e.rv = tB;
			null !== tO && (null === r ? r = tO : r.push(...tO));
		}
		return 8388608 & e.f && (e.f ^= 8388608), u;
	} catch (e) {
		return em(e);
	} finally {
		e.f ^= 2097152, tL = t, tM = n, tO = r, tF = s, tC = a, eu = i, tz = l, tD = o;
	}
}
function tG(e, t) {
	var n = e.deps;
	if (null !== n) for (var r = t; r < n.length; r++) (function(e, t) {
		let n = t.reactions;
		if (null !== n) {
			var r = A.call(n, e);
			if (-1 !== r) {
				var s = n.length - 1;
				0 === s ? n = t.reactions = null : (n[r] = n[s], n.pop());
			}
		}
		if (null === n && (2 & t.f) != 0 && (null === tL || !q.call(tL, t))) {
			512 & t.f && (t.f ^= 512, t.f &= -65537), t.v !== Q && ek(t);
			if (null !== t.effects) for (let e of t.effects) (e.teardown || e.ac) && (e.teardown?.(), e.ac?.abort(Z), null !== e.fn && (e.teardown = B), e.ac = null, tG(e, 0), tk(e));
			tG(t, 0);
		}
	})(e, n[r]);
}
function tW(e) {
	var t = e.f;
	if ((16384 & t) == 0) {
		ew(e, 1024);
		var n = tj, r = tA;
		tj = e, tA = !0;
		try {
			if ((16777232 & t) != 0) for (var s = e.first; null !== s;) {
				var a = s.next;
				!(32 & s.f) && ty(s), s = a;
			}
			else tk(e);
			tw(e);
			var i = tR(e);
			e.teardown = "function" == typeof i ? i : null, e.wv = tT;
		} finally {
			tA = r, tj = n;
		}
	}
}
async function tI() {
	await Promise.resolve(), eT();
}
function tH(e) {
	var t = (2 & e.f) != 0;
	if (null !== tF && !tz && (null === tj || (16384 & tj.f) == 0) && (null === tC || !q.call(tC, e))) {
		var n = tF.deps;
		if ((2097152 & tF.f) != 0) e.rv < tB && (e.rv = tB, null === tL && null !== n && n[tM] === e ? tM++ : null === tL ? tL = [e] : tL.push(e));
		else {
			tF.deps ??= [], q.call(tF.deps, e) || tF.deps.push(e);
			var r = e.reactions;
			null === r ? e.reactions = [tF] : q.call(r, tF) || r.push(tF);
		}
	}
	if (tq && eQ.has(e)) return eQ.get(e);
	if (t) {
		if (tq) {
			var s = e.v;
			return (!(1024 & e.f) && null !== e.reactions || function e(t) {
				if (t.v === Q) return !0;
				if (null === t.deps) return !1;
				for (let n of t.deps) if (eQ.has(n) || (2 & n.f) != 0 && e(n)) return !0;
				return !1;
			}(e)) && (s = eU(e)), eQ.set(e, s), s;
		}
		var a = (512 & e.f) == 0 && !tz && null !== tF && (tA || (512 & tF.f) != 0), i = (32768 & e.f) == 0;
		tN(e) && (a && (e.f |= 512), eZ(e)), a && !i && (eJ(e), function e(t) {
			if (t.f |= 512, null !== t.deps) for (let n of t.deps) (n.reactions ??= []).push(t), 2 & n.f && !(512 & n.f) && (eJ(n), e(n));
		}(e));
	}
	if (eq?.has(e)) return eq.get(e);
	if ((8388608 & e.f) != 0) throw e.v;
	return e.v;
}
function tY(e) {
	var t = tz;
	try {
		return tz = !0, e();
	} finally {
		tz = t;
	}
}
var tV = ["touchstart", "touchmove"];
var tX = Symbol("events"), tU = /* @__PURE__ */ new Set(), tZ = /* @__PURE__ */ new Set();
function tJ(e, t, n, r, s) {
	var a = {
		capture: r,
		passive: s
	}, i = function(e, t, n, r = {}) {
		function s(e) {
			if (r.capture || t0.call(t, e), !e.cancelBubble) return td(() => n?.call(this, e));
		}
		return e.startsWith("pointer") || e.startsWith("touch") || "wheel" === e ? eb(() => {
			t.addEventListener(e, s, r);
		}) : t.addEventListener(e, s, r), s;
	}(e, t, n, a);
	(t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && th(() => {
		t.removeEventListener(e, i, a);
	});
}
function tK(e, t, n) {
	(t[tX] ??= {})[e] = n;
}
function tQ(e) {
	for (var t = 0; t < e.length; t++) tU.add(e[t]);
	for (var n of tZ) n(e);
}
function t0(e) {
	var t = this.ownerDocument, n = e.type, r = e.composedPath?.() || [], s = r[0] || e.target, a = 0, i = e == e && e[tX];
	if (i) {
		var l = r.indexOf(i);
		if (-1 !== l && (this === document || this === window)) {
			e[tX] = this;
			return;
		}
		var o = r.indexOf(this);
		if (-1 === o) return;
		l <= o && (a = l);
	}
	if ((s = r[a] || e.target) !== this) {
		j(e, "currentTarget", {
			configurable: !0,
			get: () => s || t
		});
		var c = tF, d = tj;
		tF = null, tj = null;
		try {
			for (var u, f = []; null !== s;) {
				var h = s.assignedSlot || s.parentNode || s.host || null;
				try {
					var p = s[tX]?.[n];
					null == p || s.disabled && e.target !== s || p.call(s, e);
				} catch (e) {
					u ? f.push(e) : u = e;
				}
				if (e.cancelBubble || h === this || null === h) break;
				s = h;
			}
			if (u) {
				for (let e of f) queueMicrotask(() => {
					throw e;
				});
				throw u;
			}
		} finally {
			e[tX] = this, delete e.currentTarget, tF = c, tj = d;
		}
	}
}
var t1 = globalThis?.window?.trustedTypes && globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function t2(e) {
	var t, n = ti("template");
	return t = e.replaceAll("<!>", "<!---->"), n.innerHTML = t1?.createHTML(t) ?? t, n.content;
}
function t5(e, t) {
	var n = tj;
	null === n.nodes && (n.nodes = {
		start: e,
		end: t,
		a: null,
		t: null
	});
}
function t8(e, t) {
	var n, r = (1 & t) != 0, s = (2 & t) != 0, a = !e.startsWith("<!>");
	return () => {
		if (et) return t5(h, null), h;
		void 0 === n && (n = t2(a ? e : "<!>" + e), r || (n = te(n)));
		var t = s || v ? document.importNode(n, !0) : n.cloneNode(!0);
		return r ? t5(te(t), t.lastChild) : t5(t, t), t;
	};
}
function t3() {
	if (et) return t5(h, null), h;
	var e = document.createDocumentFragment(), t = document.createComment(""), n = e7();
	return e.append(t, n), t5(t, n), e;
}
function t6(e, t) {
	if (et) {
		var n = tj;
		(!(32768 & n.f) || null === n.nodes.end) && (n.nodes.end = h), er();
		return;
	}
	null !== e && e.before(t);
}
function t4(e, t) {
	var n = null == t ? "" : "object" == typeof t ? `${t}` : t;
	n !== (e[X] ??= e.nodeValue) && (e[X] = n, e.nodeValue = `${n}`);
}
var t9 = /* @__PURE__ */ new Map();
function t7(e, { target: t, anchor: n, props: r = {}, events: s, context: a, intro: i = !0, transformError: l }) {
	let o;
	e9();
	var c, d = void 0, u = (c = () => {
		var i = n ?? t.appendChild(e7());
		new eG(i, { pending: () => {} }, (t) => {
			ef({});
			var n = eu;
			if (a && (n.c = a), s && (r.$$events = s), et && t5(t, null), d = e(t, r) || {}, et && (tj.nodes.end = h, null === h || 8 !== h.nodeType || "]" !== h.data)) throw ee(), K;
			eh();
		}, l);
		var o = /* @__PURE__ */ new Set(), c = (e) => {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				if (!o.has(r)) {
					o.add(r);
					var s = tV.includes(r);
					for (let e of [t, document]) {
						var a = t9.get(e);
						void 0 === a && (a = /* @__PURE__ */ new Map(), t9.set(e, a));
						var i = a.get(r);
						void 0 === i ? (e.addEventListener(r, t0, { passive: s }), a.set(r, 1)) : a.set(r, i + 1);
					}
				}
			}
		};
		return c(F(tU)), tZ.add(c), () => {
			for (var e of o) for (let n of [t, document]) {
				var r = t9.get(n), s = r.get(e);
				0 == --s ? (n.removeEventListener(e, t0), r.delete(e), 0 === r.size && t9.delete(n)) : r.set(e, s);
			}
			tZ.delete(c), i !== n && i.parentNode?.removeChild(i);
		};
	}, eO.ensure(), o = tu(524352, c), (e = {}) => new Promise((t) => {
		e.outro ? t$(o, () => {
			ty(o), t(void 0);
		}) : (ty(o), t(void 0));
	}));
	return ne.set(d, u), d;
}
var ne = /* @__PURE__ */ new WeakMap(), nt = class {
	anchor;
	#V = /* @__PURE__ */ new Map();
	#X = /* @__PURE__ */ new Map();
	#U = /* @__PURE__ */ new Map();
	#Z = /* @__PURE__ */ new Set();
	#J = !0;
	constructor(e, t = !0) {
		this.anchor = e, this.#J = t;
	}
	#$ = (e) => {
		if (this.#V.has(e)) {
			var t = this.#V.get(e), n = this.#X.get(t);
			if (n) tS(n, !0), this.#Z.delete(t);
			else {
				var r = this.#U.get(t);
				r && (this.#X.set(t, r.effect), this.#U.delete(t), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), n = r.effect);
			}
			for (let [t, n] of this.#V) {
				if (this.#V.delete(t), t === e) break;
				let r = this.#U.get(n);
				r && (ty(r.effect), this.#U.delete(n));
			}
			for (let [e, r] of this.#X) {
				if (e === t || this.#Z.has(e)) continue;
				let s = () => {
					if (Array.from(this.#V.values()).includes(e)) {
						var t = document.createDocumentFragment();
						tE(r, t), t.append(e7()), this.#U.set(e, {
							effect: r,
							fragment: t
						});
					} else ty(r);
					this.#Z.delete(e), this.#X.delete(e);
				};
				this.#J || !n ? (this.#Z.add(e), t$(r, s, !1)) : s();
			}
		}
	};
	#K = (e) => {
		this.#V.delete(e);
		let t = Array.from(this.#V.values());
		for (let [e, n] of this.#U) t.includes(e) || (ty(n.effect), this.#U.delete(e));
	};
	ensure(e, t) {
		var n = eE;
		if (t && !this.#X.has(e) && !this.#U.has(e)) this.#X.set(e, tx(() => t(this.anchor)));
		this.#V.set(n, e);
		et && (this.anchor = h), this.#$(n);
	}
};
function nn(e, t, n = !1) {
	et && (r = h, er());
	var r, s = new nt(e);
	function a(e, t) {
		if (et && e !== parseInt(ei(r).substring(1))) {
			var n = ea();
			en(n), s.anchor = n, et = !1, s.ensure(e, t), et = !0;
			return;
		}
		s.ensure(e, t);
	}
	tm(() => {
		var e = !1;
		t((t, n = 0) => {
			e = !0, a(n, t);
		}), e || a(-1, null);
	}, 65536 * !!n);
}
function nr(e, t) {
	return t;
}
function ns(e, t, n = !0) {
	var r;
	if (e.pending.size > 0) for (let t of (r = /* @__PURE__ */ new Set(), e.pending.values())) for (let n of t) r.add(e.items.get(n).e);
	for (var s = 0; s < t.length; s++) {
		var a = t[s];
		r?.has(a) ? (a.f |= 33554432, tE(a, document.createDocumentFragment())) : ty(t[s], n);
	}
}
function na(e, t, n, r, s, a = null) {
	var i, l = e, o = /* @__PURE__ */ new Map();
	4 & t && (l = et ? en(te(e)) : e.appendChild(e7())), et && er();
	var c = null, d = eX(() => {
		var e = n();
		return E(e) ? e : null == e ? [] : F(e);
	}), u = /* @__PURE__ */ new Map(), f = !0;
	function p(e) {
		!(16384 & g.effect.f) && (g.pending.delete(e), g.fallback = c, function(e, t, n, r, s) {
			var a = (8 & r) != 0, i = t.length, l = e.items, o = ni(e.effect.first), c = null, d = [], u = [];
			if (a) for (b = 0; b < i; b += 1) v = s(t[b], b), !(33554432 & (g = l.get(v).e).f) && (g.nodes?.a?.measure(), (p ??= /* @__PURE__ */ new Set()).add(g));
			for (b = 0; b < i; b += 1) {
				if (v = s(t[b], b), g = l.get(v).e, null !== e.outrogroups) for (let t of e.outrogroups) t.pending.delete(g), t.done.delete(g);
				if (8192 & g.f && (tS(g, !0), a && (g.nodes?.a?.unfix(), (p ??= /* @__PURE__ */ new Set()).delete(g))), (33554432 & g.f) != 0) if (g.f ^= 33554432, g === o) nl(g, null, n);
				else {
					var f = c ? c.next : o;
					g === e.effect.last && (e.effect.last = g.prev), g.prev && (g.prev.next = g.next), g.next && (g.next.prev = g.prev), no(e, c, g), no(e, g, f), nl(g, f, n), d = [], u = [], o = ni((c = g).next);
					continue;
				}
				if (g !== o) {
					if (void 0 !== h && h.has(g)) {
						if (d.length < u.length) {
							var h, p, v, g, b, m, x = u[0];
							c = x.prev;
							var w = d[0], k = d[d.length - 1];
							for (m = 0; m < d.length; m += 1) nl(d[m], x, n);
							for (m = 0; m < u.length; m += 1) h.delete(u[m]);
							no(e, w.prev, k.next), no(e, c, w), no(e, k, x), o = x, c = k, b -= 1, d = [], u = [];
						} else h.delete(g), nl(g, o, n), no(e, g.prev, g.next), no(e, g, null === c ? e.effect.first : c.next), no(e, c, g), c = g;
						continue;
					}
					for (d = [], u = []; null !== o && o !== g;) (h ??= /* @__PURE__ */ new Set()).add(o), u.push(o), o = ni(o.next);
					if (null === o) continue;
				}
				!(33554432 & g.f) && d.push(g), c = g, o = ni(g.next);
			}
			if (null !== e.outrogroups) {
				for (let t of e.outrogroups) 0 === t.pending.size && (ns(e, F(t.done)), e.outrogroups?.delete(t));
				0 === e.outrogroups.size && (e.outrogroups = null);
			}
			if (null !== o || void 0 !== h) {
				var y = [];
				if (void 0 !== h) for (g of h) !(8192 & g.f) && y.push(g);
				for (; null !== o;) !(8192 & o.f) && o !== e.fallback && y.push(o), o = ni(o.next);
				var _ = y.length;
				if (_ > 0) {
					if (a) {
						for (b = 0; b < _; b += 1) y[b].nodes?.a?.measure();
						for (b = 0; b < _; b += 1) y[b].nodes?.a?.fix();
					}
					(function(e, t, n) {
						for (var r, s = t.length, a = t.length, i = 0; i < s; i++) {
							let n = t[i];
							t$(n, () => {
								if (r) {
									if (r.pending.delete(n), r.done.add(n), 0 === r.pending.size) {
										var t = e.outrogroups;
										ns(e, F(r.done)), t.delete(r), 0 === t.size && (e.outrogroups = null);
									}
								} else a -= 1;
							}, !1);
						}
						if (0 === a) {
							var l = null !== n;
							if (l) {
								var o = n.parentNode;
								ta(o), o.append(n), e.items.clear();
							}
							ns(e, t, !l);
						} else r = {
							pending: new Set(t),
							done: /* @__PURE__ */ new Set()
						}, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(r);
					})(e, y, (4 & r) != 0 && 0 === i ? n : null);
				}
			}
			a && eb(() => {
				if (void 0 !== p) for (g of p) g.nodes?.a?.apply();
			});
		}(g, i, l, t, r), null !== c) && (0 === i.length ? (33554432 & c.f) == 0 ? tS(c, !0) : (c.f ^= 33554432, nl(c, null, l)) : t$(c, () => {
			c = null;
		}));
	}
	var g = {
		effect: tm(() => {
			var e = (i = tH(d)).length;
			let g = !1;
			et && "[!" === ei(l) != (0 === e) && (en(l = ea()), et = !1, g = !0);
			for (var b = /* @__PURE__ */ new Set(), x = eE, w = 0; w < e; w += 1) {
				et && 8 === h.nodeType && "]" === h.data && (l = h, g = !0, et = !1);
				var k = i[w], y = r(k, w), _ = f ? null : o.get(y);
				_ ? (_.v && e3(_.v, k), _.i && e3(_.i, w)) : (_ = function(e, t, n, r, s, a, i, l) {
					var o = (1 & i) != 0 ? (16 & i) == 0 ? e5(n, !1, !1) : e1(n) : null, c = (2 & i) != 0 ? e1(s) : null;
					return {
						v: o,
						i: c,
						e: tx(() => (a(t, o ?? n, c ?? s, l), () => {
							e.delete(r);
						}))
					};
				}(o, f ? l : m ??= e7(), k, y, w, s, t, n), f || (_.e.f |= 33554432), o.set(y, _)), b.add(y);
			}
			if (0 === e && a && !c && (f ? c = tx(() => a(l)) : (c = tx(() => a(m ??= e7())), c.f |= 33554432)), e > b.size && function() {
				throw Error("https://svelte.dev/e/each_key_duplicate");
			}(), et && e > 0 && en(ea()), !f) {
				if (u.set(x, b), 1) p(x);
			}
			g && (et = !0), tH(d);
		}),
		flags: t,
		items: o,
		pending: u,
		outrogroups: null,
		fallback: c
	};
	f = !1, et && (l = h);
}
function ni(e) {
	for (; null !== e && (32 & e.f) == 0;) e = e.next;
	return e;
}
function nl(e, t, n) {
	if (e.nodes) for (var r = e.nodes.start, s = e.nodes.end, a = t && (33554432 & t.f) == 0 ? t.nodes.start : n; null !== r;) {
		var i = tt(r);
		if (a.before(r), r === s) return;
		r = i;
	}
}
function no(e, t, n) {
	null === t ? e.effect.first = n : t.next = n, null === n ? e.effect.last = t : n.prev = t;
}
function nc(e, t) {
	tu(4, () => {
		var n = e.getRootNode(), r = n.host ? n : n.head ?? n.ownerDocument.head;
		if (!r.querySelector("#" + t.hash)) {
			let e = ti("style");
			e.id = t.hash, e.textContent = t.code, r.appendChild(e);
		}
	});
}
function nd(e) {
	return "object" == typeof e ? function() {
		for (var e, t, n = 0, r = "", s = arguments.length; n < s; n++) (e = arguments[n]) && (t = function e(t) {
			var n, r, s = "";
			if ("string" == typeof t || "number" == typeof t) s += t;
			else if ("object" == typeof t) if (Array.isArray(t)) {
				var a = t.length;
				for (n = 0; n < a; n++) t[n] && (r = e(t[n])) && (s && (s += " "), s += r);
			} else for (r in t) t[r] && (s && (s += " "), s += r);
			return s;
		}(e)) && (r && (r += " "), r += t);
		return r;
	}(e) : e ?? "";
}
var nu = [..." 	\n\r\f\xA0\v﻿"];
function nf(e, t = !1) {
	var n = t ? " !important;" : ";", r = "";
	for (var s of Object.keys(e)) {
		var a = e[s];
		null != a && "" !== a && (r += " " + s + ": " + a + n);
	}
	return r;
}
function nh(e) {
	return "-" !== e[0] || "-" !== e[1] ? e.toLowerCase() : e;
}
function np(e, t, n, r, s, a) {
	var i = e[Y];
	if (et || i !== n || void 0 === i) {
		var l = function(e, t, n) {
			var r = null == e ? "" : "" + e;
			if (t && (r = r ? r + " " + t : t), n) {
				for (var s of Object.keys(n)) if (n[s]) r = r ? r + " " + s : s;
				else if (r.length) for (var a = s.length, i = 0; (i = r.indexOf(s, i)) >= 0;) {
					var l = i + a;
					(0 === i || nu.includes(r[i - 1])) && (l === r.length || nu.includes(r[l])) ? r = (0 === i ? "" : r.substring(0, i)) + r.substring(l + 1) : i = l;
				}
			}
			return "" === r ? null : r;
		}(n, r, a);
		et && l === e.getAttribute("class") || (null == l ? e.removeAttribute("class") : t ? e.className = l : e.setAttribute("class", l)), e[Y] = n;
	} else if (a && s !== a) for (var o in a) {
		var c = !!a[o];
		(null == s || !!s[o] !== c) && e.classList.toggle(o, c);
	}
	return a;
}
function nv(e, t = {}, n, r) {
	for (var s in n) {
		var a = n[s];
		t[s] !== a && (null == n[s] ? e.style.removeProperty(s) : e.style.setProperty(s, a, r));
	}
}
function ng(e, t, n, r) {
	var s = e[V];
	if (et || s !== t) {
		var a = function(e, t) {
			if (t) {
				var n, r, s = "";
				if (Array.isArray(t) ? (n = t[0], r = t[1]) : n = t, e) {
					e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
					var a = !1, i = 0, l = !1, o = [];
					n && o.push(...Object.keys(n).map(nh)), r && o.push(...Object.keys(r).map(nh));
					var c = 0, d = -1;
					let t = e.length;
					for (var u = 0; u < t; u++) {
						var f = e[u];
						if (l ? "/" === f && "*" === e[u - 1] && (l = !1) : a ? a === f && (a = !1) : "/" === f && "*" === e[u + 1] ? l = !0 : "\"" === f || "'" === f ? a = f : "(" === f ? i++ : ")" === f && i--, !l && !1 === a && 0 === i) {
							if (":" === f && -1 === d) d = u;
							else if (";" === f || u === t - 1) {
								if (-1 !== d) {
									var h = nh(e.substring(c, d).trim());
									o.includes(h) || (";" !== f && u++, s += " " + e.substring(c, u).trim() + ";");
								}
								c = u + 1, d = -1;
							}
						}
					}
				}
				return n && (s += nf(n)), r && (s += nf(r, !0)), "" === (s = s.trim()) ? null : s;
			}
			return null == e ? null : String(e);
		}(t, r);
		et && a === e.getAttribute("style") || (null == a ? e.removeAttribute("style") : e.style.cssText = a), e[V] = t;
	} else r && (Array.isArray(r) ? (nv(e, n?.[0], r[0]), nv(e, n?.[1], r[1], "important")) : nv(e, n, r));
	return r;
}
var nb = Symbol("is custom element"), nm = Symbol("is html"), nx = J ? "link" : "LINK";
function nw(e, t, n, r) {
	var s, a = (s = e, s[H] ??= {
		[nb]: s.nodeName.includes("-"),
		[nm]: "http://www.w3.org/1999/xhtml" === s.namespaceURI
	});
	et && (a[t] = e.getAttribute(t), "src" === t || "srcset" === t || "href" === t && e.nodeName === nx) || a[t] !== (a[t] = n) && ("loading" === t && (e[W] = n), null == n ? e.removeAttribute(t) : "string" != typeof n && (function(e) {
		var t, n = e.getAttribute("is") || e.nodeName, r = nk.get(n);
		if (r) return r;
		nk.set(n, r = []);
		for (var s = e, a = Element.prototype; a !== s;) {
			for (var i in t = P(s)) t[i].set && "innerHTML" !== i && "textContent" !== i && "innerText" !== i && r.push(i);
			s = O(s);
		}
		return r;
	})(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
var nk = /* @__PURE__ */ new Map();
function ny(e) {
	var t = e.type;
	return "number" === t || "range" === t;
}
function n_(e) {
	return "" === e ? null : +e;
}
function n$(e, t) {
	return e === t || e?.[R] === t;
}
function nS(e = {}, t, n, r) {
	var s = eu.r, a = tj;
	return tu(4, () => {
		var i, l;
		return tg(() => {
			i = l, l = r?.() || [], tY(() => {
				!n$(n(...l), e) && (t(e, ...l), i && n$(n(...i), e) && t(null, ...i));
			});
		}), () => {
			let r = a;
			for (; r !== s && null !== r.parent && 33554432 & r.parent.f;) r = r.parent;
			let i = r.teardown;
			r.teardown = () => {
				l && n$(n(...l), e) && t(null, ...l), i?.();
			};
		};
	}), e;
}
function nE(e, t, n, r) {
	let s;
	var a, i, l = !ec || (2 & n) != 0, o = (8 & n) != 0, c = (16 & n) != 0, d = r, u = !0, f = void 0, h = () => c && l ? tH(f ??= eH(r)) : (u && (u = !1, d = c ? tY(r) : r), d);
	if (o) {
		var p = R in e || G in e;
		s = C(e, t)?.set ?? (p && t in e ? (n) => e[t] = n : void 0);
	}
	var v = !1;
	if (o ? [a, v] = function(e) {
		var t = e_;
		try {
			return e_ = !1, [e(), e_];
		} finally {
			e_ = t;
		}
	}(() => e[t]) : a = e[t], void 0 === a && void 0 !== r && (a = h(), s && (l && function() {
		throw Error("https://svelte.dev/e/props_invalid_value");
	}(), s(a))), i = l ? () => {
		var n = e[t];
		return void 0 === n ? h() : (u = !0, n);
	} : () => {
		var n = e[t];
		return void 0 !== n && (d = void 0), void 0 === n ? d : n;
	}, l && (4 & n) == 0) return i;
	if (s) {
		var g = e.$$legacy;
		return function(e, t) {
			return arguments.length > 0 ? ((!l || !t || g || v) && s(t ? i() : e), e) : i();
		};
	}
	var b = !1, m = ((1 & n) != 0 ? eH : eX)(() => (b = !1, i()));
	o && tH(m);
	var x = tj;
	return function(e, t) {
		if (arguments.length > 0) {
			let n = t ? tH(m) : l && o ? e4(e) : e;
			return e8(m, n), b = !0, void 0 !== d && (d = n), e;
		}
		return tq && b || (16384 & x.f) != 0 ? m.v : tH(m);
	};
}
var nA = class {
	#Q;
	#ee;
	constructor(e) {
		var t = /* @__PURE__ */ new Map(), n = (e, n) => {
			var r = e5(n, !1, !1);
			return t.set(e, r), r;
		};
		let r = new Proxy({
			...e.props || {},
			$$events: {}
		}, {
			get: (e, r) => tH(t.get(r) ?? n(r, Reflect.get(e, r))),
			has: (e, r) => r === G || (tH(t.get(r) ?? n(r, Reflect.get(e, r))), Reflect.has(e, r)),
			set: (e, r, s) => (e8(t.get(r) ?? n(r, s), s), Reflect.set(e, r, s))
		});
		for (let t of (this.#ee = (e.hydrate ? function(e, t) {
			e9(), t.intro = t.intro ?? !1;
			let n = t.target, r = et, s = h;
			try {
				for (var a = te(n); a && (8 !== a.nodeType || "[" !== a.data);) a = tt(a);
				if (!a) throw K;
				et = !0, en(a);
				let r = t7(e, {
					...t,
					anchor: a
				});
				return et = !1, r;
			} catch (r) {
				if (r instanceof Error && r.message.split("\n").some((e) => e.startsWith("https://svelte.dev/e/"))) throw r;
				return r !== K && console.warn("Failed to hydrate: ", r), !1 === t.recover && function() {
					throw Error("https://svelte.dev/e/hydration_failed");
				}(), e9(), ta(n), et = !1, t7(e, t);
			} finally {
				et = r, en(s);
			}
		} : function(e, t) {
			return t7(e, t);
		})(e.component, {
			target: e.target,
			anchor: e.anchor,
			props: r,
			context: e.context,
			intro: e.intro ?? !1,
			recover: e.recover,
			transformError: e.transformError
		}), e?.props?.$$host && !1 !== e.sync || eT(), this.#Q = r.$$events, Object.keys(this.#ee))) "$set" !== t && "$destroy" !== t && "$on" !== t && j(this, t, {
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
			e = this.#ee, (t = ne.get(e)) ? (ne.delete(e), t(void 0)) : Promise.resolve();
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
function nq(e, t, n, r) {
	let s = n[e]?.type;
	if (t = "Boolean" === s && "boolean" != typeof t ? null != t : t, !r || !n[e]) return t;
	if ("toAttribute" === r) switch (s) {
		case "Object":
		case "Array": return null == t ? null : JSON.stringify(t);
		case "Boolean": return t ? "" : null;
		case "Number": return null == t ? null : t;
		default: return t;
	}
	switch (s) {
		case "Object":
		case "Array": return t && JSON.parse(t);
		case "Boolean":
		default: return t;
		case "Number": return null != t ? +t : t;
	}
}
function nF(e, t, n, r, s, a) {
	let i = class extends x {
		constructor() {
			super(e, n, s), this.$$p_d = t;
		}
		static get observedAttributes() {
			return z(t).map((e) => (t[e].attribute || e).toLowerCase());
		}
	};
	return z(t).forEach((e) => {
		j(i.prototype, e, {
			get() {
				return this.$$c && e in this.$$c ? this.$$c[e] : this.$$d[e];
			},
			set(n) {
				n = nq(e, n, t), this.$$d[e] = n;
				var r = this.$$c;
				r && (C(r, e)?.get ? r[e] = n : r.$set({ [e]: n }));
			}
		});
	}), r.forEach((e) => {
		j(i.prototype, e, { get() {
			return this.$$c?.[e];
		} });
	}), a && (i = a(i)), e.element = i, i;
}
function nz(e) {
	var t;
	null === eu && function() {
		throw Error("https://svelte.dev/e/lifecycle_outside_component");
	}(), ec && null !== eu.l ? (t = eu.l, t.u ??= {
		a: [],
		b: [],
		m: []
	}).m.push(e) : tp(() => {
		let t = tY(e);
		if ("function" == typeof t) return t;
	});
}
"function" == typeof HTMLElement && (x = class extends HTMLElement {
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
			let r, s;
			if (await Promise.resolve(), !this.$$cn || this.$$c) return;
			function n(e) {
				return (t) => {
					let n = ti("slot");
					"default" !== e && (n.name = e), t6(t, n);
				};
			}
			let a = {}, i = (t = this, s = {}, t.childNodes.forEach((e) => {
				s[e.slot || "default"] = !0;
			}), s);
			for (let e of this.$$s) e in i && ("default" !== e || this.$$d.children ? a[e] = n(e) : (this.$$d.children = n(e), a.default = !0));
			for (let e of this.attributes) {
				let t = this.$$g_p(e.name);
				t in this.$$d || (this.$$d[t] = nq(t, e.value, this.$$p_d, "toProp"));
			}
			for (let e in this.$$p_d) e in this.$$d || void 0 === this[e] || (this.$$d[e] = this[e], delete this[e]);
			for (let t in this.$$c = new nA({
				component: this.$$ctor,
				target: this.$$shadowRoot || this,
				props: {
					...this.$$d,
					$$slots: a,
					$$host: this
				}
			}), this.$$me = (e = () => {
				tg(() => {
					for (let e of (this.$$r = !0, z(this.$$c))) {
						if (!this.$$p_d[e]?.reflect) continue;
						this.$$d[e] = this.$$c[e];
						let t = nq(e, this.$$d[e], this.$$p_d, "toAttribute");
						null == t ? this.removeAttribute(this.$$p_d[e].attribute || e) : this.setAttribute(this.$$p_d[e].attribute || e, t);
					}
					this.$$r = !1;
				});
			}, eO.ensure(), r = tu(524352, e), () => {
				ty(r);
			}), this.$$l) for (let e of this.$$l[t]) {
				let n = this.$$c.$on(t, e);
				this.$$l_u.set(e, n);
			}
			this.$$l = {};
		}
	}
	attributeChangedCallback(e, t, n) {
		this.$$r || (e = this.$$g_p(e), this.$$d[e] = nq(e, n, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
	}
	disconnectedCallback() {
		this.$$cn = !1, Promise.resolve().then(() => {
			!this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
		});
	}
	$$g_p(e) {
		return z(this.$$p_d).find((t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e) || e;
	}
}), "u" > typeof window && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
var nj = {}, nC = function(e, t, n) {
	let r = Promise.resolve();
	if (t && t.length > 0) {
		let e = document.getElementsByTagName("link"), s = document.querySelector("meta[property=csp-nonce]"), a = s?.nonce || s?.getAttribute("nonce");
		r = Promise.all(t.map((t) => {
			if ((t = new URL(t, n).href) in nj) return;
			nj[t] = !0;
			let r = t.endsWith(".css");
			if (n) for (let n = e.length - 1; n >= 0; n--) {
				let s = e[n];
				if (s.href === t && (!r || "stylesheet" === s.rel)) return;
			}
			else if (document.querySelector(`link[href="${t}"]${r ? "[rel=\"stylesheet\"]" : ""}`)) return;
			let s = document.createElement("link");
			if (s.rel = r ? "stylesheet" : "modulepreload", r || (s.as = "script"), s.crossOrigin = "", s.href = t, a && s.setAttribute("nonce", a), document.head.appendChild(s), r) return new Promise((e, n) => {
				s.addEventListener("load", e), s.addEventListener("error", () => n(Error(`Unable to preload CSS for ${t}`)));
			});
		}).map((e) => Promise.resolve(e).then((e) => ({
			status: "fulfilled",
			value: e
		}), (e) => ({
			status: "rejected",
			reason: e
		}))));
	}
	function s(e) {
		let t = new Event("vite:preloadError", { cancelable: !0 });
		if (t.payload = e, window.dispatchEvent(t), !t.defaultPrevented) throw e;
	}
	return r.then((t) => {
		for (let e of t || []) "rejected" === e.status && s(e.reason);
		return e().catch(s);
	});
}, nP = [[
	"Scroll",
	"自定义虚拟滚动条",
	() => nC(() => import("./Scroll-HQiVx8yJ.js"), [], import.meta.url)
], [
	"Wait",
	"加载动画与表单提交遮罩",
	() => nC(() => import("./Wait-CMACtffg.js"), [], import.meta.url)
]], nL = t8("<button> </button>"), nM = {
	hash: "svelte-qgmc0f",
	code: "button.svelte-qgmc0f {display:inline-flex;align-items:center;justify-content:center;gap:4px;padding:0 10px;height:28px;box-sizing:border-box;border-radius:6px;font-size:12px;font-weight:500;border:none;background:rgba(0,113,227,0.078);color:#0071e3;cursor:pointer;transition:all 0.2s cubic-bezier(0.4, 0, 0.2, 1);outline:none;user-select:none;}button.svelte-qgmc0f::before {content:'';width:12px;height:12px;background:url(\"/svg/copy.svg\") no-repeat center/contain;filter:invert(30%) sepia(87%) saturate(1915%) hue-rotate(192deg) brightness(97%) contrast(102%);transition:filter 0.2s ease;}button.svelte-qgmc0f:hover {background:rgba(0,113,227,0.149);}button.svelte-qgmc0f:active {transform:scale(0.97);background:rgba(0,113,227,0.22);}button.copied.svelte-qgmc0f {background:#34c759;color:#fff;}button.copied.svelte-qgmc0f::before {background-image:url(\"/svg/ok.svg\");filter:invert(100%);}"
};
function nO(e, t) {
	ef(t, !0), nc(e, nM);
	let n = nE(t, "text", 7, ""), r = e2(!1);
	var s = nL(), a = tn(s, !0);
	return es(s), tb(() => {
		np(s, 1, nd(tH(r) ? "copied" : ""), "svelte-qgmc0f"), t4(a, tH(r) ? "已复制" : "复制");
	}), tK("click", s, () => {
		navigator.clipboard.writeText(n()), e8(r, !0), setTimeout(() => {
			e8(r, !1);
		}, 1500);
	}), t6(e, s), eh({
		get text() {
			return n();
		},
		set text($$value = "") {
			n($$value), eT();
		}
	});
}
tQ(["click"]), nF(nO, { text: {} }, [], [], { mode: "open" });
var nT = t8("<tr class=\"svelte-s15vff\"><td class=\"svelte-s15vff\"><b class=\"svelte-s15vff\"><code class=\"svelte-s15vff\"> </code><!></b></td><td class=\"svelte-s15vff\"><b class=\"svelte-s15vff\"><img class=\"svelte-s15vff\"/></b></td><td class=\"svelte-s15vff\"><code class=\"svelte-s15vff\"> </code></td></tr>"), nB = t8("<article class=\"LG svelte-s15vff\"><h2 class=\"svelte-s15vff\">样式变量</h2><table class=\"svelte-s15vff\"><thead><tr class=\"svelte-s15vff\"><th class=\"svelte-s15vff\">变量名</th><th class=\"svelte-s15vff\">预览</th><th class=\"svelte-s15vff\">资源文件</th></tr></thead><tbody></tbody></table></article>"), nD = {
	hash: "svelte-s15vff",
	code: "article.svelte-s15vff {margin-top:var(--gap);border-radius:24px;padding:24px 32px;box-sizing:border-box;line-height:normal;}article.svelte-s15vff h2:where(.svelte-s15vff) {font-size:15px;font-weight:600;color:#1d1d1f;margin:0 0 16px;}article.svelte-s15vff table:where(.svelte-s15vff) {width:100%;border-collapse:collapse;text-align:left;font-size:13px;}article.svelte-s15vff table:where(.svelte-s15vff) tr:where(.svelte-s15vff) {border-bottom:1px solid rgba(0,0,0,0.039);}article.svelte-s15vff table:where(.svelte-s15vff) tr:where(.svelte-s15vff):last-child {border-bottom:0;}article.svelte-s15vff table:where(.svelte-s15vff) th:where(.svelte-s15vff),\narticle.svelte-s15vff table:where(.svelte-s15vff) td:where(.svelte-s15vff) {padding:12px 16px;vertical-align:middle;}article.svelte-s15vff table:where(.svelte-s15vff) th:where(.svelte-s15vff):first-child,\narticle.svelte-s15vff table:where(.svelte-s15vff) td:where(.svelte-s15vff):first-child {padding-left:0;}article.svelte-s15vff table:where(.svelte-s15vff) th:where(.svelte-s15vff):last-child,\narticle.svelte-s15vff table:where(.svelte-s15vff) td:where(.svelte-s15vff):last-child {padding-right:0;}article.svelte-s15vff table:where(.svelte-s15vff) th:where(.svelte-s15vff) {font-weight:600;color:#86868b;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;}article.svelte-s15vff table:where(.svelte-s15vff) th:where(.svelte-s15vff):nth-child(2) {text-align:center;}article.svelte-s15vff table:where(.svelte-s15vff) td:where(.svelte-s15vff):nth-child(1) {font-weight:500;color:#0071e3;width:45%;}article.svelte-s15vff table:where(.svelte-s15vff) td:where(.svelte-s15vff):nth-child(1) b:where(.svelte-s15vff) {display:flex;align-items:center;gap:8px;white-space:nowrap;}article.svelte-s15vff table:where(.svelte-s15vff) td:where(.svelte-s15vff):nth-child(1) b:where(.svelte-s15vff) code:where(.svelte-s15vff) {font-family:source-code-pro, Menlo, Monaco, Consolas, monospace;font-size:12px;color:#0071e3;padding:3px 8px;border-radius:6px;white-space:nowrap;}article.svelte-s15vff table:where(.svelte-s15vff) td:where(.svelte-s15vff):nth-child(2) {width:20%;text-align:center;}article.svelte-s15vff table:where(.svelte-s15vff) td:where(.svelte-s15vff):nth-child(2) b:where(.svelte-s15vff) {display:inline-flex;align-items:center;justify-content:center;width:48px;height:48px;border-radius:8px;border:1px solid rgba(0,0,0,0.031);background-image:linear-gradient(45deg, #f0f0f0 25%, transparent 25%, transparent 75%, #f0f0f0 75%, #f0f0f0), linear-gradient(45deg, #f0f0f0 25%, #fff 25%, #fff 75%, #f0f0f0 75%, #f0f0f0);background-size:12px 12px;background-position:0 0, 6px 6px;box-shadow:0 2px 8px rgba(0,0,0,0.039);overflow:hidden;user-select:none;}article.svelte-s15vff table:where(.svelte-s15vff) td:where(.svelte-s15vff):nth-child(2) b:where(.svelte-s15vff) img:where(.svelte-s15vff) {max-width:32px;max-height:32px;object-fit:contain;transition:transform 0.2s ease;user-select:none;pointer-events:none;}article.svelte-s15vff table:where(.svelte-s15vff) td:where(.svelte-s15vff):nth-child(2) b:where(.svelte-s15vff):hover img:where(.svelte-s15vff) {transform:scale(1.15);}article.svelte-s15vff table:where(.svelte-s15vff) td:where(.svelte-s15vff):nth-child(3) {width:35%;}article.svelte-s15vff table:where(.svelte-s15vff) td:where(.svelte-s15vff):nth-child(3) code:where(.svelte-s15vff) {font-family:source-code-pro, Menlo, Monaco, Consolas, monospace;font-size:12px;color:#515154;padding:3px 8px;border-radius:6px;border:1px solid rgba(0,0,0,0.012);white-space:nowrap;}\n@media (max-width: 767px) {article.svelte-s15vff {border-radius:16px;padding:16px 20px;overflow-x:auto;}article.svelte-s15vff table:where(.svelte-s15vff) {font-size:12px;}article.svelte-s15vff table:where(.svelte-s15vff) th:where(.svelte-s15vff),\n  article.svelte-s15vff table:where(.svelte-s15vff) td:where(.svelte-s15vff) {padding:8px 12px;}article.svelte-s15vff table:where(.svelte-s15vff) th:where(.svelte-s15vff):first-child,\n  article.svelte-s15vff table:where(.svelte-s15vff) td:where(.svelte-s15vff):first-child {padding-left:0;}article.svelte-s15vff table:where(.svelte-s15vff) th:where(.svelte-s15vff):last-child,\n  article.svelte-s15vff table:where(.svelte-s15vff) td:where(.svelte-s15vff):last-child {padding-right:0;}\n}"
};
function nN(e, t) {
	ef(t, !0), nc(e, nD);
	let n = nE(t, "svgs", 23, () => []);
	var r = t3(), s = tr(r), a = (e) => {
		var t = nB(), r = ts(tn(t)), s = ts(tn(r));
		na(s, 21, n, nr, (e, t) => {
			var n = eV(() => N(tH(t), 3));
			let r = () => tH(n)[0];
			var s = nT(), a = tn(s), i = tn(a), l = tn(i), o = tn(l, !0);
			es(l), nO(ts(l), { get text() {
				return r();
			} }), es(i), es(a);
			var c = ts(a), d = tn(c), u = tn(d);
			es(d), es(c);
			var f = ts(c), h = tn(f), p = tn(h, !0);
			es(h), es(f), es(s), tb(() => {
				t4(o, r()), nw(u, "src", `/lib/svg/${tH(n)[1] ?? ""}.svg`), nw(u, "alt", r()), t4(p, tH(n)[2]);
			}), t6(e, s);
		}), es(s), es(r), es(t), t6(e, t);
	};
	return nn(s, (e) => {
		n().length > 0 && e(a);
	}), t6(e, r), eh({
		get svgs() {
			return n();
		},
		set svgs($$value = []) {
			n($$value), eT();
		}
	});
}
nF(nN, { svgs: {} }, [], [], { mode: "open" });
var nR = (e) => {
	switch (e) {
		case 1: return 3;
		case 2: return 4;
		case 3: return 5;
		case 4: return 6;
		case 5: return 7;
		default: return 8;
	}
};
function nG(e) {
	0 !== e.text.length && (console.assert(e.len > 0, "Never adding text to root"), e.renderer.add_text(e.renderer.data, e.text), e.text = "");
}
function nW(e) {
	console.assert(e.len > 0, "No nodes to end"), e.len -= 1, e.token = e.tokens[e.len], e.renderer.end_token(e.renderer.data);
}
function nI(e, t) {
	(24 === e.tokens[e.len] || 23 === e.tokens[e.len]) && 25 !== t && nW(e), e.len += 1, e.tokens[e.len] = t, e.token = t, e.renderer.add_token(e.renderer.data, t);
}
function nH(e, t) {
	for (e.fence_start = 0; e.len > t;) nW(e);
}
function nY(e, t) {
	let n = 0;
	for (let r = 0; r <= e.len && !((t -= e.spaces[r]) < 0); r += 1) switch (e.tokens[r]) {
		case 9:
		case 10:
		case 20:
		case 25: n = r;
	}
	for (; e.len > n;) nW(e);
	return t;
}
function nV(e, t) {
	let n = -1, r = -1;
	for (let s = e.blockquote_idx + 1; s <= e.len; s += 1) if (25 === e.tokens[s]) {
		if (e.indent_len < e.spaces[s]) {
			r = -1;
			break;
		}
		r = s;
	} else e.tokens[s] === t && (n = s);
	return -1 === r ? -1 === n ? (nH(e, e.blockquote_idx), nI(e, t), !0) : (nH(e, n), !1) : (nH(e, r), nI(e, t), !0);
}
function nX(e, t) {
	nI(e, 25), e.spaces[e.len] = e.indent_len + t, nU(e), e.token = 103;
}
function nU(e) {
	e.indent = "", e.indent_len = 0, e.pending = "";
}
function nZ(e) {
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
function nJ(e, t) {
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
			let t = nY(e, e.indent_len);
			e.indent_len = 0, e.token = e.tokens[e.len], t > 0 && nJ(e, " ".repeat(t));
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
							nW(e), nU(e), e.pending = r;
							continue;
						}
						nH(e, e.blockquote_idx), nU(e), e.blockquote_idx = 0, e.fence_start = 0, e.pending = r;
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
								nY(e, e.indent_len), nI(e, nR(e.pending.length)), nU(e);
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
						-1 === t ? (nH(e, e.blockquote_idx), e.blockquote_idx += 1, e.fence_start = 0, nI(e, 20)) : e.blockquote_idx = t, nU(e), e.pending = r;
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
									nY(e, e.indent_len), e.renderer.add_token(e.renderer.data, 22), e.renderer.end_token(e.renderer.data), nU(e), e.hr_chars = 0;
									continue;
							}
							e.hr_chars = 0;
						}
						if ("_" !== e.pending[0] && " " === e.pending[1]) {
							nV(e, 23), nX(e, 2), nJ(e, t.slice(2));
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
								e.pending.length === e.fence_start ? (e.pending = t, e.fence_start = t.length) : (nI(e, 2), nU(e), e.fence_start = 0, nJ(e, t));
								continue;
							case "\n":
								nY(e, e.indent_len), nI(e, 10), e.pending.length > e.fence_start && e.renderer.set_attr(e.renderer.data, 4, e.pending.slice(e.fence_start)), nU(e), e.token = 101;
								continue;
							default:
								e.pending = t;
								continue;
						}
					case "+":
						if (" " !== r) break;
						nV(e, 23), nX(e, 2);
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
							nV(e, 24) && "1." !== e.pending && e.renderer.set_attr(e.renderer.data, 16, e.pending.slice(0, -1)), nX(e, e.pending.length + 1);
							continue;
						}
						{
							let n = r.charCodeAt(0);
							if (46 === n || nZ(n)) {
								e.pending = t;
								continue;
							}
						}
						break;
					case "|":
						nH(e, e.blockquote_idx), nI(e, 27), nI(e, 28), e.pending = "", nJ(e, r);
						continue;
				}
				let s = t;
				if (21 === e.token) e.token = e.tokens[e.len], e.renderer.add_token(e.renderer.data, 21), e.renderer.end_token(e.renderer.data);
				else if (e.indent_len >= 4) {
					let n = 0;
					for (; n < 4; n += 1) if ("	" === e.indent[n]) {
						n += 1;
						break;
					}
					s = e.indent.slice(n) + t, nI(e, 9);
				} else nI(e, 2);
				nU(e), nJ(e, s);
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
					default: nW(e), e.table_state = 0;
				}
				else switch (e.pending) {
					case "|":
						nI(e, 28), e.pending = "", nJ(e, r);
						continue;
					case "\n":
						nW(e), e.pending = "", e.table_state = 0, nJ(e, r);
						continue;
				}
				break;
			case 28:
				switch (e.pending) {
					case "": break;
					case "|":
						nI(e, 29), nW(e), e.pending = "", nJ(e, r);
						continue;
					case "\n":
						nW(e), e.table_state = Math.min(e.table_state + 1, 2), e.pending = "", nJ(e, r);
						continue;
					default:
						nI(e, 29), nJ(e, r);
						continue;
				}
				break;
			case 29:
				if ("|" === e.pending) {
					nG(e), nW(e), e.pending = "", nJ(e, r);
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
					0 !== e.pending.length ? (nG(e), nW(e), e.pending = r) : e.text += r;
					continue;
			}
			case 10:
				switch (r) {
					case "`":
						e.pending = t;
						continue;
					case "\n":
						if (t.length === e.fence_start + e.fence_end + 1) {
							nG(e), nW(e), e.pending = "", e.fence_start = 0, e.fence_end = 0, e.token = 101;
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
					t.length === e.fence_start + Number(" " === e.pending[0]) ? (nG(e), nW(e), e.pending = "", e.fence_start = 0) : e.pending = t;
					continue;
				case "\n":
					e.text += e.pending, e.pending = "", e.token = 21, e.blockquote_idx = 0, nG(e);
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
				e.token = e.tokens[e.len], e.pending = "", nJ(e, t);
				continue;
			case 14:
			case 15: {
				let t = "*", n = 12;
				if (15 === e.token && (t = "_", n = 13), t === e.pending) {
					if (nG(e), t === r) {
						nW(e), e.pending = "";
						continue;
					}
					nI(e, n), e.pending = r;
					continue;
				}
				break;
			}
			case 12:
			case 13: {
				let n = "*", s = 14;
				switch (13 === e.token && (n = "_", s = 15), e.pending) {
					case n:
						n === r ? e.tokens[e.len - 1] === s ? e.pending = t : (nG(e), nI(e, s), e.pending = "") : (nG(e), nW(e), e.pending = r);
						continue;
					case n + n:
						let a = e.token;
						nG(e), nW(e), nW(e), n !== r ? (nI(e, a), e.pending = r) : e.pending = "";
						continue;
				}
				break;
			}
			case 16:
				if ("~~" === t) {
					nG(e), nW(e), e.pending = "";
					continue;
				}
				break;
			case 105:
				"\n" === r ? (nG(e), nI(e, 30), e.pending = "") : (e.token = e.tokens[e.len], "\\" === e.pending[0] ? e.text += "[" : e.text += "$$", e.pending = "", nJ(e, r));
				continue;
			case 30:
				if ("\\]" === t || "$$" === t) {
					nG(e), nW(e), e.pending = "";
					continue;
				}
				break;
			case 31:
				if ("\\)" === t || "$" === e.pending[0]) {
					nG(e), nW(e), ")" === r ? e.pending = "" : e.pending = r;
					continue;
				}
				break;
			case 102:
				"http://" === t || "https://" === t ? (nG(e), nI(e, 18), e.pending = t, e.text = t) : "http:/"[e.pending.length] === r || "https:/"[e.pending.length] === r ? e.pending = t : (e.token = e.tokens[e.len], nJ(e, r));
				continue;
			case 17:
			case 19:
				if ("]" === e.pending) {
					nG(e), "(" === r ? e.pending = t : (nW(e), e.pending = r);
					continue;
				}
				if ("]" === e.pending[0] && "(" === e.pending[1]) {
					if (")" === r) {
						let t = 17 === e.token ? 1 : 2, n = e.pending.slice(2);
						e.renderer.set_attr(e.renderer.data, t, n), nW(e), e.pending = "";
					} else e.pending += r;
					continue;
				}
				break;
			case 18:
				" " === r || "\n" === r || "\\" === r ? (e.renderer.set_attr(e.renderer.data, 1, e.pending), nG(e), nW(e), e.pending = r) : (e.text += r, e.pending = t);
				continue;
			case 104:
				if (t.startsWith("<br")) {
					if (3 === t.length || " " === r || "/" === r && (4 === t.length || " " === e.pending[e.pending.length - 1])) {
						e.pending = t;
						continue;
					}
					if (">" === r) {
						nG(e), e.token = e.tokens[e.len], e.renderer.add_token(e.renderer.data, 21), e.renderer.end_token(e.renderer.data), e.pending = "";
						continue;
					}
				}
				e.token = e.tokens[e.len], e.text += "<", e.pending = e.pending.slice(1), nJ(e, r);
				continue;
		}
		switch (e.pending[0]) {
			case "\\":
				if (19 === e.token || 30 === e.token || 31 === e.token) break;
				switch (r) {
					case "(":
						nG(e), nI(e, 31), e.pending = "";
						continue;
					case "[":
						e.token = 105, e.pending = t;
						continue;
					case "\n":
						e.pending = r;
						continue;
					default:
						let a = r.charCodeAt(0);
						e.pending = "", e.text += nZ(a) || a >= 65 && a <= 90 || a >= 97 && a <= 122 ? t : r;
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
						nG(e), nH(e, e.blockquote_idx), e.blockquote_idx = 0, e.pending = r;
						continue;
					default:
						nG(e), e.pending = r, e.token = 21, e.blockquote_idx = 0;
						continue;
				}
				break;
			case "<":
				if (19 !== e.token && 30 !== e.token && 31 !== e.token) {
					nG(e), e.pending = t, e.token = 104;
					continue;
				}
				break;
			case "`":
				if (19 === e.token) break;
				"`" === r ? (e.fence_start += 1, e.pending = t) : (e.fence_start += 1, nG(e), nI(e, 11), e.text = " " === r || "\n" === r ? "" : r, e.pending = "");
				continue;
			case "_":
			case "*": {
				if (19 === e.token || 30 === e.token || 31 === e.token || 14 === e.token) break;
				let n = 12, s = 14, a = e.pending[0];
				if ("_" === a && (n = 13, s = 15), 1 === e.pending.length) {
					if (a === r) {
						e.pending = t;
						continue;
					}
					if (" " !== r && "\n" !== r) {
						nG(e), nI(e, n), e.pending = r;
						continue;
					}
				} else {
					if (a === r) {
						nG(e), nI(e, s), nI(e, n), e.pending = "";
						continue;
					}
					if (" " !== r && "\n" !== r) {
						nG(e), nI(e, s), e.pending = r;
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
						nG(e), nI(e, 16), e.pending = r;
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
					if (nZ(n = r.charCodeAt(0)) || function(e) {
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
						nG(e), nI(e, 31), e.pending = r;
						continue;
					}
				}
				break;
			case "[":
				if (19 !== e.token && 17 !== e.token && 30 !== e.token && 31 !== e.token && "]" !== r) {
					nG(e), nI(e, 17), e.pending = r;
					continue;
				}
				break;
			case "!":
				if (19 !== e.token && "[" === r) {
					nG(e), nI(e, 19), e.pending = "";
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
	nG(e);
}
function nK(e, t) {
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
			let s = n = document.createElement("input");
			s.type = "checkbox", s.disabled = !0;
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
function nQ(e) {
	e.index -= 1;
}
function n0(e, t) {
	e.nodes[e.index].appendChild(document.createTextNode(t));
}
function n1(e, t, n) {
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
var n2 = (s = null != (n = (e = (e, t) => {
	var n, r, s = function(e) {
		var t = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, n = 0, r = {}, s = {
			manual: e.Prism && e.Prism.manual,
			disableWorkerMessageHandler: e.Prism && e.Prism.disableWorkerMessageHandler,
			util: {
				encode: function e(t) {
					return t instanceof a ? new a(t.type, e(t.content), t.alias) : Array.isArray(t) ? t.map(e) : t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
				},
				type: function(e) {
					return Object.prototype.toString.call(e).slice(8, -1);
				},
				objId: function(e) {
					return e.__id || Object.defineProperty(e, "__id", { value: ++n }), e.__id;
				},
				clone: function e(t, n) {
					var r, a;
					switch (n = n || {}, s.util.type(t)) {
						case "Object":
							if (n[a = s.util.objId(t)]) return n[a];
							for (var i in r = {}, n[a] = r, t) t.hasOwnProperty(i) && (r[i] = e(t[i], n));
							return r;
						case "Array":
							if (n[a = s.util.objId(t)]) return n[a];
							return r = [], n[a] = r, t.forEach(function(t, s) {
								r[s] = e(t, n);
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
						var s = e.classList;
						if (s.contains(t)) return !0;
						if (s.contains(r)) return !1;
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
					var n = s.util.clone(s.languages[e]);
					for (var r in t) n[r] = t[r];
					return n;
				},
				insertBefore: function(e, t, n, r) {
					var a = (r = r || s.languages)[e], i = {};
					for (var l in a) if (a.hasOwnProperty(l)) {
						if (l == t) for (var o in n) n.hasOwnProperty(o) && (i[o] = n[o]);
						n.hasOwnProperty(l) || (i[l] = a[l]);
					}
					var c = r[e];
					return r[e] = i, s.languages.DFS(s.languages, function(t, n) {
						n === c && t != e && (this[t] = i);
					}), i;
				},
				DFS: function e(t, n, r, a) {
					a = a || {};
					var i = s.util.objId;
					for (var l in t) if (t.hasOwnProperty(l)) {
						n.call(t, l, t[l], r || l);
						var o = t[l], c = s.util.type(o);
						"Object" !== c || a[i(o)] ? "Array" !== c || a[i(o)] || (a[i(o)] = !0, e(o, n, l, a)) : (a[i(o)] = !0, e(o, n, null, a));
					}
				}
			},
			plugins: {},
			highlightAll: function(e, t) {
				s.highlightAllUnder(document, e, t);
			},
			highlightAllUnder: function(e, t, n) {
				var r = {
					callback: n,
					container: e,
					selector: "code[class*=\"language-\"], [class*=\"language-\"] code, code[class*=\"lang-\"], [class*=\"lang-\"] code"
				};
				s.hooks.run("before-highlightall", r), r.elements = Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)), s.hooks.run("before-all-elements-highlight", r);
				for (var a, i = 0; a = r.elements[i++];) s.highlightElement(a, !0 === t, r.callback);
			},
			highlightElement: function(t, n, r) {
				var a = s.util.getLanguage(t), i = s.languages[a];
				s.util.setLanguage(t, a);
				var l = t.parentElement;
				l && "pre" === l.nodeName.toLowerCase() && s.util.setLanguage(l, a);
				var o = {
					element: t,
					language: a,
					grammar: i,
					code: t.textContent
				};
				function c(e) {
					o.highlightedCode = e, s.hooks.run("before-insert", o), o.element.innerHTML = o.highlightedCode, s.hooks.run("after-highlight", o), s.hooks.run("complete", o), r && r.call(o.element);
				}
				if (s.hooks.run("before-sanity-check", o), (l = o.element.parentElement) && "pre" === l.nodeName.toLowerCase() && !l.hasAttribute("tabindex") && l.setAttribute("tabindex", "0"), !o.code) {
					s.hooks.run("complete", o), r && r.call(o.element);
					return;
				}
				if (s.hooks.run("before-highlight", o), !o.grammar) return void c(s.util.encode(o.code));
				if (n && e.Worker) {
					var d = new Worker(s.filename);
					d.onmessage = function(e) {
						c(e.data);
					}, d.postMessage(JSON.stringify({
						language: o.language,
						code: o.code,
						immediateClose: !0
					}));
				} else c(s.highlight(o.code, o.grammar, o.language));
			},
			highlight: function(e, t, n) {
				var r = {
					code: e,
					grammar: t,
					language: n
				};
				if (s.hooks.run("before-tokenize", r), !r.grammar) throw Error("The language \"" + r.language + "\" has no grammar.");
				return r.tokens = s.tokenize(r.code, r.grammar), s.hooks.run("after-tokenize", r), a.stringify(s.util.encode(r.tokens), r.language);
			},
			tokenize: function(e, t) {
				var n = t.rest;
				if (n) {
					for (var r in n) t[r] = n[r];
					delete t.rest;
				}
				var c = new l();
				return o(c, c.head, e), function e(t, n, r, l, c, d) {
					for (var u in r) if (r.hasOwnProperty(u) && r[u]) {
						var f = r[u];
						f = Array.isArray(f) ? f : [f];
						for (var h = 0; h < f.length; ++h) {
							if (d && d.cause == u + "," + h) return;
							var p = f[h], v = p.inside, g = !!p.lookbehind, b = !!p.greedy, m = p.alias;
							if (b && !p.pattern.global) {
								var x = p.pattern.toString().match(/[imsuy]*$/)[0];
								p.pattern = RegExp(p.pattern.source, x + "g");
							}
							for (var w = p.pattern || p, k = l.next, y = c; k !== n.tail && (!d || !(y >= d.reach)); y += k.value.length, k = k.next) {
								var _, $ = k.value;
								if (n.length > t.length) return;
								if (!($ instanceof a)) {
									var S = 1;
									if (b) {
										if (!(_ = i(w, y, t, g)) || _.index >= t.length) break;
										var E = _.index, A = _.index + _[0].length, q = y;
										for (q += k.value.length; E >= q;) q += (k = k.next).value.length;
										if (q -= k.value.length, y = q, k.value instanceof a) continue;
										for (var F = k; F !== n.tail && (q < A || "string" == typeof F.value); F = F.next) S++, q += F.value.length;
										S--, $ = t.slice(y, q), _.index -= y;
									} else if (!(_ = i(w, 0, $, g))) continue;
									var E = _.index, z = _[0], j = $.slice(0, E), C = $.slice(E + z.length), P = y + $.length;
									d && P > d.reach && (d.reach = P);
									var L = k.prev;
									if (j && (L = o(n, L, j), y += j.length), function(e, t, n) {
										for (var r = t.next, s = 0; s < n && r !== e.tail; s++) r = r.next;
										t.next = r, r.prev = t, e.length -= s;
									}(n, L, S), k = o(n, L, new a(u, v ? s.tokenize(z, v) : z, m, z)), C && o(n, k, C), S > 1) {
										var M = {
											cause: u + "," + h,
											reach: P
										};
										e(t, n, r, k.prev, y, M), d && M.reach > d.reach && (d.reach = M.reach);
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
					var n = s.hooks.all;
					n[e] = n[e] || [], n[e].push(t);
				},
				run: function(e, t) {
					var n = s.hooks.all[e];
					if (n && n.length) for (var r, a = 0; r = n[a++];) r(t);
				}
			},
			Token: a
		};
		function a(e, t, n, r) {
			this.type = e, this.content = t, this.alias = n, this.length = 0 | (r || "").length;
		}
		function i(e, t, n, r) {
			e.lastIndex = t;
			var s = e.exec(n);
			if (s && r && s[1]) {
				var a = s[1].length;
				s.index += a, s[0] = s[0].slice(a);
			}
			return s;
		}
		function l() {
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
			var r = t.next, s = {
				value: n,
				prev: t,
				next: r
			};
			return t.next = s, r.prev = s, e.length++, s;
		}
		if (e.Prism = s, a.stringify = function e(t, n) {
			if ("string" == typeof t) return t;
			if (Array.isArray(t)) {
				var r = "";
				return t.forEach(function(t) {
					r += e(t, n);
				}), r;
			}
			var a = {
				type: t.type,
				content: e(t.content, n),
				tag: "span",
				classes: ["token", t.type],
				attributes: {},
				language: n
			}, i = t.alias;
			i && (Array.isArray(i) ? Array.prototype.push.apply(a.classes, i) : a.classes.push(i)), s.hooks.run("wrap", a);
			var l = "";
			for (var o in a.attributes) l += " " + o + "=\"" + (a.attributes[o] || "").replace(/"/g, "&quot;") + "\"";
			return "<" + a.tag + " class=\"" + a.classes.join(" ") + "\"" + l + ">" + a.content + "</" + a.tag + ">";
		}, !e.document) return !e.addEventListener || s.disableWorkerMessageHandler || e.addEventListener("message", function(t) {
			var n = JSON.parse(t.data), r = n.language, a = n.code, i = n.immediateClose;
			e.postMessage(s.highlight(a, s.languages[r], r)), i && e.close();
		}, !1), s;
		var c = s.util.currentScript();
		function d() {
			s.manual || s.highlightAll();
		}
		if (c && (s.filename = c.src, c.hasAttribute("data-manual") && (s.manual = !0)), !s.manual) {
			var u = document.readyState;
			"loading" === u || "interactive" === u && c && c.defer ? document.addEventListener("DOMContentLoaded", d) : window.requestAnimationFrame ? window.requestAnimationFrame(d) : window.setTimeout(d, 16);
		}
		return s;
	}("u" > typeof window ? window : "u" > typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {});
	void 0 !== t && t.exports && (t.exports = s), "u" > typeof global && (global.Prism = s), s.languages.markup = {
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
	}, s.languages.markup.tag.inside["attr-value"].inside.entity = s.languages.markup.entity, s.languages.markup.doctype.inside["internal-subset"].inside = s.languages.markup, s.hooks.add("wrap", function(e) {
		"entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"));
	}), Object.defineProperty(s.languages.markup.tag, "addInlined", { value: function(e, t) {
		var n = {};
		n["language-" + t] = {
			pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
			lookbehind: !0,
			inside: s.languages[t]
		}, n.cdata = /^<!\[CDATA\[|\]\]>$/i;
		var r = { "included-cdata": {
			pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
			inside: n
		} };
		r["language-" + t] = {
			pattern: /[\s\S]+/,
			inside: s.languages[t]
		};
		var a = {};
		a[e] = {
			pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
				return e;
			}), "i"),
			lookbehind: !0,
			greedy: !0,
			inside: r
		}, s.languages.insertBefore("markup", "cdata", a);
	} }), Object.defineProperty(s.languages.markup.tag, "addAttribute", { value: function(e, t) {
		s.languages.markup.tag.inside["special-attr"].push({
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
							inside: s.languages[t]
						},
						punctuation: [{
							pattern: /^=/,
							alias: "attr-equals"
						}, /"|'/]
					}
				}
			}
		});
	} }), s.languages.html = s.languages.markup, s.languages.mathml = s.languages.markup, s.languages.svg = s.languages.markup, s.languages.xml = s.languages.extend("markup", {}), s.languages.ssml = s.languages.xml, s.languages.atom = s.languages.xml, s.languages.rss = s.languages.xml, n = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/, s.languages.css = {
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
	}, s.languages.css.atrule.inside.rest = s.languages.css, (r = s.languages.markup) && (r.tag.addInlined("style", "css"), r.tag.addAttribute("style", "css")), s.languages.clike = {
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
	}, s.languages.javascript = s.languages.extend("clike", {
		"class-name": [s.languages.clike["class-name"], {
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
	}), s.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, s.languages.insertBefore("javascript", "keyword", {
		regex: {
			pattern: RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),
			lookbehind: !0,
			greedy: !0,
			inside: {
				"regex-source": {
					pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
					lookbehind: !0,
					alias: "language-regex",
					inside: s.languages.regex
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
				inside: s.languages.javascript
			},
			{
				pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
				lookbehind: !0,
				inside: s.languages.javascript
			},
			{
				pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
				lookbehind: !0,
				inside: s.languages.javascript
			},
			{
				pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
				lookbehind: !0,
				inside: s.languages.javascript
			}
		],
		constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
	}), s.languages.insertBefore("javascript", "string", {
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
						rest: s.languages.javascript
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
	}), s.languages.insertBefore("javascript", "operator", { "literal-property": {
		pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
		lookbehind: !0,
		alias: "property"
	} }), s.languages.markup && (s.languages.markup.tag.addInlined("script", "javascript"), s.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript")), s.languages.js = s.languages.javascript, function() {
		if (void 0 !== s && "u" > typeof document) {
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
			}, t = "data-src-status", n = "loading", r = "loaded", a = "pre[data-src]:not([" + t + "=\"" + r + "\"]):not([" + t + "=\"" + n + "\"])";
			s.hooks.add("before-highlightall", function(e) {
				e.selector += ", " + a;
			}), s.hooks.add("before-sanity-check", function(i) {
				var l = i.element;
				if (l.matches(a)) {
					i.code = "", l.setAttribute(t, n);
					var o, c, d, u = l.appendChild(document.createElement("CODE"));
					u.textContent = "Loading…";
					var f = l.getAttribute("data-src"), h = i.language;
					if ("none" === h) {
						var p = (/\.(\w+)$/.exec(f) || [, "none"])[1];
						h = e[p] || p;
					}
					s.util.setLanguage(u, h), s.util.setLanguage(l, h);
					var v = s.plugins.autoloader;
					v && v.loadLanguages(h), o = function(e) {
						l.setAttribute(t, r);
						var n = function(e) {
							var t = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(e || "");
							if (t) {
								var n = Number(t[1]), r = t[2], s = t[3];
								return r ? s ? [n, Number(s)] : [n, void 0] : [n, n];
							}
						}(l.getAttribute("data-range"));
						if (n) {
							var a = e.split(/\r\n?|\n/g), i = n[0], o = null == n[1] ? a.length : n[1];
							i < 0 && (i += a.length), i = Math.max(0, Math.min(i - 1, a.length)), o < 0 && (o += a.length), o = Math.max(0, Math.min(o, a.length)), e = a.slice(i, o).join("\n"), l.hasAttribute("data-start") || l.setAttribute("data-start", String(i + 1));
						}
						u.textContent = e, s.highlightElement(u);
					}, c = function(e) {
						l.setAttribute(t, "failed"), u.textContent = e;
					}, (d = new XMLHttpRequest()).open("GET", f, !0), d.onreadystatechange = function() {
						var e;
						4 == d.readyState && (d.status < 400 && d.responseText ? o(d.responseText) : d.status >= 400 ? c((e = d.status, "✖ Error " + e + " while fetching file: " + d.statusText)) : c("✖ Error: File does not exist or is empty"));
					}, d.send(null);
				}
			}), s.plugins.fileHighlight = { highlight: function(e) {
				for (var t, n = (e || document).querySelectorAll(a), r = 0; t = n[r++];) s.highlightElement(t);
			} };
			var i = !1;
			s.fileHighlight = function() {
				i || (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."), i = !0), s.plugins.fileHighlight.highlight.apply(this, arguments);
			};
		}
	}();
}, () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports))()) ? w($(n)) : {}, ((e, t, n, r) => {
	if (t && "object" == typeof t || "function" == typeof t) for (var s, a = _(t), i = 0, l = a.length; i < l; i++) s = a[i], S.call(e, s) || s === n || k(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = y(t, s)) || r.enumerable
	});
	return e;
})(n && n.__esModule ? s : k(s, "default", {
	value: n,
	enumerable: !0
}), n));
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
	], r = {}, s = 0, a = n.length; s < a; s++) {
		var i = n[s];
		i = "string" == typeof i ? {
			filter: i,
			language: i
		} : i, e.languages[i.language] && (r["filter-" + i.filter] = {
			pattern: RegExp(t.replace("<filter_name>", function() {
				return i.filter;
			}), "m"),
			lookbehind: !0,
			inside: {
				"filter-name": {
					pattern: /^:[\w-]+/,
					alias: "variable"
				},
				text: {
					pattern: /\S[\s\S]*/,
					alias: [i.language, "language-" + i.language],
					inside: e.languages[i.language]
				}
			}
		});
	}
	e.languages.insertBefore("pug", "filter", r);
})(Prism), c = Prism, (f = {
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
			unit: d = {
				pattern: /(\b\d+)(?:%|[a-z]+)/,
				lookbehind: !0
			},
			number: u = {
				pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
				lookbehind: !0
			},
			function: /[\w-]+(?=\()/,
			punctuation: /[(),]/
		}
	}],
	entity: /\\[\da-f]{1,8}/i,
	unit: d,
	boolean: /\b(?:false|true)\b/,
	operator: [/~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.{2,3}|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/],
	number: u,
	punctuation: /[{}()\[\];:,]/
}).interpolation = {
	pattern: /\{[^\r\n}:]+\}/,
	alias: "variable",
	inside: {
		delimiter: {
			pattern: /^\{|\}$/,
			alias: "punctuation"
		},
		rest: f
	}
}, f.func = {
	pattern: /[\w-]+\([^)]*\).*/,
	inside: {
		function: /^[^(]+/,
		rest: f
	}
}, c.languages.stylus = {
	"atrule-declaration": {
		pattern: /(^[ \t]*)@.+/m,
		lookbehind: !0,
		inside: {
			atrule: /^@[\w-]+/,
			rest: f
		}
	},
	"variable-declaration": {
		pattern: /(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:\{[^{}]*\}|\S.*|$)/m,
		lookbehind: !0,
		inside: {
			variable: /^\S+/,
			rest: f
		}
	},
	statement: {
		pattern: /(^[ \t]*)(?:else|for|if|return|unless)[ \t].+/m,
		lookbehind: !0,
		inside: {
			keyword: /^\S+/,
			rest: f
		}
	},
	"property-declaration": {
		pattern: /((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)(?!\s)[^{\r\n]*(?:;|[^{\r\n,]$(?!(?:\r?\n|\r)(?:\{|\2[ \t])))/m,
		lookbehind: !0,
		inside: {
			property: {
				pattern: /^[^\s:]+/,
				inside: { interpolation: f.interpolation }
			},
			rest: f
		}
	},
	selector: {
		pattern: /(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t])))/m,
		lookbehind: !0,
		inside: {
			interpolation: f.interpolation,
			comment: f.comment,
			punctuation: /[{},]/
		}
	},
	func: f.func,
	string: f.string,
	comment: {
		pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
		lookbehind: !0,
		greedy: !0
	},
	interpolation: f.interpolation,
	punctuation: /[{}()\[\];:.]/
};
var n5 = t8("<b class=\"svelte-dy2xt3\"></b>"), n8 = {
	hash: "svelte-dy2xt3",
	code: "b.svelte-dy2xt3 {display:block;}b.svelte-dy2xt3 h1,\nb.svelte-dy2xt3 h2,\nb.svelte-dy2xt3 h3,\nb.svelte-dy2xt3 h4 {color:#1d1d1f;font-weight:600;margin-top:24px;margin-bottom:16px;}b.svelte-dy2xt3 h1 {font-size:26px;}b.svelte-dy2xt3 h2 {font-size:20px;}b.svelte-dy2xt3 h3 {font-size:16px;}b.svelte-dy2xt3 p {margin-bottom:16px;}b.svelte-dy2xt3 ul {margin-bottom:16px;padding-left:20px;list-style-type:disc;}b.svelte-dy2xt3 ul li {margin-bottom:6px;}b.svelte-dy2xt3 code {font-family:source-code-pro, Menlo, Monaco, Consolas, monospace;font-size:13px;padding:2px 6px;border-radius:4px;color:#0071e3;border:1px solid rgba(0,113,227,0.122);background:transparent;}b.svelte-dy2xt3 pre {border:1px solid rgba(0,0,0,0.051);border-radius:12px;padding:16px;overflow-x:auto;margin-bottom:20px;margin-top:12px;background:transparent;}b.svelte-dy2xt3 pre code {background:transparent;border:0;padding:0;border-radius:0;color:#1d1d1f;}b.svelte-dy2xt3 pre[class*='language-'],\nb.svelte-dy2xt3 code[class*='language-'],\nb.svelte-dy2xt3 :not(pre) > code[class*='language-'] {background:transparent;}b.svelte-dy2xt3 a {color:#0071e3;text-decoration:none;border-bottom:1px solid rgba(0,113,227,0.2);transition:all 0.25s ease;}b.svelte-dy2xt3 a:hover {color:#0077ed;border-bottom-color:#0077ed;}\n@media (max-width: 767px) {b.svelte-dy2xt3 h1 {font-size:20px;}b.svelte-dy2xt3 h2 {font-size:17px;}b.svelte-dy2xt3 pre {padding:12px;border-radius:8px;font-size:12px;}\n}"
};
function n3(e, t) {
	ef(t, !0), nc(e, n8), n2.default.languages.svelte = n2.default.languages.markup;
	let n = nE(t, "readme", 7), r = e2(null);
	tp(() => {
		if (tH(r) && n()) {
			var e;
			let t;
			tH(r).innerHTML = "";
			let s = (e = {
				add_token: nK,
				end_token: nQ,
				add_text: n0,
				set_attr: n1,
				data: {
					nodes: [
						tH(r),
						,
						,
						,
						,
					],
					index: 0
				}
			}, (t = new Uint32Array(24))[0] = 1, {
				renderer: e,
				text: "",
				pending: "",
				tokens: t,
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
			nJ(s, n()), s.pending.length > 0 && nJ(s, "\n"), tH(r).querySelectorAll("pre code").forEach((e) => {
				let t = [];
				e.classList.forEach((e) => {
					e.startsWith("language-") || e.startsWith("lang-") || t.push("language-" + e);
				}), t.forEach((t) => {
					e.classList.add(t), e.parentElement && "PRE" == e.parentElement.tagName && e.parentElement.classList.add(t);
				}), n2.default.highlightElement(e);
			});
		}
	});
	var s = n5();
	return nS(s, (e) => e8(r, e), () => tH(r)), t6(e, s), eh({
		get readme() {
			return n();
		},
		set readme($$value) {
			n($$value), eT();
		}
	});
}
nF(n3, { readme: {} }, [], [], { mode: "open" });
var n6 = t8("<a target=\"_blank\" title=\"查看源码\" aria-label=\"GitHub\" class=\"svelte-1aof96u\"><svg viewBox=\"0 0 24 24\" width=\"20\" height=\"20\" fill=\"currentColor\" class=\"svelte-1aof96u\"><path d=\"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z\"></path></svg></a>"), n4 = {
	hash: "svelte-1aof96u",
	code: "a.svelte-1aof96u {display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:50%;border:1px solid rgba(0,0,0,0.078);color:#1d1d1f;background:linear-gradient(135deg, rgba(255,255,255,0.4), rgba(255,255,255,0.122));backdrop-filter:blur(8px);box-shadow:inset 0 1px 1px rgba(255,255,255,0.6), 0 1px 2px rgba(0,0,0,0.039);transition:all 0.25s cubic-bezier(0.4, 0, 0.2, 1);text-decoration:none;box-sizing:border-box;}a.svelte-1aof96u:hover {color:#0071e3;border-color:rgba(0,71,227,0.2);background:linear-gradient(135deg, rgba(255,255,255,0.6), rgba(255,255,255,0.2));transform:scale(1.06) translateY(-1px);box-shadow:inset 0 1px 1px rgba(255,255,255,0.8), 0 4px 12px rgba(0,0,0,0.059), 0 1px 2px rgba(0,0,0,0.039);}a.svelte-1aof96u:active {transform:scale(0.96);background:linear-gradient(135deg, rgba(255,255,255,0.302), rgba(255,255,255,0.059));box-shadow:inset 0 1px 2px rgba(0,0,0,0.051);}a.svelte-1aof96u svg:where(.svelte-1aof96u) {display:block;}"
};
function n9(e, t) {
	ef(t, !0), nc(e, n4);
	let n = nE(t, "name", 7, ""), r = eV(() => "//github.com/webc-zh/webc-zh.github.io/tree/main/com/" + n());
	var s = t3(), a = tr(s), i = (e) => {
		var t = n6();
		tb(() => nw(t, "href", tH(r))), t6(e, t);
	};
	return nn(a, (e) => {
		n() && e(i);
	}), t6(e, s), eh({
		get name() {
			return n();
		},
		set name($$value = "") {
			n($$value), eT();
		}
	});
}
nF(n9, { name: {} }, [], [], { mode: "open" });
var n7 = t8("<b class=\"svelte-id1ke0\"> </b>"), re = t8("<b class=\"svelte-id1ke0\"><h1 class=\"svelte-id1ke0\"> <!></h1><!></b>"), rt = {
	hash: "svelte-id1ke0",
	code: "b.svelte-id1ke0 {display:flex;align-items:center;justify-content:space-between;gap:16px;margin:0 0 var(--gap);}h1.svelte-id1ke0 {display:flex;align-items:baseline;gap:12px;font-size:28px;font-weight:700;color:#1d1d1f;line-height:1.2;margin:0;}h1.svelte-id1ke0 b:where(.svelte-id1ke0) {font-size:16px;font-weight:400;color:#86868b;}\n@media (max-width: 767px) {h1.svelte-id1ke0 {font-size:22px;}h1.svelte-id1ke0 b:where(.svelte-id1ke0) {font-size:13px;}\n}"
};
function rn(e, t) {
	ef(t, !0), nc(e, rt);
	let n = nE(t, "name", 7, ""), r = nE(t, "title", 7, "");
	var s = t3(), a = tr(s), i = (e) => {
		var t = re(), s = tn(t), a = tn(s, !0), i = ts(a), l = (e) => {
			var t = n7(), n = tn(t, !0);
			es(t), tb(() => t4(n, r())), t6(e, t);
		};
		nn(i, (e) => {
			r() && e(l);
		}), es(s), n9(ts(s), { get name() {
			return n();
		} }), es(t), tb(() => t4(a, n())), t6(e, t);
	};
	return nn(a, (e) => {
		n() && e(i);
	}), t6(e, s), eh({
		get name() {
			return n();
		},
		set name($$value = "") {
			n($$value), eT();
		},
		get title() {
			return r();
		},
		set title($$value = "") {
			r($$value), eT();
		}
	});
}
nF(rn, {
	name: {},
	title: {}
}, [], [], { mode: "open" });
var rr = t8("<v-scroll><b class=\"svelte-1qris4\"><article class=\"LG svelte-1qris4\"><!><!></article><!></b></v-scroll>", 2), rs = {
	hash: "svelte-1qris4",
	code: "v-scroll.svelte-1qris4 {flex:1;min-height:0;}v-scroll.svelte-1qris4::part(scroll) {box-sizing:border-box;overflow-x:hidden;}v-scroll.svelte-1qris4 > b:where(.svelte-1qris4) {display:block;line-height:1.7;color:#333336;padding:0;box-sizing:border-box;}v-scroll.svelte-1qris4 > b:where(.svelte-1qris4) article:where(.svelte-1qris4) {border-radius:24px;padding:24px 32px;box-sizing:border-box;}\n@media (max-width: 767px) {v-scroll.svelte-1qris4 > b:where(.svelte-1qris4) {font-size:14px;}v-scroll.svelte-1qris4 > b:where(.svelte-1qris4) article:where(.svelte-1qris4) {border-radius:16px;padding:16px 20px;}\n}"
};
function ra(e, t) {
	ef(t, !0), nc(e, rs);
	let n = nE(t, "name", 7, ""), r = nE(t, "readme", 7), s = nE(t, "svgs", 23, () => []), a = eV(() => nP.find(([e]) => e == n())?.[1] || "");
	var i = rr();
	np(i, 1, "svelte-1qris4");
	var l = tn(i), o = tn(l), c = tn(o);
	return rn(c, {
		get name() {
			return n();
		},
		get title() {
			return tH(a);
		}
	}), n3(ts(c), { get readme() {
		return r();
	} }), es(o), nN(ts(o), { get svgs() {
		return s();
	} }), es(l), es(i), t6(e, i), eh({
		get name() {
			return n();
		},
		set name($$value = "") {
			n($$value), eT();
		},
		get readme() {
			return r();
		},
		set readme($$value) {
			r($$value), eT();
		},
		get svgs() {
			return s();
		},
		set svgs($$value = []) {
			s($$value), eT();
		}
	});
}
nF(ra, {
	name: {},
	readme: {},
	svgs: {}
}, [], [], { mode: "open" });
var ri = t8("<b class=\"svelte-1osi4kj\"><input type=\"text\" placeholder=\"搜索组件...\" class=\"svelte-1osi4kj\"/></b>"), rl = {
	hash: "svelte-1osi4kj",
	code: "b.svelte-1osi4kj {position:relative;display:flex;}\n@media (max-width: 767px) {b.svelte-1osi4kj {align-items:center;gap:12px;padding:20px 16px 8px;}\n}b.svelte-1osi4kj input:where(.svelte-1osi4kj) {box-sizing:border-box;flex:1;min-width:0;padding:10px 36px 10px 16px;font-size:14px;border-radius:10px;font-family:inherit;transition:all 0.3s cubic-bezier(0.4, 0, 0.2, 1);background:transparent url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' stroke='%2386868b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='7' cy='7' r='4'/%3E%3Cpath d='m11 11 3.5 3.5'/%3E%3C/svg%3E\") no-repeat right 12px center;border:1px solid rgba(0,0,0,0.122);color:#1d1d1f;outline:none;}b.svelte-1osi4kj input:where(.svelte-1osi4kj)::placeholder {color:#86868b;font-weight:normal;}b.svelte-1osi4kj input:where(.svelte-1osi4kj):focus {border-color:rgba(0,113,227,0.349);background-color:transparent;box-shadow:0 0 0 3px rgba(0,113,227,0.149), 0 4px 12px rgba(0,0,0,0.051);}\n@media (max-width: 767px) {b.svelte-1osi4kj input:where(.svelte-1osi4kj) {font-size:16px;}\n}"
};
function ro(e, t) {
	ef(t, !0), nc(e, rl);
	let n = nE(t, "search_query", 15);
	var r = ri(), s = tn(r);
	if (et) {
		var a = !1, i = () => {
			if (!a) {
				if (a = !0, s.hasAttribute("value")) {
					var e = s.value;
					nw(s, "value", null), s.value = e;
				}
				if (s.hasAttribute("checked")) {
					var t = s.checked;
					nw(s, "checked", null), s.checked = t;
				}
			}
		};
		s[U] = i, eb(i), tc();
	}
	return es(r), function(e, t, n = t) {
		var r = /* @__PURE__ */ new WeakSet();
		(function(e, t, n, r = n) {
			e.addEventListener(t, () => td(n));
			let s = e[U];
			s ? e[U] = () => {
				s(), r(!0);
			} : e[U] = () => r(!0), tc();
		})(e, "input", async (s) => {
			var a = s ? e.defaultValue : e.value;
			if (n(a = ny(e) ? n_(a) : a), null !== eE && r.add(eE), await tI(), a !== (a = t())) {
				var i = e.selectionStart, l = e.selectionEnd, o = e.value.length;
				if (e.value = a ?? "", null !== l) {
					var c = e.value.length;
					i === l && l === o && c > o ? (e.selectionStart = c, e.selectionEnd = c) : (e.selectionStart = i, e.selectionEnd = Math.min(l, c));
				}
			}
		}), (et && e.defaultValue !== e.value || null == tY(t) && e.value) && (n(ny(e) ? n_(e.value) : e.value), null !== eE && r.add(eE)), tg(() => {
			var n = t();
			if (e === document.activeElement) {
				var s = eE;
				if (r.has(s)) return;
			}
			ny(e) && n === n_(e.value) || ("date" !== e.type || n || e.value) && n !== e.value && (e.value = n ?? "");
		});
	}(s, n), t6(e, r), eh({
		get search_query() {
			return n();
		},
		set search_query($$value) {
			n($$value), eT();
		}
	});
}
nF(ro, { search_query: {} }, [], [], { mode: "open" });
var rc = t8("<a><b class=\"svelte-1xkx02v\">←</b><b class=\"svelte-1xkx02v\"> </b><b class=\"svelte-1xkx02v\"> </b></a>"), rd = t8("<aside><!><v-scroll><nav class=\"svelte-1xkx02v\"></nav></v-scroll></aside>", 2), ru = {
	hash: "svelte-1xkx02v",
	code: "aside.svelte-1xkx02v {width:248px;display:flex;flex-direction:column;flex-shrink:0;box-sizing:border-box;}aside.svelte-1xkx02v v-scroll:where(.svelte-1xkx02v) {flex:1;min-height:0;}aside.svelte-1xkx02v v-scroll:where(.svelte-1xkx02v)::part(scroll) {box-sizing:border-box;}aside.svelte-1xkx02v nav:where(.svelte-1xkx02v) {width:100%;padding:8px 0 16px;display:flex;flex-direction:column;gap:6px;box-sizing:border-box;}aside.svelte-1xkx02v nav:where(.svelte-1xkx02v) a:where(.svelte-1xkx02v) {box-sizing:border-box;padding:12px 16px;font-size:14px;border-radius:10px;font-family:inherit;transition:all 0.25s cubic-bezier(0.4, 0, 0.2, 1);display:flex;flex-direction:column;align-items:stretch;gap:4px;background:rgba(255,255,255,0.4);border:1px solid rgba(0,0,0,0.031);color:#1d1d1f;text-align:left;cursor:pointer;position:relative;text-decoration:none;box-shadow:0 1px 2px rgba(0,0,0,0.02);}aside.svelte-1xkx02v nav:where(.svelte-1xkx02v) a:where(.svelte-1xkx02v):hover {background:rgba(255,255,255,0.702);border-color:rgba(0,0,0,0.059);box-shadow:0 4px 12px rgba(0,0,0,0.039);transform:translateY(-1px);padding-left:38px;}aside.svelte-1xkx02v nav:where(.svelte-1xkx02v) a:where(.svelte-1xkx02v):hover > b:where(.svelte-1xkx02v):nth-child(1) {opacity:1;transform:translateX(0);}aside.svelte-1xkx02v nav:where(.svelte-1xkx02v) a.active:where(.svelte-1xkx02v) {background:rgba(0,113,227,0.078);border-color:rgba(0,113,227,0.2);color:#0071e3;box-shadow:inset 0 1px 1px rgba(255,255,255,0.502);text-align:right;}aside.svelte-1xkx02v nav:where(.svelte-1xkx02v) a.active:where(.svelte-1xkx02v) > b:where(.svelte-1xkx02v):nth-child(2) {color:#0071e3;}aside.svelte-1xkx02v nav:where(.svelte-1xkx02v) a.active:where(.svelte-1xkx02v) > b:where(.svelte-1xkx02v):nth-child(3) {color:rgba(0,113,227,0.8);}aside.svelte-1xkx02v nav:where(.svelte-1xkx02v) a.active:where(.svelte-1xkx02v) > b:where(.svelte-1xkx02v):nth-child(1) {opacity:1;color:#0071e3;transform:translateX(0);}aside.svelte-1xkx02v nav:where(.svelte-1xkx02v) a:where(.svelte-1xkx02v) > b:where(.svelte-1xkx02v):nth-child(1) {position:absolute;left:12px;top:50%;margin-top:-8px;opacity:0;transform:translateX(-6px);transition:all 0.25s ease;}aside.svelte-1xkx02v nav:where(.svelte-1xkx02v) a:where(.svelte-1xkx02v) > b:where(.svelte-1xkx02v):nth-child(2) {font-size:15px;font-weight:600;}aside.svelte-1xkx02v nav:where(.svelte-1xkx02v) a:where(.svelte-1xkx02v) > b:where(.svelte-1xkx02v):nth-child(3) {font-size:12px;color:#86868b;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:400;transition:color 0.25s ease;}\n@media (max-width: 767px) {aside.svelte-1xkx02v {position:fixed;top:0;right:0;bottom:0;left:auto;width:280px;max-width:85%;z-index:100;background:rgba(245,245,247,0.933);backdrop-filter:blur(40px);transform:translateX(100%);transition:transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);}aside.svelte-1xkx02v nav:where(.svelte-1xkx02v) {padding:8px 16px 16px;}aside.show.svelte-1xkx02v {transform:translateX(0);}\n}::highlight(search-match) {background:#ffe066;color:#000;}"
};
function rf(e, t) {
	ef(t, !0), nc(e, ru);
	let n = "search-match", r = nE(t, "active_index", 15), s = nE(t, "aside_open", 15), a = nE(t, "class", 7, ""), i = e2(""), l = e2(null), o = 0, c = 0, d = eV(() => {
		let e, t;
		return t = (e = tH(i).trim().toLowerCase()) ? e.split(/\s+/) : [], nP.map((e, t) => [e, t]).filter(([[e, n]]) => {
			if (!t.length) return !0;
			let r = e.toLowerCase(), s = n.toLowerCase();
			return t.some((e) => r.includes(e) || s.includes(e));
		});
	});
	tp(() => {
		let e;
		if (tH(d), !tH(l) || "u" < typeof CSS || !CSS.highlights) return;
		CSS.highlights.delete(n);
		let t = tH(i).trim().toLowerCase(), r = t ? t.split(/\s+/).filter(Boolean) : [];
		if (!r.length) return;
		let s = [], a = document.createTreeWalker(tH(l), NodeFilter.SHOW_TEXT);
		for (; e = a.nextNode();) {
			if (e.parentElement?.matches("a > b:nth-child(3)")) continue;
			let t = e.textContent.toLowerCase();
			for (let n of r) {
				let r = 0;
				for (; -1 != (r = t.indexOf(n, r));) {
					let t = new Range();
					t.setStart(e, r), t.setEnd(e, r + n.length), s.push(t), r += n.length;
				}
			}
		}
		if (s.length) {
			let e = new Highlight(...s);
			CSS.highlights.set(n, e);
		}
	});
	var u = rd(), f = tn(u);
	ro(f, {
		get search_query() {
			return tH(i);
		},
		set search_query($$value) {
			e8(i, $$value, !0);
		}
	});
	var h = ts(f);
	np(h, 1, "svelte-1xkx02v");
	var p = tn(h);
	return na(p, 21, () => tH(d), nr, (e, t) => {
		var n = eV(() => N(tH(t), 2)), s = eV(() => N(tH(n)[0], 2));
		let a = () => tH(s)[0];
		var i = rc(), l = ts(tn(i)), o = tn(l, !0);
		es(l);
		var c = ts(l), d = tn(c, !0);
		es(c), es(i), tb(() => {
			np(i, 1, nd(tH(n)[1] == r() ? "active" : ""), "svelte-1xkx02v"), nw(i, "href", "/" + a()), t4(o, a()), t4(d, tH(s)[1]);
		}), t6(e, i);
	}), es(p), nS(p, (e) => e8(l, e), () => tH(l)), es(h), es(u), tb(() => np(u, 1, nd(a()), "svelte-1xkx02v")), tK("touchstart", u, (e) => {
		e.touches && e.touches[0] && (o = e.touches[0].clientX, c = e.touches[0].clientY);
	}), tK("touchend", u, (e) => {
		if (e.changedTouches && e.changedTouches[0]) {
			let t = e.changedTouches[0], n = t.clientX - o;
			Math.abs(n) > 1.5 * Math.abs(t.clientY - c) && Math.abs(n) > 50 && s(!1);
		}
	}), t6(e, u), eh({
		get active_index() {
			return r();
		},
		set active_index($$value) {
			r($$value), eT();
		},
		get aside_open() {
			return s();
		},
		set aside_open($$value) {
			s($$value), eT();
		},
		get class() {
			return a();
		},
		set class($$value = "") {
			a($$value), eT();
		}
	});
}
tQ(["touchstart", "touchend"]), nF(rf, {
	active_index: {},
	aside_open: {},
	class: {}
}, [], [], { mode: "open" });
var rh = {
	jsdelivr: (e, t) => "//cdn.jsdelivr.net/npm/" + e + "@" + t,
	npmmirror: (e, t) => "//registry.npmmirror.com/" + e + "/" + t + "/files"
}, rp = "webc.site", rv = [["Scroll", [
	"<section class=\"demo-section\">\n  <h2>水平虚拟滚动条</h2>\n  <div class=\"scroll-wrap h-wrap\">\n    <h-scroll>\n      <b></b>\n    </h-scroll>\n  </div>\n\n  <h2>垂直虚拟滚动条</h2>\n  <div class=\"scroll-wrap v-wrap\">\n    <v-scroll>\n      <b></b>\n    </v-scroll>\n  </div>\n</section>\n",
	"const cards_count = 12,\n  h_scroll_container = document.querySelector(\"h-scroll > b\"),\n  v_scroll_container = document.querySelector(\"v-scroll > b\");\n\nif (h_scroll_container) {\n  for (let i = 0; i < cards_count; ++i) {\n    const card = document.createElement(\"b\");\n    card.style.setProperty(\"--theme-hue\", (i * 45) % 360);\n    card.style.setProperty(\"--theme-hue-next\", (i * 45 + 25) % 360);\n    h_scroll_container.appendChild(card);\n  }\n}\n\nif (v_scroll_container) {\n  for (let i = 0; i < cards_count; ++i) {\n    const card = document.createElement(\"b\");\n    card.style.setProperty(\"--theme-hue\", (i * 35) % 360);\n    card.style.setProperty(\"--theme-hue-next\", (i * 35 + 15) % 360);\n    v_scroll_container.appendChild(card);\n  }\n}\n",
	".demo-section {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  width: 100%;\n  max-width: 640px;\n  margin: 0 auto;\n  padding: 24px;\n  box-sizing: border-box;\n\n  h2 {\n    font-size: 13px;\n    font-weight: 600;\n    color: #1d1d1f;\n    letter-spacing: -0.01em;\n    margin-top: 16px;\n    margin-bottom: 12px;\n    display: flex;\n    align-items: center;\n\n    &:first-of-type {\n      margin-top: 0;\n    }\n  }\n\n  .scroll-wrap {\n    width: 100%;\n    max-width: 100%;\n    display: block;\n    background: #ffffff66;\n    border: 1px solid #0000000d;\n    border-radius: 16px;\n    box-shadow: inset 0 1px 0 #ffffff99;\n    overflow: hidden;\n  }\n\n  .v-wrap {\n    height: 300px;\n    max-height: 100%;\n    margin-bottom: 24px;\n  }\n\n  .h-wrap {\n    height: 160px;\n    max-height: 100%;\n  }\n\n  v-scroll,\n  h-scroll {\n    width: 100%;\n    height: 100%;\n  }\n\n  v-scroll {\n    & > b {\n      width: 100%;\n      padding: 20px;\n      box-sizing: border-box;\n      display: flex;\n      flex-direction: column;\n      gap: 8px;\n\n      & > b {\n        height: 64px;\n        background: linear-gradient(\n          135deg,\n          hsl(var(--theme-hue), 35%, 98%) 0,\n          hsl(var(--theme-hue-next), 30%, 96%) 100%\n        );\n        border: 1px solid hsl(var(--theme-hue), 25%, 91%);\n        border-radius: 16px;\n        box-shadow: 0 2px 8px #00000003;\n        transition: all 0.2s ease;\n\n        &:hover {\n          transform: translateY(-1px);\n          box-shadow: 0 4px 12px #00000008;\n        }\n      }\n    }\n  }\n\n  h-scroll {\n    & > b {\n      padding: 20px;\n      box-sizing: border-box;\n      display: flex;\n      align-items: center;\n      height: 100%;\n      gap: 8px;\n\n      & > b {\n        width: 140px;\n        height: 100%;\n        border-radius: 16px;\n        flex-shrink: 0;\n        box-sizing: border-box;\n        box-shadow: 0 2px 8px #00000003;\n        background: linear-gradient(\n          135deg,\n          hsl(var(--theme-hue), 35%, 96%) 0,\n          hsl(var(--theme-hue-next), 30%, 93%) 100%\n        );\n        border: 1px solid hsl(var(--theme-hue), 25%, 88%);\n        transition: all 0.2s ease;\n\n        &:hover {\n          transform: translateY(-2px);\n          box-shadow: 0 4px 16px #0000000a;\n        }\n      }\n    }\n  }\n}\n"
]], ["Wait", [
	"<section class=\"demo-section\">\n  <header>独立加载 (.wait)</header>\n  <div class=\"card-container\">\n    <b class=\"wait\"></b>\n  </div>\n\n  <header>表单提交加载遮罩 (.ing)</header>\n  <div class=\"card-container\">\n    <form class=\"demo-form ing\">\n      <h3>账户登录</h3>\n      <div class=\"form-group\">\n        <label>\n          <span>用户名</span>\n          <input type=\"text\" placeholder=\"输入用户名\" required />\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span>密码</span>\n          <input type=\"password\" placeholder=\"输入密码\" required />\n        </label>\n      </div>\n      <button type=\"submit\">登录</button>\n    </form>\n  </div>\n</section>\n",
	"const form = document.querySelector(\".demo-form\");\nif (form) {\n  form.addEventListener(\"submit\", (e) => {\n    e.preventDefault();\n    form.classList.add(\"ing\");\n    setTimeout(() => {\n      form.classList.remove(\"ing\");\n    }, 2000);\n  });\n}\n",
	".demo-section {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  margin: 0 auto;\n  padding: 24px;\n  box-sizing: border-box;\n\n  header {\n    font-size: 14px;\n    font-weight: 600;\n    color: #1d1d1f;\n    margin-top: 8px;\n  }\n\n  .card-container {\n    background: #ffffff;\n    border: 1px solid #0000000a;\n    border-radius: 16px;\n    padding: 24px;\n    box-shadow:\n      0 4px 20px #00000005,\n      inset 0 1px 0 #ffffff;\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n    box-sizing: border-box;\n\n    &:first-of-type {\n      justify-content: center;\n      align-items: center;\n    }\n  }\n\n  .demo-form {\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n\n    h3 {\n      margin: 0;\n      font-size: 18px;\n      font-weight: 600;\n      color: #1d1d1f;\n    }\n\n    .form-group {\n      label {\n        display: flex;\n        flex-direction: column;\n        gap: 6px;\n        font-size: 12px;\n        font-weight: 500;\n        color: #86868b;\n\n        span {\n          font-weight: 500;\n        }\n      }\n    }\n\n    input {\n      padding: 10px 14px;\n      border-radius: 10px;\n      border: 1px solid #0000000f;\n      background: #f5f5f7;\n      font-size: 14px;\n      outline: none;\n      transition: all 0.2s ease;\n\n      &:focus {\n        border-color: #0071e3;\n        background: #ffffff;\n        box-shadow: 0 0 0 4px #0071e31a;\n      }\n    }\n\n    button {\n      margin-top: 8px;\n      padding: 12px;\n      border-radius: 10px;\n      background: #0071e3;\n      color: #ffffff;\n      font-weight: 600;\n      font-size: 14px;\n      border: none;\n      transition: all 0.2s ease;\n      cursor: pointer;\n\n      &:hover:not(:disabled) {\n        background: #0077ed;\n      }\n\n      &:active:not(:disabled) {\n        transform: scale(0.98);\n      }\n\n      &:disabled {\n        background: #e5e5ea;\n        color: #aeaeae;\n        cursor: not-allowed;\n      }\n    }\n  }\n}\n"
]]], rg = t8("<button type=\"button\"> </button>"), rb = t8("<nav></nav>"), rm = {
	hash: "svelte-1vwq39h",
	code: "nav.svelte-1vwq39h {position:absolute;top:100%;margin-top:6px;width:var(--width);display:flex;flex-direction:column;gap:6px;z-index:999;\n  animation: svelte-1vwq39h-scale-in 0.15s cubic-bezier(0.16, 1, 0.3, 1);}nav.left.svelte-1vwq39h {left:0;}nav.right.svelte-1vwq39h {right:0;}nav.svelte-1vwq39h button:where(.svelte-1vwq39h) {border:1px solid rgba(0,0,0,0.078);background:rgba(255,255,255,0.6);backdrop-filter:blur(20px) saturate(190%);width:100%;height:32px;padding:0 14px;border-radius:16px;display:inline-flex;align-items:center;justify-content:flex-start;font-size:12px;font-weight:500;color:#1d1d1f;cursor:pointer;box-shadow:0 4px 12px rgba(0,0,0,0.051);transition:all 0.2s cubic-bezier(0.4, 0, 0.2, 1);white-space:nowrap;box-sizing:border-box;}nav.svelte-1vwq39h button:where(.svelte-1vwq39h):hover {background:rgba(255,255,255,0.949);border-color:rgba(0,0,0,0.149);box-shadow:0 6px 16px rgba(0,0,0,0.078);transform:translateY(-1px);color:#0071e3;}nav.svelte-1vwq39h button.selected:where(.svelte-1vwq39h) {color:#0071e3;font-weight:600;background:rgba(255,255,255,0.949);border-color:rgba(0,113,227,0.4);box-shadow:0 6px 16px rgba(0,113,227,0.102);}nav.svelte-1vwq39h button.selected:where(.svelte-1vwq39h):hover {background:#fff;border-color:#0071e3;}\n@-moz-keyframes svelte-1vwq39h-scale-in {\n  0% {\n    opacity: 0;\n    transform: scale(0.96) translateY(-4px);\n    pointer-events: none;\n  }\n  99% {\n    pointer-events: none;\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n    pointer-events: auto;\n  }\n}\n@-webkit-keyframes svelte-1vwq39h-scale-in {\n  0% {\n    opacity: 0;\n    transform: scale(0.96) translateY(-4px);\n    pointer-events: none;\n  }\n  99% {\n    pointer-events: none;\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n    pointer-events: auto;\n  }\n}\n@-o-keyframes svelte-1vwq39h-scale-in {\n  0% {\n    opacity: 0;\n    transform: scale(0.96) translateY(-4px);\n    pointer-events: none;\n  }\n  99% {\n    pointer-events: none;\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n    pointer-events: auto;\n  }\n}\n@keyframes svelte-1vwq39h-scale-in {\n  0% {\n    opacity: 0;\n    transform: scale(0.96) translateY(-4px);\n    pointer-events: none;\n  }\n  99% {\n    pointer-events: none;\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n    pointer-events: auto;\n  }\n}"
};
function rx(e, t) {
	ef(t, !0), nc(e, rm);
	let n = nE(t, "options", 23, () => []), r = nE(t, "value", 7), s = nE(t, "align", 7, "left"), a = nE(t, "width", 7, "100%"), i = nE(t, "onSelect", 7), l = eV(() => n().map((e) => "string" == typeof e ? {
		label: e.split(" ")[0],
		value: e
	} : e));
	var o = rb();
	return na(o, 21, () => tH(l), nr, (e, t) => {
		var n = rg(), s = tn(n, !0);
		es(n), tb(() => {
			np(n, 1, nd(r() == tH(t).value ? "selected" : ""), "svelte-1vwq39h"), t4(s, tH(t).label);
		}), tK("click", n, (e) => i()?.(tH(t).value, e)), t6(e, n);
	}), es(o), tb(() => {
		np(o, 1, nd(s()), "svelte-1vwq39h"), ng(o, `--width:${a() ?? ""}`);
	}), t6(e, o), eh({
		get options() {
			return n();
		},
		set options($$value = []) {
			n($$value), eT();
		},
		get value() {
			return r();
		},
		set value($$value) {
			r($$value), eT();
		},
		get align() {
			return s();
		},
		set align($$value = "left") {
			s($$value), eT();
		},
		get width() {
			return a();
		},
		set width($$value = "100%") {
			a($$value), eT();
		},
		get onSelect() {
			return i();
		},
		set onSelect($$value) {
			i($$value), eT();
		}
	});
}
tQ(["click"]), nF(rx, {
	options: {},
	value: {},
	align: {},
	width: {},
	onSelect: {}
}, [], [], { mode: "open" });
var rw = t8("<b class=\"svelte-10il9qy\"><button type=\"button\" aria-label=\"在线调试\">在线调试</button><!></b>"), rk = {
	hash: "svelte-10il9qy",
	code: "b.svelte-10il9qy {position:relative;display:inline-block;}b.svelte-10il9qy > button:where(.svelte-10il9qy) {display:inline-flex;align-items:center;justify-content:center;background:transparent;color:#0071e3;font-size:12px;font-weight:500;border:none;border-bottom:1px solid currentColor;padding:2px 0;cursor:pointer;transition:all 0.2s ease;outline:none;user-select:none;}b.svelte-10il9qy > button:where(.svelte-10il9qy):hover {color:#ff4500;}b.svelte-10il9qy > button:where(.svelte-10il9qy):active {opacity:0.7;}"
};
function ry(e, t) {
	ef(t, !0), nc(e, rk);
	let n = nE(t, "name", 7), r = nE(t, "urls_text", 7), s = e2(!1), a = e2(void 0), i = (e, t) => {
		let n = document.createElement("form");
		for (let [r, s] of (n.method = "POST", n.action = e, n.target = "_blank", Object.entries(t))) {
			let e = document.createElement("input");
			e.type = "hidden", e.name = r, e.value = s, n.appendChild(e);
		}
		document.body.appendChild(n), n.submit(), document.body.removeChild(n);
	}, l = (e) => {
		e8(s, !1);
		let t = (() => {
			let e = rv.find(([e]) => e == n());
			if (!e) return;
			let [t, [s, a, i]] = e, l = nP.find(([e]) => e == n()), o = l ? l[1] : "";
			return {
				html: r() + "\n" + s,
				js: a,
				css: i,
				title: n() + " - " + rp,
				description: o
			};
		})();
		t && {
			jsfiddle: () => i("https://jsfiddle.net/api/post/library/pure/", t),
			codepen: () => i("https://codepen.io/pen/define/", { data: JSON.stringify(t) })
		}[e]?.();
	};
	var o = rw();
	tJ("click", p, (e) => {
		tH(s) && tH(a) && !tH(a).contains(e.target) && e8(s, !1);
	});
	var c = tn(o), d = ts(c), u = (e) => {
		rx(e, {
			options: [{
				label: "JSFiddle",
				value: "jsfiddle"
			}, {
				label: "CodePen",
				value: "codepen"
			}],
			align: "right",
			width: "90px",
			onSelect: l
		});
	};
	return nn(d, (e) => {
		tH(s) && e(u);
	}), es(o), nS(o, (e) => e8(a, e), () => tH(a)), tb(() => np(c, 1, nd(tH(s) ? "open" : ""), "svelte-10il9qy")), tK("click", c, (e) => {
		e.stopPropagation(), e8(s, !tH(s));
	}), t6(e, o), eh({
		get name() {
			return n();
		},
		set name($$value) {
			n($$value), eT();
		},
		get urls_text() {
			return r();
		},
		set urls_text($$value) {
			r($$value), eT();
		}
	});
}
tQ(["click"]), nF(ry, {
	name: {},
	urls_text: {}
}, [], [], { mode: "open" });
var r_ = t8("<i class=\"svelte-1wo880g\"> </i>"), r$ = function(e, t, n = "svg") {
	var r, s = !e.startsWith("<!>"), a = (1 & t) != 0, i = `<${n}>${s ? e : "<!>" + e}</${n}>`;
	return () => {
		if (et) return t5(h, null), h;
		if (!r) {
			var e = te(t2(i));
			if (a) for (r = document.createDocumentFragment(); te(e);) r.appendChild(te(e));
			else r = te(e);
		}
		var t = r.cloneNode(!0);
		return a ? t5(te(t), t.lastChild) : t5(t, t), t;
	};
}("<svg viewBox=\"0 0 24 24\" width=\"12\" height=\"12\"><path d=\"M6 9l6 6 6-6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>", void 0, "svg"), rS = t8("<b class=\"svelte-1wo880g\"><button type=\"button\"><b class=\"svelte-1wo880g\"> <!></b><!></button><!></b>"), rE = {
	hash: "svelte-1wo880g",
	code: "b.svelte-1wo880g {position:relative;display:inline-block;}b.svelte-1wo880g button:where(.svelte-1wo880g) {border:1px solid rgba(0,0,0,0.078);background:transparent;padding:0 14px;height:30px;display:inline-flex;align-items:center;font-size:12px;font-weight:300;color:#86868b;border-radius:15px;cursor:pointer;transition:all 0.2s cubic-bezier(0.4, 0, 0.2, 1);outline:none;user-select:none;box-sizing:border-box;}b.svelte-1wo880g button:where(.svelte-1wo880g) b:where(.svelte-1wo880g) {display:inline-flex;align-items:center;white-space:nowrap;}b.svelte-1wo880g button:where(.svelte-1wo880g) b:where(.svelte-1wo880g) i:where(.svelte-1wo880g) {font-style:normal;font-weight:500;color:rgba(255,255,255,0.8);margin-left:4px;}b.svelte-1wo880g button:where(.svelte-1wo880g):hover {color:#1d1d1f;border-color:rgba(0,0,0,0.161);background:rgba(0,0,0,0.02);}b.svelte-1wo880g button.active:where(.svelte-1wo880g) {background:transparent;border-color:#86868b;color:#424245;box-shadow:none;padding-right:22px;}b.svelte-1wo880g button.active:where(.svelte-1wo880g):hover {background:transparent;border-color:#86868b;}b.svelte-1wo880g button.active:where(.svelte-1wo880g) b:where(.svelte-1wo880g) i:where(.svelte-1wo880g) {color:#424245;}b.svelte-1wo880g button.active.open:where(.svelte-1wo880g) b:where(.svelte-1wo880g) i:where(.svelte-1wo880g) {color:#0071e3;}b.svelte-1wo880g button:where(.svelte-1wo880g) svg:where(.svelte-1wo880g) {position:absolute;right:8px;top:50%;transform:translateY(-50%);color:#86868b;pointer-events:none;transition:transform 0.25s ease, color 0.2s ease;}b.svelte-1wo880g button:where(.svelte-1wo880g) svg.open:where(.svelte-1wo880g) {transform:translateY(-50%) rotate(180deg);}b.svelte-1wo880g button:where(.svelte-1wo880g):hover svg:where(.svelte-1wo880g) {color:#1d1d1f;}"
};
function rA(e, t) {
	ef(t, !0), nc(e, rE);
	let n = nE(t, "label", 7), r = nE(t, "mode", 7), s = nE(t, "active", 15), a = nE(t, "value", 15), i = nE(t, "options", 23, () => []), l = nE(t, "onChange", 7), o = e2(!1), c = e2(void 0), d = eV(() => tH(o) && s() == r()), u = (e, t) => {
		t.stopPropagation(), a(e), e8(o, !1), l()?.(e);
	};
	var f = rS();
	tJ("click", p, (e) => {
		tH(o) && tH(c) && !tH(c).contains(e.target) && e8(o, !1);
	});
	var h = tn(f), v = tn(h), g = tn(v, !0), b = ts(g), m = (e) => {
		var t = r_(), n = tn(t, !0);
		es(t), tb((e) => t4(n, e), [() => a()?.split(" ")[0]]), t6(e, t);
	};
	nn(b, (e) => {
		s() == r() && e(m);
	}), es(v);
	var x = ts(v), w = (e) => {
		var t = r$();
		tb(() => np(t, 0, nd(tH(o) ? "open" : ""), "svelte-1wo880g")), t6(e, t);
	};
	nn(x, (e) => {
		s() == r() && e(w);
	}), es(h);
	var k = ts(h), y = (e) => {
		rx(e, {
			get options() {
				return i();
			},
			get value() {
				return a();
			},
			onSelect: u
		});
	};
	return nn(k, (e) => {
		tH(d) && e(y);
	}), es(f), nS(f, (e) => e8(c, e), () => tH(c)), tb(() => {
		np(h, 1, (s() == r() ? "active " : "") + (tH(d) ? "open" : ""), "svelte-1wo880g"), t4(g, n());
	}), tK("click", h, (e) => {
		e.stopPropagation(), s() != r() ? (s(r()), e8(o, !0), l()?.(a())) : e8(o, !tH(o));
	}), t6(e, f), eh({
		get label() {
			return n();
		},
		set label($$value) {
			n($$value), eT();
		},
		get mode() {
			return r();
		},
		set mode($$value) {
			r($$value), eT();
		},
		get active() {
			return s();
		},
		set active($$value) {
			s($$value), eT();
		},
		get value() {
			return a();
		},
		set value($$value) {
			a($$value), eT();
		},
		get options() {
			return i();
		},
		set options($$value = []) {
			i($$value), eT();
		},
		get onChange() {
			return l();
		},
		set onChange($$value) {
			l($$value), eT();
		}
	});
}
tQ(["click"]), nF(rA, {
	label: {},
	mode: {},
	active: {},
	value: {},
	options: {},
	onChange: {}
}, [], [], { mode: "open" });
var rq = t8("<nav class=\"svelte-1hz2iwf\"><!><!></nav>"), rF = {
	hash: "svelte-1hz2iwf",
	code: "nav.svelte-1hz2iwf {display:inline-flex;align-items:center;margin-left:-14px;gap:8px;}"
};
function rz(e, t) {
	ef(t, !0), nc(e, rF);
	let n = nE(t, "active", 15), r = nE(t, "cdn", 15), s = nE(t, "cdn_keys", 23, () => []), a = nE(t, "runner", 15), i = nE(t, "runner_keys", 23, () => []), l = nE(t, "onChange", 7);
	var o = rq(), c = tn(o);
	return rA(c, {
		label: "直接使用",
		mode: 0,
		get options() {
			return s();
		},
		onChange: (e) => l()?.(0, e),
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
	}), rA(ts(c), {
		label: "打包构建",
		mode: 1,
		get options() {
			return i();
		},
		onChange: (e) => l()?.(1, e),
		get active() {
			return n();
		},
		set active($$value) {
			n($$value);
		},
		get value() {
			return a();
		},
		set value($$value) {
			a($$value);
		}
	}), es(o), t6(e, o), eh({
		get active() {
			return n();
		},
		set active($$value) {
			n($$value), eT();
		},
		get cdn() {
			return r();
		},
		set cdn($$value) {
			r($$value), eT();
		},
		get cdn_keys() {
			return s();
		},
		set cdn_keys($$value = []) {
			s($$value), eT();
		},
		get runner() {
			return a();
		},
		set runner($$value) {
			a($$value), eT();
		},
		get runner_keys() {
			return i();
		},
		set runner_keys($$value = []) {
			i($$value), eT();
		},
		get onChange() {
			return l();
		},
		set onChange($$value) {
			l($$value), eT();
		}
	});
}
nF(rz, {
	active: {},
	cdn: {},
	cdn_keys: {},
	runner: {},
	runner_keys: {},
	onChange: {}
}, [], [], { mode: "open" });
var rj = t8("<pre class=\"svelte-gucowb\"> </pre>"), rC = t8("<pre class=\"svelte-gucowb\"> </pre>"), rP = t8("<article class=\"LG svelte-gucowb\"><h2 class=\"svelte-gucowb\"><b class=\"svelte-gucowb\"><!><!></b><!></h2><b class=\"svelte-gucowb\"><!></b></article>"), rL = {
	hash: "svelte-gucowb",
	code: "article.svelte-gucowb {position:relative;z-index:2;border-radius:24px;padding:24px 32px;box-sizing:border-box;line-height:normal;width:100%;}article.svelte-gucowb h2:where(.svelte-gucowb) {font-size:15px;font-weight:600;color:#1d1d1f;margin:0 0 16px;display:flex;align-items:center;justify-content:space-between;}article.svelte-gucowb h2:where(.svelte-gucowb) > b:where(.svelte-gucowb) {display:flex;align-items:center;gap:12px;}article.svelte-gucowb b:where(.svelte-gucowb) {display:flex;align-items:flex-start;gap:16px;}article.svelte-gucowb b:where(.svelte-gucowb) pre:where(.svelte-gucowb) {flex:1;min-width:0;margin:0;overflow-x:auto;font-family:source-code-pro, Menlo, Monaco, Consolas, monospace;font-size:13px;color:#1d1d1f;white-space:pre-wrap;word-break:break-all;line-height:1.5;}\n@media (max-width: 767px) {article.svelte-gucowb {border-radius:16px;padding:16px 20px;}article.svelte-gucowb h2:where(.svelte-gucowb) {font-size:13px;margin-bottom:12px;flex-direction:column;align-items:flex-start;gap:12px;}article.svelte-gucowb h2:where(.svelte-gucowb) > b:where(.svelte-gucowb) {width:100%;justify-content:flex-start;flex-wrap:wrap;gap:8px;}article.svelte-gucowb b:where(.svelte-gucowb) {gap:12px;}article.svelte-gucowb b:where(.svelte-gucowb) pre:where(.svelte-gucowb) {font-size:11px;}\n}"
};
function rM(e, t) {
	ef(t, !0), nc(e, rL);
	let n = nE(t, "name", 7), r = nE(t, "files", 23, () => []), s = Object.keys(rh), a = [
		"bunx",
		"npx",
		"pnpm dlx",
		"yarn dlx"
	], i = "import_mode", l = "cli_runner", o = e2(e4(s[0])), c = e2(e4(a[0])), d = e2(0), u = (e, t) => {
		localStorage.setItem(i, e), 0 == e ? localStorage.setItem("cdn", t) : 1 == e && localStorage.setItem(l, t);
	};
	nz(() => {
		let e = localStorage.getItem(i);
		if (null != e) {
			let t = Number(e);
			[0, 1].includes(t) && e8(d, t, !0);
		}
		let t = localStorage.getItem("cdn");
		t && s.includes(t) && e8(o, t, !0);
		let n = localStorage.getItem(l);
		n && a.includes(n) && e8(c, n, !0);
	});
	let f = eV(() => r().map((e) => {
		let t = rh[tH(o)](rp, "0.1.23") + "/" + e;
		return e.endsWith(".css") ? "<link href=\"" + t + "\" rel=\"stylesheet\">" : e.endsWith(".js") ? "<script type=\"module\">import \"" + t + "\"<\/script>" : t;
	}).join("\n")), h = eV(() => tH(c) + " webc.add " + n());
	var p = t3(), v = tr(p), g = (e) => {
		var t = rP(), r = tn(t), i = tn(r), l = tn(i);
		rz(l, {
			get cdn_keys() {
				return s;
			},
			get runner_keys() {
				return a;
			},
			onChange: u,
			get active() {
				return tH(d);
			},
			set active($$value) {
				e8(d, $$value, !0);
			},
			get cdn() {
				return tH(o);
			},
			set cdn($$value) {
				e8(o, $$value, !0);
			},
			get runner() {
				return tH(c);
			},
			set runner($$value) {
				e8(c, $$value, !0);
			}
		});
		var p = ts(l), v = (e) => {
			nO(e, { get text() {
				return tH(f);
			} });
		}, g = (e) => {
			nO(e, { get text() {
				return tH(h);
			} });
		};
		nn(p, (e) => {
			0 == tH(d) ? e(v) : e(g, -1);
		}), es(i), ry(ts(i), {
			get name() {
				return n();
			},
			get urls_text() {
				return tH(f);
			}
		}), es(r);
		var b = ts(r), m = tn(b), x = (e) => {
			var t = rj(), n = tn(t, !0);
			es(t), tb(() => t4(n, tH(f))), t6(e, t);
		}, w = (e) => {
			var t = rC(), n = tn(t, !0);
			es(t), tb(() => t4(n, tH(h))), t6(e, t);
		};
		nn(m, (e) => {
			0 == tH(d) ? e(x) : e(w, -1);
		}), es(b), es(t), t6(e, t);
	};
	return nn(v, (e) => {
		r().length > 0 && e(g);
	}), t6(e, p), eh({
		get name() {
			return n();
		},
		set name($$value) {
			n($$value), eT();
		},
		get files() {
			return r();
		},
		set files($$value = []) {
			r($$value), eT();
		}
	});
}
nF(rM, {
	name: {},
	files: {}
}, [], [], { mode: "open" });
var rO = t8("<!><article class=\"LG svelte-kymqdk\"><v-scroll><b class=\"svelte-kymqdk\"><!></b></v-scroll></article>", 3), rT = t8("<article class=\"LG svelte-kymqdk\"><b class=\"svelte-kymqdk\"></b></article>"), rB = {
	hash: "svelte-kymqdk",
	code: "article.svelte-kymqdk {flex:1;display:flex;flex-direction:column;overflow:hidden;border-radius:24px;min-width:0;}article.svelte-kymqdk > b:where(.svelte-kymqdk) {margin:auto;}article.svelte-kymqdk v-scroll:where(.svelte-kymqdk) {flex:1;min-height:0;}article.svelte-kymqdk v-scroll:where(.svelte-kymqdk)::part(scroll) {mask-image:linear-gradient(to bottom, transparent 0, #000 var(--gap));box-sizing:border-box;}article.svelte-kymqdk v-scroll:where(.svelte-kymqdk) > b:where(.svelte-kymqdk) {display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100%;gap:var(--gap);padding:32px;box-sizing:border-box;}\n@media (max-width: 767px) {article.svelte-kymqdk {border-radius:16px;}article.svelte-kymqdk v-scroll:where(.svelte-kymqdk) > b:where(.svelte-kymqdk) {padding:20px 16px;}\n}"
};
function rD(e, t) {
	ef(t, !0), nc(e, rB);
	let n = nE(t, "name", 7), r = nE(t, "active_demo", 7), s = nE(t, "files", 23, () => []);
	var a = t3(), i = tr(a), l = (e) => {
		let t = eV(r);
		var a, i, l, o, c = rO(), d = tr(c);
		rM(d, {
			get name() {
				return n();
			},
			get files() {
				return s();
			}
		});
		var u = ts(d), f = tn(u);
		np(f, 1, "svelte-kymqdk");
		var p = tn(f);
		a = tn(p), i = (e, t) => {
			t(e, {});
		}, et && (l = h, er()), o = new nt(a), tm(() => {
			var e = tH(t) ?? null;
			if (et && "[" === ei(l) != (null !== e)) {
				var n = ea();
				en(n), o.anchor = n, et = !1, o.ensure(e, e && ((t) => i(t, e))), et = !0;
				return;
			}
			o.ensure(e, e && ((t) => i(t, e)));
		}, 65536), es(p), es(f), es(u), t6(e, c);
	}, o = (e) => {
		t6(e, rT());
	};
	return nn(i, (e) => {
		r() ? e(l) : e(o, -1);
	}), t6(e, a), eh({
		get name() {
			return n();
		},
		set name($$value) {
			n($$value), eT();
		},
		get active_demo() {
			return r();
		},
		set active_demo($$value) {
			r($$value), eT();
		},
		get files() {
			return s();
		},
		set files($$value = []) {
			s($$value), eT();
		}
	});
}
nF(rD, {
	name: {},
	active_demo: {},
	files: {}
}, [], [], { mode: "open" });
var rN = t8("<button class=\"menu-toggle svelte-d2ss8n\" aria-label=\"菜单\"><b class=\"svelte-d2ss8n\"></b><b class=\"svelte-d2ss8n\"></b><b class=\"svelte-d2ss8n\"></b></button>"), rR = t8("<button class=\"overlay svelte-d2ss8n\" aria-label=\"关闭\"></button>"), rG = t8("<b class=\"wait svelte-d2ss8n\"></b>"), rW = t8("<!><b class=\"right svelte-d2ss8n\"><!></b>", 1), rI = t8("<b class=\"svelte-d2ss8n\"><!></b>"), rH = t8("<article class=\"LG svelte-d2ss8n\"><h2>请选择一个组件查看文档</h2></article>"), rY = t8("<main class=\"svelte-d2ss8n\"><!><!><section class=\"svelte-d2ss8n\"><!></section><!></main>"), rV = {
	hash: "svelte-d2ss8n",
	code: "main.svelte-d2ss8n {display:flex;height:100dvh;width:100vw;background:url(\"/svg/bg.svg\") no-repeat center/cover;color:#1d1d1f;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;overflow:hidden;padding:var(--gap);gap:var(--gap);box-sizing:border-box;position:relative;}.menu-toggle.svelte-d2ss8n {display:none;}\n@media (max-width: 767px) {.menu-toggle.svelte-d2ss8n {display:flex;flex-direction:column;gap:4px;position:absolute;top:36px;right:32px;z-index:102;width:36px;height:36px;align-items:center;justify-content:center;border-radius:50%;border:0;background:transparent;cursor:pointer;transition:all 0.3s ease;padding:0;}.menu-toggle.svelte-d2ss8n:hover {background:rgba(0,0,0,0.031);}.menu-toggle.svelte-d2ss8n > b:where(.svelte-d2ss8n) {width:18px;height:2px;background:#1d1d1f;border-radius:1px;transition:all 0.3s ease;}\n}.overlay.svelte-d2ss8n {display:none;}\n@media (max-width: 767px) {.overlay.svelte-d2ss8n {display:block;position:fixed;inset:0;z-index:99;background:rgba(0,0,0,0.2);backdrop-filter:blur(4px);\n    animation: svelte-d2ss8n-fadeIn 0.25s ease;}\n}section.svelte-d2ss8n {flex:1;display:flex;flex-direction:column;overflow:hidden;}section.svelte-d2ss8n > b:where(.svelte-d2ss8n) {flex:1;display:flex;gap:var(--gap);overflow:hidden;}section.svelte-d2ss8n > b:where(.svelte-d2ss8n) .right:where(.svelte-d2ss8n) {display:flex;flex-direction:column;flex:1;min-width:0;gap:var(--gap);padding:0;box-sizing:border-box;}section.svelte-d2ss8n > b:where(.svelte-d2ss8n) .wait:where(.svelte-d2ss8n) {margin:auto;}section.svelte-d2ss8n > article:where(.svelte-d2ss8n) {flex:1;display:flex;align-items:center;justify-content:center;color:#86868b;border-radius:24px;}\n@media (max-width: 999px) {section.svelte-d2ss8n > b:where(.svelte-d2ss8n) {flex-direction:column;gap:var(--gap);}section.svelte-d2ss8n > b:where(.svelte-d2ss8n) .right:where(.svelte-d2ss8n) {gap:var(--gap);padding:0;}\n}\n@media (max-width: 767px) {section.svelte-d2ss8n > article:where(.svelte-d2ss8n) {border-radius:16px;}\n}\n@-moz-keyframes svelte-d2ss8n-fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes svelte-d2ss8n-fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-o-keyframes svelte-d2ss8n-fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes svelte-d2ss8n-fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}"
};
function rX(e, t) {
	ef(t, !0), nc(e, rV);
	let n = e2(-1), r = e2(""), s = e2(null), a = e2([]), c = e2([]), d = e2(!1), u = e2(!1), f = eV(() => nP[tH(n)]), h = () => {
		e8(d, !tH(d));
	}, p = async (e) => {
		e8(n, e, !0), e8(d, !1);
		let t = nP[e];
		if (t) {
			e8(u, !0);
			let [e, n, i] = t, [l, o, d, f] = (await i()).default;
			e8(r, l, !0), e8(a, d || []), e8(c, f || []), o ? e8(s, (await o()).default) : e8(s, null), e8(u, !1);
		} else e8(r, ""), e8(s, null), e8(a, []), e8(c, []);
	};
	nz(() => i(() => {
		let e = o();
		if (!e) {
			nP.length > 0 && l(nP[0][0]);
			return;
		}
		p(nP.findIndex(([t]) => t.toLowerCase() == e.toLowerCase()));
	}));
	var v = rY(), g = tn(v), b = (e) => {
		var t = rN();
		tK("click", t, h), t6(e, t);
	};
	nn(g, (e) => {
		tH(d) || e(b);
	});
	var m = ts(g), x = (e) => {
		var t = rR();
		tK("click", t, h), t6(e, t);
	};
	nn(m, (e) => {
		tH(d) && e(x);
	});
	var w = ts(m), k = tn(w), y = (e) => {
		var t = rI(), n = tn(t), i = (e) => {
			t6(e, rG());
		}, l = (e) => {
			var t = rW(), n = tr(t);
			ra(n, {
				get name() {
					return tH(f)[0];
				},
				get readme() {
					return tH(r);
				},
				get svgs() {
					return tH(a);
				}
			});
			var i = ts(n);
			rD(tn(i), {
				get name() {
					return tH(f)[0];
				},
				get active_demo() {
					return tH(s);
				},
				get files() {
					return tH(c);
				}
			}), es(i), t6(e, t);
		};
		nn(n, (e) => {
			tH(u) ? e(i) : e(l, -1);
		}), es(t), t6(e, t);
	}, _ = (e) => {
		t6(e, rH());
	};
	nn(k, (e) => {
		tH(f) ? e(y) : e(_, -1);
	}), es(w);
	var $ = ts(w);
	{
		let e = eV(() => tH(d) ? "show" : "");
		rf($, {
			get class() {
				return tH(e);
			},
			get active_index() {
				return tH(n);
			},
			set active_index($$value) {
				e8(n, $$value, !0);
			},
			get aside_open() {
				return tH(d);
			},
			set aside_open($$value) {
				e8(d, $$value, !0);
			}
		});
	}
	es(v), t6(e, v), eh();
}
tQ(["click"]), nF(rX, {}, [], [], { mode: "open" }), t7(rX, { target: a });
export { nc as a, t6 as c, ts as d, ed as f, np as i, t8 as l, nF as n, na as o, es as p, ng as r, nr as s, nC as t, tn as u };
