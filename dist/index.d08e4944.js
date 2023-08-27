/*! UIkit 3.16.24 | https://www.getuikit.com | (c) 2014 - 2023 YOOtheme | MIT License */ (function(be, $e) {
    typeof exports == "object" && typeof module < "u" ? module.exports = $e() : typeof define == "function" && define.amd ? define("uikit", $e) : (be = typeof globalThis < "u" ? globalThis : be || self, be.UIkit = $e());
})(this, function() {
    "use strict";
    const { hasOwnProperty: be, toString: $e } = Object.prototype;
    function vt(t, e) {
        return be.call(t, e);
    }
    const Fo = /\B([A-Z])/g, Kt = dt((t)=>t.replace(Fo, "-$1").toLowerCase()), Ho = /-(\w)/g, xe = dt((t)=>(t.charAt(0).toLowerCase() + t.slice(1)).replace(Ho, (e, i)=>i.toUpperCase())), Ct = dt((t)=>t.charAt(0).toUpperCase() + t.slice(1));
    function ot(t, e) {
        var i;
        return (i = t == null ? void 0 : t.startsWith) == null ? void 0 : i.call(t, e);
    }
    function Zt(t, e) {
        var i;
        return (i = t == null ? void 0 : t.endsWith) == null ? void 0 : i.call(t, e);
    }
    function m(t, e) {
        var i;
        return (i = t == null ? void 0 : t.includes) == null ? void 0 : i.call(t, e);
    }
    function xt(t, e) {
        var i;
        return (i = t == null ? void 0 : t.findIndex) == null ? void 0 : i.call(t, e);
    }
    const { isArray: Q, from: Qt } = Array, { assign: wt } = Object;
    function it(t) {
        return typeof t == "function";
    }
    function Tt(t) {
        return t !== null && typeof t == "object";
    }
    function yt(t) {
        return $e.call(t) === "[object Object]";
    }
    function te(t) {
        return Tt(t) && t === t.window;
    }
    function Ge(t) {
        return Di(t) === 9;
    }
    function Xe(t) {
        return Di(t) >= 1;
    }
    function ee(t) {
        return Di(t) === 1;
    }
    function Di(t) {
        return !te(t) && Tt(t) && t.nodeType;
    }
    function ie(t) {
        return typeof t == "boolean";
    }
    function D(t) {
        return typeof t == "string";
    }
    function se(t) {
        return typeof t == "number";
    }
    function bt(t) {
        return se(t) || D(t) && !isNaN(t - parseFloat(t));
    }
    function ye(t) {
        return !(Q(t) ? t.length : Tt(t) && Object.keys(t).length);
    }
    function Y(t) {
        return t === void 0;
    }
    function Bi(t) {
        return ie(t) ? t : t === "true" || t === "1" || t === "" ? !0 : t === "false" || t === "0" ? !1 : t;
    }
    function kt(t) {
        const e = Number(t);
        return isNaN(e) ? !1 : e;
    }
    function x(t) {
        return parseFloat(t) || 0;
    }
    function H(t) {
        return k(t)[0];
    }
    function k(t) {
        return Xe(t) ? [
            t
        ] : Array.from(t || []).filter(Xe);
    }
    function ne(t) {
        if (te(t)) return t;
        t = H(t);
        const e = Ge(t) ? t : t == null ? void 0 : t.ownerDocument;
        return (e == null ? void 0 : e.defaultView) || window;
    }
    function Je(t, e) {
        return t === e || Tt(t) && Tt(e) && Object.keys(t).length === Object.keys(e).length && Et(t, (i, s)=>i === e[s]);
    }
    function Mi(t, e, i) {
        return t.replace(new RegExp(`${e}|${i}`, "g"), (s)=>s === e ? i : e);
    }
    function oe(t) {
        return t[t.length - 1];
    }
    function Et(t, e) {
        for(const i in t)if (e(t[i], i) === !1) return !1;
        return !0;
    }
    function Ke(t, e) {
        return t.slice().sort(({ [e]: i = 0 }, { [e]: s = 0 })=>i > s ? 1 : s > i ? -1 : 0);
    }
    function Dt(t, e) {
        return t.reduce((i, s)=>i + x(it(e) ? e(s) : s[e]), 0);
    }
    function _s(t, e) {
        const i = new Set;
        return t.filter(({ [e]: s })=>i.has(s) ? !1 : i.add(s));
    }
    function Ni(t, e) {
        return e.reduce((i, s)=>({
                ...i,
                [s]: t[s]
            }), {});
    }
    function Z(t, e = 0, i = 1) {
        return Math.min(Math.max(kt(t) || 0, e), i);
    }
    function S() {}
    function zi(...t) {
        return [
            [
                "bottom",
                "top"
            ],
            [
                "right",
                "left"
            ]
        ].every(([e, i])=>Math.min(...t.map(({ [e]: s })=>s)) - Math.max(...t.map(({ [i]: s })=>s)) > 0);
    }
    function Ze(t, e) {
        return t.x <= e.right && t.x >= e.left && t.y <= e.bottom && t.y >= e.top;
    }
    function Fi(t, e, i) {
        const s = e === "width" ? "height" : "width";
        return {
            [s]: t[e] ? Math.round(i * t[s] / t[e]) : t[s],
            [e]: i
        };
    }
    function As(t, e) {
        t = {
            ...t
        };
        for(const i in t)t = t[i] > e[i] ? Fi(t, i, e[i]) : t;
        return t;
    }
    function Lo(t, e) {
        t = As(t, e);
        for(const i in t)t = t[i] < e[i] ? Fi(t, i, e[i]) : t;
        return t;
    }
    const Qe = {
        ratio: Fi,
        contain: As,
        cover: Lo
    };
    function rt(t, e, i = 0, s = !1) {
        e = k(e);
        const { length: n } = e;
        return n ? (t = bt(t) ? kt(t) : t === "next" ? i + 1 : t === "previous" ? i - 1 : t === "last" ? n - 1 : e.indexOf(H(t)), s ? Z(t, 0, n - 1) : (t %= n, t < 0 ? t + n : t)) : -1;
    }
    function dt(t) {
        const e = Object.create(null);
        return (i)=>e[i] || (e[i] = t(i));
    }
    function p(t, e, i) {
        var s;
        if (Tt(e)) {
            for(const n in e)p(t, n, e[n]);
            return;
        }
        if (Y(i)) return (s = H(t)) == null ? void 0 : s.getAttribute(e);
        for (const n of k(t))it(i) && (i = i.call(n, p(n, e))), i === null ? ke(n, e) : n.setAttribute(e, i);
    }
    function $t(t, e) {
        return k(t).some((i)=>i.hasAttribute(e));
    }
    function ke(t, e) {
        k(t).forEach((i)=>i.removeAttribute(e));
    }
    function tt(t, e) {
        for (const i of [
            e,
            `data-${e}`
        ])if ($t(t, i)) return p(t, i);
    }
    const Wo = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };
    function Hi(t) {
        return k(t).some((e)=>Wo[e.tagName.toLowerCase()]);
    }
    function R(t) {
        return k(t).some((e)=>e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }
    const Se = "input,select,textarea,button";
    function Li(t) {
        return k(t).some((e)=>C(e, Se));
    }
    const Ie = `${Se},a[href],[tabindex]`;
    function ti(t) {
        return C(t, Ie);
    }
    function O(t) {
        var e;
        return (e = H(t)) == null ? void 0 : e.parentElement;
    }
    function Ce(t, e) {
        return k(t).filter((i)=>C(i, e));
    }
    function C(t, e) {
        return k(t).some((i)=>i.matches(e));
    }
    function U(t, e) {
        return ee(t) ? t.closest(ot(e, ">") ? e.slice(1) : e) : k(t).map((i)=>U(i, e)).filter(Boolean);
    }
    function B(t, e) {
        return D(e) ? !!U(t, e) : H(e).contains(H(t));
    }
    function re(t, e) {
        const i = [];
        for(; t = O(t);)(!e || C(t, e)) && i.push(t);
        return i;
    }
    function T(t, e) {
        t = H(t);
        const i = t ? Qt(t.children) : [];
        return e ? Ce(i, e) : i;
    }
    function ae(t, e) {
        return e ? k(t).indexOf(H(e)) : T(O(t)).indexOf(t);
    }
    function le(t) {
        return t = H(t), t && [
            "origin",
            "pathname",
            "search"
        ].every((e)=>t[e] === location[e]);
    }
    function Wi(t) {
        if (le(t)) {
            t = H(t);
            const e = decodeURIComponent(t.hash).substring(1);
            return document.getElementById(e) || document.getElementsByName(e)[0];
        }
    }
    function at(t, e) {
        return Ri(t, Ds(t, e));
    }
    function Te(t, e) {
        return Ee(t, Ds(t, e));
    }
    function Ri(t, e) {
        return H(Bs(t, H(e), "querySelector"));
    }
    function Ee(t, e) {
        return k(Bs(t, H(e), "querySelectorAll"));
    }
    const Ro = /(^|[^\\],)\s*[!>+~-]/, Os = dt((t)=>t.match(Ro));
    function Ds(t, e = document) {
        return D(t) && Os(t) || Ge(e) ? e : e.ownerDocument;
    }
    const jo = /([!>+~-])(?=\s+[!>+~-]|\s*$)/g, qo = dt((t)=>t.replace(jo, "$1 *"));
    function Bs(t, e = document, i) {
        if (!t || !D(t)) return t;
        if (t = qo(t), Os(t)) {
            const s = Vo(t);
            t = "";
            for (let n of s){
                let o = e;
                if (n[0] === "!") {
                    const r = n.substr(1).trim().split(" ");
                    if (o = U(O(e), r[0]), n = r.slice(1).join(" ").trim(), !n.length && s.length === 1) return o;
                }
                if (n[0] === "-") {
                    const r = n.substr(1).trim().split(" "), a = (o || e).previousElementSibling;
                    o = C(a, n.substr(1)) ? a : null, n = r.slice(1).join(" ");
                }
                o && (t += `${t ? "," : ""}${Yo(o)} ${n}`);
            }
            e = document;
        }
        try {
            return e[i](t);
        } catch  {
            return null;
        }
    }
    const Uo = /.*?[^\\](?:,|$)/g, Vo = dt((t)=>t.match(Uo).map((e)=>e.replace(/,$/, "").trim()));
    function Yo(t) {
        const e = [];
        for(; t.parentNode;){
            const i = p(t, "id");
            if (i) {
                e.unshift(`#${ji(i)}`);
                break;
            } else {
                let { tagName: s } = t;
                s !== "HTML" && (s += `:nth-child(${ae(t) + 1})`), e.unshift(s), t = t.parentNode;
            }
        }
        return e.join(" > ");
    }
    function ji(t) {
        return D(t) ? CSS.escape(t) : "";
    }
    function $(...t) {
        let [e, i, s, n, o = !1] = qi(t);
        n.length > 1 && (n = Xo(n)), o != null && o.self && (n = Jo(n)), s && (n = Go(s, n));
        for (const r of i)for (const a of e)a.addEventListener(r, n, o);
        return ()=>Bt(e, i, n, o);
    }
    function Bt(...t) {
        let [e, i, , s, n = !1] = qi(t);
        for (const o of i)for (const r of e)r.removeEventListener(o, s, n);
    }
    function j(...t) {
        const [e, i, s, n, o = !1, r] = qi(t), a = $(e, i, s, (l)=>{
            const h = !r || r(l);
            h && (a(), n(l, h));
        }, o);
        return a;
    }
    function v(t, e, i) {
        return Ui(t).every((s)=>s.dispatchEvent(Mt(e, !0, !0, i)));
    }
    function Mt(t, e = !0, i = !1, s) {
        return D(t) && (t = new CustomEvent(t, {
            bubbles: e,
            cancelable: i,
            detail: s
        })), t;
    }
    function qi(t) {
        return t[0] = Ui(t[0]), D(t[1]) && (t[1] = t[1].split(" ")), it(t[2]) && t.splice(2, 0, !1), t;
    }
    function Go(t, e) {
        return (i)=>{
            const s = t[0] === ">" ? Ee(t, i.currentTarget).reverse().filter((n)=>B(i.target, n))[0] : U(i.target, t);
            s && (i.current = s, e.call(this, i), delete i.current);
        };
    }
    function Xo(t) {
        return (e)=>Q(e.detail) ? t(e, ...e.detail) : t(e);
    }
    function Jo(t) {
        return function(e) {
            if (e.target === e.currentTarget || e.target === e.current) return t.call(null, e);
        };
    }
    function Ms(t) {
        return t && "addEventListener" in t;
    }
    function Ko(t) {
        return Ms(t) ? t : H(t);
    }
    function Ui(t) {
        return Q(t) ? t.map(Ko).filter(Boolean) : D(t) ? Ee(t) : Ms(t) ? [
            t
        ] : k(t);
    }
    function St(t) {
        return t.pointerType === "touch" || !!t.touches;
    }
    function he(t) {
        var e, i;
        const { clientX: s, clientY: n } = ((e = t.touches) == null ? void 0 : e[0]) || ((i = t.changedTouches) == null ? void 0 : i[0]) || t;
        return {
            x: s,
            y: n
        };
    }
    const Zo = {
        "animation-iteration-count": !0,
        "column-count": !0,
        "fill-opacity": !0,
        "flex-grow": !0,
        "flex-shrink": !0,
        "font-weight": !0,
        "line-height": !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        "stroke-dasharray": !0,
        "stroke-dashoffset": !0,
        widows: !0,
        "z-index": !0,
        zoom: !0
    };
    function c(t, e, i, s) {
        const n = k(t);
        for (const o of n)if (D(e)) {
            if (e = ei(e), Y(i)) return getComputedStyle(o).getPropertyValue(e);
            o.style.setProperty(e, bt(i) && !Zo[e] ? `${i}px` : i || se(i) ? i : "", s);
        } else if (Q(e)) {
            const r = {};
            for (const a of e)r[a] = c(o, a);
            return r;
        } else Tt(e) && (s = i, Et(e, (r, a)=>c(o, a, r, s)));
        return n[0];
    }
    const ei = dt((t)=>Qo(t));
    function Qo(t) {
        if (ot(t, "--")) return t;
        t = Kt(t);
        const { style: e } = document.documentElement;
        if (t in e) return t;
        for (const i of [
            "webkit",
            "moz"
        ]){
            const s = `-${i}-${t}`;
            if (s in e) return s;
        }
    }
    function y(t, ...e) {
        Ns(t, e, "add");
    }
    function M(t, ...e) {
        Ns(t, e, "remove");
    }
    function Vi(t, e) {
        p(t, "class", (i)=>(i || "").replace(new RegExp(`\\b${e}\\b\\s?`, "g"), ""));
    }
    function Yi(t, ...e) {
        e[0] && M(t, e[0]), e[1] && y(t, e[1]);
    }
    function P(t, e) {
        return [e] = Gi(e), !!e && k(t).some((i)=>i.classList.contains(e));
    }
    function q(t, e, i) {
        const s = Gi(e);
        Y(i) || (i = !!i);
        for (const n of k(t))for (const o of s)n.classList.toggle(o, i);
    }
    function Ns(t, e, i) {
        e = e.reduce((s, n)=>s.concat(Gi(n)), []);
        for (const s of k(t))s.classList[i](...e);
    }
    function Gi(t) {
        return String(t).split(/[ ,]/).filter(Boolean);
    }
    function tr(t, e, i = 400, s = "linear") {
        return i = Math.round(i), Promise.all(k(t).map((n)=>new Promise((o, r)=>{
                for(const l in e){
                    const h = c(n, l);
                    h === "" && c(n, l, h);
                }
                const a = setTimeout(()=>v(n, "transitionend"), i);
                j(n, "transitionend transitioncanceled", ({ type: l })=>{
                    clearTimeout(a), M(n, "uk-transition"), c(n, {
                        transitionProperty: "",
                        transitionDuration: "",
                        transitionTimingFunction: ""
                    }), l === "transitioncanceled" ? r() : o(n);
                }, {
                    self: !0
                }), y(n, "uk-transition"), c(n, {
                    transitionProperty: Object.keys(e).map(ei).join(","),
                    transitionDuration: `${i}ms`,
                    transitionTimingFunction: s,
                    ...e
                });
            })));
    }
    const E = {
        start: tr,
        async stop (t) {
            v(t, "transitionend"), await Promise.resolve();
        },
        async cancel (t) {
            v(t, "transitioncanceled"), await Promise.resolve();
        },
        inProgress (t) {
            return P(t, "uk-transition");
        }
    }, Pe = "uk-animation-";
    function zs(t, e, i = 200, s, n) {
        return Promise.all(k(t).map((o)=>new Promise((r, a)=>{
                v(o, "animationcanceled");
                const l = setTimeout(()=>v(o, "animationend"), i);
                j(o, "animationend animationcanceled", ({ type: h })=>{
                    clearTimeout(l), h === "animationcanceled" ? a() : r(o), c(o, "animationDuration", ""), Vi(o, `${Pe}\\S*`);
                }, {
                    self: !0
                }), c(o, "animationDuration", `${i}ms`), y(o, e, Pe + (n ? "leave" : "enter")), ot(e, Pe) && (s && y(o, `uk-transform-origin-${s}`), n && y(o, `${Pe}reverse`));
            })));
    }
    const er = new RegExp(`${Pe}(enter|leave)`), gt = {
        in: zs,
        out (t, e, i, s) {
            return zs(t, e, i, s, !0);
        },
        inProgress (t) {
            return er.test(p(t, "class"));
        },
        cancel (t) {
            v(t, "animationcanceled");
        }
    };
    function ir(t) {
        if (document.readyState !== "loading") {
            t();
            return;
        }
        j(document, "DOMContentLoaded", t);
    }
    function G(t, ...e) {
        return e.some((i)=>{
            var s;
            return ((s = t == null ? void 0 : t.tagName) == null ? void 0 : s.toLowerCase()) === i.toLowerCase();
        });
    }
    function Xi(t) {
        return t = w(t), t.innerHTML = "", t;
    }
    function Nt(t, e) {
        return Y(e) ? w(t).innerHTML : L(Xi(t), e);
    }
    const sr = ni("prepend"), L = ni("append"), ii = ni("before"), si = ni("after");
    function ni(t) {
        return function(e, i) {
            var s;
            const n = k(D(i) ? zt(i) : i);
            return (s = w(e)) == null || s[t](...n), Fs(n);
        };
    }
    function lt(t) {
        k(t).forEach((e)=>e.remove());
    }
    function oi(t, e) {
        for(e = H(ii(t, e)); e.firstChild;)e = e.firstChild;
        return L(e, t), e;
    }
    function Ji(t, e) {
        return k(k(t).map((i)=>i.hasChildNodes() ? oi(Qt(i.childNodes), e) : L(i, e)));
    }
    function _e(t) {
        k(t).map(O).filter((e, i, s)=>s.indexOf(e) === i).forEach((e)=>e.replaceWith(...e.childNodes));
    }
    const nr = /^\s*<(\w+|!)[^>]*>/, or = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;
    function zt(t) {
        const e = or.exec(t);
        if (e) return document.createElement(e[1]);
        const i = document.createElement("div");
        return nr.test(t) ? i.insertAdjacentHTML("beforeend", t.trim()) : i.textContent = t, Fs(i.childNodes);
    }
    function Fs(t) {
        return t.length > 1 ? t : t[0];
    }
    function It(t, e) {
        if (ee(t)) for(e(t), t = t.firstElementChild; t;){
            const i = t.nextElementSibling;
            It(t, e), t = i;
        }
    }
    function w(t, e) {
        return Hs(t) ? H(zt(t)) : Ri(t, e);
    }
    function z(t, e) {
        return Hs(t) ? k(zt(t)) : Ee(t, e);
    }
    function Hs(t) {
        return D(t) && ot(t.trim(), "<");
    }
    const Ft = {
        width: [
            "left",
            "right"
        ],
        height: [
            "top",
            "bottom"
        ]
    };
    function b(t) {
        const e = ee(t) ? H(t).getBoundingClientRect() : {
            height: et(t),
            width: Ae(t),
            top: 0,
            left: 0
        };
        return {
            height: e.height,
            width: e.width,
            top: e.top,
            left: e.left,
            bottom: e.top + e.height,
            right: e.left + e.width
        };
    }
    function _(t, e) {
        e && c(t, {
            left: 0,
            top: 0
        });
        const i = b(t);
        if (t) {
            const { scrollY: s, scrollX: n } = ne(t), o = {
                height: s,
                width: n
            };
            for(const r in Ft)for (const a of Ft[r])i[a] += o[r];
        }
        if (!e) return i;
        for (const s of [
            "left",
            "top"
        ])c(t, s, e[s] - i[s]);
    }
    function Ki(t) {
        let { top: e, left: i } = _(t);
        const { ownerDocument: { body: s, documentElement: n }, offsetParent: o } = H(t);
        let r = o || n;
        for(; r && (r === s || r === n) && c(r, "position") === "static";)r = r.parentNode;
        if (ee(r)) {
            const a = _(r);
            e -= a.top + x(c(r, "borderTopWidth")), i -= a.left + x(c(r, "borderLeftWidth"));
        }
        return {
            top: e - x(c(t, "marginTop")),
            left: i - x(c(t, "marginLeft"))
        };
    }
    function Ht(t) {
        t = H(t);
        const e = [
            t.offsetTop,
            t.offsetLeft
        ];
        for(; t = t.offsetParent;)if (e[0] += t.offsetTop + x(c(t, "borderTopWidth")), e[1] += t.offsetLeft + x(c(t, "borderLeftWidth")), c(t, "position") === "fixed") {
            const i = ne(t);
            return e[0] += i.scrollY, e[1] += i.scrollX, e;
        }
        return e;
    }
    const et = Ls("height"), Ae = Ls("width");
    function Ls(t) {
        const e = Ct(t);
        return (i, s)=>{
            if (Y(s)) {
                if (te(i)) return i[`inner${e}`];
                if (Ge(i)) {
                    const n = i.documentElement;
                    return Math.max(n[`offset${e}`], n[`scroll${e}`]);
                }
                return i = H(i), s = c(i, t), s = s === "auto" ? i[`offset${e}`] : x(s) || 0, s - ce(i, t);
            } else return c(i, t, !s && s !== 0 ? "" : +s + ce(i, t) + "px");
        };
    }
    function ce(t, e, i = "border-box") {
        return c(t, "boxSizing") === i ? Dt(Ft[e].map(Ct), (s)=>x(c(t, `padding${s}`)) + x(c(t, `border${s}Width`))) : 0;
    }
    function ri(t) {
        for(const e in Ft)for(const i in Ft[e])if (Ft[e][i] === t) return Ft[e][1 - i];
        return t;
    }
    function ht(t, e = "width", i = window, s = !1) {
        return D(t) ? Dt(ar(t), (n)=>{
            const o = hr(n);
            return o ? cr(o === "vh" ? ur() : o === "vw" ? Ae(ne(i)) : s ? i[`offset${Ct(e)}`] : b(i)[e], n) : n;
        }) : x(t);
    }
    const rr = /-?\d+(?:\.\d+)?(?:v[wh]|%|px)?/g, ar = dt((t)=>t.toString().replace(/\s/g, "").match(rr) || []), lr = /(?:v[hw]|%)$/, hr = dt((t)=>(t.match(lr) || [])[0]);
    function cr(t, e) {
        return t * x(e) / 100;
    }
    let Oe, ue;
    function ur() {
        return Oe || (ue || (ue = w("<div>"), c(ue, {
            height: "100vh",
            position: "fixed"
        }), $(window, "resize", ()=>Oe = null)), L(document.body, ue), Oe = ue.clientHeight, lt(ue), Oe);
    }
    const Lt = typeof window < "u", X = Lt && document.dir === "rtl", Wt = Lt && "ontouchstart" in window, fe = Lt && window.PointerEvent, mt = fe ? "pointerdown" : Wt ? "touchstart" : "mousedown", ai = fe ? "pointermove" : Wt ? "touchmove" : "mousemove", Pt = fe ? "pointerup" : Wt ? "touchend" : "mouseup", Rt = fe ? "pointerenter" : Wt ? "" : "mouseenter", de = fe ? "pointerleave" : Wt ? "" : "mouseleave", li = fe ? "pointercancel" : "touchcancel", J = {
        reads: [],
        writes: [],
        read (t) {
            return this.reads.push(t), Qi(), t;
        },
        write (t) {
            return this.writes.push(t), Qi(), t;
        },
        clear (t) {
            Rs(this.reads, t), Rs(this.writes, t);
        },
        flush: Zi
    };
    function Zi(t) {
        Ws(J.reads), Ws(J.writes.splice(0)), J.scheduled = !1, (J.reads.length || J.writes.length) && Qi(t + 1);
    }
    const fr = 4;
    function Qi(t) {
        J.scheduled || (J.scheduled = !0, t && t < fr ? Promise.resolve().then(()=>Zi(t)) : requestAnimationFrame(()=>Zi(1)));
    }
    function Ws(t) {
        let e;
        for(; e = t.shift();)try {
            e();
        } catch (i) {
            console.error(i);
        }
    }
    function Rs(t, e) {
        const i = t.indexOf(e);
        return ~i && t.splice(i, 1);
    }
    function ts() {}
    ts.prototype = {
        positions: [],
        init () {
            this.positions = [];
            let t;
            this.unbind = $(document, "mousemove", (e)=>t = he(e)), this.interval = setInterval(()=>{
                t && (this.positions.push(t), this.positions.length > 5 && this.positions.shift());
            }, 50);
        },
        cancel () {
            var t;
            (t = this.unbind) == null || t.call(this), clearInterval(this.interval);
        },
        movesTo (t) {
            if (this.positions.length < 2) return !1;
            const e = t.getBoundingClientRect(), { left: i, right: s, top: n, bottom: o } = e, [r] = this.positions, a = oe(this.positions), l = [
                r,
                a
            ];
            return Ze(a, e) ? !1 : [
                [
                    {
                        x: i,
                        y: n
                    },
                    {
                        x: s,
                        y: o
                    }
                ],
                [
                    {
                        x: i,
                        y: o
                    },
                    {
                        x: s,
                        y: n
                    }
                ]
            ].some((u)=>{
                const f = dr(l, u);
                return f && Ze(f, e);
            });
        }
    };
    function dr([{ x: t, y: e }, { x: i, y: s }], [{ x: n, y: o }, { x: r, y: a }]) {
        const l = (a - o) * (i - t) - (r - n) * (s - e);
        if (l === 0) return !1;
        const h = ((r - n) * (e - o) - (a - o) * (t - n)) / l;
        return h < 0 ? !1 : {
            x: t + h * (i - t),
            y: e + h * (s - e)
        };
    }
    function js(t, e, i = {}, { intersecting: s = !0 } = {}) {
        const n = new IntersectionObserver(s ? (o, r)=>{
            o.some((a)=>a.isIntersecting) && e(o, r);
        } : e, i);
        for (const o of k(t))n.observe(o);
        return n;
    }
    const pr = Lt && window.ResizeObserver;
    function hi(t, e, i = {
        box: "border-box"
    }) {
        if (pr) return Us(ResizeObserver, t, e, i);
        const s = [
            $(window, "load resize", e),
            $(document, "loadedmetadata load", e, !0)
        ];
        return {
            disconnect: ()=>s.map((n)=>n())
        };
    }
    function es(t) {
        return {
            disconnect: $([
                window,
                window.visualViewport
            ], "resize", t)
        };
    }
    function qs(t, e, i) {
        return Us(MutationObserver, t, e, i);
    }
    function Us(t, e, i, s) {
        const n = new t(i);
        for (const o of k(e))n.observe(o, s);
        return n;
    }
    function Vs(t) {
        if (ui(t) && is(t, {
            func: "playVideo",
            method: "play"
        }), ci(t)) try {
            t.play().catch(S);
        } catch  {}
    }
    function Ys(t) {
        ui(t) && is(t, {
            func: "pauseVideo",
            method: "pause"
        }), ci(t) && t.pause();
    }
    function Gs(t) {
        ui(t) && is(t, {
            func: "mute",
            method: "setVolume",
            value: 0
        }), ci(t) && (t.muted = !0);
    }
    function Xs(t) {
        return ci(t) || ui(t);
    }
    function ci(t) {
        return G(t, "video");
    }
    function ui(t) {
        return G(t, "iframe") && (Js(t) || Ks(t));
    }
    function Js(t) {
        return !!t.src.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/);
    }
    function Ks(t) {
        return !!t.src.match(/vimeo\.com\/video\/.*/);
    }
    async function is(t, e) {
        await mr(t), Zs(t, e);
    }
    function Zs(t, e) {
        try {
            t.contentWindow.postMessage(JSON.stringify({
                event: "command",
                ...e
            }), "*");
        } catch  {}
    }
    const ss = "_ukPlayer";
    let gr = 0;
    function mr(t) {
        if (t[ss]) return t[ss];
        const e = Js(t), i = Ks(t), s = ++gr;
        let n;
        return t[ss] = new Promise((o)=>{
            e && j(t, "load", ()=>{
                const r = ()=>Zs(t, {
                        event: "listening",
                        id: s
                    });
                n = setInterval(r, 100), r();
            }), j(window, "message", o, !1, ({ data: r })=>{
                try {
                    return r = JSON.parse(r), e && (r == null ? void 0 : r.id) === s && r.event === "onReady" || i && Number(r == null ? void 0 : r.player_id) === s;
                } catch  {}
            }), t.src = `${t.src}${m(t.src, "?") ? "&" : "?"}${e ? "enablejsapi=1" : `api=1&player_id=${s}`}`;
        }).then(()=>clearInterval(n));
    }
    function ns(t, e = 0, i = 0) {
        return R(t) ? zi(...jt(t).map((s)=>{
            const { top: n, left: o, bottom: r, right: a } = ct(s);
            return {
                top: n - e,
                left: o - i,
                bottom: r + e,
                right: a + i
            };
        }).concat(_(t))) : !1;
    }
    function Qs(t, { offset: e = 0 } = {}) {
        const i = R(t) ? pe(t, !1, [
            "hidden"
        ]) : [];
        return i.reduce((r, a, l)=>{
            const { scrollTop: h, scrollHeight: u, offsetHeight: f } = a, d = ct(a), g = u - d.height, { height: A, top: N } = i[l - 1] ? ct(i[l - 1]) : _(t);
            let F = Math.ceil(N - d.top - e + h);
            return e > 0 && f < A + e ? F += e : e = 0, F > g ? (e -= F - g, F = g) : F < 0 && (e -= F, F = 0), ()=>s(a, F - h).then(r);
        }, ()=>Promise.resolve())();
        function s(r, a) {
            return new Promise((l)=>{
                const h = r.scrollTop, u = n(Math.abs(a)), f = Date.now();
                (function d() {
                    const g = o(Z((Date.now() - f) / u));
                    r.scrollTop = h + a * g, g === 1 ? l() : requestAnimationFrame(d);
                })();
            });
        }
        function n(r) {
            return 40 * Math.pow(r, .375);
        }
        function o(r) {
            return .5 * (1 - Math.cos(Math.PI * r));
        }
    }
    function os(t, e = 0, i = 0) {
        if (!R(t)) return 0;
        const s = _t(t, !0), { scrollHeight: n, scrollTop: o } = s, { height: r } = ct(s), a = n - r, l = Ht(t)[0] - Ht(s)[0], h = Math.max(0, l - r + e), u = Math.min(a, l + t.offsetHeight - i);
        return Z((o - h) / (u - h));
    }
    function pe(t, e = !1, i = []) {
        const s = tn(t);
        let n = re(t).reverse();
        n = n.slice(n.indexOf(s) + 1);
        const o = xt(n, (r)=>c(r, "position") === "fixed");
        return ~o && (n = n.slice(o)), [
            s
        ].concat(n.filter((r)=>c(r, "overflow").split(" ").some((a)=>m([
                    "auto",
                    "scroll",
                    ...i
                ], a)) && (!e || r.scrollHeight > ct(r).height))).reverse();
    }
    function _t(...t) {
        return pe(...t)[0];
    }
    function jt(t) {
        return pe(t, !1, [
            "hidden",
            "clip"
        ]);
    }
    function ct(t) {
        const e = ne(t), { visualViewport: i, document: { documentElement: s } } = e;
        let n = t === tn(t) ? e : t;
        if (te(n) && i) {
            let { height: r, width: a, scale: l, pageTop: h, pageLeft: u } = i;
            return r = Math.round(r * l), a = Math.round(a * l), {
                height: r,
                width: a,
                top: h,
                left: u,
                bottom: h + r,
                right: u + a
            };
        }
        let o = _(n);
        if (c(n, "display") === "inline") return o;
        for (let [r, a, l, h] of [
            [
                "width",
                "x",
                "left",
                "right"
            ],
            [
                "height",
                "y",
                "top",
                "bottom"
            ]
        ]){
            te(n) ? n = s : o[l] += x(c(n, `border-${l}-width`));
            const u = o[r] % 1;
            o[r] = o[a] = n[`client${Ct(r)}`] - (u ? u < .5 ? -u : 1 - u : 0), o[h] = o[r] + o[l];
        }
        return o;
    }
    function tn(t) {
        return ne(t).document.scrollingElement;
    }
    const ut = [
        [
            "width",
            "x",
            "left",
            "right"
        ],
        [
            "height",
            "y",
            "top",
            "bottom"
        ]
    ];
    function en(t, e, i) {
        i = {
            attach: {
                element: [
                    "left",
                    "top"
                ],
                target: [
                    "left",
                    "top"
                ],
                ...i.attach
            },
            offset: [
                0,
                0
            ],
            placement: [],
            ...i
        }, Q(e) || (e = [
            e,
            e
        ]), _(t, sn(t, e, i));
    }
    function sn(t, e, i) {
        const s = nn(t, e, i), { boundary: n, viewportOffset: o = 0, placement: r } = i;
        let a = s;
        for (const [l, [h, , u, f]] of Object.entries(ut)){
            const d = vr(t, e[l], o, n, l);
            if (fi(s, d, l)) continue;
            let g = 0;
            if (r[l] === "flip") {
                const A = i.attach.target[l];
                if (A === f && s[f] <= d[f] || A === u && s[u] >= d[u]) continue;
                g = br(t, e, i, l)[u] - s[u];
                const N = wr(t, e[l], o, l);
                if (!fi(rs(s, g, l), N, l)) {
                    if (fi(s, N, l)) continue;
                    if (i.recursion) return !1;
                    const F = $r(t, e, i);
                    if (F && fi(F, N, 1 - l)) return F;
                    continue;
                }
            } else if (r[l] === "shift") {
                const A = _(e[l]), { offset: N } = i;
                g = Z(Z(s[u], d[u], d[f] - s[h]), A[u] - s[h] + N[l], A[f] - N[l]) - s[u];
            }
            a = rs(a, g, l);
        }
        return a;
    }
    function nn(t, e, i) {
        let { attach: s, offset: n } = {
            attach: {
                element: [
                    "left",
                    "top"
                ],
                target: [
                    "left",
                    "top"
                ],
                ...i.attach
            },
            offset: [
                0,
                0
            ],
            ...i
        }, o = _(t);
        for (const [r, [a, , l, h]] of Object.entries(ut)){
            const u = s.target[r] === s.element[r] ? ct(e[r]) : _(e[r]);
            o = rs(o, u[l] - o[l] + on(s.target[r], h, u[a]) - on(s.element[r], h, o[a]) + +n[r], r);
        }
        return o;
    }
    function rs(t, e, i) {
        const [, s, n, o] = ut[i], r = {
            ...t
        };
        return r[n] = t[s] = t[n] + e, r[o] += e, r;
    }
    function on(t, e, i) {
        return t === "center" ? i / 2 : t === e ? i : 0;
    }
    function vr(t, e, i, s, n) {
        let o = an(...rn(t, e).map(ct));
        return i && (o[ut[n][2]] += i, o[ut[n][3]] -= i), s && (o = an(o, _(Q(s) ? s[n] : s))), o;
    }
    function wr(t, e, i, s) {
        const [n, o, r, a] = ut[s], [l] = rn(t, e), h = ct(l);
        return [
            "auto",
            "scroll"
        ].includes(c(l, `overflow-${o}`)) && (h[r] -= l[`scroll${Ct(r)}`], h[a] = h[r] + l[`scroll${Ct(n)}`]), h[r] += i, h[a] -= i, h;
    }
    function rn(t, e) {
        return jt(e).filter((i)=>B(t, i));
    }
    function an(...t) {
        let e = {};
        for (const i of t)for (const [, , s, n] of ut)e[s] = Math.max(e[s] || 0, i[s]), e[n] = Math.min(...[
            e[n],
            i[n]
        ].filter(Boolean));
        return e;
    }
    function fi(t, e, i) {
        const [, , s, n] = ut[i];
        return t[s] >= e[s] && t[n] <= e[n];
    }
    function br(t, e, { offset: i, attach: s }, n) {
        return nn(t, e, {
            attach: {
                element: ln(s.element, n),
                target: ln(s.target, n)
            },
            offset: xr(i, n)
        });
    }
    function $r(t, e, i) {
        return sn(t, e, {
            ...i,
            attach: {
                element: i.attach.element.map(hn).reverse(),
                target: i.attach.target.map(hn).reverse()
            },
            offset: i.offset.reverse(),
            placement: i.placement.reverse(),
            recursion: !0
        });
    }
    function ln(t, e) {
        const i = [
            ...t
        ], s = ut[e].indexOf(t[e]);
        return ~s && (i[e] = ut[e][1 - s % 2 + 2]), i;
    }
    function hn(t) {
        for(let e = 0; e < ut.length; e++){
            const i = ut[e].indexOf(t);
            if (~i) return ut[1 - e][i % 2 + 2];
        }
    }
    function xr(t, e) {
        return t = [
            ...t
        ], t[e] *= -1, t;
    }
    var yr = Object.freeze({
        __proto__: null,
        $: w,
        $$: z,
        Animation: gt,
        Dimensions: Qe,
        MouseTracker: ts,
        Transition: E,
        addClass: y,
        after: si,
        append: L,
        apply: It,
        assign: wt,
        attr: p,
        before: ii,
        boxModelAdjust: ce,
        camelize: xe,
        children: T,
        clamp: Z,
        closest: U,
        createEvent: Mt,
        css: c,
        data: tt,
        dimensions: b,
        each: Et,
        empty: Xi,
        endsWith: Zt,
        escape: ji,
        fastdom: J,
        filter: Ce,
        find: Ri,
        findAll: Ee,
        findIndex: xt,
        flipPosition: ri,
        fragment: zt,
        getEventPos: he,
        getIndex: rt,
        getTargetedElement: Wi,
        hasAttr: $t,
        hasClass: P,
        hasOwn: vt,
        hasTouch: Wt,
        height: et,
        html: Nt,
        hyphenate: Kt,
        inBrowser: Lt,
        includes: m,
        index: ae,
        intersectRect: zi,
        isArray: Q,
        isBoolean: ie,
        isDocument: Ge,
        isElement: ee,
        isEmpty: ye,
        isEqual: Je,
        isFocusable: ti,
        isFunction: it,
        isInView: ns,
        isInput: Li,
        isNode: Xe,
        isNumber: se,
        isNumeric: bt,
        isObject: Tt,
        isPlainObject: yt,
        isRtl: X,
        isSameSiteAnchor: le,
        isString: D,
        isTag: G,
        isTouch: St,
        isUndefined: Y,
        isVideo: Xs,
        isVisible: R,
        isVoidElement: Hi,
        isWindow: te,
        last: oe,
        matches: C,
        memoize: dt,
        mute: Gs,
        noop: S,
        observeIntersection: js,
        observeMutation: qs,
        observeResize: hi,
        observeViewportResize: es,
        off: Bt,
        offset: _,
        offsetPosition: Ht,
        offsetViewport: ct,
        on: $,
        once: j,
        overflowParents: jt,
        parent: O,
        parents: re,
        pause: Ys,
        pick: Ni,
        play: Vs,
        pointInRect: Ze,
        pointerCancel: li,
        pointerDown: mt,
        pointerEnter: Rt,
        pointerLeave: de,
        pointerMove: ai,
        pointerUp: Pt,
        position: Ki,
        positionAt: en,
        prepend: sr,
        propName: ei,
        query: at,
        queryAll: Te,
        ready: ir,
        remove: lt,
        removeAttr: ke,
        removeClass: M,
        removeClasses: Vi,
        replaceClass: Yi,
        scrollIntoView: Qs,
        scrollParent: _t,
        scrollParents: pe,
        scrolledOver: os,
        selFocusable: Ie,
        selInput: Se,
        sortBy: Ke,
        startsWith: ot,
        sumBy: Dt,
        swap: Mi,
        toArray: Qt,
        toBoolean: Bi,
        toEventTargets: Ui,
        toFloat: x,
        toNode: H,
        toNodes: k,
        toNumber: kt,
        toPx: ht,
        toWindow: ne,
        toggleClass: q,
        trigger: v,
        ucfirst: Ct,
        uniqueBy: _s,
        unwrap: _e,
        width: Ae,
        within: B,
        wrapAll: oi,
        wrapInner: Ji
    });
    function kr(t) {
        t._watches = [];
        for (const e of t.$options.watch || [])for (const [i, s] of Object.entries(e))cn(t, s, i);
        t._initial = !0;
    }
    function cn(t, e, i) {
        t._watches.push({
            name: i,
            ...yt(e) ? e : {
                handler: e
            }
        });
    }
    function Sr(t, e) {
        for (const { name: i, handler: s, immediate: n = !0 } of t._watches)(t._initial && n || vt(e, i) && !Je(e[i], t[i])) && s.call(t, t[i], e[i]);
        t._initial = !1;
    }
    function Ir(t) {
        t._data = {}, t._updates = [
            ...t.$options.update || []
        ];
    }
    function Cr(t, e) {
        t._updates.unshift(e);
    }
    function Tr(t) {
        delete t._data;
    }
    function di(t, e = "update") {
        t._connected && t._updates.length && (t._queued || (t._queued = new Set, J.read(()=>{
            t._connected && Er(t, t._queued), delete t._queued;
        })), t._queued.add(e.type || e));
    }
    function Er(t, e) {
        for (const { read: i, write: s, events: n = [] } of t._updates){
            if (!e.has("update") && !n.some((r)=>e.has(r))) continue;
            let o;
            i && (o = i.call(t, t._data, e), o && yt(o) && wt(t._data, o)), s && o !== !1 && J.write(()=>{
                t._connected && s.call(t, t._data, e);
            });
        }
    }
    function Pr(t) {
        const { computed: e } = t.$options;
        if (t._computed = {}, e) for(const i in e)un(t, i, e[i]);
    }
    function un(t, e, i) {
        t._hasComputed = !0, Object.defineProperty(t, e, {
            enumerable: !0,
            get () {
                const { _computed: s, $props: n, $el: o } = t;
                return vt(s, e) || (s[e] = (i.get || i).call(t, n, o)), s[e];
            },
            set (s) {
                const { _computed: n } = t;
                n[e] = i.set ? i.set.call(t, s) : s, Y(n[e]) && delete n[e];
            }
        });
    }
    function _r(t) {
        t._hasComputed && (Cr(t, {
            read: ()=>Sr(t, fn(t)),
            events: [
                "resize",
                "computed"
            ]
        }), Or(), De.add(t));
    }
    function Ar(t) {
        De == null || De.delete(t), fn(t);
    }
    function fn(t) {
        const e = {
            ...t._computed
        };
        return t._computed = {}, e;
    }
    let as, De;
    function Or() {
        as || (De = new Set, as = new MutationObserver(()=>{
            for (const t of De)di(t, "computed");
        }), as.observe(document, {
            childList: !0,
            subtree: !0
        }));
    }
    function Dr(t) {
        t._events = [];
        for (const e of t.$options.events || [])if (vt(e, "handler")) ls(t, e);
        else for(const i in e)ls(t, e[i], i);
    }
    function Br(t) {
        t._events.forEach((e)=>e()), delete t._events;
    }
    function ls(t, e, i) {
        let { name: s, el: n, handler: o, capture: r, passive: a, delegate: l, filter: h, self: u } = yt(e) ? e : {
            name: i,
            handler: e
        };
        if (n = it(n) ? n.call(t, t) : n || t.$el, Q(n)) {
            n.forEach((f)=>ls(t, {
                    ...e,
                    el: f
                }, i));
            return;
        }
        !n || h && !h.call(t) || t._events.push($(n, s, l ? D(l) ? l : l.call(t, t) : null, D(o) ? t[o] : o.bind(t), {
            passive: a,
            capture: r,
            self: u
        }));
    }
    function Mr(t) {
        t._observers = [];
        for (const e of t.$options.observe || [])if (vt(e, "handler")) pn(t, e);
        else for (const i of e)pn(t, i);
    }
    function dn(t, ...e) {
        t._observers.push(...e);
    }
    function Nr(t) {
        for (const e of t._observers)e.disconnect();
    }
    function pn(t, e) {
        let { observe: i, target: s = t.$el, handler: n, options: o, filter: r, args: a } = e;
        if (r && !r.call(t, t)) return;
        const l = `_observe${t._observers.length}`;
        it(s) && !vt(t, l) && un(t, l, ()=>s.call(t, t)), n = D(n) ? t[n] : n.bind(t), it(o) && (o = o.call(t, t));
        const h = vt(t, l) ? t[l] : s, u = i(h, n, o, a);
        it(s) && Q(t[l]) && u.unobserve && cn(t, {
            handler: zr(u),
            immediate: !1
        }, l), dn(t, u);
    }
    function zr(t) {
        return (e, i)=>{
            for (const s of i)!m(e, s) && t.unobserve(s);
            for (const s of e)!m(i, s) && t.observe(s);
        };
    }
    const V = {};
    V.events = V.watch = V.observe = V.created = V.beforeConnect = V.connected = V.beforeDisconnect = V.disconnected = V.destroy = hs, V.args = function(t, e) {
        return e !== !1 && hs(e || t);
    }, V.update = function(t, e) {
        return Ke(hs(t, it(e) ? {
            read: e
        } : e), "order");
    }, V.props = function(t, e) {
        if (Q(e)) {
            const i = {};
            for (const s of e)i[s] = String;
            e = i;
        }
        return V.methods(t, e);
    }, V.computed = V.methods = function(t, e) {
        return e ? t ? {
            ...t,
            ...e
        } : e : t;
    }, V.i18n = V.data = function(t, e, i) {
        return i ? gn(t, e, i) : e ? t ? function(s) {
            return gn(t, e, s);
        } : e : t;
    };
    function gn(t, e, i) {
        return V.computed(it(t) ? t.call(i, i) : t, it(e) ? e.call(i, i) : e);
    }
    function hs(t, e) {
        return t = t && !Q(t) ? [
            t
        ] : t, e ? t ? t.concat(e) : Q(e) ? e : [
            e
        ] : t;
    }
    function Fr(t, e) {
        return Y(e) ? t : e;
    }
    function Be(t, e, i) {
        const s = {};
        if (it(e) && (e = e.options), e.extends && (t = Be(t, e.extends, i)), e.mixins) for (const o of e.mixins)t = Be(t, o, i);
        for(const o in t)n(o);
        for(const o in e)vt(t, o) || n(o);
        function n(o) {
            s[o] = (V[o] || Fr)(t[o], e[o], i);
        }
        return s;
    }
    function Me(t, e = []) {
        try {
            return t ? ot(t, "{") ? JSON.parse(t) : e.length && !m(t, ":") ? {
                [e[0]]: t
            } : t.split(";").reduce((i, s)=>{
                const [n, o] = s.split(/:(.*)/);
                return n && !Y(o) && (i[n.trim()] = o.trim()), i;
            }, {}) : {};
        } catch  {
            return {};
        }
    }
    function cs(t, e) {
        return t === Boolean ? Bi(e) : t === Number ? kt(e) : t === "list" ? Hr(e) : t === Object && D(e) ? Me(e) : t ? t(e) : e;
    }
    function Hr(t) {
        return Q(t) ? t : D(t) ? t.split(/,(?![^(]*\))/).map((e)=>bt(e) ? kt(e) : Bi(e.trim())) : [
            t
        ];
    }
    function Lr(t) {
        const e = mn(t.$options);
        for(let s in e)Y(e[s]) || (t.$props[s] = e[s]);
        const i = [
            t.$options.computed,
            t.$options.methods
        ];
        for(let s in t.$props)s in e && Wr(i, s) && (t[s] = t.$props[s]);
    }
    function mn(t) {
        const e = {}, { args: i = [], props: s = {}, el: n, id: o } = t;
        if (!s) return e;
        for(const a in s){
            const l = Kt(a);
            let h = tt(n, l);
            Y(h) || (h = s[a] === Boolean && h === "" ? !0 : cs(s[a], h), !(l === "target" && ot(h, "_")) && (e[a] = h));
        }
        const r = Me(tt(n, o), i);
        for(const a in r){
            const l = xe(a);
            Y(s[l]) || (e[l] = cs(s[l], r[a]));
        }
        return e;
    }
    function Wr(t, e) {
        return t.every((i)=>!i || !vt(i, e));
    }
    function Rr(t) {
        const { $options: e, $props: i } = t, { id: s, props: n, el: o } = e;
        if (!n) return;
        const r = Object.keys(n), a = r.map((h)=>Kt(h)).concat(s), l = new MutationObserver((h)=>{
            const u = mn(e);
            h.some(({ attributeName: f })=>{
                const d = f.replace("data-", "");
                return (d === s ? r : [
                    xe(d),
                    xe(f)
                ]).some((g)=>!Y(u[g]) && u[g] !== i[g]);
            }) && t.$reset();
        });
        l.observe(o, {
            attributes: !0,
            attributeFilter: a.concat(a.map((h)=>`data-${h}`))
        }), dn(t, l);
    }
    function ge(t, e) {
        var i;
        (i = t.$options[e]) == null || i.forEach((s)=>s.call(t));
    }
    function us(t) {
        t._connected || (Lr(t), ge(t, "beforeConnect"), t._connected = !0, Dr(t), Ir(t), kr(t), Mr(t), Rr(t), _r(t), ge(t, "connected"), di(t));
    }
    function fs(t) {
        t._connected && (ge(t, "beforeDisconnect"), Br(t), Tr(t), Nr(t), Ar(t), ge(t, "disconnected"), t._connected = !1);
    }
    let jr = 0;
    function vn(t, e = {}) {
        e.data = Vr(e, t.constructor.options), t.$options = Be(t.constructor.options, e, t), t.$props = {}, t._uid = jr++, qr(t), Ur(t), Pr(t), ge(t, "created"), e.el && t.$mount(e.el);
    }
    function qr(t) {
        const { data: e = {} } = t.$options;
        for(const i in e)t.$props[i] = t[i] = e[i];
    }
    function Ur(t) {
        const { methods: e } = t.$options;
        if (e) for(const i in e)t[i] = e[i].bind(t);
    }
    function Vr({ data: t = {} }, { args: e = [], props: i = {} }) {
        Q(t) && (t = t.slice(0, e.length).reduce((s, n, o)=>(yt(n) ? wt(s, n) : s[e[o]] = n, s), {}));
        for(const s in t)Y(t[s]) ? delete t[s] : i[s] && (t[s] = cs(i[s], t[s]));
        return t;
    }
    const ft = function(t) {
        vn(this, t);
    };
    ft.util = yr, ft.options = {}, ft.version = "3.16.24";
    const Yr = "uk-", qt = "__uikit__", me = {};
    function wn(t, e) {
        var i;
        const s = Yr + Kt(t);
        if (!e) return yt(me[s]) && (me[s] = ft.extend(me[s])), me[s];
        t = xe(t), ft[t] = (o, r)=>Ne(t, o, r);
        const n = yt(e) ? {
            ...e
        } : e.options;
        return n.id = s, n.name = t, (i = n.install) == null || i.call(n, ft, n, t), ft._initialized && !n.functional && requestAnimationFrame(()=>Ne(t, `[${s}],[data-${s}]`)), me[s] = n;
    }
    function Ne(t, e, i, ...s) {
        const n = wn(t);
        return n.options.functional ? new n({
            data: yt(e) ? e : [
                e,
                i,
                ...s
            ]
        }) : e ? z(e).map(o)[0] : o();
        function o(r) {
            const a = pi(r, t);
            if (a) {
                if (i) a.$destroy();
                else return a;
            }
            return new n({
                el: r,
                data: i
            });
        }
    }
    function Ut(t) {
        return (t == null ? void 0 : t[qt]) || {};
    }
    function pi(t, e) {
        return Ut(t)[e];
    }
    function Gr(t, e) {
        t[qt] || (t[qt] = {}), t[qt][e.$options.name] = e;
    }
    function Xr(t, e) {
        var i;
        (i = t[qt]) == null || delete i[e.$options.name], ye(t[qt]) || delete t[qt];
    }
    function Jr(t) {
        t.component = wn, t.getComponents = Ut, t.getComponent = pi, t.update = bn, t.use = function(i) {
            if (!i.installed) return i.call(null, this), i.installed = !0, this;
        }, t.mixin = function(i, s) {
            s = (D(s) ? this.component(s) : s) || this, s.options = Be(s.options, i);
        }, t.extend = function(i) {
            i || (i = {});
            const s = this, n = function(r) {
                vn(this, r);
            };
            return n.prototype = Object.create(s.prototype), n.prototype.constructor = n, n.options = Be(s.options, i), n.super = s, n.extend = s.extend, n;
        };
        let e;
        Object.defineProperty(t, "container", {
            get () {
                return e || document.body;
            },
            set (i) {
                e = w(i);
            }
        });
    }
    function bn(t, e) {
        t = t ? H(t) : document.body;
        for (const i of re(t).reverse())$n(i, e);
        It(t, (i)=>$n(i, e));
    }
    function $n(t, e) {
        const i = Ut(t);
        for(const s in i)di(i[s], e);
    }
    function Kr(t) {
        t.prototype.$mount = function(e) {
            const i = this;
            Gr(e, i), i.$options.el = e, B(e, document) && us(i);
        }, t.prototype.$destroy = function(e = !1) {
            const i = this, { el: s } = i.$options;
            s && fs(i), ge(i, "destroy"), Xr(s, i), e && lt(i.$el);
        }, t.prototype.$create = Ne, t.prototype.$emit = function(e) {
            di(this, e);
        }, t.prototype.$update = function(e = this.$el, i) {
            bn(e, i);
        }, t.prototype.$reset = function() {
            fs(this), us(this);
        }, t.prototype.$getComponent = pi, Object.defineProperties(t.prototype, {
            $el: {
                get () {
                    return this.$options.el;
                }
            },
            $container: Object.getOwnPropertyDescriptor(t, "container")
        });
    }
    function At(t, e = t.$el, i = "") {
        if (e.id) return e.id;
        let s = `${t.$options.id}-${t._uid}${i}`;
        return w(`#${s}`) && (s = At(t, e, `${i}-2`)), s;
    }
    Jr(ft), Kr(ft);
    function Zr(t) {
        Lt && window.MutationObserver && (document.body ? requestAnimationFrame(()=>xn(t)) : new MutationObserver((e, i)=>{
            document.body && (xn(t), i.disconnect());
        }).observe(document.documentElement, {
            childList: !0
        }));
    }
    function xn(t) {
        v(document, "uikit:init", t), document.body && It(document.body, yn), new MutationObserver((e)=>e.forEach(Qr)).observe(document, {
            childList: !0,
            subtree: !0
        }), new MutationObserver((e)=>e.forEach(ta)).observe(document, {
            attributes: !0,
            subtree: !0
        }), t._initialized = !0;
    }
    function Qr({ addedNodes: t, removedNodes: e }) {
        for (const i of t)It(i, yn);
        for (const i of e)It(i, ea);
    }
    function ta({ target: t, attributeName: e }) {
        var i;
        const s = kn(e);
        if (s) {
            if ($t(t, e)) {
                Ne(s, t);
                return;
            }
            (i = pi(t, s)) == null || i.$destroy();
        }
    }
    function yn(t) {
        const e = Ut(t);
        for(const i in Ut(t))us(e[i]);
        for (const i of t.getAttributeNames()){
            const s = kn(i);
            s && Ne(s, t);
        }
    }
    function ea(t) {
        const e = Ut(t);
        for(const i in Ut(t))fs(e[i]);
    }
    function kn(t) {
        ot(t, "data-") && (t = t.slice(5));
        const e = me[t];
        return e && (yt(e) ? e : e.options).name;
    }
    var st = {
        connected () {
            y(this.$el, this.$options.id);
        }
    }, Vt = {
        props: {
            cls: Boolean,
            animation: "list",
            duration: Number,
            velocity: Number,
            origin: String,
            transition: String
        },
        data: {
            cls: !1,
            animation: [
                !1
            ],
            duration: 200,
            velocity: .2,
            origin: !1,
            transition: "ease",
            clsEnter: "uk-togglabe-enter",
            clsLeave: "uk-togglabe-leave"
        },
        computed: {
            hasAnimation ({ animation: t }) {
                return !!t[0];
            },
            hasTransition ({ animation: t }) {
                return [
                    "slide",
                    "reveal"
                ].some((e)=>ot(t[0], e));
            }
        },
        methods: {
            async toggleElement (t, e, i) {
                try {
                    return await Promise.all(k(t).map((s)=>{
                        const n = ie(e) ? e : !this.isToggled(s);
                        if (!v(s, `before${n ? "show" : "hide"}`, [
                            this
                        ])) return Promise.reject();
                        const o = (it(i) ? i : i === !1 || !this.hasAnimation ? ia : this.hasTransition ? sa : na)(s, n, this), r = n ? this.clsEnter : this.clsLeave;
                        y(s, r), v(s, n ? "show" : "hide", [
                            this
                        ]);
                        const a = ()=>{
                            M(s, r), v(s, n ? "shown" : "hidden", [
                                this
                            ]);
                        };
                        return o ? o.then(a, ()=>(M(s, r), Promise.reject())) : a();
                    })), !0;
                } catch  {
                    return !1;
                }
            },
            isToggled (t = this.$el) {
                return t = H(t), P(t, this.clsEnter) ? !0 : P(t, this.clsLeave) ? !1 : this.cls ? P(t, this.cls.split(" ")[0]) : R(t);
            },
            _toggle (t, e) {
                if (!t) return;
                e = !!e;
                let i;
                this.cls ? (i = m(this.cls, " ") || e !== P(t, this.cls), i && q(t, this.cls, m(this.cls, " ") ? void 0 : e)) : (i = e === t.hidden, i && (t.hidden = !e)), z("[autofocus]", t).some((s)=>R(s) ? s.focus() || !0 : s.blur()), i && v(t, "toggled", [
                    e,
                    this
                ]);
            }
        }
    };
    function ia(t, e, { _toggle: i }) {
        return gt.cancel(t), E.cancel(t), i(t, e);
    }
    async function sa(t, e, { animation: i, duration: s, velocity: n, transition: o, _toggle: r }) {
        var a;
        const [l = "reveal", h = "top"] = ((a = i[0]) == null ? void 0 : a.split("-")) || [], u = [
            [
                "left",
                "right"
            ],
            [
                "top",
                "bottom"
            ]
        ], f = u[m(u[0], h) ? 0 : 1], d = f[1] === h, A = [
            "width",
            "height"
        ][u.indexOf(f)], N = `margin-${f[0]}`, F = `margin-${h}`;
        let Ot = b(t)[A];
        const Es = E.inProgress(t);
        await E.cancel(t), e && r(t, !0);
        const Yh = Object.fromEntries([
            "padding",
            "border",
            "width",
            "height",
            "minWidth",
            "minHeight",
            "overflowY",
            "overflowX",
            N,
            F
        ].map((zo)=>[
                zo,
                t.style[zo]
            ])), Ye = b(t), Ps = x(c(t, N)), Bo = x(c(t, F)), Jt = Ye[A] + Bo;
        !Es && !e && (Ot += Bo);
        const [Oi] = Ji(t, "<div>");
        c(Oi, {
            boxSizing: "border-box",
            height: Ye.height,
            width: Ye.width,
            ...c(t, [
                "overflow",
                "padding",
                "borderTop",
                "borderRight",
                "borderBottom",
                "borderLeft",
                "borderImage",
                F
            ])
        }), c(t, {
            padding: 0,
            border: 0,
            minWidth: 0,
            minHeight: 0,
            [F]: 0,
            width: Ye.width,
            height: Ye.height,
            overflow: "hidden",
            [A]: Ot
        });
        const Mo = Ot / Jt;
        s = (n * Jt + s) * (e ? 1 - Mo : Mo);
        const No = {
            [A]: e ? Jt : 0
        };
        d && (c(t, N, Jt - Ot + Ps), No[N] = e ? Ps : Jt + Ps), !d ^ l === "reveal" && (c(Oi, N, -Jt + Ot), E.start(Oi, {
            [N]: e ? 0 : -Jt
        }, s, o));
        try {
            await E.start(t, No, s, o);
        } finally{
            c(t, Yh), _e(Oi.firstChild), e || r(t, !1);
        }
    }
    function na(t, e, i) {
        gt.cancel(t);
        const { animation: s, duration: n, _toggle: o } = i;
        return e ? (o(t, !0), gt.in(t, s[0], n, i.origin)) : gt.out(t, s[1] || s[0], n, i.origin).then(()=>o(t, !1));
    }
    const I = {
        TAB: 9,
        ESC: 27,
        SPACE: 32,
        END: 35,
        HOME: 36,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40
    };
    function pt(t) {
        return He(hi, t, "resize");
    }
    function ze(t) {
        return He(js, t);
    }
    function Sn(t) {
        return He(qs, t);
    }
    function Fe(t = {}) {
        return ze({
            handler: function(e, i) {
                const { targets: s = this.$el, preload: n = 5 } = t;
                for (const o of k(it(s) ? s(this) : s))z('[loading="lazy"]', o).slice(0, n - 1).forEach((r)=>ke(r, "loading"));
                for (const o of e.filter(({ isIntersecting: r })=>r).map(({ target: r })=>r))i.unobserve(o);
            },
            ...t
        });
    }
    function In() {
        return He((t, e)=>es(e));
    }
    function gi(t) {
        return He((e, i)=>({
                disconnect: $(e, "scroll", i, {
                    passive: !0,
                    capture: !0
                })
            }), {
            target: ()=>document,
            ...t
        }, "scroll");
    }
    function Cn(t) {
        return {
            observe (e, i) {
                return {
                    observe: S,
                    unobserve: S,
                    disconnect: $(e, mt, i, {
                        passive: !0
                    })
                };
            },
            handler (e) {
                if (!St(e)) return;
                const i = he(e), s = "tagName" in e.target ? e.target : O(e.target);
                j(document, `${Pt} ${li} scroll`, (n)=>{
                    const { x: o, y: r } = he(n);
                    (n.type !== "scroll" && s && o && Math.abs(i.x - o) > 100 || r && Math.abs(i.y - r) > 100) && setTimeout(()=>{
                        v(s, "swipe"), v(s, `swipe${oa(i.x, i.y, o, r)}`);
                    });
                });
            },
            ...t
        };
    }
    function He(t, e, i) {
        return {
            observe: t,
            handler () {
                this.$emit(i);
            },
            ...e
        };
    }
    function oa(t, e, i, s) {
        return Math.abs(t - i) >= Math.abs(e - s) ? t - i > 0 ? "Left" : "Right" : e - s > 0 ? "Up" : "Down";
    }
    var Tn = {
        mixins: [
            st,
            Vt
        ],
        props: {
            animation: Boolean,
            targets: String,
            active: null,
            collapsible: Boolean,
            multiple: Boolean,
            toggle: String,
            content: String,
            offset: Number
        },
        data: {
            targets: "> *",
            active: !1,
            animation: !0,
            collapsible: !0,
            multiple: !1,
            clsOpen: "uk-open",
            toggle: "> .uk-accordion-title",
            content: "> .uk-accordion-content",
            offset: 0
        },
        computed: {
            items ({ targets: t }, e) {
                return z(t, e);
            },
            toggles ({ toggle: t }) {
                return this.items.map((e)=>w(t, e));
            },
            contents ({ content: t }) {
                return this.items.map((e)=>{
                    var i;
                    return ((i = e._wrapper) == null ? void 0 : i.firstElementChild) || w(t, e);
                });
            }
        },
        watch: {
            items (t, e) {
                if (e || P(t, this.clsOpen)) return;
                const i = this.active !== !1 && t[Number(this.active)] || !this.collapsible && t[0];
                i && this.toggle(i, !1);
            },
            toggles () {
                this.$emit();
            },
            contents (t) {
                for (const e of t){
                    const i = P(this.items.find((s)=>B(e, s)), this.clsOpen);
                    mi(e, !i);
                }
                this.$emit();
            }
        },
        observe: Fe(),
        events: [
            {
                name: "click keydown",
                delegate () {
                    return `${this.targets} ${this.$props.toggle}`;
                },
                async handler (t) {
                    var e;
                    t.type === "keydown" && t.keyCode !== I.SPACE || (t.preventDefault(), (e = this._off) == null || e.call(this), this._off = aa(t.target), await this.toggle(ae(this.toggles, t.current)), this._off());
                }
            },
            {
                name: "shown hidden",
                self: !0,
                delegate () {
                    return this.targets;
                },
                handler () {
                    this.$emit();
                }
            }
        ],
        update () {
            const t = Ce(this.items, `.${this.clsOpen}`);
            for(const e in this.items){
                const i = this.toggles[e], s = this.contents[e];
                if (!i || !s) continue;
                i.id = At(this, i, `-title-${e}`), s.id = At(this, s, `-content-${e}`);
                const n = m(t, this.items[e]);
                p(i, {
                    role: G(i, "a") ? "button" : null,
                    "aria-controls": s.id,
                    "aria-expanded": n,
                    "aria-disabled": !this.collapsible && t.length < 2 && n
                }), p(s, {
                    role: "region",
                    "aria-labelledby": i.id
                }), G(s, "ul") && p(T(s), "role", "presentation");
            }
        },
        methods: {
            toggle (t, e) {
                t = this.items[rt(t, this.items)];
                let i = [
                    t
                ];
                const s = Ce(this.items, `.${this.clsOpen}`);
                if (!this.multiple && !m(s, i[0]) && (i = i.concat(s)), !(!this.collapsible && s.length < 2 && m(s, t))) return Promise.all(i.map((n)=>this.toggleElement(n, !m(s, n), (o, r)=>{
                        if (q(o, this.clsOpen, r), e === !1 || !this.animation) {
                            mi(w(this.content, o), !r);
                            return;
                        }
                        return ra(o, r, this);
                    })));
            }
        }
    };
    function mi(t, e) {
        t && (t.hidden = e);
    }
    async function ra(t, e, { content: i, duration: s, velocity: n, transition: o }) {
        var r;
        i = ((r = t._wrapper) == null ? void 0 : r.firstElementChild) || w(i, t), t._wrapper || (t._wrapper = oi(i, "<div>"));
        const a = t._wrapper;
        c(a, "overflow", "hidden");
        const l = x(c(a, "height"));
        await E.cancel(a), mi(i, !1);
        const h = Dt([
            "marginTop",
            "marginBottom"
        ], (f)=>c(i, f)) + b(i).height, u = l / h;
        s = (n * h + s) * (e ? 1 - u : u), c(a, "height", l), await E.start(a, {
            height: e ? h : 0
        }, s, o), _e(i), delete t._wrapper, e || mi(i, !0);
    }
    function aa(t) {
        const e = _t(t, !0);
        let i;
        return function s() {
            i = requestAnimationFrame(()=>{
                const { top: n } = t.getBoundingClientRect();
                n < 0 && (e.scrollTop += n), s();
            });
        }(), ()=>requestAnimationFrame(()=>cancelAnimationFrame(i));
    }
    var la = {
        mixins: [
            st,
            Vt
        ],
        args: "animation",
        props: {
            animation: Boolean,
            close: String
        },
        data: {
            animation: !0,
            selClose: ".uk-alert-close",
            duration: 150
        },
        events: {
            name: "click",
            delegate () {
                return this.selClose;
            },
            handler (t) {
                t.preventDefault(), this.close();
            }
        },
        methods: {
            async close () {
                await this.toggleElement(this.$el, !1, ha), this.$destroy(!0);
            }
        }
    };
    function ha(t, e, { duration: i, transition: s, velocity: n }) {
        const o = x(c(t, "height"));
        return c(t, "height", o), E.start(t, {
            height: 0,
            marginTop: 0,
            marginBottom: 0,
            paddingTop: 0,
            paddingBottom: 0,
            borderTop: 0,
            borderBottom: 0,
            opacity: 0
        }, n * o + i, s);
    }
    var En = {
        args: "autoplay",
        props: {
            automute: Boolean,
            autoplay: Boolean
        },
        data: {
            automute: !1,
            autoplay: !0
        },
        connected () {
            this.inView = this.autoplay === "inview", this.inView && !$t(this.$el, "preload") && (this.$el.preload = "none"), G(this.$el, "iframe") && !$t(this.$el, "allow") && (this.$el.allow = "autoplay"), this.automute && Gs(this.$el);
        },
        observe: [
            ze({
                args: {
                    intersecting: !1
                }
            }),
            pt()
        ],
        update: {
            read ({ visible: t }) {
                return Xs(this.$el) ? {
                    prev: t,
                    visible: R(this.$el),
                    inView: this.inView && ns(this.$el)
                } : !1;
            },
            write ({ prev: t, visible: e, inView: i }) {
                !e || this.inView && !i ? Ys(this.$el) : (this.autoplay === !0 && !t || i) && Vs(this.$el);
            },
            events: [
                "resize"
            ]
        }
    }, ca = {
        mixins: [
            En
        ],
        props: {
            width: Number,
            height: Number
        },
        data: {
            automute: !0
        },
        events: {
            "load loadedmetadata" () {
                this.$emit("resize");
            }
        },
        observe: pt({
            target: ({ $el: t })=>[
                    Pn(t) || O(t)
                ]
        }),
        update: {
            read () {
                const { ratio: t, cover: e } = Qe, { $el: i, width: s, height: n } = this;
                let o = {
                    width: s,
                    height: n
                };
                if (!s || !n) {
                    const h = {
                        width: i.naturalWidth || i.videoWidth || i.clientWidth,
                        height: i.naturalHeight || i.videoHeight || i.clientHeight
                    };
                    s ? o = t(h, "width", s) : n ? o = t(h, "height", n) : o = h;
                }
                const { offsetHeight: r, offsetWidth: a } = Pn(i) || O(i), l = e(o, {
                    width: a + (a % 2 ? 1 : 0),
                    height: r + (r % 2 ? 1 : 0)
                });
                return !l.width || !l.height ? !1 : l;
            },
            write ({ height: t, width: e }) {
                c(this.$el, {
                    height: t,
                    width: e
                });
            },
            events: [
                "resize"
            ]
        }
    };
    function Pn(t) {
        for(; t = O(t);)if (c(t, "position") !== "static") return t;
    }
    var _n = {
        props: {
            pos: String,
            offset: null,
            flip: Boolean,
            shift: Boolean,
            inset: Boolean
        },
        data: {
            pos: `bottom-${X ? "right" : "left"}`,
            offset: !1,
            flip: !0,
            shift: !0,
            inset: !1
        },
        connected () {
            this.pos = this.$props.pos.split("-").concat("center").slice(0, 2), [this.dir, this.align] = this.pos, this.axis = m([
                "top",
                "bottom"
            ], this.dir) ? "y" : "x";
        },
        methods: {
            positionAt (t, e, i) {
                let s = [
                    this.getPositionOffset(t),
                    this.getShiftOffset(t)
                ];
                const n = [
                    this.flip && "flip",
                    this.shift && "shift"
                ], o = {
                    element: [
                        this.inset ? this.dir : ri(this.dir),
                        this.align
                    ],
                    target: [
                        this.dir,
                        this.align
                    ]
                };
                if (this.axis === "y") {
                    for(const l in o)o[l].reverse();
                    s.reverse(), n.reverse();
                }
                const r = ua(t), a = b(t);
                c(t, {
                    top: -a.height,
                    left: -a.width
                }), en(t, e, {
                    attach: o,
                    offset: s,
                    boundary: i,
                    placement: n,
                    viewportOffset: this.getViewportOffset(t)
                }), r();
            },
            getPositionOffset (t) {
                return ht(this.offset === !1 ? c(t, "--uk-position-offset") : this.offset, this.axis === "x" ? "width" : "height", t) * (m([
                    "left",
                    "top"
                ], this.dir) ? -1 : 1) * (this.inset ? -1 : 1);
            },
            getShiftOffset (t) {
                return this.align === "center" ? 0 : ht(c(t, "--uk-position-shift-offset"), this.axis === "y" ? "width" : "height", t) * (m([
                    "left",
                    "top"
                ], this.align) ? 1 : -1);
            },
            getViewportOffset (t) {
                return ht(c(t, "--uk-position-viewport-offset"));
            }
        }
    };
    function ua(t) {
        const e = _t(t), { scrollTop: i } = e;
        return ()=>{
            i !== e.scrollTop && (e.scrollTop = i);
        };
    }
    var Le = {
        props: {
            container: Boolean
        },
        data: {
            container: !0
        },
        computed: {
            container ({ container: t }) {
                return t === !0 && this.$container || t && w(t);
            }
        }
    };
    let ds;
    function An(t) {
        const e = $(t, "touchmove", (s)=>{
            if (s.targetTouches.length !== 1 || C(s.target, 'input[type="range"')) return;
            let { scrollHeight: n, clientHeight: o } = _t(s.target);
            o >= n && s.cancelable && s.preventDefault();
        }, {
            passive: !1
        });
        if (ds) return e;
        ds = !0;
        const { scrollingElement: i } = document;
        return c(i, {
            overflowY: CSS.supports("overflow", "clip") ? "clip" : "hidden",
            touchAction: "none",
            paddingRight: Ae(window) - i.clientWidth || ""
        }), ()=>{
            ds = !1, e(), c(i, {
                overflowY: "",
                touchAction: "",
                paddingRight: ""
            });
        };
    }
    let K;
    var On = {
        mixins: [
            Le,
            _n,
            Vt
        ],
        args: "pos",
        props: {
            mode: "list",
            toggle: Boolean,
            boundary: Boolean,
            boundaryX: Boolean,
            boundaryY: Boolean,
            target: Boolean,
            targetX: Boolean,
            targetY: Boolean,
            stretch: Boolean,
            delayShow: Number,
            delayHide: Number,
            autoUpdate: Boolean,
            clsDrop: String,
            animateOut: Boolean,
            bgScroll: Boolean
        },
        data: {
            mode: [
                "click",
                "hover"
            ],
            toggle: "- *",
            boundary: !1,
            boundaryX: !1,
            boundaryY: !1,
            target: !1,
            targetX: !1,
            targetY: !1,
            stretch: !1,
            delayShow: 0,
            delayHide: 800,
            autoUpdate: !0,
            clsDrop: !1,
            animateOut: !1,
            bgScroll: !0,
            animation: [
                "uk-animation-fade"
            ],
            cls: "uk-open",
            container: !1
        },
        computed: {
            boundary ({ boundary: t, boundaryX: e, boundaryY: i }, s) {
                return [
                    at(e || t, s) || window,
                    at(i || t, s) || window
                ];
            },
            target ({ target: t, targetX: e, targetY: i }, s) {
                return e || (e = t || this.targetEl), i || (i = t || this.targetEl), [
                    e === !0 ? window : at(e, s),
                    i === !0 ? window : at(i, s)
                ];
            }
        },
        created () {
            this.tracker = new ts;
        },
        beforeConnect () {
            this.clsDrop = this.$props.clsDrop || `uk-${this.$options.name}`;
        },
        connected () {
            y(this.$el, "uk-drop", this.clsDrop), this.toggle && !this.targetEl && (this.targetEl = pa(this)), this._style = Ni(this.$el.style, [
                "width",
                "height"
            ]);
        },
        disconnected () {
            this.isActive() && (this.hide(!1), K = null), c(this.$el, this._style);
        },
        observe: Fe({
            target: ({ toggle: t, $el: e })=>at(t, e),
            targets: ({ $el: t })=>t
        }),
        events: [
            {
                name: "click",
                delegate () {
                    return ".uk-drop-close";
                },
                handler (t) {
                    t.preventDefault(), this.hide(!1);
                }
            },
            {
                name: "click",
                delegate () {
                    return 'a[href*="#"]';
                },
                handler ({ defaultPrevented: t, current: e }) {
                    const { hash: i } = e;
                    !t && i && le(e) && !B(i, this.$el) && this.hide(!1);
                }
            },
            {
                name: "beforescroll",
                handler () {
                    this.hide(!1);
                }
            },
            {
                name: "toggle",
                self: !0,
                handler (t, e) {
                    t.preventDefault(), this.isToggled() ? this.hide(!1) : this.show(e == null ? void 0 : e.$el, !1);
                }
            },
            {
                name: "toggleshow",
                self: !0,
                handler (t, e) {
                    t.preventDefault(), this.show(e == null ? void 0 : e.$el);
                }
            },
            {
                name: "togglehide",
                self: !0,
                handler (t) {
                    t.preventDefault(), C(this.$el, ":focus,:hover") || this.hide();
                }
            },
            {
                name: `${Rt} focusin`,
                filter () {
                    return m(this.mode, "hover");
                },
                handler (t) {
                    St(t) || this.clearTimers();
                }
            },
            {
                name: `${de} focusout`,
                filter () {
                    return m(this.mode, "hover");
                },
                handler (t) {
                    !St(t) && t.relatedTarget && this.hide();
                }
            },
            {
                name: "toggled",
                self: !0,
                handler (t, e) {
                    p(this.targetEl, "aria-expanded", e ? !0 : null), e && (this.clearTimers(), this.position());
                }
            },
            {
                name: "show",
                self: !0,
                handler () {
                    K = this, this.tracker.init();
                    const t = [
                        ga(this),
                        va(this),
                        wa(this),
                        this.autoUpdate && ma(this),
                        !this.bgScroll && An(this.$el)
                    ];
                    j(this.$el, "hide", ()=>t.forEach((e)=>e && e()), {
                        self: !0
                    });
                }
            },
            {
                name: "beforehide",
                self: !0,
                handler () {
                    this.clearTimers();
                }
            },
            {
                name: "hide",
                handler ({ target: t }) {
                    if (this.$el !== t) {
                        K = K === null && B(t, this.$el) && this.isToggled() ? this : K;
                        return;
                    }
                    K = this.isActive() ? null : K, this.tracker.cancel();
                }
            }
        ],
        update: {
            write () {
                this.isToggled() && !P(this.$el, this.clsEnter) && this.position();
            }
        },
        methods: {
            show (t = this.targetEl, e = !0) {
                if (this.isToggled() && t && this.targetEl && t !== this.targetEl && this.hide(!1, !1), this.targetEl = t, this.clearTimers(), !this.isActive()) {
                    if (K) {
                        if (e && K.isDelaying) {
                            this.showTimer = setTimeout(()=>C(t, ":hover") && this.show(), 10);
                            return;
                        }
                        let i;
                        for(; K && i !== K && !B(this.$el, K.$el);)i = K, K.hide(!1, !1);
                    }
                    this.container && O(this.$el) !== this.container && L(this.container, this.$el), this.showTimer = setTimeout(()=>this.toggleElement(this.$el, !0), e && this.delayShow || 0);
                }
            },
            hide (t = !0, e = !0) {
                const i = ()=>this.toggleElement(this.$el, !1, this.animateOut && e);
                this.clearTimers(), this.isDelaying = fa(this.$el).some((s)=>this.tracker.movesTo(s)), t && this.isDelaying ? this.hideTimer = setTimeout(this.hide, 50) : t && this.delayHide ? this.hideTimer = setTimeout(i, this.delayHide) : i();
            },
            clearTimers () {
                clearTimeout(this.showTimer), clearTimeout(this.hideTimer), this.showTimer = null, this.hideTimer = null, this.isDelaying = !1;
            },
            isActive () {
                return K === this;
            },
            position () {
                M(this.$el, "uk-drop-stack"), c(this.$el, this._style), this.$el.hidden = !0;
                const t = this.target.map((n)=>da(this.$el, n)), e = this.getViewportOffset(this.$el), i = [
                    [
                        0,
                        [
                            "x",
                            "width",
                            "left",
                            "right"
                        ]
                    ],
                    [
                        1,
                        [
                            "y",
                            "height",
                            "top",
                            "bottom"
                        ]
                    ]
                ];
                for (const [n, [o, r]] of i)this.axis !== o && m([
                    o,
                    !0
                ], this.stretch) && c(this.$el, {
                    [r]: Math.min(_(this.boundary[n])[r], t[n][r] - 2 * e),
                    [`overflow-${o}`]: "auto"
                });
                const s = t[0].width - 2 * e;
                this.$el.hidden = !1, c(this.$el, "maxWidth", ""), this.$el.offsetWidth > s && y(this.$el, "uk-drop-stack"), c(this.$el, "maxWidth", s), this.positionAt(this.$el, this.target, this.boundary);
                for (const [n, [o, r, a, l]] of i)if (this.axis === o && m([
                    o,
                    !0
                ], this.stretch)) {
                    const h = Math.abs(this.getPositionOffset(this.$el)), u = _(this.target[n]), f = _(this.$el);
                    c(this.$el, {
                        [r]: (u[a] > f[a] ? u[this.inset ? l : a] - Math.max(_(this.boundary[n])[a], t[n][a] + e) : Math.min(_(this.boundary[n])[l], t[n][l] - e) - u[this.inset ? a : l]) - h,
                        [`overflow-${o}`]: "auto"
                    }), this.positionAt(this.$el, this.target, this.boundary);
                }
            }
        }
    };
    function fa(t) {
        const e = [];
        return It(t, (i)=>c(i, "position") !== "static" && e.push(i)), e;
    }
    function da(t, e) {
        return ct(jt(e).find((i)=>B(t, i)));
    }
    function pa(t) {
        const { $el: e } = t.$create("toggle", at(t.toggle, t.$el), {
            target: t.$el,
            mode: t.mode
        });
        return p(e, "aria-haspopup", !0), e;
    }
    function ga(t) {
        const e = ()=>t.$emit(), i = [
            es(e),
            hi(jt(t.$el).concat(t.target), e)
        ];
        return ()=>i.map((s)=>s.disconnect());
    }
    function ma(t) {
        return $([
            document,
            ...jt(t.$el)
        ], "scroll", ()=>t.$emit(), {
            passive: !0
        });
    }
    function va(t) {
        return $(document, "keydown", (e)=>{
            e.keyCode === I.ESC && t.hide(!1);
        });
    }
    function wa(t) {
        return $(document, mt, ({ target: e })=>{
            B(e, t.$el) || j(document, `${Pt} ${li} scroll`, ({ defaultPrevented: i, type: s, target: n })=>{
                !i && s === Pt && e === n && !(t.targetEl && B(e, t.targetEl)) && t.hide(!1);
            }, !0);
        });
    }
    var Dn = {
        mixins: [
            st,
            Le
        ],
        props: {
            align: String,
            clsDrop: String,
            boundary: Boolean,
            dropbar: Boolean,
            dropbarAnchor: Boolean,
            duration: Number,
            mode: Boolean,
            offset: Boolean,
            stretch: Boolean,
            delayShow: Boolean,
            delayHide: Boolean,
            target: Boolean,
            targetX: Boolean,
            targetY: Boolean,
            animation: Boolean,
            animateOut: Boolean
        },
        data: {
            align: X ? "right" : "left",
            clsDrop: "uk-dropdown",
            clsDropbar: "uk-dropnav-dropbar",
            boundary: !0,
            dropbar: !1,
            dropbarAnchor: !1,
            duration: 200,
            container: !1,
            selNavItem: "> li > a, > ul > li > a"
        },
        computed: {
            dropbarAnchor ({ dropbarAnchor: t }, e) {
                return at(t, e) || e;
            },
            dropbar ({ dropbar: t }) {
                return t ? (t = this._dropbar || at(t, this.$el) || w(`+ .${this.clsDropbar}`, this.$el), t || (this._dropbar = w("<div></div>"))) : null;
            },
            dropContainer (t, e) {
                return this.container || e;
            },
            dropdowns ({ clsDrop: t }, e) {
                var i;
                const s = z(`.${t}`, e);
                if (this.dropContainer !== e) for (const n of z(`.${t}`, this.dropContainer)){
                    const o = (i = this.getDropdown(n)) == null ? void 0 : i.targetEl;
                    !m(s, n) && o && B(o, this.$el) && s.push(n);
                }
                return s;
            },
            items ({ selNavItem: t }, e) {
                return z(t, e);
            }
        },
        watch: {
            dropbar (t) {
                y(t, "uk-dropbar", "uk-dropbar-top", this.clsDropbar, `uk-${this.$options.name}-dropbar`);
            },
            dropdowns () {
                this.initializeDropdowns();
            }
        },
        connected () {
            this.initializeDropdowns();
        },
        disconnected () {
            lt(this._dropbar), delete this._dropbar;
        },
        events: [
            {
                name: "mouseover focusin",
                delegate () {
                    return this.selNavItem;
                },
                handler ({ current: t }) {
                    const e = this.getActive();
                    e && m(e.mode, "hover") && e.targetEl && !B(e.targetEl, t) && !e.isDelaying && e.hide(!1);
                }
            },
            {
                name: "keydown",
                self: !0,
                delegate () {
                    return this.selNavItem;
                },
                handler (t) {
                    var e;
                    const { current: i, keyCode: s } = t, n = this.getActive();
                    s === I.DOWN && (n == null ? void 0 : n.targetEl) === i && (t.preventDefault(), (e = w(Ie, n.$el)) == null || e.focus()), Bn(t, this.items, n);
                }
            },
            {
                name: "keydown",
                el () {
                    return this.dropContainer;
                },
                delegate () {
                    return `.${this.clsDrop}`;
                },
                handler (t) {
                    var e;
                    const { current: i, keyCode: s } = t;
                    if (!m(this.dropdowns, i)) return;
                    const n = this.getActive();
                    let o = -1;
                    if (s === I.HOME ? o = 0 : s === I.END ? o = "last" : s === I.UP ? o = "previous" : s === I.DOWN ? o = "next" : s === I.ESC && ((e = n.targetEl) == null || e.focus()), ~o) {
                        t.preventDefault();
                        const r = z(Ie, i);
                        r[rt(o, r, xt(r, (a)=>C(a, ":focus")))].focus();
                    }
                    Bn(t, this.items, n);
                }
            },
            {
                name: "mouseleave",
                el () {
                    return this.dropbar;
                },
                filter () {
                    return this.dropbar;
                },
                handler () {
                    const t = this.getActive();
                    t && m(t.mode, "hover") && !this.dropdowns.some((e)=>C(e, ":hover")) && t.hide();
                }
            },
            {
                name: "beforeshow",
                el () {
                    return this.dropContainer;
                },
                filter () {
                    return this.dropbar;
                },
                handler ({ target: t }) {
                    this.isDropbarDrop(t) && (this.dropbar.previousElementSibling !== this.dropbarAnchor && si(this.dropbarAnchor, this.dropbar), y(t, `${this.clsDrop}-dropbar`));
                }
            },
            {
                name: "show",
                el () {
                    return this.dropContainer;
                },
                filter () {
                    return this.dropbar;
                },
                handler ({ target: t }) {
                    if (!this.isDropbarDrop(t)) return;
                    const e = this.getDropdown(t), i = ()=>{
                        const s = re(t, `.${this.clsDrop}`).concat(t).map((a)=>_(a)), n = Math.min(...s.map(({ top: a })=>a)), o = Math.max(...s.map(({ bottom: a })=>a)), r = _(this.dropbar);
                        c(this.dropbar, "top", this.dropbar.offsetTop - (r.top - n)), this.transitionTo(o - n + x(c(t, "marginBottom")), t);
                    };
                    this._observer = hi([
                        e.$el,
                        ...e.target
                    ], i), i();
                }
            },
            {
                name: "beforehide",
                el () {
                    return this.dropContainer;
                },
                filter () {
                    return this.dropbar;
                },
                handler (t) {
                    const e = this.getActive();
                    C(this.dropbar, ":hover") && e.$el === t.target && !this.items.some((i)=>e.targetEl !== i && C(i, ":focus")) && t.preventDefault();
                }
            },
            {
                name: "hide",
                el () {
                    return this.dropContainer;
                },
                filter () {
                    return this.dropbar;
                },
                handler ({ target: t }) {
                    var e;
                    if (!this.isDropbarDrop(t)) return;
                    (e = this._observer) == null || e.disconnect();
                    const i = this.getActive();
                    (!i || i.$el === t) && this.transitionTo(0);
                }
            }
        ],
        methods: {
            getActive () {
                var t;
                return m(this.dropdowns, (t = K) == null ? void 0 : t.$el) && K;
            },
            async transitionTo (t, e) {
                const { dropbar: i } = this, s = et(i);
                e = s < t && e, await E.cancel([
                    e,
                    i
                ]), c(e, "clipPath", `polygon(0 0,100% 0,100% ${s}px,0 ${s}px)`), et(i, s), await Promise.all([
                    E.start(i, {
                        height: t
                    }, this.duration),
                    E.start(e, {
                        clipPath: `polygon(0 0,100% 0,100% ${t}px,0 ${t}px)`
                    }, this.duration).finally(()=>c(e, {
                            clipPath: ""
                        }))
                ]).catch(S);
            },
            getDropdown (t) {
                return this.$getComponent(t, "drop") || this.$getComponent(t, "dropdown");
            },
            isDropbarDrop (t) {
                return this.getDropdown(t) && P(t, this.clsDrop);
            },
            initializeDropdowns () {
                this.$create("drop", this.dropdowns.filter((t)=>!this.getDropdown(t)), {
                    ...this.$props,
                    flip: !1,
                    shift: !0,
                    pos: `bottom-${this.align}`,
                    boundary: this.boundary === !0 ? this.$el : this.boundary
                });
            }
        }
    };
    function Bn(t, e, i) {
        var s, n, o;
        const { current: r, keyCode: a } = t;
        let l = -1;
        a === I.HOME ? l = 0 : a === I.END ? l = "last" : a === I.LEFT ? l = "previous" : a === I.RIGHT ? l = "next" : a === I.TAB && ((s = i.targetEl) == null || s.focus(), (n = i.hide) == null || n.call(i, !1)), ~l && (t.preventDefault(), (o = i.hide) == null || o.call(i, !1), e[rt(l, e, e.indexOf(i.targetEl || r))].focus());
    }
    var ba = {
        mixins: [
            st
        ],
        args: "target",
        props: {
            target: Boolean
        },
        data: {
            target: !1
        },
        computed: {
            input (t, e) {
                return w(Se, e);
            },
            state () {
                return this.input.nextElementSibling;
            },
            target ({ target: t }, e) {
                return t && (t === !0 && O(this.input) === e && this.input.nextElementSibling || w(t, e));
            }
        },
        update () {
            var t;
            const { target: e, input: i } = this;
            if (!e) return;
            let s;
            const n = Li(e) ? "value" : "textContent", o = e[n], r = (t = i.files) != null && t[0] ? i.files[0].name : C(i, "select") && (s = z("option", i).filter((a)=>a.selected)[0]) ? s.textContent : i.value;
            o !== r && (e[n] = r);
        },
        events: [
            {
                name: "change",
                handler () {
                    this.$emit();
                }
            },
            {
                name: "reset",
                el () {
                    return U(this.$el, "form");
                },
                handler () {
                    this.$emit();
                }
            }
        ]
    }, Mn = {
        props: {
            margin: String,
            firstColumn: Boolean
        },
        data: {
            margin: "uk-margin-small-top",
            firstColumn: "uk-first-column"
        },
        observe: [
            Sn({
                options: {
                    childList: !0,
                    attributes: !0,
                    attributeFilter: [
                        "style"
                    ]
                }
            }),
            pt({
                target: ({ $el: t })=>[
                        t,
                        ...T(t)
                    ]
            })
        ],
        update: {
            read () {
                const t = ps(this.$el.children);
                return {
                    rows: t,
                    columns: $a(t)
                };
            },
            write ({ columns: t, rows: e }) {
                for (const i of e)for (const s of i)q(s, this.margin, e[0] !== i), q(s, this.firstColumn, t[0].includes(s));
            },
            events: [
                "resize"
            ]
        }
    };
    function ps(t) {
        return Nn(t, "top", "bottom");
    }
    function $a(t) {
        const e = [];
        for (const i of t){
            const s = Nn(i, "left", "right");
            for(let n = 0; n < s.length; n++)e[n] = e[n] ? e[n].concat(s[n]) : s[n];
        }
        return X ? e.reverse() : e;
    }
    function Nn(t, e, i) {
        const s = [
            []
        ];
        for (const n of t){
            if (!R(n)) continue;
            let o = vi(n);
            for(let r = s.length - 1; r >= 0; r--){
                const a = s[r];
                if (!a[0]) {
                    a.push(n);
                    break;
                }
                let l;
                if (a[0].offsetParent === n.offsetParent ? l = vi(a[0]) : (o = vi(n, !0), l = vi(a[0], !0)), o[e] >= l[i] - 1 && o[e] !== l[e]) {
                    s.push([
                        n
                    ]);
                    break;
                }
                if (o[i] - 1 > l[e] || o[e] === l[e]) {
                    a.push(n);
                    break;
                }
                if (r === 0) {
                    s.unshift([
                        n
                    ]);
                    break;
                }
            }
        }
        return s;
    }
    function vi(t, e = !1) {
        let { offsetTop: i, offsetLeft: s, offsetHeight: n, offsetWidth: o } = t;
        return e && ([i, s] = Ht(t)), {
            top: i,
            left: s,
            bottom: i + n,
            right: s + o
        };
    }
    var xa = {
        extends: Mn,
        mixins: [
            st
        ],
        name: "grid",
        props: {
            masonry: Boolean,
            parallax: Number
        },
        data: {
            margin: "uk-grid-margin",
            clsStack: "uk-grid-stack",
            masonry: !1,
            parallax: 0
        },
        connected () {
            this.masonry && y(this.$el, "uk-flex-top uk-flex-wrap-top");
        },
        observe: gi({
            filter: ({ parallax: t })=>t
        }),
        update: [
            {
                write ({ columns: t }) {
                    q(this.$el, this.clsStack, t.length < 2);
                },
                events: [
                    "resize"
                ]
            },
            {
                read (t) {
                    let { columns: e, rows: i } = t;
                    if (!e.length || !this.masonry && !this.parallax || zn(this.$el)) return t.translates = !1, !1;
                    let s = !1;
                    const n = T(this.$el), o = e.map((h)=>Dt(h, "offsetHeight")), r = ka(n, this.margin) * (i.length - 1), a = Math.max(...o) + r;
                    this.masonry && (e = e.map((h)=>Ke(h, "offsetTop")), s = ya(i, e));
                    let l = Math.abs(this.parallax);
                    return l && (l = o.reduce((h, u, f)=>Math.max(h, u + r + (f % 2 ? l : l / 8) - a), 0)), {
                        padding: l,
                        columns: e,
                        translates: s,
                        height: s ? a : ""
                    };
                },
                write ({ height: t, padding: e }) {
                    c(this.$el, "paddingBottom", e || ""), t !== !1 && c(this.$el, "height", t);
                },
                events: [
                    "resize"
                ]
            },
            {
                read () {
                    return this.parallax && zn(this.$el) ? !1 : {
                        scrolled: this.parallax ? os(this.$el) * Math.abs(this.parallax) : !1
                    };
                },
                write ({ columns: t, scrolled: e, translates: i }) {
                    e === !1 && !i || t.forEach((s, n)=>s.forEach((o, r)=>c(o, "transform", !e && !i ? "" : `translateY(${(i && -i[n][r]) + (e ? n % 2 ? e : e / 8 : 0)}px)`)));
                },
                events: [
                    "scroll",
                    "resize"
                ]
            }
        ]
    };
    function zn(t) {
        return T(t).some((e)=>c(e, "position") === "absolute");
    }
    function ya(t, e) {
        const i = t.map((s)=>Math.max(...s.map((n)=>n.offsetHeight)));
        return e.map((s)=>{
            let n = 0;
            return s.map((o, r)=>n += r ? i[r - 1] - s[r - 1].offsetHeight : 0);
        });
    }
    function ka(t, e) {
        const [i] = t.filter((s)=>P(s, e));
        return x(i ? c(i, "marginTop") : c(t[0], "paddingLeft"));
    }
    var Sa = {
        args: "target",
        props: {
            target: String,
            row: Boolean
        },
        data: {
            target: "> *",
            row: !0
        },
        computed: {
            elements ({ target: t }, e) {
                return z(t, e);
            }
        },
        observe: pt({
            target: ({ $el: t, elements: e })=>[
                    t,
                    ...e
                ]
        }),
        update: {
            read () {
                return {
                    rows: (this.row ? ps(this.elements) : [
                        this.elements
                    ]).map(Ia)
                };
            },
            write ({ rows: t }) {
                for (const { heights: e, elements: i } of t)i.forEach((s, n)=>c(s, "minHeight", e[n]));
            },
            events: [
                "resize"
            ]
        }
    };
    function Ia(t) {
        if (t.length < 2) return {
            heights: [
                ""
            ],
            elements: t
        };
        let e = t.map(Ca);
        const i = Math.max(...e);
        return {
            heights: t.map((s, n)=>e[n].toFixed(2) === i.toFixed(2) ? "" : i),
            elements: t
        };
    }
    function Ca(t) {
        const e = Ni(t.style, [
            "display",
            "minHeight"
        ]);
        R(t) || c(t, "display", "block", "important"), c(t, "minHeight", "");
        const i = b(t).height - ce(t, "height", "content-box");
        return c(t, e), i;
    }
    var Ta = {
        props: {
            expand: Boolean,
            offsetTop: Boolean,
            offsetBottom: Boolean,
            minHeight: Number
        },
        data: {
            expand: !1,
            offsetTop: !1,
            offsetBottom: !1,
            minHeight: 0
        },
        observe: pt({
            target: ({ $el: t })=>[
                    t,
                    ...pe(t)
                ]
        }),
        update: {
            read () {
                if (!R(this.$el)) return !1;
                let t = "";
                const e = ce(this.$el, "height", "content-box"), { body: i, scrollingElement: s } = document, n = _t(this.$el), { height: o } = ct(n === i ? s : n);
                if (this.expand) t = `${o - (b(n).height - b(this.$el).height) - e}px`;
                else {
                    const r = s === n || i === n;
                    if (t = `calc(${r ? "100vh" : `${o}px`}`, this.offsetTop) {
                        if (r) {
                            const a = Ht(this.$el)[0] - Ht(n)[0];
                            t += a > 0 && a < o / 2 ? ` - ${a}px` : "";
                        } else t += ` - ${c(n, "paddingTop")}`;
                    }
                    this.offsetBottom === !0 ? t += ` - ${b(this.$el.nextElementSibling).height}px` : bt(this.offsetBottom) ? t += ` - ${this.offsetBottom}vh` : this.offsetBottom && Zt(this.offsetBottom, "px") ? t += ` - ${x(this.offsetBottom)}px` : D(this.offsetBottom) && (t += ` - ${b(at(this.offsetBottom, this.$el)).height}px`), t += `${e ? ` - ${e}px` : ""})`;
                }
                return {
                    minHeight: t
                };
            },
            write ({ minHeight: t }) {
                c(this.$el, "minHeight", `max(${this.minHeight || 0}px, ${t})`);
            },
            events: [
                "resize"
            ]
        }
    }, Fn = {
        args: "src",
        props: {
            width: Number,
            height: Number,
            ratio: Number
        },
        data: {
            ratio: 1
        },
        connected () {
            this.svg = this.getSvg().then((t)=>{
                if (!this._connected) return;
                const e = Ea(t, this.$el);
                return this.svgEl && e !== this.svgEl && lt(this.svgEl), Pa.call(this, e, t), this.svgEl = e;
            }, S);
        },
        disconnected () {
            this.svg.then((t)=>{
                this._connected || (Hi(this.$el) && (this.$el.hidden = !1), lt(t), this.svgEl = null);
            }), this.svg = null;
        },
        methods: {
            async getSvg () {}
        }
    };
    function Ea(t, e) {
        if (Hi(e) || G(e, "canvas")) {
            e.hidden = !0;
            const s = e.nextElementSibling;
            return Hn(t, s) ? s : si(e, t);
        }
        const i = e.lastElementChild;
        return Hn(t, i) ? i : L(e, t);
    }
    function Hn(t, e) {
        return G(t, "svg") && G(e, "svg") && t.innerHTML === e.innerHTML;
    }
    function Pa(t, e) {
        const i = [
            "width",
            "height"
        ];
        let s = i.map((o)=>this[o]);
        s.some((o)=>o) || (s = i.map((o)=>p(e, o)));
        const n = p(e, "viewBox");
        n && !s.some((o)=>o) && (s = n.split(" ").slice(2)), s.forEach((o, r)=>p(t, i[r], x(o) * this.ratio || null));
    }
    var wi = {
        props: {
            i18n: Object
        },
        data: {
            i18n: null
        },
        methods: {
            t (t, ...e) {
                var i, s, n;
                let o = 0;
                return ((n = ((i = this.i18n) == null ? void 0 : i[t]) || ((s = this.$options.i18n) == null ? void 0 : s[t])) == null ? void 0 : n.replace(/%s/g, ()=>e[o++] || "")) || "";
            }
        }
    }, _a = '<svg width="14" height="14" viewBox="0 0 14 14"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"/></svg>', Aa = '<svg width="20" height="20" viewBox="0 0 20 20"><line fill="none" stroke="#000" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"/><line fill="none" stroke="#000" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"/></svg>', Oa = '<svg width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>', Da = '<svg width="20" height="20" viewBox="0 0 20 20"><rect x="9" y="4" width="1" height="11"/><rect x="4" y="9" width="11" height="1"/></svg>', Ba = '<svg width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>', Ma = '<svg width="14" height="14" viewBox="0 0 14 14"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 4 7 10 13 4"/></svg>', Na = '<svg width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>', za = '<svg width="20" height="20" viewBox="0 0 20 20"><style>.uk-navbar-toggle-animate svg&gt;[class*=&quot;line-&quot;]{transition:0.2s ease-in-out;transition-property:transform, opacity;transform-origin:center;opacity:1}.uk-navbar-toggle svg&gt;.line-3{opacity:0}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-3{opacity:1}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-2{transform:rotate(45deg)}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-3{transform:rotate(-45deg)}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-1,.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-4{opacity:0}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-1{transform:translateY(6px) scaleX(0)}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-4{transform:translateY(-6px) scaleX(0)}</style><rect class="line-1" y="3" width="20" height="2"/><rect class="line-2" y="9" width="20" height="2"/><rect class="line-3" y="9" width="20" height="2"/><rect class="line-4" y="15" width="20" height="2"/></svg>', Fa = '<svg width="40" height="40" viewBox="0 0 40 40"><rect x="19" y="0" width="1" height="40"/><rect x="0" y="19" width="40" height="1"/></svg>', Ha = '<svg width="7" height="12" viewBox="0 0 7 12"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 6 6 1 11"/></svg>', La = '<svg width="7" height="12" viewBox="0 0 7 12"><polyline fill="none" stroke="#000" stroke-width="1.2" points="6 1 1 6 6 11"/></svg>', Wa = '<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>', Ra = '<svg width="40" height="40" viewBox="0 0 40 40"><circle fill="none" stroke="#000" stroke-width="1.8" cx="17.5" cy="17.5" r="16.5"/><line fill="none" stroke="#000" stroke-width="1.8" x1="38" y1="39" x2="29" y2="30"/></svg>', ja = '<svg width="24" height="24" viewBox="0 0 24 24"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10.5" cy="10.5" r="9.5"/><line fill="none" stroke="#000" stroke-width="1.1" x1="23" y1="23" x2="17" y2="17"/></svg>', qa = '<svg width="14" height="24" viewBox="0 0 14 24"><polyline fill="none" stroke="#000" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1"/></svg>', Ua = '<svg width="25" height="40" viewBox="0 0 25 40"><polyline fill="none" stroke="#000" stroke-width="2" points="4.002,38.547 22.527,20.024 4,1.5"/></svg>', Va = '<svg width="14" height="24" viewBox="0 0 14 24"><polyline fill="none" stroke="#000" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23"/></svg>', Ya = '<svg width="25" height="40" viewBox="0 0 25 40"><polyline fill="none" stroke="#000" stroke-width="2" points="20.527,1.5 2,20.024 20.525,38.547"/></svg>', Ga = '<svg width="30" height="30" viewBox="0 0 30 30"><circle fill="none" stroke="#000" cx="15" cy="15" r="14"/></svg>', Xa = '<svg width="18" height="10" viewBox="0 0 18 10"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 9 9 1 17 9"/></svg>';
    const bi = {
        spinner: Ga,
        totop: Xa,
        marker: Da,
        "close-icon": _a,
        "close-large": Aa,
        "drop-parent-icon": Oa,
        "nav-parent-icon": Ba,
        "nav-parent-icon-large": Ma,
        "navbar-parent-icon": Na,
        "navbar-toggle-icon": za,
        "overlay-icon": Fa,
        "pagination-next": Ha,
        "pagination-previous": La,
        "search-icon": Wa,
        "search-large": Ra,
        "search-navbar": ja,
        "slidenav-next": qa,
        "slidenav-next-large": Ua,
        "slidenav-previous": Va,
        "slidenav-previous-large": Ya
    }, gs = {
        install: ol,
        mixins: [
            Fn
        ],
        args: "icon",
        props: {
            icon: String
        },
        isIcon: !0,
        beforeConnect () {
            y(this.$el, "uk-icon");
        },
        methods: {
            async getSvg () {
                const t = rl(this.icon);
                if (!t) throw "Icon not found.";
                return t;
            }
        }
    }, Yt = {
        args: !1,
        extends: gs,
        data: (t)=>({
                icon: Kt(t.constructor.options.name)
            }),
        beforeConnect () {
            y(this.$el, this.$options.id);
        }
    }, Ja = {
        extends: Yt,
        beforeConnect () {
            const t = this.$props.icon;
            this.icon = U(this.$el, ".uk-nav-primary") ? `${t}-large` : t;
        }
    }, Ka = {
        extends: Yt,
        mixins: [
            wi
        ],
        i18n: {
            toggle: "Open Search",
            submit: "Submit Search"
        },
        beforeConnect () {
            if (this.icon = P(this.$el, "uk-search-icon") && re(this.$el, ".uk-search-large").length ? "search-large" : re(this.$el, ".uk-search-navbar").length ? "search-navbar" : this.$props.icon, !$t(this.$el, "aria-label")) {
                if (P(this.$el, "uk-search-toggle") || P(this.$el, "uk-navbar-toggle")) {
                    const t = this.t("toggle");
                    p(this.$el, "aria-label", t);
                } else {
                    const t = U(this.$el, "a,button");
                    if (t) {
                        const e = this.t("submit");
                        p(t, "aria-label", e);
                    }
                }
            }
        }
    }, Za = {
        extends: Yt,
        beforeConnect () {
            p(this.$el, "role", "status");
        },
        methods: {
            async getSvg () {
                const t = await gs.methods.getSvg.call(this);
                return this.ratio !== 1 && c(w("circle", t), "strokeWidth", 1 / this.ratio), t;
            }
        }
    }, Gt = {
        extends: Yt,
        mixins: [
            wi
        ],
        beforeConnect () {
            const t = U(this.$el, "a,button");
            p(t, "role", this.role !== null && G(t, "a") ? "button" : this.role);
            const e = this.t("label");
            e && !$t(t, "aria-label") && p(t, "aria-label", e);
        }
    }, Ln = {
        extends: Gt,
        beforeConnect () {
            y(this.$el, "uk-slidenav");
            const t = this.$props.icon;
            this.icon = P(this.$el, "uk-slidenav-large") ? `${t}-large` : t;
        }
    }, Qa = {
        extends: Gt,
        i18n: {
            label: "Open menu"
        }
    }, tl = {
        extends: Gt,
        i18n: {
            label: "Close"
        },
        beforeConnect () {
            this.icon = `close-${P(this.$el, "uk-close-large") ? "large" : "icon"}`;
        }
    }, el = {
        extends: Gt,
        i18n: {
            label: "Open"
        }
    }, il = {
        extends: Gt,
        i18n: {
            label: "Back to top"
        }
    }, sl = {
        extends: Gt,
        i18n: {
            label: "Next page"
        },
        data: {
            role: null
        }
    }, nl = {
        extends: Gt,
        i18n: {
            label: "Previous page"
        },
        data: {
            role: null
        }
    }, $i = {};
    function ol(t) {
        t.icon.add = (e, i)=>{
            const s = D(e) ? {
                [e]: i
            } : e;
            Et(s, (n, o)=>{
                bi[o] = n, delete $i[o];
            }), t._initialized && It(document.body, (n)=>Et(t.getComponents(n), (o)=>{
                    o.$options.isIcon && o.icon in s && o.$reset();
                }));
        };
    }
    function rl(t) {
        return bi[t] ? ($i[t] || ($i[t] = w((bi[al(t)] || bi[t]).trim())), $i[t].cloneNode(!0)) : null;
    }
    function al(t) {
        return X ? Mi(Mi(t, "left", "right"), "previous", "next") : t;
    }
    const ll = Lt && "loading" in HTMLImageElement.prototype;
    var hl = {
        args: "dataSrc",
        props: {
            dataSrc: String,
            sources: String,
            margin: String,
            target: String,
            loading: String
        },
        data: {
            dataSrc: "",
            sources: !1,
            margin: "50%",
            target: !1,
            loading: "lazy"
        },
        connected () {
            if (this.loading !== "lazy") {
                this.load();
                return;
            }
            ll && xi(this.$el) && (this.$el.loading = "lazy", ms(this.$el)), pl(this.$el);
        },
        disconnected () {
            this.img && (this.img.onload = ""), delete this.img;
        },
        observe: ze({
            target: ({ $el: t, $props: e })=>[
                    t,
                    ...Te(e.target, t)
                ],
            handler (t, e) {
                this.load(), e.disconnect();
            },
            options: ({ margin: t })=>({
                    rootMargin: t
                }),
            filter: ({ loading: t })=>t === "lazy"
        }),
        methods: {
            load () {
                if (this.img) return this.img;
                const t = xi(this.$el) ? this.$el : ul(this.$el, this.dataSrc, this.sources);
                return ke(t, "loading"), ms(this.$el, t.currentSrc), this.img = t;
            }
        }
    };
    function ms(t, e) {
        if (xi(t)) {
            const i = O(t);
            (G(i, "picture") ? T(i) : [
                t
            ]).forEach((n)=>Wn(n, n));
        } else e && !m(t.style.backgroundImage, e) && (c(t, "backgroundImage", `url(${ji(e)})`), v(t, Mt("load", !1)));
    }
    const cl = [
        "data-src",
        "data-srcset",
        "sizes"
    ];
    function Wn(t, e) {
        for (const i of cl){
            const s = tt(t, i);
            s && p(e, i.replace(/^(data-)+/, ""), s);
        }
    }
    function ul(t, e, i) {
        const s = new Image;
        return fl(s, i), Wn(t, s), s.onload = ()=>{
            ms(t, s.currentSrc);
        }, p(s, "src", e), s;
    }
    function fl(t, e) {
        if (e = dl(e), e.length) {
            const i = zt("<picture>");
            for (const s of e){
                const n = zt("<source>");
                p(n, s), L(i, n);
            }
            L(i, t);
        }
    }
    function dl(t) {
        if (!t) return [];
        if (ot(t, "[")) try {
            t = JSON.parse(t);
        } catch  {
            t = [];
        }
        else t = Me(t);
        return Q(t) || (t = [
            t
        ]), t.filter((e)=>!ye(e));
    }
    function pl(t) {
        xi(t) && !$t(t, "src") && p(t, "src", 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"></svg>');
    }
    function xi(t) {
        return G(t, "img");
    }
    var yi = {
        props: {
            media: Boolean
        },
        data: {
            media: !1
        },
        connected () {
            const t = gl(this.media, this.$el);
            if (this.matchMedia = !0, t) {
                this.mediaObj = window.matchMedia(t);
                const e = ()=>{
                    this.matchMedia = this.mediaObj.matches, v(this.$el, Mt("mediachange", !1, !0, [
                        this.mediaObj
                    ]));
                };
                this.offMediaObj = $(this.mediaObj, "change", ()=>{
                    e(), this.$emit("resize");
                }), e();
            }
        },
        disconnected () {
            var t;
            (t = this.offMediaObj) == null || t.call(this);
        }
    };
    function gl(t, e) {
        if (D(t)) {
            if (ot(t, "@")) t = x(c(e, `--uk-breakpoint-${t.substr(1)}`));
            else if (isNaN(t)) return t;
        }
        return t && bt(t) ? `(min-width: ${t}px)` : "";
    }
    var ml = {
        mixins: [
            st,
            yi
        ],
        props: {
            fill: String
        },
        data: {
            fill: "",
            clsWrapper: "uk-leader-fill",
            clsHide: "uk-leader-hide",
            attrFill: "data-fill"
        },
        computed: {
            fill ({ fill: t }) {
                return t || c(this.$el, "--uk-leader-fill-content");
            }
        },
        connected () {
            [this.wrapper] = Ji(this.$el, `<span class="${this.clsWrapper}">`);
        },
        disconnected () {
            _e(this.wrapper.childNodes);
        },
        observe: pt(),
        update: {
            read () {
                return {
                    width: Math.trunc(this.$el.offsetWidth / 2),
                    fill: this.fill,
                    hide: !this.matchMedia
                };
            },
            write ({ width: t, fill: e, hide: i }) {
                q(this.wrapper, this.clsHide, i), p(this.wrapper, this.attrFill, new Array(t).join(e));
            },
            events: [
                "resize"
            ]
        }
    };
    const nt = [];
    var vs = {
        mixins: [
            st,
            Le,
            Vt
        ],
        props: {
            selPanel: String,
            selClose: String,
            escClose: Boolean,
            bgClose: Boolean,
            stack: Boolean,
            role: String
        },
        data: {
            cls: "uk-open",
            escClose: !0,
            bgClose: !0,
            overlay: !0,
            stack: !1,
            role: "dialog"
        },
        computed: {
            panel ({ selPanel: t }, e) {
                return w(t, e);
            },
            transitionElement () {
                return this.panel;
            },
            bgClose ({ bgClose: t }) {
                return t && this.panel;
            }
        },
        connected () {
            p(this.panel || this.$el, "role", this.role), this.overlay && p(this.panel || this.$el, "aria-modal", !0);
        },
        beforeDisconnect () {
            m(nt, this) && this.toggleElement(this.$el, !1, !1);
        },
        events: [
            {
                name: "click",
                delegate () {
                    return `${this.selClose},a[href*="#"]`;
                },
                handler (t) {
                    const { current: e, defaultPrevented: i } = t, { hash: s } = e;
                    !i && s && le(e) && !B(s, this.$el) && w(s, document.body) ? this.hide() : C(e, this.selClose) && (t.preventDefault(), this.hide());
                }
            },
            {
                name: "toggle",
                self: !0,
                handler (t) {
                    t.defaultPrevented || (t.preventDefault(), this.isToggled() === m(nt, this) && this.toggle());
                }
            },
            {
                name: "beforeshow",
                self: !0,
                handler (t) {
                    if (m(nt, this)) return !1;
                    !this.stack && nt.length ? (Promise.all(nt.map((e)=>e.hide())).then(this.show), t.preventDefault()) : nt.push(this);
                }
            },
            {
                name: "show",
                self: !0,
                handler () {
                    this.stack && c(this.$el, "zIndex", x(c(this.$el, "zIndex")) + nt.length);
                    const t = [
                        this.overlay && wl(this),
                        this.overlay && An(this.$el),
                        this.bgClose && bl(this),
                        this.escClose && $l(this)
                    ];
                    j(this.$el, "hidden", ()=>t.forEach((e)=>e && e()), {
                        self: !0
                    }), y(document.documentElement, this.clsPage);
                }
            },
            {
                name: "shown",
                self: !0,
                handler () {
                    ti(this.$el) || p(this.$el, "tabindex", "-1"), C(this.$el, ":focus-within") || this.$el.focus();
                }
            },
            {
                name: "hidden",
                self: !0,
                handler () {
                    m(nt, this) && nt.splice(nt.indexOf(this), 1), c(this.$el, "zIndex", ""), nt.some((t)=>t.clsPage === this.clsPage) || M(document.documentElement, this.clsPage);
                }
            }
        ],
        methods: {
            toggle () {
                return this.isToggled() ? this.hide() : this.show();
            },
            show () {
                return this.container && O(this.$el) !== this.container ? (L(this.container, this.$el), new Promise((t)=>requestAnimationFrame(()=>this.show().then(t)))) : this.toggleElement(this.$el, !0, Rn);
            },
            hide () {
                return this.toggleElement(this.$el, !1, Rn);
            }
        }
    };
    function Rn(t, e, { transitionElement: i, _toggle: s }) {
        return new Promise((n, o)=>j(t, "show hide", ()=>{
                var r;
                (r = t._reject) == null || r.call(t), t._reject = o, s(t, e);
                const a = j(i, "transitionstart", ()=>{
                    j(i, "transitionend transitioncancel", n, {
                        self: !0
                    }), clearTimeout(l);
                }, {
                    self: !0
                }), l = setTimeout(()=>{
                    a(), n();
                }, vl(c(i, "transitionDuration")));
            })).then(()=>delete t._reject);
    }
    function vl(t) {
        return t ? Zt(t, "ms") ? x(t) : x(t) * 1e3 : 0;
    }
    function wl(t) {
        return $(document, "focusin", (e)=>{
            oe(nt) === t && !B(e.target, t.$el) && t.$el.focus();
        });
    }
    function bl(t) {
        return $(document, mt, ({ target: e })=>{
            oe(nt) !== t || t.overlay && !B(e, t.$el) || B(e, t.panel) || j(document, `${Pt} ${li} scroll`, ({ defaultPrevented: i, type: s, target: n })=>{
                !i && s === Pt && e === n && t.hide();
            }, !0);
        });
    }
    function $l(t) {
        return $(document, "keydown", (e)=>{
            e.keyCode === 27 && oe(nt) === t && t.hide();
        });
    }
    var xl = {
        install: yl,
        mixins: [
            vs
        ],
        data: {
            clsPage: "uk-modal-page",
            selPanel: ".uk-modal-dialog",
            selClose: ".uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full"
        },
        events: [
            {
                name: "show",
                self: !0,
                handler () {
                    P(this.panel, "uk-margin-auto-vertical") ? y(this.$el, "uk-flex") : c(this.$el, "display", "block"), et(this.$el);
                }
            },
            {
                name: "hidden",
                self: !0,
                handler () {
                    c(this.$el, "display", ""), M(this.$el, "uk-flex");
                }
            }
        ]
    };
    function yl({ modal: t }) {
        t.dialog = function(i, s) {
            const n = t(`<div class="uk-modal"> <div class="uk-modal-dialog">${i}</div> </div>`, {
                stack: !0,
                role: "alertdialog",
                ...s
            });
            return n.show(), $(n.$el, "hidden", async ()=>{
                await Promise.resolve(), n.$destroy(!0);
            }, {
                self: !0
            }), n;
        }, t.alert = function(i, s) {
            return e(({ i18n: n })=>`<div class="uk-modal-body">${D(i) ? i : Nt(i)}</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-primary uk-modal-close" autofocus>${n.ok}</button> </div>`, s);
        }, t.confirm = function(i, s) {
            return e(({ i18n: n })=>`<form> <div class="uk-modal-body">${D(i) ? i : Nt(i)}</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">${n.cancel}</button> <button class="uk-button uk-button-primary" autofocus>${n.ok}</button> </div> </form>`, s, ()=>Promise.reject());
        }, t.prompt = function(i, s, n) {
            const o = e(({ i18n: l })=>`<form class="uk-form-stacked"> <div class="uk-modal-body"> <label>${D(i) ? i : Nt(i)}</label> <input class="uk-input" value="${s || ""}" autofocus> </div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">${l.cancel}</button> <button class="uk-button uk-button-primary">${l.ok}</button> </div> </form>`, n, ()=>null, ()=>a.value), { $el: r } = o.dialog, a = w("input", r);
            return $(r, "show", ()=>a.select()), o;
        }, t.i18n = {
            ok: "Ok",
            cancel: "Cancel"
        };
        function e(i, s, n = S, o = S) {
            s = {
                bgClose: !1,
                escClose: !0,
                ...s,
                i18n: {
                    ...t.i18n,
                    ...s == null ? void 0 : s.i18n
                }
            };
            const r = t.dialog(i(s), s);
            return wt(new Promise((a)=>{
                const l = $(r.$el, "hide", ()=>a(n()));
                $(r.$el, "submit", "form", (h)=>{
                    h.preventDefault(), a(o(r)), l(), r.hide();
                });
            }), {
                dialog: r
            });
        }
    }
    var kl = {
        extends: Tn,
        data: {
            targets: "> .uk-parent",
            toggle: "> a",
            content: "> ul"
        }
    }, Sl = {
        extends: Dn,
        data: {
            clsDrop: "uk-navbar-dropdown",
            selNavItem: ".uk-navbar-nav > li > a,a.uk-navbar-item,button.uk-navbar-item,.uk-navbar-item a,.uk-navbar-item button,.uk-navbar-toggle"
        },
        watch: {
            items () {
                const t = P(this.$el, "uk-navbar-justify");
                for (const e of z(".uk-navbar-nav, .uk-navbar-left, .uk-navbar-right", this.$el))c(e, "flexGrow", t ? z(".uk-navbar-nav > li > a, .uk-navbar-item, .uk-navbar-toggle", e).length : "");
            }
        }
    }, Il = {
        mixins: [
            vs
        ],
        args: "mode",
        props: {
            mode: String,
            flip: Boolean,
            overlay: Boolean,
            swiping: Boolean
        },
        data: {
            mode: "slide",
            flip: !1,
            overlay: !1,
            clsPage: "uk-offcanvas-page",
            clsContainer: "uk-offcanvas-container",
            selPanel: ".uk-offcanvas-bar",
            clsFlip: "uk-offcanvas-flip",
            clsContainerAnimation: "uk-offcanvas-container-animation",
            clsSidebarAnimation: "uk-offcanvas-bar-animation",
            clsMode: "uk-offcanvas",
            clsOverlay: "uk-offcanvas-overlay",
            selClose: ".uk-offcanvas-close",
            container: !1,
            swiping: !0
        },
        computed: {
            clsFlip ({ flip: t, clsFlip: e }) {
                return t ? e : "";
            },
            clsOverlay ({ overlay: t, clsOverlay: e }) {
                return t ? e : "";
            },
            clsMode ({ mode: t, clsMode: e }) {
                return `${e}-${t}`;
            },
            clsSidebarAnimation ({ mode: t, clsSidebarAnimation: e }) {
                return t === "none" || t === "reveal" ? "" : e;
            },
            clsContainerAnimation ({ mode: t, clsContainerAnimation: e }) {
                return t !== "push" && t !== "reveal" ? "" : e;
            },
            transitionElement ({ mode: t }) {
                return t === "reveal" ? O(this.panel) : this.panel;
            }
        },
        observe: Cn({
            filter: ({ swiping: t })=>t
        }),
        update: {
            read () {
                this.isToggled() && !R(this.$el) && this.hide();
            },
            events: [
                "resize"
            ]
        },
        events: [
            {
                name: "touchmove",
                self: !0,
                passive: !1,
                filter () {
                    return this.overlay;
                },
                handler (t) {
                    t.cancelable && t.preventDefault();
                }
            },
            {
                name: "show",
                self: !0,
                handler () {
                    this.mode === "reveal" && !P(O(this.panel), this.clsMode) && (oi(this.panel, "<div>"), y(O(this.panel), this.clsMode));
                    const { body: t, scrollingElement: e } = document;
                    y(t, this.clsContainer, this.clsFlip), c(t, "touch-action", "pan-y pinch-zoom"), c(this.$el, "display", "block"), c(this.panel, "maxWidth", e.clientWidth), y(this.$el, this.clsOverlay), y(this.panel, this.clsSidebarAnimation, this.mode === "reveal" ? "" : this.clsMode), et(t), y(t, this.clsContainerAnimation), this.clsContainerAnimation && Cl();
                }
            },
            {
                name: "hide",
                self: !0,
                handler () {
                    M(document.body, this.clsContainerAnimation), c(document.body, "touch-action", "");
                }
            },
            {
                name: "hidden",
                self: !0,
                handler () {
                    this.clsContainerAnimation && Tl(), this.mode === "reveal" && _e(this.panel), M(this.panel, this.clsSidebarAnimation, this.clsMode), M(this.$el, this.clsOverlay), c(this.$el, "display", ""), c(this.panel, "maxWidth", ""), M(document.body, this.clsContainer, this.clsFlip);
                }
            },
            {
                name: "swipeLeft swipeRight",
                handler (t) {
                    this.isToggled() && Zt(t.type, "Left") ^ this.flip && this.hide();
                }
            }
        ]
    };
    function Cl() {
        jn().content += ",user-scalable=0";
    }
    function Tl() {
        const t = jn();
        t.content = t.content.replace(/,user-scalable=0$/, "");
    }
    function jn() {
        return w('meta[name="viewport"]', document.head) || L(document.head, '<meta name="viewport">');
    }
    var El = {
        mixins: [
            st
        ],
        props: {
            selContainer: String,
            selContent: String,
            minHeight: Number
        },
        data: {
            selContainer: ".uk-modal",
            selContent: ".uk-modal-dialog",
            minHeight: 150
        },
        computed: {
            container ({ selContainer: t }, e) {
                return U(e, t);
            },
            content ({ selContent: t }, e) {
                return U(e, t);
            }
        },
        observe: pt({
            target: ({ container: t, content: e })=>[
                    t,
                    e
                ]
        }),
        update: {
            read () {
                return !this.content || !this.container || !R(this.$el) ? !1 : {
                    max: Math.max(this.minHeight, et(this.container) - (b(this.content).height - et(this.$el)))
                };
            },
            write ({ max: t }) {
                c(this.$el, {
                    minHeight: this.minHeight,
                    maxHeight: t
                });
            },
            events: [
                "resize"
            ]
        }
    }, Pl = {
        props: [
            "width",
            "height"
        ],
        connected () {
            y(this.$el, "uk-responsive-width");
        },
        observe: pt({
            target: ({ $el: t })=>[
                    t,
                    O(t)
                ]
        }),
        update: {
            read () {
                return R(this.$el) && this.width && this.height ? {
                    width: Ae(O(this.$el)),
                    height: this.height
                } : !1;
            },
            write (t) {
                et(this.$el, Qe.contain({
                    height: this.height,
                    width: this.width
                }, t).height);
            },
            events: [
                "resize"
            ]
        }
    }, _l = {
        props: {
            offset: Number
        },
        data: {
            offset: 0
        },
        connected () {
            Al(this);
        },
        disconnected () {
            Ol(this);
        },
        methods: {
            async scrollTo (t) {
                t = t && w(t) || document.body, v(this.$el, "beforescroll", [
                    this,
                    t
                ]) && (await Qs(t, {
                    offset: this.offset
                }), v(this.$el, "scrolled", [
                    this,
                    t
                ]));
            }
        }
    };
    const We = new Set;
    function Al(t) {
        We.size || $(document, "click", qn), We.add(t);
    }
    function Ol(t) {
        We.delete(t), We.size || Bt(document, "click", qn);
    }
    function qn(t) {
        if (!t.defaultPrevented) for (const e of We)B(t.target, e.$el) && le(e.$el) && (t.preventDefault(), window.location.href !== e.$el.href && window.history.pushState({}, "", e.$el.href), e.scrollTo(Wi(e.$el)));
    }
    var Dl = {
        args: "cls",
        props: {
            cls: String,
            target: String,
            hidden: Boolean,
            margin: String,
            repeat: Boolean,
            delay: Number
        },
        data: ()=>({
                cls: "",
                target: !1,
                hidden: !0,
                margin: "-1px",
                repeat: !1,
                delay: 0,
                inViewClass: "uk-scrollspy-inview"
            }),
        computed: {
            elements ({ target: t }, e) {
                return t ? z(t, e) : [
                    e
                ];
            }
        },
        watch: {
            elements (t) {
                this.hidden && c(Ce(t, `:not(.${this.inViewClass})`), "opacity", 0);
            }
        },
        connected () {
            this.elementData = new Map;
        },
        disconnected () {
            for (const [t, e] of this.elementData.entries())M(t, this.inViewClass, (e == null ? void 0 : e.cls) || "");
            delete this.elementData;
        },
        observe: ze({
            target: ({ elements: t })=>t,
            handler (t) {
                const e = this.elementData;
                for (const { target: i, isIntersecting: s } of t){
                    e.has(i) || e.set(i, {
                        cls: tt(i, "uk-scrollspy-class") || this.cls
                    });
                    const n = e.get(i);
                    !this.repeat && n.show || (n.show = s);
                }
                this.$emit();
            },
            options: (t)=>({
                    rootMargin: t.margin
                }),
            args: {
                intersecting: !1
            }
        }),
        update: [
            {
                write (t) {
                    for (const [e, i] of this.elementData.entries())i.show && !i.inview && !i.queued ? (i.queued = !0, t.promise = (t.promise || Promise.resolve()).then(()=>new Promise((s)=>setTimeout(s, this.delay))).then(()=>{
                        this.toggle(e, !0), setTimeout(()=>{
                            i.queued = !1, this.$emit();
                        }, 300);
                    })) : !i.show && i.inview && !i.queued && this.repeat && this.toggle(e, !1);
                }
            }
        ],
        methods: {
            toggle (t, e) {
                var i;
                const s = this.elementData.get(t);
                if (s) {
                    if ((i = s.off) == null || i.call(s), c(t, "opacity", !e && this.hidden ? 0 : ""), q(t, this.inViewClass, e), q(t, s.cls), /\buk-animation-/.test(s.cls)) {
                        const n = ()=>Vi(t, "uk-animation-[\\w-]+");
                        e ? s.off = j(t, "animationcancel animationend", n) : n();
                    }
                    v(t, e ? "inview" : "outview"), s.inview = e, this.$update(t);
                }
            }
        }
    }, Bl = {
        props: {
            cls: String,
            closest: String,
            scroll: Boolean,
            overflow: Boolean,
            offset: Number
        },
        data: {
            cls: "uk-active",
            closest: !1,
            scroll: !1,
            overflow: !0,
            offset: 0
        },
        computed: {
            links (t, e) {
                return z('a[href*="#"]', e).filter((i)=>i.hash && le(i));
            },
            elements ({ closest: t }) {
                return U(this.links, t || "*");
            }
        },
        watch: {
            links (t) {
                this.scroll && this.$create("scroll", t, {
                    offset: this.offset || 0
                });
            }
        },
        observe: [
            ze(),
            gi()
        ],
        update: [
            {
                read () {
                    const t = this.links.map(Wi).filter(Boolean), { length: e } = t;
                    if (!e || !R(this.$el)) return !1;
                    const i = _t(t, !0), { scrollTop: s, scrollHeight: n } = i, o = ct(i), r = n - o.height;
                    let a = !1;
                    if (s === r) a = e - 1;
                    else {
                        for(let l = 0; l < t.length && !(_(t[l]).top - o.top - this.offset > 0); l++)a = +l;
                        a === !1 && this.overflow && (a = 0);
                    }
                    return {
                        active: a
                    };
                },
                write ({ active: t }) {
                    const e = t !== !1 && !P(this.elements[t], this.cls);
                    this.links.forEach((i)=>i.blur());
                    for(let i = 0; i < this.elements.length; i++)q(this.elements[i], this.cls, +i === t);
                    e && v(this.$el, "active", [
                        t,
                        this.elements[t]
                    ]);
                },
                events: [
                    "scroll",
                    "resize"
                ]
            }
        ]
    }, Ml = {
        mixins: [
            st,
            yi
        ],
        props: {
            position: String,
            top: null,
            bottom: null,
            start: null,
            end: null,
            offset: String,
            overflowFlip: Boolean,
            animation: String,
            clsActive: String,
            clsInactive: String,
            clsFixed: String,
            clsBelow: String,
            selTarget: String,
            showOnUp: Boolean,
            targetOffset: Number
        },
        data: {
            position: "top",
            top: !1,
            bottom: !1,
            start: !1,
            end: !1,
            offset: 0,
            overflowFlip: !1,
            animation: "",
            clsActive: "uk-active",
            clsInactive: "",
            clsFixed: "uk-sticky-fixed",
            clsBelow: "uk-sticky-below",
            selTarget: "",
            showOnUp: !1,
            targetOffset: !1
        },
        computed: {
            selTarget ({ selTarget: t }, e) {
                return t && w(t, e) || e;
            }
        },
        connected () {
            this.start = Un(this.start || this.top), this.end = Un(this.end || this.bottom), this.placeholder = w("+ .uk-sticky-placeholder", this.$el) || w('<div class="uk-sticky-placeholder"></div>'), this.isFixed = !1, this.setActive(!1);
        },
        beforeDisconnect () {
            this.isFixed && (this.hide(), M(this.selTarget, this.clsInactive)), Vn(this.$el), lt(this.placeholder), this.placeholder = null;
        },
        observe: [
            pt({
                target: ({ $el: t })=>[
                        t,
                        document.scrollingElement
                    ]
            }),
            In(),
            gi()
        ],
        events: [
            {
                name: "load hashchange popstate",
                el () {
                    return window;
                },
                filter () {
                    return this.targetOffset !== !1;
                },
                handler () {
                    const { scrollingElement: t } = document;
                    !location.hash || t.scrollTop === 0 || setTimeout(()=>{
                        const e = _(w(location.hash)), i = _(this.$el);
                        this.isFixed && zi(e, i) && (t.scrollTop = e.top - i.height - ht(this.targetOffset, "height", this.placeholder) - ht(this.offset, "height", this.placeholder));
                    });
                }
            },
            {
                name: "transitionstart",
                capture: !0,
                handler () {
                    this.transitionInProgress = j(this.$el, "transitionend transitioncancel", ()=>this.transitionInProgress = null);
                }
            }
        ],
        update: [
            {
                read ({ height: t, width: e, margin: i, sticky: s }) {
                    if (this.inactive = !this.matchMedia || !R(this.$el), this.inactive) return;
                    const n = this.isFixed && !this.transitionInProgress;
                    n && (Yn(this.selTarget), this.hide()), this.active || ({ height: t, width: e } = _(this.$el), i = c(this.$el, "margin")), n && this.show();
                    const o = ht("100vh", "height"), r = et(window), a = document.scrollingElement.scrollHeight - o;
                    let l = this.position;
                    this.overflowFlip && t > o && (l = l === "top" ? "bottom" : "top");
                    const h = this.isFixed ? this.placeholder : this.$el;
                    let u = ht(this.offset, "height", s ? this.$el : h);
                    l === "bottom" && (t < r || this.overflowFlip) && (u += r - t);
                    const f = this.overflowFlip ? 0 : Math.max(0, t + u - o), d = _(h).top, g = _(this.$el).height, A = (this.start === !1 ? d : ws(this.start, this.$el, d)) - u, N = this.end === !1 ? a : Math.min(a, ws(this.end, this.$el, d + t, !0) - g - u + f);
                    return s = a && !this.showOnUp && A + u === d && N === Math.min(a, ws("!*", this.$el, 0, !0) - g - u + f) && c(O(this.$el), "overflowY") === "visible", {
                        start: A,
                        end: N,
                        offset: u,
                        overflow: f,
                        topOffset: d,
                        height: t,
                        elHeight: g,
                        width: e,
                        margin: i,
                        top: Ht(h)[0],
                        sticky: s
                    };
                },
                write ({ height: t, width: e, margin: i, offset: s, sticky: n }) {
                    if ((this.inactive || n || !this.isFixed) && Vn(this.$el), this.inactive) return;
                    n && (t = e = i = 0, c(this.$el, {
                        position: "sticky",
                        top: s
                    }));
                    const { placeholder: o } = this;
                    c(o, {
                        height: t,
                        width: e,
                        margin: i
                    }), B(o, document) || (o.hidden = !0), (n ? ii : si)(this.$el, o);
                },
                events: [
                    "resize"
                ]
            },
            {
                read ({ scroll: t = 0, dir: e = "down", overflow: i, overflowScroll: s = 0, start: n, end: o }) {
                    const r = document.scrollingElement.scrollTop;
                    return {
                        dir: t <= r ? "down" : "up",
                        prevDir: e,
                        scroll: r,
                        prevScroll: t,
                        offsetParentTop: _((this.isFixed ? this.placeholder : this.$el).offsetParent).top,
                        overflowScroll: Z(s + Z(r, n, o) - Z(t, n, o), 0, i)
                    };
                },
                write (t, e) {
                    const i = e.has("scroll"), { initTimestamp: s = 0, dir: n, prevDir: o, scroll: r, prevScroll: a = 0, top: l, start: h, topOffset: u, height: f } = t;
                    if (r < 0 || r === a && i || this.showOnUp && !i && !this.isFixed) return;
                    const d = Date.now();
                    if ((d - s > 300 || n !== o) && (t.initScroll = r, t.initTimestamp = d), !(this.showOnUp && !this.isFixed && Math.abs(t.initScroll - r) <= 30 && Math.abs(a - r) <= 10)) {
                        if (this.inactive || r < h || this.showOnUp && (r <= h || n === "down" && i || n === "up" && !this.isFixed && r <= u + f)) {
                            if (!this.isFixed) {
                                gt.inProgress(this.$el) && l > r && (gt.cancel(this.$el), this.hide());
                                return;
                            }
                            this.animation && r > u ? (gt.cancel(this.$el), gt.out(this.$el, this.animation).then(()=>this.hide(), S)) : this.hide();
                        } else this.isFixed ? this.update() : this.animation && r > u ? (gt.cancel(this.$el), this.show(), gt.in(this.$el, this.animation).catch(S)) : (Yn(this.selTarget), this.show());
                    }
                },
                events: [
                    "resize",
                    "resizeViewport",
                    "scroll"
                ]
            }
        ],
        methods: {
            show () {
                this.isFixed = !0, this.update(), this.placeholder.hidden = !1;
            },
            hide () {
                const { offset: t, sticky: e } = this._data;
                this.setActive(!1), M(this.$el, this.clsFixed, this.clsBelow), e ? c(this.$el, "top", t) : c(this.$el, {
                    position: "",
                    top: "",
                    width: "",
                    marginTop: ""
                }), this.placeholder.hidden = !0, this.isFixed = !1;
            },
            update () {
                let { width: t, scroll: e = 0, overflow: i, overflowScroll: s = 0, start: n, end: o, offset: r, topOffset: a, height: l, elHeight: h, offsetParentTop: u, sticky: f } = this._data;
                const d = n !== 0 || e > n;
                if (!f) {
                    let g = "fixed";
                    e > o && (r += o - u, g = "absolute"), c(this.$el, {
                        position: g,
                        width: t,
                        marginTop: 0
                    }, "important");
                }
                i && (r -= s), c(this.$el, "top", r), this.setActive(d), q(this.$el, this.clsBelow, e > a + (f ? Math.min(l, h) : l)), y(this.$el, this.clsFixed);
            },
            setActive (t) {
                const e = this.active;
                this.active = t, t ? (Yi(this.selTarget, this.clsInactive, this.clsActive), e !== t && v(this.$el, "active")) : (Yi(this.selTarget, this.clsActive, this.clsInactive), e !== t && v(this.$el, "inactive"));
            }
        }
    };
    function ws(t, e, i, s) {
        if (!t) return 0;
        if (bt(t) || D(t) && t.match(/^-?\d/)) return i + ht(t, "height", e, !0);
        {
            const n = t === !0 ? O(e) : at(t, e);
            return _(n).bottom - (s && n && B(e, n) ? x(c(n, "paddingBottom")) : 0);
        }
    }
    function Un(t) {
        return t === "true" ? !0 : t === "false" ? !1 : t;
    }
    function Vn(t) {
        c(t, {
            position: "",
            top: "",
            marginTop: "",
            width: ""
        });
    }
    function Yn(t) {
        c(t, "transition", "0s"), requestAnimationFrame(()=>c(t, "transition", ""));
    }
    function Gn(t) {
        return Math.ceil(Math.max(0, ...z("[stroke]", t).map((e)=>{
            try {
                return e.getTotalLength();
            } catch  {
                return 0;
            }
        })));
    }
    var Nl = {
        mixins: [
            Fn
        ],
        args: "src",
        props: {
            src: String,
            icon: String,
            attributes: "list",
            strokeAnimation: Boolean
        },
        data: {
            strokeAnimation: !1
        },
        observe: [
            Sn({
                async handler () {
                    const t = await this.svg;
                    t && Xn.call(this, t);
                },
                options: {
                    attributes: !0,
                    attributeFilter: [
                        "id",
                        "class",
                        "style"
                    ]
                }
            })
        ],
        async connected () {
            m(this.src, "#") && ([this.src, this.icon] = this.src.split("#"));
            const t = await this.svg;
            t && (Xn.call(this, t), this.strokeAnimation && Ll(t));
        },
        methods: {
            async getSvg () {
                return G(this.$el, "img") && !this.$el.complete && this.$el.loading === "lazy" ? new Promise((t)=>j(this.$el, "load", ()=>t(this.getSvg()))) : Fl(await zl(this.src), this.icon) || Promise.reject("SVG not found.");
            }
        }
    };
    function Xn(t) {
        const { $el: e } = this;
        y(t, p(e, "class"), "uk-svg");
        for(let i = 0; i < e.style.length; i++){
            const s = e.style[i];
            c(t, s, c(e, s));
        }
        for(const i in this.attributes){
            const [s, n] = this.attributes[i].split(":", 2);
            p(t, s, n);
        }
        this.$el.id || ke(t, "id");
    }
    const zl = dt(async (t)=>t ? ot(t, "data:") ? decodeURIComponent(t.split(",")[1]) : (await fetch(t)).text() : Promise.reject());
    function Fl(t, e) {
        return e && m(t, "<symbol") && (t = Hl(t)[e] || t), t = w(t.substr(t.indexOf("<svg"))), (t == null ? void 0 : t.hasChildNodes()) && t;
    }
    const Jn = /<symbol([^]*?id=(['"])(.+?)\2[^]*?<\/)symbol>/g, Hl = dt(function(t) {
        const e = {};
        Jn.lastIndex = 0;
        let i;
        for(; i = Jn.exec(t);)e[i[3]] = `<svg ${i[1]}svg>`;
        return e;
    });
    function Ll(t) {
        const e = Gn(t);
        e && c(t, "--uk-animation-stroke", e);
    }
    const bs = ".uk-disabled *, .uk-disabled, [disabled]";
    var Kn = {
        mixins: [
            Vt
        ],
        args: "connect",
        props: {
            connect: String,
            toggle: String,
            itemNav: String,
            active: Number,
            followFocus: Boolean,
            swiping: Boolean
        },
        data: {
            connect: "~.uk-switcher",
            toggle: "> * > :first-child",
            itemNav: !1,
            active: 0,
            cls: "uk-active",
            attrItem: "uk-switcher-item",
            selVertical: ".uk-nav",
            followFocus: !1,
            swiping: !0
        },
        computed: {
            connects ({ connect: t }, e) {
                return Te(t, e);
            },
            connectChildren () {
                return this.connects.map((t)=>T(t)).flat();
            },
            toggles ({ toggle: t }, e) {
                return z(t, e);
            },
            children () {
                return T(this.$el).filter((t)=>this.toggles.some((e)=>B(e, t)));
            }
        },
        watch: {
            connects (t) {
                this.swiping && c(t, "touchAction", "pan-y pinch-zoom"), this.$emit();
            },
            connectChildren () {
                let t = Math.max(0, this.index());
                for (const e of this.connects)T(e).forEach((i, s)=>q(i, this.cls, s === t));
                this.$emit();
            },
            toggles (t) {
                this.$emit();
                const e = this.index();
                this.show(~e ? e : t[this.active] || t[0]);
            }
        },
        connected () {
            p(this.$el, "role", "tablist");
        },
        observe: [
            Fe({
                targets: ({ connectChildren: t })=>t
            }),
            Cn({
                target: ({ connects: t })=>t,
                filter: ({ swiping: t })=>t
            })
        ],
        events: [
            {
                name: "click keydown",
                delegate () {
                    return this.toggle;
                },
                handler (t) {
                    !C(t.current, bs) && (t.type === "click" || t.keyCode === I.SPACE) && (t.preventDefault(), this.show(t.current));
                }
            },
            {
                name: "keydown",
                delegate () {
                    return this.toggle;
                },
                handler (t) {
                    const { current: e, keyCode: i } = t, s = C(this.$el, this.selVertical);
                    let n = i === I.HOME ? 0 : i === I.END ? "last" : i === I.LEFT && !s || i === I.UP && s ? "previous" : i === I.RIGHT && !s || i === I.DOWN && s ? "next" : -1;
                    if (~n) {
                        t.preventDefault();
                        const o = this.toggles.filter((a)=>!C(a, bs)), r = o[rt(n, o, o.indexOf(e))];
                        r.focus(), this.followFocus && this.show(r);
                    }
                }
            },
            {
                name: "click",
                el () {
                    return this.connects.concat(this.itemNav ? Te(this.itemNav, this.$el) : []);
                },
                delegate () {
                    return `[${this.attrItem}],[data-${this.attrItem}]`;
                },
                handler (t) {
                    U(t.target, "a,button") && (t.preventDefault(), this.show(tt(t.current, this.attrItem)));
                }
            },
            {
                name: "swipeRight swipeLeft",
                filter () {
                    return this.swiping;
                },
                el () {
                    return this.connects;
                },
                handler ({ type: t }) {
                    this.show(Zt(t, "Left") ? "next" : "previous");
                }
            }
        ],
        update () {
            var t;
            p(this.connects, "role", "presentation"), p(T(this.$el), "role", "presentation");
            for(const e in this.toggles){
                const i = this.toggles[e], s = (t = this.connects[0]) == null ? void 0 : t.children[e];
                p(i, "role", "tab"), s && (i.id = At(this, i, `-tab-${e}`), s.id = At(this, s, `-tabpanel-${e}`), p(i, "aria-controls", s.id), p(s, {
                    role: "tabpanel",
                    "aria-labelledby": i.id
                }));
            }
            p(this.$el, "aria-orientation", C(this.$el, this.selVertical) ? "vertical" : null);
        },
        methods: {
            index () {
                return xt(this.children, (t)=>P(t, this.cls));
            },
            show (t) {
                const e = this.toggles.filter((r)=>!C(r, bs)), i = this.index(), s = rt(!Xe(t) || m(e, t) ? t : 0, e, rt(this.toggles[i], e)), n = rt(e[s], this.toggles);
                this.children.forEach((r, a)=>{
                    q(r, this.cls, n === a), p(this.toggles[a], {
                        "aria-selected": n === a,
                        tabindex: n === a ? null : -1
                    });
                });
                const o = i >= 0 && i !== s;
                this.connects.forEach(async ({ children: r })=>{
                    const a = Qt(r).filter((l, h)=>h !== n && P(l, this.cls));
                    await this.toggleElement(a, !1, o), await this.toggleElement(r[n], !0, o);
                });
            }
        }
    }, Wl = {
        mixins: [
            st
        ],
        extends: Kn,
        props: {
            media: Boolean
        },
        data: {
            media: 960,
            attrItem: "uk-tab-item",
            selVertical: ".uk-tab-left,.uk-tab-right"
        },
        connected () {
            const t = P(this.$el, "uk-tab-left") ? "uk-tab-left" : P(this.$el, "uk-tab-right") ? "uk-tab-right" : !1;
            t && this.$create("toggle", this.$el, {
                cls: t,
                mode: "media",
                media: this.media
            });
        }
    };
    const Rl = 32;
    var jl = {
        mixins: [
            yi,
            Vt
        ],
        args: "target",
        props: {
            href: String,
            target: null,
            mode: "list",
            queued: Boolean
        },
        data: {
            href: !1,
            target: !1,
            mode: "click",
            queued: !0
        },
        computed: {
            target ({ target: t }, e) {
                return t = Te(t || e.hash, e), t.length && t || [
                    e
                ];
            }
        },
        connected () {
            m(this.mode, "media") || (ti(this.$el) || p(this.$el, "tabindex", "0"), !this.cls && G(this.$el, "a") && p(this.$el, "role", "button"));
        },
        observe: Fe({
            target: ({ target: t })=>t
        }),
        events: [
            {
                name: mt,
                filter () {
                    return m(this.mode, "hover");
                },
                handler (t) {
                    this._preventClick = null, !(!St(t) || ie(this._showState) || this.$el.disabled) && (v(this.$el, "focus"), j(document, mt, ()=>v(this.$el, "blur"), !0, (e)=>!B(e.target, this.$el)), m(this.mode, "click") && (this._preventClick = !0));
                }
            },
            {
                name: `${Rt} ${de} focus blur`,
                filter () {
                    return m(this.mode, "hover");
                },
                handler (t) {
                    if (St(t) || this.$el.disabled) return;
                    const e = m([
                        Rt,
                        "focus"
                    ], t.type), i = this.isToggled(this.target);
                    if (!e && (!ie(this._showState) || t.type === de && C(this.$el, ":focus") || t.type === "blur" && C(this.$el, ":hover"))) {
                        i === this._showState && (this._showState = null);
                        return;
                    }
                    e && ie(this._showState) && i !== this._showState || (this._showState = e ? i : null, this.toggle(`toggle${e ? "show" : "hide"}`));
                }
            },
            {
                name: "keydown",
                filter () {
                    return m(this.mode, "click") && !G(this.$el, "input");
                },
                handler (t) {
                    t.keyCode === Rl && (t.preventDefault(), this.$el.click());
                }
            },
            {
                name: "click",
                filter () {
                    return [
                        "click",
                        "hover"
                    ].some((t)=>m(this.mode, t));
                },
                handler (t) {
                    let e;
                    (this._preventClick || U(t.target, 'a[href="#"], a[href=""]') || (e = U(t.target, "a[href]")) && (!this.isToggled(this.target) || e.hash && C(this.target, e.hash))) && t.preventDefault(), !this._preventClick && m(this.mode, "click") && this.toggle();
                }
            },
            {
                name: "mediachange",
                filter () {
                    return m(this.mode, "media");
                },
                el () {
                    return this.target;
                },
                handler (t, e) {
                    e.matches ^ this.isToggled(this.target) && this.toggle();
                }
            }
        ],
        methods: {
            async toggle (t) {
                if (!v(this.target, t || "toggle", [
                    this
                ])) return;
                if ($t(this.$el, "aria-expanded") && p(this.$el, "aria-expanded", !this.isToggled(this.target)), !this.queued) return this.toggleElement(this.target);
                const e = this.target.filter((s)=>P(s, this.clsLeave));
                if (e.length) {
                    for (const s of this.target){
                        const n = m(e, s);
                        this.toggleElement(s, n, n);
                    }
                    return;
                }
                const i = this.target.filter(this.isToggled);
                await this.toggleElement(i, !1) && await this.toggleElement(this.target.filter((s)=>!m(i, s)), !0);
            }
        }
    }, ql = Object.freeze({
        __proto__: null,
        Accordion: Tn,
        Alert: la,
        Close: tl,
        Cover: ca,
        Drop: On,
        DropParentIcon: Yt,
        Dropdown: On,
        Dropnav: Dn,
        FormCustom: ba,
        Grid: xa,
        HeightMatch: Sa,
        HeightViewport: Ta,
        Icon: gs,
        Img: hl,
        Leader: ml,
        Margin: Mn,
        Marker: el,
        Modal: xl,
        Nav: kl,
        NavParentIcon: Ja,
        Navbar: Sl,
        NavbarParentIcon: Yt,
        NavbarToggleIcon: Qa,
        Offcanvas: Il,
        OverflowAuto: El,
        OverlayIcon: Yt,
        PaginationNext: sl,
        PaginationPrevious: nl,
        Responsive: Pl,
        Scroll: _l,
        Scrollspy: Dl,
        ScrollspyNav: Bl,
        SearchIcon: Ka,
        SlidenavNext: Ln,
        SlidenavPrevious: Ln,
        Spinner: Za,
        Sticky: Ml,
        Svg: Nl,
        Switcher: Kn,
        Tab: Wl,
        Toggle: jl,
        Totop: il,
        Video: En
    });
    Et(ql, (t, e)=>ft.component(e, t)), Zr(ft);
    const Ul = [
        "days",
        "hours",
        "minutes",
        "seconds"
    ];
    var Vl = {
        mixins: [
            st
        ],
        props: {
            date: String,
            clsWrapper: String,
            role: String
        },
        data: {
            date: "",
            clsWrapper: ".uk-countdown-%unit%",
            role: "timer"
        },
        connected () {
            p(this.$el, "role", this.role), this.date = x(Date.parse(this.$props.date)), this.end = !1, this.start();
        },
        disconnected () {
            this.stop();
        },
        events: {
            name: "visibilitychange",
            el () {
                return document;
            },
            handler () {
                document.hidden ? this.stop() : this.start();
            }
        },
        methods: {
            start () {
                this.stop(), this.update(), this.timer || (v(this.$el, "countdownstart"), this.timer = setInterval(this.update, 1e3));
            },
            stop () {
                this.timer && (clearInterval(this.timer), v(this.$el, "countdownstop"), this.timer = null);
            },
            update () {
                const t = Yl(this.date);
                t.total || (this.stop(), this.end || (v(this.$el, "countdownend"), this.end = !0));
                for (const e of Ul){
                    const i = w(this.clsWrapper.replace("%unit%", e), this.$el);
                    if (!i) continue;
                    let s = String(Math.trunc(t[e]));
                    s = s.length < 2 ? `0${s}` : s, i.textContent !== s && (s = s.split(""), s.length !== i.children.length && Nt(i, s.map(()=>"<span></span>").join("")), s.forEach((n, o)=>i.children[o].textContent = n));
                }
            }
        }
    };
    function Yl(t) {
        const e = Math.max(0, t - Date.now()) / 1e3;
        return {
            total: e,
            seconds: e % 60,
            minutes: e / 60 % 60,
            hours: e / 60 / 60 % 24,
            days: e / 60 / 60 / 24
        };
    }
    const $s = "uk-transition-leave", xs = "uk-transition-enter";
    function Zn(t, e, i, s = 0) {
        const n = ki(e, !0), o = {
            opacity: 1
        }, r = {
            opacity: 0
        }, a = (u)=>()=>n === ki(e) ? u() : Promise.reject(), l = a(async ()=>{
            y(e, $s), await Promise.all(to(e).map((u, f)=>new Promise((d)=>setTimeout(()=>E.start(u, r, i / 2, "ease").then(d), f * s)))), M(e, $s);
        }), h = a(async ()=>{
            const u = et(e);
            y(e, xs), t(), c(T(e), {
                opacity: 0
            }), await Gl();
            const f = T(e), d = et(e);
            c(e, "alignContent", "flex-start"), et(e, u);
            const g = to(e);
            c(f, r);
            const A = g.map(async (N, F)=>{
                await Xl(F * s), await E.start(N, o, i / 2, "ease");
            });
            u !== d && A.push(E.start(e, {
                height: d
            }, i / 2 + g.length * s, "ease")), await Promise.all(A).then(()=>{
                M(e, xs), n === ki(e) && (c(e, {
                    height: "",
                    alignContent: ""
                }), c(f, {
                    opacity: ""
                }), delete e.dataset.transition);
            });
        });
        return P(e, $s) ? Qn(e).then(h) : P(e, xs) ? Qn(e).then(l).then(h) : l().then(h);
    }
    function ki(t, e) {
        return e && (t.dataset.transition = 1 + ki(t)), kt(t.dataset.transition) || 0;
    }
    function Qn(t) {
        return Promise.all(T(t).filter(E.inProgress).map((e)=>new Promise((i)=>j(e, "transitionend transitioncanceled", i))));
    }
    function to(t) {
        return ps(T(t)).reduce((e, i)=>e.concat(Ke(i.filter((s)=>ns(s)), "offsetLeft")), []);
    }
    function Gl() {
        return new Promise((t)=>requestAnimationFrame(t));
    }
    function Xl(t) {
        return new Promise((e)=>setTimeout(e, t));
    }
    async function Jl(t, e, i) {
        await so();
        let s = T(e);
        const n = s.map((d)=>eo(d, !0)), o = {
            ...c(e, [
                "height",
                "padding"
            ]),
            display: "block"
        };
        await Promise.all(s.concat(e).map(E.cancel)), t(), s = s.concat(T(e).filter((d)=>!m(s, d))), await Promise.resolve(), J.flush();
        const r = p(e, "style"), a = c(e, [
            "height",
            "padding"
        ]), [l, h] = Kl(e, s, n), u = s.map((d)=>({
                style: p(d, "style")
            }));
        s.forEach((d, g)=>h[g] && c(d, h[g])), c(e, o), v(e, "scroll"), J.flush(), await so();
        const f = s.map((d, g)=>O(d) === e && E.start(d, l[g], i, "ease")).concat(E.start(e, a, i, "ease"));
        try {
            await Promise.all(f), s.forEach((d, g)=>{
                p(d, u[g]), O(d) === e && c(d, "display", l[g].opacity === 0 ? "none" : "");
            }), p(e, "style", r);
        } catch  {
            p(s, "style", ""), Zl(e, o);
        }
    }
    function eo(t, e) {
        const i = c(t, "zIndex");
        return R(t) ? {
            display: "",
            opacity: e ? c(t, "opacity") : "0",
            pointerEvents: "none",
            position: "absolute",
            zIndex: i === "auto" ? ae(t) : i,
            ...io(t)
        } : !1;
    }
    function Kl(t, e, i) {
        const s = e.map((o, r)=>O(o) && r in i ? i[r] ? R(o) ? io(o) : {
                opacity: 0
            } : {
                opacity: R(o) ? 1 : 0
            } : !1), n = s.map((o, r)=>{
            const a = O(e[r]) === t && (i[r] || eo(e[r]));
            if (!a) return !1;
            if (!o) delete a.opacity;
            else if (!("opacity" in o)) {
                const { opacity: l } = a;
                l % 1 ? o.opacity = 1 : delete a.opacity;
            }
            return a;
        });
        return [
            s,
            n
        ];
    }
    function Zl(t, e) {
        for(const i in e)c(t, i, "");
    }
    function io(t) {
        const { height: e, width: i } = _(t);
        return {
            height: e,
            width: i,
            transform: "",
            ...Ki(t),
            ...c(t, [
                "marginTop",
                "marginLeft"
            ])
        };
    }
    function so() {
        return new Promise((t)=>requestAnimationFrame(t));
    }
    var no = {
        props: {
            duration: Number,
            animation: Boolean
        },
        data: {
            duration: 150,
            animation: "slide"
        },
        methods: {
            animate (t, e = this.$el) {
                const i = this.animation;
                return (i === "fade" ? Zn : i === "delayed-fade" ? (...n)=>Zn(...n, 40) : i ? Jl : ()=>(t(), Promise.resolve()))(t, e, this.duration).catch(S);
            }
        }
    }, Ql = {
        mixins: [
            no
        ],
        args: "target",
        props: {
            target: String,
            selActive: Boolean
        },
        data: {
            target: "",
            selActive: !1,
            attrItem: "uk-filter-control",
            cls: "uk-active",
            duration: 250
        },
        computed: {
            toggles ({ attrItem: t }, e) {
                return z(`[${t}],[data-${t}]`, e);
            },
            children ({ target: t }, e) {
                return z(`${t} > *`, e);
            }
        },
        watch: {
            toggles (t) {
                this.updateState();
                const e = z(this.selActive, this.$el);
                for (const i of t){
                    this.selActive !== !1 && q(i, this.cls, m(e, i));
                    const s = oh(i);
                    G(s, "a") && p(s, "role", "button");
                }
            },
            children (t, e) {
                e && this.updateState();
            }
        },
        events: {
            name: "click keydown",
            delegate () {
                return `[${this.attrItem}],[data-${this.attrItem}]`;
            },
            handler (t) {
                t.type === "keydown" && t.keyCode !== I.SPACE || U(t.target, "a,button") && (t.preventDefault(), this.apply(t.current));
            }
        },
        methods: {
            apply (t) {
                const e = this.getState(), i = ro(t, this.attrItem, this.getState());
                th(e, i) || this.setState(i);
            },
            getState () {
                return this.toggles.filter((t)=>P(t, this.cls)).reduce((t, e)=>ro(e, this.attrItem, t), {
                    filter: {
                        "": ""
                    },
                    sort: []
                });
            },
            async setState (t, e = !0) {
                t = {
                    filter: {
                        "": ""
                    },
                    sort: [],
                    ...t
                }, v(this.$el, "beforeFilter", [
                    this,
                    t
                ]);
                for (const i of this.toggles)q(i, this.cls, ih(i, this.attrItem, t));
                await Promise.all(z(this.target, this.$el).map((i)=>{
                    const s = ()=>{
                        eh(t, i, T(i)), this.$update(this.$el);
                    };
                    return e ? this.animate(s, i) : s();
                })), v(this.$el, "afterFilter", [
                    this
                ]);
            },
            updateState () {
                J.write(()=>this.setState(this.getState(), !1));
            }
        }
    };
    function oo(t, e) {
        return Me(tt(t, e), [
            "filter"
        ]);
    }
    function th(t, e) {
        return [
            "filter",
            "sort"
        ].every((i)=>Je(t[i], e[i]));
    }
    function eh(t, e, i) {
        const s = sh(t);
        i.forEach((r)=>c(r, "display", s && !C(r, s) ? "none" : ""));
        const [n, o] = t.sort;
        if (n) {
            const r = nh(i, n, o);
            Je(r, i) || L(e, r);
        }
    }
    function ro(t, e, i) {
        const { filter: s, group: n, sort: o, order: r = "asc" } = oo(t, e);
        return (s || Y(o)) && (n ? s ? (delete i.filter[""], i.filter[n] = s) : (delete i.filter[n], (ye(i.filter) || "" in i.filter) && (i.filter = {
            "": s || ""
        })) : i.filter = {
            "": s || ""
        }), Y(o) || (i.sort = [
            o,
            r
        ]), i;
    }
    function ih(t, e, { filter: i = {
        "": ""
    }, sort: [s, n] }) {
        const { filter: o = "", group: r = "", sort: a, order: l = "asc" } = oo(t, e);
        return Y(a) ? r in i && o === i[r] || !o && r && !(r in i) && !i[""] : s === a && n === l;
    }
    function sh({ filter: t }) {
        let e = "";
        return Et(t, (i)=>e += i || ""), e;
    }
    function nh(t, e, i) {
        return [
            ...t
        ].sort((s, n)=>tt(s, e).localeCompare(tt(n, e), void 0, {
                numeric: !0
            }) * (i === "asc" || -1));
    }
    function oh(t) {
        return w("a,button", t) || t;
    }
    var ys = {
        slide: {
            show (t) {
                return [
                    {
                        transform: W(t * -100)
                    },
                    {
                        transform: W()
                    }
                ];
            },
            percent (t) {
                return Re(t);
            },
            translate (t, e) {
                return [
                    {
                        transform: W(e * -100 * t)
                    },
                    {
                        transform: W(e * 100 * (1 - t))
                    }
                ];
            }
        }
    };
    function Re(t) {
        return Math.abs(c(t, "transform").split(",")[4] / t.offsetWidth) || 0;
    }
    function W(t = 0, e = "%") {
        return t += t ? e : "", `translate3d(${t}, 0, 0)`;
    }
    function ve(t) {
        return `scale3d(${t}, ${t}, 1)`;
    }
    var ao = {
        ...ys,
        fade: {
            show () {
                return [
                    {
                        opacity: 0
                    },
                    {
                        opacity: 1
                    }
                ];
            },
            percent (t) {
                return 1 - c(t, "opacity");
            },
            translate (t) {
                return [
                    {
                        opacity: 1 - t
                    },
                    {
                        opacity: t
                    }
                ];
            }
        },
        scale: {
            show () {
                return [
                    {
                        opacity: 0,
                        transform: ve(0.8)
                    },
                    {
                        opacity: 1,
                        transform: ve(1)
                    }
                ];
            },
            percent (t) {
                return 1 - c(t, "opacity");
            },
            translate (t) {
                return [
                    {
                        opacity: 1 - t,
                        transform: ve(1 - .2 * t)
                    },
                    {
                        opacity: t,
                        transform: ve(0.8 + .2 * t)
                    }
                ];
            }
        }
    };
    function rh(t, e, i, { animation: s, easing: n }) {
        const { percent: o, translate: r, show: a = S } = s, l = a(i);
        let h;
        return {
            dir: i,
            show (u, f = 0, d) {
                const g = d ? "linear" : n;
                return u -= Math.round(u * Z(f, -1, 1)), this.translate(f), Si(e, "itemin", {
                    percent: f,
                    duration: u,
                    timing: g,
                    dir: i
                }), Si(t, "itemout", {
                    percent: 1 - f,
                    duration: u,
                    timing: g,
                    dir: i
                }), new Promise((A)=>{
                    h || (h = A), Promise.all([
                        E.start(e, l[1], u, g),
                        E.start(t, l[0], u, g)
                    ]).then(()=>{
                        this.reset(), h();
                    }, S);
                });
            },
            cancel () {
                return E.cancel([
                    e,
                    t
                ]);
            },
            reset () {
                for(const u in l[0])c([
                    e,
                    t
                ], u, "");
            },
            async forward (u, f = this.percent()) {
                return await this.cancel(), this.show(u, f, !0);
            },
            translate (u) {
                this.reset();
                const f = r(u, i);
                c(e, f[1]), c(t, f[0]), Si(e, "itemtranslatein", {
                    percent: u,
                    dir: i
                }), Si(t, "itemtranslateout", {
                    percent: 1 - u,
                    dir: i
                });
            },
            percent () {
                return o(t || e, e, i);
            },
            getDistance () {
                return t == null ? void 0 : t.offsetWidth;
            }
        };
    }
    function Si(t, e, i) {
        v(t, Mt(e, !1, !1, i));
    }
    var ah = {
        i18n: {
            next: "Next slide",
            previous: "Previous slide",
            slideX: "Slide %s",
            slideLabel: "%s of %s",
            role: "String"
        },
        data: {
            selNav: !1,
            role: "region"
        },
        computed: {
            nav ({ selNav: t }, e) {
                return w(t, e);
            },
            navChildren () {
                return T(this.nav);
            },
            selNavItem ({ attrItem: t }) {
                return `[${t}],[data-${t}]`;
            },
            navItems (t, e) {
                return z(this.selNavItem, e);
            }
        },
        watch: {
            nav (t, e) {
                p(t, "role", "tablist"), e && this.$emit();
            },
            list (t) {
                p(t, "role", "presentation");
            },
            navChildren (t) {
                p(t, "role", "presentation");
            },
            navItems (t) {
                for (const e of t){
                    const i = tt(e, this.attrItem), s = w("a,button", e) || e;
                    let n, o = null;
                    if (bt(i)) {
                        const r = kt(i), a = this.slides[r];
                        a && (a.id || (a.id = At(this, a, `-item-${i}`)), o = a.id), n = this.t("slideX", x(i) + 1), p(s, "role", "tab");
                    } else this.list && (this.list.id || (this.list.id = At(this, this.list, "-items")), o = this.list.id), n = this.t(i);
                    p(s, {
                        "aria-controls": o,
                        "aria-label": p(s, "aria-label") || n
                    });
                }
            },
            slides (t) {
                t.forEach((e, i)=>p(e, {
                        role: this.nav ? "tabpanel" : "group",
                        "aria-label": this.t("slideLabel", i + 1, this.length),
                        "aria-roledescription": this.nav ? null : "slide"
                    }));
            },
            length (t) {
                const e = this.navChildren.length;
                if (this.nav && t !== e) {
                    Xi(this.nav);
                    for(let i = 0; i < t; i++)L(this.nav, `<li ${this.attrItem}="${i}"><a href></a></li>`);
                }
            }
        },
        connected () {
            p(this.$el, {
                role: this.role,
                "aria-roledescription": "carousel"
            });
        },
        update: [
            {
                write () {
                    this.navItems.concat(this.nav).forEach((t)=>t && (t.hidden = !this.maxIndex)), this.updateNav();
                },
                events: [
                    "resize"
                ]
            }
        ],
        events: [
            {
                name: "click keydown",
                delegate () {
                    return this.selNavItem;
                },
                handler (t) {
                    U(t.target, "a,button") && (t.type === "click" || t.keyCode === I.SPACE) && (t.preventDefault(), this.show(tt(t.current, this.attrItem)));
                }
            },
            {
                name: "itemshow",
                handler: "updateNav"
            },
            {
                name: "keydown",
                delegate () {
                    return this.selNavItem;
                },
                handler (t) {
                    const { current: e, keyCode: i } = t, s = tt(e, this.attrItem);
                    if (!bt(s)) return;
                    let n = i === I.HOME ? 0 : i === I.END ? "last" : i === I.LEFT ? "previous" : i === I.RIGHT ? "next" : -1;
                    ~n && (t.preventDefault(), this.show(n));
                }
            }
        ],
        methods: {
            updateNav () {
                const t = this.getValidIndex();
                let e, i;
                for (const s of this.navItems){
                    const n = tt(s, this.attrItem), o = w("a,button", s) || s;
                    if (bt(n)) {
                        const a = kt(n) === t;
                        q(s, this.clsActive, a), p(o, {
                            "aria-selected": a,
                            tabindex: a ? null : -1
                        }), a && (i = o), e || (e = C(o, ":focus"));
                    } else q(s, "uk-invisible", this.finite && (n === "previous" && t === 0 || n === "next" && t >= this.maxIndex));
                    e && i && i.focus();
                }
            }
        }
    };
    const ks = {
        passive: !1,
        capture: !0
    }, lo = {
        passive: !0,
        capture: !0
    }, lh = "touchstart mousedown", Ss = "touchmove mousemove", ho = "touchend touchcancel mouseup click input scroll";
    var hh = {
        props: {
            draggable: Boolean
        },
        data: {
            draggable: !0,
            threshold: 10
        },
        created () {
            for (const t of [
                "start",
                "move",
                "end"
            ]){
                const e = this[t];
                this[t] = (i)=>{
                    const s = he(i).x * (X ? -1 : 1);
                    this.prevPos = s === this.pos ? this.prevPos : this.pos, this.pos = s, e(i);
                };
            }
        },
        events: [
            {
                name: lh,
                passive: !0,
                delegate () {
                    return `${this.selList} > *`;
                },
                handler (t) {
                    !this.draggable || !St(t) && ch(t.target) || U(t.target, Se) || t.button > 0 || this.length < 2 || this.start(t);
                }
            },
            {
                name: "dragstart",
                handler (t) {
                    t.preventDefault();
                }
            },
            {
                name: Ss,
                el () {
                    return this.list;
                },
                handler: S,
                ...ks
            }
        ],
        methods: {
            start () {
                this.drag = this.pos, this._transitioner ? (this.percent = this._transitioner.percent(), this.drag += this._transitioner.getDistance() * this.percent * this.dir, this._transitioner.cancel(), this._transitioner.translate(this.percent), this.dragging = !0, this.stack = []) : this.prevIndex = this.index, $(document, Ss, this.move, ks), $(document, ho, this.end, lo), c(this.list, "userSelect", "none");
            },
            move (t) {
                const e = this.pos - this.drag;
                if (e === 0 || this.prevPos === this.pos || !this.dragging && Math.abs(e) < this.threshold) return;
                c(this.list, "pointerEvents", "none"), t.cancelable && t.preventDefault(), this.dragging = !0, this.dir = e < 0 ? 1 : -1;
                let { slides: i, prevIndex: s } = this, n = Math.abs(e), o = this.getIndex(s + this.dir), r = this._getDistance(s, o);
                for(; o !== s && n > r;)this.drag -= r * this.dir, s = o, n -= r, o = this.getIndex(s + this.dir), r = this._getDistance(s, o);
                this.percent = n / r;
                const a = i[s], l = i[o], h = this.index !== o, u = s === o;
                let f;
                for (const d of [
                    this.index,
                    this.prevIndex
                ])m([
                    o,
                    s
                ], d) || (v(i[d], "itemhidden", [
                    this
                ]), u && (f = !0, this.prevIndex = s));
                (this.index === s && this.prevIndex !== s || f) && v(i[this.index], "itemshown", [
                    this
                ]), h && (this.prevIndex = s, this.index = o, !u && v(a, "beforeitemhide", [
                    this
                ]), v(l, "beforeitemshow", [
                    this
                ])), this._transitioner = this._translate(Math.abs(this.percent), a, !u && l), h && (!u && v(a, "itemhide", [
                    this
                ]), v(l, "itemshow", [
                    this
                ]));
            },
            end () {
                if (Bt(document, Ss, this.move, ks), Bt(document, ho, this.end, lo), this.dragging) {
                    if (this.dragging = null, this.index === this.prevIndex) this.percent = 1 - this.percent, this.dir *= -1, this._show(!1, this.index, !0), this._transitioner = null;
                    else {
                        const t = (X ? this.dir * (X ? 1 : -1) : this.dir) < 0 == this.prevPos > this.pos;
                        this.index = t ? this.index : this.prevIndex, t && (this.percent = 1 - this.percent), this.show(this.dir > 0 && !t || this.dir < 0 && t ? "next" : "previous", !0);
                    }
                }
                c(this.list, {
                    userSelect: "",
                    pointerEvents: ""
                }), this.drag = this.percent = null;
            },
            _getDistance (t, e) {
                return this._getTransitioner(t, t !== e && e).getDistance() || this.slides[t].offsetWidth;
            }
        }
    };
    function ch(t) {
        return c(t, "userSelect") !== "none" && Qt(t.childNodes).some((e)=>e.nodeType === 3 && e.textContent.trim());
    }
    var uh = {
        props: {
            autoplay: Boolean,
            autoplayInterval: Number,
            pauseOnHover: Boolean
        },
        data: {
            autoplay: !1,
            autoplayInterval: 7e3,
            pauseOnHover: !0
        },
        connected () {
            p(this.list, "aria-live", this.autoplay ? "off" : "polite"), this.autoplay && this.startAutoplay();
        },
        disconnected () {
            this.stopAutoplay();
        },
        update () {
            p(this.slides, "tabindex", "-1");
        },
        events: [
            {
                name: "visibilitychange",
                el () {
                    return document;
                },
                filter () {
                    return this.autoplay;
                },
                handler () {
                    document.hidden ? this.stopAutoplay() : this.startAutoplay();
                }
            }
        ],
        methods: {
            startAutoplay () {
                this.stopAutoplay(), this.interval = setInterval(()=>{
                    this.stack.length || this.draggable && C(this.$el, ":focus-within") || this.pauseOnHover && C(this.$el, ":hover") || this.show("next");
                }, this.autoplayInterval);
            },
            stopAutoplay () {
                clearInterval(this.interval);
            }
        }
    }, co = {
        mixins: [
            uh,
            hh,
            ah,
            wi
        ],
        props: {
            clsActivated: Boolean,
            easing: String,
            index: Number,
            finite: Boolean,
            velocity: Number
        },
        data: ()=>({
                easing: "ease",
                finite: !1,
                velocity: 1,
                index: 0,
                prevIndex: -1,
                stack: [],
                percent: 0,
                clsActive: "uk-active",
                clsActivated: !1,
                Transitioner: !1,
                transitionOptions: {}
            }),
        connected () {
            this.prevIndex = -1, this.index = this.getValidIndex(this.$props.index), this.stack = [];
        },
        disconnected () {
            M(this.slides, this.clsActive);
        },
        computed: {
            duration ({ velocity: t }, e) {
                return uo(e.offsetWidth / t);
            },
            list ({ selList: t }, e) {
                return w(t, e);
            },
            maxIndex () {
                return this.length - 1;
            },
            slides () {
                return T(this.list);
            },
            length () {
                return this.slides.length;
            }
        },
        watch: {
            slides (t, e) {
                e && this.$emit();
            }
        },
        observe: pt(),
        methods: {
            show (t, e = !1) {
                var i;
                if (this.dragging || !this.length) return;
                const { stack: s } = this, n = e ? 0 : s.length, o = ()=>{
                    s.splice(n, 1), s.length && this.show(s.shift(), !0);
                };
                if (s[e ? "unshift" : "push"](t), !e && s.length > 1) {
                    s.length === 2 && ((i = this._transitioner) == null || i.forward(Math.min(this.duration, 200)));
                    return;
                }
                const r = this.getIndex(this.index), a = P(this.slides, this.clsActive) && this.slides[r], l = this.getIndex(t, this.index), h = this.slides[l];
                if (a === h) {
                    o();
                    return;
                }
                if (this.dir = fh(t, r), this.prevIndex = r, this.index = l, a && !v(a, "beforeitemhide", [
                    this
                ]) || !v(h, "beforeitemshow", [
                    this,
                    a
                ])) {
                    this.index = this.prevIndex, o();
                    return;
                }
                const u = this._show(a, h, e).then(()=>{
                    a && v(a, "itemhidden", [
                        this
                    ]), v(h, "itemshown", [
                        this
                    ]), s.shift(), this._transitioner = null, requestAnimationFrame(()=>s.length && this.show(s.shift(), !0));
                });
                return a && v(a, "itemhide", [
                    this
                ]), v(h, "itemshow", [
                    this
                ]), u;
            },
            getIndex (t = this.index, e = this.index) {
                return Z(rt(t, this.slides, e, this.finite), 0, Math.max(0, this.maxIndex));
            },
            getValidIndex (t = this.index, e = this.prevIndex) {
                return this.getIndex(t, e);
            },
            _show (t, e, i) {
                if (this._transitioner = this._getTransitioner(t, e, this.dir, {
                    easing: i ? e.offsetWidth < 600 ? "cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "cubic-bezier(0.165, 0.84, 0.44, 1)" : this.easing,
                    ...this.transitionOptions
                }), !i && !t) return this._translate(1), Promise.resolve();
                const { length: s } = this.stack;
                return this._transitioner[s > 1 ? "forward" : "show"](s > 1 ? Math.min(this.duration, 75 + 75 / (s - 1)) : this.duration, this.percent);
            },
            _translate (t, e = this.prevIndex, i = this.index) {
                const s = this._getTransitioner(e === i ? !1 : e, i);
                return s.translate(t), s;
            },
            _getTransitioner (t = this.prevIndex, e = this.index, i = this.dir || 1, s = this.transitionOptions) {
                return new this.Transitioner(se(t) ? this.slides[t] : t, se(e) ? this.slides[e] : e, i * (X ? -1 : 1), s);
            }
        }
    };
    function fh(t, e) {
        return t === "next" ? 1 : t === "previous" || t < e ? -1 : 1;
    }
    function uo(t) {
        return .5 * t + 300;
    }
    var fo = {
        mixins: [
            co
        ],
        props: {
            animation: String
        },
        data: {
            animation: "slide",
            clsActivated: "uk-transition-active",
            Animations: ys,
            Transitioner: rh
        },
        computed: {
            animation ({ animation: t, Animations: e }) {
                return {
                    ...e[t] || e.slide,
                    name: t
                };
            },
            transitionOptions () {
                return {
                    animation: this.animation
                };
            }
        },
        events: {
            beforeitemshow ({ target: t }) {
                y(t, this.clsActive);
            },
            itemshown ({ target: t }) {
                y(t, this.clsActivated);
            },
            itemhidden ({ target: t }) {
                M(t, this.clsActive, this.clsActivated);
            }
        }
    }, po = {
        mixins: [
            vs,
            fo
        ],
        functional: !0,
        props: {
            delayControls: Number,
            preload: Number,
            videoAutoplay: Boolean,
            template: String
        },
        data: ()=>({
                preload: 1,
                videoAutoplay: !1,
                delayControls: 3e3,
                items: [],
                cls: "uk-open",
                clsPage: "uk-lightbox-page",
                selList: ".uk-lightbox-items",
                attrItem: "uk-lightbox-item",
                selClose: ".uk-close-large",
                selCaption: ".uk-lightbox-caption",
                pauseOnHover: !1,
                velocity: 2,
                Animations: ao,
                template: '<div class="uk-lightbox uk-overflow-hidden"> <ul class="uk-lightbox-items"></ul> <div class="uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque"> <button class="uk-lightbox-toolbar-icon uk-close-large" type="button" uk-close></button> </div> <a class="uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade" href uk-slidenav-previous uk-lightbox-item="previous"></a> <a class="uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade" href uk-slidenav-next uk-lightbox-item="next"></a> <div class="uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque"></div> </div>'
            }),
        created () {
            const t = w(this.template), e = w(this.selList, t);
            this.items.forEach(()=>L(e, "<li>"));
            const i = w("[uk-close]", t), s = this.t("close");
            i && s && (i.dataset.i18n = JSON.stringify({
                label: s
            })), this.$mount(L(this.container, t));
        },
        computed: {
            caption ({ selCaption: t }, e) {
                return w(t, e);
            }
        },
        events: [
            {
                name: `${ai} ${mt} keydown`,
                handler: "showControls"
            },
            {
                name: "click",
                self: !0,
                delegate () {
                    return `${this.selList} > *`;
                },
                handler (t) {
                    t.defaultPrevented || this.hide();
                }
            },
            {
                name: "shown",
                self: !0,
                handler () {
                    this.showControls();
                }
            },
            {
                name: "hide",
                self: !0,
                handler () {
                    this.hideControls(), M(this.slides, this.clsActive), E.stop(this.slides);
                }
            },
            {
                name: "hidden",
                self: !0,
                handler () {
                    this.$destroy(!0);
                }
            },
            {
                name: "keyup",
                el () {
                    return document;
                },
                handler ({ keyCode: t }) {
                    if (!this.isToggled(this.$el) || !this.draggable) return;
                    let e = -1;
                    t === I.LEFT ? e = "previous" : t === I.RIGHT ? e = "next" : t === I.HOME ? e = 0 : t === I.END && (e = "last"), ~e && this.show(e);
                }
            },
            {
                name: "beforeitemshow",
                handler (t) {
                    this.isToggled() || (this.draggable = !1, t.preventDefault(), this.toggleElement(this.$el, !0, !1), this.animation = ao.scale, M(t.target, this.clsActive), this.stack.splice(1, 0, this.index));
                }
            },
            {
                name: "itemshow",
                handler () {
                    Nt(this.caption, this.getItem().caption || "");
                    for(let t = -this.preload; t <= this.preload; t++)this.loadItem(this.index + t);
                }
            },
            {
                name: "itemshown",
                handler () {
                    this.draggable = this.$props.draggable;
                }
            },
            {
                name: "itemload",
                async handler (t, e) {
                    const { source: i, type: s, alt: n = "", poster: o, attrs: r = {} } = e;
                    if (this.setItem(e, "<span uk-spinner></span>"), !i) return;
                    let a;
                    const l = {
                        allowfullscreen: "",
                        style: "max-width: 100%; box-sizing: border-box;",
                        "uk-responsive": "",
                        "uk-video": `${this.videoAutoplay}`
                    };
                    if (s === "image" || i.match(/\.(avif|jpe?g|jfif|a?png|gif|svg|webp)($|\?)/i)) {
                        const h = je("img", {
                            src: i,
                            alt: n,
                            ...r
                        });
                        $(h, "load", ()=>this.setItem(e, h)), $(h, "error", ()=>this.setError(e));
                    } else if (s === "video" || i.match(/\.(mp4|webm|ogv)($|\?)/i)) {
                        const h = je("video", {
                            src: i,
                            poster: o,
                            controls: "",
                            playsinline: "",
                            "uk-video": `${this.videoAutoplay}`,
                            ...r
                        });
                        $(h, "loadedmetadata", ()=>this.setItem(e, h)), $(h, "error", ()=>this.setError(e));
                    } else if (s === "iframe" || i.match(/\.(html|php)($|\?)/i)) this.setItem(e, je("iframe", {
                        src: i,
                        allowfullscreen: "",
                        class: "uk-lightbox-iframe",
                        ...r
                    }));
                    else if (a = i.match(/\/\/(?:.*?youtube(-nocookie)?\..*?(?:[?&]v=|\/shorts\/)|youtu\.be\/)([\w-]{11})[&?]?(.*)?/)) this.setItem(e, je("iframe", {
                        src: `https://www.youtube${a[1] || ""}.com/embed/${a[2]}${a[3] ? `?${a[3]}` : ""}`,
                        width: 1920,
                        height: 1080,
                        ...l,
                        ...r
                    }));
                    else if (a = i.match(/\/\/.*?vimeo\.[a-z]+\/(\d+)[&?]?(.*)?/)) try {
                        const { height: h, width: u } = await (await fetch(`https://vimeo.com/api/oembed.json?maxwidth=1920&url=${encodeURI(i)}`, {
                            credentials: "omit"
                        })).json();
                        this.setItem(e, je("iframe", {
                            src: `https://player.vimeo.com/video/${a[1]}${a[2] ? `?${a[2]}` : ""}`,
                            width: u,
                            height: h,
                            ...l,
                            ...r
                        }));
                    } catch  {
                        this.setError(e);
                    }
                }
            }
        ],
        methods: {
            loadItem (t = this.index) {
                const e = this.getItem(t);
                this.getSlide(e).childElementCount || v(this.$el, "itemload", [
                    e
                ]);
            },
            getItem (t = this.index) {
                return this.items[rt(t, this.slides)];
            },
            setItem (t, e) {
                v(this.$el, "itemloaded", [
                    this,
                    Nt(this.getSlide(t), e)
                ]);
            },
            getSlide (t) {
                return this.slides[this.items.indexOf(t)];
            },
            setError (t) {
                this.setItem(t, '<span uk-icon="icon: bolt; ratio: 2"></span>');
            },
            showControls () {
                clearTimeout(this.controlsTimer), this.controlsTimer = setTimeout(this.hideControls, this.delayControls), y(this.$el, "uk-active", "uk-transition-active");
            },
            hideControls () {
                M(this.$el, "uk-active", "uk-transition-active");
            }
        }
    };
    function je(t, e) {
        const i = zt(`<${t}>`);
        return p(i, e), i;
    }
    var dh = {
        install: ph,
        props: {
            toggle: String
        },
        data: {
            toggle: "a"
        },
        computed: {
            toggles ({ toggle: t }, e) {
                return z(t, e);
            }
        },
        watch: {
            toggles (t) {
                this.hide();
                for (const e of t)G(e, "a") && p(e, "role", "button");
            }
        },
        disconnected () {
            this.hide();
        },
        events: {
            name: "click",
            delegate () {
                return `${this.toggle}:not(.uk-disabled)`;
            },
            handler (t) {
                t.preventDefault(), this.show(t.current);
            }
        },
        methods: {
            show (t) {
                const e = _s(this.toggles.map(go), "source");
                if (ee(t)) {
                    const { source: i } = go(t);
                    t = xt(e, ({ source: s })=>i === s);
                }
                return this.panel = this.panel || this.$create("lightboxPanel", {
                    ...this.$props,
                    items: e
                }), $(this.panel.$el, "hidden", ()=>this.panel = null), this.panel.show(t);
            },
            hide () {
                var t;
                return (t = this.panel) == null ? void 0 : t.hide();
            }
        }
    };
    function ph(t, e) {
        t.lightboxPanel || t.component("lightboxPanel", po), wt(e.props, t.component("lightboxPanel").options.props);
    }
    function go(t) {
        const e = {};
        for (const i of [
            "href",
            "caption",
            "type",
            "poster",
            "alt",
            "attrs"
        ])e[i === "href" ? "source" : i] = tt(t, i);
        return e.attrs = Me(e.attrs), e;
    }
    var gh = {
        mixins: [
            Le
        ],
        functional: !0,
        args: [
            "message",
            "status"
        ],
        data: {
            message: "",
            status: "",
            timeout: 5e3,
            group: null,
            pos: "top-center",
            clsContainer: "uk-notification",
            clsClose: "uk-notification-close",
            clsMsg: "uk-notification-message"
        },
        install: mh,
        computed: {
            marginProp ({ pos: t }) {
                return `margin${ot(t, "top") ? "Top" : "Bottom"}`;
            },
            startProps () {
                return {
                    opacity: 0,
                    [this.marginProp]: -this.$el.offsetHeight
                };
            }
        },
        created () {
            const t = `${this.clsContainer}-${this.pos}`;
            let e = w(`.${t}`, this.container);
            (!e || !R(e)) && (e = L(this.container, `<div class="${this.clsContainer} ${t}"></div>`)), this.$mount(L(e, `<div class="${this.clsMsg}${this.status ? ` ${this.clsMsg}-${this.status}` : ""}" role="alert"> <a href class="${this.clsClose}" data-uk-close></a> <div>${this.message}</div> </div>`));
        },
        async connected () {
            const t = x(c(this.$el, this.marginProp));
            await E.start(c(this.$el, this.startProps), {
                opacity: 1,
                [this.marginProp]: t
            }), this.timeout && (this.timer = setTimeout(this.close, this.timeout));
        },
        events: {
            click (t) {
                U(t.target, 'a[href="#"],a[href=""]') && t.preventDefault(), this.close();
            },
            [Rt] () {
                this.timer && clearTimeout(this.timer);
            },
            [de] () {
                this.timeout && (this.timer = setTimeout(this.close, this.timeout));
            }
        },
        methods: {
            async close (t) {
                const e = (i)=>{
                    const s = O(i);
                    v(i, "close", [
                        this
                    ]), lt(i), s != null && s.hasChildNodes() || lt(s);
                };
                this.timer && clearTimeout(this.timer), t || await E.start(this.$el, this.startProps), e(this.$el);
            }
        }
    };
    function mh(t) {
        t.notification.closeAll = function(e, i) {
            It(document.body, (s)=>{
                const n = t.getComponent(s, "notification");
                n && (!e || e === n.group) && n.close(i);
            });
        };
    }
    const Ii = {
        x: Ci,
        y: Ci,
        rotate: Ci,
        scale: Ci,
        color: Is,
        backgroundColor: Is,
        borderColor: Is,
        blur: Xt,
        hue: Xt,
        fopacity: Xt,
        grayscale: Xt,
        invert: Xt,
        saturate: Xt,
        sepia: Xt,
        opacity: wh,
        stroke: bh,
        bgx: wo,
        bgy: wo
    }, { keys: mo } = Object;
    var vo = {
        mixins: [
            yi
        ],
        props: yo(mo(Ii), "list"),
        data: yo(mo(Ii), void 0),
        computed: {
            props (t, e) {
                const i = {};
                for(const n in t)n in Ii && !Y(t[n]) && (i[n] = t[n].slice());
                const s = {};
                for(const n in i)s[n] = Ii[n](n, e, i[n], i);
                return s;
            }
        },
        events: {
            load () {
                this.$emit();
            }
        },
        methods: {
            reset () {
                for(const t in this.getCss(0))c(this.$el, t, "");
            },
            getCss (t) {
                const e = {
                    transform: "",
                    filter: ""
                };
                for(const i in this.props)this.props[i](e, Z(t));
                return e.willChange = Object.keys(e).filter((i)=>e[i] !== "").map(ei).join(","), e;
            }
        }
    };
    function Ci(t, e, i) {
        let s = Ei(i) || ({
            x: "px",
            y: "px",
            rotate: "deg"
        })[t] || "", n;
        return t === "x" || t === "y" ? (t = `translate${Ct(t)}`, n = (o)=>x(x(o).toFixed(s === "px" ? 0 : 6))) : t === "scale" && (s = "", n = (o)=>Ei([
                o
            ]) ? ht(o, "width", e, !0) / e.offsetWidth : o), i.length === 1 && i.unshift(t === "scale" ? 1 : 0), i = we(i, n), (o, r)=>{
            o.transform += ` ${t}(${qe(i, r)}${s})`;
        };
    }
    function Is(t, e, i) {
        return i.length === 1 && i.unshift(Ue(e, t, "")), i = we(i, (s)=>vh(e, s)), (s, n)=>{
            const [o, r, a] = xo(i, n), l = o.map((h, u)=>(h += a * (r[u] - h), u === 3 ? x(h) : parseInt(h, 10))).join(",");
            s[t] = `rgba(${l})`;
        };
    }
    function vh(t, e) {
        return Ue(t, "color", e).split(/[(),]/g).slice(1, -1).concat(1).slice(0, 4).map(x);
    }
    function Xt(t, e, i) {
        i.length === 1 && i.unshift(0);
        const s = Ei(i) || ({
            blur: "px",
            hue: "deg"
        })[t] || "%";
        return t = ({
            fopacity: "opacity",
            hue: "hue-rotate"
        })[t] || t, i = we(i), (n, o)=>{
            const r = qe(i, o);
            n.filter += ` ${t}(${r + s})`;
        };
    }
    function wh(t, e, i) {
        return i.length === 1 && i.unshift(Ue(e, t, "")), i = we(i), (s, n)=>{
            s[t] = qe(i, n);
        };
    }
    function bh(t, e, i) {
        i.length === 1 && i.unshift(0);
        const s = Ei(i), n = Gn(e);
        return i = we(i.reverse(), (o)=>(o = x(o), s === "%" ? o * n / 100 : o)), i.some(([o])=>o) ? (c(e, "strokeDasharray", n), (o, r)=>{
            o.strokeDashoffset = qe(i, r);
        }) : S;
    }
    function wo(t, e, i, s) {
        i.length === 1 && i.unshift(0);
        const n = t === "bgy" ? "height" : "width";
        s[t] = we(i, (a)=>ht(a, n, e));
        const o = [
            "bgx",
            "bgy"
        ].filter((a)=>a in s);
        if (o.length === 2 && t === "bgx") return S;
        if (Ue(e, "backgroundSize", "") === "cover") return $h(t, e, i, s);
        const r = {};
        for (const a of o)r[a] = bo(e, a);
        return $o(o, r, s);
    }
    function $h(t, e, i, s) {
        const n = xh(e);
        if (!n.width) return S;
        const o = {
            width: e.offsetWidth,
            height: e.offsetHeight
        }, r = [
            "bgx",
            "bgy"
        ].filter((u)=>u in s), a = {};
        for (const u of r){
            const f = s[u].map(([F])=>F), d = Math.min(...f), g = Math.max(...f), A = f.indexOf(d) < f.indexOf(g), N = g - d;
            a[u] = `${(A ? -N : 0) - (A ? d : g)}px`, o[u === "bgy" ? "height" : "width"] += N;
        }
        const l = Qe.cover(n, o);
        for (const u of r){
            const f = u === "bgy" ? "height" : "width", d = l[f] - o[f];
            a[u] = `max(${bo(e, u)},-${d}px) + ${a[u]}`;
        }
        const h = $o(r, a, s);
        return (u, f)=>{
            h(u, f), u.backgroundSize = `${l.width}px ${l.height}px`, u.backgroundRepeat = "no-repeat";
        };
    }
    function bo(t, e) {
        return Ue(t, `background-position-${e.substr(-1)}`, "");
    }
    function $o(t, e, i) {
        return function(s, n) {
            for (const o of t){
                const r = qe(i[o], n);
                s[`background-position-${o.substr(-1)}`] = `calc(${e[o]} + ${r}px)`;
            }
        };
    }
    const Ti = {};
    function xh(t) {
        const e = c(t, "backgroundImage").replace(/^none|url\(["']?(.+?)["']?\)$/, "$1");
        if (Ti[e]) return Ti[e];
        const i = new Image;
        return e && (i.src = e, !i.naturalWidth) ? (i.onload = ()=>{
            Ti[e] = Cs(i), v(t, Mt("load", !1));
        }, Cs(i)) : Ti[e] = Cs(i);
    }
    function Cs(t) {
        return {
            width: t.naturalWidth,
            height: t.naturalHeight
        };
    }
    function we(t, e = x) {
        const i = [], { length: s } = t;
        let n = 0;
        for(let o = 0; o < s; o++){
            let [r, a] = D(t[o]) ? t[o].trim().split(/ (?![^(]*\))/) : [
                t[o]
            ];
            if (r = e(r), a = a ? x(a) / 100 : null, o === 0 ? a === null ? a = 0 : a && i.push([
                r,
                0
            ]) : o === s - 1 && (a === null ? a = 1 : a !== 1 && (i.push([
                r,
                a
            ]), a = 1)), i.push([
                r,
                a
            ]), a === null) n++;
            else if (n) {
                const l = i[o - n - 1][1], h = (a - l) / (n + 1);
                for(let u = n; u > 0; u--)i[o - u][1] = l + h * (n - u + 1);
                n = 0;
            }
        }
        return i;
    }
    function xo(t, e) {
        const i = xt(t.slice(1), ([, s])=>e <= s) + 1;
        return [
            t[i - 1][0],
            t[i][0],
            (e - t[i - 1][1]) / (t[i][1] - t[i - 1][1])
        ];
    }
    function qe(t, e) {
        const [i, s, n] = xo(t, e);
        return se(i) ? i + Math.abs(i - s) * n * (i < s ? 1 : -1) : +s;
    }
    const yh = /^-?\d+(\S+)?/;
    function Ei(t, e) {
        var i;
        for (const s of t){
            const n = (i = s.match) == null ? void 0 : i.call(s, yh);
            if (n) return n[1];
        }
        return e;
    }
    function Ue(t, e, i) {
        const s = t.style[e], n = c(c(t, e, i), e);
        return t.style[e] = s, n;
    }
    function yo(t, e) {
        return t.reduce((i, s)=>(i[s] = e, i), {});
    }
    var kh = {
        mixins: [
            vo
        ],
        props: {
            target: String,
            viewport: Number,
            easing: Number,
            start: String,
            end: String
        },
        data: {
            target: !1,
            viewport: 1,
            easing: 1,
            start: 0,
            end: 0
        },
        computed: {
            target ({ target: t }, e) {
                return ko(t && at(t, e) || e);
            },
            start ({ start: t }) {
                return ht(t, "height", this.target, !0);
            },
            end ({ end: t, viewport: e }) {
                return ht(t || (e = (1 - e) * 100) && `${e}vh+${e}%`, "height", this.target, !0);
            }
        },
        observe: [
            pt({
                target: ({ $el: t, target: e })=>[
                        t,
                        e,
                        _t(e, !0)
                    ]
            }),
            gi(),
            In()
        ],
        update: {
            read ({ percent: t }, e) {
                if (e.has("scroll") || (t = !1), !R(this.$el)) return !1;
                if (!this.matchMedia) return;
                const i = t;
                return t = Sh(os(this.target, this.start, this.end), this.easing), {
                    percent: t,
                    style: i === t ? !1 : this.getCss(t)
                };
            },
            write ({ style: t }) {
                if (!this.matchMedia) {
                    this.reset();
                    return;
                }
                t && c(this.$el, t);
            },
            events: [
                "scroll",
                "resize"
            ]
        }
    };
    function Sh(t, e) {
        return e >= 0 ? Math.pow(t, e + 1) : 1 - Math.pow(1 - t, 1 - e);
    }
    function ko(t) {
        return t ? "offsetTop" in t ? t : ko(O(t)) : document.documentElement;
    }
    var So = {
        update: {
            write () {
                if (this.stack.length || this.dragging) return;
                const t = this.getValidIndex(this.index);
                !~this.prevIndex || this.index !== t ? this.show(t) : this._translate(1, this.prevIndex, this.index);
            },
            events: [
                "resize"
            ]
        }
    }, Io = {
        observe: Fe({
            target: ({ slides: t })=>t,
            targets: (t)=>t.getAdjacentSlides()
        })
    };
    function Ih(t, e, i, { center: s, easing: n, list: o }) {
        const r = t ? Ve(t, o, s) : Ve(e, o, s) + b(e).width * i, a = e ? Ve(e, o, s) : r + b(t).width * i * (X ? -1 : 1);
        let l;
        return {
            dir: i,
            show (h, u = 0, f) {
                const d = f ? "linear" : n;
                return h -= Math.round(h * Z(u, -1, 1)), this.translate(u), u = t ? u : Z(u, 0, 1), Ts(this.getItemIn(), "itemin", {
                    percent: u,
                    duration: h,
                    timing: d,
                    dir: i
                }), t && Ts(this.getItemIn(!0), "itemout", {
                    percent: 1 - u,
                    duration: h,
                    timing: d,
                    dir: i
                }), new Promise((g)=>{
                    l || (l = g), E.start(o, {
                        transform: W(-a * (X ? -1 : 1), "px")
                    }, h, d).then(l, S);
                });
            },
            cancel () {
                return E.cancel(o);
            },
            reset () {
                c(o, "transform", "");
            },
            async forward (h, u = this.percent()) {
                return await this.cancel(), this.show(h, u, !0);
            },
            translate (h) {
                const u = this.getDistance() * i * (X ? -1 : 1);
                c(o, "transform", W(Z(-a + (u - u * h), -Pi(o), b(o).width) * (X ? -1 : 1), "px"));
                const f = this.getActives(), d = this.getItemIn(), g = this.getItemIn(!0);
                h = t ? Z(h, -1, 1) : 0;
                for (const A of T(o)){
                    const N = m(f, A), F = A === d, Ot = A === g, Es = F || !Ot && (N || i * (X ? -1 : 1) === -1 ^ _i(A, o) > _i(t || e));
                    Ts(A, `itemtranslate${Es ? "in" : "out"}`, {
                        dir: i,
                        percent: Ot ? 1 - h : F ? h : N ? 1 : 0
                    });
                }
            },
            percent () {
                return Math.abs((c(o, "transform").split(",")[4] * (X ? -1 : 1) + r) / (a - r));
            },
            getDistance () {
                return Math.abs(a - r);
            },
            getItemIn (h = !1) {
                let u = this.getActives(), f = To(o, Ve(e || t, o, s));
                if (h) {
                    const d = u;
                    u = f, f = d;
                }
                return f[xt(f, (d)=>!m(u, d))];
            },
            getActives () {
                return To(o, Ve(t || e, o, s));
            }
        };
    }
    function Ve(t, e, i) {
        const s = _i(t, e);
        return i ? s - Ch(t, e) : Math.min(s, Co(e));
    }
    function Co(t) {
        return Math.max(0, Pi(t) - b(t).width);
    }
    function Pi(t) {
        return Dt(T(t), (e)=>b(e).width);
    }
    function Ch(t, e) {
        return b(e).width / 2 - b(t).width / 2;
    }
    function _i(t, e) {
        return t && (Ki(t).left + (X ? b(t).width - b(e).width : 0)) * (X ? -1 : 1) || 0;
    }
    function To(t, e) {
        e -= 1;
        const i = b(t).width, s = e + i + 2;
        return T(t).filter((n)=>{
            const o = _i(n, t), r = o + Math.min(b(n).width, i);
            return o >= e && r <= s;
        });
    }
    function Ts(t, e, i) {
        v(t, Mt(e, !1, !1, i));
    }
    var Th = {
        mixins: [
            st,
            co,
            So,
            Io
        ],
        props: {
            center: Boolean,
            sets: Boolean
        },
        data: {
            center: !1,
            sets: !1,
            attrItem: "uk-slider-item",
            selList: ".uk-slider-items",
            selNav: ".uk-slider-nav",
            clsContainer: "uk-slider-container",
            Transitioner: Ih
        },
        computed: {
            avgWidth () {
                return Pi(this.list) / this.length;
            },
            finite ({ finite: t }) {
                return t || Eh(this.list, this.center);
            },
            maxIndex () {
                if (!this.finite || this.center && !this.sets) return this.length - 1;
                if (this.center) return oe(this.sets);
                let t = 0;
                const e = Co(this.list), i = xt(this.slides, (s)=>{
                    if (t >= e) return !0;
                    t += b(s).width;
                });
                return ~i ? i : this.length - 1;
            },
            sets ({ sets: t }) {
                if (!t) return;
                let e = 0;
                const i = [], s = b(this.list).width;
                for(let n = 0; n < this.length; n++){
                    const o = b(this.slides[n]).width;
                    e + o > s && (e = 0), this.center ? e < s / 2 && e + o + b(rt(+n + 1, this.slides)).width / 2 > s / 2 && (i.push(+n), e = s / 2 - o / 2) : e === 0 && i.push(Math.min(+n, this.maxIndex)), e += o;
                }
                if (i.length) return i;
            },
            transitionOptions () {
                return {
                    center: this.center,
                    list: this.list
                };
            },
            slides () {
                return T(this.list).filter(R);
            }
        },
        connected () {
            q(this.$el, this.clsContainer, !w(`.${this.clsContainer}`, this.$el));
        },
        observe: pt({
            target: ({ slides: t })=>t
        }),
        update: {
            write () {
                for (const t of this.navItems){
                    const e = kt(tt(t, this.attrItem));
                    e !== !1 && (t.hidden = !this.maxIndex || e > this.maxIndex || this.sets && !m(this.sets, e));
                }
                this.length && !this.dragging && !this.stack.length && (this.reorder(), this._translate(1)), this.updateActiveClasses();
            },
            events: [
                "resize"
            ]
        },
        events: {
            beforeitemshow (t) {
                !this.dragging && this.sets && this.stack.length < 2 && !m(this.sets, this.index) && (this.index = this.getValidIndex());
                const e = Math.abs(this.index - this.prevIndex + (this.dir > 0 && this.index < this.prevIndex || this.dir < 0 && this.index > this.prevIndex ? (this.maxIndex + 1) * this.dir : 0));
                if (!this.dragging && e > 1) {
                    for(let s = 0; s < e; s++)this.stack.splice(1, 0, this.dir > 0 ? "next" : "previous");
                    t.preventDefault();
                    return;
                }
                const i = this.dir < 0 || !this.slides[this.prevIndex] ? this.index : this.prevIndex;
                this.duration = uo(this.avgWidth / this.velocity) * (b(this.slides[i]).width / this.avgWidth), this.reorder();
            },
            itemshow () {
                ~this.prevIndex && y(this._getTransitioner().getItemIn(), this.clsActive);
            },
            itemshown () {
                this.updateActiveClasses();
            }
        },
        methods: {
            reorder () {
                if (this.finite) {
                    c(this.slides, "order", "");
                    return;
                }
                const t = this.dir > 0 && this.slides[this.prevIndex] ? this.prevIndex : this.index;
                if (this.slides.forEach((n, o)=>c(n, "order", this.dir > 0 && o < t ? 1 : this.dir < 0 && o >= this.index ? -1 : "")), !this.center) return;
                const e = this.slides[t];
                let i = b(this.list).width / 2 - b(e).width / 2, s = 0;
                for(; i > 0;){
                    const n = this.getIndex(--s + t, t), o = this.slides[n];
                    c(o, "order", n > t ? -2 : -1), i -= b(o).width;
                }
            },
            updateActiveClasses () {
                const t = this._getTransitioner(this.index).getActives(), e = [
                    this.clsActive,
                    (!this.sets || m(this.sets, x(this.index))) && this.clsActivated || ""
                ];
                for (const i of this.slides){
                    const s = m(t, i);
                    q(i, e, s), p(i, "aria-hidden", !s);
                    for (const n of z(Ie, i))vt(n, "_tabindex") || (n._tabindex = p(n, "tabindex")), p(n, "tabindex", s ? n._tabindex : -1);
                }
            },
            getValidIndex (t = this.index, e = this.prevIndex) {
                if (t = this.getIndex(t, e), !this.sets) return t;
                let i;
                do {
                    if (m(this.sets, t)) return t;
                    i = t, t = this.getIndex(t + this.dir, e);
                }while (t !== i);
                return t;
            },
            getAdjacentSlides () {
                const { width: t } = b(this.list), e = -t, i = t * 2, s = b(this.slides[this.index]).width, n = this.center ? t / 2 - s / 2 : 0, o = new Set;
                for (const r of [
                    -1,
                    1
                ]){
                    let a = n + (r > 0 ? s : 0), l = 0;
                    do {
                        const h = this.slides[this.getIndex(this.index + r + l++ * r)];
                        a += b(h).width * r, o.add(h);
                    }while (this.length > l && a > e && a < i);
                }
                return Array.from(o);
            }
        }
    };
    function Eh(t, e) {
        if (!t || t.length < 2) return !0;
        const { width: i } = b(t);
        if (!e) return Math.ceil(Pi(t)) < Math.trunc(i + Ph(t));
        const s = T(t), n = Math.trunc(i / 2);
        for(const o in s){
            const r = s[o], a = b(r).width, l = new Set([
                r
            ]);
            let h = 0;
            for (const u of [
                -1,
                1
            ]){
                let f = a / 2, d = 0;
                for(; f < n;){
                    const g = s[rt(+o + u + d++ * u, s)];
                    if (l.has(g)) return !0;
                    f += b(g).width, l.add(g);
                }
                h = Math.max(h, a / 2 + b(s[rt(+o + u, s)]).width / 2 - (f - n));
            }
            if (h > Dt(s.filter((u)=>!l.has(u)), (u)=>b(u).width)) return !0;
        }
        return !1;
    }
    function Ph(t) {
        return Math.max(0, ...T(t).map((e)=>b(e).width));
    }
    var Eo = {
        mixins: [
            vo
        ],
        data: {
            selItem: "!li"
        },
        beforeConnect () {
            this.item = at(this.selItem, this.$el);
        },
        disconnected () {
            this.item = null;
        },
        events: [
            {
                name: "itemin itemout",
                self: !0,
                el () {
                    return this.item;
                },
                handler ({ type: t, detail: { percent: e, duration: i, timing: s, dir: n } }) {
                    J.read(()=>{
                        if (!this.matchMedia) return;
                        const o = this.getCss(_o(t, n, e)), r = this.getCss(Po(t) ? .5 : n > 0 ? 1 : 0);
                        J.write(()=>{
                            c(this.$el, o), E.start(this.$el, r, i, s).catch(S);
                        });
                    });
                }
            },
            {
                name: "transitioncanceled transitionend",
                self: !0,
                el () {
                    return this.item;
                },
                handler () {
                    E.cancel(this.$el);
                }
            },
            {
                name: "itemtranslatein itemtranslateout",
                self: !0,
                el () {
                    return this.item;
                },
                handler ({ type: t, detail: { percent: e, dir: i } }) {
                    J.read(()=>{
                        if (!this.matchMedia) {
                            this.reset();
                            return;
                        }
                        const s = this.getCss(_o(t, i, e));
                        J.write(()=>c(this.$el, s));
                    });
                }
            }
        ]
    };
    function Po(t) {
        return Zt(t, "in");
    }
    function _o(t, e, i) {
        return i /= 2, Po(t) ^ e < 0 ? i : 1 - i;
    }
    var _h = {
        ...ys,
        fade: {
            show () {
                return [
                    {
                        opacity: 0,
                        zIndex: 0
                    },
                    {
                        zIndex: -1
                    }
                ];
            },
            percent (t) {
                return 1 - c(t, "opacity");
            },
            translate (t) {
                return [
                    {
                        opacity: 1 - t,
                        zIndex: 0
                    },
                    {
                        zIndex: -1
                    }
                ];
            }
        },
        scale: {
            show () {
                return [
                    {
                        opacity: 0,
                        transform: ve(1.5),
                        zIndex: 0
                    },
                    {
                        zIndex: -1
                    }
                ];
            },
            percent (t) {
                return 1 - c(t, "opacity");
            },
            translate (t) {
                return [
                    {
                        opacity: 1 - t,
                        transform: ve(1 + .5 * t),
                        zIndex: 0
                    },
                    {
                        zIndex: -1
                    }
                ];
            }
        },
        pull: {
            show (t) {
                return t < 0 ? [
                    {
                        transform: W(30),
                        zIndex: -1
                    },
                    {
                        transform: W(),
                        zIndex: 0
                    }
                ] : [
                    {
                        transform: W(-100),
                        zIndex: 0
                    },
                    {
                        transform: W(),
                        zIndex: -1
                    }
                ];
            },
            percent (t, e, i) {
                return i < 0 ? 1 - Re(e) : Re(t);
            },
            translate (t, e) {
                return e < 0 ? [
                    {
                        transform: W(30 * t),
                        zIndex: -1
                    },
                    {
                        transform: W(-100 * (1 - t)),
                        zIndex: 0
                    }
                ] : [
                    {
                        transform: W(-t * 100),
                        zIndex: 0
                    },
                    {
                        transform: W(30 * (1 - t)),
                        zIndex: -1
                    }
                ];
            }
        },
        push: {
            show (t) {
                return t < 0 ? [
                    {
                        transform: W(100),
                        zIndex: 0
                    },
                    {
                        transform: W(),
                        zIndex: -1
                    }
                ] : [
                    {
                        transform: W(-30),
                        zIndex: -1
                    },
                    {
                        transform: W(),
                        zIndex: 0
                    }
                ];
            },
            percent (t, e, i) {
                return i > 0 ? 1 - Re(e) : Re(t);
            },
            translate (t, e) {
                return e < 0 ? [
                    {
                        transform: W(t * 100),
                        zIndex: 0
                    },
                    {
                        transform: W(-30 * (1 - t)),
                        zIndex: -1
                    }
                ] : [
                    {
                        transform: W(-30 * t),
                        zIndex: -1
                    },
                    {
                        transform: W(100 * (1 - t)),
                        zIndex: 0
                    }
                ];
            }
        }
    }, Ah = {
        mixins: [
            st,
            fo,
            So,
            Io
        ],
        props: {
            ratio: String,
            minHeight: Number,
            maxHeight: Number
        },
        data: {
            ratio: "16:9",
            minHeight: !1,
            maxHeight: !1,
            selList: ".uk-slideshow-items",
            attrItem: "uk-slideshow-item",
            selNav: ".uk-slideshow-nav",
            Animations: _h
        },
        update: {
            read () {
                if (!this.list) return !1;
                let [t, e] = this.ratio.split(":").map(Number);
                return e = e * this.list.offsetWidth / t || 0, this.minHeight && (e = Math.max(this.minHeight, e)), this.maxHeight && (e = Math.min(this.maxHeight, e)), {
                    height: e - ce(this.list, "height", "content-box")
                };
            },
            write ({ height: t }) {
                t > 0 && c(this.list, "minHeight", t);
            },
            events: [
                "resize"
            ]
        },
        methods: {
            getAdjacentSlides () {
                return [
                    1,
                    -1
                ].map((t)=>this.slides[this.getIndex(this.index + t)]);
            }
        }
    }, Oh = {
        mixins: [
            st,
            no
        ],
        props: {
            group: String,
            threshold: Number,
            clsItem: String,
            clsPlaceholder: String,
            clsDrag: String,
            clsDragState: String,
            clsBase: String,
            clsNoDrag: String,
            clsEmpty: String,
            clsCustom: String,
            handle: String
        },
        data: {
            group: !1,
            threshold: 5,
            clsItem: "uk-sortable-item",
            clsPlaceholder: "uk-sortable-placeholder",
            clsDrag: "uk-sortable-drag",
            clsDragState: "uk-drag",
            clsBase: "uk-sortable",
            clsNoDrag: "uk-sortable-nodrag",
            clsEmpty: "uk-sortable-empty",
            clsCustom: "",
            handle: !1,
            pos: {}
        },
        created () {
            for (const t of [
                "init",
                "start",
                "move",
                "end"
            ]){
                const e = this[t];
                this[t] = (i)=>{
                    wt(this.pos, he(i)), e(i);
                };
            }
        },
        events: {
            name: mt,
            passive: !1,
            handler: "init"
        },
        computed: {
            target () {
                return (this.$el.tBodies || [
                    this.$el
                ])[0];
            },
            items () {
                return T(this.target);
            },
            isEmpty () {
                return ye(this.items);
            },
            handles ({ handle: t }, e) {
                return t ? z(t, e) : this.items;
            }
        },
        watch: {
            isEmpty (t) {
                q(this.target, this.clsEmpty, t);
            },
            handles (t, e) {
                c(e, {
                    touchAction: "",
                    userSelect: ""
                }), c(t, {
                    touchAction: Wt ? "none" : "",
                    userSelect: "none"
                });
            }
        },
        update: {
            write (t) {
                if (!this.drag || !O(this.placeholder)) return;
                const { pos: { x: e, y: i }, origin: { offsetTop: s, offsetLeft: n }, placeholder: o } = this;
                c(this.drag, {
                    top: i - s,
                    left: e - n
                });
                const r = this.getSortable(document.elementFromPoint(e, i));
                if (!r) return;
                const { items: a } = r;
                if (a.some(E.inProgress)) return;
                const l = Nh(a, {
                    x: e,
                    y: i
                });
                if (a.length && (!l || l === o)) return;
                const h = this.getSortable(o), u = zh(r.target, l, o, e, i, r === h && t.moved !== l);
                u !== !1 && (u && o === u || (r !== h ? (h.remove(o), t.moved = l) : delete t.moved, r.insert(o, u), this.touched.add(r)));
            },
            events: [
                "move"
            ]
        },
        methods: {
            init (t) {
                const { target: e, button: i, defaultPrevented: s } = t, [n] = this.items.filter((o)=>B(e, o));
                !n || s || i > 0 || Li(e) || B(e, `.${this.clsNoDrag}`) || this.handle && !B(e, this.handle) || (t.preventDefault(), this.touched = new Set([
                    this
                ]), this.placeholder = n, this.origin = {
                    target: e,
                    index: ae(n),
                    ...this.pos
                }, $(document, ai, this.move), $(document, Pt, this.end), this.threshold || this.start(t));
            },
            start (t) {
                this.drag = Mh(this.$container, this.placeholder);
                const { left: e, top: i } = this.placeholder.getBoundingClientRect();
                wt(this.origin, {
                    offsetLeft: this.pos.x - e,
                    offsetTop: this.pos.y - i
                }), y(this.drag, this.clsDrag, this.clsCustom), y(this.placeholder, this.clsPlaceholder), y(this.items, this.clsItem), y(document.documentElement, this.clsDragState), v(this.$el, "start", [
                    this,
                    this.placeholder
                ]), Dh(this.pos), this.move(t);
            },
            move (t) {
                this.drag ? this.$emit("move") : (Math.abs(this.pos.x - this.origin.x) > this.threshold || Math.abs(this.pos.y - this.origin.y) > this.threshold) && this.start(t);
            },
            end () {
                if (Bt(document, ai, this.move), Bt(document, Pt, this.end), !this.drag) return;
                Bh();
                const t = this.getSortable(this.placeholder);
                this === t ? this.origin.index !== ae(this.placeholder) && v(this.$el, "moved", [
                    this,
                    this.placeholder
                ]) : (v(t.$el, "added", [
                    t,
                    this.placeholder
                ]), v(this.$el, "removed", [
                    this,
                    this.placeholder
                ])), v(this.$el, "stop", [
                    this,
                    this.placeholder
                ]), lt(this.drag), this.drag = null;
                for (const { clsPlaceholder: e, clsItem: i } of this.touched)for (const s of this.touched)M(s.items, e, i);
                this.touched = null, M(document.documentElement, this.clsDragState);
            },
            insert (t, e) {
                y(this.items, this.clsItem);
                const i = ()=>e ? ii(e, t) : L(this.target, t);
                this.animate(i);
            },
            remove (t) {
                B(t, this.target) && this.animate(()=>lt(t));
            },
            getSortable (t) {
                do {
                    const e = this.$getComponent(t, "sortable");
                    if (e && (e === this || this.group !== !1 && e.group === this.group)) return e;
                }while (t = O(t));
            }
        }
    };
    let Ao;
    function Dh(t) {
        let e = Date.now();
        Ao = setInterval(()=>{
            let { x: i, y: s } = t;
            s += document.scrollingElement.scrollTop;
            const n = (Date.now() - e) * .3;
            e = Date.now(), pe(document.elementFromPoint(i, t.y)).reverse().some((o)=>{
                let { scrollTop: r, scrollHeight: a } = o;
                const { top: l, bottom: h, height: u } = ct(o);
                if (l < s && l + 35 > s) r -= n;
                else if (h > s && h - 35 < s) r += n;
                else return;
                if (r > 0 && r < a - u) return o.scrollTop = r, !0;
            });
        }, 15);
    }
    function Bh() {
        clearInterval(Ao);
    }
    function Mh(t, e) {
        let i;
        if (G(e, "li", "tr")) {
            i = w("<div>"), L(i, e.cloneNode(!0).children);
            for (const s of e.getAttributeNames())p(i, s, e.getAttribute(s));
        } else i = e.cloneNode(!0);
        return L(t, i), c(i, "margin", "0", "important"), c(i, {
            boxSizing: "border-box",
            width: e.offsetWidth,
            height: e.offsetHeight,
            padding: c(e, "padding")
        }), et(i.firstElementChild, et(e.firstElementChild)), i;
    }
    function Nh(t, e) {
        return t[xt(t, (i)=>Ze(e, i.getBoundingClientRect()))];
    }
    function zh(t, e, i, s, n, o) {
        if (!T(t).length) return;
        const r = e.getBoundingClientRect();
        if (!o) return Fh(t, i) || n < r.top + r.height / 2 ? e : e.nextElementSibling;
        const a = i.getBoundingClientRect(), l = Oo([
            r.top,
            r.bottom
        ], [
            a.top,
            a.bottom
        ]), [h, u, f, d] = l ? [
            s,
            "width",
            "left",
            "right"
        ] : [
            n,
            "height",
            "top",
            "bottom"
        ], g = a[u] < r[u] ? r[u] - a[u] : 0;
        return a[f] < r[f] ? g && h < r[f] + g ? !1 : e.nextElementSibling : g && h > r[d] - g ? !1 : e;
    }
    function Fh(t, e) {
        const i = T(t).length === 1;
        i && L(t, e);
        const s = T(t), n = s.some((o, r)=>{
            const a = o.getBoundingClientRect();
            return s.slice(r + 1).some((l)=>{
                const h = l.getBoundingClientRect();
                return !Oo([
                    a.left,
                    a.right
                ], [
                    h.left,
                    h.right
                ]);
            });
        });
        return i && lt(e), n;
    }
    function Oo(t, e) {
        return t[1] > e[0] && e[1] > t[0];
    }
    var Hh = {
        mixins: [
            Le,
            Vt,
            _n
        ],
        args: "title",
        props: {
            delay: Number,
            title: String
        },
        data: {
            pos: "top",
            title: "",
            delay: 0,
            animation: [
                "uk-animation-scale-up"
            ],
            duration: 100,
            cls: "uk-active"
        },
        beforeConnect () {
            this.id = At(this, {}), this._hasTitle = $t(this.$el, "title"), p(this.$el, {
                title: "",
                "aria-describedby": this.id
            }), Lh(this.$el);
        },
        disconnected () {
            this.hide(), p(this.$el, "title") || p(this.$el, "title", this._hasTitle ? this.title : null);
        },
        methods: {
            show () {
                this.isToggled(this.tooltip || null) || !this.title || (clearTimeout(this.showTimer), this.showTimer = setTimeout(this._show, this.delay));
            },
            async hide () {
                C(this.$el, "input:focus") || (clearTimeout(this.showTimer), this.isToggled(this.tooltip || null) && await this.toggleElement(this.tooltip, !1, !1), lt(this.tooltip), this.tooltip = null);
            },
            async _show () {
                this.tooltip = L(this.container, `<div id="${this.id}" class="uk-${this.$options.name}" role="tooltip"> <div class="uk-${this.$options.name}-inner">${this.title}</div> </div>`), $(this.tooltip, "toggled", (t, e)=>{
                    if (!e) return;
                    const i = ()=>this.positionAt(this.tooltip, this.$el);
                    i();
                    const [s, n] = Wh(this.tooltip, this.$el, this.pos);
                    this.origin = this.axis === "y" ? `${ri(s)}-${n}` : `${n}-${ri(s)}`;
                    const o = [
                        j(document, `keydown ${mt}`, this.hide, !1, (r)=>r.type === mt && !B(r.target, this.$el) || r.type === "keydown" && r.keyCode === I.ESC),
                        $([
                            document,
                            ...jt(this.$el)
                        ], "scroll", i, {
                            passive: !0
                        })
                    ];
                    j(this.tooltip, "hide", ()=>o.forEach((r)=>r()), {
                        self: !0
                    });
                }), await this.toggleElement(this.tooltip, !0) || this.hide();
            }
        },
        events: {
            focus: "show",
            blur: "hide",
            [`${Rt} ${de}`] (t) {
                St(t) || this[t.type === Rt ? "show" : "hide"]();
            },
            [mt] (t) {
                St(t) && this.show();
            }
        }
    };
    function Lh(t) {
        ti(t) || p(t, "tabindex", "0");
    }
    function Wh(t, e, [i, s]) {
        const n = _(t), o = _(e), r = [
            [
                "left",
                "right"
            ],
            [
                "top",
                "bottom"
            ]
        ];
        for (const l of r){
            if (n[l[0]] >= o[l[1]]) {
                i = l[1];
                break;
            }
            if (n[l[1]] <= o[l[0]]) {
                i = l[0];
                break;
            }
        }
        const a = m(r[0], i) ? r[1] : r[0];
        return n[a[0]] === o[a[0]] ? s = a[0] : n[a[1]] === o[a[1]] ? s = a[1] : s = "center", [
            i,
            s
        ];
    }
    var Rh = {
        mixins: [
            wi
        ],
        i18n: {
            invalidMime: "Invalid File Type: %s",
            invalidName: "Invalid File Name: %s",
            invalidSize: "Invalid File Size: %s Kilobytes Max"
        },
        props: {
            allow: String,
            clsDragover: String,
            concurrent: Number,
            maxSize: Number,
            method: String,
            mime: String,
            multiple: Boolean,
            name: String,
            params: Object,
            type: String,
            url: String
        },
        data: {
            allow: !1,
            clsDragover: "uk-dragover",
            concurrent: 1,
            maxSize: 0,
            method: "POST",
            mime: !1,
            multiple: !1,
            name: "files[]",
            params: {},
            type: "",
            url: "",
            abort: S,
            beforeAll: S,
            beforeSend: S,
            complete: S,
            completeAll: S,
            error: S,
            fail: S,
            load: S,
            loadEnd: S,
            loadStart: S,
            progress: S
        },
        events: {
            change (t) {
                C(t.target, 'input[type="file"]') && (t.preventDefault(), t.target.files && this.upload(t.target.files), t.target.value = "");
            },
            drop (t) {
                Ai(t);
                const e = t.dataTransfer;
                e != null && e.files && (M(this.$el, this.clsDragover), this.upload(e.files));
            },
            dragenter (t) {
                Ai(t);
            },
            dragover (t) {
                Ai(t), y(this.$el, this.clsDragover);
            },
            dragleave (t) {
                Ai(t), M(this.$el, this.clsDragover);
            }
        },
        methods: {
            async upload (t) {
                if (t = Qt(t), !t.length) return;
                v(this.$el, "upload", [
                    t
                ]);
                for (const s of t){
                    if (this.maxSize && this.maxSize * 1e3 < s.size) {
                        this.fail(this.t("invalidSize", this.maxSize));
                        return;
                    }
                    if (this.allow && !Do(this.allow, s.name)) {
                        this.fail(this.t("invalidName", this.allow));
                        return;
                    }
                    if (this.mime && !Do(this.mime, s.type)) {
                        this.fail(this.t("invalidMime", this.mime));
                        return;
                    }
                }
                this.multiple || (t = t.slice(0, 1)), this.beforeAll(this, t);
                const e = jh(t, this.concurrent), i = async (s)=>{
                    const n = new FormData;
                    s.forEach((o)=>n.append(this.name, o));
                    for(const o in this.params)n.append(o, this.params[o]);
                    try {
                        const o = await qh(this.url, {
                            data: n,
                            method: this.method,
                            responseType: this.type,
                            beforeSend: (r)=>{
                                const { xhr: a } = r;
                                $(a.upload, "progress", this.progress);
                                for (const l of [
                                    "loadStart",
                                    "load",
                                    "loadEnd",
                                    "abort"
                                ])$(a, l.toLowerCase(), this[l]);
                                return this.beforeSend(r);
                            }
                        });
                        this.complete(o), e.length ? await i(e.shift()) : this.completeAll(o);
                    } catch (o) {
                        this.error(o);
                    }
                };
                await i(e.shift());
            }
        }
    };
    function Do(t, e) {
        return e.match(new RegExp(`^${t.replace(/\//g, "\\/").replace(/\*\*/g, "(\\/[^\\/]+)*").replace(/\*/g, "[^\\/]+").replace(/((?!\\))\?/g, "$1.")}$`, "i"));
    }
    function jh(t, e) {
        const i = [];
        for(let s = 0; s < t.length; s += e)i.push(t.slice(s, s + e));
        return i;
    }
    function Ai(t) {
        t.preventDefault(), t.stopPropagation();
    }
    function qh(t, e) {
        const i = {
            data: null,
            method: "GET",
            headers: {},
            xhr: new XMLHttpRequest,
            beforeSend: S,
            responseType: "",
            ...e
        };
        return Promise.resolve().then(()=>i.beforeSend(i)).then(()=>Uh(t, i));
    }
    function Uh(t, e) {
        return new Promise((i, s)=>{
            const { xhr: n } = e;
            for(const o in e)if (o in n) try {
                n[o] = e[o];
            } catch  {}
            n.open(e.method.toUpperCase(), t);
            for(const o in e.headers)n.setRequestHeader(o, e.headers[o]);
            $(n, "load", ()=>{
                n.status === 0 || n.status >= 200 && n.status < 300 || n.status === 304 ? i(n) : s(wt(Error(n.statusText), {
                    xhr: n,
                    status: n.status
                }));
            }), $(n, "error", ()=>s(wt(Error("Network Error"), {
                    xhr: n
                }))), $(n, "timeout", ()=>s(wt(Error("Network Timeout"), {
                    xhr: n
                }))), n.send(e.data);
        });
    }
    var Vh = Object.freeze({
        __proto__: null,
        Countdown: Vl,
        Filter: Ql,
        Lightbox: dh,
        LightboxPanel: po,
        Notification: gh,
        Parallax: kh,
        Slider: Th,
        SliderParallax: Eo,
        Slideshow: Ah,
        SlideshowParallax: Eo,
        Sortable: Oh,
        Tooltip: Hh,
        Upload: Rh
    });
    return Et(Vh, (t, e)=>ft.component(e, t)), ft;
});

//# sourceMappingURL=index.d08e4944.js.map
