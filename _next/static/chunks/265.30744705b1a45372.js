(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[265], {
    4265: function(t, e, n) {
        "use strict";
        n.r(e),
        n.d(e, {
            default: function() {
                return c
            }
        });
        var a = n(2265);
        function c() {
            let t = null
              , e = (e, n) => {
                t || ((t = document.createElement("style")).type = "text/css",
                document.head.appendChild(t));
                let[a,c,o] = function() {
                    if (0 == arguments.length)
                        throw "No steps provided!";
                    let t = Array.from(arguments)
                      , e = [t.shift()];
                    return t.forEach( (t, n) => {
                        e.push("".concat(e[n], " ").concat(t))
                    }
                    ),
                    e
                }("translate(-50%, -50%) rotate(".concat(n, "deg) translate(10px, 0px)"), "translate(".concat(40 + Math.floor((Math.random() - .5) * 28), "px, 0px) scale(0.5, 0.5)"), "translate(".concat(15, "px, 0) scale(0, 0)"));
                t.sheet.insertRule("@keyframes ".concat(e, " {\n        0% { transform: ").concat(a, "; }\n        70% { transform: ").concat(c, "; }\n        100% { transform: ").concat(o, "; }\n      }"), t.length)
            }
            ;
            (0,
            a.useEffect)( () => {
                let t = document.getElementById("spark-effect-zone")
                  , e = t => {
                    n({
                        x: Math.min(t.pageX, window.innerWidth - 15),
                        y: Math.min(t.pageY, window.innerHeight - 15)
                    })
                }
                ;
                return t.addEventListener("click", e),
                () => t.removeEventListener("click", e)
            }
            , []);
            let n = t => {
                for (let e = 0; e < 8; e++)
                    c(t, 45 * e + Math.floor(-17 + 34 * Math.random()))
            }
              , c = (t, n) => {
                let a = document.createElement("div")
                  , c = "disappear_".concat(n);
                e(c, n),
                a.classList.add("spark"),
                a.style.left = "".concat(t.x, "px"),
                a.style.top = "".concat(t.y, "px"),
                a.style.animation = "".concat(c, " 500ms ease-out both"),
                a.addEventListener("animationend", () => {
                    a.remove()
                }
                ),
                document.body.append(a)
            }
            ;
            return null
        }
        n(9105)
    },
    9105: function() {}
}]);
