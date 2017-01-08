//tealium universal tag - utag.loader ut4.0.201701042221, Copyright 2017 Tealium.com Inc. All Rights Reserved.
var utag_condload = false;
try {
    (function() {
        function ul(src, a, b) {
            a = document;
            b = a.createElement('script');
            b.language = 'javascript';
            b.type = 'text/javascript';
            b.src = src;
            a.getElementsByTagName('head')[0].appendChild(b)
        };
        if (("" + document.cookie).match("utag_env_teachingcompany_main-magento-stage=([^\S;]*)")) {
            if (RegExp.$1.indexOf("/prod/") === -1) {
                ul(RegExp.$1);
                utag_condload = true;
                __tealium_default_path = '//tags.tiqcdn.com/utag/teachingcompany/main-magento-stage/prod/';
            }
        }
    })();
} catch (e) {};
try {
    window.is_mobile = ((function(a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) return true
    })(navigator.userAgent || navigator.vendor || window.opera)) ? 'true' : 'false';
    if (isTouchable) {
        window.is_tablet = 'true';
    } else {
        window.is_tablet = 'false';
    }
} catch (e) {};
if (!utag_condload) {
    try {
        (function(e, f) {
            var b = {},
                g = function(a) {
                    b[a] && (f.clearInterval(b[a]), b[a] = null)
                };
            e.fn.waitUntilExists = function(a, h, j) {
                var c = this.selector,
                    d = e(c),
                    k = d.not(function() {
                        return e(this).data("waitUntilExists.found")
                    });
                "remove" === a ? g(c) : (k.each(a).data("waitUntilExists.found", !0), h && d.length ? g(c) : j || (b[c] = f.setInterval(function() {
                    d.waitUntilExists(a, h, !0)
                }, 500)));
                return d
            }
        })(jQuery, window);
    } catch (e) {}
};
if (typeof utag == "undefined" && !utag_condload) {
    var utag = {
        id: "teachingcompany.main-magento-stage",
        o: {},
        sender: {},
        send: {},
        rpt: {
            ts: {
                a: new Date()
            }
        },
        dbi: [],
        loader: {
            q: [],
            lc: 0,
            f: {},
            p: 0,
            ol: 0,
            wq: [],
            lq: [],
            bq: {},
            bk: {},
            rf: 0,
            ri: 0,
            rp: 0,
            rq: [],
            lh: function(a, b, c) {
                a = "" + location.hostname;
                b = a.split(".");
                c = (/\.co\.|\.com\.|\.org\.|\.edu\.|\.net\.|\.asn\./.test(a)) ? 3 : 2;
                return b.splice(b.length - c, c).join(".");
            },
            WQ: function(a, b, c, d) {
                utag.DB('WQ:' + utag.loader.wq.length);
                try {
                    if (utag.udoname && utag.udoname.indexOf(".") < 0) {
                        utag.ut.merge(utag.data, window[utag.udoname], 0);
                    }
                    utag.handler.RE('view', utag.data, "bwq");
                    if (utag.cfg.load_rules_at_wait) {
                        utag.handler.LR();
                    }
                } catch (e) {
                    utag.DB(e)
                };
                d = 0;
                for (a = 0; a < utag.loader.wq.length; a++) {
                    b = utag.loader.wq[a];
                    b.load = utag.loader.cfg[b.id].load;
                    if (b.load == 4) {
                        this.f[b.id] = 0;
                        utag.loader.LOAD(b.id)
                    } else if (b.load > 0) {
                        utag.loader.AS(b);
                        d++;
                    } else {
                        this.f[b.id] = 1;
                    }
                }
                if (d == 0) {
                    utag.loader.END();
                }
            },
            AS: function(a, b, c, d) {
                utag.send[a.id] = a;
                if (typeof a.src == 'undefined') {
                    a.src = utag.cfg.path + ((typeof a.name != 'undefined') ? a.name : 'utag.' + a.id + '.js')
                }
                a.src += (a.src.indexOf('?') > 0 ? '&' : '?') + 'utv=' + (a.v ? a.v : utag.cfg.v);
                utag.rpt['l_' + a.id] = a.src;
                b = document;
                this.f[a.id] = 0;
                if (a.load == 2) {
                    b.write('<script id="utag_' + a.id + '" src="' + a.src + '"></scr' + 'ipt>')
                    if (typeof a.cb != 'undefined') a.cb();
                } else if (a.load == 1 || a.load == 3) {
                    if (b.createElement) {
                        c = 'utag_teachingcompany.main-magento-stage_' + a.id;
                        if (!b.getElementById(c)) {
                            d = {
                                src: a.src,
                                id: c,
                                loc: a.loc
                            }
                            if (a.load == 3) {
                                d.type = "iframe"
                            };
                            if (typeof a.cb != 'undefined') d.cb = a.cb;
                            utag.ut.loader(d);
                        }
                    }
                }
            },
            GV: function(a, b, c) {
                b = {};
                for (c in a) {
                    if (a.hasOwnProperty(c) && typeof a[c] != "function") b[c] = a[c];
                }
                return b
            },
            RDdom: function(o) {
                o["dom.referrer"] = eval("document." + "referrer");
                o["dom.title"] = "" + document.title;
                o["dom.domain"] = "" + location.hostname;
                o["dom.query_string"] = ("" + location.search).substring(1);
                o["dom.hash"] = ("" + location.hash).substring(1);
                o["dom.url"] = "" + document.URL;
                o["dom.pathname"] = "" + location.pathname;
            },
            RDcp: function(o, b, c, d) {
                b = b || utag.loader.RC();
                for (d in b) {
                    if (d.match(/utag_(.*)/)) {
                        for (c in utag.loader.GV(b[d])) {
                            o["cp.utag_" + RegExp.$1 + "_" + c] = b[d][c];
                        }
                    }
                }
                for (c in utag.loader.GV((utag.cl && !utag.cl['_all_']) ? utag.cl : b)) {
                    if (c.indexOf("utag_") < 0 && typeof b[c] != "undefined") o["cp." + c] = b[c];
                }
            },
            RDqp: function(o, a, b, c) {
                a = location.search + (location.hash + '').replace("#", "&");
                if (utag.cfg.lowerqp) {
                    a = a.toLowerCase()
                };
                if (a.length > 1) {
                    b = a.substring(1).split('&');
                    for (a = 0; a < b.length; a++) {
                        c = b[a].split("=");
                        if (c.length > 1) {
                            o["qp." + c[0]] = utag.ut.decode(c[1])
                        }
                    }
                }
            },
            RDmeta: function(o, a, b, h) {
                a = document.getElementsByTagName("meta");
                for (b = 0; b < a.length; b++) {
                    try {
                        h = a[b].name || a[b].getAttribute("property") || "";
                    } catch (e) {
                        h = "";
                        utag.DB(e)
                    };
                    if (utag.cfg.lowermeta) {
                        h = h.toLowerCase()
                    };
                    if (h != "") {
                        o["meta." + h] = a[b].content
                    }
                }
            },
            RDva: function(o, a, b) {
                a = "";
                try {
                    a = localStorage.getItem("tealium_va");
                    if (!a || a == "{}") return;
                    b = utag.ut.flatten({
                        va: JSON.parse(a)
                    });
                    utag.ut.merge(utag.data, b, 1);
                } catch (e) {
                    utag.DB("localStorage not supported");
                }
            },
            RD: function(o, a, b, c, d) {
                utag.DB("utag.loader.RD");
                if (typeof o["_t_session_id"] != "undefined") {
                    return
                };
                a = (new Date()).getTime();
                b = utag.loader.RC();
                c = a + parseInt(utag.cfg.session_timeout);
                d = a;
                if (!b.utag_main) {
                    b.utag_main = {};
                } else if (b.utag_main.ses_id && typeof b.utag_main._st != "undefined" && parseInt(b.utag_main._st) < a) {
                    delete b.utag_main.ses_id;
                }
                if (!b.utag_main.v_id) {
                    b.utag_main.v_id = utag.ut.vi(a);
                }
                if (!b.utag_main.ses_id) {
                    b.utag_main.ses_id = d + '';
                    b.utag_main._ss = b.utag_main._pn = 1;
                    b.utag_main._sn = 1 + parseInt(b.utag_main._sn || 0);
                } else {
                    d = b.utag_main.ses_id;
                    b.utag_main._ss = 0;
                    b.utag_main._pn = 1 + parseInt(b.utag_main._pn);
                    b.utag_main._sn = parseInt(b.utag_main._sn);
                }
                if (isNaN(b.utag_main._sn) || b.utag_main._sn < 1) {
                    b.utag_main._sn = b.utag_main._pn = 1
                }
                b.utag_main._st = c + '';
                utag.loader.SC("utag_main", {
                    "v_id": b.utag_main.v_id,
                    "_sn": b.utag_main._sn,
                    "_ss": b.utag_main._ss,
                    "_pn": b.utag_main._pn + ";exp-session",
                    "_st": c,
                    "ses_id": d + ";exp-session"
                });
                o["_t_visitor_id"] = b.utag_main.v_id;
                o["_t_session_id"] = d;
                this.RDqp(o);
                this.RDmeta(o);
                this.RDcp(o, b);
                this.RDdom(o);
                this.RDva(o);
            },
            RC: function(a, x, b, c, d, e, f, g, h, i, j, k, l, m, n, o, v, ck, cv, r, s, t) {
                o = {};
                b = ("" + document.cookie != "") ? (document.cookie).split("; ") : [];
                r = /^(.*?)=(.*)$/;
                s = /^(.*);exp-(.*)$/;
                t = (new Date()).getTime();
                for (c = 0; c < b.length; c++) {
                    if (b[c].match(r)) {
                        ck = RegExp.$1;
                        cv = RegExp.$2;
                    }
                    e = utag.ut.decode(cv);
                    if (typeof ck != "undefined") {
                        if (ck.indexOf("ulog") == 0 || ck.indexOf("utag_") == 0) {
                            e = e.split("$");
                            g = [];
                            j = {};
                            for (f = 0; f < e.length; f++) {
                                try {
                                    g = e[f].split(":");
                                    if (g.length > 2) {
                                        g[1] = g.slice(1).join(":");
                                    }
                                    v = "";
                                    if (("" + g[1]).indexOf("~") == 0) {
                                        h = g[1].substring(1).split("|");
                                        for (i = 0; i < h.length; i++) h[i] = utag.ut.decode(h[i]);
                                        v = h
                                    } else v = utag.ut.decode(g[1]);
                                    j[g[0]] = v;
                                } catch (er) {
                                    utag.DB(er)
                                };
                            }
                            o[ck] = {};
                            for (f in utag.loader.GV(j)) {
                                if (j[f] instanceof Array) {
                                    n = [];
                                    for (m = 0; m < j[f].length; m++) {
                                        if (j[f][m].match(s)) {
                                            k = (RegExp.$2 == "session") ? (typeof j._st != "undefined" ? j._st : t - 1) : parseInt(RegExp.$2);
                                            if (k > t) n[m] = (x == 0) ? j[f][m] : RegExp.$1;
                                        }
                                    }
                                    j[f] = n.join("|");
                                } else {
                                    j[f] = "" + j[f];
                                    if (j[f].match(s)) {
                                        k = (RegExp.$2 == "session") ? (typeof j._st != "undefined" ? j._st : t - 1) : parseInt(RegExp.$2);
                                        j[f] = (k < t) ? null : (x == 0 ? j[f] : RegExp.$1);
                                    }
                                }
                                if (j[f]) o[ck][f] = j[f];
                            }
                        } else if (utag.cl[ck] || utag.cl['_all_']) {
                            o[ck] = e
                        }
                    }
                }
                return (a) ? (o[a] ? o[a] : {}) : o;
            },
            SC: function(a, b, c, d, e, f, g, h, i, j, k, x, v) {
                if (!a) return 0;
                if (a == "utag_main" && utag.cfg.nocookie) return 0;
                v = "";
                var date = new Date();
                var exp = new Date();
                exp.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));
                x = exp.toGMTString();
                if (c && c == "da") {
                    x = "Thu, 31 Dec 2009 00:00:00 GMT";
                } else if (a.indexOf("utag_") != 0 && a.indexOf("ulog") != 0) {
                    if (typeof b != "object") {
                        v = b
                    }
                } else {
                    d = utag.loader.RC(a, 0);
                    for (e in utag.loader.GV(b)) {
                        f = "" + b[e];
                        if (f.match(/^(.*);exp-(\d+)(\w)$/)) {
                            g = date.getTime() + parseInt(RegExp.$2) * ((RegExp.$3 == "h") ? 3600000 : 86400000);
                            if (RegExp.$3 == "u") g = parseInt(RegExp.$2);
                            f = RegExp.$1 + ";exp-" + g;
                        }
                        if (c == "i") {
                            if (d[e] == null) d[e] = f;
                        } else if (c == "d") delete d[e];
                        else if (c == "a") d[e] = (d[e] != null) ? (f - 0) + (d[e] - 0) : f;
                        else if (c == "ap" || c == "au") {
                            if (d[e] == null) d[e] = f;
                            else {
                                if (d[e].indexOf("|") > 0) {
                                    d[e] = d[e].split("|")
                                }
                                g = (d[e] instanceof Array) ? d[e] : [d[e]];
                                g.push(f);
                                if (c == "au") {
                                    h = {};
                                    k = {};
                                    for (i = 0; i < g.length; i++) {
                                        if (g[i].match(/^(.*);exp-(.*)$/)) {
                                            j = RegExp.$1;
                                        }
                                        if (typeof k[j] == "undefined") {
                                            k[j] = 1;
                                            h[g[i]] = 1;
                                        }
                                    }
                                    g = [];
                                    for (i in utag.loader.GV(h)) {
                                        g.push(i);
                                    }
                                }
                                d[e] = g
                            }
                        } else d[e] = f;
                    }
                    h = new Array();
                    for (g in utag.loader.GV(d)) {
                        if (d[g] instanceof Array) {
                            for (c = 0; c < d[g].length; c++) {
                                d[g][c] = encodeURIComponent(d[g][c])
                            }
                            h.push(g + ":~" + d[g].join("|"))
                        } else h.push(g + ":" + encodeURIComponent(d[g]))
                    };
                    if (h.length == 0) {
                        h.push("");
                        x = ""
                    }
                    v = (h.join("$"));
                }
                document.cookie = a + "=" + v + ";path=/;domain=" + utag.cfg.domain + ";expires=" + x;
                return 1
            },
            LOAD: function(a, b, c, d) {
                if (this.ol == 0) {
                    if (utag.loader.cfg[a].block && utag.loader.cfg[a].cbf) {
                        this.f[a] = 1;
                        delete utag.loader.bq[a];
                    }
                    for (b in utag.loader.GV(utag.loader.bq)) {
                        if (utag.loader.cfg[a].load == 4 && utag.loader.cfg[a].wait == 0) {
                            utag.loader.bk[a] = 1;
                            utag.DB("blocked: " + a);
                        }
                        utag.DB("blocking: " + b);
                        return;
                    }
                    utag.loader.INIT();
                    return;
                }
                utag.DB('utag.loader.LOAD:' + a);
                if (this.f[a] == 0) {
                    this.f[a] = 1;
                    if (utag.cfg.noview != true) {
                        if (utag.loader.cfg[a].send) {
                            utag.DB("SENDING: " + a);
                            try {
                                utag.sender[a].send('view', utag.handler.C(utag.data));
                                utag.rpt['s_' + a] = 0;
                            } catch (e) {
                                utag.DB(e);
                                utag.rpt['s_' + a] = 1;
                            }
                        }
                    }
                    if (utag.loader.rf == 0) return;
                    for (b in utag.loader.GV(this.f)) {
                        if (this.f[b] == 0 || this.f[b] == 2) return
                    }
                    utag.loader.END();
                }
            },
            EV: function(a, b, c, d) {
                if (b == "ready") {
                    if (document.readyState !== "loading") setTimeout(c, 1);
                    else {
                        if (typeof utag.loader.ready_q == "undefined") {
                            utag.loader.ready_q = [];
                            utag.loader.run_ready_q = function() {
                                for (var i = 0; i < utag.loader.ready_q.length; i++) {
                                    utag.DB("READY_Q:" + i);
                                    try {
                                        utag.loader.ready_q[i]()
                                    } catch (e) {
                                        utag.DB(e)
                                    };
                                }
                            }
                        }
                        utag.loader.ready_q.push(c);
                        var RH;
                        if (utag.loader.ready_q.length <= 1) {
                            if (document.addEventListener) {
                                RH = function() {
                                    document.removeEventListener("DOMContentLoaded", RH, false);
                                    utag.loader.run_ready_q()
                                };
                                document.addEventListener("DOMContentLoaded", RH, false);
                                window.addEventListener("load", utag.loader.run_ready_q, false);
                            } else if (document.attachEvent) {
                                RH = function() {
                                    if (document.readyState !== "loading") {
                                        document.detachEvent("onreadystatechange", RH);
                                        utag.loader.run_ready_q()
                                    }
                                };
                                document.attachEvent("onreadystatechange", RH);
                                window.attachEvent("onload", utag.loader.run_ready_q);
                            }
                        }
                    }
                } else {
                    if (a.addEventListener) {
                        a.addEventListener(b, c, false)
                    } else if (a.attachEvent) {
                        a.attachEvent(((d == 1) ? "" : "on") + b, c)
                    }
                }
            },
            END: function(b, c, d, e) {
                if (this.ended) {
                    return
                };
                this.ended = 1;
                utag.DB("loader.END");
                b = utag.data;
                if (utag.handler.base && utag.handler.base != '*') {
                    e = utag.handler.base.split(",");
                    for (d = 0; d < e.length; d++) {
                        if (typeof b[e[d]] != "undefined") utag.handler.df[e[d]] = b[e[d]]
                    }
                } else if (utag.handler.base == '*') {
                    utag.ut.merge(utag.handler.df, b, 1);
                }
                utag.rpt['r_0'] = "t";
                for (var r in utag.loader.GV(utag.cond)) {
                    utag.rpt['r_' + r] = (utag.cond[r]) ? "t" : "f";
                }
                utag.rpt.ts['s'] = new Date();
                if (b["cp.utag_main__ss"] == 1) utag.ut.loader({
                    src: "//tags.tiqcdn.com/utag/tiqapp/utag.v.js?a=" + utag.cfg.utid + (utag.cfg.nocookie ? "&nocookie=1" : "&cb=" + (new Date).getTime()),
                    id: "tiqapp"
                });
                utag.handler.RE('view', b, "end");
                utag.handler.INIT();
            }
        },
        DB: function(a, b) {
            if (utag.cfg.utagdb === false) {
                return;
            } else if (typeof utag.cfg.utagdb == "undefined") {
                utag.db_log = [];
                b = document.cookie + '';
                utag.cfg.utagdb = ((b.indexOf('utagdb=true') >= 0) ? true : false);
            }
            if (utag.cfg.utagdb === true) {
                utag.db_log.push(a);
                try {
                    console.log(a)
                } catch (e) {}
            }
        },
        RP: function(a, b, c) {
            if (typeof a != 'undefined' && typeof a.src != 'undefined' && a.src != '') {
                b = [];
                for (c in utag.loader.GV(a)) {
                    if (c != 'src') b.push(c + '=' + escape(a[c]))
                }
                this.dbi.push((new Image()).src = a.src + '?utv=' + utag.cfg.v + '&utid=' + utag.cfg.utid + '&' + (b.join('&')))
            }
        },
        view: function(a, c, d) {
            return this.track({
                event: 'view',
                data: a,
                cfg: {
                    cb: c,
                    uids: d
                }
            })
        },
        link: function(a, c) {
            return this.track({
                event: 'link',
                data: a,
                cfg: {
                    cb: c
                }
            })
        },
        track: function(a, b, c, d) {
            if (typeof a == "string") a = {
                event: a,
                data: b,
                cfg: {
                    cb: c
                }
            };
            for (d in utag.loader.GV(utag.o)) {
                try {
                    utag.o[d].handler.trigger(a.event || "view", a.data || a, a.cfg)
                } catch (e) {
                    utag.DB(e)
                };
            }
            if (a.cfg && a.cfg.cb) try {
                a.cfg.cb()
            } catch (e) {
                utag.DB(e)
            };
            return true
        },
        handler: {
            base: "",
            df: {},
            o: {},
            send: {},
            iflag: 0,
            INIT: function(a, b, c) {
                utag.DB('utag.handler.INIT');
                this.iflag = 1;
                a = utag.loader.q.length;
                if (a > 0) {
                    for (b = 0; b < a; b++) {
                        c = utag.loader.q[b];
                        utag.handler.RE(c.a, c.b);
                        utag.handler.trigger(c.a, c.b)
                    }
                }
                utag.cfg.noview = false;
            },
            test: function() {
                return 1
            },
            LR: function() {
                for (var d in utag.loader.GV(utag.cond)) {
                    utag.cond[d] = false;
                }
                utag.loader.loadrules();
                if (utag.loader.initcfg) {
                    utag.loader.initcfg()
                } else {
                    utag.loader.GET()
                };
            },
            RE: function(a, b, c, d, e, f, g) {
                if (c && !this.cfg_extend) {
                    return 0;
                }
                utag.DB('All Tags EXTENSIONS');
                if (typeof this.extend != "undefined") {
                    g = 0;
                    for (d = 0; d < this.extend.length; d++) {
                        try {
                            e = 0;
                            if (typeof this.cfg_extend != "undefined") {
                                f = this.cfg_extend[d];
                                if (typeof f.count == "undefined") f.count = 0;
                                if (f[a] == 0 || (f.once == 1 && f.count > 0) || (typeof c != "undefined" && f[c] == 0)) {
                                    e = 1
                                } else {
                                    if (typeof c != "undefined" && f[c] == 1) {
                                        g = 1
                                    };
                                    f.count++
                                }
                            }
                            if (e != 1) {
                                this.extend[d](a, b);
                                utag.rpt['ex_' + d] = 0
                            }
                        } catch (e) {
                            utag.rpt['ex_' + d] = 1;
                            utag.ut.error({
                                e: e.message,
                                s: utag.cfg.path + 'utag.js',
                                l: d,
                                t: 'ge'
                            });
                        }
                    }
                    return g;
                }
            },
            trigger: function(a, b, c, d, e, f) {
                utag.DB('trigger:' + a);
                b = b || {};
                if (!this.iflag) {
                    utag.loader.q.push({
                        a: a,
                        b: b
                    });
                    return;
                }
                utag.ut.merge(b, this.df, 0);
                utag.loader.RDqp(b);
                utag.loader.RDcp(b);
                utag.loader.RDdom(b);
                utag.loader.RDmeta(b);
                utag.loader.RDva(b);
                if (c && c.uids) {
                    this.RE(a, b);
                    for (f = 0; f < c.uids.length; f++) {
                        d = c.uids[f];
                        try {
                            if (typeof utag.sender[d] != "undefined") {
                                utag.sender[d].send(a, utag.handler.C(b));
                            } else if (a == "view" && utag.loader.cfg[d].load != 2 && utag.loader.cfg[d].s2s != 1) {
                                utag.ut.merge(utag.data, b, 1);
                                utag.loader.AS({
                                    id: d,
                                    load: 1
                                });
                            }
                        } catch (e) {
                            utag.DB(e)
                        }
                    }
                } else if (utag.cfg.load_rules_ajax) {
                    this.RE(a, b, "blr");
                    utag.ut.merge(utag.data, b, 1);
                    this.LR();
                    this.RE(a, b);
                    for (d in utag.loader.cfg) {
                        try {
                            if (utag.loader.cfg[d].load && utag.loader.cfg[d].send) {
                                if (typeof utag.sender[d] != "undefined") {
                                    utag.sender[d].send(a, utag.handler.C(b));
                                    utag.rpt['s_' + d] = 0;
                                } else if (a == "view" && utag.loader.cfg[d].load != 2 && utag.loader.cfg[d].s2s != 1) {
                                    utag.ut.merge(utag.data, b, 1);
                                    utag.loader.AS({
                                        id: d,
                                        load: 1
                                    });
                                }
                            }
                        } catch (e) {
                            utag.DB(e)
                        }
                    }
                } else {
                    this.RE(a, b);
                    for (d in utag.loader.GV(utag.sender)) {
                        try {
                            utag.sender[d].send(a, utag.handler.C(b));
                            utag.rpt['s_' + d] = 0;
                        } catch (e) {
                            utag.DB(e)
                        }
                    }
                }
            },
            C: function(a, b, c, d) {
                b = {};
                for (c in utag.loader.GV(a)) {
                    if (a[c] instanceof Array) {
                        b[c] = a[c].slice(0)
                    } else {
                        b[c] = a[c]
                    }
                }
                return b
            }
        },
        ut: {
            pad: function(a, b, c, d) {
                a = "" + ((a - 0).toString(16));
                d = '';
                if (b > a.length) {
                    for (c = 0; c < (b - a.length); c++) {
                        d += '0'
                    }
                }
                return "" + d + a
            },
            vi: function(t, a, b) {
                a = this.pad(t, 12);
                b = "" + Math.random();
                a += this.pad(b.substring(2, b.length), 16);
                try {
                    a += this.pad((navigator.plugins.length ? navigator.plugins.length : 0), 2)
                } catch (e) {};
                a += this.pad(navigator.userAgent.length, 3);
                a += this.pad(top.document.URL.length, 4);
                a += this.pad(navigator.appVersion.length, 3);
                a += this.pad(screen.width + screen.height + parseInt((screen.colorDepth) ? screen.colorDepth : screen.pixelDepth), 5);
                return a
            },
            isEmptyObject: function(o, a) {
                for (a in o) {
                    return false;
                }
                return true;
            },
            flatten: function(o) {
                var a = {};

                function r(c, p) {
                    if (Object(c) !== c || c instanceof Array) {
                        a[p] = c;
                    } else {
                        if (utag.ut.isEmptyObject(c)) {} else {
                            for (var d in c) {
                                r(c[d], p ? p + "." + d : d);
                            }
                        }
                    }
                }
                r(o, "");
                return a;
            },
            merge: function(a, b, c, d) {
                if (c) {
                    for (d in utag.loader.GV(b)) {
                        a[d] = b[d]
                    }
                } else {
                    for (d in utag.loader.GV(b)) {
                        if (typeof a[d] == "undefined") a[d] = b[d]
                    }
                }
            },
            decode: function(a, b) {
                b = "";
                try {
                    b = decodeURIComponent(a)
                } catch (e) {
                    utag.DB(e)
                };
                if (b == "") {
                    b = unescape(a)
                };
                return b
            },
            error: function(a, b, c) {
                if (typeof utag_err != "undefined") {
                    utag_err.push(a)
                }
                c = "";
                for (b in a) {
                    c += b + ":" + a[b] + " , "
                };
                utag.DB(c)
            },
            loader: function(o, a, b, c, l) {
                a = document;
                if (o.type == "iframe") {
                    b = a.createElement("iframe");
                    b.setAttribute("height", "1");
                    b.setAttribute("width", "1");
                    b.setAttribute("style", "display:none");
                    b.setAttribute("src", o.src);
                } else if (o.type == "img") {
                    utag.DB("Attach img: " + o.src);
                    b = new Image();
                    b.src = o.src;
                    return;
                } else {
                    b = a.createElement("script");
                    b.language = "javascript";
                    b.type = "text/javascript";
                    b.async = 1;
                    b.src = o.src;
                }
                if (o.id) {
                    b.id = o.id
                };
                if (typeof o.cb == "function") {
                    b.hFlag = 0;
                    b.onreadystatechange = function() {
                        if ((this.readyState == 'complete' || this.readyState == 'loaded') && !b.hFlag) {
                            b.hFlag = 1;
                            o.cb()
                        }
                    };
                    b.onload = function() {
                        if (!b.hFlag) {
                            b.hFlag = 1;
                            o.cb()
                        }
                    }
                }
                l = o.loc || "head";
                c = a.getElementsByTagName(l)[0];
                if (c) {
                    utag.DB("Attach to " + l + ": " + o.src);
                    if (l == "script") {
                        c.parentNode.insertBefore(b, c);
                    } else {
                        c.appendChild(b)
                    }
                }
            }
        }
    };
    utag.o['teachingcompany.main-magento-stage'] = utag;
    utag.cfg = {
        v: "ut4.28.201701042221",
        load_rules_ajax: true,
        load_rules_at_wait: false,
        lowerqp: false,
        session_timeout: 1800000,
        readywait: 0,
        noload: 0,
        domain: utag.loader.lh(),
        path: "//tags.tiqcdn.com/utag/teachingcompany/main-magento-stage/prod/",
        utid: "teachingcompany/main-magento-stage/201701042221"
    };
    utag.cond = {
        26: 0,
        2: 0,
        42: 0,
        43: 0,
        44: 0,
        45: 0,
        59: 0,
        63: 0,
        64: 0,
        7: 0
    };
    utag.pagevars = function(ud) {
        ud = ud || utag.data;
        try {
            ud['js_page.is_mobile'] = is_mobile
        } catch (e) {
            utag.DB(e)
        };
        try {
            ud['js_page.is_tablet'] = is_tablet
        } catch (e) {
            utag.DB(e)
        };
        try {
            ud['js_page.currentLectureid'] = currentLectureid
        } catch (e) {
            utag.DB(e)
        };
        try {
            ud['js_page.cy.CUSTOM4'] = cy.CUSTOM4
        } catch (e) {
            utag.DB(e)
        };
        try {
            ud['js_page.videoFormat'] = videoFormat
        } catch (e) {
            utag.DB(e)
        };
    };
    utag.loader.initdata = function() {
        try {
            utag.data = (typeof utag_data != 'undefined') ? utag_data : {};
            utag.udoname = 'utag_data';
        } catch (e) {
            utag.data = {};
            utag.DB('idf:' + e);
        }
    };
    utag.loader.loadrules = function(_pd, _pc) {
        var d = _pd || utag.data;
        var c = _pc || utag.cond;
        for (var l in utag.loader.GV(c)) {
            switch (l) {
                case '2':
                    try {
                        c[2] |= (d['dom.url'].toString().indexOf('/checkout/onepage/success/') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '26':
                    try {
                        c[26] |= (d['dom.url'].toString().indexOf('.com.au') > -1 && d['dom.url'].toString().indexOf('.au') > -1) || (d['dom.url'].toString().indexOf('au.tgc') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '42':
                    try {
                        c[42] |= (d['dom.url'].toString().toLowerCase().indexOf('.au'.toLowerCase()) < 0 && d['dom.url'].toString().toLowerCase().indexOf('.uk'.toLowerCase()) < 0 && d['dom.url'].toString().toLowerCase().indexOf('uk.'.toLowerCase()) < 0 && d['dom.url'].toString().toLowerCase().indexOf('au.'.toLowerCase()) < 0)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '43':
                    try {
                        c[43] |= (d['dom.url'].toString().indexOf('.uk') > -1) || (d['dom.url'].toString().indexOf('uk.') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '44':
                    try {
                        c[44] |= (d['dom.url'].toString().toLowerCase().indexOf('.uk'.toLowerCase()) < 0 && d['dom.url'].toString().toLowerCase().indexOf('.au'.toLowerCase()) < 0 && d['dom.url'].toString().toLowerCase().indexOf('uk.'.toLowerCase()) < 0 && d['dom.url'].toString().toLowerCase().indexOf('au.'.toLowerCase()) < 0)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '45':
                    try {
                        c[45] |= (d['dom.url'].toString().indexOf('.uk') < 0 && d['dom.url'].toString().toLowerCase().indexOf('uk.'.toLowerCase()) < 0)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '59':
                    try {
                        c[59] |= (d['page_name'].toString().toLowerCase().indexOf('The Great Courses homepage'.toLowerCase()) > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '63':
                    try {
                        c[63] |= (d['page_type'].toString().toLowerCase().indexOf('product'.toLowerCase()) < 0)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '64':
                    try {
                        c[64] |= (d['page_type'].toString().toLowerCase().indexOf('product'.toLowerCase()) > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '7':
                    try {
                        c[7] |= (d['dom.url'].toString().toLowerCase().indexOf('/checkout/onepage/success/'.toLowerCase()) < 0)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
            }
        }
    };
    utag.pre = function() {
        utag.loader.initdata();
        utag.pagevars();
        try {
            utag.loader.RD(utag.data)
        } catch (e) {
            utag.DB(e)
        };
        utag.loader.loadrules();
    };
    utag.loader.GET = function() {
        utag.cl = {
            '_all_': 1
        };
        utag.pre();
        utag.handler.extend = [function(a, b) {
            var strArray = utag.data.product_name.split(',');
            var fixedArray = [];
            if (strArray.length > 0) {
                for (i = 0; i < strArray.length; i++) {
                    var str = strArray[i];
                    if (str.length > 100) {
                        var itemArray = str.split(' - ');
                        var type = itemArray[itemArray.length - 1];
                        type = '... - ' + type;
                        var str = str.substring(0, 100 - type.length);
                        str += type;
                    }
                    fixedArray.push(str);
                }
                utag.data.product_name = fixedArray.join(',');
            }
        }, function(a, b, c, d) {
            b._ccity = (typeof b['customer_city'] != 'undefined') ? b['customer_city'] : '';
            b._ccountry = (typeof b['customer_country'] != 'undefined') ? b['customer_country'] : '';
            b._ccurrency = (typeof b['order_currency'] != 'undefined') ? b['order_currency'] : '';
            b._ccustid = (typeof b['customer_id'] != 'undefined') ? b['customer_id'] : '';
            b._corder = (typeof b['order_id'] != 'undefined') ? b['order_id'] : '';
            b._cpromo = '';
            b._cship = (typeof b['order_shipping'] != 'undefined') ? b['order_shipping'] : '';
            b._cstate = (typeof b['customer_state'] != 'undefined') ? b['customer_state'] : '';
            b._cstore = '';
            b._csubtotal = (typeof b['order_subtotal'] != 'undefined') ? b['order_subtotal'] : '';
            b._ctax = (typeof b['order_tax'] != 'undefined') ? b['order_tax'] : '';
            b._ctotal = (typeof b['order_total'] != 'undefined') ? b['order_total'] : '';
            b._ctype = (typeof b['cp.strAdcode'] != 'undefined') ? b['cp.strAdcode'] : '';
            b._czip = (typeof b['order_zip'] != 'undefined') ? b['order_zip'] : '';
            b._cprod = (typeof b['product_id'] != 'undefined' && b['product_id'].length > 0) ? b['product_id'].split(',') : [];
            b._cprodname = (typeof b['product_name'] != 'undefined' && b['product_name'].length > 0) ? b['product_name'].split(',') : [];
            b._cbrand = [];
            b._ccat = [];
            b._ccat2 = (typeof b['course_format'] != 'undefined' && b['course_format'].length > 0) ? b['course_format'].split(',') : [];
            b._cquan = (typeof b['product_quantity'] != 'undefined' && b['product_quantity'].length > 0) ? b['product_quantity'].split(',') : [];
            b._cprice = (typeof b['product_priority_price'] != 'undefined' && b['product_priority_price'].length > 0) ? b['product_priority_price'].split(',') : [];
            b._csku = (typeof b['product_sku'] != 'undefined' && b['product_sku'].length > 0) ? b['product_sku'].split(',') : [];
            b._cpdisc = (typeof b['order_discount'] != 'undefined' && b['order_discount'].length > 0) ? b['order_discount'].split(',') : [];
            if (b._cprod.length == 0) {
                b._cprod = b._csku.slice()
            };
            if (b._cprodname.length == 0) {
                b._cprodname = b._csku.slice()
            };

            function tf(a) {
                if (a == '' || isNaN(parseFloat(a))) {
                    return a
                } else {
                    return (parseFloat(a)).toFixed(2)
                }
            };
            b._ctotal = tf(b._ctotal);
            b._csubtotal = tf(b._csubtotal);
            b._ctax = tf(b._ctax);
            b._cship = tf(b._cship);
            for (c = 0; c < b._cprice.length; c++) {
                b._cprice[c] = tf(b._cprice[c])
            };
            for (c = 0; c < b._cpdisc.length; c++) {
                b._cpdisc[c] = tf(b._cpdisc[c])
            };
        }, function(a, b) {
            try {
                if (b['dom.query_string'].toString().indexOf('ref=cj') > -1 || b['dom.query_string'].toString().indexOf('ref=CJ') > -1 || b['dom.query_string'].toString().indexOf('cjid=') > -1) {
                    if (typeof b['cp.cjCookie'] == 'undefined') {
                        document.cookie = "cjCookie=" + 'true' + ";path=/;domain=" + utag.cfg.domain + ";expires=" + (function() {
                            var d = new Date();
                            d.setTime(d.getTime() + (30 * 86400000));
                            return d.toGMTString()
                        })() + "";
                        b['cp.cjCookie'] = 'true';
                    }
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if (1) {
                    b['mp_page_name'] = 'great_course_rt';
                    try {
                        b['mp_remarketing'] = 1
                    } catch (e) {}
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            $('div#login_2012 input[type=submit]').click(function() {
                var sel = $('span.radiobutton input:checked').val();
                if (sel && sel == "rdNewCustomer") {
                    utag.link({});
                } else if (sel && sel == "rdReturningCustomer") {
                    utag.link({});
                }
            });
        }, function(a, b) {
            try {
                if (b['dom.url'].toString().toLowerCase().indexOf('basket'.toLowerCase()) > -1 || b['dom.url'].toString().toLowerCase().indexOf('ConfirmPurchasedInfo'.toLowerCase()) > -1 || b['dom.url'].toString().toLowerCase().indexOf('checkout/cart'.toLowerCase()) > -1 || b['dom.url'].toString().toLowerCase().indexOf('checkout/onepage'.toLowerCase()) > -1) {
                    try {
                        b['merch_evar31'] = b['_csku'].slice(0)
                    } catch (e) {}
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if ((b['dom.referrer'].toString().indexOf('freelectures') > -1 && b['dom.url'].toString().indexOf('digital-library') > -1 && b['cp.IsProspect'] == '0')) {
                    b['prospect_signup'] = 'fl-signup';
                    b['prospect_signup_type'] = 'fl-customer'
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if ((b['dom.referrer'].toString().indexOf('freelectures') > -1 && b['dom.url'].toString().indexOf('freelectures') > -1 && b['cp.IsProspect'].toString().indexOf('1') > -1)) {
                    b['prospect_signup'] = 'fl-signup';
                    b['prospect_signup_type'] = 'fl-prospect'
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if ((b['dom.url'].toString().indexOf('digital-library/account/downloadPrefs') > -1 && b['dom.referrer'].toString().indexOf('ttcmailer01.teach12.net') > -1 && b['cp.IsProspect'] == '1')) {
                    b['prospect_apply'] = 'drtv_new_prospect_validation'
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if (b['page_type'].toString().indexOf('product') > -1) {
                    b['product_default_price'] = '"0"'
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            jQuery('div.BVRRRatingSummaryLinks a').live('mousedown', function() {
                var BVrating = jQuery('.BVRRRatingNumber').html();
                var BVtotalrecommend = jQuery('#BVRRSummaryContainer > div > div > div > div.BVRRBuyAgainContainer > span.BVRRValue.BVRRBuyAgain > span.BVRRNumber.BVRRBuyAgainRecommend').text();
                var BVtotalratings = jQuery('#BVRRSummaryContainer > div > div > div > div.BVRRBuyAgainContainer > span.BVRRValue.BVRRBuyAgain > span.BVRRNumber.BVRRBuyAgainTotal').text();
                var BVpctrecommend = jQuery('#BVRRSummaryContainer > div > div > div > div.BVRRBuyAgainContainer > span.BVRRValue.BVRRBuyAgain > span.BVRRBuyAgainPercentage').text();
                BVpctrecommend = BVpctrecommend.replace(/[\(\)]/g, '')
                var eVartext = ('BazaarVoice ' + jQuery(this).text() + ':' + utag_data.product_id + ':' + BVrating + ':' + BVtotalrecommend + ':' + BVtotalratings + ':' + BVpctrecommend);
                var linkname = jQuery(this).attr('name');
                var linktitle = ('PDP: ' + jQuery(this).attr('title'));
                utag.link({
                    read_review_click: eVartext,
                    link_text: eVartext,
                    page_type: linktitle
                });
            });
        }, function(a, b) {
            jQuery('div#BVRRContentContainerID.BVRRContainer a').bind('mousedown', function() {
                var eVartext_1 = jQuery(this).attr('title');
                var eVartext_2 = jQuery(this).attr('title') + ' ' + jQuery(this).text();
                if (typeof(eVartext_1) == 'undefined') {
                    eVartext_2 = jQuery(this).text();
                }
                eVartext_2 = eVartext_2.replace(/[\n\r]/g, '')
                var BVrating = jQuery('.BVRRRatingNumber').html();
                var BVtotalrecommend = jQuery('#BVRRSummaryContainer > div > div > div > div.BVRRBuyAgainContainer > span.BVRRValue.BVRRBuyAgain > span.BVRRNumber.BVRRBuyAgainRecommend').text();
                var BVtotalratings = jQuery('#BVRRSummaryContainer > div > div > div > div.BVRRBuyAgainContainer > span.BVRRValue.BVRRBuyAgain > span.BVRRNumber.BVRRBuyAgainTotal').text();
                var BVpctrecommend = jQuery('#BVRRSummaryContainer > div > div > div > div.BVRRBuyAgainContainer > span.BVRRValue.BVRRBuyAgain > span.BVRRBuyAgainPercentage').text();
                BVpctrecommend = BVpctrecommend.replace(/[\(\)]/g, '')
                var eVartext = ('BazaarVoice Expanded Reviews Link - ' + eVartext_2 + ':' + utag_data.product_id + ':' + BVrating + ':' + BVtotalrecommend + ':' + BVtotalratings + ':' + BVpctrecommend);
                utag.link({
                    read_review_click: eVartext,
                    link_text: eVartext
                });
            });
        }, function(a, b) {
            try {
                if ((b['dom.referrer'].toString().toLowerCase().indexOf('/universe'.toLowerCase()) > -1 && b['dom.url'].toString().toLowerCase().indexOf('digital-library'.toLowerCase()) > -1) || (b['dom.referrer'].toString().toLowerCase().indexOf('/space'.toLowerCase()) > -1 && b['dom.url'].toString().toLowerCase().indexOf('digital-library'.toLowerCase()) > -1)) {
                    b['link_text'] = 'drtv_existing_customer';
                    b['event_name'] = 'drtv_existing_customer';
                    b['prospect_signup'] = 'drtv_existing_customer';
                    b['prospect_apply'] = 'drtv_existing_customer_validation'
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if ((b['dom.url'].toString().toLowerCase().indexOf('/checkout/onepage'.toLowerCase()) > -1 && b['dom.referrer'].toString().toLowerCase().indexOf('courses'.toLowerCase()) > -1 && b['egift'].toString().toLowerCase() == 'true'.toLowerCase())) {
                    b['event_type'] = 'egift_checkout_button_clicks';
                    b['link_text'] = 'egift_checkout_button_clicks'
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if ((b['dom.url'].toString().toLowerCase().indexOf('/checkout/onepage'.toLowerCase()) > -1 && b['dom.url'].toString().toLowerCase().indexOf('/checkout/onepage/success/'.toLowerCase()) < 0 && b['egift'].toString().toLowerCase() == 'true'.toLowerCase())) {
                    b['event_name'] = 'egift_checkout'
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if ((b['dom.url'].toString().toLowerCase().indexOf('/checkout/onepage/success/'.toLowerCase()) > -1 && b['egift'].toString().toLowerCase() == 'true'.toLowerCase())) {
                    b['event_name'] = 'egift_order_confirmation';
                    b['egiftadd'] = '+1'
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if ((b['dom.url'].toString().toLowerCase().indexOf('/dgift/accept/index/token/'.toLowerCase()) > -1 && b['dom.referrer'].toString().toLowerCase().indexOf('teach12.net'.toLowerCase()) > -1)) {
                    b['event_name'] = 'egift_redeem_page'
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if ((b['dom.url'].toString().toLowerCase().indexOf('digital-library/account'.toLowerCase()) > -1 && b['dom.referrer'].toString().toLowerCase().indexOf('/dgift/accept/index/token'.toLowerCase()) > -1)) {
                    b['event_name'] = 'egift_complete'
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            var product_types = b.product_type.split(",");
            for (var i = 0; i < product_types.length; i++)
                if (product_types[i].indexOf("sets") > -1 || product_types[i].indexOf("default") > -1) {
                    product_types.splice(i, 1);
                    i--;
                    var bvproducts = product_types;
                } else {
                    var bvproducts = product_types;
                };
            for (var i = 0; i < bvproducts.length; i++) {
                bvproducts[i] = (bvproducts[i].split("_").slice(1, -1)[0]) || "undefined";
            };
            b.bvfinal_products = bvproducts;
        }, function(a, b) {
            var product_types = b.product_type.split(",");
            for (var i = 0; i < product_types.length; i++)
                if (product_types[i].indexOf("sets") > -1 || product_types[i].indexOf("default") > -1) {
                    product_types.splice(i, 1);
                    i--;
                    var bvprice = product_types;
                } else {
                    var bvprice = product_types;
                };
            for (var i = 0; i < bvprice.length; i++) {
                bvprice[i] = (bvprice[i].split("_")).slice(-1)[0];
            };
            b.bvfinal_price = bvprice;
        }, function(a, b) {
            try {
                if (1) {
                    try {
                        b['adroll_custom_data'] = '"ORDER_ID":' + utag_data.order_id
                    } catch (e) {}
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if (typeof b['cp.granitest'] != 'undefined' && b['cp.granitest'] != '') {
                    b['granify_test'] = 'true'
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b, c, d, e, f, g) {
            d = b['cp.strAdcode'];
            if (typeof d == 'undefined') return;
            c = [{
                '137144': 'plusprospect'
            }, {
                '137754': 'plusprospect'
            }, {
                '137755': 'plusprospect'
            }, {
                '137756': 'plusprospect'
            }, {
                '137757': 'plusprospect'
            }, {
                '137758': 'plusprospect'
            }, {
                '137759': 'plusprospect'
            }, {
                '137760': 'plusprospect'
            }, {
                '137761': 'plusprospect'
            }, {
                '137762': 'plusprospect'
            }, {
                '139758': 'plusprospect'
            }, {
                '139759': 'plusprospect'
            }, {
                '139760': 'plusprospect'
            }, {
                '139761': 'plusprospect'
            }, {
                '139762': 'plusprospect'
            }, {
                '140774': 'plusprospect'
            }, {
                '140775': 'plusprospect'
            }];
            var m = false;
            for (e = 0; e < c.length; e++) {
                for (f in c[e]) {
                    if (d == f) {
                        b['customerType'] = c[e][f];
                        m = true
                    };
                };
                if (m) break
            };
            if (!m) b['customerType'] = '';
        }];
        utag.handler.cfg_extend = [{
            "alr": 1,
            "bwq": 0,
            "id": "178",
            "blr": 0,
            "end": 0
        }, {
            "alr": 1,
            "bwq": 0,
            "id": "17",
            "blr": 0,
            "end": 0
        }, {
            "alr": 1,
            "bwq": 0,
            "id": "169",
            "blr": 0,
            "end": 0
        }, {
            "alr": 1,
            "bwq": 0,
            "id": "177",
            "blr": 0,
            "end": 0
        }, {
            "alr": 1,
            "bwq": 0,
            "id": "182",
            "blr": 0,
            "end": 0
        }, {
            "alr": 1,
            "bwq": 0,
            "id": "217",
            "blr": 0,
            "end": 0
        }, {
            "alr": 1,
            "bwq": 0,
            "id": "321",
            "blr": 0,
            "end": 0
        }, {
            "alr": 1,
            "bwq": 0,
            "id": "320",
            "blr": 0,
            "end": 0
        }, {
            "alr": 1,
            "bwq": 0,
            "id": "319",
            "blr": 0,
            "end": 0
        }, {
            "alr": 1,
            "bwq": 0,
            "id": "260",
            "blr": 0,
            "end": 0
        }, {
            "alr": 1,
            "bwq": 0,
            "id": "322",
            "blr": 0,
            "end": 0
        }, {
            "alr": 1,
            "bwq": 0,
            "id": "323",
            "blr": 0,
            "end": 0
        }, {
            "alr": 1,
            "bwq": 0,
            "id": "362",
            "blr": 0,
            "end": 0
        }, {
            "alr": 1,
            "bwq": 0,
            "id": "422",
            "blr": 0,
            "end": 0
        }, {
            "alr": 1,
            "bwq": 0,
            "id": "423",
            "blr": 0,
            "end": 0
        }, {
            "alr": 1,
            "bwq": 0,
            "id": "424",
            "blr": 0,
            "end": 0
        }, {
            "alr": 1,
            "bwq": 0,
            "id": "425",
            "blr": 0,
            "end": 0
        }, {
            "alr": 1,
            "bwq": 0,
            "id": "426",
            "blr": 0,
            "end": 0
        }, {
            "alr": 1,
            "bwq": 0,
            "id": "558",
            "blr": 0,
            "end": 0
        }, {
            "alr": 1,
            "bwq": 0,
            "id": "559",
            "blr": 0,
            "end": 0
        }, {
            "alr": 1,
            "bwq": 0,
            "id": "618",
            "blr": 0,
            "end": 0
        }, {
            "alr": 1,
            "bwq": 0,
            "id": "629",
            "blr": 0,
            "end": 0
        }, {
            "alr": 1,
            "bwq": 0,
            "id": "662",
            "blr": 0,
            "end": 0
        }];
        utag.loader.initcfg = function() {
            utag.loader.cfg = {
                "94": {
                    load: (utag.cond[7] && utag.cond[44]),
                    send: 1,
                    v: 201511031924,
                    wait: 1,
                    tid: 13002
                },
                "124": {
                    load: (utag.cond[2] && utag.cond[42]),
                    send: 1,
                    v: 201511031924,
                    wait: 1,
                    tid: 13002
                },
                "68": {
                    load: (utag.cond[26] && utag.cond[2]),
                    send: 1,
                    v: 201511031924,
                    wait: 1,
                    tid: 13002
                },
                "137": {
                    load: (utag.cond[7] && utag.cond[26]),
                    send: 1,
                    v: 201511031924,
                    wait: 1,
                    tid: 13002
                },
                "163": {
                    load: (utag.cond[2] && utag.cond[43]),
                    send: 1,
                    v: 201511031924,
                    wait: 1,
                    tid: 13002
                },
                "7": {
                    load: (utag.cond[44] && utag.cond[2]),
                    send: 1,
                    v: 201511031924,
                    wait: 1,
                    tid: 7050
                },
                "108": {
                    load: (utag.cond[26] && utag.cond[2]),
                    send: 1,
                    v: 201511031924,
                    wait: 1,
                    tid: 7050
                },
                "122": {
                    load: (utag.cond[2] && utag.cond[43]),
                    send: 1,
                    v: 201511031924,
                    wait: 1,
                    tid: 7050
                },
                "109": {
                    load: (utag.cond[7] && utag.cond[45]),
                    send: 1,
                    v: 201511031924,
                    wait: 1,
                    tid: 7115
                },
                "123": {
                    load: (utag.cond[7] && utag.cond[43]),
                    send: 1,
                    v: 201511031924,
                    wait: 1,
                    tid: 7115
                },
                "16": {
                    load: 1,
                    send: 1,
                    v: 201612081503,
                    wait: 1,
                    tid: 19004
                },
                "18": {
                    load: (utag.cond[2] && utag.cond[42]),
                    send: 1,
                    v: 201511031924,
                    wait: 1,
                    tid: 13055
                },
                "126": {
                    load: (utag.cond[44] && utag.cond[2]),
                    send: 1,
                    v: 201605041525,
                    wait: 1,
                    tid: 2035
                },
                "194": {
                    load: (utag.cond[2] && utag.cond[42]),
                    send: 1,
                    v: 201511031924,
                    wait: 1,
                    tid: 20067
                },
                "193": {
                    load: (utag.cond[59] && utag.cond[42]),
                    send: 1,
                    v: 201511031924,
                    wait: 1,
                    tid: 20067
                },
                "198": {
                    load: (utag.cond[2] && utag.cond[42]),
                    send: 1,
                    v: 201511031924,
                    wait: 1,
                    tid: 9002
                },
                "199": {
                    load: utag.cond[42],
                    send: 1,
                    v: 201511031924,
                    wait: 1,
                    tid: 20067
                },
                "219": {
                    load: utag.cond[42],
                    send: 1,
                    v: 201611082202,
                    wait: 1,
                    tid: 20067
                },
                "233": {
                    load: (utag.cond[2] && utag.cond[42]),
                    send: 1,
                    v: 201611082202,
                    wait: 1,
                    tid: 20067
                },
                "220": {
                    load: (utag.cond[7] && utag.cond[63] && utag.cond[42]),
                    send: 1,
                    v: 201611101947,
                    wait: 1,
                    tid: 1066
                },
                "234": {
                    load: (utag.cond[64] && utag.cond[42]),
                    send: 1,
                    v: 201611101947,
                    wait: 1,
                    tid: 1066
                },
                "226": {
                    load: (utag.cond[2] && utag.cond[42]),
                    send: 1,
                    v: 201611101947,
                    wait: 1,
                    tid: 1066
                }
            };
            utag.loader.cfgsort = ["94", "124", "68", "137", "163", "7", "108", "122", "109", "123", "16", "18", "126", "194", "193", "198", "199", "219", "233", "220", "234", "226"];
        }
        utag.loader.initcfg();
    }
    if (typeof utag_cfg_ovrd != 'undefined') {
        for (var i in utag.loader.GV(utag_cfg_ovrd)) utag.cfg[i] = utag_cfg_ovrd[i]
    };
    utag.loader.PINIT = function(a, b, c) {
        utag.DB("Pre-INIT");
        if (utag.cfg.noload) {
            return;
        }
        try {
            this.GET();
            if (utag.handler.RE('view', utag.data, "blr")) {
                utag.handler.LR();
            }
            utag.handler.RE('view', utag.data);
        } catch (e) {
            utag.DB(e)
        };
        a = this.cfg;
        c = 0;
        for (b in this.GV(a)) {
            if (a[b].load > 0 && (typeof a[b].src != 'undefined' && a[b].src != '')) {
                a[b].block = 1
            }
            if (a[b].block) {
                if (a[b].load == 4) a[b].load = 1;
                c = 1;
                this.bq[b] = 1;
                var d = b;
                a[b].cb = function() {
                    utag.loader.cfg[d].cbf = 1;
                    utag.loader.LOAD(d)
                };
                a[b].id = b;
                this.AS(a[b]);
            }
        }
        if (c == 0) this.INIT();
    };
    utag.loader.INIT = function(a, b, c, d, e) {
        utag.DB('utag.loader.INIT');
        if (this.ol == 1) return -1;
        else this.ol = 1;
        utag.rpt.ts['i'] = new Date();
        d = this.cfgsort;
        for (a = 0; a < d.length; a++) {
            e = d[a];
            b = this.cfg[e];
            b.id = e;
            if (b.block != 1 && b.s2s != 1) {
                if (utag.loader.bk[b.id]) {
                    this.f[b.id] = 0;
                    utag.loader.LOAD(b.id)
                } else if (b.wait == 1 && utag.loader.rf == 0 && !(b.load == 4 && utag.cfg.noview)) {
                    utag.DB('utag.loader.INIT: waiting ' + b.id);
                    this.wq.push(b)
                    this.f[b.id] = 2;
                } else if (b.load > 0) {
                    utag.DB('utag.loader.INIT: loading ' + b.id);
                    this.lq.push(b);
                    this.AS(b);
                }
            }
        }
        if (this.wq.length > 0) utag.loader.EV('', 'ready', function(a) {
            if (utag.loader.rf == 0) {
                utag.DB('READY:utag.loader.wq');
                utag.loader.rf = 1;
                utag.loader.WQ();
            }
        });
        else if (this.lq.length > 0) utag.loader.rf = 1;
        else if (this.lq.length == 0) utag.loader.END();
        return 1
    };
    utag.loader.EV('', 'ready', function(a) {
        if (utag.loader.efr != 1) {
            utag.loader.efr = 1;
            try {
                var video_events = ["OnMediaStart", "OnMediaPause", "OnMediaUnpause", "OnMediaPlaying", "OnMediaComplete", "OnMediaSeek"];
                var milestone_percentages = ["25", "50", "75", "95"];
                var played = false;
                window._tealium_PDK = {
                    name: "thePlatform PDK",
                    init_tries: 0,
                    events: video_events,
                    milestone_percentages: milestone_percentages,
                    milestone_progress: .5,
                    mediaEventHandler: function(e) {
                        if (e.type === 'OnMediaStart') {
                            _tealium_PDK.video_title = e.data.title;
                            if (e.data.baseClip.isAd) {
                                utag.DB(e);
                                utag.DB("**** Ad Started ****");
                            } else {
                                _tealium_PDK.start = Math.floor(e.data.length / 1000);
                                s.Media.open(_tealium_PDK.video_title, _tealium_PDK.start, _tealium_PDK.name);
                                s.Media.play(_tealium_PDK.video_title, 2);
                            }
                        }
                        if (!_tealium_PDK.isAd) {
                            if (e.type === 'OnMediaPause') {
                                _tealium_PDK.positionpause = e.data.clip.currentMediaTime;
                                _tealium_PDK.pausepos = (_tealium_PDK.positionpause / 1000);
                                s.Media.stop(_tealium_PDK.video_title, _tealium_PDK.pausepos);
                                _tealium_PDK.paused = true;
                            } else if (e.type === 'OnMediaUnpause') {
                                _tealium_PDK.positionunpause = e.data.clip.currentMediaTime;
                                _tealium_PDK.unpausepos = (_tealium_PDK.positionunpause / 1000);
                                s.Media.play(_tealium_PDK.video_title, _tealium_PDK.unpausepos);
                                _tealium_PDK.paused = false;
                            } else if (e.type === 'OnMute') {
                                _tealium_PDK.video_state = "mute";
                            } else if (e.type === 'OnMediaSeek') {
                                if (!_tealium_PDK.paused) {
                                    _tealium_PDK.seekStartTime = Math.floor(e.data.start.currentTimeAggregate / 1000);
                                    console.log("*****seekstart***** : " + _tealium_PDK.seekStartTime);
                                    s.Media.stop(_tealium_PDK.video_title, _tealium_PDK.seekStartTime);
                                    _tealium_PDK.seekEndTime = Math.floor(e.data.end.currentTimeAggregate / 1000);
                                    s.Media.play(_tealium_PDK.video_title, _tealium_PDK.seekEndTime);
                                }
                            } else if (e.type === 'OnMediaComplete') {
                                _tealium_PDK.video_state = "complete";
                                _tealium_PDK.positioncomplete = e.data.currentMediaTime;
                                _tealium_PDK.posloccompelte = (_tealium_PDK.positioncomplete / 1000);
                                s.Media.complete(_tealium_PDK.video_title, _tealium_PDK.posloccompelte);
                                s.Media.stop(_tealium_PDK.video_title, _tealium_PDK.posloccomplete);
                                s.Media.close(_tealium_PDK.video_title);
                            }
                        }
                    },
                    addEvents: function() {
                        for (var i = 0; i < _tealium_PDK.events.length; i++) {
                            $pdk.controller.addEventListener(_tealium_PDK.events[i], _tealium_PDK.mediaEventHandler, "*");
                        }
                    },
                    convertToMins: function(t, m) {},
                    convertToSecsDur: function(z) {
                        _tealium_PDK.start = (z / 1000);
                    },
                    convertToSecsPosComplete: function(x) {
                        _tealium_PDK.posloccomplete = (x / 1000);
                    },
                    convertToSeekStart: function(g) {
                        _tealium_PDK.seekstart = (g / 1000);
                    },
                    convertToSeekEnd: function(p) {
                        _tealium_PDK.seekend = (p / 1000);
                    },
                    init: function() {
                        if (typeof $pdk != "undefined" && $pdk.controller && typeof _tealium_PDK.eventsAdded == "undefined") {
                            _tealium_PDK.addEvents()
                            utag.DB("TEALIUM: Connecting Tealium with thePlatform  Player - SUCCESS");
                            _tealium_PDK.eventsAdded = true;
                            return;
                        } else {
                            _tealium_PDK.init_tries += 1;
                            if (_tealium_PDK.init_tries > 100) {
                                utag.DB("TEALIUM: Cannot connect to thePlatform   Video");
                                return;
                            }
                            setTimeout(function() {
                                _tealium_PDK.init()
                            }, 100);
                        }
                    }
                }
                if (typeof _tealium_PDK.videoPlayer == "undefined") {
                    setTimeout(function() {
                        _tealium_PDK.init()
                    }, 300);
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                var page = window.location.pathname;
                if (page == "/natgeo" || page.indexOf("/natgeo") > -1) {
                    jQuery(".top-static-links.f-right ul.f-right-h-list li.first").waitUntilExists(function() {
                        jQuery(".top-static-links.f-right ul.f-right-h-list li.first").text("1-800-303-2615");
                    });
                };
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (typeof utag.runonce == 'undefined') utag.runonce = {};
                utag.jdh = function(h, i, j, k) {
                    h = utag.jdhc.length;
                    if (h == 0) window.clearInterval(utag.jdhi);
                    else {
                        for (i = 0; i < h; i++) {
                            j = utag.jdhc[i];
                            k = jQuery(j.i).is(":visible") ? 1 : 0;
                            if (k != j.s) {
                                if (j.e == (j.s = k)) jQuery(j.i).trigger(j.e ? "afterShow" : "afterHide")
                            }
                        }
                    }
                };
                utag.jdhi = window.setInterval(utag.jdh, 250);
                utag.jdhc = [];
                if (typeof utag.runonce[200] == 'undefined') {
                    utag.runonce[200] = 1;
                    jQuery('#player_cover_overlay').on('click', function(e) {
                        utag.link({
                            video_status: 'start',
                            video_title: lectureidPlay
                        })
                    })
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (typeof utag.runonce == 'undefined') utag.runonce = {};
                utag.jdh = function(h, i, j, k) {
                    h = utag.jdhc.length;
                    if (h == 0) window.clearInterval(utag.jdhi);
                    else {
                        for (i = 0; i < h; i++) {
                            j = utag.jdhc[i];
                            k = jQuery(j.i).is(":visible") ? 1 : 0;
                            if (k != j.s) {
                                if (j.e == (j.s = k)) jQuery(j.i).trigger(j.e ? "afterShow" : "afterHide")
                            }
                        }
                    }
                };
                utag.jdhi = window.setInterval(utag.jdh, 250);
                utag.jdhc = [];
                if (1) {
                    if (typeof utag.runonce[281] == 'undefined') {
                        utag.runonce[281] = 1;
                        jQuery(document.body).on('mousedown', '#priority-code button.button', function(e) {
                            utag.link({
                                "event_name": 'priority_code_submit',
                                "link_text": 'priority-code_submit',
                                "tgcpc_submit": document.getElementById('priority-code-value').value
                            })
                        });
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (1) {
                    if (typeof utag.runonce[256] == 'undefined') {
                        utag.runonce[256] = 1;
                        jQuery(document.body).on('mousedown', 'label.with-icon', function(e) {
                            utag.link({
                                "link_text": 'which format link clicked',
                                "which_format": 'which format link clicked'
                            })
                        });
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (1) {
                    if (typeof utag.runonce[261] == 'undefined') {
                        utag.runonce[261] = 1;
                        utag.jdhc.push({
                            i: '#mini-cart.dropdown div.dropdown-menu',
                            e: 1
                        });
                        jQuery(document.body).on('afterShow', '#mini-cart.dropdown div.dropdown-menu', function(e) {
                            if (jQuery('#mini-cart.dropdown div.dropdown-menu').is(':visible')) {
                                utag.link({
                                    "event_name": 'mini-cart-expand',
                                    "link_text": 'mini-cart-expand'
                                })
                            }
                        })
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (1) {
                    if (typeof utag.runonce[264] == 'undefined') {
                        utag.runonce[264] = 1;
                        utag.jdhc.push({
                            i: '#mini-wishlist.dropdown div.dropdown-menu',
                            e: 1
                        });
                        jQuery(document.body).on('afterShow', '#mini-wishlist.dropdown div.dropdown-menu', function(e) {
                            if (jQuery('#mini-wishlist.dropdown div.dropdown-menu').is(':visible')) {
                                utag.link({
                                    "event_name": 'wish-list-expand',
                                    "link_text": 'wish-list-expand'
                                })
                            }
                        })
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (1) {
                    if (typeof utag.runonce[287] == 'undefined') {
                        utag.runonce[287] = 1;
                        jQuery(document.body).on('mousedown', '#priority-code-cart fieldset div.cart_input_align button.button', function(e) {
                            utag.link({
                                "event_name": 'priority_code_submit_cart',
                                "link_text": 'priority-code_submit_cart',
                                "tgcpc_submit": document.getElementById('priority-code-value').value
                            })
                        });
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (1) {
                    if (typeof utag.runonce[288] == 'undefined') {
                        utag.runonce[288] = 1;
                        jQuery(document.body).on('mousedown', '#discount-coupon-form fieldset div.cart_input_align button.button', function(e) {
                            utag.link({
                                "event_name": 'coupon_code_submit_cart',
                                "link_text": 'coupon-code_submit_cart',
                                "coupon_submit": document.getElementById('coupon_code').value
                            })
                        });
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (1) {
                    if (typeof utag.runonce[295] == 'undefined') {
                        utag.runonce[295] = 1;
                        jQuery(document.body).on('mousedown', '#checkout-sigin.button.medium.primary', function(e) {
                            utag.link({
                                "sc_events": {
                                    "event34": "1"
                                },
                                "link_text": 'Checkout Signin Button'
                            })
                        });
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (1) {
                    if (typeof utag.runonce[296] == 'undefined') {
                        utag.runonce[296] = 1;
                        jQuery(document.body).on('mousedown', '#billing-buttons-container.buttons-set.form-buttons.btn-only', function(e) {
                            utag.link({
                                "sc_events": {
                                    "event35": "1"
                                },
                                "link_text": 'Checkout Billing Address Button'
                            })
                        });
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (1) {
                    if (typeof utag.runonce[297] == 'undefined') {
                        utag.runonce[297] = 1;
                        jQuery(document.body).on('mousedown', '#shipping-buttons-container.buttons-set.form-buttons', function(e) {
                            utag.link({
                                "sc_events": {
                                    "event36": "1"
                                },
                                "link_text": 'Checkout Shipping Address Button'
                            })
                        });
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (1) {
                    if (typeof utag.runonce[298] == 'undefined') {
                        utag.runonce[298] = 1;
                        jQuery(document.body).on('mousedown', '#shipping-method-buttons-container.buttons-set', function(e) {
                            utag.link({
                                "sc_events": {
                                    "event37": "1"
                                },
                                "link_text": 'Checkout Shipping Method Button'
                            })
                        });
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (1) {
                    if (typeof utag.runonce[299] == 'undefined') {
                        utag.runonce[299] = 1;
                        jQuery(document.body).on('mousedown', '#giftcard-form fieldset div.giftcard-code-wrapper button.secondary-btn.button', function(e) {
                            utag.link({
                                "sc_events": {
                                    "event38": "1"
                                },
                                "link_text": 'Checkout Apply Gift Certificate Button'
                            })
                        });
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (1) {
                    if (typeof utag.runonce[300] == 'undefined') {
                        utag.runonce[300] = 1;
                        jQuery(document.body).on('mousedown', '#review-buttons-container.buttons-set', function(e) {
                            utag.link({
                                "sc_events": {
                                    "event40": "1"
                                },
                                "link_text": 'Checkout Place Order Button '
                            })
                        });
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                try {
                    if (1) {
                        var om_usertype = Mage.Cookies.get('UserType');
                        var om_adcode = Mage.Cookies.get('strAdcode');
                        if (om_usertype != "3" && window.location.hostname == "www.thegreatcourses.com") {
                            var om5825e59e6b539, om5825e59e6b539_poll = function() {
                                var r = 0;
                                return function(n, l) {
                                    clearInterval(r), r = setInterval(n, l)
                                }
                            }();
                            ! function(e, t, n) {
                                if (e.getElementById(n)) {
                                    om5825e59e6b539_poll(function() {
                                        if (window['om_loaded']) {
                                            if (!om5825e59e6b539) {
                                                om5825e59e6b539 = new OptinMonsterApp();
                                                return om5825e59e6b539.init({
                                                    "s": "24760.5825e59e6b539",
                                                    "staging": 0,
                                                    "dev": 0,
                                                    "beta": 0
                                                });
                                            }
                                        }
                                    }, 25);
                                    return;
                                }
                                var d = false,
                                    o = e.createElement(t);
                                o.id = n, o.src = "//a.optnmnstr.com/app/js/api.min.js", o.async = true, o.onload = o.onreadystatechange = function() {
                                    if (!d) {
                                        if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") {
                                            try {
                                                d = om_loaded = true;
                                                om5825e59e6b539 = new OptinMonsterApp();
                                                om5825e59e6b539.init({
                                                    "s": "24760.5825e59e6b539",
                                                    "staging": 0,
                                                    "dev": 0,
                                                    "beta": 0
                                                });
                                                o.onload = o.onreadystatechange = null;
                                            } catch (t) {}
                                        }
                                    }
                                };
                                (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(o)
                            }(document, "script", "omapi-script");
                        } else if (om_usertype != "3" && window.location.hostname == "www.thegreatcourses.co.uk") {
                            var om5825e5ea2d9de, om5825e5ea2d9de_poll = function() {
                                var r = 0;
                                return function(n, l) {
                                    clearInterval(r), r = setInterval(n, l)
                                }
                            }();
                            ! function(e, t, n) {
                                if (e.getElementById(n)) {
                                    om5825e5ea2d9de_poll(function() {
                                        if (window['om_loaded']) {
                                            if (!om5825e5ea2d9de) {
                                                om5825e5ea2d9de = new OptinMonsterApp();
                                                return om5825e5ea2d9de.init({
                                                    "s": "24760.5825e5ea2d9de",
                                                    "staging": 0,
                                                    "dev": 0,
                                                    "beta": 0
                                                });
                                            }
                                        }
                                    }, 25);
                                    return;
                                }
                                var d = false,
                                    o = e.createElement(t);
                                o.id = n, o.src = "//a.optnmnstr.com/app/js/api.min.js", o.async = true, o.onload = o.onreadystatechange = function() {
                                    if (!d) {
                                        if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") {
                                            try {
                                                d = om_loaded = true;
                                                om5825e5ea2d9de = new OptinMonsterApp();
                                                om5825e5ea2d9de.init({
                                                    "s": "24760.5825e5ea2d9de",
                                                    "staging": 0,
                                                    "dev": 0,
                                                    "beta": 0
                                                });
                                                o.onload = o.onreadystatechange = null;
                                            } catch (t) {}
                                        }
                                    }
                                };
                                (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(o)
                            }(document, "script", "omapi-script");
                        } else if (om_usertype != "3" && window.location.hostname == "www.thegreatcourses.com.au") {
                            var om5825e5d31f724, om5825e5d31f724_poll = function() {
                                var r = 0;
                                return function(n, l) {
                                    clearInterval(r), r = setInterval(n, l)
                                }
                            }();
                            ! function(e, t, n) {
                                if (e.getElementById(n)) {
                                    om5825e5d31f724_poll(function() {
                                        if (window['om_loaded']) {
                                            if (!om5825e5d31f724) {
                                                om5825e5d31f724 = new OptinMonsterApp();
                                                return om5825e5d31f724.init({
                                                    "s": "24760.5825e5d31f724",
                                                    "staging": 0,
                                                    "dev": 0,
                                                    "beta": 0
                                                });
                                            }
                                        }
                                    }, 25);
                                    return;
                                }
                                var d = false,
                                    o = e.createElement(t);
                                o.id = n, o.src = "//a.optnmnstr.com/app/js/api.min.js", o.async = true, o.onload = o.onreadystatechange = function() {
                                    if (!d) {
                                        if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") {
                                            try {
                                                d = om_loaded = true;
                                                om5825e5d31f724 = new OptinMonsterApp();
                                                om5825e5d31f724.init({
                                                    "s": "24760.5825e5d31f724",
                                                    "staging": 0,
                                                    "dev": 0,
                                                    "beta": 0
                                                });
                                                o.onload = o.onreadystatechange = null;
                                            } catch (t) {}
                                        }
                                    }
                                };
                                (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(o)
                            }(document, "script", "omapi-script");
                        } else {
                            var om_displayed = "no"
                        };
                    }
                } catch (e) {
                    utag.DB(e)
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (1) {
                    if (typeof utag.runonce[312] == 'undefined') {
                        utag.runonce[312] = 1;
                        jQuery(document.body).on('mousedown', '#form-email-cap #submit-btn', function(e) {
                            utag.link({
                                "event_name": 'OptinMonster Submit Desktop',
                                "link_text": 'Desktop Footer Email  Submit',
                                "email_collect": 'Desktop Footer Email  Submit'
                            })
                        });
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (1) {
                    if (typeof utag.runonce[643] == 'undefined') {
                        utag.runonce[643] = 1;
                        jQuery(document.body).on('click', '#email-capture-mobile .button', function(e) {
                            utag.link({
                                "event_name": 'OptinMonster mobile submit',
                                "link_text": 'Mobile Footer Email  Submit',
                                "email_collect": 'Mobile Footer Email  Submit'
                            })
                        })
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (1) {
                    if (typeof utag.runonce[644] == 'undefined') {
                        utag.runonce[644] = 1;
                        utag.jdhc.push({
                            i: '#email-capture-submitted-new',
                            e: 1
                        });
                        jQuery(document.body).on('afterShow', '#email-capture-submitted-new', function(e) {
                            if (jQuery('#email-capture-submitted-new').is(':visible')) {
                                utag.link({
                                    "event_name": 'OptinMonster mobile Success ',
                                    "link_text": 'Desktop Email Submit Success ',
                                    "email_collect": 'Desktop Email Submit Success '
                                })
                            }
                        })
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (1) {
                    if (typeof utag.runonce[645] == 'undefined') {
                        utag.runonce[645] = 1;
                        utag.jdhc.push({
                            i: '#email-capture-submitted.email_capture_submitted div.new-email-text.descriptions',
                            e: 1
                        });
                        jQuery(document.body).on('afterShow', '#email-capture-submitted.email_capture_submitted div.new-email-text.descriptions', function(e) {
                            if (jQuery('#email-capture-submitted.email_capture_submitted div.new-email-text.descriptions').is(':visible')) {
                                utag.link({
                                    "event_name": 'OptinMonster mobile Success',
                                    "link_text": 'Mobile Email Submit Success ',
                                    "email_collect": 'Mobile Email Submit Success '
                                })
                            }
                        })
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (1) {
                    if (typeof utag.runonce[646] == 'undefined') {
                        utag.runonce[646] = 1;
                        utag.jdhc.push({
                            i: '#email-capture-submitted-existing',
                            e: 1
                        });
                        jQuery(document.body).on('afterShow', '#email-capture-submitted-existing', function(e) {
                            if (jQuery('#email-capture-submitted-existing').is(':visible')) {
                                utag.link({
                                    "event_name": 'OptinMonster Submit Existing Subscriber ',
                                    "link_text": 'Desktop Submit Existing Subscriber',
                                    "email_collect": 'Desktop Submit Existing Subscriber'
                                })
                            }
                        })
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (1) {
                    if (typeof utag.runonce[647] == 'undefined') {
                        utag.runonce[647] = 1;
                        utag.jdhc.push({
                            i: '#existing-email-text.existing-email-text.descriptions',
                            e: 1
                        });
                        jQuery(document.body).on('afterShow', '#existing-email-text.existing-email-text.descriptions', function(e) {
                            if (jQuery('#existing-email-text.existing-email-text.descriptions').is(':visible')) {
                                utag.link({
                                    "event_name": 'OptinMonster Submit Existing Subscriber ',
                                    "link_text": 'Mobile Submit Existing Subscriber',
                                    "email_collect": 'Mobile Submit Existing Subscriber'
                                })
                            }
                        })
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (1) {
                    if (typeof utag.runonce[648] == 'undefined') {
                        utag.runonce[648] = 1;
                        utag.jdhc.push({
                            i: '#advice-validate-email-captured-email',
                            e: 1
                        });
                        jQuery(document.body).on('afterShow', '#advice-validate-email-captured-email', function(e) {
                            if (jQuery('#advice-validate-email-captured-email').is(':visible')) {
                                utag.link({
                                    "event_name": 'OptinMonster email authorization failure first form',
                                    "link_text": 'Desktop email authorization failure first form',
                                    "email_collect": 'Desktop email authorization failure first form'
                                })
                            }
                        })
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (1) {
                    if (typeof utag.runonce[649] == 'undefined') {
                        utag.runonce[649] = 1;
                        utag.jdhc.push({
                            i: '#advice-validate-email-mobile-email-capture-value',
                            e: 1
                        });
                        jQuery(document.body).on('afterShow', '#advice-validate-email-mobile-email-capture-value', function(e) {
                            if (jQuery('#advice-validate-email-mobile-email-capture-value').is(':visible')) {
                                utag.link({
                                    "event_name": 'OptinMonster email authorization failure first form',
                                    "link_text": 'Mobile email authorization failure first form',
                                    "email_collect": 'Mobile email authorization failure first form'
                                })
                            }
                        })
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (1) {
                    if (typeof utag.runonce[650] == 'undefined') {
                        utag.runonce[650] = 1;
                        utag.jdhc.push({
                            i: '#advice-validate-matching-emails-confirm-captured-email',
                            e: 1
                        });
                        jQuery(document.body).on('afterShow', '#advice-validate-matching-emails-confirm-captured-email', function(e) {
                            if (jQuery('#advice-validate-matching-emails-confirm-captured-email').is(':visible')) {
                                utag.link({
                                    "event_name": 'OptinMonster email authorization failure confirmation',
                                    "link_text": 'Desktop email authorization failure confirmation',
                                    "email_collect": 'Desktop email authorization failure confirmation'
                                })
                            }
                        })
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (1) {
                    if (typeof utag.runonce[651] == 'undefined') {
                        utag.runonce[651] = 1;
                        utag.jdhc.push({
                            i: '#advice-validate-matching-emails-mobile-email-confirm-value',
                            e: 1
                        });
                        jQuery(document.body).on('afterShow', '#advice-validate-matching-emails-mobile-email-confirm-value', function(e) {
                            if (jQuery('#advice-validate-matching-emails-mobile-email-confirm-value').is(':visible')) {
                                utag.link({
                                    "event_name": 'OptinMonster OptinMonster email authorization failure confirmation',
                                    "link_text": 'Mobile email authorization failure confirmation',
                                    "email_collect": 'Mobile email authorization failure confirmation'
                                })
                            }
                        })
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                var deviceType = is_tablet;
                if (deviceType == "true") {
                    jQuery("a.download-button").css("display", "none");
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                jQuery("#nav-index a").html("View All My Courses");
                jQuery("#nav-audio a").html("View My Audio Courses");
                jQuery("#nav-video a").html("View My Video Courses");
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (1) {
                    if (typeof utag.runonce[353] == 'undefined') {
                        utag.runonce[353] = 1;
                        jQuery(document.body).on('mousedown', 'a.bc-hero-js.vidLink', function(e) {
                            utag.link({
                                "event_name": 'prospect-video-carousel-click',
                                "link_text": 'prospect-video-carousel-click'
                            })
                        });
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (1) {
                    if (typeof utag.runonce[360] == 'undefined') {
                        utag.runonce[360] = 1;
                        utag.jdhc.push({
                            i: '.isdrtv-conf-email',
                            e: 1
                        });
                        jQuery(document.body).on('afterShow', '.isdrtv-conf-email', function(e) {
                            if (jQuery('.isdrtv-conf-email').is(':visible')) {
                                utag.link({
                                    "event_name": 'drtv_new_signup',
                                    "link_text": 'drtv_new_signup',
                                    "prospect_signup": 'drtv_new_signup'
                                })
                            }
                        })
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (1) {
                    if (typeof utag.runonce[372] == 'undefined') {
                        utag.runonce[372] = 1;
                        jQuery(document.body).on('mousedown', '#add-to-cart-btn.button.purchase.add-to-cart-btn.disabled', function(e) {
                            var buttonclass = jQuery(this).attr('class');
                            if (buttonclass.indexOf("disabled") >= 0) {
                                utag.link({
                                    "linkTrackEvents": "event41",
                                    "link_text": "Disabled add to cart button click"
                                });
                            }
                        });
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (1) {
                    if (typeof utag.runonce[421] == 'undefined') {
                        utag.runonce[421] = 1;
                        jQuery(document.body).on('mousedown', '#send-egift.button.send-as-gift', function(e) {
                            utag.link({
                                "link_text": 'send_egift_click',
                                "event_name": 'send_egift_click',
                                "egiftprice": 'jQuery(\'div#media-format-radio div.format-block.active label span.format-price\').text().trim().replace(\'$\', \'\').replace(\'�\', \'\').split(",")',
                                "egiftitem": utag_data.product_id.split(",")
                            })
                        });
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (window.location.href.indexOf("/courses/") > -1) {
                    jQuery('#send-egift.button.send-as-gift').text('send as e-gift');
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (1) {
                    if (typeof utag.runonce[430] == 'undefined') {
                        utag.runonce[430] = 1;
                        jQuery(document.body).on('mousedown', '#form-set-buy .format-block', function(e) {
                            utag.link({
                                "page_type": 'PDP: Radio Button Buy Together And Save',
                                "link_text": 'PDP: Radio Button Buy Together And Save'
                            })
                        });
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (1) {
                    if (typeof utag.runonce[431] == 'undefined') {
                        utag.runonce[431] = 1;
                        jQuery(document.body).on('mousedown', '#course-description-truncated > div', function(e) {
                            utag.link({
                                "page_type": 'PDP: View More',
                                "link_text": 'PDP: View More'
                            })
                        });
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (1) {
                    if (typeof utag.runonce[432] == 'undefined') {
                        utag.runonce[432] = 1;
                        jQuery(document.body).on('mousedown', 'div.view_timeline_button', function(e) {
                            utag.link({
                                "link_text": 'view_timeline_click',
                                "event_name": 'view_timeline_click'
                            })
                        });
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (1) {
                    if (typeof utag.runonce[433] == 'undefined') {
                        utag.runonce[433] = 1;
                        jQuery(document.body).on('mousedown', '#tab-professor > a', function(e) {
                            utag.link({
                                "page_type": 'PDP: Your Professor Tab',
                                "link_text": 'PDP: Your Professor Tab'
                            })
                        });
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (1) {
                    if (typeof utag.runonce[434] == 'undefined') {
                        utag.runonce[434] = 1;
                        jQuery(document.body).on('mousedown', '#tab-tabreviews > a', function(e) {
                            utag.link({
                                "page_type": 'PDP: Reviews Tab',
                                "link_text": 'PDP: Reviews Tab'
                            })
                        });
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (1) {
                    if (typeof utag.runonce[435] == 'undefined') {
                        utag.runonce[435] = 1;
                        jQuery(document.body).on('mousedown', '#tab-tabqa > a', function(e) {
                            utag.link({
                                "page_type": 'PDP: Q and A Tab',
                                "link_type": 'PDP: Q and A Tab'
                            })
                        });
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (1) {
                    if (typeof utag.runonce[436] == 'undefined') {
                        utag.runonce[436] = 1;
                        jQuery(document.body).on('change', '#BVRRDisplayContentSelectBVFrameID', function(e) {
                            utag.link({
                                "page_type": 'PDP: Sorted Reviews ',
                                "link_text": 'PDP: Sorted Reviews '
                            })
                        });
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (1) {
                    if (typeof utag.runonce[437] == 'undefined') {
                        utag.runonce[437] = 1;
                        jQuery(document.body).on('mousedown', '#product-tabs > div > div:nth-child(6) > div > div.data-block.active > a:nth-child(4)', function(e) {
                            utag.link({
                                "page_type": 'PDP: View More About Professor',
                                "link_text": 'PDP: View More About Professor'
                            })
                        });
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (1) {
                    if (typeof utag.runonce[438] == 'undefined') {
                        utag.runonce[438] = 1;
                        jQuery(document.body).on('mousedown', '#product-tabs > div > div:nth-child(6) > div > div.data-block.active > a:nth-child(7)', function(e) {
                            utag.link({
                                "page_type": 'PDP: View All Courses by Professor',
                                "link_text": 'PDP: View All Courses by Professor'
                            })
                        });
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (1) {
                    if (typeof utag.runonce[439] == 'undefined') {
                        utag.runonce[439] = 1;
                        jQuery(document.body).on('mousedown', '#tab-overview > a', function(e) {
                            utag.link({
                                "page_type": 'PDP: Course Overview Tab',
                                "mp_pagename": 'PDP: Course Overview Tab'
                            })
                        });
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (1) {
                    if (typeof utag.runonce[440] == 'undefined') {
                        utag.runonce[440] = 1;
                        jQuery(document.body).on('mousedown', '#product_addtocart_form .format-block', function(e) {
                            utag.link({
                                "page_type": 'PDP: Chose Format Main Course',
                                "link_text": 'PDP: Chose Format Main Course',
                                "course_format": jQuery(this).find("span.format-label").text()
                            })
                        });
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (window.location.href.indexOf("digital-library/course/view") > -1) {
                    jQuery(document).on("contextmenu", ".download-button", function(e) {
                        var filename1 = jQuery(this).attr("href");
                        var filename2 = filename1.split("=");
                        var fileformat1 = filename1.split("/");
                        var download_lecture1 = filename2[4] + "." + fileformat1[6];
                        utag.link({
                            download_lecture: download_lecture1,
                            link_text: download_lecture1,
                            event_name: "download"
                        });
                    });
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (window.location.href.indexOf("tnt=promoexpl") > -1) {
                    jQuery('div.page-title.category-title > h1').css("visibility", "hidden");
                    jQuery('div.page-title.category-title > h1').html('<strong>Your Promotion Has Expired</strong>&nbsp;Shop Other Courses On Sale');
                    jQuery('div.page-title.category-title > h1').css("visibility", "visible");
                    jQuery('#view_mode_list').click();
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (window.location.href.indexOf("tnt=promoexpg") > -1) {
                    jQuery('div.page-title.category-title > h1').css("visibility", "hidden");
                    jQuery('div.page-title.category-title > h1').html('<strong>Your Promotion Has Expired</strong>&nbsp;Shop Other Courses On Sale');
                    jQuery('div.page-title.category-title > h1').css("visibility", "visible");
                    jQuery('#view_mode_grid').click();
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (1) {
                    if (typeof utag.runonce[458] == 'undefined') {
                        utag.runonce[458] = 1;
                        jQuery(document.body).on('mousedown', 'a.social-button.facebook', function(e) {
                            utag.link({
                                "event_name": 'social-share',
                                "social_link": 'facebook'
                            })
                        });
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (1) {
                    if (typeof utag.runonce[459] == 'undefined') {
                        utag.runonce[459] = 1;
                        jQuery(document.body).on('mousedown', 'a.social-button.twitter', function(e) {
                            utag.link({
                                "event_name": 'social-share',
                                "social_link": 'twitter'
                            })
                        });
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (1) {
                    if (typeof utag.runonce[460] == 'undefined') {
                        utag.runonce[460] = 1;
                        jQuery(document.body).on('mousedown', 'a.social-button.pinterest', function(e) {
                            utag.link({
                                "event_name": 'social-share',
                                "social_link": 'pinterest'
                            })
                        });
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (1) {
                    if (typeof utag.runonce[487] == 'undefined') {
                        utag.runonce[487] = 1;
                        jQuery(document.body).on('mousedown', '#root-wrapper > div.wrapper > div > div.main-container.col1-layout > div > div.col-main.grid-full.in-col1 > div > div.cs_information > div.customer_more_container.tooltip > div:nth-child(1) > div > span > a', function(e) {
                            utag.link({
                                "page_type": 'CART: Privacy Policy Click',
                                "link_text": 'CART: Privacy Policy Click'
                            })
                        });
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (1) {
                    if (typeof utag.runonce[488] == 'undefined') {
                        utag.runonce[488] = 1;
                        jQuery(document.body).on('mousedown', '#root-wrapper > div.wrapper > div > div.main-container.col1-layout > div > div.col-main.grid-full.in-col1 > div > div.cs_information > div.customer_more_container.tooltip > div.float_left.tooltip > div > span > a', function(e) {
                            utag.link({
                                "page_type": 'CART: Guarantee Click',
                                "link_text": 'CART: Guarantee Click'
                            })
                        });
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (1) {
                    if (typeof utag.runonce[513] == 'undefined') {
                        utag.runonce[513] = 1;
                        jQuery(document.body).on('mouseup', 'ul.thumbnails.slides li', function(e) {
                            utag.link({
                                "event_name": 'Thumbnail Click',
                                "link_text": 'Thumbnail Click : ' + jQuery(this).index() + ' : ' + utag.data.product_id,
                                "pdp_thumbnail_position": 'Thumbnail Click : ' + jQuery(this).index() + ' : ' + utag.data.product_id
                            })
                        });
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (1) {
                    if (typeof utag.runonce[514] == 'undefined') {
                        utag.runonce[514] = 1;
                        jQuery(document.body).on('mouseup', '#tab-included', function(e) {
                            utag.link({
                                "event_name": 'What is Included',
                                "link_text": 'Whats Included Tab : ' + utag.data.product_id,
                                "pdp_whats_included_tab": 'Whats Included Tab : ' + utag.data.product_id
                            })
                        });
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (1) {
                    if (typeof utag.runonce[515] == 'undefined') {
                        utag.runonce[515] = 1;
                        jQuery(document.body).on('mouseup', 'div.wwyl-slider-wrapper.itemslider-wrapper div.itemslider ul.direction-nav li a.prev', function(e) {
                            utag.link({
                                "event_name": 'WWYL_Previous',
                                "link_text": 'WWYL_Previous',
                                "pdp_wwyl_button": 'WWYL_Previous :  ' + utag.data.product_id
                            })
                        });
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (1) {
                    if (typeof utag.runonce[516] == 'undefined') {
                        utag.runonce[516] = 1;
                        jQuery(document.body).on('mouseup', 'div.wwyl-slider-wrapper.itemslider-wrapper div.itemslider ul.direction-nav li a.next', function(e) {
                            utag.link({
                                "event_name": 'WWYL_Next',
                                "link_text": 'WWYL_Next',
                                "pdp_wwyl_button": 'WWYL_Next :  ' + utag.data.product_id
                            })
                        });
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (1) {
                    if (typeof utag.runonce[517] == 'undefined') {
                        utag.runonce[517] = 1;
                        jQuery(document.body).on('change', '.my-account.email-preferences .input-box :checkbox', function(e) {
                            utag.link({
                                "event_name": 'Preferences Checkbox',
                                "link_text": 'Preferences Check : ' + $(this).id + ' :Check- ' + $(this).checked,
                                "email_Prefs_Checkbox": 'Preferences Check : ' + $(this).id + ' :Check- ' + $(this).checked
                            })
                        });
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (1) {
                    if (typeof utag.runonce[518] == 'undefined') {
                        utag.runonce[518] = 1;
                        jQuery(document.body).on('change', '.email-pref-sub-item ul li div.input-box :radio', function(e) {
                            utag.link({
                                "event_name": 'Preferences Frequency',
                                "link_text": 'Preferences Frequency : ' + $(this).id + ' :Select- ' + $(this).checked,
                                "email_Prefs_Frequency": 'Preferences Frequency : ' + $(this).id + ' :Select- ' + $(this).checked
                            })
                        });
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (1) {
                    if (typeof utag.runonce[519] == 'undefined') {
                        utag.runonce[519] = 1;
                        jQuery(document.body).on('mouseup', '.preferences p a', function(e) {
                            utag.link({
                                "event_name": 'Preferences Unsubscribe All',
                                "link_text": ' Preferences Unsubscribe All',
                                "email_Preferences_Unsubscribe_All": 'Preferences Unsubscribe All'
                            })
                        });
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (1) {
                    if (typeof utag.runonce[520] == 'undefined') {
                        utag.runonce[520] = 1;
                        jQuery(document.body).on('change', '.survey form ul.email-pref-list li.email-pref-item :checkbox', function(e) {
                            utag.link({
                                "event_name": 'Preferences Survey Checkbox',
                                "link_text": 'Preferences Survey Checkbox : ' + $(this).id + ' :Check- ' + $(this).checked,
                                "email_Prefs_Survey": 'Preferences Survey Checkbox : ' + $(this).id + ' :Check- ' + $(this).checked
                            })
                        });
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (1) {
                    if (typeof utag.runonce[521] == 'undefined') {
                        utag.runonce[521] = 1;
                        jQuery(document.body).on('mouseup', '.my-account.email-preferences div.grid12-9.preferences form button.button', function(e) {
                            utag.link({
                                "event_name": 'Preferences Unsubscribe Submit',
                                "link_text": 'Preferences Unsubscribe Submit',
                                "email_Unsub_Submit": 'Preferences Unsubscribe Submit'
                            })
                        });
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (1) {
                    if (typeof utag.runonce[522] == 'undefined') {
                        utag.runonce[522] = 1;
                        jQuery(document.body).on('mouseup', 'div.my-account.email-preferences div.grid12-9.survey form button.button', function(e) {
                            utag.link({
                                "event_name": 'Preferences Survey Submit',
                                "link_text": 'Preferences Survey Submit',
                                "email_Survey_Submit": 'Preferences Survey Submit'
                            })
                        });
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                var epcDate = jQuery("div.grid12-3 > div > div > h4:nth-child(5)").text();
                var epcLoc = window.location.pathname;
                if (epcDate.indexOf("September") > -1 && epcLoc.indexOf("account/email-preferences") > -1) {
                    jQuery("div.grid12-3 > div > div > p:nth-child(4)").css("display", "none");
                    jQuery("div.grid12-3 > div > div > h4:nth-child(5)").css("display", "none");
                    jQuery("div.grid12-3 > div > div > hr").css("display", "none");
                };
            } catch (e) {
                utag.DB(e)
            };
            try {
                var pagetype = utag_data.page_type;
                if (pagetype == "product") {
                    var actual_pricing = utag_data.product_priority_price.split(",");
                    var actual_price = Number(actual_pricing[actual_pricing.length - 1]);
                    var list_pricing = utag_data.product_list_price.split(",");
                    var list_price = Number(list_pricing[list_pricing.length - 1]);
                    if (list_price > actual_price) {
                        utag_data.on_off_sale = 1;
                    } else {
                        utag_data.on_off_sale = 0;
                        utag_data.off_sale_product_view = "+1";
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                var craftsy_location = window.location.pathname;
                if (craftsy_location.indexOf("craftsy-") > -1 || craftsy_location.indexOf("view/id/12657") > -1) {
                    jQuery("div.whats-included-container div.included-section.apps-section.do-not-have-apps").hide();
                    jQuery("div.course-overview-container div.lectures-container.clearfix div.lectures-bar.clearfix div.year-released").hide();
                    jQuery("span.info-icon").hide();
                };
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (utag.data['dom.url'].toString().indexOf('/courses/') > -1 || utag.data['dom.url'].toString().indexOf('/sets/') > -1) {
                    if (typeof utag.runonce[587] == 'undefined') {
                        utag.runonce[587] = 1;
                        jQuery(document.body).on('mousedown', '#catalog-product-view-recommendations-wrapper div.datamart-recommendations-container a.next', function(e) {
                            utag.link({
                                "link_text": '\'CAB|\'+jQuery(".datamart-recommendations-container").attr("_list_id")+\'|\'+jQuery(".datamart-recommendations-container").attr("_table_name")+\'|\'+jQuery(".datamart-recommendations-container").attr("_user_state");',
                                "event_name": 'right_arrow'
                            })
                        });
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (utag.data['dom.url'].toString().indexOf('/courses/') > -1 || utag.data['dom.url'].toString().indexOf('/sets/') > -1) {
                    if (typeof utag.runonce[588] == 'undefined') {
                        utag.runonce[588] = 1;
                        jQuery(document.body).on('mousedown', '#catalog-product-view-recommendations-wrapper div.datamart-recommendations-container a.prev', function(e) {
                            utag.link({
                                "link_text": '\'CAB|\'+jQuery(".datamart-recommendations-container").attr("_list_id")+\'|\'+jQuery(".datamart-recommendations-container").attr("_table_name")+\'|\'+jQuery(".datamart-recommendations-container").attr("_user_state");',
                                "event_name": 'left_arrow'
                            })
                        });
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (1) {
                    if (typeof utag.runonce[589] == 'undefined') {
                        utag.runonce[589] = 1;
                        jQuery('div.pdp-drawer-block').on('mousedown', 'div.ymal-left-side h3.product-name a,div.ymal-left-side a.product-image img', function(e) {
                            jQuery('div.ymal-left-side a').attr('href', function(index, value) {
                                return value + '?listid=' + jQuery("div.widget.widget-upsell-products").attr("_list_id") + '&pfm=YMAL&recloc=pdp&pos=1'
                            });
                        });
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (1) {}
            } catch (e) {
                utag.DB(e)
            };
            try {
                var tempfixurl = window.location.href;
                if (tempfixurl.indexOf("www.thegreatcourses.com/courses") > -1) {
                    jQuery(".year-released").css("display", "none");
                } else if (tempfixurl.indexOf("www.thegreatcourses.com.au/courses") > -1 || tempfixurl.indexOf("www.thegreatcourses.co.uk/courses") > -1) {
                    jQuery(".year-released").css("display", "none");
                    jQuery("#product_addtocart_form > div > div.product-shop.grid12-7 > div.box-additional.grid12-12 > div > div.widget.widget-banner").css("display", "none");
                } else {};
            } catch (e) {
                utag.DB(e)
            };
            try {
                var tempfixurl = window.location.href;
                if (tempfixurl.indexOf("www.thegreatcourses.com/checkout/cart/") > -1) {
                    jQuery(".cart_table_item_footer a").css({
                        "font-family": "proxima_nova_ltsemibold",
                        "font-size": "16px"
                    });
                    jQuery(".cart_table_item_footer").css({
                        "background-color": "#ECEBEB",
                        "font-size": "16px !important"
                    });
                };
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (1) {
                    if (typeof utag.runonce[615] == 'undefined') {
                        utag.runonce[615] = 1;
                        jQuery(document.body).on('change', '#sort_option_selector', function(e) {
                            utag.link({
                                "sort_order": jQuery('select option[data-attr]:selected').text(),
                                "link_text": jQuery('select option[data-attr]:selected').text()
                            })
                        });
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (window.location.hostname === "www.thegreatcourses.com" && utag_data.granify_test === "true") {
                    if (utag_data.page_name === "cart success" || utag_data.page_name === "Cart Success") {
                        var GRANIFY_SITE_ID = 1412;
                        ! function(o, t, e) {
                            var n, r, i;
                            try {
                                i = new RegExp("(?:^|\\W)_gr_ep=([^;]*)"), r = document.cookie.match(i), r || (document.cookie = "_gr_ep_sent=;expires=Thu, 01-Jan-1970 00:00:01 GMT;path=/", document.cookie = "_gr_er_sent=;expires=Thu, 01-Jan-1970 00:00:01 GMT;path=/", window.location.origin || (window.location.port ? port = ":" + window.location.port : port = "", window.location.origin = window.location.protocol + "//" + window.location.hostname + port), path = window.location.toString().replace(window.location.origin, ""), referrer = document.referrer, n = new Date(+new Date + 18e5), document.cookie = "_gr_ep=" + path + ";expires=" + n.toGMTString() + ";path=/", document.cookie = "_gr_er=" + referrer + ";expires=" + n.toGMTString() + ";path=/")
                            } catch (a) {}
                            o = o + "?id=" + t, window.Granify = e, e._stack = [], e.init = function(o, t, n) {
                                function r(o, t) {
                                    o[t] = function() {
                                        Granify._stack.push([t].concat(Array.prototype.slice.call(arguments, 0)))
                                    }
                                }
                                var i = e;
                                for (h = ["on", "identify", "addTag", "trackPageView", "trackCart", "trackOrder"], a = 0; a < h.length; a++) r(i, h[a])
                            }, e.init();
                            var c, p = document.createElement("script");
                            p.src = o, p.async = !0, c = document.getElementsByTagName("script"), c = c[c.length - 1], c.parentNode.insertBefore(p, c)
                        }("//cdn.granify.com/assets/javascript.js", GRANIFY_SITE_ID, []);
                        Granify.trackPageView({
                            "page_type": "receipt"
                        });
                        Granify.trackOrder({
                            "currency": utag_data.site_currency,
                            "subtotal_price": utag_data.order_subtotal,
                            "order_number": utag_data.order_id,
                            "total_tax": utag_data.order_tax,
                            "total_shipping": utag_data.order_shipping,
                            "total_price": utag_data.order_total
                        });
                    };
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                try {
                    if (1) {
                        var plus_pageHost = window.location.hostname;
                        if (plus_pageHost === "www.thegreatcourses.com" && utag_data.customerType === "plusprospect") {
                            jQuery("#product_addtocart_form > div > div.product-shop.grid12-7 > div.box-additional.grid12-12 > div > div.widget.widget-banner").css("display", "none");
                        };
                    }
                } catch (e) {
                    utag.DB(e)
                }
            } catch (e) {
                utag.DB(e)
            };
        }
    })
    if (utag.cfg.readywait) {
        utag.loader.EV('', 'ready', function(a) {
            if (utag.loader.rf == 0) {
                utag.loader.rf = 1;
                utag.DB('READY:utag.cfg.readywait');
                utag.loader.PINIT();
            }
        })
    } else {
        utag.loader.PINIT()
    }
}
