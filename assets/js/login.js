/**
 * Created by EVAN on 2016/11/25.
 */

;(function ($) {

  var login = {
    accountPwdError: "请输入正确的账号和密码",
    turnBlackList: ["getpassword.html", "signup.html", "login.html"],
    eventProcessor: function () {
      $("#input-id").click(function () {
        $(this).css("border", "2px solid #2ba5e6");
      }).blur(function () {
        $(this).css("border", "2px solid #f0f0f0");
      });

      $("#input-word").click(function () {
        $(this).css("border", "2px solid #2ba5e6");
      }).blur(function () {
        $(this).css("border", "2px solid #f0f0f0");
      });
    },
    errorMessage: function (msg) {
      return "*&nbsp" + msg;
    },
    checkUserAndPwd: function (user, pwd) {
      if (!user.match(/^1[0-9]{10}$/g)) {
        this.showErrorMessage($(".warn-mess"), this.errorMessage(this.accountPwdError));
        return false;
      }
      if (pwd == null || pwd.length < 6 || pwd.length >20) {
        this.showErrorMessage($(".warn-mess"), this.errorMessage(this.accountPwdError));
        return false;
      }
      return true;
    },
    showErrorMessage: function (target, msg) {
      target.html(msg);
      target.show();
    },
    clearErrorMessage: function (target) {
      target.text("");
      target.hide();
    }
  };

  $.page({needLogin: false, header: {selector: ".cmp-headerb",suspend: false}})
    .load(function () {

      $("#input-rember").customCheckbox();

      login.eventProcessor();

      $(".loginR .login").click(function () {
        var $warnMess = $(".warn-mess");
        var inputId = $("#input-id").val();
        var inputWord = $("#input-word").val();
        var rememberMe = $("#input-rember").is(':checked') ? 1 : 0; //为真实返回1，为假时返回0
        var url = "/hr/user/login";

        var checkResult = login.checkUserAndPwd(inputId, inputWord);
        if (!checkResult) {
          return false;
        }

        if (inputId == "" || inputWord == "") {
          login.showErrorMessage($warnMess,login.errorMessage(login.accountPwdError));
          return false;
        } else {
          login.clearErrorMessage($warnMess);
          $.ajax({
            type: "post",
            datatype: "json",
            cache: false,
            url: url,
            data: {
              account: inputId,
              password: inputWord,
              rememberMe: rememberMe
            }
          }).done(function (res) {
            if (res.code != 0) {
              if (res.data == null || $.trim(res.data) == "") {
                login.showErrorMessage($warnMess, login.errorMessage(res.msg));
              } else {
                login.showErrorMessage($warnMess, login.errorMessage(res.data));
              }
            } else {
              var prevLink = document.referrer;
              if ($.trim(prevLink) == '') {
                location.href = 'index.html';
                return;
              }
              for (var i = 0; i < login.turnBlackList.length; i++) {
                if ($.trim(prevLink).indexOf(login.turnBlackList[i]) !== -1) {
                  location.href = 'index.html';
                  return;
                }
              }
              location.href = prevLink;
              
              //end
              if ($('#input-rember').is(':checked')) {
                $.cookie('account', inputId, {expires: 7, path: '/'});
                $.cookie('password', inputWord, {expires: 7, path: '/'});
              } else {
                $.cookie('account', null, {path: '/'});
                $.cookie('password', null, {path: '/'});
              }
            }
          }).fail(function (res) {
              $warnMess.show().html(login.errorMessage("账户名与密码不匹配，请重新输入"))
          });
        }
      });
    })
})(jQuery);
