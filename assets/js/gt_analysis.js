(function(window, document, undefined) {
  if (window.ckLogger) {
    //防止重复执行.
    return;
  }

  var utils = {
      jsName: "geek_beacon.js",

      defaultVer: 20170215,

      getVersion: function() {
        var jsFileName = this.jsName;
        var rName = new RegExp(jsFileName + "(\\?(.*))?$");
        var jss = document.getElementsByTagName("script");
        for (var i = 0; i < jss.length; i++) {
          var j = jss[i];
          if (j.src && j.src.match(rName)) {
            var ver = j.src.match(rName)[2];
            if (ver && /^[a-zA-Z0-9]+$/.test(ver)) {
              return ver;
            }
          }
        }
        return this.defaultVer;
      },

      getCookie: function(sName) {
        var arr = document.cookie.match(
          new RegExp("(^| )" + sName + "=([^;]*)(;|$)")
        );
        return arr != null ? unescape(arr[2]) : "-";
      },

      setCookie: function(sName, value, exp, path, domain, secure) {
        var expires = new Date();
        exp =
          typeof exp == "undefined"
            ? ""
            : ";expires=" +
              new Date(
                expires.getTime() + exp * 24 * 60 * 60 * 1000
              ).toUTCString();
        document.cookie =
          sName +
          "=" +
          value +
          exp +
          (domain == null ? "" : "; domain=" + domain) +
          (path == null ? "" : "; path=" + path) +
          (secure == true ? "; secure" : "");
      },

      parseError: function(err) {
        var str = "";
        for (var i in err) {
          str += i + "=" + err[i] + ";";
        }
        return str;
      },

      getRand: (function() {
        var _time = new Date(),
          getBits = function(val, start, end) {
            val = val.toString(36).split("");
            start = (start / 4) | 0;
            end = (end / 4) | 0;
            for (var i = start; i <= end; i++) !val[i] && (val[i] = 0);
            return val.slice(start, end + 1).join("");
          },
          rand = function(max) {
            return (Math.random() * (max + 1)) | 0;
          },
          hnv1a = function(key) {
            key = key
              .replace(/./g, function(m) {
                return m.charCodeAt();
              })
              .split("");
            var p = 16777619,
              hash = 0x811c9dc5,
              l = key.length;
            for (var i = 0; i < l; i++) {
              hash = (hash ^ key[i]) * p;
            }
            hash += hash << 13;
            hash ^= hash >> 7;
            hash += hash << 3;
            hash ^= hash >> 17;
            hash += hash << 5;
            hash = hash & 0x7fffffff; //取正.
            hash = hash.toString(36);
            hash.length < 6 && (hash += (l % 36).toString(36));
            return hash;
          },
          info = [
            screen.width,
            screen.height,
            navigator.plugins.length,
            navigator.javaEnabled(),
            screen.colorDepth,
            location.href,
            navigator.userAgent
          ].join("");

        return function() {
          var s = new Date(),
            t = (+s + 0x92f3973c00).toString(36),
            m =
              getBits(rand(0xfff), 0, 7) +
              getBits(rand(0x1fff), 0, 7) +
              getBits(rand(0x1fff), 0, 8),
            c = (Math.random() * 251 + 50) | 0, // random from 50 - 300
            a = [];
          t.length < 9 && (t += (s % 36).toString(36));
          for (; c--; ) {
            //借助不定次数,多次随机，打散客户端，因软硬环境类似，导致产生随机种子的线性规律性，以及重复性.
            a.push(Math.random());
          }

          return (
            hnv1a(info) + //增加物理维度分流.
            hnv1a(
              [
                //增加用户随机性分流.
                document.documentElement.offsetWidth,
                document.documentElement.offsetHeight,
                history.length,
                new Date() - _time
              ].join("")
            ) +
            t +
            m +
            hnv1a(a.slice(0, 10).join("")) +
            hnv1a(a.slice(c - 9).join(""))
          );
        };
      })(),

      getParam: function(data) {
        var result = null;
        if (data) {
          if (utils.isString(data) || utils.isNumber(data)) {
            result = data;
          } else if (utils.isObject(data)) {
            var str = "";
            for (var k in data) {
              if (data[k] != null && data[k] != undefined) {
                var v = data[k];
                if (utils.isArray(v)) {
                  v = v.join(",");
                } else if (utils.isDate(v)) {
                  v = v.getTime();
                }
                str += k + "=" + v + "|";
              }
            }
            str = str.substring(0, str.length - 1);
            result = str;
          } else if (utils.isArray(data)) {
            if (data.length & (data.length > 0)) {
              result = data.join(",");
            }
          } else {
            result = data.toString();
          }
        }
        if (!result) {
          result = "";
        }
        return result;
      },

      secureEncodeUri: function(data) {
        data = encodeURIComponent(data);
        return this.base64encode(data);
      },

      base64encode: function(str) {
        var base64EncodeChars =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var out, i, len;
        var c1, c2, c3;
        len = str.length;
        i = 0;
        out = "";
        while (i < len) {
          c1 = str.charCodeAt(i++) & 0xff;
          if (i == len) {
            out += base64EncodeChars.charAt(c1 >> 2);
            out += base64EncodeChars.charAt((c1 & 0x3) << 4);
            out += "==";
            break;
          }
          c2 = str.charCodeAt(i++);
          if (i == len) {
            out += base64EncodeChars.charAt(c1 >> 2);
            out += base64EncodeChars.charAt(
              ((c1 & 0x3) << 4) | ((c2 & 0xf0) >> 4)
            );
            out += base64EncodeChars.charAt((c2 & 0xf) << 2);
            out += "=";
            break;
          }
          c3 = str.charCodeAt(i++);
          out += base64EncodeChars.charAt(c1 >> 2);
          out += base64EncodeChars.charAt(
            ((c1 & 0x3) << 4) | ((c2 & 0xf0) >> 4)
          );
          out += base64EncodeChars.charAt(
            ((c2 & 0xf) << 2) | ((c3 & 0xc0) >> 6)
          );
          out += base64EncodeChars.charAt(c3 & 0x3f);
        }
        return out;
      },

      getDomain: function() {
        //获取网站的域名
        return document.URL.substring(
          document.URL.indexOf("://") + 3,
          document.URL.lastIndexOf("/")
        );
      },

      isString: function(str) {
        return (
          str != null &&
          str != undefined &&
          typeof str == "string" &&
          str.constructor == String
        );
      },

      isNumber: function(num) {
        return typeof num == "number" && num.constructor == Number;
      },

      isDate: function(d) {
        return d && typeof d == "object" && d.constructor == Date;
      },

      isArray: function(arr) {
        return arr && typeof arr == "object" && arr.constructor == Array;
      },

      isObject: function(obj) {
        return obj && typeof obj == "object" && obj.constructor == Object;
      },

      trim: function(str) {
        // 去除左右两边空格
        return str.replace(/(^\s*)|(\s*$)/, "");
      }
    },
    _refer,
    _request = (function() {
      var list = [];
      return function(url) {
        //借助list 保持image 句柄.否则某些浏览器,尤其是ie6,会在页面触发gc时.导致request被abort掉.
        var index = list.push(new Image()) - 1;
        /*
				 content length 为0 或 mimeTypes 不是image .则onload会失效。所以此处onload回收，无意义.
				 list[index].onload = function(){
					  list[index] = list[index].onload = null;
				 }
				*/
        list[index].src = url;
      };
    })(),
    _sendTrackLogRequest,
    _trackParams,
    _trackLogTrimStack,
    _cutTrackLog = function() {
      //执行当权，权重最低的。裁剪参数策略.并使该策略出栈. 如果所有策略已经全部出栈.则返回 false.
      var cutMethod = _trackLogTrimStack.pop();
      cutMethod && cutMethod();
      return !!cutMethod;
    },
    _checkURL = function(url) {
      //检查trackLog URL 是否超出限制. 如果超出则 返回 false.
      var len = url.length,
        serverLimit = 2048, //上报服务器允许的url长度
        ieLimit = Math.min(2083, serverLimit),
        otherBrowserMinLimit = 65536, //Firefox 65536 , Safari 80000, Opera 190000, Chrome ~= 20000000
        otherLimit = Math.min(serverLimit, otherBrowserMinLimit);
      if (!+"\v1" || window.XDomainRequest) {
        //ie
        return len <= ieLimit;
      }
      return len <= otherLimit;
    },
    vc = isNaN((vc = +utils.getCookie("beacon_visit_count"))) ? 1 : vc + 1;

  utils.setCookie("beacon_visit_count", vc);

  var ckLogger = {
    uvId: "geek_beacon_id",
    memId: "geek_mem_id",
    beaconUrl: "log.geetemp.com/a.gif", //"127.0.0.21:8080/a.gif",    //记录访问日志的url
    clickUrl: "log.geetemp.com/b.gif", //记录click日志的url
    errorUrl: "log.geetemp.com/c.gif", //记录错误日志的url
    pageId:
      typeof _beacon_pageid != "undefined"
        ? _beacon_pageid
        : (_beacon_pageid = utils.getRand()),
    protocol: (function() {
      var p = location.protocol;
      if ("file:" === p) {
        p = "http:";
      }
      return p + "//";
    })(),
    tracking: function() {
      this.trackLog();
    },

    trackLog: function() {
      try {
        var _this = this;
        //var fullPath = document.URL.indexOf("://");
        //var path = "{" + utils.getParam(document.URL.substring(fullPath + 2)) + "}";
        _refer = utils.getParam(this.getRefer());
        if (_refer) {
          _refer = "refer=" + _refer + "|";
        } else {
          _refer = "";
        }
        var userDataObj = {};
        this.ptId = utils.getCookie(this.memId);
        this.cId = utils.getCookie(this.uvId);
        var memCookie = this.ptId;
        var flagCookie = utils.getCookie("b_t_s");
        var subIsNew = flagCookie == "-" || flagCookie.indexOf("s") == -1;
        if (memCookie != "-") {
          userDataObj.memId = memCookie;
        }
        if (subIsNew) {
          userDataObj.subIsNew = 1;
          utils.setCookie(
            "b_t_s",
            flagCookie == "-" ? "s" : flagCookie + "s",
            10000,
            "/"
          );
        } else {
          userDataObj.subIsNew = 0;
        }
        var userInfo = utils.getParam(userDataObj);
        var pageId = this.pageId;
        var charset = document.charset || document.characterSet;

        _trackParams = {
          pageId: pageId,
          charset: charset,
          sr: window.screen.width + "*" + window.screen.height,
          vc: vc, // visit_count
          cd: window.screen.colorDepth, // color depth
          url: document.URL
        };

        //custom_var
        typeof _beacon != "undefined" &&
          utils.isString(_beacon) &&
          (_trackParams.cv = encodeURIComponent(_beacon));

        //裁剪策略入栈操作
        _trackLogTrimStack = [
          function() {
            //完全去掉 charset信息.
            delete _trackParams.charset;
            //window.console && console.log('url过长,去掉charset上报');
          },
          function() {
            //完全去掉 resolution
            delete _trackParams.sr;
            //window.console && console.log('url过长,去掉sr上报');
          },
          function() {
            //完全去掉 visit_count
            delete _trackParams.vc;
            //window.console && console.log('url过长,去掉vc上报');
          },
          function() {
            //完全去掉corlor depth
            delete _trackParams.cd;
            //window.console && console.log('url过长,去掉cd上报');
          },
          function() {
            //完全去掉java enabled
            delete _trackParams.jv;
            //window.console && console.log('url过长,去掉jv上报');
          },
          function() {
            //完全去掉protocol version.
            delete _trackParams.pc;
            //window.console && console.log('url过长,去掉fv上报');
          },
          function() {
            //完全去掉title
            delete _trackParams.title;
            //window.console && console.log('url过长,去掉title上报');
          },
          function() {
            //尝试完全去掉 custom_var
            delete _trackParams.cv;
            //window.console && console.log('url过长,去掉cv上报');
          },
          function() {
            //裁剪掉refer的querystring部分.
            _refer = _refer.split("?")[0];
            //window.console && console.log('url过长,执行了refer裁切策略.尝试去掉refer的查询字符串部分.处理后refer为:' + _refer);
          },
          function() {
            //裁剪title控制在20个字符以内.
            var title = decodeURIComponent(_trackParams.title);
            _trackParams.title = encodeURIComponent(title.substr(0, 19));
            //window.console && console.log('url过长,执行了title裁切策略.尝试限制其不超过20个字符.处理后title为:' + decodeURIComponent(_trackParams.title));
          }
        ];

        (_sendTrackLogRequest = function() {
          var pageParam = utils.getParam(_trackParams);
          var data = _refer + userInfo + "|" + pageParam;
          _this.sendRequest(_this.beaconUrl, data);
        })();
      } catch (err) {
        this.sendError(err);
      }
    },

    getRefer: function() {
      return document.referrer;
    },

    clickLog: function(dataObj) {
      try {
        var baseData = {};
        var param = "";
        var pageId = this.pageId;
        if (!pageId) {
          pageId = this.pageId = utils.getRand();
        }
        baseData.pageId = pageId;

        var memId = this.memId;
        if (!memId) {
          memId = "-";
        }
        baseData.memId = memId;
        baseData.url = document.URL;
        param = utils.getParam(baseData);
        param = param == "" ? param : param + "|";

        if (utils.isObject(dataObj)) {
          param += utils.getParam(dataObj);
        } else if (utils.isString(dataObj) && dataObj.indexOf("=") > 0) {
          param += dataObj;
        } else if (utils.isArray(dataObj)) {
          param += dataObj.join("|");
        }
        this.sendRequest(this.clickUrl, param);
      } catch (err) {
        this.sendError(err);
      }
    },

    sendError: function(err) {
      var errStr = utils.parseError(err);
      var pageId = this.pageId;
      if (!pageId) {
        pageId = this.pageId = utils.getRand();
      }
      var memId = this.memId;
      if (!memId) {
        memId = "-";
      }
      var err_url =
        this.errorUrl +
        "?pageId=" +
        pageId +
        "|memId=" +
        memId +
        "|url=" +
        document.URL +
        "|exception=" +
        encodeURIComponent(errStr.toString());
      var newImg = new Image();
      newImg.onload = function() {
        newImg = null;
      };
      newImg.src = this.protocol + err_url;
    },

    sendRequest: function(url, param) {
      var base_str = "";
      var d = new Date();
      try {
        if (param) {
          if (utils.isObject(param)) {
            base_str = utils.getParam(param);
          } else {
            base_str = param;
          }
          base_str = base_str == "" ? base_str : base_str + "|";
        }
        var extra_str = "ver=" + utils.getVersion() + "|time=" + d.getTime();
        url =
          this.protocol +
          url +
          "?" +
          utils.secureEncodeUri(base_str + extra_str);
        if (!_checkURL(url)) {
          //如检测url过长.则尝试使用一个当前，权重最低的裁剪策略.
          if (_cutTrackLog()) {
            //如果已经无策略可用.则强制上报.
            return _sendTrackLogRequest();
          }
          //window.console && console.log('所有url裁剪策略,都已处理过,url长度仍然过长.强制上报 : ' + url);
        }
        //window.console && console.log('成功上报 : ' + url);
        //window.console && console.log('url长度为 : ' + url.length);
        _request(url);
      } catch (err) {
        this.sendError(err);
      }
    }
  };

  ckLogger.tracking();

  window.ckLogger = ckLogger;
})(window, document);
