"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[50], {
    6050: function(e, t, r) {
        r.r(t),
        r.d(t, {
            VelocityScroll: function() {
                return j
            }
        });
        var n = r(7437);
        let l = (e, t, r) => {
            let n = t - e;
            return ((r - e) % n + n) % n + e
        }
        ;
        var u = r(5512)
          , c = r(5282)
          , i = r(3120)
          , s = r(6179)
          , o = r(6219)
          , f = r(6391)
          , a = r(2548);
        let d = e => e && "object" == typeof e && e.mix
          , v = e => d(e) ? e.mix : void 0;
        var h = r(9033);
        function p(e, t) {
            let r = (0,
            c.c)(t())
              , n = () => r.set(t());
            return n(),
            (0,
            h.L)( () => {
                let t = () => o.Wi.preRender(n, !1, !0)
                  , r = e.map(e => e.on("change", t));
                return () => {
                    r.forEach(e => e()),
                    (0,
                    o.Pn)(n)
                }
            }
            ),
            r
        }
        var g = r(458)
          , m = r(804);
        function y(e, t, r, n) {
            if ("function" == typeof e)
                return function(e) {
                    m.S1.current = [],
                    e();
                    let t = p(m.S1.current, e);
                    return m.S1.current = void 0,
                    t
                }(e);
            let l = "function" == typeof t ? t : function(...e) {
                let t = !Array.isArray(e[0])
                  , r = t ? 0 : -1
                  , n = e[0 + r]
                  , l = e[1 + r]
                  , u = e[2 + r]
                  , c = e[3 + r]
                  , i = (0,
                a.s)(l, u, {
                    mixer: v(u[0]),
                    ...c
                });
                return t ? i(n) : i
            }(t, r, n);
            return Array.isArray(e) ? x(e, l) : x([e], ([e]) => l(e))
        }
        function x(e, t) {
            let r = (0,
            g.h)( () => []);
            return p(e, () => {
                r.length = 0;
                let n = e.length;
                for (let t = 0; t < n; t++)
                    r[t] = e[t].get();
                return t(r)
            }
            )
        }
        var w = r(2265)
          , E = r(9791)
          , b = r(3367);
        function j(e) {
            let {text1: t, text2: r, default_velocity: a=5, className: d} = e;
            function v(e) {
                let {children: t, baseVelocity: r=100, className: a} = e
                  , d = (0,
                c.c)(0)
                  , {scrollY: v} = (0,
                i.v)()
                  , h = function(e) {
                    let t = (0,
                    c.c)(e.getVelocity())
                      , r = () => {
                        let n = e.getVelocity();
                        t.set(n),
                        n && o.Wi.update(r)
                    }
                    ;
                    return (0,
                    s.W)(e, "change", () => {
                        o.Wi.update(r, !1, !0)
                    }
                    ),
                    t
                }(v)
                  , p = y((0,
                f.q)(h, {
                    damping: 50,
                    stiffness: 400
                }), [0, 1e3], [0, 5], {
                    clamp: !1
                })
                  , [g,m] = (0,
                w.useState)(1)
                  , x = (0,
                w.useRef)(null)
                  , j = (0,
                w.useRef)(null);
                (0,
                w.useEffect)( () => {
                    let e = () => {
                        if (x.current && j.current) {
                            var e, t;
                            m(Math.ceil((null == x ? void 0 : null === (e = x.current) || void 0 === e ? void 0 : e.offsetWidth) / (null == j ? void 0 : null === (t = j.current) || void 0 === t ? void 0 : t.offsetWidth)) + 2)
                        }
                    }
                    ;
                    return e(),
                    window.addEventListener("resize", e),
                    () => window.removeEventListener("resize", e)
                }
                , [t]);
                let N = y(d, e => "".concat(l(-100 / g, 0, e), "%"))
                  , W = (0,
                w.useRef)(1);
                return !function(e) {
                    let t = (0,
                    w.useRef)(0)
                      , {isStatic: r} = (0,
                    w.useContext)(E._);
                    (0,
                    w.useEffect)( () => {
                        if (r)
                            return;
                        let n = ({timestamp: r, delta: n}) => {
                            t.current || (t.current = r),
                            e(r - t.current, n)
                        }
                        ;
                        return o.Wi.update(n, !0),
                        () => (0,
                        o.Pn)(n)
                    }
                    , [e])
                }( (e, t) => {
                    let n = W.current * r * (t / 1e3);
                    0 > p.get() ? W.current = -1 : p.get() > 0 && (W.current = 1),
                    n += W.current * n * p.get(),
                    d.set(d.get() + n)
                }
                ),
                (0,
                n.jsx)("div", {
                    className: "w-full overflow-hidden whitespace-nowrap",
                    ref: x,
                    children: (0,
                    n.jsx)(b.E.div, {
                        className: (0,
                        u.cn)("inline-block", a),
                        style: {
                            x: N
                        },
                        children: Array.from({
                            length: g
                        }).map( (e, r) => (0,
                        n.jsxs)("span", {
                            ref: 0 === r ? j : null,
                            children: [t, " "]
                        }, r))
                    })
                })
            }
            return (0,
            n.jsxs)("section", {
                className: "relative w-full flex flex-col gap-4 pb-28",
                children: [(0,
                n.jsx)(v, {
                    baseVelocity: a,
                    className: d,
                    children: t
                }), (0,
                n.jsx)(v, {
                    baseVelocity: -a,
                    className: d,
                    children: r
                })]
            })
        }
    }
}]);
