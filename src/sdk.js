!(function(t) {
	var e = {};
	function n(r) {
		if (e[r]) return e[r].exports;
		var i = (e[r] = { i: r, l: !1, exports: {} });
		return t[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
	}
	(n.m = t),
		(n.c = e),
		(n.d = function(t, e, r) {
			n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
		}),
		(n.r = function(t) {
			"undefined" != typeof Symbol &&
				Symbol.toStringTag &&
				Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
				Object.defineProperty(t, "__esModule", { value: !0 });
		}),
		(n.t = function(t, e) {
			if ((1 & e && (t = n(t)), 8 & e)) return t;
			if (4 & e && "object" == typeof t && t && t.__esModule) return t;
			var r = Object.create(null);
			if ((n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
				for (var i in t)
					n.d(
						r,
						i,
						function(e) {
							return t[e];
						}.bind(null, i),
					);
			return r;
		}),
		(n.n = function(t) {
			var e =
				t && t.__esModule
					? function() {
							return t.default;
					  }
					: function() {
							return t;
					  };
			return n.d(e, "a", e), e;
		}),
		(n.o = function(t, e) {
			return Object.prototype.hasOwnProperty.call(t, e);
		}),
		(n.p = ""),
		n((n.s = 40));
})([
	function(t, e, n) {
		t.exports = n(41);
	},
	function(t, e, n) {
		(function(r) {
			(e.log = function(...t) {
				return "object" == typeof console && console.log && console.log(...t);
			}),
				(e.formatArgs = function(e) {
					if (
						((e[0] =
							(this.useColors ? "%c" : "") +
							this.namespace +
							(this.useColors ? " %c" : " ") +
							e[0] +
							(this.useColors ? "%c " : " ") +
							"+" +
							t.exports.humanize(this.diff)),
						!this.useColors)
					)
						return;
					const n = "color: " + this.color;
					e.splice(1, 0, n, "color: inherit");
					let r = 0,
						i = 0;
					e[0].replace(/%[a-zA-Z%]/g, t => {
						"%%" !== t && (r++, "%c" === t && (i = r));
					}),
						e.splice(i, 0, n);
				}),
				(e.save = function(t) {
					try {
						t ? e.storage.setItem("debug", t) : e.storage.removeItem("debug");
					} catch (t) {}
				}),
				(e.load = function() {
					let t;
					try {
						t = e.storage.getItem("debug");
					} catch (t) {}
					!t && void 0 !== r && "env" in r && (t = r.env.DEBUG);
					return t;
				}),
				(e.useColors = function() {
					if (
						"undefined" != typeof window &&
						window.process &&
						("renderer" === window.process.type || window.process.__nwjs)
					)
						return !0;
					if (
						"undefined" != typeof navigator &&
						navigator.userAgent &&
						navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
					)
						return !1;
					return (
						("undefined" != typeof document &&
							document.documentElement &&
							document.documentElement.style &&
							document.documentElement.style.WebkitAppearance) ||
						("undefined" != typeof window &&
							window.console &&
							(window.console.firebug || (window.console.exception && window.console.table))) ||
						("undefined" != typeof navigator &&
							navigator.userAgent &&
							navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
							parseInt(RegExp.$1, 10) >= 31) ||
						("undefined" != typeof navigator &&
							navigator.userAgent &&
							navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
					);
				}),
				(e.storage = (function() {
					try {
						return localStorage;
					} catch (t) {}
				})()),
				(e.colors = [
					"#0000CC",
					"#0000FF",
					"#0033CC",
					"#0033FF",
					"#0066CC",
					"#0066FF",
					"#0099CC",
					"#0099FF",
					"#00CC00",
					"#00CC33",
					"#00CC66",
					"#00CC99",
					"#00CCCC",
					"#00CCFF",
					"#3300CC",
					"#3300FF",
					"#3333CC",
					"#3333FF",
					"#3366CC",
					"#3366FF",
					"#3399CC",
					"#3399FF",
					"#33CC00",
					"#33CC33",
					"#33CC66",
					"#33CC99",
					"#33CCCC",
					"#33CCFF",
					"#6600CC",
					"#6600FF",
					"#6633CC",
					"#6633FF",
					"#66CC00",
					"#66CC33",
					"#9900CC",
					"#9900FF",
					"#9933CC",
					"#9933FF",
					"#99CC00",
					"#99CC33",
					"#CC0000",
					"#CC0033",
					"#CC0066",
					"#CC0099",
					"#CC00CC",
					"#CC00FF",
					"#CC3300",
					"#CC3333",
					"#CC3366",
					"#CC3399",
					"#CC33CC",
					"#CC33FF",
					"#CC6600",
					"#CC6633",
					"#CC9900",
					"#CC9933",
					"#CCCC00",
					"#CCCC33",
					"#FF0000",
					"#FF0033",
					"#FF0066",
					"#FF0099",
					"#FF00CC",
					"#FF00FF",
					"#FF3300",
					"#FF3333",
					"#FF3366",
					"#FF3399",
					"#FF33CC",
					"#FF33FF",
					"#FF6600",
					"#FF6633",
					"#FF9900",
					"#FF9933",
					"#FFCC00",
					"#FFCC33",
				]),
				(t.exports = n(43)(e));
			const { formatters: i } = t.exports;
			i.j = function(t) {
				try {
					return JSON.stringify(t);
				} catch (t) {
					return "[UnexpectedJSONParseError]: " + t.message;
				}
			};
		}.call(this, n(2)));
	},
	function(t, e) {
		var n,
			r,
			i = (t.exports = {});
		function o() {
			throw new Error("setTimeout has not been defined");
		}
		function s() {
			throw new Error("clearTimeout has not been defined");
		}
		function a(t) {
			if (n === setTimeout) return setTimeout(t, 0);
			if ((n === o || !n) && setTimeout) return (n = setTimeout), setTimeout(t, 0);
			try {
				return n(t, 0);
			} catch (e) {
				try {
					return n.call(null, t, 0);
				} catch (e) {
					return n.call(this, t, 0);
				}
			}
		}
		!(function() {
			try {
				n = "function" == typeof setTimeout ? setTimeout : o;
			} catch (t) {
				n = o;
			}
			try {
				r = "function" == typeof clearTimeout ? clearTimeout : s;
			} catch (t) {
				r = s;
			}
		})();
		var c,
			u = [],
			h = !1,
			f = -1;
		function l() {
			h && c && ((h = !1), c.length ? (u = c.concat(u)) : (f = -1), u.length && p());
		}
		function p() {
			if (!h) {
				var t = a(l);
				h = !0;
				for (var e = u.length; e; ) {
					for (c = u, u = []; ++f < e; ) c && c[f].run();
					(f = -1), (e = u.length);
				}
				(c = null),
					(h = !1),
					(function(t) {
						if (r === clearTimeout) return clearTimeout(t);
						if ((r === s || !r) && clearTimeout) return (r = clearTimeout), clearTimeout(t);
						try {
							r(t);
						} catch (e) {
							try {
								return r.call(null, t);
							} catch (e) {
								return r.call(this, t);
							}
						}
					})(t);
			}
		}
		function d(t, e) {
			(this.fun = t), (this.array = e);
		}
		function y() {}
		(i.nextTick = function(t) {
			var e = new Array(arguments.length - 1);
			if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
			u.push(new d(t, e)), 1 !== u.length || h || a(p);
		}),
			(d.prototype.run = function() {
				this.fun.apply(null, this.array);
			}),
			(i.title = "browser"),
			(i.browser = !0),
			(i.env = {}),
			(i.argv = []),
			(i.version = ""),
			(i.versions = {}),
			(i.on = y),
			(i.addListener = y),
			(i.once = y),
			(i.off = y),
			(i.removeListener = y),
			(i.removeAllListeners = y),
			(i.emit = y),
			(i.prependListener = y),
			(i.prependOnceListener = y),
			(i.listeners = function(t) {
				return [];
			}),
			(i.binding = function(t) {
				throw new Error("process.binding is not supported");
			}),
			(i.cwd = function() {
				return "/";
			}),
			(i.chdir = function(t) {
				throw new Error("process.chdir is not supported");
			}),
			(i.umask = function() {
				return 0;
			});
	},
	function(t, e, n) {
		"use strict";
		(function(t) {
			/*!
			 * The buffer module from node.js, for the browser.
			 *
			 * @author   Feross Aboukhadijeh <http://feross.org>
			 * @license  MIT
			 */
			var r = n(49),
				i = n(50),
				o = n(51);
			function s() {
				return c.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
			}
			function a(t, e) {
				if (s() < e) throw new RangeError("Invalid typed array length");
				return (
					c.TYPED_ARRAY_SUPPORT
						? ((t = new Uint8Array(e)).__proto__ = c.prototype)
						: (null === t && (t = new c(e)), (t.length = e)),
					t
				);
			}
			function c(t, e, n) {
				if (!(c.TYPED_ARRAY_SUPPORT || this instanceof c)) return new c(t, e, n);
				if ("number" == typeof t) {
					if ("string" == typeof e)
						throw new Error("If encoding is specified then the first argument must be a string");
					return f(this, t);
				}
				return u(this, t, e, n);
			}
			function u(t, e, n, r) {
				if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
				return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer
					? (function(t, e, n, r) {
							if ((e.byteLength, n < 0 || e.byteLength < n)) throw new RangeError("'offset' is out of bounds");
							if (e.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
							e =
								void 0 === n && void 0 === r
									? new Uint8Array(e)
									: void 0 === r
									? new Uint8Array(e, n)
									: new Uint8Array(e, n, r);
							c.TYPED_ARRAY_SUPPORT ? ((t = e).__proto__ = c.prototype) : (t = l(t, e));
							return t;
					  })(t, e, n, r)
					: "string" == typeof e
					? (function(t, e, n) {
							("string" == typeof n && "" !== n) || (n = "utf8");
							if (!c.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
							var r = 0 | d(e, n),
								i = (t = a(t, r)).write(e, n);
							i !== r && (t = t.slice(0, i));
							return t;
					  })(t, e, n)
					: (function(t, e) {
							if (c.isBuffer(e)) {
								var n = 0 | p(e.length);
								return 0 === (t = a(t, n)).length || e.copy(t, 0, 0, n), t;
							}
							if (e) {
								if (("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer) || "length" in e)
									return "number" != typeof e.length || (r = e.length) != r ? a(t, 0) : l(t, e);
								if ("Buffer" === e.type && o(e.data)) return l(t, e.data);
							}
							var r;
							throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
					  })(t, e);
			}
			function h(t) {
				if ("number" != typeof t) throw new TypeError('"size" argument must be a number');
				if (t < 0) throw new RangeError('"size" argument must not be negative');
			}
			function f(t, e) {
				if ((h(e), (t = a(t, e < 0 ? 0 : 0 | p(e))), !c.TYPED_ARRAY_SUPPORT)) for (var n = 0; n < e; ++n) t[n] = 0;
				return t;
			}
			function l(t, e) {
				var n = e.length < 0 ? 0 : 0 | p(e.length);
				t = a(t, n);
				for (var r = 0; r < n; r += 1) t[r] = 255 & e[r];
				return t;
			}
			function p(t) {
				if (t >= s())
					throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s().toString(16) + " bytes");
				return 0 | t;
			}
			function d(t, e) {
				if (c.isBuffer(t)) return t.length;
				if (
					"undefined" != typeof ArrayBuffer &&
					"function" == typeof ArrayBuffer.isView &&
					(ArrayBuffer.isView(t) || t instanceof ArrayBuffer)
				)
					return t.byteLength;
				"string" != typeof t && (t = "" + t);
				var n = t.length;
				if (0 === n) return 0;
				for (var r = !1; ; )
					switch (e) {
						case "ascii":
						case "latin1":
						case "binary":
							return n;
						case "utf8":
						case "utf-8":
						case void 0:
							return U(t).length;
						case "ucs2":
						case "ucs-2":
						case "utf16le":
						case "utf-16le":
							return 2 * n;
						case "hex":
							return n >>> 1;
						case "base64":
							return q(t).length;
						default:
							if (r) return U(t).length;
							(e = ("" + e).toLowerCase()), (r = !0);
					}
			}
			function y(t, e, n) {
				var r = !1;
				if (((void 0 === e || e < 0) && (e = 0), e > this.length)) return "";
				if (((void 0 === n || n > this.length) && (n = this.length), n <= 0)) return "";
				if ((n >>>= 0) <= (e >>>= 0)) return "";
				for (t || (t = "utf8"); ; )
					switch (t) {
						case "hex":
							return x(this, e, n);
						case "utf8":
						case "utf-8":
							return k(this, e, n);
						case "ascii":
							return A(this, e, n);
						case "latin1":
						case "binary":
							return T(this, e, n);
						case "base64":
							return S(this, e, n);
						case "ucs2":
						case "ucs-2":
						case "utf16le":
						case "utf-16le":
							return P(this, e, n);
						default:
							if (r) throw new TypeError("Unknown encoding: " + t);
							(t = (t + "").toLowerCase()), (r = !0);
					}
			}
			function g(t, e, n) {
				var r = t[e];
				(t[e] = t[n]), (t[n] = r);
			}
			function m(t, e, n, r, i) {
				if (0 === t.length) return -1;
				if (
					("string" == typeof n
						? ((r = n), (n = 0))
						: n > 2147483647
						? (n = 2147483647)
						: n < -2147483648 && (n = -2147483648),
					(n = +n),
					isNaN(n) && (n = i ? 0 : t.length - 1),
					n < 0 && (n = t.length + n),
					n >= t.length)
				) {
					if (i) return -1;
					n = t.length - 1;
				} else if (n < 0) {
					if (!i) return -1;
					n = 0;
				}
				if (("string" == typeof e && (e = c.from(e, r)), c.isBuffer(e))) return 0 === e.length ? -1 : v(t, e, n, r, i);
				if ("number" == typeof e)
					return (
						(e &= 255),
						c.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf
							? i
								? Uint8Array.prototype.indexOf.call(t, e, n)
								: Uint8Array.prototype.lastIndexOf.call(t, e, n)
							: v(t, [e], n, r, i)
					);
				throw new TypeError("val must be string, number or Buffer");
			}
			function v(t, e, n, r, i) {
				var o,
					s = 1,
					a = t.length,
					c = e.length;
				if (
					void 0 !== r &&
					("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)
				) {
					if (t.length < 2 || e.length < 2) return -1;
					(s = 2), (a /= 2), (c /= 2), (n /= 2);
				}
				function u(t, e) {
					return 1 === s ? t[e] : t.readUInt16BE(e * s);
				}
				if (i) {
					var h = -1;
					for (o = n; o < a; o++)
						if (u(t, o) === u(e, -1 === h ? 0 : o - h)) {
							if ((-1 === h && (h = o), o - h + 1 === c)) return h * s;
						} else -1 !== h && (o -= o - h), (h = -1);
				} else
					for (n + c > a && (n = a - c), o = n; o >= 0; o--) {
						for (var f = !0, l = 0; l < c; l++)
							if (u(t, o + l) !== u(e, l)) {
								f = !1;
								break;
							}
						if (f) return o;
					}
				return -1;
			}
			function b(t, e, n, r) {
				n = Number(n) || 0;
				var i = t.length - n;
				r ? (r = Number(r)) > i && (r = i) : (r = i);
				var o = e.length;
				if (o % 2 != 0) throw new TypeError("Invalid hex string");
				r > o / 2 && (r = o / 2);
				for (var s = 0; s < r; ++s) {
					var a = parseInt(e.substr(2 * s, 2), 16);
					if (isNaN(a)) return s;
					t[n + s] = a;
				}
				return s;
			}
			function w(t, e, n, r) {
				return H(U(e, t.length - n), t, n, r);
			}
			function _(t, e, n, r) {
				return H(
					(function(t) {
						for (var e = [], n = 0; n < t.length; ++n) e.push(255 & t.charCodeAt(n));
						return e;
					})(e),
					t,
					n,
					r,
				);
			}
			function C(t, e, n, r) {
				return _(t, e, n, r);
			}
			function E(t, e, n, r) {
				return H(q(e), t, n, r);
			}
			function R(t, e, n, r) {
				return H(
					(function(t, e) {
						for (var n, r, i, o = [], s = 0; s < t.length && !((e -= 2) < 0); ++s)
							(n = t.charCodeAt(s)), (r = n >> 8), (i = n % 256), o.push(i), o.push(r);
						return o;
					})(e, t.length - n),
					t,
					n,
					r,
				);
			}
			function S(t, e, n) {
				return 0 === e && n === t.length ? r.fromByteArray(t) : r.fromByteArray(t.slice(e, n));
			}
			function k(t, e, n) {
				n = Math.min(t.length, n);
				for (var r = [], i = e; i < n; ) {
					var o,
						s,
						a,
						c,
						u = t[i],
						h = null,
						f = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
					if (i + f <= n)
						switch (f) {
							case 1:
								u < 128 && (h = u);
								break;
							case 2:
								128 == (192 & (o = t[i + 1])) && (c = ((31 & u) << 6) | (63 & o)) > 127 && (h = c);
								break;
							case 3:
								(o = t[i + 1]),
									(s = t[i + 2]),
									128 == (192 & o) &&
										128 == (192 & s) &&
										(c = ((15 & u) << 12) | ((63 & o) << 6) | (63 & s)) > 2047 &&
										(c < 55296 || c > 57343) &&
										(h = c);
								break;
							case 4:
								(o = t[i + 1]),
									(s = t[i + 2]),
									(a = t[i + 3]),
									128 == (192 & o) &&
										128 == (192 & s) &&
										128 == (192 & a) &&
										(c = ((15 & u) << 18) | ((63 & o) << 12) | ((63 & s) << 6) | (63 & a)) > 65535 &&
										c < 1114112 &&
										(h = c);
						}
					null === h
						? ((h = 65533), (f = 1))
						: h > 65535 && ((h -= 65536), r.push(((h >>> 10) & 1023) | 55296), (h = 56320 | (1023 & h))),
						r.push(h),
						(i += f);
				}
				return (function(t) {
					var e = t.length;
					if (e <= 4096) return String.fromCharCode.apply(String, t);
					var n = "",
						r = 0;
					for (; r < e; ) n += String.fromCharCode.apply(String, t.slice(r, (r += 4096)));
					return n;
				})(r);
			}
			(e.Buffer = c),
				(e.SlowBuffer = function(t) {
					+t != t && (t = 0);
					return c.alloc(+t);
				}),
				(e.INSPECT_MAX_BYTES = 50),
				(c.TYPED_ARRAY_SUPPORT =
					void 0 !== t.TYPED_ARRAY_SUPPORT
						? t.TYPED_ARRAY_SUPPORT
						: (function() {
								try {
									var t = new Uint8Array(1);
									return (
										(t.__proto__ = {
											__proto__: Uint8Array.prototype,
											foo: function() {
												return 42;
											},
										}),
										42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength
									);
								} catch (t) {
									return !1;
								}
						  })()),
				(e.kMaxLength = s()),
				(c.poolSize = 8192),
				(c._augment = function(t) {
					return (t.__proto__ = c.prototype), t;
				}),
				(c.from = function(t, e, n) {
					return u(null, t, e, n);
				}),
				c.TYPED_ARRAY_SUPPORT &&
					((c.prototype.__proto__ = Uint8Array.prototype),
					(c.__proto__ = Uint8Array),
					"undefined" != typeof Symbol &&
						Symbol.species &&
						c[Symbol.species] === c &&
						Object.defineProperty(c, Symbol.species, { value: null, configurable: !0 })),
				(c.alloc = function(t, e, n) {
					return (function(t, e, n, r) {
						return (
							h(e),
							e <= 0 ? a(t, e) : void 0 !== n ? ("string" == typeof r ? a(t, e).fill(n, r) : a(t, e).fill(n)) : a(t, e)
						);
					})(null, t, e, n);
				}),
				(c.allocUnsafe = function(t) {
					return f(null, t);
				}),
				(c.allocUnsafeSlow = function(t) {
					return f(null, t);
				}),
				(c.isBuffer = function(t) {
					return !(null == t || !t._isBuffer);
				}),
				(c.compare = function(t, e) {
					if (!c.isBuffer(t) || !c.isBuffer(e)) throw new TypeError("Arguments must be Buffers");
					if (t === e) return 0;
					for (var n = t.length, r = e.length, i = 0, o = Math.min(n, r); i < o; ++i)
						if (t[i] !== e[i]) {
							(n = t[i]), (r = e[i]);
							break;
						}
					return n < r ? -1 : r < n ? 1 : 0;
				}),
				(c.isEncoding = function(t) {
					switch (String(t).toLowerCase()) {
						case "hex":
						case "utf8":
						case "utf-8":
						case "ascii":
						case "latin1":
						case "binary":
						case "base64":
						case "ucs2":
						case "ucs-2":
						case "utf16le":
						case "utf-16le":
							return !0;
						default:
							return !1;
					}
				}),
				(c.concat = function(t, e) {
					if (!o(t)) throw new TypeError('"list" argument must be an Array of Buffers');
					if (0 === t.length) return c.alloc(0);
					var n;
					if (void 0 === e) for (e = 0, n = 0; n < t.length; ++n) e += t[n].length;
					var r = c.allocUnsafe(e),
						i = 0;
					for (n = 0; n < t.length; ++n) {
						var s = t[n];
						if (!c.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
						s.copy(r, i), (i += s.length);
					}
					return r;
				}),
				(c.byteLength = d),
				(c.prototype._isBuffer = !0),
				(c.prototype.swap16 = function() {
					var t = this.length;
					if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
					for (var e = 0; e < t; e += 2) g(this, e, e + 1);
					return this;
				}),
				(c.prototype.swap32 = function() {
					var t = this.length;
					if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
					for (var e = 0; e < t; e += 4) g(this, e, e + 3), g(this, e + 1, e + 2);
					return this;
				}),
				(c.prototype.swap64 = function() {
					var t = this.length;
					if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
					for (var e = 0; e < t; e += 8)
						g(this, e, e + 7), g(this, e + 1, e + 6), g(this, e + 2, e + 5), g(this, e + 3, e + 4);
					return this;
				}),
				(c.prototype.toString = function() {
					var t = 0 | this.length;
					return 0 === t ? "" : 0 === arguments.length ? k(this, 0, t) : y.apply(this, arguments);
				}),
				(c.prototype.equals = function(t) {
					if (!c.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
					return this === t || 0 === c.compare(this, t);
				}),
				(c.prototype.inspect = function() {
					var t = "",
						n = e.INSPECT_MAX_BYTES;
					return (
						this.length > 0 &&
							((t = this.toString("hex", 0, n)
								.match(/.{2}/g)
								.join(" ")),
							this.length > n && (t += " ... ")),
						"<Buffer " + t + ">"
					);
				}),
				(c.prototype.compare = function(t, e, n, r, i) {
					if (!c.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
					if (
						(void 0 === e && (e = 0),
						void 0 === n && (n = t ? t.length : 0),
						void 0 === r && (r = 0),
						void 0 === i && (i = this.length),
						e < 0 || n > t.length || r < 0 || i > this.length)
					)
						throw new RangeError("out of range index");
					if (r >= i && e >= n) return 0;
					if (r >= i) return -1;
					if (e >= n) return 1;
					if (this === t) return 0;
					for (
						var o = (i >>>= 0) - (r >>>= 0),
							s = (n >>>= 0) - (e >>>= 0),
							a = Math.min(o, s),
							u = this.slice(r, i),
							h = t.slice(e, n),
							f = 0;
						f < a;
						++f
					)
						if (u[f] !== h[f]) {
							(o = u[f]), (s = h[f]);
							break;
						}
					return o < s ? -1 : s < o ? 1 : 0;
				}),
				(c.prototype.includes = function(t, e, n) {
					return -1 !== this.indexOf(t, e, n);
				}),
				(c.prototype.indexOf = function(t, e, n) {
					return m(this, t, e, n, !0);
				}),
				(c.prototype.lastIndexOf = function(t, e, n) {
					return m(this, t, e, n, !1);
				}),
				(c.prototype.write = function(t, e, n, r) {
					if (void 0 === e) (r = "utf8"), (n = this.length), (e = 0);
					else if (void 0 === n && "string" == typeof e) (r = e), (n = this.length), (e = 0);
					else {
						if (!isFinite(e))
							throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
						(e |= 0), isFinite(n) ? ((n |= 0), void 0 === r && (r = "utf8")) : ((r = n), (n = void 0));
					}
					var i = this.length - e;
					if (((void 0 === n || n > i) && (n = i), (t.length > 0 && (n < 0 || e < 0)) || e > this.length))
						throw new RangeError("Attempt to write outside buffer bounds");
					r || (r = "utf8");
					for (var o = !1; ; )
						switch (r) {
							case "hex":
								return b(this, t, e, n);
							case "utf8":
							case "utf-8":
								return w(this, t, e, n);
							case "ascii":
								return _(this, t, e, n);
							case "latin1":
							case "binary":
								return C(this, t, e, n);
							case "base64":
								return E(this, t, e, n);
							case "ucs2":
							case "ucs-2":
							case "utf16le":
							case "utf-16le":
								return R(this, t, e, n);
							default:
								if (o) throw new TypeError("Unknown encoding: " + r);
								(r = ("" + r).toLowerCase()), (o = !0);
						}
				}),
				(c.prototype.toJSON = function() {
					return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
				});
			function A(t, e, n) {
				var r = "";
				n = Math.min(t.length, n);
				for (var i = e; i < n; ++i) r += String.fromCharCode(127 & t[i]);
				return r;
			}
			function T(t, e, n) {
				var r = "";
				n = Math.min(t.length, n);
				for (var i = e; i < n; ++i) r += String.fromCharCode(t[i]);
				return r;
			}
			function x(t, e, n) {
				var r = t.length;
				(!e || e < 0) && (e = 0), (!n || n < 0 || n > r) && (n = r);
				for (var i = "", o = e; o < n; ++o) i += j(t[o]);
				return i;
			}
			function P(t, e, n) {
				for (var r = t.slice(e, n), i = "", o = 0; o < r.length; o += 2)
					i += String.fromCharCode(r[o] + 256 * r[o + 1]);
				return i;
			}
			function O(t, e, n) {
				if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
				if (t + e > n) throw new RangeError("Trying to access beyond buffer length");
			}
			function N(t, e, n, r, i, o) {
				if (!c.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
				if (e > i || e < o) throw new RangeError('"value" argument is out of bounds');
				if (n + r > t.length) throw new RangeError("Index out of range");
			}
			function B(t, e, n, r) {
				e < 0 && (e = 65535 + e + 1);
				for (var i = 0, o = Math.min(t.length - n, 2); i < o; ++i)
					t[n + i] = (e & (255 << (8 * (r ? i : 1 - i)))) >>> (8 * (r ? i : 1 - i));
			}
			function L(t, e, n, r) {
				e < 0 && (e = 4294967295 + e + 1);
				for (var i = 0, o = Math.min(t.length - n, 4); i < o; ++i) t[n + i] = (e >>> (8 * (r ? i : 3 - i))) & 255;
			}
			function M(t, e, n, r, i, o) {
				if (n + r > t.length) throw new RangeError("Index out of range");
				if (n < 0) throw new RangeError("Index out of range");
			}
			function D(t, e, n, r, o) {
				return o || M(t, 0, n, 4), i.write(t, e, n, r, 23, 4), n + 4;
			}
			function F(t, e, n, r, o) {
				return o || M(t, 0, n, 8), i.write(t, e, n, r, 52, 8), n + 8;
			}
			(c.prototype.slice = function(t, e) {
				var n,
					r = this.length;
				if (
					((t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
					(e = void 0 === e ? r : ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
					e < t && (e = t),
					c.TYPED_ARRAY_SUPPORT)
				)
					(n = this.subarray(t, e)).__proto__ = c.prototype;
				else {
					var i = e - t;
					n = new c(i, void 0);
					for (var o = 0; o < i; ++o) n[o] = this[o + t];
				}
				return n;
			}),
				(c.prototype.readUIntLE = function(t, e, n) {
					(t |= 0), (e |= 0), n || O(t, e, this.length);
					for (var r = this[t], i = 1, o = 0; ++o < e && (i *= 256); ) r += this[t + o] * i;
					return r;
				}),
				(c.prototype.readUIntBE = function(t, e, n) {
					(t |= 0), (e |= 0), n || O(t, e, this.length);
					for (var r = this[t + --e], i = 1; e > 0 && (i *= 256); ) r += this[t + --e] * i;
					return r;
				}),
				(c.prototype.readUInt8 = function(t, e) {
					return e || O(t, 1, this.length), this[t];
				}),
				(c.prototype.readUInt16LE = function(t, e) {
					return e || O(t, 2, this.length), this[t] | (this[t + 1] << 8);
				}),
				(c.prototype.readUInt16BE = function(t, e) {
					return e || O(t, 2, this.length), (this[t] << 8) | this[t + 1];
				}),
				(c.prototype.readUInt32LE = function(t, e) {
					return (
						e || O(t, 4, this.length), (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) + 16777216 * this[t + 3]
					);
				}),
				(c.prototype.readUInt32BE = function(t, e) {
					return (
						e || O(t, 4, this.length), 16777216 * this[t] + ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
					);
				}),
				(c.prototype.readIntLE = function(t, e, n) {
					(t |= 0), (e |= 0), n || O(t, e, this.length);
					for (var r = this[t], i = 1, o = 0; ++o < e && (i *= 256); ) r += this[t + o] * i;
					return r >= (i *= 128) && (r -= Math.pow(2, 8 * e)), r;
				}),
				(c.prototype.readIntBE = function(t, e, n) {
					(t |= 0), (e |= 0), n || O(t, e, this.length);
					for (var r = e, i = 1, o = this[t + --r]; r > 0 && (i *= 256); ) o += this[t + --r] * i;
					return o >= (i *= 128) && (o -= Math.pow(2, 8 * e)), o;
				}),
				(c.prototype.readInt8 = function(t, e) {
					return e || O(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t];
				}),
				(c.prototype.readInt16LE = function(t, e) {
					e || O(t, 2, this.length);
					var n = this[t] | (this[t + 1] << 8);
					return 32768 & n ? 4294901760 | n : n;
				}),
				(c.prototype.readInt16BE = function(t, e) {
					e || O(t, 2, this.length);
					var n = this[t + 1] | (this[t] << 8);
					return 32768 & n ? 4294901760 | n : n;
				}),
				(c.prototype.readInt32LE = function(t, e) {
					return e || O(t, 4, this.length), this[t] | (this[t + 1] << 8) | (this[t + 2] << 16) | (this[t + 3] << 24);
				}),
				(c.prototype.readInt32BE = function(t, e) {
					return e || O(t, 4, this.length), (this[t] << 24) | (this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3];
				}),
				(c.prototype.readFloatLE = function(t, e) {
					return e || O(t, 4, this.length), i.read(this, t, !0, 23, 4);
				}),
				(c.prototype.readFloatBE = function(t, e) {
					return e || O(t, 4, this.length), i.read(this, t, !1, 23, 4);
				}),
				(c.prototype.readDoubleLE = function(t, e) {
					return e || O(t, 8, this.length), i.read(this, t, !0, 52, 8);
				}),
				(c.prototype.readDoubleBE = function(t, e) {
					return e || O(t, 8, this.length), i.read(this, t, !1, 52, 8);
				}),
				(c.prototype.writeUIntLE = function(t, e, n, r) {
					((t = +t), (e |= 0), (n |= 0), r) || N(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
					var i = 1,
						o = 0;
					for (this[e] = 255 & t; ++o < n && (i *= 256); ) this[e + o] = (t / i) & 255;
					return e + n;
				}),
				(c.prototype.writeUIntBE = function(t, e, n, r) {
					((t = +t), (e |= 0), (n |= 0), r) || N(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
					var i = n - 1,
						o = 1;
					for (this[e + i] = 255 & t; --i >= 0 && (o *= 256); ) this[e + i] = (t / o) & 255;
					return e + n;
				}),
				(c.prototype.writeUInt8 = function(t, e, n) {
					return (
						(t = +t),
						(e |= 0),
						n || N(this, t, e, 1, 255, 0),
						c.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
						(this[e] = 255 & t),
						e + 1
					);
				}),
				(c.prototype.writeUInt16LE = function(t, e, n) {
					return (
						(t = +t),
						(e |= 0),
						n || N(this, t, e, 2, 65535, 0),
						c.TYPED_ARRAY_SUPPORT ? ((this[e] = 255 & t), (this[e + 1] = t >>> 8)) : B(this, t, e, !0),
						e + 2
					);
				}),
				(c.prototype.writeUInt16BE = function(t, e, n) {
					return (
						(t = +t),
						(e |= 0),
						n || N(this, t, e, 2, 65535, 0),
						c.TYPED_ARRAY_SUPPORT ? ((this[e] = t >>> 8), (this[e + 1] = 255 & t)) : B(this, t, e, !1),
						e + 2
					);
				}),
				(c.prototype.writeUInt32LE = function(t, e, n) {
					return (
						(t = +t),
						(e |= 0),
						n || N(this, t, e, 4, 4294967295, 0),
						c.TYPED_ARRAY_SUPPORT
							? ((this[e + 3] = t >>> 24), (this[e + 2] = t >>> 16), (this[e + 1] = t >>> 8), (this[e] = 255 & t))
							: L(this, t, e, !0),
						e + 4
					);
				}),
				(c.prototype.writeUInt32BE = function(t, e, n) {
					return (
						(t = +t),
						(e |= 0),
						n || N(this, t, e, 4, 4294967295, 0),
						c.TYPED_ARRAY_SUPPORT
							? ((this[e] = t >>> 24), (this[e + 1] = t >>> 16), (this[e + 2] = t >>> 8), (this[e + 3] = 255 & t))
							: L(this, t, e, !1),
						e + 4
					);
				}),
				(c.prototype.writeIntLE = function(t, e, n, r) {
					if (((t = +t), (e |= 0), !r)) {
						var i = Math.pow(2, 8 * n - 1);
						N(this, t, e, n, i - 1, -i);
					}
					var o = 0,
						s = 1,
						a = 0;
					for (this[e] = 255 & t; ++o < n && (s *= 256); )
						t < 0 && 0 === a && 0 !== this[e + o - 1] && (a = 1), (this[e + o] = (((t / s) >> 0) - a) & 255);
					return e + n;
				}),
				(c.prototype.writeIntBE = function(t, e, n, r) {
					if (((t = +t), (e |= 0), !r)) {
						var i = Math.pow(2, 8 * n - 1);
						N(this, t, e, n, i - 1, -i);
					}
					var o = n - 1,
						s = 1,
						a = 0;
					for (this[e + o] = 255 & t; --o >= 0 && (s *= 256); )
						t < 0 && 0 === a && 0 !== this[e + o + 1] && (a = 1), (this[e + o] = (((t / s) >> 0) - a) & 255);
					return e + n;
				}),
				(c.prototype.writeInt8 = function(t, e, n) {
					return (
						(t = +t),
						(e |= 0),
						n || N(this, t, e, 1, 127, -128),
						c.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
						t < 0 && (t = 255 + t + 1),
						(this[e] = 255 & t),
						e + 1
					);
				}),
				(c.prototype.writeInt16LE = function(t, e, n) {
					return (
						(t = +t),
						(e |= 0),
						n || N(this, t, e, 2, 32767, -32768),
						c.TYPED_ARRAY_SUPPORT ? ((this[e] = 255 & t), (this[e + 1] = t >>> 8)) : B(this, t, e, !0),
						e + 2
					);
				}),
				(c.prototype.writeInt16BE = function(t, e, n) {
					return (
						(t = +t),
						(e |= 0),
						n || N(this, t, e, 2, 32767, -32768),
						c.TYPED_ARRAY_SUPPORT ? ((this[e] = t >>> 8), (this[e + 1] = 255 & t)) : B(this, t, e, !1),
						e + 2
					);
				}),
				(c.prototype.writeInt32LE = function(t, e, n) {
					return (
						(t = +t),
						(e |= 0),
						n || N(this, t, e, 4, 2147483647, -2147483648),
						c.TYPED_ARRAY_SUPPORT
							? ((this[e] = 255 & t), (this[e + 1] = t >>> 8), (this[e + 2] = t >>> 16), (this[e + 3] = t >>> 24))
							: L(this, t, e, !0),
						e + 4
					);
				}),
				(c.prototype.writeInt32BE = function(t, e, n) {
					return (
						(t = +t),
						(e |= 0),
						n || N(this, t, e, 4, 2147483647, -2147483648),
						t < 0 && (t = 4294967295 + t + 1),
						c.TYPED_ARRAY_SUPPORT
							? ((this[e] = t >>> 24), (this[e + 1] = t >>> 16), (this[e + 2] = t >>> 8), (this[e + 3] = 255 & t))
							: L(this, t, e, !1),
						e + 4
					);
				}),
				(c.prototype.writeFloatLE = function(t, e, n) {
					return D(this, t, e, !0, n);
				}),
				(c.prototype.writeFloatBE = function(t, e, n) {
					return D(this, t, e, !1, n);
				}),
				(c.prototype.writeDoubleLE = function(t, e, n) {
					return F(this, t, e, !0, n);
				}),
				(c.prototype.writeDoubleBE = function(t, e, n) {
					return F(this, t, e, !1, n);
				}),
				(c.prototype.copy = function(t, e, n, r) {
					if (
						(n || (n = 0),
						r || 0 === r || (r = this.length),
						e >= t.length && (e = t.length),
						e || (e = 0),
						r > 0 && r < n && (r = n),
						r === n)
					)
						return 0;
					if (0 === t.length || 0 === this.length) return 0;
					if (e < 0) throw new RangeError("targetStart out of bounds");
					if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
					if (r < 0) throw new RangeError("sourceEnd out of bounds");
					r > this.length && (r = this.length), t.length - e < r - n && (r = t.length - e + n);
					var i,
						o = r - n;
					if (this === t && n < e && e < r) for (i = o - 1; i >= 0; --i) t[i + e] = this[i + n];
					else if (o < 1e3 || !c.TYPED_ARRAY_SUPPORT) for (i = 0; i < o; ++i) t[i + e] = this[i + n];
					else Uint8Array.prototype.set.call(t, this.subarray(n, n + o), e);
					return o;
				}),
				(c.prototype.fill = function(t, e, n, r) {
					if ("string" == typeof t) {
						if (
							("string" == typeof e
								? ((r = e), (e = 0), (n = this.length))
								: "string" == typeof n && ((r = n), (n = this.length)),
							1 === t.length)
						) {
							var i = t.charCodeAt(0);
							i < 256 && (t = i);
						}
						if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
						if ("string" == typeof r && !c.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
					} else "number" == typeof t && (t &= 255);
					if (e < 0 || this.length < e || this.length < n) throw new RangeError("Out of range index");
					if (n <= e) return this;
					var o;
					if (((e >>>= 0), (n = void 0 === n ? this.length : n >>> 0), t || (t = 0), "number" == typeof t))
						for (o = e; o < n; ++o) this[o] = t;
					else {
						var s = c.isBuffer(t) ? t : U(new c(t, r).toString()),
							a = s.length;
						for (o = 0; o < n - e; ++o) this[o + e] = s[o % a];
					}
					return this;
				});
			var I = /[^+\/0-9A-Za-z-_]/g;
			function j(t) {
				return t < 16 ? "0" + t.toString(16) : t.toString(16);
			}
			function U(t, e) {
				var n;
				e = e || 1 / 0;
				for (var r = t.length, i = null, o = [], s = 0; s < r; ++s) {
					if ((n = t.charCodeAt(s)) > 55295 && n < 57344) {
						if (!i) {
							if (n > 56319) {
								(e -= 3) > -1 && o.push(239, 191, 189);
								continue;
							}
							if (s + 1 === r) {
								(e -= 3) > -1 && o.push(239, 191, 189);
								continue;
							}
							i = n;
							continue;
						}
						if (n < 56320) {
							(e -= 3) > -1 && o.push(239, 191, 189), (i = n);
							continue;
						}
						n = 65536 + (((i - 55296) << 10) | (n - 56320));
					} else i && (e -= 3) > -1 && o.push(239, 191, 189);
					if (((i = null), n < 128)) {
						if ((e -= 1) < 0) break;
						o.push(n);
					} else if (n < 2048) {
						if ((e -= 2) < 0) break;
						o.push((n >> 6) | 192, (63 & n) | 128);
					} else if (n < 65536) {
						if ((e -= 3) < 0) break;
						o.push((n >> 12) | 224, ((n >> 6) & 63) | 128, (63 & n) | 128);
					} else {
						if (!(n < 1114112)) throw new Error("Invalid code point");
						if ((e -= 4) < 0) break;
						o.push((n >> 18) | 240, ((n >> 12) & 63) | 128, ((n >> 6) & 63) | 128, (63 & n) | 128);
					}
				}
				return o;
			}
			function q(t) {
				return r.toByteArray(
					(function(t) {
						if (
							(t = (function(t) {
								return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
							})(t).replace(I, "")).length < 2
						)
							return "";
						for (; t.length % 4 != 0; ) t += "=";
						return t;
					})(t),
				);
			}
			function H(t, e, n, r) {
				for (var i = 0; i < r && !(i + n >= e.length || i >= t.length); ++i) e[i + n] = t[i];
				return i;
			}
		}.call(this, n(6)));
	},
	function(t, e) {
		function n(t, e, n, r, i, o, s) {
			try {
				var a = t[o](s),
					c = a.value;
			} catch (t) {
				return void n(t);
			}
			a.done ? e(c) : Promise.resolve(c).then(r, i);
		}
		t.exports = function(t) {
			return function() {
				var e = this,
					r = arguments;
				return new Promise(function(i, o) {
					var s = t.apply(e, r);
					function a(t) {
						n(s, i, o, a, c, "next", t);
					}
					function c(t) {
						n(s, i, o, a, c, "throw", t);
					}
					a(void 0);
				});
			};
		};
	},
	function(t, e, n) {
		function r(t) {
			if (t)
				return (function(t) {
					for (var e in r.prototype) t[e] = r.prototype[e];
					return t;
				})(t);
		}
		(t.exports = r),
			(r.prototype.on = r.prototype.addEventListener = function(t, e) {
				return (
					(this._callbacks = this._callbacks || {}),
					(this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e),
					this
				);
			}),
			(r.prototype.once = function(t, e) {
				function n() {
					this.off(t, n), e.apply(this, arguments);
				}
				return (n.fn = e), this.on(t, n), this;
			}),
			(r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function(
				t,
				e,
			) {
				if (((this._callbacks = this._callbacks || {}), 0 == arguments.length)) return (this._callbacks = {}), this;
				var n,
					r = this._callbacks["$" + t];
				if (!r) return this;
				if (1 == arguments.length) return delete this._callbacks["$" + t], this;
				for (var i = 0; i < r.length; i++)
					if ((n = r[i]) === e || n.fn === e) {
						r.splice(i, 1);
						break;
					}
				return this;
			}),
			(r.prototype.emit = function(t) {
				this._callbacks = this._callbacks || {};
				var e = [].slice.call(arguments, 1),
					n = this._callbacks["$" + t];
				if (n) for (var r = 0, i = (n = n.slice(0)).length; r < i; ++r) n[r].apply(this, e);
				return this;
			}),
			(r.prototype.listeners = function(t) {
				return (this._callbacks = this._callbacks || {}), this._callbacks["$" + t] || [];
			}),
			(r.prototype.hasListeners = function(t) {
				return !!this.listeners(t).length;
			});
	},
	function(t, e) {
		var n;
		n = (function() {
			return this;
		})();
		try {
			n = n || new Function("return this")();
		} catch (t) {
			"object" == typeof window && (n = window);
		}
		t.exports = n;
	},
	function(t, e, n) {
		var r,
			i = n(56),
			o = n(24),
			s = n(57),
			a = n(58),
			c = n(59);
		"undefined" != typeof ArrayBuffer && (r = n(60));
		var u = "undefined" != typeof navigator && /Android/i.test(navigator.userAgent),
			h = "undefined" != typeof navigator && /PhantomJS/i.test(navigator.userAgent),
			f = u || h;
		e.protocol = 3;
		var l = (e.packets = { open: 0, close: 1, ping: 2, pong: 3, message: 4, upgrade: 5, noop: 6 }),
			p = i(l),
			d = { type: "error", data: "parser error" },
			y = n(61);
		function g(t, e, n) {
			for (
				var r = new Array(t.length),
					i = a(t.length, n),
					o = function(t, n, i) {
						e(n, function(e, n) {
							(r[t] = n), i(e, r);
						});
					},
					s = 0;
				s < t.length;
				s++
			)
				o(s, t[s], i);
		}
		(e.encodePacket = function(t, n, r, i) {
			"function" == typeof n && ((i = n), (n = !1)), "function" == typeof r && ((i = r), (r = null));
			var o = void 0 === t.data ? void 0 : t.data.buffer || t.data;
			if ("undefined" != typeof ArrayBuffer && o instanceof ArrayBuffer)
				return (function(t, n, r) {
					if (!n) return e.encodeBase64Packet(t, r);
					var i = t.data,
						o = new Uint8Array(i),
						s = new Uint8Array(1 + i.byteLength);
					s[0] = l[t.type];
					for (var a = 0; a < o.length; a++) s[a + 1] = o[a];
					return r(s.buffer);
				})(t, n, i);
			if (void 0 !== y && o instanceof y)
				return (function(t, n, r) {
					if (!n) return e.encodeBase64Packet(t, r);
					if (f)
						return (function(t, n, r) {
							if (!n) return e.encodeBase64Packet(t, r);
							var i = new FileReader();
							return (
								(i.onload = function() {
									e.encodePacket({ type: t.type, data: i.result }, n, !0, r);
								}),
								i.readAsArrayBuffer(t.data)
							);
						})(t, n, r);
					var i = new Uint8Array(1);
					i[0] = l[t.type];
					var o = new y([i.buffer, t.data]);
					return r(o);
				})(t, n, i);
			if (o && o.base64)
				return (function(t, n) {
					var r = "b" + e.packets[t.type] + t.data.data;
					return n(r);
				})(t, i);
			var s = l[t.type];
			return void 0 !== t.data && (s += r ? c.encode(String(t.data), { strict: !1 }) : String(t.data)), i("" + s);
		}),
			(e.encodeBase64Packet = function(t, n) {
				var r,
					i = "b" + e.packets[t.type];
				if (void 0 !== y && t.data instanceof y) {
					var o = new FileReader();
					return (
						(o.onload = function() {
							var t = o.result.split(",")[1];
							n(i + t);
						}),
						o.readAsDataURL(t.data)
					);
				}
				try {
					r = String.fromCharCode.apply(null, new Uint8Array(t.data));
				} catch (e) {
					for (var s = new Uint8Array(t.data), a = new Array(s.length), c = 0; c < s.length; c++) a[c] = s[c];
					r = String.fromCharCode.apply(null, a);
				}
				return (i += btoa(r)), n(i);
			}),
			(e.decodePacket = function(t, n, r) {
				if (void 0 === t) return d;
				if ("string" == typeof t) {
					if ("b" === t.charAt(0)) return e.decodeBase64Packet(t.substr(1), n);
					if (
						r &&
						!1 ===
							(t = (function(t) {
								try {
									t = c.decode(t, { strict: !1 });
								} catch (t) {
									return !1;
								}
								return t;
							})(t))
					)
						return d;
					var i = t.charAt(0);
					return Number(i) == i && p[i] ? (t.length > 1 ? { type: p[i], data: t.substring(1) } : { type: p[i] }) : d;
				}
				i = new Uint8Array(t)[0];
				var o = s(t, 1);
				return y && "blob" === n && (o = new y([o])), { type: p[i], data: o };
			}),
			(e.decodeBase64Packet = function(t, e) {
				var n = p[t.charAt(0)];
				if (!r) return { type: n, data: { base64: !0, data: t.substr(1) } };
				var i = r.decode(t.substr(1));
				return "blob" === e && y && (i = new y([i])), { type: n, data: i };
			}),
			(e.encodePayload = function(t, n, r) {
				"function" == typeof n && ((r = n), (n = null));
				var i = o(t);
				if (n && i) return y && !f ? e.encodePayloadAsBlob(t, r) : e.encodePayloadAsArrayBuffer(t, r);
				if (!t.length) return r("0:");
				g(
					t,
					function(t, r) {
						e.encodePacket(t, !!i && n, !1, function(t) {
							r(
								null,
								(function(t) {
									return t.length + ":" + t;
								})(t),
							);
						});
					},
					function(t, e) {
						return r(e.join(""));
					},
				);
			}),
			(e.decodePayload = function(t, n, r) {
				if ("string" != typeof t) return e.decodePayloadAsBinary(t, n, r);
				var i;
				if (("function" == typeof n && ((r = n), (n = null)), "" === t)) return r(d, 0, 1);
				for (var o, s, a = "", c = 0, u = t.length; c < u; c++) {
					var h = t.charAt(c);
					if (":" === h) {
						if ("" === a || a != (o = Number(a))) return r(d, 0, 1);
						if (a != (s = t.substr(c + 1, o)).length) return r(d, 0, 1);
						if (s.length) {
							if (((i = e.decodePacket(s, n, !1)), d.type === i.type && d.data === i.data)) return r(d, 0, 1);
							if (!1 === r(i, c + o, u)) return;
						}
						(c += o), (a = "");
					} else a += h;
				}
				return "" !== a ? r(d, 0, 1) : void 0;
			}),
			(e.encodePayloadAsArrayBuffer = function(t, n) {
				if (!t.length) return n(new ArrayBuffer(0));
				g(
					t,
					function(t, n) {
						e.encodePacket(t, !0, !0, function(t) {
							return n(null, t);
						});
					},
					function(t, e) {
						var r = e.reduce(function(t, e) {
								var n;
								return t + (n = "string" == typeof e ? e.length : e.byteLength).toString().length + n + 2;
							}, 0),
							i = new Uint8Array(r),
							o = 0;
						return (
							e.forEach(function(t) {
								var e = "string" == typeof t,
									n = t;
								if (e) {
									for (var r = new Uint8Array(t.length), s = 0; s < t.length; s++) r[s] = t.charCodeAt(s);
									n = r.buffer;
								}
								i[o++] = e ? 0 : 1;
								var a = n.byteLength.toString();
								for (s = 0; s < a.length; s++) i[o++] = parseInt(a[s]);
								i[o++] = 255;
								for (r = new Uint8Array(n), s = 0; s < r.length; s++) i[o++] = r[s];
							}),
							n(i.buffer)
						);
					},
				);
			}),
			(e.encodePayloadAsBlob = function(t, n) {
				g(
					t,
					function(t, n) {
						e.encodePacket(t, !0, !0, function(t) {
							var e = new Uint8Array(1);
							if (((e[0] = 1), "string" == typeof t)) {
								for (var r = new Uint8Array(t.length), i = 0; i < t.length; i++) r[i] = t.charCodeAt(i);
								(t = r.buffer), (e[0] = 0);
							}
							var o = (t instanceof ArrayBuffer ? t.byteLength : t.size).toString(),
								s = new Uint8Array(o.length + 1);
							for (i = 0; i < o.length; i++) s[i] = parseInt(o[i]);
							if (((s[o.length] = 255), y)) {
								var a = new y([e.buffer, s.buffer, t]);
								n(null, a);
							}
						});
					},
					function(t, e) {
						return n(new y(e));
					},
				);
			}),
			(e.decodePayloadAsBinary = function(t, n, r) {
				"function" == typeof n && ((r = n), (n = null));
				for (var i = t, o = []; i.byteLength > 0; ) {
					for (var a = new Uint8Array(i), c = 0 === a[0], u = "", h = 1; 255 !== a[h]; h++) {
						if (u.length > 310) return r(d, 0, 1);
						u += a[h];
					}
					(i = s(i, 2 + u.length)), (u = parseInt(u));
					var f = s(i, 0, u);
					if (c)
						try {
							f = String.fromCharCode.apply(null, new Uint8Array(f));
						} catch (t) {
							var l = new Uint8Array(f);
							f = "";
							for (h = 0; h < l.length; h++) f += String.fromCharCode(l[h]);
						}
					o.push(f), (i = s(i, u));
				}
				var p = o.length;
				o.forEach(function(t, i) {
					r(e.decodePacket(t, n, !0), i, p);
				});
			});
	},
	function(t, e, n) {
		"use strict";
		var r = {};
		function i(t, e, n) {
			n || (n = Error);
			var i = (function(t) {
				var n, r;
				function i(n, r, i) {
					return (
						t.call(
							this,
							(function(t, n, r) {
								return "string" == typeof e ? e : e(t, n, r);
							})(n, r, i),
						) || this
					);
				}
				return (
					(r = t), ((n = i).prototype = Object.create(r.prototype)), (n.prototype.constructor = n), (n.__proto__ = r), i
				);
			})(n);
			(i.prototype.name = n.name), (i.prototype.code = t), (r[t] = i);
		}
		function o(t, e) {
			if (Array.isArray(t)) {
				var n = t.length;
				return (
					(t = t.map(function(t) {
						return String(t);
					})),
					n > 2
						? "one of ".concat(e, " ").concat(t.slice(0, n - 1).join(", "), ", or ") + t[n - 1]
						: 2 === n
						? "one of "
								.concat(e, " ")
								.concat(t[0], " or ")
								.concat(t[1])
						: "of ".concat(e, " ").concat(t[0])
				);
			}
			return "of ".concat(e, " ").concat(String(t));
		}
		i(
			"ERR_INVALID_OPT_VALUE",
			function(t, e) {
				return 'The value "' + e + '" is invalid for option "' + t + '"';
			},
			TypeError,
		),
			i(
				"ERR_INVALID_ARG_TYPE",
				function(t, e, n) {
					var r, i, s, a;
					if (
						("string" == typeof e && ((i = "not "), e.substr(!s || s < 0 ? 0 : +s, i.length) === i)
							? ((r = "must not be"), (e = e.replace(/^not /, "")))
							: (r = "must be"),
						(function(t, e, n) {
							return (void 0 === n || n > t.length) && (n = t.length), t.substring(n - e.length, n) === e;
						})(t, " argument"))
					)
						a = "The "
							.concat(t, " ")
							.concat(r, " ")
							.concat(o(e, "type"));
					else {
						var c = (function(t, e, n) {
							return "number" != typeof n && (n = 0), !(n + e.length > t.length) && -1 !== t.indexOf(e, n);
						})(t, ".")
							? "property"
							: "argument";
						a = 'The "'
							.concat(t, '" ')
							.concat(c, " ")
							.concat(r, " ")
							.concat(o(e, "type"));
					}
					return (a += ". Received type ".concat(typeof n));
				},
				TypeError,
			),
			i("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"),
			i("ERR_METHOD_NOT_IMPLEMENTED", function(t) {
				return "The " + t + " method is not implemented";
			}),
			i("ERR_STREAM_PREMATURE_CLOSE", "Premature close"),
			i("ERR_STREAM_DESTROYED", function(t) {
				return "Cannot call " + t + " after a stream was destroyed";
			}),
			i("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"),
			i("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"),
			i("ERR_STREAM_WRITE_AFTER_END", "write after end"),
			i("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError),
			i(
				"ERR_UNKNOWN_ENCODING",
				function(t) {
					return "Unknown encoding: " + t;
				},
				TypeError,
			),
			i("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event"),
			(t.exports.codes = r);
	},
	function(t, e, n) {
		"use strict";
		(function(e) {
			var r =
				Object.keys ||
				function(t) {
					var e = [];
					for (var n in t) e.push(n);
					return e;
				};
			t.exports = u;
			var i = n(31),
				o = n(36);
			n(10)(u, i);
			for (var s = r(o.prototype), a = 0; a < s.length; a++) {
				var c = s[a];
				u.prototype[c] || (u.prototype[c] = o.prototype[c]);
			}
			function u(t) {
				if (!(this instanceof u)) return new u(t);
				i.call(this, t),
					o.call(this, t),
					(this.allowHalfOpen = !0),
					t &&
						(!1 === t.readable && (this.readable = !1),
						!1 === t.writable && (this.writable = !1),
						!1 === t.allowHalfOpen && ((this.allowHalfOpen = !1), this.once("end", h)));
			}
			function h() {
				this._writableState.ended || e.nextTick(f, this);
			}
			function f(t) {
				t.end();
			}
			Object.defineProperty(u.prototype, "writableHighWaterMark", {
				enumerable: !1,
				get: function() {
					return this._writableState.highWaterMark;
				},
			}),
				Object.defineProperty(u.prototype, "writableBuffer", {
					enumerable: !1,
					get: function() {
						return this._writableState && this._writableState.getBuffer();
					},
				}),
				Object.defineProperty(u.prototype, "writableLength", {
					enumerable: !1,
					get: function() {
						return this._writableState.length;
					},
				}),
				Object.defineProperty(u.prototype, "destroyed", {
					enumerable: !1,
					get: function() {
						return (
							void 0 !== this._readableState &&
							void 0 !== this._writableState &&
							this._readableState.destroyed && this._writableState.destroyed
						);
					},
					set: function(t) {
						void 0 !== this._readableState &&
							void 0 !== this._writableState &&
							((this._readableState.destroyed = t), (this._writableState.destroyed = t));
					},
				});
		}.call(this, n(2)));
	},
	function(t, e) {
		"function" == typeof Object.create
			? (t.exports = function(t, e) {
					e &&
						((t.super_ = e),
						(t.prototype = Object.create(e.prototype, {
							constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
						})));
			  })
			: (t.exports = function(t, e) {
					if (e) {
						t.super_ = e;
						var n = function() {};
						(n.prototype = e.prototype), (t.prototype = new n()), (t.prototype.constructor = t);
					}
			  });
	},
	function(t, e) {
		(e.encode = function(t) {
			var e = "";
			for (var n in t)
				t.hasOwnProperty(n) && (e.length && (e += "&"), (e += encodeURIComponent(n) + "=" + encodeURIComponent(t[n])));
			return e;
		}),
			(e.decode = function(t) {
				for (var e = {}, n = t.split("&"), r = 0, i = n.length; r < i; r++) {
					var o = n[r].split("=");
					e[decodeURIComponent(o[0])] = decodeURIComponent(o[1]);
				}
				return e;
			});
	},
	function(t, e) {
		t.exports = function(t, e) {
			var n = function() {};
			(n.prototype = e.prototype), (t.prototype = new n()), (t.prototype.constructor = t);
		};
	},
	function(t, e, n) {
		var r = n(45)("socket.io-parser"),
			i = n(5),
			o = n(48),
			s = n(14),
			a = n(20);
		function c() {}
		(e.protocol = 4),
			(e.types = ["CONNECT", "DISCONNECT", "EVENT", "ACK", "ERROR", "BINARY_EVENT", "BINARY_ACK"]),
			(e.CONNECT = 0),
			(e.DISCONNECT = 1),
			(e.EVENT = 2),
			(e.ACK = 3),
			(e.ERROR = 4),
			(e.BINARY_EVENT = 5),
			(e.BINARY_ACK = 6),
			(e.Encoder = c),
			(e.Decoder = f);
		var u = e.ERROR + '"encode error"';
		function h(t) {
			var n = "" + t.type;
			if (
				((e.BINARY_EVENT !== t.type && e.BINARY_ACK !== t.type) || (n += t.attachments + "-"),
				t.nsp && "/" !== t.nsp && (n += t.nsp + ","),
				null != t.id && (n += t.id),
				null != t.data)
			) {
				var i = (function(t) {
					try {
						return JSON.stringify(t);
					} catch (t) {
						return !1;
					}
				})(t.data);
				if (!1 === i) return u;
				n += i;
			}
			return r("encoded %j as %s", t, n), n;
		}
		function f() {
			this.reconstructor = null;
		}
		function l(t) {
			(this.reconPack = t), (this.buffers = []);
		}
		function p(t) {
			return { type: e.ERROR, data: "parser error: " + t };
		}
		(c.prototype.encode = function(t, n) {
			(r("encoding packet %j", t), e.BINARY_EVENT === t.type || e.BINARY_ACK === t.type)
				? (function(t, e) {
						o.removeBlobs(t, function(t) {
							var n = o.deconstructPacket(t),
								r = h(n.packet),
								i = n.buffers;
							i.unshift(r), e(i);
						});
				  })(t, n)
				: n([h(t)]);
		}),
			i(f.prototype),
			(f.prototype.add = function(t) {
				var n;
				if ("string" == typeof t)
					(n = (function(t) {
						var n = 0,
							i = { type: Number(t.charAt(0)) };
						if (null == e.types[i.type]) return p("unknown packet type " + i.type);
						if (e.BINARY_EVENT === i.type || e.BINARY_ACK === i.type) {
							for (var o = ""; "-" !== t.charAt(++n) && ((o += t.charAt(n)), n != t.length); );
							if (o != Number(o) || "-" !== t.charAt(n)) throw new Error("Illegal attachments");
							i.attachments = Number(o);
						}
						if ("/" === t.charAt(n + 1))
							for (i.nsp = ""; ++n; ) {
								if ("," === (c = t.charAt(n))) break;
								if (((i.nsp += c), n === t.length)) break;
							}
						else i.nsp = "/";
						var a = t.charAt(n + 1);
						if ("" !== a && Number(a) == a) {
							for (i.id = ""; ++n; ) {
								var c;
								if (null == (c = t.charAt(n)) || Number(c) != c) {
									--n;
									break;
								}
								if (((i.id += t.charAt(n)), n === t.length)) break;
							}
							i.id = Number(i.id);
						}
						if (t.charAt(++n)) {
							var u = (function(t) {
								try {
									return JSON.parse(t);
								} catch (t) {
									return !1;
								}
							})(t.substr(n));
							if (!(!1 !== u && (i.type === e.ERROR || s(u)))) return p("invalid payload");
							i.data = u;
						}
						return r("decoded %s as %j", t, i), i;
					})(t)),
						e.BINARY_EVENT === n.type || e.BINARY_ACK === n.type
							? ((this.reconstructor = new l(n)),
							  0 === this.reconstructor.reconPack.attachments && this.emit("decoded", n))
							: this.emit("decoded", n);
				else {
					if (!a(t) && !t.base64) throw new Error("Unknown type: " + t);
					if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet");
					(n = this.reconstructor.takeBinaryData(t)) && ((this.reconstructor = null), this.emit("decoded", n));
				}
			}),
			(f.prototype.destroy = function() {
				this.reconstructor && this.reconstructor.finishedReconstruction();
			}),
			(l.prototype.takeBinaryData = function(t) {
				if ((this.buffers.push(t), this.buffers.length === this.reconPack.attachments)) {
					var e = o.reconstructPacket(this.reconPack, this.buffers);
					return this.finishedReconstruction(), e;
				}
				return null;
			}),
			(l.prototype.finishedReconstruction = function() {
				(this.reconPack = null), (this.buffers = []);
			});
	},
	function(t, e) {
		var n = {}.toString;
		t.exports =
			Array.isArray ||
			function(t) {
				return "[object Array]" == n.call(t);
			};
	},
	function(t, e, n) {
		var r = n(54);
		t.exports = function(t) {
			var e = t.xdomain,
				n = t.xscheme,
				i = t.enablesXDR;
			try {
				if ("undefined" != typeof XMLHttpRequest && (!e || r)) return new XMLHttpRequest();
			} catch (t) {}
			try {
				if ("undefined" != typeof XDomainRequest && !n && i) return new XDomainRequest();
			} catch (t) {}
			if (!e)
				try {
					return new self[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
				} catch (t) {}
		};
	},
	function(t, e, n) {
		var r = n(7),
			i = n(5);
		function o(t) {
			(this.path = t.path),
				(this.hostname = t.hostname),
				(this.port = t.port),
				(this.secure = t.secure),
				(this.query = t.query),
				(this.timestampParam = t.timestampParam),
				(this.timestampRequests = t.timestampRequests),
				(this.readyState = ""),
				(this.agent = t.agent || !1),
				(this.socket = t.socket),
				(this.enablesXDR = t.enablesXDR),
				(this.withCredentials = t.withCredentials),
				(this.pfx = t.pfx),
				(this.key = t.key),
				(this.passphrase = t.passphrase),
				(this.cert = t.cert),
				(this.ca = t.ca),
				(this.ciphers = t.ciphers),
				(this.rejectUnauthorized = t.rejectUnauthorized),
				(this.forceNode = t.forceNode),
				(this.isReactNative = t.isReactNative),
				(this.extraHeaders = t.extraHeaders),
				(this.localAddress = t.localAddress);
		}
		(t.exports = o),
			i(o.prototype),
			(o.prototype.onError = function(t, e) {
				var n = new Error(t);
				return (n.type = "TransportError"), (n.description = e), this.emit("error", n), this;
			}),
			(o.prototype.open = function() {
				return (
					("closed" !== this.readyState && "" !== this.readyState) || ((this.readyState = "opening"), this.doOpen()),
					this
				);
			}),
			(o.prototype.close = function() {
				return ("opening" !== this.readyState && "open" !== this.readyState) || (this.doClose(), this.onClose()), this;
			}),
			(o.prototype.send = function(t) {
				if ("open" !== this.readyState) throw new Error("Transport not open");
				this.write(t);
			}),
			(o.prototype.onOpen = function() {
				(this.readyState = "open"), (this.writable = !0), this.emit("open");
			}),
			(o.prototype.onData = function(t) {
				var e = r.decodePacket(t, this.socket.binaryType);
				this.onPacket(e);
			}),
			(o.prototype.onPacket = function(t) {
				this.emit("packet", t);
			}),
			(o.prototype.onClose = function() {
				(this.readyState = "closed"), this.emit("close");
			});
	},
	function(t, e, n) {
		"use strict";
		var r = n(8).codes.ERR_STREAM_PREMATURE_CLOSE;
		function i() {}
		t.exports = function t(e, n, o) {
			if ("function" == typeof n) return t(e, null, n);
			n || (n = {}),
				(o = (function(t) {
					var e = !1;
					return function() {
						if (!e) {
							e = !0;
							for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
							t.apply(this, r);
						}
					};
				})(o || i));
			var s = n.readable || (!1 !== n.readable && e.readable),
				a = n.writable || (!1 !== n.writable && e.writable),
				c = function() {
					e.writable || h();
				},
				u = e._writableState && e._writableState.finished,
				h = function() {
					(a = !1), (u = !0), s || o.call(e);
				},
				f = e._readableState && e._readableState.endEmitted,
				l = function() {
					(s = !1), (f = !0), a || o.call(e);
				},
				p = function(t) {
					o.call(e, t);
				},
				d = function() {
					var t;
					return s && !f
						? ((e._readableState && e._readableState.ended) || (t = new r()), o.call(e, t))
						: a && !u
						? ((e._writableState && e._writableState.ended) || (t = new r()), o.call(e, t))
						: void 0;
				},
				y = function() {
					e.req.on("finish", h);
				};
			return (
				!(function(t) {
					return t.setHeader && "function" == typeof t.abort;
				})(e)
					? a && !e._writableState && (e.on("end", c), e.on("close", c))
					: (e.on("complete", h), e.on("abort", d), e.req ? y() : e.on("request", y)),
				e.on("end", l),
				e.on("finish", h),
				!1 !== n.error && e.on("error", p),
				e.on("close", d),
				function() {
					e.removeListener("complete", h),
						e.removeListener("abort", d),
						e.removeListener("request", y),
						e.req && e.req.removeListener("finish", h),
						e.removeListener("end", c),
						e.removeListener("close", c),
						e.removeListener("finish", h),
						e.removeListener("end", l),
						e.removeListener("error", p),
						e.removeListener("close", d);
				}
			);
		};
	},
	function(t, e, n) {
		(function(e) {
			var r = n(1)("simple-peer"),
				i = n(67),
				o = n(68),
				s = n(69),
				a = n(78);
			function c(t) {
				return t.replace(/a=ice-options:trickle\s\n/g, "");
			}
			function u(t, e) {
				var n = new Error(t);
				return (n.code = e), n;
			}
			class h extends s.Duplex {
				constructor(t) {
					if (
						(super((t = Object.assign({ allowHalfOpen: !1 }, t))),
						(this._id = o(4)
							.toString("hex")
							.slice(0, 7)),
						this._debug("new peer %o", t),
						(this.channelName = t.initiator ? t.channelName || o(20).toString("hex") : null),
						(this.initiator = t.initiator || !1),
						(this.channelConfig = t.channelConfig || h.channelConfig),
						(this.config = Object.assign({}, h.config, t.config)),
						(this.offerOptions = t.offerOptions || {}),
						(this.answerOptions = t.answerOptions || {}),
						(this.sdpTransform = t.sdpTransform || (t => t)),
						(this.streams = t.streams || (t.stream ? [t.stream] : [])),
						(this.trickle = void 0 === t.trickle || t.trickle),
						(this.allowHalfTrickle = void 0 !== t.allowHalfTrickle && t.allowHalfTrickle),
						(this.iceCompleteTimeout = t.iceCompleteTimeout || 5e3),
						(this.destroyed = !1),
						(this._connected = !1),
						(this.remoteAddress = void 0),
						(this.remoteFamily = void 0),
						(this.remotePort = void 0),
						(this.localAddress = void 0),
						(this.localFamily = void 0),
						(this.localPort = void 0),
						(this._wrtc = t.wrtc && "object" == typeof t.wrtc ? t.wrtc : i()),
						!this._wrtc)
					)
						throw "undefined" == typeof window
							? u("No WebRTC support: Specify `opts.wrtc` option in this environment", "ERR_WEBRTC_SUPPORT")
							: u("No WebRTC support: Not a supported browser", "ERR_WEBRTC_SUPPORT");
					(this._pcReady = !1),
						(this._channelReady = !1),
						(this._iceComplete = !1),
						(this._iceCompleteTimer = null),
						(this._channel = null),
						(this._pendingCandidates = []),
						(this._isNegotiating = !this.initiator),
						(this._batchedNegotiation = !1),
						(this._queuedNegotiation = !1),
						(this._sendersAwaitingStable = []),
						(this._senderMap = new Map()),
						(this._firstStable = !0),
						(this._closingInterval = null),
						(this._remoteTracks = []),
						(this._remoteStreams = []),
						(this._chunk = null),
						(this._cb = null),
						(this._interval = null);
					try {
						this._pc = new this._wrtc.RTCPeerConnection(this.config);
					} catch (t) {
						return void a(() => this.destroy(u(t, "ERR_PC_CONSTRUCTOR")));
					}
					(this._isReactNativeWebrtc = "number" == typeof this._pc._peerConnectionId),
						(this._pc.oniceconnectionstatechange = () => {
							this._onIceStateChange();
						}),
						(this._pc.onicegatheringstatechange = () => {
							this._onIceStateChange();
						}),
						(this._pc.onconnectionstatechange = () => {
							this._onConnectionStateChange();
						}),
						(this._pc.onsignalingstatechange = () => {
							this._onSignalingStateChange();
						}),
						(this._pc.onicecandidate = t => {
							this._onIceCandidate(t);
						}),
						this.initiator
							? this._setupData({ channel: this._pc.createDataChannel(this.channelName, this.channelConfig) })
							: (this._pc.ondatachannel = t => {
									this._setupData(t);
							  }),
						this.streams &&
							this.streams.forEach(t => {
								this.addStream(t);
							}),
						(this._pc.ontrack = t => {
							this._onTrack(t);
						}),
						this.initiator && this._needsNegotiation(),
						(this._onFinishBound = () => {
							this._onFinish();
						}),
						this.once("finish", this._onFinishBound);
				}
				get bufferSize() {
					return (this._channel && this._channel.bufferedAmount) || 0;
				}
				get connected() {
					return this._connected && "open" === this._channel.readyState;
				}
				address() {
					return { port: this.localPort, family: this.localFamily, address: this.localAddress };
				}
				signal(t) {
					if (this.destroyed) throw u("cannot signal after peer is destroyed", "ERR_SIGNALING");
					if ("string" == typeof t)
						try {
							t = JSON.parse(t);
						} catch (e) {
							t = {};
						}
					this._debug("signal()"),
						t.renegotiate && this.initiator && (this._debug("got request to renegotiate"), this._needsNegotiation()),
						t.transceiverRequest &&
							this.initiator &&
							(this._debug("got request for transceiver"),
							this.addTransceiver(t.transceiverRequest.kind, t.transceiverRequest.init)),
						t.candidate &&
							(this._pc.remoteDescription && this._pc.remoteDescription.type
								? this._addIceCandidate(t.candidate)
								: this._pendingCandidates.push(t.candidate)),
						t.sdp &&
							this._pc
								.setRemoteDescription(new this._wrtc.RTCSessionDescription(t))
								.then(() => {
									this.destroyed ||
										(this._pendingCandidates.forEach(t => {
											this._addIceCandidate(t);
										}),
										(this._pendingCandidates = []),
										"offer" === this._pc.remoteDescription.type && this._createAnswer());
								})
								.catch(t => {
									this.destroy(u(t, "ERR_SET_REMOTE_DESCRIPTION"));
								}),
						t.sdp ||
							t.candidate ||
							t.renegotiate ||
							t.transceiverRequest ||
							this.destroy(u("signal() called with invalid signal data", "ERR_SIGNALING"));
				}
				_addIceCandidate(t) {
					var e = new this._wrtc.RTCIceCandidate(t);
					this._pc.addIceCandidate(e).catch(t => {
						var n;
						!e.address || e.address.endsWith(".local")
							? ((n = "Ignoring unsupported ICE candidate."), console.warn(n))
							: this.destroy(u(t, "ERR_ADD_ICE_CANDIDATE"));
					});
				}
				send(t) {
					this._channel.send(t);
				}
				addTransceiver(t, e) {
					if ((this._debug("addTransceiver()"), this.initiator))
						try {
							this._pc.addTransceiver(t, e), this._needsNegotiation();
						} catch (t) {
							this.destroy(u(t, "ERR_ADD_TRANSCEIVER"));
						}
					else this.emit("signal", { transceiverRequest: { kind: t, init: e } });
				}
				addStream(t) {
					this._debug("addStream()"),
						t.getTracks().forEach(e => {
							this.addTrack(e, t);
						});
				}
				addTrack(t, e) {
					this._debug("addTrack()");
					var n = this._senderMap.get(t) || new Map(),
						r = n.get(e);
					if (r)
						throw r.removed
							? u(
									"Track has been removed. You should enable/disable tracks that you want to re-add.",
									"ERR_SENDER_REMOVED",
							  )
							: u("Track has already been added to that stream.", "ERR_SENDER_ALREADY_ADDED");
					(r = this._pc.addTrack(t, e)), n.set(e, r), this._senderMap.set(t, n), this._needsNegotiation();
				}
				replaceTrack(t, e, n) {
					this._debug("replaceTrack()");
					var r = this._senderMap.get(t),
						i = r ? r.get(n) : null;
					if (!i) throw u("Cannot replace track that was never added.", "ERR_TRACK_NOT_ADDED");
					e && this._senderMap.set(e, r),
						null != i.replaceTrack
							? i.replaceTrack(e)
							: this.destroy(u("replaceTrack is not supported in this browser", "ERR_UNSUPPORTED_REPLACETRACK"));
				}
				removeTrack(t, e) {
					this._debug("removeSender()");
					var n = this._senderMap.get(t),
						r = n ? n.get(e) : null;
					if (!r) throw u("Cannot remove track that was never added.", "ERR_TRACK_NOT_ADDED");
					try {
						(r.removed = !0), this._pc.removeTrack(r);
					} catch (t) {
						"NS_ERROR_UNEXPECTED" === t.name
							? this._sendersAwaitingStable.push(r)
							: this.destroy(u(t, "ERR_REMOVE_TRACK"));
					}
					this._needsNegotiation();
				}
				removeStream(t) {
					this._debug("removeSenders()"),
						t.getTracks().forEach(e => {
							this.removeTrack(e, t);
						});
				}
				_needsNegotiation() {
					this._debug("_needsNegotiation"),
						this._batchedNegotiation ||
							((this._batchedNegotiation = !0),
							a(() => {
								(this._batchedNegotiation = !1), this._debug("starting batched negotiation"), this.negotiate();
							}));
				}
				negotiate() {
					this.initiator
						? this._isNegotiating
							? ((this._queuedNegotiation = !0), this._debug("already negotiating, queueing"))
							: (this._debug("start negotiation"),
							  setTimeout(() => {
									this._createOffer();
							  }, 0))
						: this._isNegotiating ||
						  (this._debug("requesting negotiation from initiator"), this.emit("signal", { renegotiate: !0 })),
						(this._isNegotiating = !0);
				}
				destroy(t) {
					this._destroy(t, () => {});
				}
				_destroy(t, e) {
					if (!this.destroyed) {
						if (
							(this._debug("destroy (error: %s)", t && (t.message || t)),
							(this.readable = this.writable = !1),
							this._readableState.ended || this.push(null),
							this._writableState.finished || this.end(),
							(this.destroyed = !0),
							(this._connected = !1),
							(this._pcReady = !1),
							(this._channelReady = !1),
							(this._remoteTracks = null),
							(this._remoteStreams = null),
							(this._senderMap = null),
							clearInterval(this._closingInterval),
							(this._closingInterval = null),
							clearInterval(this._interval),
							(this._interval = null),
							(this._chunk = null),
							(this._cb = null),
							this._onFinishBound && this.removeListener("finish", this._onFinishBound),
							(this._onFinishBound = null),
							this._channel)
						) {
							try {
								this._channel.close();
							} catch (t) {}
							(this._channel.onmessage = null),
								(this._channel.onopen = null),
								(this._channel.onclose = null),
								(this._channel.onerror = null);
						}
						if (this._pc) {
							try {
								this._pc.close();
							} catch (t) {}
							(this._pc.oniceconnectionstatechange = null),
								(this._pc.onicegatheringstatechange = null),
								(this._pc.onsignalingstatechange = null),
								(this._pc.onicecandidate = null),
								(this._pc.ontrack = null),
								(this._pc.ondatachannel = null);
						}
						(this._pc = null), (this._channel = null), t && this.emit("error", t), this.emit("close"), e();
					}
				}
				_setupData(t) {
					if (!t.channel)
						return this.destroy(u("Data channel event is missing `channel` property", "ERR_DATA_CHANNEL"));
					(this._channel = t.channel),
						(this._channel.binaryType = "arraybuffer"),
						"number" == typeof this._channel.bufferedAmountLowThreshold &&
							(this._channel.bufferedAmountLowThreshold = 65536),
						(this.channelName = this._channel.label),
						(this._channel.onmessage = t => {
							this._onChannelMessage(t);
						}),
						(this._channel.onbufferedamountlow = () => {
							this._onChannelBufferedAmountLow();
						}),
						(this._channel.onopen = () => {
							this._onChannelOpen();
						}),
						(this._channel.onclose = () => {
							this._onChannelClose();
						}),
						(this._channel.onerror = t => {
							this.destroy(u(t, "ERR_DATA_CHANNEL"));
						});
					var e = !1;
					this._closingInterval = setInterval(() => {
						this._channel && "closing" === this._channel.readyState
							? (e && this._onChannelClose(), (e = !0))
							: (e = !1);
					}, 5e3);
				}
				_read() {}
				_write(t, e, n) {
					if (this.destroyed) return n(u("cannot write after peer is destroyed", "ERR_DATA_CHANNEL"));
					if (this._connected) {
						try {
							this.send(t);
						} catch (t) {
							return this.destroy(u(t, "ERR_DATA_CHANNEL"));
						}
						this._channel.bufferedAmount > 65536
							? (this._debug("start backpressure: bufferedAmount %d", this._channel.bufferedAmount), (this._cb = n))
							: n(null);
					} else this._debug("write before connect"), (this._chunk = t), (this._cb = n);
				}
				_onFinish() {
					if (this.destroyed) return;
					const t = () => {
						setTimeout(() => this.destroy(), 1e3);
					};
					this._connected ? t() : this.once("connect", t);
				}
				_startIceCompleteTimeout() {
					this.destroyed ||
						this._iceCompleteTimer ||
						(this._debug("started iceComplete timeout"),
						(this._iceCompleteTimer = setTimeout(() => {
							this._iceComplete ||
								((this._iceComplete = !0),
								this._debug("iceComplete timeout completed"),
								this.emit("iceTimeout"),
								this.emit("_iceComplete"));
						}, this.iceCompleteTimeout)));
				}
				_createOffer() {
					this.destroyed ||
						this._pc
							.createOffer(this.offerOptions)
							.then(t => {
								if (this.destroyed) return;
								this.trickle || this.allowHalfTrickle || (t.sdp = c(t.sdp)), (t.sdp = this.sdpTransform(t.sdp));
								const e = () => {
									if (!this.destroyed) {
										var e = this._pc.localDescription || t;
										this._debug("signal"), this.emit("signal", { type: e.type, sdp: e.sdp });
									}
								};
								this._pc
									.setLocalDescription(t)
									.then(() => {
										this._debug("createOffer success"),
											this.destroyed || (this.trickle || this._iceComplete ? e() : this.once("_iceComplete", e));
									})
									.catch(t => {
										this.destroy(u(t, "ERR_SET_LOCAL_DESCRIPTION"));
									});
							})
							.catch(t => {
								this.destroy(u(t, "ERR_CREATE_OFFER"));
							});
				}
				_requestMissingTransceivers() {
					this._pc.getTransceivers &&
						this._pc.getTransceivers().forEach(t => {
							t.mid || !t.sender.track || t.requested || ((t.requested = !0), this.addTransceiver(t.sender.track.kind));
						});
				}
				_createAnswer() {
					this.destroyed ||
						this._pc
							.createAnswer(this.answerOptions)
							.then(t => {
								if (this.destroyed) return;
								this.trickle || this.allowHalfTrickle || (t.sdp = c(t.sdp)), (t.sdp = this.sdpTransform(t.sdp));
								const e = () => {
									if (!this.destroyed) {
										var e = this._pc.localDescription || t;
										this._debug("signal"),
											this.emit("signal", { type: e.type, sdp: e.sdp }),
											this.initiator || this._requestMissingTransceivers();
									}
								};
								this._pc
									.setLocalDescription(t)
									.then(() => {
										this.destroyed || (this.trickle || this._iceComplete ? e() : this.once("_iceComplete", e));
									})
									.catch(t => {
										this.destroy(u(t, "ERR_SET_LOCAL_DESCRIPTION"));
									});
							})
							.catch(t => {
								this.destroy(u(t, "ERR_CREATE_ANSWER"));
							});
				}
				_onConnectionStateChange() {
					this.destroyed ||
						("failed" === this._pc.connectionState && this.destroy(u("Connection failed.", "ERR_CONNECTION_FAILURE")));
				}
				_onIceStateChange() {
					if (!this.destroyed) {
						var t = this._pc.iceConnectionState,
							e = this._pc.iceGatheringState;
						this._debug("iceStateChange (connection: %s) (gathering: %s)", t, e),
							this.emit("iceStateChange", t, e),
							("connected" !== t && "completed" !== t) || ((this._pcReady = !0), this._maybeReady()),
							"failed" === t && this.destroy(u("Ice connection failed.", "ERR_ICE_CONNECTION_FAILURE")),
							"closed" === t && this.destroy(u("Ice connection closed.", "ERR_ICE_CONNECTION_CLOSED"));
					}
				}
				getStats(t) {
					const e = t => (
						"[object Array]" === Object.prototype.toString.call(t.values) &&
							t.values.forEach(e => {
								Object.assign(t, e);
							}),
						t
					);
					0 === this._pc.getStats.length || this._isReactNativeWebrtc
						? this._pc.getStats().then(
								n => {
									var r = [];
									n.forEach(t => {
										r.push(e(t));
									}),
										t(null, r);
								},
								e => t(e),
						  )
						: this._pc.getStats.length > 0
						? this._pc.getStats(
								n => {
									if (!this.destroyed) {
										var r = [];
										n.result().forEach(t => {
											var n = {};
											t.names().forEach(e => {
												n[e] = t.stat(e);
											}),
												(n.id = t.id),
												(n.type = t.type),
												(n.timestamp = t.timestamp),
												r.push(e(n));
										}),
											t(null, r);
									}
								},
								e => t(e),
						  )
						: t(null, []);
				}
				_maybeReady() {
					if (
						(this._debug("maybeReady pc %s channel %s", this._pcReady, this._channelReady),
						this._connected || this._connecting || !this._pcReady || !this._channelReady)
					)
						return;
					this._connecting = !0;
					const t = () => {
						this.destroyed ||
							this.getStats((e, n) => {
								if (this.destroyed) return;
								e && (n = []);
								var r = {},
									i = {},
									o = {},
									s = !1;
								n.forEach(t => {
									("remotecandidate" !== t.type && "remote-candidate" !== t.type) || (r[t.id] = t),
										("localcandidate" !== t.type && "local-candidate" !== t.type) || (i[t.id] = t),
										("candidatepair" !== t.type && "candidate-pair" !== t.type) || (o[t.id] = t);
								});
								const a = t => {
									s = !0;
									var e = i[t.localCandidateId];
									e && (e.ip || e.address)
										? ((this.localAddress = e.ip || e.address), (this.localPort = Number(e.port)))
										: e && e.ipAddress
										? ((this.localAddress = e.ipAddress), (this.localPort = Number(e.portNumber)))
										: "string" == typeof t.googLocalAddress &&
										  ((e = t.googLocalAddress.split(":")),
										  (this.localAddress = e[0]),
										  (this.localPort = Number(e[1]))),
										this.localAddress && (this.localFamily = this.localAddress.includes(":") ? "IPv6" : "IPv4");
									var n = r[t.remoteCandidateId];
									n && (n.ip || n.address)
										? ((this.remoteAddress = n.ip || n.address), (this.remotePort = Number(n.port)))
										: n && n.ipAddress
										? ((this.remoteAddress = n.ipAddress), (this.remotePort = Number(n.portNumber)))
										: "string" == typeof t.googRemoteAddress &&
										  ((n = t.googRemoteAddress.split(":")),
										  (this.remoteAddress = n[0]),
										  (this.remotePort = Number(n[1]))),
										this.remoteAddress && (this.remoteFamily = this.remoteAddress.includes(":") ? "IPv6" : "IPv4"),
										this._debug(
											"connect local: %s:%s remote: %s:%s",
											this.localAddress,
											this.localPort,
											this.remoteAddress,
											this.remotePort,
										);
								};
								if (
									(n.forEach(t => {
										"transport" === t.type && t.selectedCandidatePairId && a(o[t.selectedCandidatePairId]),
											(("googCandidatePair" === t.type && "true" === t.googActiveConnection) ||
												(("candidatepair" === t.type || "candidate-pair" === t.type) && t.selected)) &&
												a(t);
									}),
									s || (Object.keys(o).length && !Object.keys(i).length))
								) {
									if (((this._connecting = !1), (this._connected = !0), this._chunk)) {
										try {
											this.send(this._chunk);
										} catch (e) {
											return this.destroy(u(e, "ERR_DATA_CHANNEL"));
										}
										(this._chunk = null), this._debug('sent chunk from "write before connect"');
										var c = this._cb;
										(this._cb = null), c(null);
									}
									"number" != typeof this._channel.bufferedAmountLowThreshold &&
										((this._interval = setInterval(() => this._onInterval(), 150)),
										this._interval.unref && this._interval.unref()),
										this._debug("connect"),
										this.emit("connect");
								} else setTimeout(t, 100);
							});
					};
					t();
				}
				_onInterval() {
					!this._cb || !this._channel || this._channel.bufferedAmount > 65536 || this._onChannelBufferedAmountLow();
				}
				_onSignalingStateChange() {
					this.destroyed ||
						("stable" !== this._pc.signalingState ||
							this._firstStable ||
							((this._isNegotiating = !1),
							this._debug("flushing sender queue", this._sendersAwaitingStable),
							this._sendersAwaitingStable.forEach(t => {
								this._pc.removeTrack(t), (this._queuedNegotiation = !0);
							}),
							(this._sendersAwaitingStable = []),
							this._queuedNegotiation &&
								(this._debug("flushing negotiation queue"), (this._queuedNegotiation = !1), this._needsNegotiation()),
							this._debug("negotiate"),
							this.emit("negotiate")),
						(this._firstStable = !1),
						this._debug("signalingStateChange %s", this._pc.signalingState),
						this.emit("signalingStateChange", this._pc.signalingState));
				}
				_onIceCandidate(t) {
					this.destroyed ||
						(t.candidate && this.trickle
							? this.emit("signal", {
									candidate: {
										candidate: t.candidate.candidate,
										sdpMLineIndex: t.candidate.sdpMLineIndex,
										sdpMid: t.candidate.sdpMid,
									},
							  })
							: t.candidate || this._iceComplete || ((this._iceComplete = !0), this.emit("_iceComplete")),
						t.candidate && this._startIceCompleteTimeout());
				}
				_onChannelMessage(t) {
					if (!this.destroyed) {
						var n = t.data;
						n instanceof ArrayBuffer && (n = e.from(n)), this.push(n);
					}
				}
				_onChannelBufferedAmountLow() {
					if (!this.destroyed && this._cb) {
						this._debug("ending backpressure: bufferedAmount %d", this._channel.bufferedAmount);
						var t = this._cb;
						(this._cb = null), t(null);
					}
				}
				_onChannelOpen() {
					this._connected ||
						this.destroyed ||
						(this._debug("on channel open"), (this._channelReady = !0), this._maybeReady());
				}
				_onChannelClose() {
					this.destroyed || (this._debug("on channel close"), this.destroy());
				}
				_onTrack(t) {
					this.destroyed ||
						t.streams.forEach(e => {
							this._debug("on track"),
								this.emit("track", t.track, e),
								this._remoteTracks.push({ track: t.track, stream: e }),
								this._remoteStreams.some(t => t.id === e.id) ||
									(this._remoteStreams.push(e),
									a(() => {
										this.emit("stream", e);
									}));
						});
				}
				_debug() {
					var t = [].slice.call(arguments);
					(t[0] = "[" + this._id + "] " + t[0]), r.apply(null, t);
				}
			}
			(h.WEBRTC_SUPPORT = !!i()),
				(h.config = {
					iceServers: [
						{ urls: "stun:stun.l.google.com:19302" },
						{ urls: "stun:global.stun.twilio.com:3478?transport=udp" },
					],
					sdpSemantics: "unified-plan",
				}),
				(h.channelConfig = {}),
				(t.exports = h);
		}.call(this, n(3).Buffer));
	},
	function(t, e) {
		var n = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
			r = [
				"source",
				"protocol",
				"authority",
				"userInfo",
				"user",
				"password",
				"host",
				"port",
				"relative",
				"path",
				"directory",
				"file",
				"query",
				"anchor",
			];
		t.exports = function(t) {
			var e = t,
				i = t.indexOf("["),
				o = t.indexOf("]");
			-1 != i && -1 != o && (t = t.substring(0, i) + t.substring(i, o).replace(/:/g, ";") + t.substring(o, t.length));
			for (var s = n.exec(t || ""), a = {}, c = 14; c--; ) a[r[c]] = s[c] || "";
			return (
				-1 != i &&
					-1 != o &&
					((a.source = e),
					(a.host = a.host.substring(1, a.host.length - 1).replace(/;/g, ":")),
					(a.authority = a.authority
						.replace("[", "")
						.replace("]", "")
						.replace(/;/g, ":")),
					(a.ipv6uri = !0)),
				a
			);
		};
	},
	function(t, e, n) {
		(function(e) {
			t.exports = function(t) {
				return (
					(n && e.isBuffer(t)) ||
					(r &&
						(t instanceof ArrayBuffer ||
							(function(t) {
								return "function" == typeof ArrayBuffer.isView
									? ArrayBuffer.isView(t)
									: t.buffer instanceof ArrayBuffer;
							})(t)))
				);
			};
			var n = "function" == typeof e && "function" == typeof e.isBuffer,
				r = "function" == typeof ArrayBuffer;
		}.call(this, n(3).Buffer));
	},
	function(t, e, n) {
		var r = n(52),
			i = n(27),
			o = n(5),
			s = n(13),
			a = n(28),
			c = n(29),
			u = n(1)("socket.io-client:manager"),
			h = n(26),
			f = n(66),
			l = Object.prototype.hasOwnProperty;
		function p(t, e) {
			if (!(this instanceof p)) return new p(t, e);
			t && "object" == typeof t && ((e = t), (t = void 0)),
				((e = e || {}).path = e.path || "/socket.io"),
				(this.nsps = {}),
				(this.subs = []),
				(this.opts = e),
				this.reconnection(!1 !== e.reconnection),
				this.reconnectionAttempts(e.reconnectionAttempts || 1 / 0),
				this.reconnectionDelay(e.reconnectionDelay || 1e3),
				this.reconnectionDelayMax(e.reconnectionDelayMax || 5e3),
				this.randomizationFactor(e.randomizationFactor || 0.5),
				(this.backoff = new f({
					min: this.reconnectionDelay(),
					max: this.reconnectionDelayMax(),
					jitter: this.randomizationFactor(),
				})),
				this.timeout(null == e.timeout ? 2e4 : e.timeout),
				(this.readyState = "closed"),
				(this.uri = t),
				(this.connecting = []),
				(this.lastPing = null),
				(this.encoding = !1),
				(this.packetBuffer = []);
			var n = e.parser || s;
			(this.encoder = new n.Encoder()),
				(this.decoder = new n.Decoder()),
				(this.autoConnect = !1 !== e.autoConnect),
				this.autoConnect && this.open();
		}
		(t.exports = p),
			(p.prototype.emitAll = function() {
				for (var t in (this.emit.apply(this, arguments), this.nsps))
					l.call(this.nsps, t) && this.nsps[t].emit.apply(this.nsps[t], arguments);
			}),
			(p.prototype.updateSocketIds = function() {
				for (var t in this.nsps) l.call(this.nsps, t) && (this.nsps[t].id = this.generateId(t));
			}),
			(p.prototype.generateId = function(t) {
				return ("/" === t ? "" : t + "#") + this.engine.id;
			}),
			o(p.prototype),
			(p.prototype.reconnection = function(t) {
				return arguments.length ? ((this._reconnection = !!t), this) : this._reconnection;
			}),
			(p.prototype.reconnectionAttempts = function(t) {
				return arguments.length ? ((this._reconnectionAttempts = t), this) : this._reconnectionAttempts;
			}),
			(p.prototype.reconnectionDelay = function(t) {
				return arguments.length
					? ((this._reconnectionDelay = t), this.backoff && this.backoff.setMin(t), this)
					: this._reconnectionDelay;
			}),
			(p.prototype.randomizationFactor = function(t) {
				return arguments.length
					? ((this._randomizationFactor = t), this.backoff && this.backoff.setJitter(t), this)
					: this._randomizationFactor;
			}),
			(p.prototype.reconnectionDelayMax = function(t) {
				return arguments.length
					? ((this._reconnectionDelayMax = t), this.backoff && this.backoff.setMax(t), this)
					: this._reconnectionDelayMax;
			}),
			(p.prototype.timeout = function(t) {
				return arguments.length ? ((this._timeout = t), this) : this._timeout;
			}),
			(p.prototype.maybeReconnectOnOpen = function() {
				!this.reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect();
			}),
			(p.prototype.open = p.prototype.connect = function(t, e) {
				if ((u("readyState %s", this.readyState), ~this.readyState.indexOf("open"))) return this;
				u("opening %s", this.uri), (this.engine = r(this.uri, this.opts));
				var n = this.engine,
					i = this;
				(this.readyState = "opening"), (this.skipReconnect = !1);
				var o = a(n, "open", function() {
						i.onopen(), t && t();
					}),
					s = a(n, "error", function(e) {
						if ((u("connect_error"), i.cleanup(), (i.readyState = "closed"), i.emitAll("connect_error", e), t)) {
							var n = new Error("Connection error");
							(n.data = e), t(n);
						} else i.maybeReconnectOnOpen();
					});
				if (!1 !== this._timeout) {
					var c = this._timeout;
					u("connect attempt will timeout after %d", c);
					var h = setTimeout(function() {
						u("connect attempt timed out after %d", c),
							o.destroy(),
							n.close(),
							n.emit("error", "timeout"),
							i.emitAll("connect_timeout", c);
					}, c);
					this.subs.push({
						destroy: function() {
							clearTimeout(h);
						},
					});
				}
				return this.subs.push(o), this.subs.push(s), this;
			}),
			(p.prototype.onopen = function() {
				u("open"), this.cleanup(), (this.readyState = "open"), this.emit("open");
				var t = this.engine;
				this.subs.push(a(t, "data", c(this, "ondata"))),
					this.subs.push(a(t, "ping", c(this, "onping"))),
					this.subs.push(a(t, "pong", c(this, "onpong"))),
					this.subs.push(a(t, "error", c(this, "onerror"))),
					this.subs.push(a(t, "close", c(this, "onclose"))),
					this.subs.push(a(this.decoder, "decoded", c(this, "ondecoded")));
			}),
			(p.prototype.onping = function() {
				(this.lastPing = new Date()), this.emitAll("ping");
			}),
			(p.prototype.onpong = function() {
				this.emitAll("pong", new Date() - this.lastPing);
			}),
			(p.prototype.ondata = function(t) {
				this.decoder.add(t);
			}),
			(p.prototype.ondecoded = function(t) {
				this.emit("packet", t);
			}),
			(p.prototype.onerror = function(t) {
				u("error", t), this.emitAll("error", t);
			}),
			(p.prototype.socket = function(t, e) {
				var n = this.nsps[t];
				if (!n) {
					(n = new i(this, t, e)), (this.nsps[t] = n);
					var r = this;
					n.on("connecting", o),
						n.on("connect", function() {
							n.id = r.generateId(t);
						}),
						this.autoConnect && o();
				}
				function o() {
					~h(r.connecting, n) || r.connecting.push(n);
				}
				return n;
			}),
			(p.prototype.destroy = function(t) {
				var e = h(this.connecting, t);
				~e && this.connecting.splice(e, 1), this.connecting.length || this.close();
			}),
			(p.prototype.packet = function(t) {
				u("writing packet %j", t);
				var e = this;
				t.query && 0 === t.type && (t.nsp += "?" + t.query),
					e.encoding
						? e.packetBuffer.push(t)
						: ((e.encoding = !0),
						  this.encoder.encode(t, function(n) {
								for (var r = 0; r < n.length; r++) e.engine.write(n[r], t.options);
								(e.encoding = !1), e.processPacketQueue();
						  }));
			}),
			(p.prototype.processPacketQueue = function() {
				if (this.packetBuffer.length > 0 && !this.encoding) {
					var t = this.packetBuffer.shift();
					this.packet(t);
				}
			}),
			(p.prototype.cleanup = function() {
				u("cleanup");
				for (var t = this.subs.length, e = 0; e < t; e++) {
					this.subs.shift().destroy();
				}
				(this.packetBuffer = []), (this.encoding = !1), (this.lastPing = null), this.decoder.destroy();
			}),
			(p.prototype.close = p.prototype.disconnect = function() {
				u("disconnect"),
					(this.skipReconnect = !0),
					(this.reconnecting = !1),
					"opening" === this.readyState && this.cleanup(),
					this.backoff.reset(),
					(this.readyState = "closed"),
					this.engine && this.engine.close();
			}),
			(p.prototype.onclose = function(t) {
				u("onclose"),
					this.cleanup(),
					this.backoff.reset(),
					(this.readyState = "closed"),
					this.emit("close", t),
					this._reconnection && !this.skipReconnect && this.reconnect();
			}),
			(p.prototype.reconnect = function() {
				if (this.reconnecting || this.skipReconnect) return this;
				var t = this;
				if (this.backoff.attempts >= this._reconnectionAttempts)
					u("reconnect failed"), this.backoff.reset(), this.emitAll("reconnect_failed"), (this.reconnecting = !1);
				else {
					var e = this.backoff.duration();
					u("will wait %dms before reconnect attempt", e), (this.reconnecting = !0);
					var n = setTimeout(function() {
						t.skipReconnect ||
							(u("attempting reconnect"),
							t.emitAll("reconnect_attempt", t.backoff.attempts),
							t.emitAll("reconnecting", t.backoff.attempts),
							t.skipReconnect ||
								t.open(function(e) {
									e
										? (u("reconnect attempt error"),
										  (t.reconnecting = !1),
										  t.reconnect(),
										  t.emitAll("reconnect_error", e.data))
										: (u("reconnect success"), t.onreconnect());
								}));
					}, e);
					this.subs.push({
						destroy: function() {
							clearTimeout(n);
						},
					});
				}
			}),
			(p.prototype.onreconnect = function() {
				var t = this.backoff.attempts;
				(this.reconnecting = !1), this.backoff.reset(), this.updateSocketIds(), this.emitAll("reconnect", t);
			});
	},
	function(t, e, n) {
		var r = n(15),
			i = n(55),
			o = n(62),
			s = n(63);
		(e.polling = function(t) {
			var e = !1,
				n = !1,
				s = !1 !== t.jsonp;
			if ("undefined" != typeof location) {
				var a = "https:" === location.protocol,
					c = location.port;
				c || (c = a ? 443 : 80), (e = t.hostname !== location.hostname || c !== t.port), (n = t.secure !== a);
			}
			if (((t.xdomain = e), (t.xscheme = n), "open" in new r(t) && !t.forceJSONP)) return new i(t);
			if (!s) throw new Error("JSONP disabled");
			return new o(t);
		}),
			(e.websocket = s);
	},
	function(t, e, n) {
		var r = n(16),
			i = n(11),
			o = n(7),
			s = n(12),
			a = n(25),
			c = n(1)("engine.io-client:polling");
		t.exports = h;
		var u = null != new (n(15))({ xdomain: !1 }).responseType;
		function h(t) {
			var e = t && t.forceBase64;
			(u && !e) || (this.supportsBinary = !1), r.call(this, t);
		}
		s(h, r),
			(h.prototype.name = "polling"),
			(h.prototype.doOpen = function() {
				this.poll();
			}),
			(h.prototype.pause = function(t) {
				var e = this;
				function n() {
					c("paused"), (e.readyState = "paused"), t();
				}
				if (((this.readyState = "pausing"), this.polling || !this.writable)) {
					var r = 0;
					this.polling &&
						(c("we are currently polling - waiting to pause"),
						r++,
						this.once("pollComplete", function() {
							c("pre-pause polling complete"), --r || n();
						})),
						this.writable ||
							(c("we are currently writing - waiting to pause"),
							r++,
							this.once("drain", function() {
								c("pre-pause writing complete"), --r || n();
							}));
				} else n();
			}),
			(h.prototype.poll = function() {
				c("polling"), (this.polling = !0), this.doPoll(), this.emit("poll");
			}),
			(h.prototype.onData = function(t) {
				var e = this;
				c("polling got data %s", t);
				o.decodePayload(t, this.socket.binaryType, function(t, n, r) {
					if (("opening" === e.readyState && e.onOpen(), "close" === t.type)) return e.onClose(), !1;
					e.onPacket(t);
				}),
					"closed" !== this.readyState &&
						((this.polling = !1),
						this.emit("pollComplete"),
						"open" === this.readyState ? this.poll() : c('ignoring poll - transport state "%s"', this.readyState));
			}),
			(h.prototype.doClose = function() {
				var t = this;
				function e() {
					c("writing close packet"), t.write([{ type: "close" }]);
				}
				"open" === this.readyState
					? (c("transport open - closing"), e())
					: (c("transport not open - deferring close"), this.once("open", e));
			}),
			(h.prototype.write = function(t) {
				var e = this;
				this.writable = !1;
				var n = function() {
					(e.writable = !0), e.emit("drain");
				};
				o.encodePayload(t, this.supportsBinary, function(t) {
					e.doWrite(t, n);
				});
			}),
			(h.prototype.uri = function() {
				var t = this.query || {},
					e = this.secure ? "https" : "http",
					n = "";
				return (
					!1 !== this.timestampRequests && (t[this.timestampParam] = a()),
					this.supportsBinary || t.sid || (t.b64 = 1),
					(t = i.encode(t)),
					this.port &&
						(("https" === e && 443 !== Number(this.port)) || ("http" === e && 80 !== Number(this.port))) &&
						(n = ":" + this.port),
					t.length && (t = "?" + t),
					e +
						"://" +
						(-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) +
						n +
						this.path +
						t
				);
			});
	},
	function(t, e, n) {
		(function(e) {
			var r = n(14),
				i = Object.prototype.toString,
				o = "function" == typeof Blob || ("undefined" != typeof Blob && "[object BlobConstructor]" === i.call(Blob)),
				s = "function" == typeof File || ("undefined" != typeof File && "[object FileConstructor]" === i.call(File));
			t.exports = function t(n) {
				if (!n || "object" != typeof n) return !1;
				if (r(n)) {
					for (var i = 0, a = n.length; i < a; i++) if (t(n[i])) return !0;
					return !1;
				}
				if (
					("function" == typeof e && e.isBuffer && e.isBuffer(n)) ||
					("function" == typeof ArrayBuffer && n instanceof ArrayBuffer) ||
					(o && n instanceof Blob) ||
					(s && n instanceof File)
				)
					return !0;
				if (n.toJSON && "function" == typeof n.toJSON && 1 === arguments.length) return t(n.toJSON(), !0);
				for (var c in n) if (Object.prototype.hasOwnProperty.call(n, c) && t(n[c])) return !0;
				return !1;
			};
		}.call(this, n(3).Buffer));
	},
	function(t, e, n) {
		"use strict";
		var r,
			i = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),
			o = {},
			s = 0,
			a = 0;
		function c(t) {
			var e = "";
			do {
				(e = i[t % 64] + e), (t = Math.floor(t / 64));
			} while (t > 0);
			return e;
		}
		function u() {
			var t = c(+new Date());
			return t !== r ? ((s = 0), (r = t)) : t + "." + c(s++);
		}
		for (; a < 64; a++) o[i[a]] = a;
		(u.encode = c),
			(u.decode = function(t) {
				var e = 0;
				for (a = 0; a < t.length; a++) e = 64 * e + o[t.charAt(a)];
				return e;
			}),
			(t.exports = u);
	},
	function(t, e) {
		var n = [].indexOf;
		t.exports = function(t, e) {
			if (n) return t.indexOf(e);
			for (var r = 0; r < t.length; ++r) if (t[r] === e) return r;
			return -1;
		};
	},
	function(t, e, n) {
		var r = n(13),
			i = n(5),
			o = n(65),
			s = n(28),
			a = n(29),
			c = n(1)("socket.io-client:socket"),
			u = n(11),
			h = n(24);
		t.exports = p;
		var f = {
				connect: 1,
				connect_error: 1,
				connect_timeout: 1,
				connecting: 1,
				disconnect: 1,
				error: 1,
				reconnect: 1,
				reconnect_attempt: 1,
				reconnect_failed: 1,
				reconnect_error: 1,
				reconnecting: 1,
				ping: 1,
				pong: 1,
			},
			l = i.prototype.emit;
		function p(t, e, n) {
			(this.io = t),
				(this.nsp = e),
				(this.json = this),
				(this.ids = 0),
				(this.acks = {}),
				(this.receiveBuffer = []),
				(this.sendBuffer = []),
				(this.connected = !1),
				(this.disconnected = !0),
				(this.flags = {}),
				n && n.query && (this.query = n.query),
				this.io.autoConnect && this.open();
		}
		i(p.prototype),
			(p.prototype.subEvents = function() {
				if (!this.subs) {
					var t = this.io;
					this.subs = [
						s(t, "open", a(this, "onopen")),
						s(t, "packet", a(this, "onpacket")),
						s(t, "close", a(this, "onclose")),
					];
				}
			}),
			(p.prototype.open = p.prototype.connect = function() {
				return (
					this.connected ||
						(this.subEvents(), this.io.open(), "open" === this.io.readyState && this.onopen(), this.emit("connecting")),
					this
				);
			}),
			(p.prototype.send = function() {
				var t = o(arguments);
				return t.unshift("message"), this.emit.apply(this, t), this;
			}),
			(p.prototype.emit = function(t) {
				if (f.hasOwnProperty(t)) return l.apply(this, arguments), this;
				var e = o(arguments),
					n = {
						type: (void 0 !== this.flags.binary ? this.flags.binary : h(e)) ? r.BINARY_EVENT : r.EVENT,
						data: e,
						options: {},
					};
				return (
					(n.options.compress = !this.flags || !1 !== this.flags.compress),
					"function" == typeof e[e.length - 1] &&
						(c("emitting packet with ack id %d", this.ids), (this.acks[this.ids] = e.pop()), (n.id = this.ids++)),
					this.connected ? this.packet(n) : this.sendBuffer.push(n),
					(this.flags = {}),
					this
				);
			}),
			(p.prototype.packet = function(t) {
				(t.nsp = this.nsp), this.io.packet(t);
			}),
			(p.prototype.onopen = function() {
				if ((c("transport is open - connecting"), "/" !== this.nsp))
					if (this.query) {
						var t = "object" == typeof this.query ? u.encode(this.query) : this.query;
						c("sending connect packet with query %s", t), this.packet({ type: r.CONNECT, query: t });
					} else this.packet({ type: r.CONNECT });
			}),
			(p.prototype.onclose = function(t) {
				c("close (%s)", t), (this.connected = !1), (this.disconnected = !0), delete this.id, this.emit("disconnect", t);
			}),
			(p.prototype.onpacket = function(t) {
				var e = t.nsp === this.nsp,
					n = t.type === r.ERROR && "/" === t.nsp;
				if (e || n)
					switch (t.type) {
						case r.CONNECT:
							this.onconnect();
							break;
						case r.EVENT:
						case r.BINARY_EVENT:
							this.onevent(t);
							break;
						case r.ACK:
						case r.BINARY_ACK:
							this.onack(t);
							break;
						case r.DISCONNECT:
							this.ondisconnect();
							break;
						case r.ERROR:
							this.emit("error", t.data);
					}
			}),
			(p.prototype.onevent = function(t) {
				var e = t.data || [];
				c("emitting event %j", e),
					null != t.id && (c("attaching ack callback to event"), e.push(this.ack(t.id))),
					this.connected ? l.apply(this, e) : this.receiveBuffer.push(e);
			}),
			(p.prototype.ack = function(t) {
				var e = this,
					n = !1;
				return function() {
					if (!n) {
						n = !0;
						var i = o(arguments);
						c("sending ack %j", i), e.packet({ type: h(i) ? r.BINARY_ACK : r.ACK, id: t, data: i });
					}
				};
			}),
			(p.prototype.onack = function(t) {
				var e = this.acks[t.id];
				"function" == typeof e
					? (c("calling ack %s with %j", t.id, t.data), e.apply(this, t.data), delete this.acks[t.id])
					: c("bad ack %s", t.id);
			}),
			(p.prototype.onconnect = function() {
				(this.connected = !0), (this.disconnected = !1), this.emit("connect"), this.emitBuffered();
			}),
			(p.prototype.emitBuffered = function() {
				var t;
				for (t = 0; t < this.receiveBuffer.length; t++) l.apply(this, this.receiveBuffer[t]);
				for (this.receiveBuffer = [], t = 0; t < this.sendBuffer.length; t++) this.packet(this.sendBuffer[t]);
				this.sendBuffer = [];
			}),
			(p.prototype.ondisconnect = function() {
				c("server disconnect (%s)", this.nsp), this.destroy(), this.onclose("io server disconnect");
			}),
			(p.prototype.destroy = function() {
				if (this.subs) {
					for (var t = 0; t < this.subs.length; t++) this.subs[t].destroy();
					this.subs = null;
				}
				this.io.destroy(this);
			}),
			(p.prototype.close = p.prototype.disconnect = function() {
				return (
					this.connected && (c("performing disconnect (%s)", this.nsp), this.packet({ type: r.DISCONNECT })),
					this.destroy(),
					this.connected && this.onclose("io client disconnect"),
					this
				);
			}),
			(p.prototype.compress = function(t) {
				return (this.flags.compress = t), this;
			}),
			(p.prototype.binary = function(t) {
				return (this.flags.binary = t), this;
			});
	},
	function(t, e) {
		t.exports = function(t, e, n) {
			return (
				t.on(e, n),
				{
					destroy: function() {
						t.removeListener(e, n);
					},
				}
			);
		};
	},
	function(t, e) {
		var n = [].slice;
		t.exports = function(t, e) {
			if (("string" == typeof e && (e = t[e]), "function" != typeof e)) throw new Error("bind() requires a function");
			var r = n.call(arguments, 2);
			return function() {
				return e.apply(t, r.concat(n.call(arguments)));
			};
		};
	},
	function(t, e, n) {
		var r = n(3),
			i = r.Buffer;
		function o(t, e) {
			for (var n in t) e[n] = t[n];
		}
		function s(t, e, n) {
			return i(t, e, n);
		}
		i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? (t.exports = r) : (o(r, e), (e.Buffer = s)),
			(s.prototype = Object.create(i.prototype)),
			o(i, s),
			(s.from = function(t, e, n) {
				if ("number" == typeof t) throw new TypeError("Argument must not be a number");
				return i(t, e, n);
			}),
			(s.alloc = function(t, e, n) {
				if ("number" != typeof t) throw new TypeError("Argument must be a number");
				var r = i(t);
				return void 0 !== e ? ("string" == typeof n ? r.fill(e, n) : r.fill(e)) : r.fill(0), r;
			}),
			(s.allocUnsafe = function(t) {
				if ("number" != typeof t) throw new TypeError("Argument must be a number");
				return i(t);
			}),
			(s.allocUnsafeSlow = function(t) {
				if ("number" != typeof t) throw new TypeError("Argument must be a number");
				return r.SlowBuffer(t);
			});
	},
	function(t, e, n) {
		"use strict";
		(function(e, r) {
			var i;
			(t.exports = S), (S.ReadableState = R);
			n(32).EventEmitter;
			var o = function(t, e) {
					return t.listeners(e).length;
				},
				s = n(33),
				a = n(3).Buffer,
				c = e.Uint8Array || function() {};
			var u,
				h = n(70);
			u = h && h.debuglog ? h.debuglog("stream") : function() {};
			var f,
				l,
				p,
				d = n(71),
				y = n(34),
				g = n(35).getHighWaterMark,
				m = n(8).codes,
				v = m.ERR_INVALID_ARG_TYPE,
				b = m.ERR_STREAM_PUSH_AFTER_EOF,
				w = m.ERR_METHOD_NOT_IMPLEMENTED,
				_ = m.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
			n(10)(S, s);
			var C = y.errorOrDestroy,
				E = ["error", "close", "destroy", "pause", "resume"];
			function R(t, e, r) {
				(i = i || n(9)),
					(t = t || {}),
					"boolean" != typeof r && (r = e instanceof i),
					(this.objectMode = !!t.objectMode),
					r && (this.objectMode = this.objectMode || !!t.readableObjectMode),
					(this.highWaterMark = g(this, t, "readableHighWaterMark", r)),
					(this.buffer = new d()),
					(this.length = 0),
					(this.pipes = null),
					(this.pipesCount = 0),
					(this.flowing = null),
					(this.ended = !1),
					(this.endEmitted = !1),
					(this.reading = !1),
					(this.sync = !0),
					(this.needReadable = !1),
					(this.emittedReadable = !1),
					(this.readableListening = !1),
					(this.resumeScheduled = !1),
					(this.paused = !0),
					(this.emitClose = !1 !== t.emitClose),
					(this.autoDestroy = !!t.autoDestroy),
					(this.destroyed = !1),
					(this.defaultEncoding = t.defaultEncoding || "utf8"),
					(this.awaitDrain = 0),
					(this.readingMore = !1),
					(this.decoder = null),
					(this.encoding = null),
					t.encoding &&
						(f || (f = n(37).StringDecoder), (this.decoder = new f(t.encoding)), (this.encoding = t.encoding));
			}
			function S(t) {
				if (((i = i || n(9)), !(this instanceof S))) return new S(t);
				var e = this instanceof i;
				(this._readableState = new R(t, this, e)),
					(this.readable = !0),
					t &&
						("function" == typeof t.read && (this._read = t.read),
						"function" == typeof t.destroy && (this._destroy = t.destroy)),
					s.call(this);
			}
			function k(t, e, n, r, i) {
				u("readableAddChunk", e);
				var o,
					s = t._readableState;
				if (null === e)
					(s.reading = !1),
						(function(t, e) {
							if ((u("onEofChunk"), e.ended)) return;
							if (e.decoder) {
								var n = e.decoder.end();
								n && n.length && (e.buffer.push(n), (e.length += e.objectMode ? 1 : n.length));
							}
							(e.ended = !0),
								e.sync ? x(t) : ((e.needReadable = !1), e.emittedReadable || ((e.emittedReadable = !0), P(t)));
						})(t, s);
				else if (
					(i ||
						(o = (function(t, e) {
							var n;
							(r = e),
								a.isBuffer(r) ||
									r instanceof c ||
									"string" == typeof e ||
									void 0 === e ||
									t.objectMode ||
									(n = new v("chunk", ["string", "Buffer", "Uint8Array"], e));
							var r;
							return n;
						})(s, e)),
					o)
				)
					C(t, o);
				else if (s.objectMode || (e && e.length > 0))
					if (
						("string" == typeof e ||
							s.objectMode ||
							Object.getPrototypeOf(e) === a.prototype ||
							(e = (function(t) {
								return a.from(t);
							})(e)),
						r)
					)
						s.endEmitted ? C(t, new _()) : A(t, s, e, !0);
					else if (s.ended) C(t, new b());
					else {
						if (s.destroyed) return !1;
						(s.reading = !1),
							s.decoder && !n
								? ((e = s.decoder.write(e)), s.objectMode || 0 !== e.length ? A(t, s, e, !1) : O(t, s))
								: A(t, s, e, !1);
					}
				else r || ((s.reading = !1), O(t, s));
				return !s.ended && (s.length < s.highWaterMark || 0 === s.length);
			}
			function A(t, e, n, r) {
				e.flowing && 0 === e.length && !e.sync
					? ((e.awaitDrain = 0), t.emit("data", n))
					: ((e.length += e.objectMode ? 1 : n.length),
					  r ? e.buffer.unshift(n) : e.buffer.push(n),
					  e.needReadable && x(t)),
					O(t, e);
			}
			Object.defineProperty(S.prototype, "destroyed", {
				enumerable: !1,
				get: function() {
					return void 0 !== this._readableState && this._readableState.destroyed;
				},
				set: function(t) {
					this._readableState && (this._readableState.destroyed = t);
				},
			}),
				(S.prototype.destroy = y.destroy),
				(S.prototype._undestroy = y.undestroy),
				(S.prototype._destroy = function(t, e) {
					e(t);
				}),
				(S.prototype.push = function(t, e) {
					var n,
						r = this._readableState;
					return (
						r.objectMode
							? (n = !0)
							: "string" == typeof t &&
							  ((e = e || r.defaultEncoding) !== r.encoding && ((t = a.from(t, e)), (e = "")), (n = !0)),
						k(this, t, e, !1, n)
					);
				}),
				(S.prototype.unshift = function(t) {
					return k(this, t, null, !0, !1);
				}),
				(S.prototype.isPaused = function() {
					return !1 === this._readableState.flowing;
				}),
				(S.prototype.setEncoding = function(t) {
					f || (f = n(37).StringDecoder);
					var e = new f(t);
					(this._readableState.decoder = e), (this._readableState.encoding = this._readableState.decoder.encoding);
					for (var r = this._readableState.buffer.head, i = ""; null !== r; ) (i += e.write(r.data)), (r = r.next);
					return (
						this._readableState.buffer.clear(),
						"" !== i && this._readableState.buffer.push(i),
						(this._readableState.length = i.length),
						this
					);
				});
			function T(t, e) {
				return t <= 0 || (0 === e.length && e.ended)
					? 0
					: e.objectMode
					? 1
					: t != t
					? e.flowing && e.length
						? e.buffer.head.data.length
						: e.length
					: (t > e.highWaterMark &&
							(e.highWaterMark = (function(t) {
								return (
									t >= 1073741824
										? (t = 1073741824)
										: (t--, (t |= t >>> 1), (t |= t >>> 2), (t |= t >>> 4), (t |= t >>> 8), (t |= t >>> 16), t++),
									t
								);
							})(t)),
					  t <= e.length ? t : e.ended ? e.length : ((e.needReadable = !0), 0));
			}
			function x(t) {
				var e = t._readableState;
				u("emitReadable", e.needReadable, e.emittedReadable),
					(e.needReadable = !1),
					e.emittedReadable || (u("emitReadable", e.flowing), (e.emittedReadable = !0), r.nextTick(P, t));
			}
			function P(t) {
				var e = t._readableState;
				u("emitReadable_", e.destroyed, e.length, e.ended),
					e.destroyed || (!e.length && !e.ended) || (t.emit("readable"), (e.emittedReadable = !1)),
					(e.needReadable = !e.flowing && !e.ended && e.length <= e.highWaterMark),
					D(t);
			}
			function O(t, e) {
				e.readingMore || ((e.readingMore = !0), r.nextTick(N, t, e));
			}
			function N(t, e) {
				for (; !e.reading && !e.ended && (e.length < e.highWaterMark || (e.flowing && 0 === e.length)); ) {
					var n = e.length;
					if ((u("maybeReadMore read 0"), t.read(0), n === e.length)) break;
				}
				e.readingMore = !1;
			}
			function B(t) {
				var e = t._readableState;
				(e.readableListening = t.listenerCount("readable") > 0),
					e.resumeScheduled && !e.paused ? (e.flowing = !0) : t.listenerCount("data") > 0 && t.resume();
			}
			function L(t) {
				u("readable nexttick read 0"), t.read(0);
			}
			function M(t, e) {
				u("resume", e.reading),
					e.reading || t.read(0),
					(e.resumeScheduled = !1),
					t.emit("resume"),
					D(t),
					e.flowing && !e.reading && t.read(0);
			}
			function D(t) {
				var e = t._readableState;
				for (u("flow", e.flowing); e.flowing && null !== t.read(); );
			}
			function F(t, e) {
				return 0 === e.length
					? null
					: (e.objectMode
							? (n = e.buffer.shift())
							: !t || t >= e.length
							? ((n = e.decoder
									? e.buffer.join("")
									: 1 === e.buffer.length
									? e.buffer.first()
									: e.buffer.concat(e.length)),
							  e.buffer.clear())
							: (n = e.buffer.consume(t, e.decoder)),
					  n);
				var n;
			}
			function I(t) {
				var e = t._readableState;
				u("endReadable", e.endEmitted), e.endEmitted || ((e.ended = !0), r.nextTick(j, e, t));
			}
			function j(t, e) {
				if (
					(u("endReadableNT", t.endEmitted, t.length),
					!t.endEmitted && 0 === t.length && ((t.endEmitted = !0), (e.readable = !1), e.emit("end"), t.autoDestroy))
				) {
					var n = e._writableState;
					(!n || (n.autoDestroy && n.finished)) && e.destroy();
				}
			}
			function U(t, e) {
				for (var n = 0, r = t.length; n < r; n++) if (t[n] === e) return n;
				return -1;
			}
			(S.prototype.read = function(t) {
				u("read", t), (t = parseInt(t, 10));
				var e = this._readableState,
					n = t;
				if (
					(0 !== t && (e.emittedReadable = !1),
					0 === t &&
						e.needReadable &&
						((0 !== e.highWaterMark ? e.length >= e.highWaterMark : e.length > 0) || e.ended))
				)
					return u("read: emitReadable", e.length, e.ended), 0 === e.length && e.ended ? I(this) : x(this), null;
				if (0 === (t = T(t, e)) && e.ended) return 0 === e.length && I(this), null;
				var r,
					i = e.needReadable;
				return (
					u("need readable", i),
					(0 === e.length || e.length - t < e.highWaterMark) && u("length less than watermark", (i = !0)),
					e.ended || e.reading
						? u("reading or ended", (i = !1))
						: i &&
						  (u("do read"),
						  (e.reading = !0),
						  (e.sync = !0),
						  0 === e.length && (e.needReadable = !0),
						  this._read(e.highWaterMark),
						  (e.sync = !1),
						  e.reading || (t = T(n, e))),
					null === (r = t > 0 ? F(t, e) : null)
						? ((e.needReadable = e.length <= e.highWaterMark), (t = 0))
						: ((e.length -= t), (e.awaitDrain = 0)),
					0 === e.length && (e.ended || (e.needReadable = !0), n !== t && e.ended && I(this)),
					null !== r && this.emit("data", r),
					r
				);
			}),
				(S.prototype._read = function(t) {
					C(this, new w("_read()"));
				}),
				(S.prototype.pipe = function(t, e) {
					var n = this,
						i = this._readableState;
					switch (i.pipesCount) {
						case 0:
							i.pipes = t;
							break;
						case 1:
							i.pipes = [i.pipes, t];
							break;
						default:
							i.pipes.push(t);
					}
					(i.pipesCount += 1), u("pipe count=%d opts=%j", i.pipesCount, e);
					var s = (!e || !1 !== e.end) && t !== r.stdout && t !== r.stderr ? c : g;
					function a(e, r) {
						u("onunpipe"),
							e === n &&
								r &&
								!1 === r.hasUnpiped &&
								((r.hasUnpiped = !0),
								u("cleanup"),
								t.removeListener("close", d),
								t.removeListener("finish", y),
								t.removeListener("drain", h),
								t.removeListener("error", p),
								t.removeListener("unpipe", a),
								n.removeListener("end", c),
								n.removeListener("end", g),
								n.removeListener("data", l),
								(f = !0),
								!i.awaitDrain || (t._writableState && !t._writableState.needDrain) || h());
					}
					function c() {
						u("onend"), t.end();
					}
					i.endEmitted ? r.nextTick(s) : n.once("end", s), t.on("unpipe", a);
					var h = (function(t) {
						return function() {
							var e = t._readableState;
							u("pipeOnDrain", e.awaitDrain),
								e.awaitDrain && e.awaitDrain--,
								0 === e.awaitDrain && o(t, "data") && ((e.flowing = !0), D(t));
						};
					})(n);
					t.on("drain", h);
					var f = !1;
					function l(e) {
						u("ondata");
						var r = t.write(e);
						u("dest.write", r),
							!1 === r &&
								(((1 === i.pipesCount && i.pipes === t) || (i.pipesCount > 1 && -1 !== U(i.pipes, t))) &&
									!f &&
									(u("false write response, pause", i.awaitDrain), i.awaitDrain++),
								n.pause());
					}
					function p(e) {
						u("onerror", e), g(), t.removeListener("error", p), 0 === o(t, "error") && C(t, e);
					}
					function d() {
						t.removeListener("finish", y), g();
					}
					function y() {
						u("onfinish"), t.removeListener("close", d), g();
					}
					function g() {
						u("unpipe"), n.unpipe(t);
					}
					return (
						n.on("data", l),
						(function(t, e, n) {
							if ("function" == typeof t.prependListener) return t.prependListener(e, n);
							t._events && t._events[e]
								? Array.isArray(t._events[e])
									? t._events[e].unshift(n)
									: (t._events[e] = [n, t._events[e]])
								: t.on(e, n);
						})(t, "error", p),
						t.once("close", d),
						t.once("finish", y),
						t.emit("pipe", n),
						i.flowing || (u("pipe resume"), n.resume()),
						t
					);
				}),
				(S.prototype.unpipe = function(t) {
					var e = this._readableState,
						n = { hasUnpiped: !1 };
					if (0 === e.pipesCount) return this;
					if (1 === e.pipesCount)
						return (
							(t && t !== e.pipes) ||
								(t || (t = e.pipes),
								(e.pipes = null),
								(e.pipesCount = 0),
								(e.flowing = !1),
								t && t.emit("unpipe", this, n)),
							this
						);
					if (!t) {
						var r = e.pipes,
							i = e.pipesCount;
						(e.pipes = null), (e.pipesCount = 0), (e.flowing = !1);
						for (var o = 0; o < i; o++) r[o].emit("unpipe", this, { hasUnpiped: !1 });
						return this;
					}
					var s = U(e.pipes, t);
					return (
						-1 === s ||
							(e.pipes.splice(s, 1),
							(e.pipesCount -= 1),
							1 === e.pipesCount && (e.pipes = e.pipes[0]),
							t.emit("unpipe", this, n)),
						this
					);
				}),
				(S.prototype.on = function(t, e) {
					var n = s.prototype.on.call(this, t, e),
						i = this._readableState;
					return (
						"data" === t
							? ((i.readableListening = this.listenerCount("readable") > 0), !1 !== i.flowing && this.resume())
							: "readable" === t &&
							  (i.endEmitted ||
									i.readableListening ||
									((i.readableListening = i.needReadable = !0),
									(i.flowing = !1),
									(i.emittedReadable = !1),
									u("on readable", i.length, i.reading),
									i.length ? x(this) : i.reading || r.nextTick(L, this))),
						n
					);
				}),
				(S.prototype.addListener = S.prototype.on),
				(S.prototype.removeListener = function(t, e) {
					var n = s.prototype.removeListener.call(this, t, e);
					return "readable" === t && r.nextTick(B, this), n;
				}),
				(S.prototype.removeAllListeners = function(t) {
					var e = s.prototype.removeAllListeners.apply(this, arguments);
					return ("readable" !== t && void 0 !== t) || r.nextTick(B, this), e;
				}),
				(S.prototype.resume = function() {
					var t = this._readableState;
					return (
						t.flowing ||
							(u("resume"),
							(t.flowing = !t.readableListening),
							(function(t, e) {
								e.resumeScheduled || ((e.resumeScheduled = !0), r.nextTick(M, t, e));
							})(this, t)),
						(t.paused = !1),
						this
					);
				}),
				(S.prototype.pause = function() {
					return (
						u("call pause flowing=%j", this._readableState.flowing),
						!1 !== this._readableState.flowing && (u("pause"), (this._readableState.flowing = !1), this.emit("pause")),
						(this._readableState.paused = !0),
						this
					);
				}),
				(S.prototype.wrap = function(t) {
					var e = this,
						n = this._readableState,
						r = !1;
					for (var i in (t.on("end", function() {
						if ((u("wrapped end"), n.decoder && !n.ended)) {
							var t = n.decoder.end();
							t && t.length && e.push(t);
						}
						e.push(null);
					}),
					t.on("data", function(i) {
						(u("wrapped data"), n.decoder && (i = n.decoder.write(i)), n.objectMode && null == i) ||
							((n.objectMode || (i && i.length)) && (e.push(i) || ((r = !0), t.pause())));
					}),
					t))
						void 0 === this[i] &&
							"function" == typeof t[i] &&
							(this[i] = (function(e) {
								return function() {
									return t[e].apply(t, arguments);
								};
							})(i));
					for (var o = 0; o < E.length; o++) t.on(E[o], this.emit.bind(this, E[o]));
					return (
						(this._read = function(e) {
							u("wrapped _read", e), r && ((r = !1), t.resume());
						}),
						this
					);
				}),
				"function" == typeof Symbol &&
					(S.prototype[Symbol.asyncIterator] = function() {
						return void 0 === l && (l = n(74)), l(this);
					}),
				Object.defineProperty(S.prototype, "readableHighWaterMark", {
					enumerable: !1,
					get: function() {
						return this._readableState.highWaterMark;
					},
				}),
				Object.defineProperty(S.prototype, "readableBuffer", {
					enumerable: !1,
					get: function() {
						return this._readableState && this._readableState.buffer;
					},
				}),
				Object.defineProperty(S.prototype, "readableFlowing", {
					enumerable: !1,
					get: function() {
						return this._readableState.flowing;
					},
					set: function(t) {
						this._readableState && (this._readableState.flowing = t);
					},
				}),
				(S._fromList = F),
				Object.defineProperty(S.prototype, "readableLength", {
					enumerable: !1,
					get: function() {
						return this._readableState.length;
					},
				}),
				"function" == typeof Symbol &&
					(S.from = function(t, e) {
						return void 0 === p && (p = n(75)), p(S, t, e);
					});
		}.call(this, n(6), n(2)));
	},
	function(t, e, n) {
		"use strict";
		var r,
			i = "object" == typeof Reflect ? Reflect : null,
			o =
				i && "function" == typeof i.apply
					? i.apply
					: function(t, e, n) {
							return Function.prototype.apply.call(t, e, n);
					  };
		r =
			i && "function" == typeof i.ownKeys
				? i.ownKeys
				: Object.getOwnPropertySymbols
				? function(t) {
						return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
				  }
				: function(t) {
						return Object.getOwnPropertyNames(t);
				  };
		var s =
			Number.isNaN ||
			function(t) {
				return t != t;
			};
		function a() {
			a.init.call(this);
		}
		(t.exports = a),
			(a.EventEmitter = a),
			(a.prototype._events = void 0),
			(a.prototype._eventsCount = 0),
			(a.prototype._maxListeners = void 0);
		var c = 10;
		function u(t) {
			if ("function" != typeof t)
				throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
		}
		function h(t) {
			return void 0 === t._maxListeners ? a.defaultMaxListeners : t._maxListeners;
		}
		function f(t, e, n, r) {
			var i, o, s, a;
			if (
				(u(n),
				void 0 === (o = t._events)
					? ((o = t._events = Object.create(null)), (t._eventsCount = 0))
					: (void 0 !== o.newListener && (t.emit("newListener", e, n.listener ? n.listener : n), (o = t._events)),
					  (s = o[e])),
				void 0 === s)
			)
				(s = o[e] = n), ++t._eventsCount;
			else if (
				("function" == typeof s ? (s = o[e] = r ? [n, s] : [s, n]) : r ? s.unshift(n) : s.push(n),
				(i = h(t)) > 0 && s.length > i && !s.warned)
			) {
				s.warned = !0;
				var c = new Error(
					"Possible EventEmitter memory leak detected. " +
						s.length +
						" " +
						String(e) +
						" listeners added. Use emitter.setMaxListeners() to increase limit",
				);
				(c.name = "MaxListenersExceededWarning"),
					(c.emitter = t),
					(c.type = e),
					(c.count = s.length),
					(a = c),
					console && console.warn && console.warn(a);
			}
			return t;
		}
		function l() {
			if (!this.fired)
				return (
					this.target.removeListener(this.type, this.wrapFn),
					(this.fired = !0),
					0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
				);
		}
		function p(t, e, n) {
			var r = { fired: !1, wrapFn: void 0, target: t, type: e, listener: n },
				i = l.bind(r);
			return (i.listener = n), (r.wrapFn = i), i;
		}
		function d(t, e, n) {
			var r = t._events;
			if (void 0 === r) return [];
			var i = r[e];
			return void 0 === i
				? []
				: "function" == typeof i
				? n
					? [i.listener || i]
					: [i]
				: n
				? (function(t) {
						for (var e = new Array(t.length), n = 0; n < e.length; ++n) e[n] = t[n].listener || t[n];
						return e;
				  })(i)
				: g(i, i.length);
		}
		function y(t) {
			var e = this._events;
			if (void 0 !== e) {
				var n = e[t];
				if ("function" == typeof n) return 1;
				if (void 0 !== n) return n.length;
			}
			return 0;
		}
		function g(t, e) {
			for (var n = new Array(e), r = 0; r < e; ++r) n[r] = t[r];
			return n;
		}
		Object.defineProperty(a, "defaultMaxListeners", {
			enumerable: !0,
			get: function() {
				return c;
			},
			set: function(t) {
				if ("number" != typeof t || t < 0 || s(t))
					throw new RangeError(
						'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".",
					);
				c = t;
			},
		}),
			(a.init = function() {
				(void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events) ||
					((this._events = Object.create(null)), (this._eventsCount = 0)),
					(this._maxListeners = this._maxListeners || void 0);
			}),
			(a.prototype.setMaxListeners = function(t) {
				if ("number" != typeof t || t < 0 || s(t))
					throw new RangeError(
						'The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".",
					);
				return (this._maxListeners = t), this;
			}),
			(a.prototype.getMaxListeners = function() {
				return h(this);
			}),
			(a.prototype.emit = function(t) {
				for (var e = [], n = 1; n < arguments.length; n++) e.push(arguments[n]);
				var r = "error" === t,
					i = this._events;
				if (void 0 !== i) r = r && void 0 === i.error;
				else if (!r) return !1;
				if (r) {
					var s;
					if ((e.length > 0 && (s = e[0]), s instanceof Error)) throw s;
					var a = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
					throw ((a.context = s), a);
				}
				var c = i[t];
				if (void 0 === c) return !1;
				if ("function" == typeof c) o(c, this, e);
				else {
					var u = c.length,
						h = g(c, u);
					for (n = 0; n < u; ++n) o(h[n], this, e);
				}
				return !0;
			}),
			(a.prototype.addListener = function(t, e) {
				return f(this, t, e, !1);
			}),
			(a.prototype.on = a.prototype.addListener),
			(a.prototype.prependListener = function(t, e) {
				return f(this, t, e, !0);
			}),
			(a.prototype.once = function(t, e) {
				return u(e), this.on(t, p(this, t, e)), this;
			}),
			(a.prototype.prependOnceListener = function(t, e) {
				return u(e), this.prependListener(t, p(this, t, e)), this;
			}),
			(a.prototype.removeListener = function(t, e) {
				var n, r, i, o, s;
				if ((u(e), void 0 === (r = this._events))) return this;
				if (void 0 === (n = r[t])) return this;
				if (n === e || n.listener === e)
					0 == --this._eventsCount
						? (this._events = Object.create(null))
						: (delete r[t], r.removeListener && this.emit("removeListener", t, n.listener || e));
				else if ("function" != typeof n) {
					for (i = -1, o = n.length - 1; o >= 0; o--)
						if (n[o] === e || n[o].listener === e) {
							(s = n[o].listener), (i = o);
							break;
						}
					if (i < 0) return this;
					0 === i
						? n.shift()
						: (function(t, e) {
								for (; e + 1 < t.length; e++) t[e] = t[e + 1];
								t.pop();
						  })(n, i),
						1 === n.length && (r[t] = n[0]),
						void 0 !== r.removeListener && this.emit("removeListener", t, s || e);
				}
				return this;
			}),
			(a.prototype.off = a.prototype.removeListener),
			(a.prototype.removeAllListeners = function(t) {
				var e, n, r;
				if (void 0 === (n = this._events)) return this;
				if (void 0 === n.removeListener)
					return (
						0 === arguments.length
							? ((this._events = Object.create(null)), (this._eventsCount = 0))
							: void 0 !== n[t] && (0 == --this._eventsCount ? (this._events = Object.create(null)) : delete n[t]),
						this
					);
				if (0 === arguments.length) {
					var i,
						o = Object.keys(n);
					for (r = 0; r < o.length; ++r) "removeListener" !== (i = o[r]) && this.removeAllListeners(i);
					return (
						this.removeAllListeners("removeListener"),
						(this._events = Object.create(null)),
						(this._eventsCount = 0),
						this
					);
				}
				if ("function" == typeof (e = n[t])) this.removeListener(t, e);
				else if (void 0 !== e) for (r = e.length - 1; r >= 0; r--) this.removeListener(t, e[r]);
				return this;
			}),
			(a.prototype.listeners = function(t) {
				return d(this, t, !0);
			}),
			(a.prototype.rawListeners = function(t) {
				return d(this, t, !1);
			}),
			(a.listenerCount = function(t, e) {
				return "function" == typeof t.listenerCount ? t.listenerCount(e) : y.call(t, e);
			}),
			(a.prototype.listenerCount = y),
			(a.prototype.eventNames = function() {
				return this._eventsCount > 0 ? r(this._events) : [];
			});
	},
	function(t, e, n) {
		t.exports = n(32).EventEmitter;
	},
	function(t, e, n) {
		"use strict";
		(function(e) {
			function n(t, e) {
				i(t, e), r(t);
			}
			function r(t) {
				(t._writableState && !t._writableState.emitClose) ||
					(t._readableState && !t._readableState.emitClose) ||
					t.emit("close");
			}
			function i(t, e) {
				t.emit("error", e);
			}
			t.exports = {
				destroy: function(t, o) {
					var s = this,
						a = this._readableState && this._readableState.destroyed,
						c = this._writableState && this._writableState.destroyed;
					return a || c
						? (o
								? o(t)
								: t &&
								  (this._writableState
										? this._writableState.errorEmitted ||
										  ((this._writableState.errorEmitted = !0), e.nextTick(i, this, t))
										: e.nextTick(i, this, t)),
						  this)
						: (this._readableState && (this._readableState.destroyed = !0),
						  this._writableState && (this._writableState.destroyed = !0),
						  this._destroy(t || null, function(t) {
								!o && t
									? s._writableState
										? s._writableState.errorEmitted
											? e.nextTick(r, s)
											: ((s._writableState.errorEmitted = !0), e.nextTick(n, s, t))
										: e.nextTick(n, s, t)
									: o
									? (e.nextTick(r, s), o(t))
									: e.nextTick(r, s);
						  }),
						  this);
				},
				undestroy: function() {
					this._readableState &&
						((this._readableState.destroyed = !1),
						(this._readableState.reading = !1),
						(this._readableState.ended = !1),
						(this._readableState.endEmitted = !1)),
						this._writableState &&
							((this._writableState.destroyed = !1),
							(this._writableState.ended = !1),
							(this._writableState.ending = !1),
							(this._writableState.finalCalled = !1),
							(this._writableState.prefinished = !1),
							(this._writableState.finished = !1),
							(this._writableState.errorEmitted = !1));
				},
				errorOrDestroy: function(t, e) {
					var n = t._readableState,
						r = t._writableState;
					(n && n.autoDestroy) || (r && r.autoDestroy) ? t.destroy(e) : t.emit("error", e);
				},
			};
		}.call(this, n(2)));
	},
	function(t, e, n) {
		"use strict";
		var r = n(8).codes.ERR_INVALID_OPT_VALUE;
		t.exports = {
			getHighWaterMark: function(t, e, n, i) {
				var o = (function(t, e, n) {
					return null != t.highWaterMark ? t.highWaterMark : e ? t[n] : null;
				})(e, i, n);
				if (null != o) {
					if (!isFinite(o) || Math.floor(o) !== o || o < 0) throw new r(i ? n : "highWaterMark", o);
					return Math.floor(o);
				}
				return t.objectMode ? 16 : 16384;
			},
		};
	},
	function(t, e, n) {
		"use strict";
		(function(e, r) {
			function i(t) {
				var e = this;
				(this.next = null),
					(this.entry = null),
					(this.finish = function() {
						!(function(t, e, n) {
							var r = t.entry;
							t.entry = null;
							for (; r; ) {
								var i = r.callback;
								e.pendingcb--, i(n), (r = r.next);
							}
							e.corkedRequestsFree.next = t;
						})(e, t);
					});
			}
			var o;
			(t.exports = S), (S.WritableState = R);
			var s = { deprecate: n(73) },
				a = n(33),
				c = n(3).Buffer,
				u = e.Uint8Array || function() {};
			var h,
				f = n(34),
				l = n(35).getHighWaterMark,
				p = n(8).codes,
				d = p.ERR_INVALID_ARG_TYPE,
				y = p.ERR_METHOD_NOT_IMPLEMENTED,
				g = p.ERR_MULTIPLE_CALLBACK,
				m = p.ERR_STREAM_CANNOT_PIPE,
				v = p.ERR_STREAM_DESTROYED,
				b = p.ERR_STREAM_NULL_VALUES,
				w = p.ERR_STREAM_WRITE_AFTER_END,
				_ = p.ERR_UNKNOWN_ENCODING,
				C = f.errorOrDestroy;
			function E() {}
			function R(t, e, s) {
				(o = o || n(9)),
					(t = t || {}),
					"boolean" != typeof s && (s = e instanceof o),
					(this.objectMode = !!t.objectMode),
					s && (this.objectMode = this.objectMode || !!t.writableObjectMode),
					(this.highWaterMark = l(this, t, "writableHighWaterMark", s)),
					(this.finalCalled = !1),
					(this.needDrain = !1),
					(this.ending = !1),
					(this.ended = !1),
					(this.finished = !1),
					(this.destroyed = !1);
				var a = !1 === t.decodeStrings;
				(this.decodeStrings = !a),
					(this.defaultEncoding = t.defaultEncoding || "utf8"),
					(this.length = 0),
					(this.writing = !1),
					(this.corked = 0),
					(this.sync = !0),
					(this.bufferProcessing = !1),
					(this.onwrite = function(t) {
						!(function(t, e) {
							var n = t._writableState,
								i = n.sync,
								o = n.writecb;
							if ("function" != typeof o) throw new g();
							if (
								((function(t) {
									(t.writing = !1), (t.writecb = null), (t.length -= t.writelen), (t.writelen = 0);
								})(n),
								e)
							)
								!(function(t, e, n, i, o) {
									--e.pendingcb,
										n
											? (r.nextTick(o, i), r.nextTick(O, t, e), (t._writableState.errorEmitted = !0), C(t, i))
											: (o(i), (t._writableState.errorEmitted = !0), C(t, i), O(t, e));
								})(t, n, i, e, o);
							else {
								var s = x(n) || t.destroyed;
								s || n.corked || n.bufferProcessing || !n.bufferedRequest || T(t, n),
									i ? r.nextTick(A, t, n, s, o) : A(t, n, s, o);
							}
						})(e, t);
					}),
					(this.writecb = null),
					(this.writelen = 0),
					(this.bufferedRequest = null),
					(this.lastBufferedRequest = null),
					(this.pendingcb = 0),
					(this.prefinished = !1),
					(this.errorEmitted = !1),
					(this.emitClose = !1 !== t.emitClose),
					(this.autoDestroy = !!t.autoDestroy),
					(this.bufferedRequestCount = 0),
					(this.corkedRequestsFree = new i(this));
			}
			function S(t) {
				var e = this instanceof (o = o || n(9));
				if (!e && !h.call(S, this)) return new S(t);
				(this._writableState = new R(t, this, e)),
					(this.writable = !0),
					t &&
						("function" == typeof t.write && (this._write = t.write),
						"function" == typeof t.writev && (this._writev = t.writev),
						"function" == typeof t.destroy && (this._destroy = t.destroy),
						"function" == typeof t.final && (this._final = t.final)),
					a.call(this);
			}
			function k(t, e, n, r, i, o, s) {
				(e.writelen = r),
					(e.writecb = s),
					(e.writing = !0),
					(e.sync = !0),
					e.destroyed ? e.onwrite(new v("write")) : n ? t._writev(i, e.onwrite) : t._write(i, o, e.onwrite),
					(e.sync = !1);
			}
			function A(t, e, n, r) {
				n ||
					(function(t, e) {
						0 === e.length && e.needDrain && ((e.needDrain = !1), t.emit("drain"));
					})(t, e),
					e.pendingcb--,
					r(),
					O(t, e);
			}
			function T(t, e) {
				e.bufferProcessing = !0;
				var n = e.bufferedRequest;
				if (t._writev && n && n.next) {
					var r = e.bufferedRequestCount,
						o = new Array(r),
						s = e.corkedRequestsFree;
					s.entry = n;
					for (var a = 0, c = !0; n; ) (o[a] = n), n.isBuf || (c = !1), (n = n.next), (a += 1);
					(o.allBuffers = c),
						k(t, e, !0, e.length, o, "", s.finish),
						e.pendingcb++,
						(e.lastBufferedRequest = null),
						s.next ? ((e.corkedRequestsFree = s.next), (s.next = null)) : (e.corkedRequestsFree = new i(e)),
						(e.bufferedRequestCount = 0);
				} else {
					for (; n; ) {
						var u = n.chunk,
							h = n.encoding,
							f = n.callback;
						if ((k(t, e, !1, e.objectMode ? 1 : u.length, u, h, f), (n = n.next), e.bufferedRequestCount--, e.writing))
							break;
					}
					null === n && (e.lastBufferedRequest = null);
				}
				(e.bufferedRequest = n), (e.bufferProcessing = !1);
			}
			function x(t) {
				return t.ending && 0 === t.length && null === t.bufferedRequest && !t.finished && !t.writing;
			}
			function P(t, e) {
				t._final(function(n) {
					e.pendingcb--, n && C(t, n), (e.prefinished = !0), t.emit("prefinish"), O(t, e);
				});
			}
			function O(t, e) {
				var n = x(e);
				if (
					n &&
					((function(t, e) {
						e.prefinished ||
							e.finalCalled ||
							("function" != typeof t._final || e.destroyed
								? ((e.prefinished = !0), t.emit("prefinish"))
								: (e.pendingcb++, (e.finalCalled = !0), r.nextTick(P, t, e)));
					})(t, e),
					0 === e.pendingcb && ((e.finished = !0), t.emit("finish"), e.autoDestroy))
				) {
					var i = t._readableState;
					(!i || (i.autoDestroy && i.endEmitted)) && t.destroy();
				}
				return n;
			}
			n(10)(S, a),
				(R.prototype.getBuffer = function() {
					for (var t = this.bufferedRequest, e = []; t; ) e.push(t), (t = t.next);
					return e;
				}),
				(function() {
					try {
						Object.defineProperty(R.prototype, "buffer", {
							get: s.deprecate(
								function() {
									return this.getBuffer();
								},
								"_writableState.buffer is deprecated. Use _writableState.getBuffer instead.",
								"DEP0003",
							),
						});
					} catch (t) {}
				})(),
				"function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance]
					? ((h = Function.prototype[Symbol.hasInstance]),
					  Object.defineProperty(S, Symbol.hasInstance, {
							value: function(t) {
								return !!h.call(this, t) || (this === S && t && t._writableState instanceof R);
							},
					  }))
					: (h = function(t) {
							return t instanceof this;
					  }),
				(S.prototype.pipe = function() {
					C(this, new m());
				}),
				(S.prototype.write = function(t, e, n) {
					var i,
						o = this._writableState,
						s = !1,
						a = !o.objectMode && ((i = t), c.isBuffer(i) || i instanceof u);
					return (
						a &&
							!c.isBuffer(t) &&
							(t = (function(t) {
								return c.from(t);
							})(t)),
						"function" == typeof e && ((n = e), (e = null)),
						a ? (e = "buffer") : e || (e = o.defaultEncoding),
						"function" != typeof n && (n = E),
						o.ending
							? (function(t, e) {
									var n = new w();
									C(t, n), r.nextTick(e, n);
							  })(this, n)
							: (a ||
									(function(t, e, n, i) {
										var o;
										return (
											null === n
												? (o = new b())
												: "string" == typeof n || e.objectMode || (o = new d("chunk", ["string", "Buffer"], n)),
											!o || (C(t, o), r.nextTick(i, o), !1)
										);
									})(this, o, t, n)) &&
							  (o.pendingcb++,
							  (s = (function(t, e, n, r, i, o) {
									if (!n) {
										var s = (function(t, e, n) {
											t.objectMode || !1 === t.decodeStrings || "string" != typeof e || (e = c.from(e, n));
											return e;
										})(e, r, i);
										r !== s && ((n = !0), (i = "buffer"), (r = s));
									}
									var a = e.objectMode ? 1 : r.length;
									e.length += a;
									var u = e.length < e.highWaterMark;
									u || (e.needDrain = !0);
									if (e.writing || e.corked) {
										var h = e.lastBufferedRequest;
										(e.lastBufferedRequest = { chunk: r, encoding: i, isBuf: n, callback: o, next: null }),
											h ? (h.next = e.lastBufferedRequest) : (e.bufferedRequest = e.lastBufferedRequest),
											(e.bufferedRequestCount += 1);
									} else k(t, e, !1, a, r, i, o);
									return u;
							  })(this, o, a, t, e, n))),
						s
					);
				}),
				(S.prototype.cork = function() {
					this._writableState.corked++;
				}),
				(S.prototype.uncork = function() {
					var t = this._writableState;
					t.corked && (t.corked--, t.writing || t.corked || t.bufferProcessing || !t.bufferedRequest || T(this, t));
				}),
				(S.prototype.setDefaultEncoding = function(t) {
					if (
						("string" == typeof t && (t = t.toLowerCase()),
						!(
							[
								"hex",
								"utf8",
								"utf-8",
								"ascii",
								"binary",
								"base64",
								"ucs2",
								"ucs-2",
								"utf16le",
								"utf-16le",
								"raw",
							].indexOf((t + "").toLowerCase()) > -1
						))
					)
						throw new _(t);
					return (this._writableState.defaultEncoding = t), this;
				}),
				Object.defineProperty(S.prototype, "writableBuffer", {
					enumerable: !1,
					get: function() {
						return this._writableState && this._writableState.getBuffer();
					},
				}),
				Object.defineProperty(S.prototype, "writableHighWaterMark", {
					enumerable: !1,
					get: function() {
						return this._writableState.highWaterMark;
					},
				}),
				(S.prototype._write = function(t, e, n) {
					n(new y("_write()"));
				}),
				(S.prototype._writev = null),
				(S.prototype.end = function(t, e, n) {
					var i = this._writableState;
					return (
						"function" == typeof t
							? ((n = t), (t = null), (e = null))
							: "function" == typeof e && ((n = e), (e = null)),
						null != t && this.write(t, e),
						i.corked && ((i.corked = 1), this.uncork()),
						i.ending ||
							(function(t, e, n) {
								(e.ending = !0), O(t, e), n && (e.finished ? r.nextTick(n) : t.once("finish", n));
								(e.ended = !0), (t.writable = !1);
							})(this, i, n),
						this
					);
				}),
				Object.defineProperty(S.prototype, "writableLength", {
					enumerable: !1,
					get: function() {
						return this._writableState.length;
					},
				}),
				Object.defineProperty(S.prototype, "destroyed", {
					enumerable: !1,
					get: function() {
						return void 0 !== this._writableState && this._writableState.destroyed;
					},
					set: function(t) {
						this._writableState && (this._writableState.destroyed = t);
					},
				}),
				(S.prototype.destroy = f.destroy),
				(S.prototype._undestroy = f.undestroy),
				(S.prototype._destroy = function(t, e) {
					e(t);
				});
		}.call(this, n(6), n(2)));
	},
	function(t, e, n) {
		"use strict";
		var r = n(30).Buffer,
			i =
				r.isEncoding ||
				function(t) {
					switch ((t = "" + t) && t.toLowerCase()) {
						case "hex":
						case "utf8":
						case "utf-8":
						case "ascii":
						case "binary":
						case "base64":
						case "ucs2":
						case "ucs-2":
						case "utf16le":
						case "utf-16le":
						case "raw":
							return !0;
						default:
							return !1;
					}
				};
		function o(t) {
			var e;
			switch (
				((this.encoding = (function(t) {
					var e = (function(t) {
						if (!t) return "utf8";
						for (var e; ; )
							switch (t) {
								case "utf8":
								case "utf-8":
									return "utf8";
								case "ucs2":
								case "ucs-2":
								case "utf16le":
								case "utf-16le":
									return "utf16le";
								case "latin1":
								case "binary":
									return "latin1";
								case "base64":
								case "ascii":
								case "hex":
									return t;
								default:
									if (e) return;
									(t = ("" + t).toLowerCase()), (e = !0);
							}
					})(t);
					if ("string" != typeof e && (r.isEncoding === i || !i(t))) throw new Error("Unknown encoding: " + t);
					return e || t;
				})(t)),
				this.encoding)
			) {
				case "utf16le":
					(this.text = c), (this.end = u), (e = 4);
					break;
				case "utf8":
					(this.fillLast = a), (e = 4);
					break;
				case "base64":
					(this.text = h), (this.end = f), (e = 3);
					break;
				default:
					return (this.write = l), void (this.end = p);
			}
			(this.lastNeed = 0), (this.lastTotal = 0), (this.lastChar = r.allocUnsafe(e));
		}
		function s(t) {
			return t <= 127 ? 0 : t >> 5 == 6 ? 2 : t >> 4 == 14 ? 3 : t >> 3 == 30 ? 4 : t >> 6 == 2 ? -1 : -2;
		}
		function a(t) {
			var e = this.lastTotal - this.lastNeed,
				n = (function(t, e, n) {
					if (128 != (192 & e[0])) return (t.lastNeed = 0), "�";
					if (t.lastNeed > 1 && e.length > 1) {
						if (128 != (192 & e[1])) return (t.lastNeed = 1), "�";
						if (t.lastNeed > 2 && e.length > 2 && 128 != (192 & e[2])) return (t.lastNeed = 2), "�";
					}
				})(this, t);
			return void 0 !== n
				? n
				: this.lastNeed <= t.length
				? (t.copy(this.lastChar, e, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal))
				: (t.copy(this.lastChar, e, 0, t.length), void (this.lastNeed -= t.length));
		}
		function c(t, e) {
			if ((t.length - e) % 2 == 0) {
				var n = t.toString("utf16le", e);
				if (n) {
					var r = n.charCodeAt(n.length - 1);
					if (r >= 55296 && r <= 56319)
						return (
							(this.lastNeed = 2),
							(this.lastTotal = 4),
							(this.lastChar[0] = t[t.length - 2]),
							(this.lastChar[1] = t[t.length - 1]),
							n.slice(0, -1)
						);
				}
				return n;
			}
			return (
				(this.lastNeed = 1),
				(this.lastTotal = 2),
				(this.lastChar[0] = t[t.length - 1]),
				t.toString("utf16le", e, t.length - 1)
			);
		}
		function u(t) {
			var e = t && t.length ? this.write(t) : "";
			if (this.lastNeed) {
				var n = this.lastTotal - this.lastNeed;
				return e + this.lastChar.toString("utf16le", 0, n);
			}
			return e;
		}
		function h(t, e) {
			var n = (t.length - e) % 3;
			return 0 === n
				? t.toString("base64", e)
				: ((this.lastNeed = 3 - n),
				  (this.lastTotal = 3),
				  1 === n
						? (this.lastChar[0] = t[t.length - 1])
						: ((this.lastChar[0] = t[t.length - 2]), (this.lastChar[1] = t[t.length - 1])),
				  t.toString("base64", e, t.length - n));
		}
		function f(t) {
			var e = t && t.length ? this.write(t) : "";
			return this.lastNeed ? e + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : e;
		}
		function l(t) {
			return t.toString(this.encoding);
		}
		function p(t) {
			return t && t.length ? this.write(t) : "";
		}
		(e.StringDecoder = o),
			(o.prototype.write = function(t) {
				if (0 === t.length) return "";
				var e, n;
				if (this.lastNeed) {
					if (void 0 === (e = this.fillLast(t))) return "";
					(n = this.lastNeed), (this.lastNeed = 0);
				} else n = 0;
				return n < t.length ? (e ? e + this.text(t, n) : this.text(t, n)) : e || "";
			}),
			(o.prototype.end = function(t) {
				var e = t && t.length ? this.write(t) : "";
				return this.lastNeed ? e + "�" : e;
			}),
			(o.prototype.text = function(t, e) {
				var n = (function(t, e, n) {
					var r = e.length - 1;
					if (r < n) return 0;
					var i = s(e[r]);
					if (i >= 0) return i > 0 && (t.lastNeed = i - 1), i;
					if (--r < n || -2 === i) return 0;
					if ((i = s(e[r])) >= 0) return i > 0 && (t.lastNeed = i - 2), i;
					if (--r < n || -2 === i) return 0;
					if ((i = s(e[r])) >= 0) return i > 0 && (2 === i ? (i = 0) : (t.lastNeed = i - 3)), i;
					return 0;
				})(this, t, e);
				if (!this.lastNeed) return t.toString("utf8", e);
				this.lastTotal = n;
				var r = t.length - (n - this.lastNeed);
				return t.copy(this.lastChar, 0, r), t.toString("utf8", e, r);
			}),
			(o.prototype.fillLast = function(t) {
				if (this.lastNeed <= t.length)
					return (
						t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed),
						this.lastChar.toString(this.encoding, 0, this.lastTotal)
					);
				t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t.length), (this.lastNeed -= t.length);
			});
	},
	function(t, e, n) {
		"use strict";
		t.exports = h;
		var r = n(8).codes,
			i = r.ERR_METHOD_NOT_IMPLEMENTED,
			o = r.ERR_MULTIPLE_CALLBACK,
			s = r.ERR_TRANSFORM_ALREADY_TRANSFORMING,
			a = r.ERR_TRANSFORM_WITH_LENGTH_0,
			c = n(9);
		function u(t, e) {
			var n = this._transformState;
			n.transforming = !1;
			var r = n.writecb;
			if (null === r) return this.emit("error", new o());
			(n.writechunk = null), (n.writecb = null), null != e && this.push(e), r(t);
			var i = this._readableState;
			(i.reading = !1), (i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark);
		}
		function h(t) {
			if (!(this instanceof h)) return new h(t);
			c.call(this, t),
				(this._transformState = {
					afterTransform: u.bind(this),
					needTransform: !1,
					transforming: !1,
					writecb: null,
					writechunk: null,
					writeencoding: null,
				}),
				(this._readableState.needReadable = !0),
				(this._readableState.sync = !1),
				t &&
					("function" == typeof t.transform && (this._transform = t.transform),
					"function" == typeof t.flush && (this._flush = t.flush)),
				this.on("prefinish", f);
		}
		function f() {
			var t = this;
			"function" != typeof this._flush || this._readableState.destroyed
				? l(this, null, null)
				: this._flush(function(e, n) {
						l(t, e, n);
				  });
		}
		function l(t, e, n) {
			if (e) return t.emit("error", e);
			if ((null != n && t.push(n), t._writableState.length)) throw new a();
			if (t._transformState.transforming) throw new s();
			return t.push(null);
		}
		n(10)(h, c),
			(h.prototype.push = function(t, e) {
				return (this._transformState.needTransform = !1), c.prototype.push.call(this, t, e);
			}),
			(h.prototype._transform = function(t, e, n) {
				n(new i("_transform()"));
			}),
			(h.prototype._write = function(t, e, n) {
				var r = this._transformState;
				if (((r.writecb = n), (r.writechunk = t), (r.writeencoding = e), !r.transforming)) {
					var i = this._readableState;
					(r.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark);
				}
			}),
			(h.prototype._read = function(t) {
				var e = this._transformState;
				null === e.writechunk || e.transforming
					? (e.needTransform = !0)
					: ((e.transforming = !0), this._transform(e.writechunk, e.writeencoding, e.afterTransform));
			}),
			(h.prototype._destroy = function(t, e) {
				c.prototype._destroy.call(this, t, function(t) {
					e(t);
				});
			});
	},
	function(t, e, n) {
		var r = n(42),
			i = n(13),
			o = n(21),
			s = n(1)("socket.io-client");
		t.exports = e = c;
		var a = (e.managers = {});
		function c(t, e) {
			"object" == typeof t && ((e = t), (t = void 0)), (e = e || {});
			var n,
				i = r(t),
				c = i.source,
				u = i.id,
				h = i.path,
				f = a[u] && h in a[u].nsps;
			return (
				e.forceNew || e["force new connection"] || !1 === e.multiplex || f
					? (s("ignoring socket cache for %s", c), (n = o(c, e)))
					: (a[u] || (s("new io instance for %s", c), (a[u] = o(c, e))), (n = a[u])),
				i.query && !e.query && (e.query = i.query),
				n.socket(i.path, e)
			);
		}
		(e.protocol = i.protocol), (e.connect = c), (e.Manager = n(21)), (e.Socket = n(27));
	},
	function(t, e, n) {
		"use strict";
		n.r(e);
		var r = n(0),
			i = n.n(r),
			o = n(4),
			s = n.n(o),
			a = n(39),
			c = n.n(a),
			u = n(18);
		s()(
			i.a.mark(function t() {
				var e, n, r, o, a, h, f, l, p, d, y, g, m, v, b, w, _, C, E, R, S, k, A, T, x, P, O, N, B, L, M;
				return i.a.wrap(function(t) {
					for (;;)
						switch ((t.prev = t.next)) {
							case 0:
								"gzp_canary",
									(e = ""),
									(n = {}),
									(r = 0),
									console.log("🎤 VOICE SDK LOADED 🎤"),
									setInterval(function() {
										console.log(n);
									}, 5e3),
									(function(t) {
										(t.CREATE_PEER = "onPeerCreate"),
											(t.DESTROY_PEER = "onPeerDestroy"),
											(t.CONNECTION_STATUS_CHANGED = "onConnectionStatusChange"),
											(t.MIC_STATUS_CHANGED = "onMicStatusChange");
									})(a || (a = {})),
									(h = function(t, e) {
										console.log(t);
										var n = new CustomEvent(t, { detail: e });
										window.dispatchEvent(n);
									}),
									(f = new Event("muteSelfMic")),
									(l = new Event("unmuteSelfMic")),
									(p = (function() {
										var t = s()(
											i.a.mark(function t() {
												var e;
												return i.a.wrap(
													function(t) {
														for (;;)
															switch ((t.prev = t.next)) {
																case 0:
																	return (t.prev = 0), (t.next = 3), navigator.mediaDevices.getUserMedia({ audio: !0 });
																case 3:
																	return (e = t.sent), t.abrupt("return", e);
																case 7:
																	return (
																		(t.prev = 7),
																		(t.t0 = t.catch(0)),
																		console.log("error in getting user media", t.t0),
																		t.abrupt("return", null)
																	);
																case 11:
																case "end":
																	return t.stop();
															}
													},
													t,
													null,
													[[0, 7]],
												);
											}),
										);
										return function() {
											return t.apply(this, arguments);
										};
									})()),
									(d = function(t, e) {
										var n = document.getElementById("audioPlayer-".concat(t));
										if (!n) {
											var r = document.createElement("AUDIO");
											(r.style.display = "none"),
												(r.id = "audioPlayer-".concat(t)),
												r.setAttribute("autoplay", "true"),
												r.setAttribute("controls", "true"),
												document.body.appendChild(r),
												(r.srcObject = e),
												(n = r);
										}
										return n;
									}),
									(y = (function() {
										var t = s()(
											i.a.mark(function t(n, r, o, s, c) {
												var f;
												return i.a.wrap(function(t) {
													for (;;)
														switch ((t.prev = t.next)) {
															case 0:
																return (
																	(f = new u({ initiator: "init" == n, trickle: !1, stream: r })),
																	h(a.CREATE_PEER, { name: o.name }),
																	c && f.signal(c),
																	f.on("signal", function(t) {
																		"answer" === t.type
																			? s.emit("sendingAnswer", { name: e, answer: t, id: o.id })
																			: "offer" === t.type
																			? s.emit("peerFetched", { name: e, offer: t, id: o.id })
																			: t.candidate && s.emit("sendIceCandidate", { name: e, candidate: t, id: o.id });
																	}),
																	f.on("stream", function(t) {
																		d(o.name, t);
																	}),
																	t.abrupt("return", f)
																);
															case 6:
															case "end":
																return t.stop();
														}
												}, t);
											}),
										);
										return function(e, n, r, i, o) {
											return t.apply(this, arguments);
										};
									})()),
									(g = function(t) {
										t.emit("fetchPeers", { name: e });
									}),
									(m = (function() {
										var t = s()(
											i.a.mark(function t(e, o, s) {
												return i.a.wrap(function(t) {
													for (;;)
														switch ((t.prev = t.next)) {
															case 0:
																return (t.next = 2), y("init", o, s, e);
															case 2:
																(t.t0 = t.sent),
																	(t.t1 = s.name),
																	(n[s.name] = { conn: t.t0, micStatus: !0, name: t.t1 }),
																	n[s.name].conn.on("connect", function() {
																		h(a.CONNECTION_STATUS_CHANGED, { name: s.name, connectionStatus: "connected" }),
																			e.emit("callConnected"),
																			r++,
																			S();
																	});
															case 6:
															case "end":
																return t.stop();
														}
												}, t);
											}),
										);
										return function(e, n, r) {
											return t.apply(this, arguments);
										};
									})()),
									(v = function(t) {
										if (n[t.name]) n[t.name].conn.signal(t.candidate);
										else
											var e = setInterval(function() {
												n[t.name] && (n[t.name].conn.signal(t.candidate), clearInterval(e));
											}, 1e3);
									}),
									(b = (function() {
										var t = s()(
											i.a.mark(function t(e, o, s) {
												return i.a.wrap(function(t) {
													for (;;)
														switch ((t.prev = t.next)) {
															case 0:
																return (t.next = 2), y("", o, s, e, s.offer);
															case 2:
																(t.t0 = t.sent),
																	(t.t1 = s.name),
																	(n[s.name] = { conn: t.t0, micStatus: !0, name: t.t1 }),
																	n[s.name].conn.on("connect", function() {
																		h(a.CONNECTION_STATUS_CHANGED, { name: s.name, connectionStatus: "connected" }),
																			e.emit("callConnected"),
																			r++,
																			S();
																	});
															case 6:
															case "end":
																return t.stop();
														}
												}, t);
											}),
										);
										return function(e, n, r) {
											return t.apply(this, arguments);
										};
									})()),
									(w = function(t) {
										n[t.name].conn.signal(t.answer);
									}),
									(_ = function(t) {
										n[t.name] &&
											(h(a.DESTROY_PEER, { name: t.name }),
											R(t.name),
											n[t.name].conn.destroy(),
											delete n[t.name],
											(r -= 1),
											S());
									}),
									(C = function(t, e) {
										e.getTracks().forEach(function(e) {
											return (e.enabled = !!t);
										});
									}),
									(E = (function() {
										var t = s()(
											i.a.mark(function t(n, r) {
												var s;
												return i.a.wrap(function(t) {
													for (;;)
														switch ((t.prev = t.next)) {
															case 0:
																return (t.next = 2), p();
															case 2:
																if (((s = t.sent), (e = r), !o || !o.connected)) {
																	t.next = 7;
																	break;
																}
																return console.warn("Leave session before joining another"), t.abrupt("return", !1);
															case 7:
																if (
																	((o = c()("https://echo-land.herokuapp.com", { query: { key: n, name: e } })),
																	window.addEventListener(
																		"muteSelfMic",
																		function() {
																			s && C(0, s);
																		},
																		!1,
																	),
																	window.addEventListener(
																		"unmuteSelfMic",
																		function() {
																			C(1, s);
																		},
																		!1,
																	),
																	!s)
																) {
																	t.next = 18;
																	break;
																}
																return (
																	o.on("ready", function() {
																		g(o);
																	}),
																	o.on("onFetchingPeer", function(t) {
																		m(o, s, t);
																	}),
																	o.on("peerDisconnect", function(t) {
																		_(t);
																	}),
																	o.on("receiveIceCandidate", function(t) {
																		v(t);
																	}),
																	o.on("onPeerFetched", function(t) {
																		b(o, s, t);
																	}),
																	o.on("receivingAnswer", function(t) {
																		w(t);
																	}),
																	t.abrupt("return", !0)
																);
															case 18:
															case "end":
																return t.stop();
														}
												}, t);
											}),
										);
										return function(e, n) {
											return t.apply(this, arguments);
										};
									})()),
									(R = function(t) {
										var e = document.getElementById("audioPlayer-".concat(t));
										e && e.remove();
									}),
									(S = function() {
										window.postMessage({ type: "gzp_canary", callStatus: M() }, "/");
									}),
									(k = function() {
										if (o) {
											for (var t in (o.emit("leavingRoom", { name: e }),
											o && (o.removeAllListeners(), o.disconnect()),
											(e = ""),
											n))
												R(t), n[t].conn.destroy();
											(n = {}), (r = 0), S();
										}
									}),
									(A = function() {
										window.dispatchEvent(f);
									}),
									(T = function() {
										window.dispatchEvent(l);
									}),
									(x = function(t) {
										for (var e in n) {
											var r = document.getElementById("audioPlayer-".concat(e));
											r && (t ? r.play() : r.pause());
										}
									}),
									(P = function(t, e) {
										var n = document.getElementById("audioPlayer-".concat(t));
										n && (e ? n.play() : n.pause());
									}),
									(O = function() {
										x(0);
									}),
									(N = function() {
										x(1);
									}),
									(B = function(t) {
										P(t, 0);
									}),
									(L = function(t) {
										P(t, 1);
									}),
									(M = function() {
										return !(r <= 0) || ((r = 0), !1);
									}),
									S(),
									(window.canary = {
										joinCall: E,
										leaveCall: k,
										mute: B,
										unmute: L,
										muteSelf: A,
										unmuteSelf: T,
										speakerOff: O,
										speakerOn: N,
										isWebrtcSupported: !!u.WEBRTC_SUPPORT,
										isCallConnected: M,
									});
							case 35:
							case "end":
								return t.stop();
						}
				}, t);
			}),
		)();
	},
	function(t, e, n) {
		var r = (function(t) {
			"use strict";
			var e = Object.prototype,
				n = e.hasOwnProperty,
				r = "function" == typeof Symbol ? Symbol : {},
				i = r.iterator || "@@iterator",
				o = r.asyncIterator || "@@asyncIterator",
				s = r.toStringTag || "@@toStringTag";
			function a(t, e, n, r) {
				var i = e && e.prototype instanceof h ? e : h,
					o = Object.create(i.prototype),
					s = new C(r || []);
				return (
					(o._invoke = (function(t, e, n) {
						var r = "suspendedStart";
						return function(i, o) {
							if ("executing" === r) throw new Error("Generator is already running");
							if ("completed" === r) {
								if ("throw" === i) throw o;
								return R();
							}
							for (n.method = i, n.arg = o; ; ) {
								var s = n.delegate;
								if (s) {
									var a = b(s, n);
									if (a) {
										if (a === u) continue;
										return a;
									}
								}
								if ("next" === n.method) n.sent = n._sent = n.arg;
								else if ("throw" === n.method) {
									if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
									n.dispatchException(n.arg);
								} else "return" === n.method && n.abrupt("return", n.arg);
								r = "executing";
								var h = c(t, e, n);
								if ("normal" === h.type) {
									if (((r = n.done ? "completed" : "suspendedYield"), h.arg === u)) continue;
									return { value: h.arg, done: n.done };
								}
								"throw" === h.type && ((r = "completed"), (n.method = "throw"), (n.arg = h.arg));
							}
						};
					})(t, n, s)),
					o
				);
			}
			function c(t, e, n) {
				try {
					return { type: "normal", arg: t.call(e, n) };
				} catch (t) {
					return { type: "throw", arg: t };
				}
			}
			t.wrap = a;
			var u = {};
			function h() {}
			function f() {}
			function l() {}
			var p = {};
			p[i] = function() {
				return this;
			};
			var d = Object.getPrototypeOf,
				y = d && d(d(E([])));
			y && y !== e && n.call(y, i) && (p = y);
			var g = (l.prototype = h.prototype = Object.create(p));
			function m(t) {
				["next", "throw", "return"].forEach(function(e) {
					t[e] = function(t) {
						return this._invoke(e, t);
					};
				});
			}
			function v(t, e) {
				var r;
				this._invoke = function(i, o) {
					function s() {
						return new e(function(r, s) {
							!(function r(i, o, s, a) {
								var u = c(t[i], t, o);
								if ("throw" !== u.type) {
									var h = u.arg,
										f = h.value;
									return f && "object" == typeof f && n.call(f, "__await")
										? e.resolve(f.__await).then(
												function(t) {
													r("next", t, s, a);
												},
												function(t) {
													r("throw", t, s, a);
												},
										  )
										: e.resolve(f).then(
												function(t) {
													(h.value = t), s(h);
												},
												function(t) {
													return r("throw", t, s, a);
												},
										  );
								}
								a(u.arg);
							})(i, o, r, s);
						});
					}
					return (r = r ? r.then(s, s) : s());
				};
			}
			function b(t, e) {
				var n = t.iterator[e.method];
				if (void 0 === n) {
					if (((e.delegate = null), "throw" === e.method)) {
						if (t.iterator.return && ((e.method = "return"), (e.arg = void 0), b(t, e), "throw" === e.method)) return u;
						(e.method = "throw"), (e.arg = new TypeError("The iterator does not provide a 'throw' method"));
					}
					return u;
				}
				var r = c(n, t.iterator, e.arg);
				if ("throw" === r.type) return (e.method = "throw"), (e.arg = r.arg), (e.delegate = null), u;
				var i = r.arg;
				return i
					? i.done
						? ((e[t.resultName] = i.value),
						  (e.next = t.nextLoc),
						  "return" !== e.method && ((e.method = "next"), (e.arg = void 0)),
						  (e.delegate = null),
						  u)
						: i
					: ((e.method = "throw"), (e.arg = new TypeError("iterator result is not an object")), (e.delegate = null), u);
			}
			function w(t) {
				var e = { tryLoc: t[0] };
				1 in t && (e.catchLoc = t[1]), 2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])), this.tryEntries.push(e);
			}
			function _(t) {
				var e = t.completion || {};
				(e.type = "normal"), delete e.arg, (t.completion = e);
			}
			function C(t) {
				(this.tryEntries = [{ tryLoc: "root" }]), t.forEach(w, this), this.reset(!0);
			}
			function E(t) {
				if (t) {
					var e = t[i];
					if (e) return e.call(t);
					if ("function" == typeof t.next) return t;
					if (!isNaN(t.length)) {
						var r = -1,
							o = function e() {
								for (; ++r < t.length; ) if (n.call(t, r)) return (e.value = t[r]), (e.done = !1), e;
								return (e.value = void 0), (e.done = !0), e;
							};
						return (o.next = o);
					}
				}
				return { next: R };
			}
			function R() {
				return { value: void 0, done: !0 };
			}
			return (
				(f.prototype = g.constructor = l),
				(l.constructor = f),
				(l[s] = f.displayName = "GeneratorFunction"),
				(t.isGeneratorFunction = function(t) {
					var e = "function" == typeof t && t.constructor;
					return !!e && (e === f || "GeneratorFunction" === (e.displayName || e.name));
				}),
				(t.mark = function(t) {
					return (
						Object.setPrototypeOf
							? Object.setPrototypeOf(t, l)
							: ((t.__proto__ = l), s in t || (t[s] = "GeneratorFunction")),
						(t.prototype = Object.create(g)),
						t
					);
				}),
				(t.awrap = function(t) {
					return { __await: t };
				}),
				m(v.prototype),
				(v.prototype[o] = function() {
					return this;
				}),
				(t.AsyncIterator = v),
				(t.async = function(e, n, r, i, o) {
					void 0 === o && (o = Promise);
					var s = new v(a(e, n, r, i), o);
					return t.isGeneratorFunction(n)
						? s
						: s.next().then(function(t) {
								return t.done ? t.value : s.next();
						  });
				}),
				m(g),
				(g[s] = "Generator"),
				(g[i] = function() {
					return this;
				}),
				(g.toString = function() {
					return "[object Generator]";
				}),
				(t.keys = function(t) {
					var e = [];
					for (var n in t) e.push(n);
					return (
						e.reverse(),
						function n() {
							for (; e.length; ) {
								var r = e.pop();
								if (r in t) return (n.value = r), (n.done = !1), n;
							}
							return (n.done = !0), n;
						}
					);
				}),
				(t.values = E),
				(C.prototype = {
					constructor: C,
					reset: function(t) {
						if (
							((this.prev = 0),
							(this.next = 0),
							(this.sent = this._sent = void 0),
							(this.done = !1),
							(this.delegate = null),
							(this.method = "next"),
							(this.arg = void 0),
							this.tryEntries.forEach(_),
							!t)
						)
							for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0);
					},
					stop: function() {
						this.done = !0;
						var t = this.tryEntries[0].completion;
						if ("throw" === t.type) throw t.arg;
						return this.rval;
					},
					dispatchException: function(t) {
						if (this.done) throw t;
						var e = this;
						function r(n, r) {
							return (s.type = "throw"), (s.arg = t), (e.next = n), r && ((e.method = "next"), (e.arg = void 0)), !!r;
						}
						for (var i = this.tryEntries.length - 1; i >= 0; --i) {
							var o = this.tryEntries[i],
								s = o.completion;
							if ("root" === o.tryLoc) return r("end");
							if (o.tryLoc <= this.prev) {
								var a = n.call(o, "catchLoc"),
									c = n.call(o, "finallyLoc");
								if (a && c) {
									if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
									if (this.prev < o.finallyLoc) return r(o.finallyLoc);
								} else if (a) {
									if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
								} else {
									if (!c) throw new Error("try statement without catch or finally");
									if (this.prev < o.finallyLoc) return r(o.finallyLoc);
								}
							}
						}
					},
					abrupt: function(t, e) {
						for (var r = this.tryEntries.length - 1; r >= 0; --r) {
							var i = this.tryEntries[r];
							if (i.tryLoc <= this.prev && n.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
								var o = i;
								break;
							}
						}
						o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
						var s = o ? o.completion : {};
						return (
							(s.type = t), (s.arg = e), o ? ((this.method = "next"), (this.next = o.finallyLoc), u) : this.complete(s)
						);
					},
					complete: function(t, e) {
						if ("throw" === t.type) throw t.arg;
						return (
							"break" === t.type || "continue" === t.type
								? (this.next = t.arg)
								: "return" === t.type
								? ((this.rval = this.arg = t.arg), (this.method = "return"), (this.next = "end"))
								: "normal" === t.type && e && (this.next = e),
							u
						);
					},
					finish: function(t) {
						for (var e = this.tryEntries.length - 1; e >= 0; --e) {
							var n = this.tryEntries[e];
							if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), _(n), u;
						}
					},
					catch: function(t) {
						for (var e = this.tryEntries.length - 1; e >= 0; --e) {
							var n = this.tryEntries[e];
							if (n.tryLoc === t) {
								var r = n.completion;
								if ("throw" === r.type) {
									var i = r.arg;
									_(n);
								}
								return i;
							}
						}
						throw new Error("illegal catch attempt");
					},
					delegateYield: function(t, e, n) {
						return (
							(this.delegate = { iterator: E(t), resultName: e, nextLoc: n }),
							"next" === this.method && (this.arg = void 0),
							u
						);
					},
				}),
				t
			);
		})(t.exports);
		try {
			regeneratorRuntime = r;
		} catch (t) {
			Function("r", "regeneratorRuntime = r")(r);
		}
	},
	function(t, e, n) {
		var r = n(19),
			i = n(1)("socket.io-client:url");
		t.exports = function(t, e) {
			var n = t;
			(e = e || ("undefined" != typeof location && location)), null == t && (t = e.protocol + "//" + e.host);
			"string" == typeof t &&
				("/" === t.charAt(0) && (t = "/" === t.charAt(1) ? e.protocol + t : e.host + t),
				/^(https?|wss?):\/\//.test(t) ||
					(i("protocol-less url %s", t), (t = void 0 !== e ? e.protocol + "//" + t : "https://" + t)),
				i("parse %s", t),
				(n = r(t)));
			n.port ||
				(/^(http|ws)$/.test(n.protocol) ? (n.port = "80") : /^(http|ws)s$/.test(n.protocol) && (n.port = "443"));
			n.path = n.path || "/";
			var o = -1 !== n.host.indexOf(":") ? "[" + n.host + "]" : n.host;
			return (
				(n.id = n.protocol + "://" + o + ":" + n.port),
				(n.href = n.protocol + "://" + o + (e && e.port === n.port ? "" : ":" + n.port)),
				n
			);
		};
	},
	function(t, e, n) {
		t.exports = function(t) {
			function e(t) {
				let e = 0;
				for (let n = 0; n < t.length; n++) (e = (e << 5) - e + t.charCodeAt(n)), (e |= 0);
				return r.colors[Math.abs(e) % r.colors.length];
			}
			function r(t) {
				let n;
				function s(...t) {
					if (!s.enabled) return;
					const e = s,
						i = Number(new Date()),
						o = i - (n || i);
					(e.diff = o),
						(e.prev = n),
						(e.curr = i),
						(n = i),
						(t[0] = r.coerce(t[0])),
						"string" != typeof t[0] && t.unshift("%O");
					let a = 0;
					(t[0] = t[0].replace(/%([a-zA-Z%])/g, (n, i) => {
						if ("%%" === n) return n;
						a++;
						const o = r.formatters[i];
						if ("function" == typeof o) {
							const r = t[a];
							(n = o.call(e, r)), t.splice(a, 1), a--;
						}
						return n;
					})),
						r.formatArgs.call(e, t),
						(e.log || r.log).apply(e, t);
				}
				return (
					(s.namespace = t),
					(s.enabled = r.enabled(t)),
					(s.useColors = r.useColors()),
					(s.color = e(t)),
					(s.destroy = i),
					(s.extend = o),
					"function" == typeof r.init && r.init(s),
					r.instances.push(s),
					s
				);
			}
			function i() {
				const t = r.instances.indexOf(this);
				return -1 !== t && (r.instances.splice(t, 1), !0);
			}
			function o(t, e) {
				const n = r(this.namespace + (void 0 === e ? ":" : e) + t);
				return (n.log = this.log), n;
			}
			function s(t) {
				return t
					.toString()
					.substring(2, t.toString().length - 2)
					.replace(/\.\*\?$/, "*");
			}
			return (
				(r.debug = r),
				(r.default = r),
				(r.coerce = function(t) {
					if (t instanceof Error) return t.stack || t.message;
					return t;
				}),
				(r.disable = function() {
					const t = [...r.names.map(s), ...r.skips.map(s).map(t => "-" + t)].join(",");
					return r.enable(""), t;
				}),
				(r.enable = function(t) {
					let e;
					r.save(t), (r.names = []), (r.skips = []);
					const n = ("string" == typeof t ? t : "").split(/[\s,]+/),
						i = n.length;
					for (e = 0; e < i; e++)
						n[e] &&
							("-" === (t = n[e].replace(/\*/g, ".*?"))[0]
								? r.skips.push(new RegExp("^" + t.substr(1) + "$"))
								: r.names.push(new RegExp("^" + t + "$")));
					for (e = 0; e < r.instances.length; e++) {
						const t = r.instances[e];
						t.enabled = r.enabled(t.namespace);
					}
				}),
				(r.enabled = function(t) {
					if ("*" === t[t.length - 1]) return !0;
					let e, n;
					for (e = 0, n = r.skips.length; e < n; e++) if (r.skips[e].test(t)) return !1;
					for (e = 0, n = r.names.length; e < n; e++) if (r.names[e].test(t)) return !0;
					return !1;
				}),
				(r.humanize = n(44)),
				Object.keys(t).forEach(e => {
					r[e] = t[e];
				}),
				(r.instances = []),
				(r.names = []),
				(r.skips = []),
				(r.formatters = {}),
				(r.selectColor = e),
				r.enable(r.load()),
				r
			);
		};
	},
	function(t, e) {
		var n = 1e3,
			r = 6e4,
			i = 60 * r,
			o = 24 * i;
		function s(t, e, n, r) {
			var i = e >= 1.5 * n;
			return Math.round(t / n) + " " + r + (i ? "s" : "");
		}
		t.exports = function(t, e) {
			e = e || {};
			var a = typeof t;
			if ("string" === a && t.length > 0)
				return (function(t) {
					if ((t = String(t)).length > 100) return;
					var e = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
						t,
					);
					if (!e) return;
					var s = parseFloat(e[1]);
					switch ((e[2] || "ms").toLowerCase()) {
						case "years":
						case "year":
						case "yrs":
						case "yr":
						case "y":
							return 315576e5 * s;
						case "weeks":
						case "week":
						case "w":
							return 6048e5 * s;
						case "days":
						case "day":
						case "d":
							return s * o;
						case "hours":
						case "hour":
						case "hrs":
						case "hr":
						case "h":
							return s * i;
						case "minutes":
						case "minute":
						case "mins":
						case "min":
						case "m":
							return s * r;
						case "seconds":
						case "second":
						case "secs":
						case "sec":
						case "s":
							return s * n;
						case "milliseconds":
						case "millisecond":
						case "msecs":
						case "msec":
						case "ms":
							return s;
						default:
							return;
					}
				})(t);
			if ("number" === a && isFinite(t))
				return e.long
					? (function(t) {
							var e = Math.abs(t);
							if (e >= o) return s(t, e, o, "day");
							if (e >= i) return s(t, e, i, "hour");
							if (e >= r) return s(t, e, r, "minute");
							if (e >= n) return s(t, e, n, "second");
							return t + " ms";
					  })(t)
					: (function(t) {
							var e = Math.abs(t);
							if (e >= o) return Math.round(t / o) + "d";
							if (e >= i) return Math.round(t / i) + "h";
							if (e >= r) return Math.round(t / r) + "m";
							if (e >= n) return Math.round(t / n) + "s";
							return t + "ms";
					  })(t);
			throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(t));
		};
	},
	function(t, e, n) {
		(function(r) {
			function i() {
				var t;
				try {
					t = e.storage.debug;
				} catch (t) {}
				return !t && void 0 !== r && "env" in r && (t = r.env.DEBUG), t;
			}
			((e = t.exports = n(46)).log = function() {
				return (
					"object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
				);
			}),
				(e.formatArgs = function(t) {
					var n = this.useColors;
					if (
						((t[0] =
							(n ? "%c" : "") +
							this.namespace +
							(n ? " %c" : " ") +
							t[0] +
							(n ? "%c " : " ") +
							"+" +
							e.humanize(this.diff)),
						!n)
					)
						return;
					var r = "color: " + this.color;
					t.splice(1, 0, r, "color: inherit");
					var i = 0,
						o = 0;
					t[0].replace(/%[a-zA-Z%]/g, function(t) {
						"%%" !== t && (i++, "%c" === t && (o = i));
					}),
						t.splice(o, 0, r);
				}),
				(e.save = function(t) {
					try {
						null == t ? e.storage.removeItem("debug") : (e.storage.debug = t);
					} catch (t) {}
				}),
				(e.load = i),
				(e.useColors = function() {
					if ("undefined" != typeof window && window.process && "renderer" === window.process.type) return !0;
					if (
						"undefined" != typeof navigator &&
						navigator.userAgent &&
						navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
					)
						return !1;
					return (
						("undefined" != typeof document &&
							document.documentElement &&
							document.documentElement.style &&
							document.documentElement.style.WebkitAppearance) ||
						("undefined" != typeof window &&
							window.console &&
							(window.console.firebug || (window.console.exception && window.console.table))) ||
						("undefined" != typeof navigator &&
							navigator.userAgent &&
							navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
							parseInt(RegExp.$1, 10) >= 31) ||
						("undefined" != typeof navigator &&
							navigator.userAgent &&
							navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
					);
				}),
				(e.storage =
					"undefined" != typeof chrome && void 0 !== chrome.storage
						? chrome.storage.local
						: (function() {
								try {
									return window.localStorage;
								} catch (t) {}
						  })()),
				(e.colors = [
					"#0000CC",
					"#0000FF",
					"#0033CC",
					"#0033FF",
					"#0066CC",
					"#0066FF",
					"#0099CC",
					"#0099FF",
					"#00CC00",
					"#00CC33",
					"#00CC66",
					"#00CC99",
					"#00CCCC",
					"#00CCFF",
					"#3300CC",
					"#3300FF",
					"#3333CC",
					"#3333FF",
					"#3366CC",
					"#3366FF",
					"#3399CC",
					"#3399FF",
					"#33CC00",
					"#33CC33",
					"#33CC66",
					"#33CC99",
					"#33CCCC",
					"#33CCFF",
					"#6600CC",
					"#6600FF",
					"#6633CC",
					"#6633FF",
					"#66CC00",
					"#66CC33",
					"#9900CC",
					"#9900FF",
					"#9933CC",
					"#9933FF",
					"#99CC00",
					"#99CC33",
					"#CC0000",
					"#CC0033",
					"#CC0066",
					"#CC0099",
					"#CC00CC",
					"#CC00FF",
					"#CC3300",
					"#CC3333",
					"#CC3366",
					"#CC3399",
					"#CC33CC",
					"#CC33FF",
					"#CC6600",
					"#CC6633",
					"#CC9900",
					"#CC9933",
					"#CCCC00",
					"#CCCC33",
					"#FF0000",
					"#FF0033",
					"#FF0066",
					"#FF0099",
					"#FF00CC",
					"#FF00FF",
					"#FF3300",
					"#FF3333",
					"#FF3366",
					"#FF3399",
					"#FF33CC",
					"#FF33FF",
					"#FF6600",
					"#FF6633",
					"#FF9900",
					"#FF9933",
					"#FFCC00",
					"#FFCC33",
				]),
				(e.formatters.j = function(t) {
					try {
						return JSON.stringify(t);
					} catch (t) {
						return "[UnexpectedJSONParseError]: " + t.message;
					}
				}),
				e.enable(i());
		}.call(this, n(2)));
	},
	function(t, e, n) {
		function r(t) {
			var n;
			function r() {
				if (r.enabled) {
					var t = r,
						i = +new Date(),
						o = i - (n || i);
					(t.diff = o), (t.prev = n), (t.curr = i), (n = i);
					for (var s = new Array(arguments.length), a = 0; a < s.length; a++) s[a] = arguments[a];
					(s[0] = e.coerce(s[0])), "string" != typeof s[0] && s.unshift("%O");
					var c = 0;
					(s[0] = s[0].replace(/%([a-zA-Z%])/g, function(n, r) {
						if ("%%" === n) return n;
						c++;
						var i = e.formatters[r];
						if ("function" == typeof i) {
							var o = s[c];
							(n = i.call(t, o)), s.splice(c, 1), c--;
						}
						return n;
					})),
						e.formatArgs.call(t, s);
					var u = r.log || e.log || console.log.bind(console);
					u.apply(t, s);
				}
			}
			return (
				(r.namespace = t),
				(r.enabled = e.enabled(t)),
				(r.useColors = e.useColors()),
				(r.color = (function(t) {
					var n,
						r = 0;
					for (n in t) (r = (r << 5) - r + t.charCodeAt(n)), (r |= 0);
					return e.colors[Math.abs(r) % e.colors.length];
				})(t)),
				(r.destroy = i),
				"function" == typeof e.init && e.init(r),
				e.instances.push(r),
				r
			);
		}
		function i() {
			var t = e.instances.indexOf(this);
			return -1 !== t && (e.instances.splice(t, 1), !0);
		}
		((e = t.exports = r.debug = r.default = r).coerce = function(t) {
			return t instanceof Error ? t.stack || t.message : t;
		}),
			(e.disable = function() {
				e.enable("");
			}),
			(e.enable = function(t) {
				var n;
				e.save(t), (e.names = []), (e.skips = []);
				var r = ("string" == typeof t ? t : "").split(/[\s,]+/),
					i = r.length;
				for (n = 0; n < i; n++)
					r[n] &&
						("-" === (t = r[n].replace(/\*/g, ".*?"))[0]
							? e.skips.push(new RegExp("^" + t.substr(1) + "$"))
							: e.names.push(new RegExp("^" + t + "$")));
				for (n = 0; n < e.instances.length; n++) {
					var o = e.instances[n];
					o.enabled = e.enabled(o.namespace);
				}
			}),
			(e.enabled = function(t) {
				if ("*" === t[t.length - 1]) return !0;
				var n, r;
				for (n = 0, r = e.skips.length; n < r; n++) if (e.skips[n].test(t)) return !1;
				for (n = 0, r = e.names.length; n < r; n++) if (e.names[n].test(t)) return !0;
				return !1;
			}),
			(e.humanize = n(47)),
			(e.instances = []),
			(e.names = []),
			(e.skips = []),
			(e.formatters = {});
	},
	function(t, e) {
		var n = 1e3,
			r = 6e4,
			i = 60 * r,
			o = 24 * i;
		function s(t, e, n) {
			if (!(t < e)) return t < 1.5 * e ? Math.floor(t / e) + " " + n : Math.ceil(t / e) + " " + n + "s";
		}
		t.exports = function(t, e) {
			e = e || {};
			var a,
				c = typeof t;
			if ("string" === c && t.length > 0)
				return (function(t) {
					if ((t = String(t)).length > 100) return;
					var e = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
						t,
					);
					if (!e) return;
					var s = parseFloat(e[1]);
					switch ((e[2] || "ms").toLowerCase()) {
						case "years":
						case "year":
						case "yrs":
						case "yr":
						case "y":
							return 315576e5 * s;
						case "days":
						case "day":
						case "d":
							return s * o;
						case "hours":
						case "hour":
						case "hrs":
						case "hr":
						case "h":
							return s * i;
						case "minutes":
						case "minute":
						case "mins":
						case "min":
						case "m":
							return s * r;
						case "seconds":
						case "second":
						case "secs":
						case "sec":
						case "s":
							return s * n;
						case "milliseconds":
						case "millisecond":
						case "msecs":
						case "msec":
						case "ms":
							return s;
						default:
							return;
					}
				})(t);
			if ("number" === c && !1 === isNaN(t))
				return e.long
					? s((a = t), o, "day") || s(a, i, "hour") || s(a, r, "minute") || s(a, n, "second") || a + " ms"
					: (function(t) {
							if (t >= o) return Math.round(t / o) + "d";
							if (t >= i) return Math.round(t / i) + "h";
							if (t >= r) return Math.round(t / r) + "m";
							if (t >= n) return Math.round(t / n) + "s";
							return t + "ms";
					  })(t);
			throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(t));
		};
	},
	function(t, e, n) {
		var r = n(14),
			i = n(20),
			o = Object.prototype.toString,
			s = "function" == typeof Blob || ("undefined" != typeof Blob && "[object BlobConstructor]" === o.call(Blob)),
			a = "function" == typeof File || ("undefined" != typeof File && "[object FileConstructor]" === o.call(File));
		(e.deconstructPacket = function(t) {
			var e = [],
				n = t.data,
				o = t;
			return (
				(o.data = (function t(e, n) {
					if (!e) return e;
					if (i(e)) {
						var o = { _placeholder: !0, num: n.length };
						return n.push(e), o;
					}
					if (r(e)) {
						for (var s = new Array(e.length), a = 0; a < e.length; a++) s[a] = t(e[a], n);
						return s;
					}
					if ("object" == typeof e && !(e instanceof Date)) {
						s = {};
						for (var c in e) s[c] = t(e[c], n);
						return s;
					}
					return e;
				})(n, e)),
				(o.attachments = e.length),
				{ packet: o, buffers: e }
			);
		}),
			(e.reconstructPacket = function(t, e) {
				return (
					(t.data = (function t(e, n) {
						if (!e) return e;
						if (e && e._placeholder) return n[e.num];
						if (r(e)) for (var i = 0; i < e.length; i++) e[i] = t(e[i], n);
						else if ("object" == typeof e) for (var o in e) e[o] = t(e[o], n);
						return e;
					})(t.data, e)),
					(t.attachments = void 0),
					t
				);
			}),
			(e.removeBlobs = function(t, e) {
				var n = 0,
					o = t;
				!(function t(c, u, h) {
					if (!c) return c;
					if ((s && c instanceof Blob) || (a && c instanceof File)) {
						n++;
						var f = new FileReader();
						(f.onload = function() {
							h ? (h[u] = this.result) : (o = this.result), --n || e(o);
						}),
							f.readAsArrayBuffer(c);
					} else if (r(c)) for (var l = 0; l < c.length; l++) t(c[l], l, c);
					else if ("object" == typeof c && !i(c)) for (var p in c) t(c[p], p, c);
				})(o),
					n || e(o);
			});
	},
	function(t, e, n) {
		"use strict";
		(e.byteLength = function(t) {
			var e = u(t),
				n = e[0],
				r = e[1];
			return (3 * (n + r)) / 4 - r;
		}),
			(e.toByteArray = function(t) {
				var e,
					n,
					r = u(t),
					s = r[0],
					a = r[1],
					c = new o(
						(function(t, e, n) {
							return (3 * (e + n)) / 4 - n;
						})(0, s, a),
					),
					h = 0,
					f = a > 0 ? s - 4 : s;
				for (n = 0; n < f; n += 4)
					(e =
						(i[t.charCodeAt(n)] << 18) |
						(i[t.charCodeAt(n + 1)] << 12) |
						(i[t.charCodeAt(n + 2)] << 6) |
						i[t.charCodeAt(n + 3)]),
						(c[h++] = (e >> 16) & 255),
						(c[h++] = (e >> 8) & 255),
						(c[h++] = 255 & e);
				2 === a && ((e = (i[t.charCodeAt(n)] << 2) | (i[t.charCodeAt(n + 1)] >> 4)), (c[h++] = 255 & e));
				1 === a &&
					((e = (i[t.charCodeAt(n)] << 10) | (i[t.charCodeAt(n + 1)] << 4) | (i[t.charCodeAt(n + 2)] >> 2)),
					(c[h++] = (e >> 8) & 255),
					(c[h++] = 255 & e));
				return c;
			}),
			(e.fromByteArray = function(t) {
				for (var e, n = t.length, i = n % 3, o = [], s = 0, a = n - i; s < a; s += 16383)
					o.push(h(t, s, s + 16383 > a ? a : s + 16383));
				1 === i
					? ((e = t[n - 1]), o.push(r[e >> 2] + r[(e << 4) & 63] + "=="))
					: 2 === i &&
					  ((e = (t[n - 2] << 8) + t[n - 1]), o.push(r[e >> 10] + r[(e >> 4) & 63] + r[(e << 2) & 63] + "="));
				return o.join("");
			});
		for (
			var r = [],
				i = [],
				o = "undefined" != typeof Uint8Array ? Uint8Array : Array,
				s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
				a = 0,
				c = s.length;
			a < c;
			++a
		)
			(r[a] = s[a]), (i[s.charCodeAt(a)] = a);
		function u(t) {
			var e = t.length;
			if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
			var n = t.indexOf("=");
			return -1 === n && (n = e), [n, n === e ? 0 : 4 - (n % 4)];
		}
		function h(t, e, n) {
			for (var i, o, s = [], a = e; a < n; a += 3)
				(i = ((t[a] << 16) & 16711680) + ((t[a + 1] << 8) & 65280) + (255 & t[a + 2])),
					s.push(r[((o = i) >> 18) & 63] + r[(o >> 12) & 63] + r[(o >> 6) & 63] + r[63 & o]);
			return s.join("");
		}
		(i["-".charCodeAt(0)] = 62), (i["_".charCodeAt(0)] = 63);
	},
	function(t, e) {
		(e.read = function(t, e, n, r, i) {
			var o,
				s,
				a = 8 * i - r - 1,
				c = (1 << a) - 1,
				u = c >> 1,
				h = -7,
				f = n ? i - 1 : 0,
				l = n ? -1 : 1,
				p = t[e + f];
			for (f += l, o = p & ((1 << -h) - 1), p >>= -h, h += a; h > 0; o = 256 * o + t[e + f], f += l, h -= 8);
			for (s = o & ((1 << -h) - 1), o >>= -h, h += r; h > 0; s = 256 * s + t[e + f], f += l, h -= 8);
			if (0 === o) o = 1 - u;
			else {
				if (o === c) return s ? NaN : (1 / 0) * (p ? -1 : 1);
				(s += Math.pow(2, r)), (o -= u);
			}
			return (p ? -1 : 1) * s * Math.pow(2, o - r);
		}),
			(e.write = function(t, e, n, r, i, o) {
				var s,
					a,
					c,
					u = 8 * o - i - 1,
					h = (1 << u) - 1,
					f = h >> 1,
					l = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
					p = r ? 0 : o - 1,
					d = r ? 1 : -1,
					y = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
				for (
					e = Math.abs(e),
						isNaN(e) || e === 1 / 0
							? ((a = isNaN(e) ? 1 : 0), (s = h))
							: ((s = Math.floor(Math.log(e) / Math.LN2)),
							  e * (c = Math.pow(2, -s)) < 1 && (s--, (c *= 2)),
							  (e += s + f >= 1 ? l / c : l * Math.pow(2, 1 - f)) * c >= 2 && (s++, (c /= 2)),
							  s + f >= h
									? ((a = 0), (s = h))
									: s + f >= 1
									? ((a = (e * c - 1) * Math.pow(2, i)), (s += f))
									: ((a = e * Math.pow(2, f - 1) * Math.pow(2, i)), (s = 0)));
					i >= 8;
					t[n + p] = 255 & a, p += d, a /= 256, i -= 8
				);
				for (s = (s << i) | a, u += i; u > 0; t[n + p] = 255 & s, p += d, s /= 256, u -= 8);
				t[n + p - d] |= 128 * y;
			});
	},
	function(t, e) {
		var n = {}.toString;
		t.exports =
			Array.isArray ||
			function(t) {
				return "[object Array]" == n.call(t);
			};
	},
	function(t, e, n) {
		(t.exports = n(53)), (t.exports.parser = n(7));
	},
	function(t, e, n) {
		var r = n(22),
			i = n(5),
			o = n(1)("engine.io-client:socket"),
			s = n(26),
			a = n(7),
			c = n(19),
			u = n(11);
		function h(t, e) {
			if (!(this instanceof h)) return new h(t, e);
			(e = e || {}),
				t && "object" == typeof t && ((e = t), (t = null)),
				t
					? ((t = c(t)),
					  (e.hostname = t.host),
					  (e.secure = "https" === t.protocol || "wss" === t.protocol),
					  (e.port = t.port),
					  t.query && (e.query = t.query))
					: e.host && (e.hostname = c(e.host).host),
				(this.secure = null != e.secure ? e.secure : "undefined" != typeof location && "https:" === location.protocol),
				e.hostname && !e.port && (e.port = this.secure ? "443" : "80"),
				(this.agent = e.agent || !1),
				(this.hostname = e.hostname || ("undefined" != typeof location ? location.hostname : "localhost")),
				(this.port =
					e.port || ("undefined" != typeof location && location.port ? location.port : this.secure ? 443 : 80)),
				(this.query = e.query || {}),
				"string" == typeof this.query && (this.query = u.decode(this.query)),
				(this.upgrade = !1 !== e.upgrade),
				(this.path = (e.path || "/engine.io").replace(/\/$/, "") + "/"),
				(this.forceJSONP = !!e.forceJSONP),
				(this.jsonp = !1 !== e.jsonp),
				(this.forceBase64 = !!e.forceBase64),
				(this.enablesXDR = !!e.enablesXDR),
				(this.withCredentials = !1 !== e.withCredentials),
				(this.timestampParam = e.timestampParam || "t"),
				(this.timestampRequests = e.timestampRequests),
				(this.transports = e.transports || ["polling", "websocket"]),
				(this.transportOptions = e.transportOptions || {}),
				(this.readyState = ""),
				(this.writeBuffer = []),
				(this.prevBufferLen = 0),
				(this.policyPort = e.policyPort || 843),
				(this.rememberUpgrade = e.rememberUpgrade || !1),
				(this.binaryType = null),
				(this.onlyBinaryUpgrades = e.onlyBinaryUpgrades),
				(this.perMessageDeflate = !1 !== e.perMessageDeflate && (e.perMessageDeflate || {})),
				!0 === this.perMessageDeflate && (this.perMessageDeflate = {}),
				this.perMessageDeflate && null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024),
				(this.pfx = e.pfx || null),
				(this.key = e.key || null),
				(this.passphrase = e.passphrase || null),
				(this.cert = e.cert || null),
				(this.ca = e.ca || null),
				(this.ciphers = e.ciphers || null),
				(this.rejectUnauthorized = void 0 === e.rejectUnauthorized || e.rejectUnauthorized),
				(this.forceNode = !!e.forceNode),
				(this.isReactNative =
					"undefined" != typeof navigator &&
					"string" == typeof navigator.product &&
					"reactnative" === navigator.product.toLowerCase()),
				("undefined" == typeof self || this.isReactNative) &&
					(e.extraHeaders && Object.keys(e.extraHeaders).length > 0 && (this.extraHeaders = e.extraHeaders),
					e.localAddress && (this.localAddress = e.localAddress)),
				(this.id = null),
				(this.upgrades = null),
				(this.pingInterval = null),
				(this.pingTimeout = null),
				(this.pingIntervalTimer = null),
				(this.pingTimeoutTimer = null),
				this.open();
		}
		(t.exports = h),
			(h.priorWebsocketSuccess = !1),
			i(h.prototype),
			(h.protocol = a.protocol),
			(h.Socket = h),
			(h.Transport = n(16)),
			(h.transports = n(22)),
			(h.parser = n(7)),
			(h.prototype.createTransport = function(t) {
				o('creating transport "%s"', t);
				var e = (function(t) {
					var e = {};
					for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
					return e;
				})(this.query);
				(e.EIO = a.protocol), (e.transport = t);
				var n = this.transportOptions[t] || {};
				return (
					this.id && (e.sid = this.id),
					new r[t]({
						query: e,
						socket: this,
						agent: n.agent || this.agent,
						hostname: n.hostname || this.hostname,
						port: n.port || this.port,
						secure: n.secure || this.secure,
						path: n.path || this.path,
						forceJSONP: n.forceJSONP || this.forceJSONP,
						jsonp: n.jsonp || this.jsonp,
						forceBase64: n.forceBase64 || this.forceBase64,
						enablesXDR: n.enablesXDR || this.enablesXDR,
						withCredentials: n.withCredentials || this.withCredentials,
						timestampRequests: n.timestampRequests || this.timestampRequests,
						timestampParam: n.timestampParam || this.timestampParam,
						policyPort: n.policyPort || this.policyPort,
						pfx: n.pfx || this.pfx,
						key: n.key || this.key,
						passphrase: n.passphrase || this.passphrase,
						cert: n.cert || this.cert,
						ca: n.ca || this.ca,
						ciphers: n.ciphers || this.ciphers,
						rejectUnauthorized: n.rejectUnauthorized || this.rejectUnauthorized,
						perMessageDeflate: n.perMessageDeflate || this.perMessageDeflate,
						extraHeaders: n.extraHeaders || this.extraHeaders,
						forceNode: n.forceNode || this.forceNode,
						localAddress: n.localAddress || this.localAddress,
						requestTimeout: n.requestTimeout || this.requestTimeout,
						protocols: n.protocols || void 0,
						isReactNative: this.isReactNative,
					})
				);
			}),
			(h.prototype.open = function() {
				var t;
				if (this.rememberUpgrade && h.priorWebsocketSuccess && -1 !== this.transports.indexOf("websocket"))
					t = "websocket";
				else {
					if (0 === this.transports.length) {
						var e = this;
						return void setTimeout(function() {
							e.emit("error", "No transports available");
						}, 0);
					}
					t = this.transports[0];
				}
				this.readyState = "opening";
				try {
					t = this.createTransport(t);
				} catch (t) {
					return this.transports.shift(), void this.open();
				}
				t.open(), this.setTransport(t);
			}),
			(h.prototype.setTransport = function(t) {
				o("setting transport %s", t.name);
				var e = this;
				this.transport &&
					(o("clearing existing transport %s", this.transport.name), this.transport.removeAllListeners()),
					(this.transport = t),
					t
						.on("drain", function() {
							e.onDrain();
						})
						.on("packet", function(t) {
							e.onPacket(t);
						})
						.on("error", function(t) {
							e.onError(t);
						})
						.on("close", function() {
							e.onClose("transport close");
						});
			}),
			(h.prototype.probe = function(t) {
				o('probing transport "%s"', t);
				var e = this.createTransport(t, { probe: 1 }),
					n = !1,
					r = this;
				function i() {
					if (r.onlyBinaryUpgrades) {
						var i = !this.supportsBinary && r.transport.supportsBinary;
						n = n || i;
					}
					n ||
						(o('probe transport "%s" opened', t),
						e.send([{ type: "ping", data: "probe" }]),
						e.once("packet", function(i) {
							if (!n)
								if ("pong" === i.type && "probe" === i.data) {
									if ((o('probe transport "%s" pong', t), (r.upgrading = !0), r.emit("upgrading", e), !e)) return;
									(h.priorWebsocketSuccess = "websocket" === e.name),
										o('pausing current transport "%s"', r.transport.name),
										r.transport.pause(function() {
											n ||
												("closed" !== r.readyState &&
													(o("changing transport and sending upgrade packet"),
													l(),
													r.setTransport(e),
													e.send([{ type: "upgrade" }]),
													r.emit("upgrade", e),
													(e = null),
													(r.upgrading = !1),
													r.flush()));
										});
								} else {
									o('probe transport "%s" failed', t);
									var s = new Error("probe error");
									(s.transport = e.name), r.emit("upgradeError", s);
								}
						}));
				}
				function s() {
					n || ((n = !0), l(), e.close(), (e = null));
				}
				function a(n) {
					var i = new Error("probe error: " + n);
					(i.transport = e.name),
						s(),
						o('probe transport "%s" failed because of error: %s', t, n),
						r.emit("upgradeError", i);
				}
				function c() {
					a("transport closed");
				}
				function u() {
					a("socket closed");
				}
				function f(t) {
					e && t.name !== e.name && (o('"%s" works - aborting "%s"', t.name, e.name), s());
				}
				function l() {
					e.removeListener("open", i),
						e.removeListener("error", a),
						e.removeListener("close", c),
						r.removeListener("close", u),
						r.removeListener("upgrading", f);
				}
				(h.priorWebsocketSuccess = !1),
					e.once("open", i),
					e.once("error", a),
					e.once("close", c),
					this.once("close", u),
					this.once("upgrading", f),
					e.open();
			}),
			(h.prototype.onOpen = function() {
				if (
					(o("socket open"),
					(this.readyState = "open"),
					(h.priorWebsocketSuccess = "websocket" === this.transport.name),
					this.emit("open"),
					this.flush(),
					"open" === this.readyState && this.upgrade && this.transport.pause)
				) {
					o("starting upgrade probes");
					for (var t = 0, e = this.upgrades.length; t < e; t++) this.probe(this.upgrades[t]);
				}
			}),
			(h.prototype.onPacket = function(t) {
				if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState)
					switch (
						(o('socket receive: type "%s", data "%s"', t.type, t.data),
						this.emit("packet", t),
						this.emit("heartbeat"),
						t.type)
					) {
						case "open":
							this.onHandshake(JSON.parse(t.data));
							break;
						case "pong":
							this.setPing(), this.emit("pong");
							break;
						case "error":
							var e = new Error("server error");
							(e.code = t.data), this.onError(e);
							break;
						case "message":
							this.emit("data", t.data), this.emit("message", t.data);
					}
				else o('packet received with socket readyState "%s"', this.readyState);
			}),
			(h.prototype.onHandshake = function(t) {
				this.emit("handshake", t),
					(this.id = t.sid),
					(this.transport.query.sid = t.sid),
					(this.upgrades = this.filterUpgrades(t.upgrades)),
					(this.pingInterval = t.pingInterval),
					(this.pingTimeout = t.pingTimeout),
					this.onOpen(),
					"closed" !== this.readyState &&
						(this.setPing(),
						this.removeListener("heartbeat", this.onHeartbeat),
						this.on("heartbeat", this.onHeartbeat));
			}),
			(h.prototype.onHeartbeat = function(t) {
				clearTimeout(this.pingTimeoutTimer);
				var e = this;
				e.pingTimeoutTimer = setTimeout(function() {
					"closed" !== e.readyState && e.onClose("ping timeout");
				}, t || e.pingInterval + e.pingTimeout);
			}),
			(h.prototype.setPing = function() {
				var t = this;
				clearTimeout(t.pingIntervalTimer),
					(t.pingIntervalTimer = setTimeout(function() {
						o("writing ping packet - expecting pong within %sms", t.pingTimeout),
							t.ping(),
							t.onHeartbeat(t.pingTimeout);
					}, t.pingInterval));
			}),
			(h.prototype.ping = function() {
				var t = this;
				this.sendPacket("ping", function() {
					t.emit("ping");
				});
			}),
			(h.prototype.onDrain = function() {
				this.writeBuffer.splice(0, this.prevBufferLen),
					(this.prevBufferLen = 0),
					0 === this.writeBuffer.length ? this.emit("drain") : this.flush();
			}),
			(h.prototype.flush = function() {
				"closed" !== this.readyState &&
					this.transport.writable &&
					!this.upgrading &&
					this.writeBuffer.length &&
					(o("flushing %d packets in socket", this.writeBuffer.length),
					this.transport.send(this.writeBuffer),
					(this.prevBufferLen = this.writeBuffer.length),
					this.emit("flush"));
			}),
			(h.prototype.write = h.prototype.send = function(t, e, n) {
				return this.sendPacket("message", t, e, n), this;
			}),
			(h.prototype.sendPacket = function(t, e, n, r) {
				if (
					("function" == typeof e && ((r = e), (e = void 0)),
					"function" == typeof n && ((r = n), (n = null)),
					"closing" !== this.readyState && "closed" !== this.readyState)
				) {
					(n = n || {}).compress = !1 !== n.compress;
					var i = { type: t, data: e, options: n };
					this.emit("packetCreate", i), this.writeBuffer.push(i), r && this.once("flush", r), this.flush();
				}
			}),
			(h.prototype.close = function() {
				if ("opening" === this.readyState || "open" === this.readyState) {
					this.readyState = "closing";
					var t = this;
					this.writeBuffer.length
						? this.once("drain", function() {
								this.upgrading ? r() : e();
						  })
						: this.upgrading
						? r()
						: e();
				}
				function e() {
					t.onClose("forced close"), o("socket closing - telling transport to close"), t.transport.close();
				}
				function n() {
					t.removeListener("upgrade", n), t.removeListener("upgradeError", n), e();
				}
				function r() {
					t.once("upgrade", n), t.once("upgradeError", n);
				}
				return this;
			}),
			(h.prototype.onError = function(t) {
				o("socket error %j", t),
					(h.priorWebsocketSuccess = !1),
					this.emit("error", t),
					this.onClose("transport error", t);
			}),
			(h.prototype.onClose = function(t, e) {
				if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
					o('socket close with reason: "%s"', t);
					clearTimeout(this.pingIntervalTimer),
						clearTimeout(this.pingTimeoutTimer),
						this.transport.removeAllListeners("close"),
						this.transport.close(),
						this.transport.removeAllListeners(),
						(this.readyState = "closed"),
						(this.id = null),
						this.emit("close", t, e),
						(this.writeBuffer = []),
						(this.prevBufferLen = 0);
				}
			}),
			(h.prototype.filterUpgrades = function(t) {
				for (var e = [], n = 0, r = t.length; n < r; n++) ~s(this.transports, t[n]) && e.push(t[n]);
				return e;
			});
	},
	function(t, e) {
		try {
			t.exports = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest();
		} catch (e) {
			t.exports = !1;
		}
	},
	function(t, e, n) {
		var r = n(15),
			i = n(23),
			o = n(5),
			s = n(12),
			a = n(1)("engine.io-client:polling-xhr");
		function c() {}
		function u(t) {
			if (
				(i.call(this, t),
				(this.requestTimeout = t.requestTimeout),
				(this.extraHeaders = t.extraHeaders),
				"undefined" != typeof location)
			) {
				var e = "https:" === location.protocol,
					n = location.port;
				n || (n = e ? 443 : 80),
					(this.xd = ("undefined" != typeof location && t.hostname !== location.hostname) || n !== t.port),
					(this.xs = t.secure !== e);
			}
		}
		function h(t) {
			(this.method = t.method || "GET"),
				(this.uri = t.uri),
				(this.xd = !!t.xd),
				(this.xs = !!t.xs),
				(this.async = !1 !== t.async),
				(this.data = void 0 !== t.data ? t.data : null),
				(this.agent = t.agent),
				(this.isBinary = t.isBinary),
				(this.supportsBinary = t.supportsBinary),
				(this.enablesXDR = t.enablesXDR),
				(this.withCredentials = t.withCredentials),
				(this.requestTimeout = t.requestTimeout),
				(this.pfx = t.pfx),
				(this.key = t.key),
				(this.passphrase = t.passphrase),
				(this.cert = t.cert),
				(this.ca = t.ca),
				(this.ciphers = t.ciphers),
				(this.rejectUnauthorized = t.rejectUnauthorized),
				(this.extraHeaders = t.extraHeaders),
				this.create();
		}
		if (
			((t.exports = u),
			(t.exports.Request = h),
			s(u, i),
			(u.prototype.supportsBinary = !0),
			(u.prototype.request = function(t) {
				return (
					((t = t || {}).uri = this.uri()),
					(t.xd = this.xd),
					(t.xs = this.xs),
					(t.agent = this.agent || !1),
					(t.supportsBinary = this.supportsBinary),
					(t.enablesXDR = this.enablesXDR),
					(t.withCredentials = this.withCredentials),
					(t.pfx = this.pfx),
					(t.key = this.key),
					(t.passphrase = this.passphrase),
					(t.cert = this.cert),
					(t.ca = this.ca),
					(t.ciphers = this.ciphers),
					(t.rejectUnauthorized = this.rejectUnauthorized),
					(t.requestTimeout = this.requestTimeout),
					(t.extraHeaders = this.extraHeaders),
					new h(t)
				);
			}),
			(u.prototype.doWrite = function(t, e) {
				var n = "string" != typeof t && void 0 !== t,
					r = this.request({ method: "POST", data: t, isBinary: n }),
					i = this;
				r.on("success", e),
					r.on("error", function(t) {
						i.onError("xhr post error", t);
					}),
					(this.sendXhr = r);
			}),
			(u.prototype.doPoll = function() {
				a("xhr poll");
				var t = this.request(),
					e = this;
				t.on("data", function(t) {
					e.onData(t);
				}),
					t.on("error", function(t) {
						e.onError("xhr poll error", t);
					}),
					(this.pollXhr = t);
			}),
			o(h.prototype),
			(h.prototype.create = function() {
				var t = { agent: this.agent, xdomain: this.xd, xscheme: this.xs, enablesXDR: this.enablesXDR };
				(t.pfx = this.pfx),
					(t.key = this.key),
					(t.passphrase = this.passphrase),
					(t.cert = this.cert),
					(t.ca = this.ca),
					(t.ciphers = this.ciphers),
					(t.rejectUnauthorized = this.rejectUnauthorized);
				var e = (this.xhr = new r(t)),
					n = this;
				try {
					a("xhr open %s: %s", this.method, this.uri), e.open(this.method, this.uri, this.async);
					try {
						if (this.extraHeaders)
							for (var i in (e.setDisableHeaderCheck && e.setDisableHeaderCheck(!0), this.extraHeaders))
								this.extraHeaders.hasOwnProperty(i) && e.setRequestHeader(i, this.extraHeaders[i]);
					} catch (t) {}
					if ("POST" === this.method)
						try {
							this.isBinary
								? e.setRequestHeader("Content-type", "application/octet-stream")
								: e.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
						} catch (t) {}
					try {
						e.setRequestHeader("Accept", "*/*");
					} catch (t) {}
					"withCredentials" in e && (e.withCredentials = this.withCredentials),
						this.requestTimeout && (e.timeout = this.requestTimeout),
						this.hasXDR()
							? ((e.onload = function() {
									n.onLoad();
							  }),
							  (e.onerror = function() {
									n.onError(e.responseText);
							  }))
							: (e.onreadystatechange = function() {
									if (2 === e.readyState)
										try {
											var t = e.getResponseHeader("Content-Type");
											((n.supportsBinary && "application/octet-stream" === t) ||
												"application/octet-stream; charset=UTF-8" === t) &&
												(e.responseType = "arraybuffer");
										} catch (t) {}
									4 === e.readyState &&
										(200 === e.status || 1223 === e.status
											? n.onLoad()
											: setTimeout(function() {
													n.onError("number" == typeof e.status ? e.status : 0);
											  }, 0));
							  }),
						a("xhr data %s", this.data),
						e.send(this.data);
				} catch (t) {
					return void setTimeout(function() {
						n.onError(t);
					}, 0);
				}
				"undefined" != typeof document && ((this.index = h.requestsCount++), (h.requests[this.index] = this));
			}),
			(h.prototype.onSuccess = function() {
				this.emit("success"), this.cleanup();
			}),
			(h.prototype.onData = function(t) {
				this.emit("data", t), this.onSuccess();
			}),
			(h.prototype.onError = function(t) {
				this.emit("error", t), this.cleanup(!0);
			}),
			(h.prototype.cleanup = function(t) {
				if (void 0 !== this.xhr && null !== this.xhr) {
					if ((this.hasXDR() ? (this.xhr.onload = this.xhr.onerror = c) : (this.xhr.onreadystatechange = c), t))
						try {
							this.xhr.abort();
						} catch (t) {}
					"undefined" != typeof document && delete h.requests[this.index], (this.xhr = null);
				}
			}),
			(h.prototype.onLoad = function() {
				var t;
				try {
					var e;
					try {
						e = this.xhr.getResponseHeader("Content-Type");
					} catch (t) {}
					t =
						(("application/octet-stream" === e || "application/octet-stream; charset=UTF-8" === e) &&
							this.xhr.response) ||
						this.xhr.responseText;
				} catch (t) {
					this.onError(t);
				}
				null != t && this.onData(t);
			}),
			(h.prototype.hasXDR = function() {
				return "undefined" != typeof XDomainRequest && !this.xs && this.enablesXDR;
			}),
			(h.prototype.abort = function() {
				this.cleanup();
			}),
			(h.requestsCount = 0),
			(h.requests = {}),
			"undefined" != typeof document)
		)
			if ("function" == typeof attachEvent) attachEvent("onunload", l);
			else if ("function" == typeof addEventListener) {
				var f = "onpagehide" in self ? "pagehide" : "unload";
				addEventListener(f, l, !1);
			}
		function l() {
			for (var t in h.requests) h.requests.hasOwnProperty(t) && h.requests[t].abort();
		}
	},
	function(t, e) {
		t.exports =
			Object.keys ||
			function(t) {
				var e = [],
					n = Object.prototype.hasOwnProperty;
				for (var r in t) n.call(t, r) && e.push(r);
				return e;
			};
	},
	function(t, e) {
		t.exports = function(t, e, n) {
			var r = t.byteLength;
			if (((e = e || 0), (n = n || r), t.slice)) return t.slice(e, n);
			if ((e < 0 && (e += r), n < 0 && (n += r), n > r && (n = r), e >= r || e >= n || 0 === r))
				return new ArrayBuffer(0);
			for (var i = new Uint8Array(t), o = new Uint8Array(n - e), s = e, a = 0; s < n; s++, a++) o[a] = i[s];
			return o.buffer;
		};
	},
	function(t, e) {
		function n() {}
		t.exports = function(t, e, r) {
			var i = !1;
			return (r = r || n), (o.count = t), 0 === t ? e() : o;
			function o(t, n) {
				if (o.count <= 0) throw new Error("after called too many times");
				--o.count, t ? ((i = !0), e(t), (e = r)) : 0 !== o.count || i || e(null, n);
			}
		};
	},
	function(t, e) {
		/*! https://mths.be/utf8js v2.1.2 by @mathias */
		var n,
			r,
			i,
			o = String.fromCharCode;
		function s(t) {
			for (var e, n, r = [], i = 0, o = t.length; i < o; )
				(e = t.charCodeAt(i++)) >= 55296 && e <= 56319 && i < o
					? 56320 == (64512 & (n = t.charCodeAt(i++)))
						? r.push(((1023 & e) << 10) + (1023 & n) + 65536)
						: (r.push(e), i--)
					: r.push(e);
			return r;
		}
		function a(t, e) {
			if (t >= 55296 && t <= 57343) {
				if (e) throw Error("Lone surrogate U+" + t.toString(16).toUpperCase() + " is not a scalar value");
				return !1;
			}
			return !0;
		}
		function c(t, e) {
			return o(((t >> e) & 63) | 128);
		}
		function u(t, e) {
			if (0 == (4294967168 & t)) return o(t);
			var n = "";
			return (
				0 == (4294965248 & t)
					? (n = o(((t >> 6) & 31) | 192))
					: 0 == (4294901760 & t)
					? (a(t, e) || (t = 65533), (n = o(((t >> 12) & 15) | 224)), (n += c(t, 6)))
					: 0 == (4292870144 & t) && ((n = o(((t >> 18) & 7) | 240)), (n += c(t, 12)), (n += c(t, 6))),
				(n += o((63 & t) | 128))
			);
		}
		function h() {
			if (i >= r) throw Error("Invalid byte index");
			var t = 255 & n[i];
			if ((i++, 128 == (192 & t))) return 63 & t;
			throw Error("Invalid continuation byte");
		}
		function f(t) {
			var e, o;
			if (i > r) throw Error("Invalid byte index");
			if (i == r) return !1;
			if (((e = 255 & n[i]), i++, 0 == (128 & e))) return e;
			if (192 == (224 & e)) {
				if ((o = ((31 & e) << 6) | h()) >= 128) return o;
				throw Error("Invalid continuation byte");
			}
			if (224 == (240 & e)) {
				if ((o = ((15 & e) << 12) | (h() << 6) | h()) >= 2048) return a(o, t) ? o : 65533;
				throw Error("Invalid continuation byte");
			}
			if (240 == (248 & e) && (o = ((7 & e) << 18) | (h() << 12) | (h() << 6) | h()) >= 65536 && o <= 1114111) return o;
			throw Error("Invalid UTF-8 detected");
		}
		t.exports = {
			version: "2.1.2",
			encode: function(t, e) {
				for (var n = !1 !== (e = e || {}).strict, r = s(t), i = r.length, o = -1, a = ""; ++o < i; ) a += u(r[o], n);
				return a;
			},
			decode: function(t, e) {
				var a = !1 !== (e = e || {}).strict;
				(n = s(t)), (r = n.length), (i = 0);
				for (var c, u = []; !1 !== (c = f(a)); ) u.push(c);
				return (function(t) {
					for (var e, n = t.length, r = -1, i = ""; ++r < n; )
						(e = t[r]) > 65535 && ((i += o((((e -= 65536) >>> 10) & 1023) | 55296)), (e = 56320 | (1023 & e))),
							(i += o(e));
					return i;
				})(u);
			},
		};
	},
	function(t, e) {
		!(function() {
			"use strict";
			for (
				var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = new Uint8Array(256), r = 0;
				r < t.length;
				r++
			)
				n[t.charCodeAt(r)] = r;
			(e.encode = function(e) {
				var n,
					r = new Uint8Array(e),
					i = r.length,
					o = "";
				for (n = 0; n < i; n += 3)
					(o += t[r[n] >> 2]),
						(o += t[((3 & r[n]) << 4) | (r[n + 1] >> 4)]),
						(o += t[((15 & r[n + 1]) << 2) | (r[n + 2] >> 6)]),
						(o += t[63 & r[n + 2]]);
				return (
					i % 3 == 2
						? (o = o.substring(0, o.length - 1) + "=")
						: i % 3 == 1 && (o = o.substring(0, o.length - 2) + "=="),
					o
				);
			}),
				(e.decode = function(t) {
					var e,
						r,
						i,
						o,
						s,
						a = 0.75 * t.length,
						c = t.length,
						u = 0;
					"=" === t[t.length - 1] && (a--, "=" === t[t.length - 2] && a--);
					var h = new ArrayBuffer(a),
						f = new Uint8Array(h);
					for (e = 0; e < c; e += 4)
						(r = n[t.charCodeAt(e)]),
							(i = n[t.charCodeAt(e + 1)]),
							(o = n[t.charCodeAt(e + 2)]),
							(s = n[t.charCodeAt(e + 3)]),
							(f[u++] = (r << 2) | (i >> 4)),
							(f[u++] = ((15 & i) << 4) | (o >> 2)),
							(f[u++] = ((3 & o) << 6) | (63 & s));
					return h;
				});
		})();
	},
	function(t, e) {
		var n =
				void 0 !== n
					? n
					: "undefined" != typeof WebKitBlobBuilder
					? WebKitBlobBuilder
					: "undefined" != typeof MSBlobBuilder
					? MSBlobBuilder
					: "undefined" != typeof MozBlobBuilder && MozBlobBuilder,
			r = (function() {
				try {
					return 2 === new Blob(["hi"]).size;
				} catch (t) {
					return !1;
				}
			})(),
			i =
				r &&
				(function() {
					try {
						return 2 === new Blob([new Uint8Array([1, 2])]).size;
					} catch (t) {
						return !1;
					}
				})(),
			o = n && n.prototype.append && n.prototype.getBlob;
		function s(t) {
			return t.map(function(t) {
				if (t.buffer instanceof ArrayBuffer) {
					var e = t.buffer;
					if (t.byteLength !== e.byteLength) {
						var n = new Uint8Array(t.byteLength);
						n.set(new Uint8Array(e, t.byteOffset, t.byteLength)), (e = n.buffer);
					}
					return e;
				}
				return t;
			});
		}
		function a(t, e) {
			e = e || {};
			var r = new n();
			return (
				s(t).forEach(function(t) {
					r.append(t);
				}),
				e.type ? r.getBlob(e.type) : r.getBlob()
			);
		}
		function c(t, e) {
			return new Blob(s(t), e || {});
		}
		"undefined" != typeof Blob && ((a.prototype = Blob.prototype), (c.prototype = Blob.prototype)),
			(t.exports = r ? (i ? Blob : c) : o ? a : void 0);
	},
	function(t, e, n) {
		(function(e) {
			var r = n(23),
				i = n(12);
			t.exports = h;
			var o,
				s = /\n/g,
				a = /\\n/g;
			function c() {}
			function u() {
				return "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== e ? e : {};
			}
			function h(t) {
				if ((r.call(this, t), (this.query = this.query || {}), !o)) {
					var e = u();
					o = e.___eio = e.___eio || [];
				}
				this.index = o.length;
				var n = this;
				o.push(function(t) {
					n.onData(t);
				}),
					(this.query.j = this.index),
					"function" == typeof addEventListener &&
						addEventListener(
							"beforeunload",
							function() {
								n.script && (n.script.onerror = c);
							},
							!1,
						);
			}
			i(h, r),
				(h.prototype.supportsBinary = !1),
				(h.prototype.doClose = function() {
					this.script && (this.script.parentNode.removeChild(this.script), (this.script = null)),
						this.form && (this.form.parentNode.removeChild(this.form), (this.form = null), (this.iframe = null)),
						r.prototype.doClose.call(this);
				}),
				(h.prototype.doPoll = function() {
					var t = this,
						e = document.createElement("script");
					this.script && (this.script.parentNode.removeChild(this.script), (this.script = null)),
						(e.async = !0),
						(e.src = this.uri()),
						(e.onerror = function(e) {
							t.onError("jsonp poll error", e);
						});
					var n = document.getElementsByTagName("script")[0];
					n ? n.parentNode.insertBefore(e, n) : (document.head || document.body).appendChild(e),
						(this.script = e),
						"undefined" != typeof navigator &&
							/gecko/i.test(navigator.userAgent) &&
							setTimeout(function() {
								var t = document.createElement("iframe");
								document.body.appendChild(t), document.body.removeChild(t);
							}, 100);
				}),
				(h.prototype.doWrite = function(t, e) {
					var n = this;
					if (!this.form) {
						var r,
							i = document.createElement("form"),
							o = document.createElement("textarea"),
							c = (this.iframeId = "eio_iframe_" + this.index);
						(i.className = "socketio"),
							(i.style.position = "absolute"),
							(i.style.top = "-1000px"),
							(i.style.left = "-1000px"),
							(i.target = c),
							(i.method = "POST"),
							i.setAttribute("accept-charset", "utf-8"),
							(o.name = "d"),
							i.appendChild(o),
							document.body.appendChild(i),
							(this.form = i),
							(this.area = o);
					}
					function u() {
						h(), e();
					}
					function h() {
						if (n.iframe)
							try {
								n.form.removeChild(n.iframe);
							} catch (t) {
								n.onError("jsonp polling iframe removal error", t);
							}
						try {
							var t = '<iframe src="javascript:0" name="' + n.iframeId + '">';
							r = document.createElement(t);
						} catch (t) {
							((r = document.createElement("iframe")).name = n.iframeId), (r.src = "javascript:0");
						}
						(r.id = n.iframeId), n.form.appendChild(r), (n.iframe = r);
					}
					(this.form.action = this.uri()), h(), (t = t.replace(a, "\\\n")), (this.area.value = t.replace(s, "\\n"));
					try {
						this.form.submit();
					} catch (t) {}
					this.iframe.attachEvent
						? (this.iframe.onreadystatechange = function() {
								"complete" === n.iframe.readyState && u();
						  })
						: (this.iframe.onload = u);
				});
		}.call(this, n(6)));
	},
	function(t, e, n) {
		(function(e) {
			var r,
				i,
				o = n(16),
				s = n(7),
				a = n(11),
				c = n(12),
				u = n(25),
				h = n(1)("engine.io-client:websocket");
			if (
				("undefined" != typeof WebSocket
					? (r = WebSocket)
					: "undefined" != typeof self && (r = self.WebSocket || self.MozWebSocket),
				"undefined" == typeof window)
			)
				try {
					i = n(64);
				} catch (t) {}
			var f = r || i;
			function l(t) {
				t && t.forceBase64 && (this.supportsBinary = !1),
					(this.perMessageDeflate = t.perMessageDeflate),
					(this.usingBrowserWebSocket = r && !t.forceNode),
					(this.protocols = t.protocols),
					this.usingBrowserWebSocket || (f = i),
					o.call(this, t);
			}
			(t.exports = l),
				c(l, o),
				(l.prototype.name = "websocket"),
				(l.prototype.supportsBinary = !0),
				(l.prototype.doOpen = function() {
					if (this.check()) {
						var t = this.uri(),
							e = this.protocols,
							n = { agent: this.agent, perMessageDeflate: this.perMessageDeflate };
						(n.pfx = this.pfx),
							(n.key = this.key),
							(n.passphrase = this.passphrase),
							(n.cert = this.cert),
							(n.ca = this.ca),
							(n.ciphers = this.ciphers),
							(n.rejectUnauthorized = this.rejectUnauthorized),
							this.extraHeaders && (n.headers = this.extraHeaders),
							this.localAddress && (n.localAddress = this.localAddress);
						try {
							this.ws =
								this.usingBrowserWebSocket && !this.isReactNative ? (e ? new f(t, e) : new f(t)) : new f(t, e, n);
						} catch (t) {
							return this.emit("error", t);
						}
						void 0 === this.ws.binaryType && (this.supportsBinary = !1),
							this.ws.supports && this.ws.supports.binary
								? ((this.supportsBinary = !0), (this.ws.binaryType = "nodebuffer"))
								: (this.ws.binaryType = "arraybuffer"),
							this.addEventListeners();
					}
				}),
				(l.prototype.addEventListeners = function() {
					var t = this;
					(this.ws.onopen = function() {
						t.onOpen();
					}),
						(this.ws.onclose = function() {
							t.onClose();
						}),
						(this.ws.onmessage = function(e) {
							t.onData(e.data);
						}),
						(this.ws.onerror = function(e) {
							t.onError("websocket error", e);
						});
				}),
				(l.prototype.write = function(t) {
					var n = this;
					this.writable = !1;
					for (var r = t.length, i = 0, o = r; i < o; i++)
						!(function(t) {
							s.encodePacket(t, n.supportsBinary, function(i) {
								if (!n.usingBrowserWebSocket) {
									var o = {};
									if ((t.options && (o.compress = t.options.compress), n.perMessageDeflate))
										("string" == typeof i ? e.byteLength(i) : i.length) < n.perMessageDeflate.threshold &&
											(o.compress = !1);
								}
								try {
									n.usingBrowserWebSocket ? n.ws.send(i) : n.ws.send(i, o);
								} catch (t) {
									h("websocket closed before onclose event");
								}
								--r || a();
							});
						})(t[i]);
					function a() {
						n.emit("flush"),
							setTimeout(function() {
								(n.writable = !0), n.emit("drain");
							}, 0);
					}
				}),
				(l.prototype.onClose = function() {
					o.prototype.onClose.call(this);
				}),
				(l.prototype.doClose = function() {
					void 0 !== this.ws && this.ws.close();
				}),
				(l.prototype.uri = function() {
					var t = this.query || {},
						e = this.secure ? "wss" : "ws",
						n = "";
					return (
						this.port &&
							(("wss" === e && 443 !== Number(this.port)) || ("ws" === e && 80 !== Number(this.port))) &&
							(n = ":" + this.port),
						this.timestampRequests && (t[this.timestampParam] = u()),
						this.supportsBinary || (t.b64 = 1),
						(t = a.encode(t)).length && (t = "?" + t),
						e +
							"://" +
							(-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) +
							n +
							this.path +
							t
					);
				}),
				(l.prototype.check = function() {
					return !(!f || ("__initialize" in f && this.name === l.prototype.name));
				});
		}.call(this, n(3).Buffer));
	},
	function(t, e) {},
	function(t, e) {
		t.exports = function(t, e) {
			for (var n = [], r = (e = e || 0) || 0; r < t.length; r++) n[r - e] = t[r];
			return n;
		};
	},
	function(t, e) {
		function n(t) {
			(t = t || {}),
				(this.ms = t.min || 100),
				(this.max = t.max || 1e4),
				(this.factor = t.factor || 2),
				(this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0),
				(this.attempts = 0);
		}
		(t.exports = n),
			(n.prototype.duration = function() {
				var t = this.ms * Math.pow(this.factor, this.attempts++);
				if (this.jitter) {
					var e = Math.random(),
						n = Math.floor(e * this.jitter * t);
					t = 0 == (1 & Math.floor(10 * e)) ? t - n : t + n;
				}
				return 0 | Math.min(t, this.max);
			}),
			(n.prototype.reset = function() {
				this.attempts = 0;
			}),
			(n.prototype.setMin = function(t) {
				this.ms = t;
			}),
			(n.prototype.setMax = function(t) {
				this.max = t;
			}),
			(n.prototype.setJitter = function(t) {
				this.jitter = t;
			});
	},
	function(t, e) {
		t.exports = function() {
			if ("undefined" == typeof window) return null;
			var t = {
				RTCPeerConnection: window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection,
				RTCSessionDescription:
					window.RTCSessionDescription || window.mozRTCSessionDescription || window.webkitRTCSessionDescription,
				RTCIceCandidate: window.RTCIceCandidate || window.mozRTCIceCandidate || window.webkitRTCIceCandidate,
			};
			return t.RTCPeerConnection ? t : null;
		};
	},
	function(t, e, n) {
		"use strict";
		(function(e, r) {
			var i = n(30).Buffer,
				o = e.crypto || e.msCrypto;
			o && o.getRandomValues
				? (t.exports = function(t, e) {
						if (t > 4294967295) throw new RangeError("requested too many random bytes");
						var n = i.allocUnsafe(t);
						if (t > 0)
							if (t > 65536) for (var s = 0; s < t; s += 65536) o.getRandomValues(n.slice(s, s + 65536));
							else o.getRandomValues(n);
						if ("function" == typeof e)
							return r.nextTick(function() {
								e(null, n);
							});
						return n;
				  })
				: (t.exports = function() {
						throw new Error(
							"Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11",
						);
				  });
		}.call(this, n(6), n(2)));
	},
	function(t, e, n) {
		((e = t.exports = n(31)).Stream = e),
			(e.Readable = e),
			(e.Writable = n(36)),
			(e.Duplex = n(9)),
			(e.Transform = n(38)),
			(e.PassThrough = n(76)),
			(e.finished = n(17)),
			(e.pipeline = n(77));
	},
	function(t, e) {},
	function(t, e, n) {
		"use strict";
		function r(t, e) {
			var n = Object.keys(t);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(t);
				e &&
					(r = r.filter(function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable;
					})),
					n.push.apply(n, r);
			}
			return n;
		}
		function i(t, e, n) {
			return (
				e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n),
				t
			);
		}
		function o(t, e) {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				(r.enumerable = r.enumerable || !1),
					(r.configurable = !0),
					"value" in r && (r.writable = !0),
					Object.defineProperty(t, r.key, r);
			}
		}
		var s = n(3).Buffer,
			a = n(72).inspect,
			c = (a && a.custom) || "inspect";
		t.exports = (function() {
			function t() {
				!(function(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
				})(this, t),
					(this.head = null),
					(this.tail = null),
					(this.length = 0);
			}
			var e, n, u;
			return (
				(e = t),
				(n = [
					{
						key: "push",
						value: function(t) {
							var e = { data: t, next: null };
							this.length > 0 ? (this.tail.next = e) : (this.head = e), (this.tail = e), ++this.length;
						},
					},
					{
						key: "unshift",
						value: function(t) {
							var e = { data: t, next: this.head };
							0 === this.length && (this.tail = e), (this.head = e), ++this.length;
						},
					},
					{
						key: "shift",
						value: function() {
							if (0 !== this.length) {
								var t = this.head.data;
								return (
									1 === this.length ? (this.head = this.tail = null) : (this.head = this.head.next), --this.length, t
								);
							}
						},
					},
					{
						key: "clear",
						value: function() {
							(this.head = this.tail = null), (this.length = 0);
						},
					},
					{
						key: "join",
						value: function(t) {
							if (0 === this.length) return "";
							for (var e = this.head, n = "" + e.data; (e = e.next); ) n += t + e.data;
							return n;
						},
					},
					{
						key: "concat",
						value: function(t) {
							if (0 === this.length) return s.alloc(0);
							for (var e, n, r, i = s.allocUnsafe(t >>> 0), o = this.head, a = 0; o; )
								(e = o.data), (n = i), (r = a), s.prototype.copy.call(e, n, r), (a += o.data.length), (o = o.next);
							return i;
						},
					},
					{
						key: "consume",
						value: function(t, e) {
							var n;
							return (
								t < this.head.data.length
									? ((n = this.head.data.slice(0, t)), (this.head.data = this.head.data.slice(t)))
									: (n = t === this.head.data.length ? this.shift() : e ? this._getString(t) : this._getBuffer(t)),
								n
							);
						},
					},
					{
						key: "first",
						value: function() {
							return this.head.data;
						},
					},
					{
						key: "_getString",
						value: function(t) {
							var e = this.head,
								n = 1,
								r = e.data;
							for (t -= r.length; (e = e.next); ) {
								var i = e.data,
									o = t > i.length ? i.length : t;
								if ((o === i.length ? (r += i) : (r += i.slice(0, t)), 0 == (t -= o))) {
									o === i.length
										? (++n, e.next ? (this.head = e.next) : (this.head = this.tail = null))
										: ((this.head = e), (e.data = i.slice(o)));
									break;
								}
								++n;
							}
							return (this.length -= n), r;
						},
					},
					{
						key: "_getBuffer",
						value: function(t) {
							var e = s.allocUnsafe(t),
								n = this.head,
								r = 1;
							for (n.data.copy(e), t -= n.data.length; (n = n.next); ) {
								var i = n.data,
									o = t > i.length ? i.length : t;
								if ((i.copy(e, e.length - t, 0, o), 0 == (t -= o))) {
									o === i.length
										? (++r, n.next ? (this.head = n.next) : (this.head = this.tail = null))
										: ((this.head = n), (n.data = i.slice(o)));
									break;
								}
								++r;
							}
							return (this.length -= r), e;
						},
					},
					{
						key: c,
						value: function(t, e) {
							return a(
								this,
								(function(t) {
									for (var e = 1; e < arguments.length; e++) {
										var n = null != arguments[e] ? arguments[e] : {};
										e % 2
											? r(Object(n), !0).forEach(function(e) {
													i(t, e, n[e]);
											  })
											: Object.getOwnPropertyDescriptors
											? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
											: r(Object(n)).forEach(function(e) {
													Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
											  });
									}
									return t;
								})({}, e, { depth: 0, customInspect: !1 }),
							);
						},
					},
				]) && o(e.prototype, n),
				u && o(e, u),
				t
			);
		})();
	},
	function(t, e) {},
	function(t, e, n) {
		(function(e) {
			function n(t) {
				try {
					if (!e.localStorage) return !1;
				} catch (t) {
					return !1;
				}
				var n = e.localStorage[t];
				return null != n && "true" === String(n).toLowerCase();
			}
			t.exports = function(t, e) {
				if (n("noDeprecation")) return t;
				var r = !1;
				return function() {
					if (!r) {
						if (n("throwDeprecation")) throw new Error(e);
						n("traceDeprecation") ? console.trace(e) : console.warn(e), (r = !0);
					}
					return t.apply(this, arguments);
				};
			};
		}.call(this, n(6)));
	},
	function(t, e, n) {
		"use strict";
		(function(e) {
			var r;
			function i(t, e, n) {
				return (
					e in t
						? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 })
						: (t[e] = n),
					t
				);
			}
			var o = n(17),
				s = Symbol("lastResolve"),
				a = Symbol("lastReject"),
				c = Symbol("error"),
				u = Symbol("ended"),
				h = Symbol("lastPromise"),
				f = Symbol("handlePromise"),
				l = Symbol("stream");
			function p(t, e) {
				return { value: t, done: e };
			}
			function d(t) {
				var e = t[s];
				if (null !== e) {
					var n = t[l].read();
					null !== n && ((t[h] = null), (t[s] = null), (t[a] = null), e(p(n, !1)));
				}
			}
			function y(t) {
				e.nextTick(d, t);
			}
			var g = Object.getPrototypeOf(function() {}),
				m = Object.setPrototypeOf(
					(i(
						(r = {
							get stream() {
								return this[l];
							},
							next: function() {
								var t = this,
									n = this[c];
								if (null !== n) return Promise.reject(n);
								if (this[u]) return Promise.resolve(p(void 0, !0));
								if (this[l].destroyed)
									return new Promise(function(n, r) {
										e.nextTick(function() {
											t[c] ? r(t[c]) : n(p(void 0, !0));
										});
									});
								var r,
									i = this[h];
								if (i)
									r = new Promise(
										(function(t, e) {
											return function(n, r) {
												t.then(function() {
													e[u] ? n(p(void 0, !0)) : e[f](n, r);
												}, r);
											};
										})(i, this),
									);
								else {
									var o = this[l].read();
									if (null !== o) return Promise.resolve(p(o, !1));
									r = new Promise(this[f]);
								}
								return (this[h] = r), r;
							},
						}),
						Symbol.asyncIterator,
						function() {
							return this;
						},
					),
					i(r, "return", function() {
						var t = this;
						return new Promise(function(e, n) {
							t[l].destroy(null, function(t) {
								t ? n(t) : e(p(void 0, !0));
							});
						});
					}),
					r),
					g,
				);
			t.exports = function(t) {
				var e,
					n = Object.create(
						m,
						(i((e = {}), l, { value: t, writable: !0 }),
						i(e, s, { value: null, writable: !0 }),
						i(e, a, { value: null, writable: !0 }),
						i(e, c, { value: null, writable: !0 }),
						i(e, u, { value: t._readableState.endEmitted, writable: !0 }),
						i(e, f, {
							value: function(t, e) {
								var r = n[l].read();
								r ? ((n[h] = null), (n[s] = null), (n[a] = null), t(p(r, !1))) : ((n[s] = t), (n[a] = e));
							},
							writable: !0,
						}),
						e),
					);
				return (
					(n[h] = null),
					o(t, function(t) {
						if (t && "ERR_STREAM_PREMATURE_CLOSE" !== t.code) {
							var e = n[a];
							return null !== e && ((n[h] = null), (n[s] = null), (n[a] = null), e(t)), void (n[c] = t);
						}
						var r = n[s];
						null !== r && ((n[h] = null), (n[s] = null), (n[a] = null), r(p(void 0, !0))), (n[u] = !0);
					}),
					t.on("readable", y.bind(null, n)),
					n
				);
			};
		}.call(this, n(2)));
	},
	function(t, e) {
		t.exports = function() {
			throw new Error("Readable.from is not available in the browser");
		};
	},
	function(t, e, n) {
		"use strict";
		t.exports = i;
		var r = n(38);
		function i(t) {
			if (!(this instanceof i)) return new i(t);
			r.call(this, t);
		}
		n(10)(i, r),
			(i.prototype._transform = function(t, e, n) {
				n(null, t);
			});
	},
	function(t, e, n) {
		"use strict";
		var r;
		var i = n(8).codes,
			o = i.ERR_MISSING_ARGS,
			s = i.ERR_STREAM_DESTROYED;
		function a(t) {
			if (t) throw t;
		}
		function c(t, e, i, o) {
			o = (function(t) {
				var e = !1;
				return function() {
					e || ((e = !0), t.apply(void 0, arguments));
				};
			})(o);
			var a = !1;
			t.on("close", function() {
				a = !0;
			}),
				void 0 === r && (r = n(17)),
				r(t, { readable: e, writable: i }, function(t) {
					if (t) return o(t);
					(a = !0), o();
				});
			var c = !1;
			return function(e) {
				if (!a && !c)
					return (
						(c = !0),
						(function(t) {
							return t.setHeader && "function" == typeof t.abort;
						})(t)
							? t.abort()
							: "function" == typeof t.destroy
							? t.destroy()
							: void o(e || new s("pipe"))
					);
			};
		}
		function u(t) {
			t();
		}
		function h(t, e) {
			return t.pipe(e);
		}
		function f(t) {
			return t.length ? ("function" != typeof t[t.length - 1] ? a : t.pop()) : a;
		}
		t.exports = function() {
			for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
			var r,
				i = f(e);
			if ((Array.isArray(e[0]) && (e = e[0]), e.length < 2)) throw new o("streams");
			var s = e.map(function(t, n) {
				var o = n < e.length - 1;
				return c(t, o, n > 0, function(t) {
					r || (r = t), t && s.forEach(u), o || (s.forEach(u), i(r));
				});
			});
			return e.reduce(h);
		};
	},
	function(t, e) {
		let n;
		t.exports =
			"function" == typeof queueMicrotask
				? queueMicrotask
				: t =>
						(n || (n = Promise.resolve())).then(t).catch(t =>
							setTimeout(() => {
								throw t;
							}, 0),
						);
	},
]);
