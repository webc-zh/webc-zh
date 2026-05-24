let e, t, n;
import { A as a, C as r, D as i, E as s, L as o, N as l, P as d, R as c, S as u, T as g, _ as p, a as b, b as h, c as f, l as k, o as m, p as x, x as v, y, z as w } from "./index-BnyknPJp.js";
var _, F, A, S, E = Object.create, $ = Object.defineProperty, q = Object.getOwnPropertyDescriptor, C = Object.getOwnPropertyNames, P = Object.getPrototypeOf, L = Object.prototype.hasOwnProperty, z = (e) => {
	switch (e) {
		case 1: return 3;
		case 2: return 4;
		case 3: return 5;
		case 4: return 6;
		case 5: return 7;
		default: return 8;
	}
};
function j(e) {
	0 !== e.text.length && (console.assert(e.len > 0, "Never adding text to root"), e.renderer.add_text(e.renderer.data, e.text), e.text = "");
}
function O(e) {
	console.assert(e.len > 0, "No nodes to end"), e.len -= 1, e.token = e.tokens[e.len], e.renderer.end_token(e.renderer.data);
}
function B(e, t) {
	(24 === e.tokens[e.len] || 23 === e.tokens[e.len]) && 25 !== t && O(e), e.len += 1, e.tokens[e.len] = t, e.token = t, e.renderer.add_token(e.renderer.data, t);
}
function T(e, t) {
	for (e.fence_start = 0; e.len > t;) O(e);
}
function M(e, t) {
	let n = 0;
	for (let a = 0; a <= e.len && !((t -= e.spaces[a]) < 0); a += 1) switch (e.tokens[a]) {
		case 9:
		case 10:
		case 20:
		case 25: n = a;
	}
	for (; e.len > n;) O(e);
	return t;
}
function D(e, t) {
	let n = -1, a = -1;
	for (let r = e.blockquote_idx + 1; r <= e.len; r += 1) if (25 === e.tokens[r]) {
		if (e.indent_len < e.spaces[r]) {
			a = -1;
			break;
		}
		a = r;
	} else e.tokens[r] === t && (n = r);
	return -1 === a ? -1 === n ? (T(e, e.blockquote_idx), B(e, t), !0) : (T(e, n), !1) : (T(e, a), B(e, t), !0);
}
function G(e, t) {
	B(e, 25), e.spaces[e.len] = e.indent_len + t, N(e), e.token = 103;
}
function N(e) {
	e.indent = "", e.indent_len = 0, e.pending = "";
}
function R(e) {
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
function I(e, t) {
	for (let a of t) {
		if (101 === e.token) {
			switch (a) {
				case " ":
					e.indent_len += 1;
					continue;
				case "	":
					e.indent_len += 4;
					continue;
			}
			let t = M(e, e.indent_len);
			e.indent_len = 0, e.token = e.tokens[e.len], t > 0 && I(e, " ".repeat(t));
		}
		let t = e.pending + a;
		switch (e.token) {
			case 21:
			case 1:
			case 20:
			case 24:
			case 23:
				switch (console.assert(0 === e.text.length, "Root should not have any text"), e.pending[0]) {
					case void 0:
						e.pending = a;
						continue;
					case " ":
						console.assert(1 === e.pending.length), e.pending = a, e.indent += " ", e.indent_len += 1;
						continue;
					case "	":
						console.assert(1 === e.pending.length), e.pending = a, e.indent += "	", e.indent_len += 4;
						continue;
					case "\n":
						if (console.assert(1 === e.pending.length), 25 === e.tokens[e.len] && 21 === e.token) {
							O(e), N(e), e.pending = a;
							continue;
						}
						T(e, e.blockquote_idx), N(e), e.blockquote_idx = 0, e.fence_start = 0, e.pending = a;
						continue;
					case "#":
						switch (a) {
							case "#":
								if (e.pending.length < 6) {
									e.pending = t;
									continue;
								}
								break;
							case " ":
								M(e, e.indent_len), B(e, z(e.pending.length)), N(e);
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
						-1 === t ? (T(e, e.blockquote_idx), e.blockquote_idx += 1, e.fence_start = 0, B(e, 20)) : e.blockquote_idx = t, N(e), e.pending = a;
						continue;
					}
					case "-":
					case "*":
					case "_":
						if (0 === e.hr_chars && (console.assert(1 === e.pending.length, "Pending should be one character"), e.hr_chars = 1, e.hr_char = e.pending), e.hr_chars > 0) {
							switch (a) {
								case e.hr_char:
									e.hr_chars += 1, e.pending = t;
									continue;
								case " ":
									e.pending = t;
									continue;
								case "\n":
									if (e.hr_chars < 3) break;
									M(e, e.indent_len), e.renderer.add_token(e.renderer.data, 22), e.renderer.end_token(e.renderer.data), N(e), e.hr_chars = 0;
									continue;
							}
							e.hr_chars = 0;
						}
						if ("_" !== e.pending[0] && " " === e.pending[1]) {
							D(e, 23), G(e, 2), I(e, t.slice(2));
							continue;
						}
						break;
					case "`":
						if (e.pending.length < 3) {
							if ("`" === a) {
								e.pending = t, e.fence_start = t.length;
								continue;
							}
							e.fence_start = 0;
							break;
						}
						switch (a) {
							case "`":
								e.pending.length === e.fence_start ? (e.pending = t, e.fence_start = t.length) : (B(e, 2), N(e), e.fence_start = 0, I(e, t));
								continue;
							case "\n":
								M(e, e.indent_len), B(e, 10), e.pending.length > e.fence_start && e.renderer.set_attr(e.renderer.data, 4, e.pending.slice(e.fence_start)), N(e), e.token = 101;
								continue;
							default:
								e.pending = t;
								continue;
						}
					case "+":
						if (" " !== a) break;
						D(e, 23), G(e, 2);
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
							if (" " !== a) break;
							D(e, 24) && "1." !== e.pending && e.renderer.set_attr(e.renderer.data, 16, e.pending.slice(0, -1)), G(e, e.pending.length + 1);
							continue;
						}
						{
							let n = a.charCodeAt(0);
							if (46 === n || R(n)) {
								e.pending = t;
								continue;
							}
						}
						break;
					case "|":
						T(e, e.blockquote_idx), B(e, 27), B(e, 28), e.pending = "", I(e, a);
						continue;
				}
				let r = t;
				if (21 === e.token) e.token = e.tokens[e.len], e.renderer.add_token(e.renderer.data, 21), e.renderer.end_token(e.renderer.data);
				else if (e.indent_len >= 4) {
					let n = 0;
					for (; n < 4; n += 1) if ("	" === e.indent[n]) {
						n += 1;
						break;
					}
					r = e.indent.slice(n) + t, B(e, 9);
				} else B(e, 2);
				N(e), I(e, r);
				continue;
			case 27:
				if (1 === e.table_state) switch (a) {
					case "-":
					case " ":
					case "|":
					case ":":
						e.pending = t;
						continue;
					case "\n":
						e.table_state = 2, e.pending = "";
						continue;
					default: O(e), e.table_state = 0;
				}
				else switch (e.pending) {
					case "|":
						B(e, 28), e.pending = "", I(e, a);
						continue;
					case "\n":
						O(e), e.pending = "", e.table_state = 0, I(e, a);
						continue;
				}
				break;
			case 28:
				switch (e.pending) {
					case "": break;
					case "|":
						B(e, 29), O(e), e.pending = "", I(e, a);
						continue;
					case "\n":
						O(e), e.table_state = Math.min(e.table_state + 1, 2), e.pending = "", I(e, a);
						continue;
					default:
						B(e, 29), I(e, a);
						continue;
				}
				break;
			case 29:
				if ("|" === e.pending) {
					j(e), O(e), e.pending = "", I(e, a);
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
					0 !== e.pending.length ? (j(e), O(e), e.pending = a) : e.text += a;
					continue;
			}
			case 10:
				switch (a) {
					case "`":
						e.pending = t;
						continue;
					case "\n":
						if (t.length === e.fence_start + e.fence_end + 1) {
							j(e), O(e), e.pending = "", e.fence_start = 0, e.fence_end = 0, e.token = 101;
							continue;
						}
						e.token = 101;
						break;
					case " ": if ("\n" === e.pending[0]) {
						e.pending = t, e.fence_end += 1;
						continue;
					}
				}
				e.text += e.pending, e.pending = a, e.fence_end = 1;
				continue;
			case 11: switch (a) {
				case "`":
					t.length === e.fence_start + Number(" " === e.pending[0]) ? (j(e), O(e), e.pending = "", e.fence_start = 0) : e.pending = t;
					continue;
				case "\n":
					e.text += e.pending, e.pending = "", e.token = 21, e.blockquote_idx = 0, j(e);
					continue;
				case " ":
					e.text += e.pending, e.pending = a;
					continue;
				default:
					e.text += t, e.pending = "";
					continue;
			}
			case 103:
				switch (e.pending.length) {
					case 0:
						if ("[" !== a) break;
						e.pending = t;
						continue;
					case 1:
						if (" " !== a && "x" !== a) break;
						e.pending = t;
						continue;
					case 2:
						if ("]" !== a) break;
						e.pending = t;
						continue;
					case 3:
						if (" " !== a) break;
						e.renderer.add_token(e.renderer.data, 26), "x" === e.pending[1] && e.renderer.set_attr(e.renderer.data, 8, ""), e.renderer.end_token(e.renderer.data), e.pending = " ";
						continue;
				}
				e.token = e.tokens[e.len], e.pending = "", I(e, t);
				continue;
			case 14:
			case 15: {
				let t = "*", n = 12;
				if (15 === e.token && (t = "_", n = 13), t === e.pending) {
					if (j(e), t === a) {
						O(e), e.pending = "";
						continue;
					}
					B(e, n), e.pending = a;
					continue;
				}
				break;
			}
			case 12:
			case 13: {
				let n = "*", r = 14;
				switch (13 === e.token && (n = "_", r = 15), e.pending) {
					case n:
						n === a ? e.tokens[e.len - 1] === r ? e.pending = t : (j(e), B(e, r), e.pending = "") : (j(e), O(e), e.pending = a);
						continue;
					case n + n:
						let i = e.token;
						j(e), O(e), O(e), n !== a ? (B(e, i), e.pending = a) : e.pending = "";
						continue;
				}
				break;
			}
			case 16:
				if ("~~" === t) {
					j(e), O(e), e.pending = "";
					continue;
				}
				break;
			case 105:
				"\n" === a ? (j(e), B(e, 30), e.pending = "") : (e.token = e.tokens[e.len], "\\" === e.pending[0] ? e.text += "[" : e.text += "$$", e.pending = "", I(e, a));
				continue;
			case 30:
				if ("\\]" === t || "$$" === t) {
					j(e), O(e), e.pending = "";
					continue;
				}
				break;
			case 31:
				if ("\\)" === t || "$" === e.pending[0]) {
					j(e), O(e), ")" === a ? e.pending = "" : e.pending = a;
					continue;
				}
				break;
			case 102:
				"http://" === t || "https://" === t ? (j(e), B(e, 18), e.pending = t, e.text = t) : "http:/"[e.pending.length] === a || "https:/"[e.pending.length] === a ? e.pending = t : (e.token = e.tokens[e.len], I(e, a));
				continue;
			case 17:
			case 19:
				if ("]" === e.pending) {
					j(e), "(" === a ? e.pending = t : (O(e), e.pending = a);
					continue;
				}
				if ("]" === e.pending[0] && "(" === e.pending[1]) {
					if (")" === a) {
						let t = 17 === e.token ? 1 : 2, n = e.pending.slice(2);
						e.renderer.set_attr(e.renderer.data, t, n), O(e), e.pending = "";
					} else e.pending += a;
					continue;
				}
				break;
			case 18:
				" " === a || "\n" === a || "\\" === a ? (e.renderer.set_attr(e.renderer.data, 1, e.pending), j(e), O(e), e.pending = a) : (e.text += a, e.pending = t);
				continue;
			case 104:
				if (t.startsWith("<br")) {
					if (3 === t.length || " " === a || "/" === a && (4 === t.length || " " === e.pending[e.pending.length - 1])) {
						e.pending = t;
						continue;
					}
					if (">" === a) {
						j(e), e.token = e.tokens[e.len], e.renderer.add_token(e.renderer.data, 21), e.renderer.end_token(e.renderer.data), e.pending = "";
						continue;
					}
				}
				e.token = e.tokens[e.len], e.text += "<", e.pending = e.pending.slice(1), I(e, a);
				continue;
		}
		switch (e.pending[0]) {
			case "\\":
				if (19 === e.token || 30 === e.token || 31 === e.token) break;
				switch (a) {
					case "(":
						j(e), B(e, 31), e.pending = "";
						continue;
					case "[":
						e.token = 105, e.pending = t;
						continue;
					case "\n":
						e.pending = a;
						continue;
					default:
						let i = a.charCodeAt(0);
						e.pending = "", e.text += R(i) || i >= 65 && i <= 90 || i >= 97 && i <= 122 ? t : a;
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
						j(e), T(e, e.blockquote_idx), e.blockquote_idx = 0, e.pending = a;
						continue;
					default:
						j(e), e.pending = a, e.token = 21, e.blockquote_idx = 0;
						continue;
				}
				break;
			case "<":
				if (19 !== e.token && 30 !== e.token && 31 !== e.token) {
					j(e), e.pending = t, e.token = 104;
					continue;
				}
				break;
			case "`":
				if (19 === e.token) break;
				"`" === a ? (e.fence_start += 1, e.pending = t) : (e.fence_start += 1, j(e), B(e, 11), e.text = " " === a || "\n" === a ? "" : a, e.pending = "");
				continue;
			case "_":
			case "*": {
				if (19 === e.token || 30 === e.token || 31 === e.token || 14 === e.token) break;
				let n = 12, r = 14, i = e.pending[0];
				if ("_" === i && (n = 13, r = 15), 1 === e.pending.length) {
					if (i === a) {
						e.pending = t;
						continue;
					}
					if (" " !== a && "\n" !== a) {
						j(e), B(e, n), e.pending = a;
						continue;
					}
				} else {
					if (i === a) {
						j(e), B(e, r), B(e, n), e.pending = "";
						continue;
					}
					if (" " !== a && "\n" !== a) {
						j(e), B(e, r), e.pending = a;
						continue;
					}
				}
				break;
			}
			case "~":
				if (19 !== e.token && 16 !== e.token) {
					if ("~" === e.pending) {
						if ("~" === a) {
							e.pending = t;
							continue;
						}
					} else if (" " !== a && "\n" !== a) {
						j(e), B(e, 16), e.pending = a;
						continue;
					}
				}
				break;
			case "$":
				if (19 !== e.token && 16 !== e.token && "$" === e.pending) if ("$" === a) {
					e.token = 105, e.pending = t;
					continue;
				} else {
					var n;
					if (R(n = a.charCodeAt(0)) || function(e) {
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
						j(e), B(e, 31), e.pending = a;
						continue;
					}
				}
				break;
			case "[":
				if (19 !== e.token && 17 !== e.token && 30 !== e.token && 31 !== e.token && "]" !== a) {
					j(e), B(e, 17), e.pending = a;
					continue;
				}
				break;
			case "!":
				if (19 !== e.token && "[" === a) {
					j(e), B(e, 19), e.pending = "";
					continue;
				}
				break;
			case " ": if (1 === e.pending.length && " " === a) continue;
		}
		if (19 !== e.token && 17 !== e.token && 30 !== e.token && 31 !== e.token && "h" === a && (" " === e.pending || "" === e.pending)) {
			e.text += e.pending, e.pending = a, e.token = 102;
			continue;
		}
		e.text += e.pending, e.pending = a;
	}
	j(e);
}
function W(e, t) {
	let n, a = e.nodes[e.index];
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
			let r = n = document.createElement("input");
			r.type = "checkbox", r.disabled = !0;
			break;
		case 9:
		case 10:
			a = a.appendChild(document.createElement("pre")), n = document.createElement("code");
			break;
		case 27:
			n = document.createElement("table");
			break;
		case 28:
			switch (a.children.length) {
				case 0:
					a = a.appendChild(document.createElement("thead"));
					break;
				case 1:
					a = a.appendChild(document.createElement("tbody"));
					break;
				default: a = a.children[1];
			}
			n = document.createElement("tr");
			break;
		case 29:
			n = document.createElement(a.parentElement?.tagName === "THEAD" ? "th" : "td");
			break;
		case 30:
			n = document.createElement("equation-block");
			break;
		case 31: n = document.createElement("equation-inline");
	}
	e.nodes[++e.index] = a.appendChild(n);
}
function H(e) {
	e.index -= 1;
}
function Z(e, t) {
	e.nodes[e.index].appendChild(document.createTextNode(t));
}
function U(e, t, n) {
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
var Y = ((e, t, n, a) => {
	if (t && "object" == typeof t || "function" == typeof t) for (var r, i = C(t), s = 0, o = i.length; s < o; s++) r = i[s], L.call(e, r) || r === n || $(e, r, {
		get: ((e) => t[e]).bind(null, r),
		enumerable: !(a = q(t, r)) || a.enumerable
	});
	return e;
})($(null != (n = (e = (e, t) => {
	var n, a, r = function(e) {
		var t = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, n = 0, a = {}, r = {
			manual: e.Prism && e.Prism.manual,
			disableWorkerMessageHandler: e.Prism && e.Prism.disableWorkerMessageHandler,
			util: {
				encode: function e(t) {
					return t instanceof i ? new i(t.type, e(t.content), t.alias) : Array.isArray(t) ? t.map(e) : t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
				},
				type: function(e) {
					return Object.prototype.toString.call(e).slice(8, -1);
				},
				objId: function(e) {
					return e.__id || Object.defineProperty(e, "__id", { value: ++n }), e.__id;
				},
				clone: function e(t, n) {
					var a, i;
					switch (n = n || {}, r.util.type(t)) {
						case "Object":
							if (n[i = r.util.objId(t)]) return n[i];
							for (var s in a = {}, n[i] = a, t) t.hasOwnProperty(s) && (a[s] = e(t[s], n));
							return a;
						case "Array":
							if (n[i = r.util.objId(t)]) return n[i];
							return a = [], n[i] = a, t.forEach(function(t, r) {
								a[r] = e(t, n);
							}), a;
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
					} catch (a) {
						var e = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(a.stack) || [])[1];
						if (e) {
							var t = document.getElementsByTagName("script");
							for (var n in t) if (t[n].src == e) return t[n];
						}
						return null;
					}
				},
				isActive: function(e, t, n) {
					for (var a = "no-" + t; e;) {
						var r = e.classList;
						if (r.contains(t)) return !0;
						if (r.contains(a)) return !1;
						e = e.parentElement;
					}
					return !!n;
				}
			},
			languages: {
				plain: a,
				plaintext: a,
				text: a,
				txt: a,
				extend: function(e, t) {
					var n = r.util.clone(r.languages[e]);
					for (var a in t) n[a] = t[a];
					return n;
				},
				insertBefore: function(e, t, n, a) {
					var i = (a = a || r.languages)[e], s = {};
					for (var o in i) if (i.hasOwnProperty(o)) {
						if (o == t) for (var l in n) n.hasOwnProperty(l) && (s[l] = n[l]);
						n.hasOwnProperty(o) || (s[o] = i[o]);
					}
					var d = a[e];
					return a[e] = s, r.languages.DFS(r.languages, function(t, n) {
						n === d && t != e && (this[t] = s);
					}), s;
				},
				DFS: function e(t, n, a, i) {
					i = i || {};
					var s = r.util.objId;
					for (var o in t) if (t.hasOwnProperty(o)) {
						n.call(t, o, t[o], a || o);
						var l = t[o], d = r.util.type(l);
						"Object" !== d || i[s(l)] ? "Array" !== d || i[s(l)] || (i[s(l)] = !0, e(l, n, o, i)) : (i[s(l)] = !0, e(l, n, null, i));
					}
				}
			},
			plugins: {},
			highlightAll: function(e, t) {
				r.highlightAllUnder(document, e, t);
			},
			highlightAllUnder: function(e, t, n) {
				var a = {
					callback: n,
					container: e,
					selector: "code[class*=\"language-\"], [class*=\"language-\"] code, code[class*=\"lang-\"], [class*=\"lang-\"] code"
				};
				r.hooks.run("before-highlightall", a), a.elements = Array.prototype.slice.apply(a.container.querySelectorAll(a.selector)), r.hooks.run("before-all-elements-highlight", a);
				for (var i, s = 0; i = a.elements[s++];) r.highlightElement(i, !0 === t, a.callback);
			},
			highlightElement: function(t, n, a) {
				var i = r.util.getLanguage(t), s = r.languages[i];
				r.util.setLanguage(t, i);
				var o = t.parentElement;
				o && "pre" === o.nodeName.toLowerCase() && r.util.setLanguage(o, i);
				var l = {
					element: t,
					language: i,
					grammar: s,
					code: t.textContent
				};
				function d(e) {
					l.highlightedCode = e, r.hooks.run("before-insert", l), l.element.innerHTML = l.highlightedCode, r.hooks.run("after-highlight", l), r.hooks.run("complete", l), a && a.call(l.element);
				}
				if (r.hooks.run("before-sanity-check", l), (o = l.element.parentElement) && "pre" === o.nodeName.toLowerCase() && !o.hasAttribute("tabindex") && o.setAttribute("tabindex", "0"), !l.code) {
					r.hooks.run("complete", l), a && a.call(l.element);
					return;
				}
				if (r.hooks.run("before-highlight", l), !l.grammar) return void d(r.util.encode(l.code));
				if (n && e.Worker) {
					var c = new Worker(r.filename);
					c.onmessage = function(e) {
						d(e.data);
					}, c.postMessage(JSON.stringify({
						language: l.language,
						code: l.code,
						immediateClose: !0
					}));
				} else d(r.highlight(l.code, l.grammar, l.language));
			},
			highlight: function(e, t, n) {
				var a = {
					code: e,
					grammar: t,
					language: n
				};
				if (r.hooks.run("before-tokenize", a), !a.grammar) throw Error("The language \"" + a.language + "\" has no grammar.");
				return a.tokens = r.tokenize(a.code, a.grammar), r.hooks.run("after-tokenize", a), i.stringify(r.util.encode(a.tokens), a.language);
			},
			tokenize: function(e, t) {
				var n = t.rest;
				if (n) {
					for (var a in n) t[a] = n[a];
					delete t.rest;
				}
				var d = new o();
				return l(d, d.head, e), function e(t, n, a, o, d, c) {
					for (var u in a) if (a.hasOwnProperty(u) && a[u]) {
						var g = a[u];
						g = Array.isArray(g) ? g : [g];
						for (var p = 0; p < g.length; ++p) {
							if (c && c.cause == u + "," + p) return;
							var b = g[p], h = b.inside, f = !!b.lookbehind, k = !!b.greedy, m = b.alias;
							if (k && !b.pattern.global) {
								var x = b.pattern.toString().match(/[imsuy]*$/)[0];
								b.pattern = RegExp(b.pattern.source, x + "g");
							}
							for (var v = b.pattern || b, y = o.next, w = d; y !== n.tail && (!c || !(w >= c.reach)); w += y.value.length, y = y.next) {
								var _, F = y.value;
								if (n.length > t.length) return;
								if (!(F instanceof i)) {
									var A = 1;
									if (k) {
										if (!(_ = s(v, w, t, f)) || _.index >= t.length) break;
										var S = _.index, E = _.index + _[0].length, $ = w;
										for ($ += y.value.length; S >= $;) $ += (y = y.next).value.length;
										if ($ -= y.value.length, w = $, y.value instanceof i) continue;
										for (var q = y; q !== n.tail && ($ < E || "string" == typeof q.value); q = q.next) A++, $ += q.value.length;
										A--, F = t.slice(w, $), _.index -= w;
									} else if (!(_ = s(v, 0, F, f))) continue;
									var S = _.index, C = _[0], P = F.slice(0, S), L = F.slice(S + C.length), z = w + F.length;
									c && z > c.reach && (c.reach = z);
									var j = y.prev;
									if (P && (j = l(n, j, P), w += P.length), function(e, t, n) {
										for (var a = t.next, r = 0; r < n && a !== e.tail; r++) a = a.next;
										t.next = a, a.prev = t, e.length -= r;
									}(n, j, A), y = l(n, j, new i(u, h ? r.tokenize(C, h) : C, m, C)), L && l(n, y, L), A > 1) {
										var O = {
											cause: u + "," + p,
											reach: z
										};
										e(t, n, a, y.prev, w, O), c && O.reach > c.reach && (c.reach = O.reach);
									}
								}
							}
						}
					}
				}(e, d, t, d.head, 0), function(e) {
					for (var t = [], n = e.head.next; n !== e.tail;) t.push(n.value), n = n.next;
					return t;
				}(d);
			},
			hooks: {
				all: {},
				add: function(e, t) {
					var n = r.hooks.all;
					n[e] = n[e] || [], n[e].push(t);
				},
				run: function(e, t) {
					var n = r.hooks.all[e];
					if (n && n.length) for (var a, i = 0; a = n[i++];) a(t);
				}
			},
			Token: i
		};
		function i(e, t, n, a) {
			this.type = e, this.content = t, this.alias = n, this.length = 0 | (a || "").length;
		}
		function s(e, t, n, a) {
			e.lastIndex = t;
			var r = e.exec(n);
			if (r && a && r[1]) {
				var i = r[1].length;
				r.index += i, r[0] = r[0].slice(i);
			}
			return r;
		}
		function o() {
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
		function l(e, t, n) {
			var a = t.next, r = {
				value: n,
				prev: t,
				next: a
			};
			return t.next = r, a.prev = r, e.length++, r;
		}
		if (e.Prism = r, i.stringify = function e(t, n) {
			if ("string" == typeof t) return t;
			if (Array.isArray(t)) {
				var a = "";
				return t.forEach(function(t) {
					a += e(t, n);
				}), a;
			}
			var i = {
				type: t.type,
				content: e(t.content, n),
				tag: "span",
				classes: ["token", t.type],
				attributes: {},
				language: n
			}, s = t.alias;
			s && (Array.isArray(s) ? Array.prototype.push.apply(i.classes, s) : i.classes.push(s)), r.hooks.run("wrap", i);
			var o = "";
			for (var l in i.attributes) o += " " + l + "=\"" + (i.attributes[l] || "").replace(/"/g, "&quot;") + "\"";
			return "<" + i.tag + " class=\"" + i.classes.join(" ") + "\"" + o + ">" + i.content + "</" + i.tag + ">";
		}, !e.document) return !e.addEventListener || r.disableWorkerMessageHandler || e.addEventListener("message", function(t) {
			var n = JSON.parse(t.data), a = n.language, i = n.code, s = n.immediateClose;
			e.postMessage(r.highlight(i, r.languages[a], a)), s && e.close();
		}, !1), r;
		var d = r.util.currentScript();
		function c() {
			r.manual || r.highlightAll();
		}
		if (d && (r.filename = d.src, d.hasAttribute("data-manual") && (r.manual = !0)), !r.manual) {
			var u = document.readyState;
			"loading" === u || "interactive" === u && d && d.defer ? document.addEventListener("DOMContentLoaded", c) : window.requestAnimationFrame ? window.requestAnimationFrame(c) : window.setTimeout(c, 16);
		}
		return r;
	}("u" > typeof window ? window : "u" > typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {});
	void 0 !== t && t.exports && (t.exports = r), "u" > typeof global && (global.Prism = r), r.languages.markup = {
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
	}, r.languages.markup.tag.inside["attr-value"].inside.entity = r.languages.markup.entity, r.languages.markup.doctype.inside["internal-subset"].inside = r.languages.markup, r.hooks.add("wrap", function(e) {
		"entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"));
	}), Object.defineProperty(r.languages.markup.tag, "addInlined", { value: function(e, t) {
		var n = {};
		n["language-" + t] = {
			pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
			lookbehind: !0,
			inside: r.languages[t]
		}, n.cdata = /^<!\[CDATA\[|\]\]>$/i;
		var a = { "included-cdata": {
			pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
			inside: n
		} };
		a["language-" + t] = {
			pattern: /[\s\S]+/,
			inside: r.languages[t]
		};
		var i = {};
		i[e] = {
			pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
				return e;
			}), "i"),
			lookbehind: !0,
			greedy: !0,
			inside: a
		}, r.languages.insertBefore("markup", "cdata", i);
	} }), Object.defineProperty(r.languages.markup.tag, "addAttribute", { value: function(e, t) {
		r.languages.markup.tag.inside["special-attr"].push({
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
							inside: r.languages[t]
						},
						punctuation: [{
							pattern: /^=/,
							alias: "attr-equals"
						}, /"|'/]
					}
				}
			}
		});
	} }), r.languages.html = r.languages.markup, r.languages.mathml = r.languages.markup, r.languages.svg = r.languages.markup, r.languages.xml = r.languages.extend("markup", {}), r.languages.ssml = r.languages.xml, r.languages.atom = r.languages.xml, r.languages.rss = r.languages.xml, n = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/, r.languages.css = {
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
	}, r.languages.css.atrule.inside.rest = r.languages.css, (a = r.languages.markup) && (a.tag.addInlined("style", "css"), a.tag.addAttribute("style", "css")), r.languages.clike = {
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
	}, r.languages.javascript = r.languages.extend("clike", {
		"class-name": [r.languages.clike["class-name"], {
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
	}), r.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, r.languages.insertBefore("javascript", "keyword", {
		regex: {
			pattern: RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),
			lookbehind: !0,
			greedy: !0,
			inside: {
				"regex-source": {
					pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
					lookbehind: !0,
					alias: "language-regex",
					inside: r.languages.regex
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
				inside: r.languages.javascript
			},
			{
				pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
				lookbehind: !0,
				inside: r.languages.javascript
			},
			{
				pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
				lookbehind: !0,
				inside: r.languages.javascript
			},
			{
				pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
				lookbehind: !0,
				inside: r.languages.javascript
			}
		],
		constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
	}), r.languages.insertBefore("javascript", "string", {
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
						rest: r.languages.javascript
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
	}), r.languages.insertBefore("javascript", "operator", { "literal-property": {
		pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
		lookbehind: !0,
		alias: "property"
	} }), r.languages.markup && (r.languages.markup.tag.addInlined("script", "javascript"), r.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript")), r.languages.js = r.languages.javascript, function() {
		if (void 0 !== r && "u" > typeof document) {
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
			}, t = "data-src-status", n = "loading", a = "loaded", i = "pre[data-src]:not([" + t + "=\"" + a + "\"]):not([" + t + "=\"" + n + "\"])";
			r.hooks.add("before-highlightall", function(e) {
				e.selector += ", " + i;
			}), r.hooks.add("before-sanity-check", function(s) {
				var o = s.element;
				if (o.matches(i)) {
					s.code = "", o.setAttribute(t, n);
					var l, d, c, u = o.appendChild(document.createElement("CODE"));
					u.textContent = "Loading…";
					var g = o.getAttribute("data-src"), p = s.language;
					if ("none" === p) {
						var b = (/\.(\w+)$/.exec(g) || [, "none"])[1];
						p = e[b] || b;
					}
					r.util.setLanguage(u, p), r.util.setLanguage(o, p);
					var h = r.plugins.autoloader;
					h && h.loadLanguages(p), l = function(e) {
						o.setAttribute(t, a);
						var n = function(e) {
							var t = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(e || "");
							if (t) {
								var n = Number(t[1]), a = t[2], r = t[3];
								return a ? r ? [n, Number(r)] : [n, void 0] : [n, n];
							}
						}(o.getAttribute("data-range"));
						if (n) {
							var i = e.split(/\r\n?|\n/g), s = n[0], l = null == n[1] ? i.length : n[1];
							s < 0 && (s += i.length), s = Math.max(0, Math.min(s - 1, i.length)), l < 0 && (l += i.length), l = Math.max(0, Math.min(l, i.length)), e = i.slice(s, l).join("\n"), o.hasAttribute("data-start") || o.setAttribute("data-start", String(s + 1));
						}
						u.textContent = e, r.highlightElement(u);
					}, d = function(e) {
						o.setAttribute(t, "failed"), u.textContent = e;
					}, (c = new XMLHttpRequest()).open("GET", g, !0), c.onreadystatechange = function() {
						var e;
						4 == c.readyState && (c.status < 400 && c.responseText ? l(c.responseText) : c.status >= 400 ? d((e = c.status, "✖ Error " + e + " while fetching file: " + c.statusText)) : d("✖ Error: File does not exist or is empty"));
					}, c.send(null);
				}
			}), r.plugins.fileHighlight = { highlight: function(e) {
				for (var t, n = (e || document).querySelectorAll(i), a = 0; t = n[a++];) r.highlightElement(t);
			} };
			var s = !1;
			r.fileHighlight = function() {
				s || (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."), s = !0), r.plugins.fileHighlight.highlight.apply(this, arguments);
			};
		}
	}();
}, () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports))()) ? E(P(n)) : {}, "default", {
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
	], a = {}, r = 0, i = n.length; r < i; r++) {
		var s = n[r];
		s = "string" == typeof s ? {
			filter: s,
			language: s
		} : s, e.languages[s.language] && (a["filter-" + s.filter] = {
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
	e.languages.insertBefore("pug", "filter", a);
})(Prism), _ = Prism, (S = {
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
			unit: F = {
				pattern: /(\b\d+)(?:%|[a-z]+)/,
				lookbehind: !0
			},
			number: A = {
				pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
				lookbehind: !0
			},
			function: /[\w-]+(?=\()/,
			punctuation: /[(),]/
		}
	}],
	entity: /\\[\da-f]{1,8}/i,
	unit: F,
	boolean: /\b(?:false|true)\b/,
	operator: [/~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.{2,3}|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/],
	number: A,
	punctuation: /[{}()\[\];:,]/
}).interpolation = {
	pattern: /\{[^\r\n}:]+\}/,
	alias: "variable",
	inside: {
		delimiter: {
			pattern: /^\{|\}$/,
			alias: "punctuation"
		},
		rest: S
	}
}, S.func = {
	pattern: /[\w-]+\([^)]*\).*/,
	inside: {
		function: /^[^(]+/,
		rest: S
	}
}, _.languages.stylus = {
	"atrule-declaration": {
		pattern: /(^[ \t]*)@.+/m,
		lookbehind: !0,
		inside: {
			atrule: /^@[\w-]+/,
			rest: S
		}
	},
	"variable-declaration": {
		pattern: /(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:\{[^{}]*\}|\S.*|$)/m,
		lookbehind: !0,
		inside: {
			variable: /^\S+/,
			rest: S
		}
	},
	statement: {
		pattern: /(^[ \t]*)(?:else|for|if|return|unless)[ \t].+/m,
		lookbehind: !0,
		inside: {
			keyword: /^\S+/,
			rest: S
		}
	},
	"property-declaration": {
		pattern: /((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)(?!\s)[^{\r\n]*(?:;|[^{\r\n,]$(?!(?:\r?\n|\r)(?:\{|\2[ \t])))/m,
		lookbehind: !0,
		inside: {
			property: {
				pattern: /^[^\s:]+/,
				inside: { interpolation: S.interpolation }
			},
			rest: S
		}
	},
	selector: {
		pattern: /(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t])))/m,
		lookbehind: !0,
		inside: {
			interpolation: S.interpolation,
			comment: S.comment,
			punctuation: /[{},]/
		}
	},
	func: S.func,
	string: S.string,
	comment: {
		pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
		lookbehind: !0,
		greedy: !0
	},
	interpolation: S.interpolation,
	punctuation: /[{}()\[\];:.]/
}, Y.default.languages.svelte = Y.default.languages.markup;
var V = v("<b class=\"svelte-dy2xt3\"></b>"), J = {
	hash: "svelte-dy2xt3",
	code: ":root {--gap: 24px;}\n@media (max-width: 800px) {:root {--gap: 16px;}\n}b.svelte-dy2xt3 {display:block;text-autospace:auto;text-spacing-trim:auto;overflow-wrap:break-word;}b.svelte-dy2xt3 h1,\nb.svelte-dy2xt3 h2,\nb.svelte-dy2xt3 h3,\nb.svelte-dy2xt3 h4 {color:#1d1d1f;font-weight:600;margin-top:24px;margin-bottom:16px;}b.svelte-dy2xt3 h1 {font-size:26px;}b.svelte-dy2xt3 h2 {font-size:20px;}b.svelte-dy2xt3 h3 {font-size:16px;}b.svelte-dy2xt3 p {margin-bottom:16px;line-height:1.7;text-align:justify;text-justify:inter-character;}b.svelte-dy2xt3 ul,\nb.svelte-dy2xt3 ol {margin-bottom:16px;padding-left:16px;line-height:1.7;}b.svelte-dy2xt3 ul ul,\nb.svelte-dy2xt3 ol ul,\nb.svelte-dy2xt3 ul ol,\nb.svelte-dy2xt3 ol ol {padding-left:20px;margin-top:8px;margin-bottom:0;}b.svelte-dy2xt3 ul {list-style-type:disc;}b.svelte-dy2xt3 ol {list-style-type:decimal;}b.svelte-dy2xt3 li {margin-bottom:8px;padding-left:4px;color:#333336;}b.svelte-dy2xt3 li::marker {color:#86868b;}b.svelte-dy2xt3 em {font-style:normal;text-emphasis:filled circle;text-emphasis-position:under;}b.svelte-dy2xt3 blockquote:not(.alert) {margin:20px 0;padding:10px 16px;border-left:4px solid #e5e7eb;color:#6e7681;}b.svelte-dy2xt3 code {font-size:13px;padding:2px 6px;border-radius:4px;color:#1b6e30;border:1px solid rgba(48,209,88,0.133);background:linear-gradient(135deg, rgba(48,209,88,0.047), rgba(36,178,75,0.11));}b.svelte-dy2xt3 pre {border:1px solid rgba(0,0,0,0.071);border-radius:12px;padding:14px 16px;overflow-x:auto;margin-bottom:20px;margin-top:12px;background:rgba(255,255,255,0.502);backdrop-filter:blur(25px) saturate(180%);box-shadow:inset 0 1px 0 0 rgba(255,255,255,0.651), 0 4px 12px rgba(0,0,0,0.02);}b.svelte-dy2xt3 pre code {background:transparent;border:0;padding:0;border-radius:0;color:#1d1d1f;line-height:1.6;}b.svelte-dy2xt3 pre .token.comment,\nb.svelte-dy2xt3 pre .token.prolog,\nb.svelte-dy2xt3 pre .token.doctype,\nb.svelte-dy2xt3 pre .token.cdata {color:#86868b;font-style:italic;}b.svelte-dy2xt3 pre .token.punctuation {color:#6e7681;}b.svelte-dy2xt3 pre .token.keyword,\nb.svelte-dy2xt3 pre .token.tag,\nb.svelte-dy2xt3 pre .token.operator {color:#ad208e;}b.svelte-dy2xt3 pre .token.keyword {font-weight:600;}b.svelte-dy2xt3 pre .token.string,\nb.svelte-dy2xt3 pre .token.char,\nb.svelte-dy2xt3 pre .token.attr-value {color:#248a3d;}b.svelte-dy2xt3 pre .token.number,\nb.svelte-dy2xt3 pre .token.boolean {color:#1c00cf;}b.svelte-dy2xt3 pre .token.function {color:#0071e3;}b.svelte-dy2xt3 pre .token.class-name,\nb.svelte-dy2xt3 pre .token.maybe-class-name,\nb.svelte-dy2xt3 pre .token.selector {color:#5c2699;}b.svelte-dy2xt3 pre .token.attr-name {color:#8a3ffc;}b.svelte-dy2xt3 pre .token.property {color:#1d1d1f;}b.svelte-dy2xt3 pre .token.regex {color:#c41a16;}b.svelte-dy2xt3 pre[class*='language-'],\nb.svelte-dy2xt3 code[class*='language-'],\nb.svelte-dy2xt3 :not(pre) > code[class*='language-'] {background:transparent;}b.svelte-dy2xt3 a {position:relative;z-index:1;color:#3b3dbf;text-decoration:none;padding-bottom:7px;margin-bottom:-4px;box-decoration-break:clone;background-image:var(--waveSvg), linear-gradient(90deg, rgba(255,214,10,0.6) 0, rgba(255,159,10,0.2) 100%);background-repeat:repeat-x, no-repeat;background-size:12px 6px, 0 0.45em;background-position:0 100%, 0 70%;transition:color 0.25s ease, background-size 0.25s cubic-bezier(0.4, 0, 0.2, 1);}b.svelte-dy2xt3 a:hover {color:#ff6200;background-image:var(--waveOrangeSvg), linear-gradient(90deg, rgba(255,214,10,0.6) 0, rgba(255,159,10,0.2) 100%);background-size:12px 0, 100% 0.45em;}b.svelte-dy2xt3 blockquote.alert {margin:20px 0;padding:16px 20px 16px 52px;border-radius:12px;box-sizing:border-box;position:relative;backdrop-filter:blur(20px) saturate(180%);box-shadow:0 4px 12px rgba(0,0,0,0.012);}b.svelte-dy2xt3 blockquote.alert .alert-title {position:absolute;left:16px;top:18px;font-size:0;margin:0;padding:0;}b.svelte-dy2xt3 blockquote.alert .alert-title .alert-icon {display:block;width:22px;height:22px;mask-size:contain;mask-repeat:no-repeat;mask-position:center;flex-shrink:0;}b.svelte-dy2xt3 blockquote.alert p {margin:0;color:#1d1d1f;}b.svelte-dy2xt3 blockquote.alert p:not(:last-child) {margin-bottom:8px;}b.svelte-dy2xt3 blockquote.alert-note {background:linear-gradient(135deg, rgba(90,200,250,0.02), rgba(0,113,227,0.039));}b.svelte-dy2xt3 blockquote.alert-note .alert-icon {mask-image:var(--noteSvg);background:linear-gradient(135deg, #5ac8fa, #0071e3);}b.svelte-dy2xt3 blockquote.alert-tip {background:linear-gradient(135deg, rgba(255,214,10,0.031), rgba(255,159,10,0.055));}b.svelte-dy2xt3 blockquote.alert-tip .alert-icon {mask-image:var(--tipSvg);background:linear-gradient(135deg, #ffd60a, #ff9f0a);}b.svelte-dy2xt3 blockquote.alert-important {background:linear-gradient(135deg, rgba(241,167,255,0.02), rgba(175,82,222,0.039));}b.svelte-dy2xt3 blockquote.alert-important .alert-icon {mask-image:var(--importantSvg);background:linear-gradient(135deg, #f1a7ff, #af52de);}b.svelte-dy2xt3 blockquote.alert-warning {background:linear-gradient(135deg, rgba(255,219,77,0.02), rgba(255,149,0,0.039));}b.svelte-dy2xt3 blockquote.alert-warning .alert-icon {mask-image:var(--warningSvg);background:linear-gradient(135deg, #ffdb4d, #ff9500);}b.svelte-dy2xt3 blockquote.alert-caution {background:linear-gradient(135deg, rgba(255,149,179,0.02), rgba(255,59,48,0.039));}b.svelte-dy2xt3 blockquote.alert-caution .alert-icon {mask-image:var(--cautionSvg);background:linear-gradient(135deg, #ff95b3, #ff3b30);}b.svelte-dy2xt3 table {background:linear-gradient(0, rgba(255,255,255,0.149), rgba(255,255,255,0.451));border:1px solid rgba(0,0,0,0.122);border-collapse:collapse;box-shadow:0 0 3px rgba(0,0,0,0.078) inset;margin:16px 0;text-align:center;width:100%;}b.svelte-dy2xt3 table td,\nb.svelte-dy2xt3 table tr {position:relative;}b.svelte-dy2xt3 table td:before,\nb.svelte-dy2xt3 table tr:before {content:'';opacity:1;position:absolute;}b.svelte-dy2xt3 table tr:before {background:var(--hlineSvg) repeat-x;height:1px;left:0;right:0;}b.svelte-dy2xt3 table tr:first-child:before {background:none;}b.svelte-dy2xt3 table td:before {background:var(--vlineSvg) repeat-y;bottom:0;left:0;top:0;width:1px;}b.svelte-dy2xt3 table td:first-child:before {background:none;}b.svelte-dy2xt3 table thead {position:relative;background:linear-gradient(0, rgba(255,255,255,0.122), rgba(255,255,255,0.38));box-shadow:0 0 3px rgba(0,0,0,0.078) inset;}b.svelte-dy2xt3 table thead:after {content:'';position:absolute;left:0;right:0;bottom:0;height:1px;background:var(--hlineSolidSvg) no-repeat;background-size:100% 100%;}b.svelte-dy2xt3 table tbody > tr > td,\nb.svelte-dy2xt3 table thead > tr > th {border:none;padding:16px;}b.svelte-dy2xt3 summary + table {margin-top:-16px;}b.svelte-dy2xt3 summary + table thead {box-shadow:none;}b.svelte-dy2xt3 summary + table tbody > tr:first-child::before {background:var(--hlineSvg) repeat-x;}b.svelte-dy2xt3 details > table {border:0;}b.svelte-dy2xt3 details > table:last-child {margin-bottom:-8px;}\n@media (max-width: 800px) {b.svelte-dy2xt3 h1 {font-size:20px;}b.svelte-dy2xt3 h2 {font-size:17px;}b.svelte-dy2xt3 pre {padding:12px;border-radius:8px;font-size:12px;}b.svelte-dy2xt3 blockquote.alert {padding:12px 14px 12px 42px;border-radius:8px;}b.svelte-dy2xt3 blockquote.alert .alert-title {left:12px;top:13px;}b.svelte-dy2xt3 blockquote.alert .alert-title .alert-icon {width:18px;height:18px;}\n}"
};
function K(e, t) {
	w(t, !0), x(e, J);
	let n = m(t, "readme", 7), a = d(null);
	i(() => {
		((e, t) => {
			var n;
			let a;
			if (!e || !t) return;
			e.innerHTML = "";
			let r = (n = {
				add_token: W,
				end_token: H,
				add_text: Z,
				set_attr: U,
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
			}, (a = new Uint32Array(24))[0] = 1, {
				renderer: n,
				text: "",
				pending: "",
				tokens: a,
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
			I(r, t), r.pending.length > 0 && I(r, "\n"), e.querySelectorAll("pre code").forEach((e) => {
				let t = [];
				e.classList.forEach((e) => {
					e.startsWith("language-") || e.startsWith("lang-") || t.push("language-" + e);
				}), t.forEach((t) => {
					e.classList.add(t), e.parentElement && "PRE" == e.parentElement.tagName && e.parentElement.classList.add(t);
				}), Y.default.highlightElement(e);
			}), e.querySelectorAll("blockquote").forEach((e) => {
				let t = e.firstElementChild || e, n = t.innerHTML;
				if (n) {
					let a = n.match(/^(?:\[!(TIP|NOTE|WARNING|IMPORTANT|CAUTION)\]|<a>!(TIP|NOTE|WARNING|IMPORTANT|CAUTION)<\/a>)\s*(?:<br\s*\/?>)?/i);
					if (a) {
						let r = (a[1] || a[2]).toUpperCase(), i = n.slice(a[0].length).trim(), s = document.createElement("b"), o = document.createElement("i");
						"" == i ? t.remove() : t.innerHTML = i, e.classList.add("alert", "alert-" + r.toLowerCase()), o.className = "alert-icon", s.className = "alert-title", s.appendChild(o), s.appendChild(document.createTextNode(" " + r)), e.insertBefore(s, e.firstChild);
					}
				}
			});
		})(g(a), n());
	});
	var r = V();
	return f(r, (e) => l(a, e), () => g(a)), y(e, r), c({
		get readme() {
			return n();
		},
		set readme($$value) {
			n($$value), o();
		}
	});
}
b(K, { readme: {} }, [], [], { mode: "open" });
var X = "//github.com/webc-site/webc-zh", Q = (e) => "//github.com/webc-site/webc-zh/tree/main/" + e, ee = v("<a target=\"_blank\" title=\"查看源码\" aria-label=\"GitHub\" class=\"svelte-1w7oxzi\"></a>"), et = {
	hash: "svelte-1w7oxzi",
	code: "a.svelte-1w7oxzi {display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:50%;border:1px solid rgba(0,0,0,0.078);color:#1d1d1f;background:linear-gradient(135deg, rgba(255,255,255,0.4), rgba(255,255,255,0.122));backdrop-filter:blur(8px);box-shadow:inset 0 1px 1px rgba(255,255,255,0.6), 0 1px 2px rgba(0,0,0,0.039);transition:all 0.25s cubic-bezier(0.4, 0, 0.2, 1);text-decoration:none;box-sizing:border-box;}a.svelte-1w7oxzi::before {content:'';width:20px;height:20px;background-color:currentColor;mask-image:var(--githubSvg);mask-size:contain;mask-repeat:no-repeat;mask-position:center;}a.svelte-1w7oxzi:hover {color:#0071e3;border-color:rgba(0,71,227,0.2);background:linear-gradient(135deg, rgba(255,255,255,0.6), rgba(255,255,255,0.2));transform:scale(1.06) translateY(-1px);box-shadow:inset 0 1px 1px rgba(255,255,255,0.8), 0 4px 12px rgba(0,0,0,0.059), 0 1px 2px rgba(0,0,0,0.039);}a.svelte-1w7oxzi:active {transform:scale(0.96);background:linear-gradient(135deg, rgba(255,255,255,0.302), rgba(255,255,255,0.059));box-shadow:inset 0 1px 2px rgba(0,0,0,0.051);}"
};
function en(e, t) {
	w(t, !0), x(e, et);
	let n = m(t, "url", 7, "");
	var i = h(), l = a(i), d = (e) => {
		var t = ee();
		s(() => k(t, "href", n())), r("click", t, (e) => e.stopPropagation()), y(e, t);
	};
	return p(l, (e) => {
		n() && e(d);
	}), y(e, i), c({
		get url() {
			return n();
		},
		set url($$value = "") {
			n($$value), o();
		}
	});
}
u(["click"]), b(en, { url: {} }, [], [], { mode: "open" });
export { K as i, Q as n, X as r, en as t };
