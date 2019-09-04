/**
 * Created by common on 2016/11/23.
 *
 */
;(function ($) {
  $.extend({
    /**
     * 页面级操作封装
     *  1.页尾固定到屏幕底部
     *  2.对于需要登录才能访问的页面，进行是否登录检查
     *
     * @param opts  object 参数
     *    {
         *       bottomFooter: true,    boolean  页脚是否固定到页面底部
         *       footer: '#footer',     string   页脚选择器
         *       header: '#header',     string   页头选择器
         *       main: '#page',         string   页面主体选择器
         *       needLogin: false,      boolean  页面是否需要登录才能访问
         *       isLoginUrl: '/hr/user/isLogin'  string   判断用户是否登录接口
         *     }
     * @returns {{load: Function}}
     */
    page: function (opts) {
      var defaultOpts = {
        bottomFooter: true,
        footer: '#footer',
        header: {
          selector: '#header',
          suspend: true
        },
        main: '#page',
        needLogin: false,
        isLoginUrl: '/hr/user/isLogin'
      };

      //设置底页角
      var bootFooterAdjust = function () {
        if (opts.bottomFooter) {
          var docHeight = document.body.clientHeight,
            winHeight = document.documentElement.clientHeight,
            footerHeight = $(opts.footer).outerHeight(true),
            headerHeight = $(opts.header.selector).outerHeight(true);
          if (docHeight < winHeight) {  //文档高度小于窗口高度
            $(opts.main).css('min-height', winHeight - footerHeight - headerHeight);
          }
        }
      };

      //页面头悬浮
      var headerSuspend = function () {
        var $header = $(opts.header.selector || '#header').find('.header-wraps'),
          $cmpHeader = $header.find('.cmp-header'),
          $wrap = $cmpHeader.find('.header-wrap'),
          $signUp = $wrap.find('.wrapper-register');
        $cmpHeader.find("img.logo").on("click", function() {
          location.href = "/index.html"
        })
        $cmpHeader.find("img.new").on("click", function() {
          window.open("http://www.geetemp.com/v3/", "_blank")
        })
        $(document).scroll(function () {
          if ($(this).scrollTop() > 60) {
            $header.css({
              position: 'fixed',
              top: 0,
              'z-index': 1000,
              width: '100%',
              'box-shadow': '0 8px 12px rgba(230, 231, 235, 0.45)'
            });
            $cmpHeader.css({
              padding: 0,
              height: '60px'
            });
            $wrap.css({
              'padding-top': '15px'
            });
            $signUp.length && $signUp.css({
              'padding-top': '13px',
              'padding-bottom': '13px'
            });
          } else {
            $header.css({
              position: 'static',
              'box-shadow': 'none'
            });
            $cmpHeader.css({
              padding: '15px 0 13px',
              height: '32px'
            });
            $wrap.css({
              'padding-top': '0'
            });
            $signUp.length && $signUp.css({
              'padding-top': '13px',
              'padding-bottom': '13px'
            })
          }
        });
      };

      //页尾悬浮处理
      var footerHover = function () {
        // 页面尾部
        $("i.i-wechat").on("mousemove", function () {
          var qrcode = $(".qrcode");
          var clientWidth = document.body.clientWidth;
          var width = parseInt(qrcode.css("width").replace("px", ""), 10);
          // var minWidth = $(".cmp-footer").css("min-width");
          if (clientWidth < 1000) {
            qrcode.css("right", "0");
          } else if (clientWidth > 1000 && clientWidth < (1000 + width * 2)) {
            if ((1000 - clientWidth) / 2 < -130) {
              qrcode.css("right", "-130px");
            } else {
              qrcode.css("right", (1000 - clientWidth) / 2 + "px");
            }
          } else {
            qrcode.css("right", "-130px");
          }
          qrcode.show();
        }).on("mouseleave", function () {
          $(".qrcode").hide();
        });

        $("i.i-phone").on("mousemove", function () {
          var phone = $(".p-phone");
          var clientWidth = document.body.clientWidth;
          var width = parseInt(phone.css("width").replace("px", ""), 10);
          // var minWidth = $(".cmp-footer").css("min-width");
          if (clientWidth < 1000) {
            phone.css("right", "-126px");
          } else if (clientWidth > 1000 && clientWidth < (1000 + width * 2)) {
            if ((1000 - clientWidth) / 2 < -130) {
              phone.css("right", "-130px");
            } else {
              phone.css("right", (1000 - clientWidth) / 2 + "px");
            }
          } else {
            phone.css("right", "-130px");
          }
          phone.show();
        }).on("mouseleave", function () {
          $(".p-phone").hide();
        });

        $("i.i-email").on("mousemove", function () {
          var email = $(".p-email");
          var clientWidth = document.body.clientWidth;
          var width = parseInt(email.css("width").replace("px", ""), 10);
          // var minWidth = $(".cmp-footer").css("min-width");
          if (clientWidth < 1000) {
            email.css("right", "-63px");
          } else if (clientWidth > 1000 && clientWidth < (1000 + width * 2)) {
            if ((1000 - clientWidth) / 2 < -160) {
              email.css("right", "-160px");
            } else {
              email.css("right", (1000 - clientWidth) / 2 + "px");
            }
          } else {
            email.css("right", "-160px");
          }
          email.show();
        }).on("mouseleave", function () {
          $(".p-email").hide();
        });
      };

      //页面头处理
      var isShowCenter = function (isLogin, user) {
        var path = location.pathname;
        if (isLogin) {
          var blackList = ["getpassword.html", "signup.html", "login.html"];
          // 如果登录则禁止访问登录注册找回密码页
          for (var i = 0; i < blackList.length; i++) {
            if (path.indexOf(blackList[i]) !== -1) {
              location.href = 'index.html';
              return;
            }
          }
          // 如果登录且访问的是个人中心，则变蓝色
          var centerList = ["setting.html", "talentshome.html", "orders.html"];
          for (var i = 0; i < centerList.length; i++) {
            if (path.indexOf(centerList[i]) !== -1) {
              $(".a-myGee").css("color", "#32a4e6");
              break;
            }
          }
        }
        if (isLogin) {
          if (user != null && user.avatar != null && user.avatar != "") {
            $(".account-icon").attr("src", user.avatar);
          }

          $("#sign-wrapper").hide();
          $("#mygee-wrapper").show();
          // 人才库数量
          $.ajax({
            url: "/hr/cart/num",
            method: 'GET'
          }).done(function (res) {
            if (res.code == 0) {
              $("i.number").text(res.data.number);
              showNumber(parseInt(res.data.number, 10));
            }
          })
        } else {
          $("#sign-wrapper").show();
          $("#mygee-wrapper").hide();
        }

        // 页面头部
        $(".split,.account-icon,.a-myGee,.dot,.arrow").on("mousemove", function () {
          var number = $("i.number").text().length;
          if (number == 1) {
            $("i.number").css("height", "14px").css("width", "14px")
              .css("top", "0").css("line-height", "13px");
          } else if (number == 2) {
            $("i.number").css("height", "17px").css("width", "17px")
              .css("top", "-2px").css("line-height", "17px");
          } else if (number == 3) {
            $("i.number").css("height", "22px").css("width", "22px")
              .css("top", "-4px").css("line-height", "22px");
          }

          $(".account-center").fadeIn("slow");
        });
        $("#mygee-wrapper").on("mouseleave", function () {
          $(".account-center").slideUp();
        });
        // 企业logo点击
        $(".this-is-nav img.logo").click(function () {
          window.location.href = "/index.html";
        });
        // 租人才和派服务
        if (path.indexOf("talents.html") != -1) {
          $(".talents").css("color", "#32a4e6");
        } else if (path.indexOf("service.html") != -1) {
          $(".service").css("color", "#32a4e6");
        }
      };

      var showNumber = function (num) {
        if (num <= 0) {
          $("#mygee-wrapper i.number").css("visibility", "hidden");
          $("#mygee-wrapper i.dot").hide();
        } else {
          $("#mygee-wrapper i.number").css("visibility", "visible");
          $("#mygee-wrapper i.dot").show();
        }
      };

      //ui 修饰
      var UiDecorate = function () {
        return {
          //文字超长，省略
          wordOmit: function () {
            $(opts.main).find('.word-omit').each(function () {
              $(this).attr('title', $(this).text());
            });
          },
          //input 占位符在ie8下兼容
          inputPlaceholder: function () {
            $(function () {
              $('input, textarea').placeholder();

              /**safari浏览器下去除line-height，解决placeholder偏上
               if (navigator.userAgent.indexOf("Safari") > 0 && navigator.userAgent.indexOf("Chrome") < 0) {
                                $("input").css("line-height", "0");
                            }
               */
            });
          }
        }
      };

      /**
       * 页面引导
       */
      void function businessGuide() {
        var bGuideTag = $.cookie ? parseInt($.cookie('business-guide') || '0') : 1;
        if (!bGuideTag) {
          $(document.body).append(tplGuide());
          $('.guide-popup').popup({coverClose: true}).open();
          $.cookie('business-guide', '1', {
            expires: 10000
          });
        }
      }();

      return {
        bootFooterAdjust: function () {
          bootFooterAdjust();
        },
        //页面加载
        load: function (pageDo) {
          var that = this;
          opts = $.extend(defaultOpts, opts);
          bootFooterAdjust();
          if (opts.header.suspend) {
            headerSuspend();
          }
          footerHover();
          var uiDecorate = UiDecorate();
          uiDecorate.wordOmit();
          uiDecorate.inputPlaceholder();

          $.ajax({
            url: opts.isLoginUrl,
            method: 'GET'
          }).done(function (data) {
            if (data.code === 5112 && opts.needLogin) {  //没有登录，则跳转到首页
              location.href = 'login.html?rel=' + encodeURIComponent(location.href);
              return;
            }
            isShowCenter(data.code === 0, data.data);
            var user = data.data;
            pageDo && typeof pageDo === 'function' && pageDo(user, that);
          })
        },
        showCenter: function () {
          $("#sign-wrapper").hide();
          $("#mygee-wrapper").show();
        },
        addProfileNum: function () {
          var num = $("i.number").text();
          var profileNum = parseInt(num, 10) + 1;
          $("i.number").text(profileNum);
          showNumber(parseInt(profileNum, 10));
        },
        deleteProfileNum: function () {
          var num = $("i.number").text();
          var profileNum = parseInt(num, 10) - 1;
          $("i.number").text(profileNum);
          showNumber(parseInt(profileNum, 10));
        },
        wordOmit: UiDecorate().wordOmit
      }
    }
  });
})(jQuery);