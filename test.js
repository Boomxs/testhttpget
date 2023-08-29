console.log("bypass")
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2815], {
        1641: function (e, t, r) {
            r.d(t, {
                Z: function () {
                    return u
                }
            });
            var n = r(5893),
                s = r(7294),
                a = r(5675),
                o = r.n(a),
                c = r(1163),
                i = r(2867);

            function u(e) {
                var t = e.title,
                    r = e.backPath,
                    a = e.onBack,
                    u = e.isTruncate,
                    p = (0, c.useRouter)(),
                    $ = (0, s.useContext)(i.Z).hue,
                    d = function () {
                        a ? a() : r ? p.push(r) : p.back()
                    };
                return (0, n.jsxs)("div", {
                    className: " w-full h-[48px] flex items-center px-2 py-3 md:px-14 ",
                    children: [(0, n.jsx)("div", {
                        children: (0, n.jsx)("button", {
                            className: "flex items-center",
                            type: "button",
                            onClick: function () {
                                return d()
                            },
                            children: (0, n.jsx)("div", {
                                className: " relative w-[32px] h-[32px] md:w-[36px] md:h-[36px] ",
                                children: (0, n.jsx)(o(), {
                                    style: $,
                                    src: "/images/back.png",
                                    layout: "fill",
                                    priority: !0
                                })
                            })
                        })
                    }), (0, n.jsx)("div", {
                        className: "\n          flex-grow text-center mr-8 font-[700] leading-[1.3]\n          text-[15px]\n          xs:text-[17px]\n          md:text-[25px]\n          ".concat((void 0 === u || u) && "truncate", "\n        "),
                        children: t
                    })]
                })
            }
        },
        8635: function (e, t, r) {
            r.d(t, {
                AT: function () {
                    return E
                },
                UM: function () {
                    return _
                },
                VX: function () {
                    return l
                },
                Y1: function () {
                    return h
                },
                j: function () {
                    return w
                },
                tr: function () {
                    return m
                },
                vI: function () {
                    return x
                },
                vn: function () {
                    return v
                }
            });
            var n, s, a, o, c, i, u = r(7568),
                p = r(655),
                $ = r(6486),
                d = (0, r(2006).Z)(),
                l = (n = (0, u.Z)(function (e, t, r, n, s) {
                    var a, o, c, i;
                    return (0, p.__generator)(this, function (u) {
                        switch (u.label) {
                        case 0:
                            return u.trys.push([0, 2, , 3]), [4, d(((o = {}).method = "post", o.url = "/lobby-api/report/bonus-promotion/100/".concat(r), o.headers = {
                                "Agent-Code": e,
                                Authorization: "Bearer " + t
                            }, o.data = (0, $.isEmpty)(n) || (0, $.isEmpty)(s) ? {} : {
                                filters: {
                                    created_at: {
                                        from: n,
                                        to: s
                                    }
                                }
                            }, o))];
                        case 1:
                            return [2, a = u.sent()];
                        case 2:
                            return c = u.sent(), [2, ((i = {}).error = {
                                code: 500,
                                message: c.message || "Unexpected Error!"
                            }, i)];
                        case 3:
                            return [2]
                        }
                    })
                }), function (e, t, r, s, a) {
                    return n.apply(this, arguments)
                }),
                h = (s = (0, u.Z)(function (e, t, r, n, s) {
                    var a, o, c, i;
                    return (0, p.__generator)(this, function (u) {
                        switch (u.label) {
                        case 0:
                            return u.trys.push([0, 2, , 3]), [4, d(((o = {}).method = "post", o.url = "/lobby-api/report/deposit/100/".concat(r), o.headers = {
                                "Agent-Code": e,
                                Authorization: "Bearer " + t
                            }, o.data = (0, $.isEmpty)(n) || (0, $.isEmpty)(s) ? {} : {
                                filters: {
                                    created_at: {
                                        from: n,
                                        to: s
                                    }
                                }
                            }, o))];
                        case 1:
                            return [2, a = u.sent()];
                        case 2:
                            return c = u.sent(), [2, ((i = {}).error = {
                                code: 500,
                                message: c.message || "Unexpected Error!"
                            }, i)];
                        case 3:
                            return [2]
                        }
                    })
                }), function (e, t, r, n, a) {
                    return s.apply(this, arguments)
                }),
                m = (a = (0, u.Z)(function (e, t, r, n, s) {
                    var a, o, c, i;
                    return (0, p.__generator)(this, function (u) {
                        switch (u.label) {
                        case 0:
                            return u.trys.push([0, 2, , 3]), [4, d(((o = {}).method = "post", o.url = "/lobby-api/report/withdrawal/100/".concat(r), o.headers = {
                                "Agent-Code": e,
                                Authorization: "Bearer " + t
                            }, o.data = (0, $.isEmpty)(n) || (0, $.isEmpty)(s) ? {} : {
                                filters: {
                                    created_at: {
                                        from: n,
                                        to: s
                                    }
                                }
                            }, o))];
                        case 1:
                            return [2, a = u.sent()];
                        case 2:
                            return c = u.sent(), [2, ((i = {}).error = {
                                code: 500,
                                message: c.message || "Unexpected Error!"
                            }, i)];
                        case 3:
                            return [2]
                        }
                    })
                }), function (e, t, r, n, s) {
                    return a.apply(this, arguments)
                });
            (0, u.Z)(function (e, t, r, n, s) {
                var a, o, c, i;
                return (0, p.__generator)(this, function (u) {
                    switch (u.label) {
                    case 0:
                        return u.trys.push([0, 2, , 3]), [4, d(((o = {}).method = "post", o.url = "/lobby-api/report/affiliate/100/".concat(r), o.headers = {
                            "Agent-Code": e,
                            Authorization: "Bearer " + t
                        }, o.data = (0, $.isEmpty)(n) || (0, $.isEmpty)(s) ? {} : {
                            filters: {
                                created_at: {
                                    from: n,
                                    to: s
                                }
                            }
                        }, o))];
                    case 1:
                        return [2, a = u.sent()];
                    case 2:
                        return c = u.sent(), [2, ((i = {}).error = {
                            code: 500,
                            message: c.message || "Unexpected Error!"
                        }, i)];
                    case 3:
                        return [2]
                    }
                })
            }), (0, u.Z)(function (e, t, r, n, s) {
                var a, o, c, i;
                return (0, p.__generator)(this, function (u) {
                    switch (u.label) {
                    case 0:
                        return u.trys.push([0, 2, , 3]), [4, d(((o = {}).method = "post", o.url = "/lobby-api/report/commission/100/".concat(r), o.headers = {
                            "Agent-Code": e,
                            Authorization: "Bearer " + t
                        }, o.data = (0, $.isEmpty)(n) || (0, $.isEmpty)(s) ? {} : {
                            filters: {
                                created_at: {
                                    from: n,
                                    to: s
                                }
                            }
                        }, o))];
                    case 1:
                        return [2, a = u.sent()];
                    case 2:
                        return c = u.sent(), [2, ((i = {}).error = {
                            code: 500,
                            message: c.message || "Unexpected Error!"
                        }, i)];
                    case 3:
                        return [2]
                    }
                })
            });
            var f, g, y, b, _ = (i = (0, u.Z)(function (e, t, r, n, s) {
                    var a, o, c, i, u, l, h, m = arguments;
                    return (0, p.__generator)(this, function (p) {
                        switch (p.label) {
                        case 0:
                            a = m.length > 5 && void 0 !== m[5] ? m[5] : ["reviewing", "approved", "rejected"], p.label = 1;
                        case 1:
                            return p.trys.push([1, 3, , 4]), o = ((c = {}).status = a, c), (0, $.isEmpty)(n) || (0, $.isEmpty)(s) || (o.created_at = {
                                from: n,
                                to: s
                            }), [4, d(((u = {}).method = "post", u.url = "/lobby-api/report/affiliate-transfer/100/".concat(r), u.headers = {
                                "Agent-Code": e,
                                Authorization: "Bearer " + t
                            }, u.data = {
                                filters: o
                            }, u))];
                        case 2:
                            return [2, i = p.sent()];
                        case 3:
                            return l = p.sent(), [2, ((h = {}).error = {
                                code: 500,
                                message: l.message || "Unexpected Error!"
                            }, h)];
                        case 4:
                            return [2]
                        }
                    })
                }), function (e, t, r, n, s) {
                    return i.apply(this, arguments)
                }),
                x = (f = (0, u.Z)(function (e, t, r, n, s) {
                    var a, o, c, i, u, l, h, m = arguments;
                    return (0, p.__generator)(this, function (p) {
                        switch (p.label) {
                        case 0:
                            a = m.length > 5 && void 0 !== m[5] ? m[5] : ["reviewing", "approved", "rejected"], p.label = 1;
                        case 1:
                            return p.trys.push([1, 3, , 4]), o = ((c = {}).status = a, c), (0, $.isEmpty)(n) || (0, $.isEmpty)(s) || (o.created_at = {
                                from: n,
                                to: s
                            }), [4, d(((u = {}).method = "post", u.url = "/lobby-api/report/commission-transfer/100/".concat(r), u.headers = {
                                "Agent-Code": e,
                                Authorization: "Bearer " + t
                            }, u.data = {
                                filters: o
                            }, u))];
                        case 2:
                            return [2, i = p.sent()];
                        case 3:
                            return l = p.sent(), [2, ((h = {}).error = {
                                code: 500,
                                message: l.message || "Unexpected Error!"
                            }, h)];
                        case 4:
                            return [2]
                        }
                    })
                }), function (e, t, r, n, s) {
                    return f.apply(this, arguments)
                }),
                v = (g = (0, u.Z)(function (e, t, r, n, s) {
                    var a, o, c, i, u, l, h, m = arguments;
                    return (0, p.__generator)(this, function (p) {
                        switch (p.label) {
                        case 0:
                            a = m.length > 5 && void 0 !== m[5] ? m[5] : ["reviewing", "approved", "rejected"], p.label = 1;
                        case 1:
                            return p.trys.push([1, 3, , 4]), o = ((c = {}).status = a, c), (0, $.isEmpty)(n) || (0, $.isEmpty)(s) || (o.created_at = {
                                from: n,
                                to: s
                            }), [4, d(((u = {}).method = "post", u.url = "/lobby-api/report/commission-game-type/100/".concat(r), u.headers = {
                                "Agent-Code": e,
                                Authorization: "Bearer " + t
                            }, u.data = {
                                filters: o
                            }, u))];
                        case 2:
                            return [2, i = p.sent()];
                        case 3:
                            return l = p.sent(), [2, ((h = {}).error = {
                                code: 500,
                                message: l.message || "Unexpected Error!"
                            }, h)];
                        case 4:
                            return [2]
                        }
                    })
                }), function (e, t, r, n, s) {
                    return g.apply(this, arguments)
                }),
                E = (y = (0, u.Z)(function (e, t, r, n, s) {
                    var a, o, c, i, u, l, h, m = arguments;
                    return (0, p.__generator)(this, function (p) {
                        switch (p.label) {
                        case 0:
                            a = m.length > 5 && void 0 !== m[5] ? m[5] : ["reviewing", "approved", "rejected"], p.label = 1;
                        case 1:
                            return p.trys.push([1, 3, , 4]), o = ((c = {}).status = a, c), (0, $.isEmpty)(n) || (0, $.isEmpty)(s) || (o.created_at = {
                                from: n,
                                to: s
                            }), [4, d(((u = {}).method = "post", u.url = "/lobby-api/report/affiliate-game-type/100/".concat(r), u.headers = {
                                "Agent-Code": e,
                                Authorization: "Bearer " + t
                            }, u.data = {
                                filters: o
                            }, u))];
                        case 2:
                            return [2, i = p.sent()];
                        case 3:
                            return l = p.sent(), [2, ((h = {}).error = {
                                code: 500,
                                message: l.message || "Unexpected Error!"
                            }, h)];
                        case 4:
                            return [2]
                        }
                    })
                }), function (e, t, r, n, s) {
                    return y.apply(this, arguments)
                }),
                w = (b = (0, u.Z)(function (e, t) {
                    var r, n, s, a;
                    return (0, p.__generator)(this, function (o) {
                        switch (o.label) {
                        case 0:
                            return o.trys.push([0, 2, , 3]), [4, d(((n = {}).method = "get", n.url = "/company/lobby/game-types/member", n.headers = {
                                "Agent-Code": e,
                                Authorization: "Bearer " + t
                            }, n))];
                        case 1:
                            return [2, r = o.sent()];
                        case 2:
                            return s = o.sent(), [2, ((a = {}).error = {
                                code: 500,
                                message: s.message || "Unexpected Error!"
                            }, a)];
                        case 3:
                            return [2]
                        }
                    })
                }), function (e, t) {
                    return b.apply(this, arguments)
                })
        }
    }
]);
