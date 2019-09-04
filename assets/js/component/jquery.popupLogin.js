/**
 * Created by common on 2016/12/6.
 */
;(function ($) {
	$.extend({
		popupLogin: function (callback) {
			//文本框ie6 placeHolder polyfill
			var _iePlaceHolder = function () {
				var isIE = !-[, 1];
				if (isIE && document.documentMode <= 9) {
					$('#login-popup').find('input').filter(function () {
						return $(this).attr('placeholder') !== undefined;
					}).each(function () {
						var self = $(this),
							txt = self.attr('placeholder');
						self.wrap($('<div class="input-wrap"></div>').css({
							position: 'relative',
							zoom: '1',
							border: 'none',
							background: 'none',
							padding: 'none',
							margin: 'none',
							zIndex: '1',
							width: self.outerWidth(true)
						}));

						var pos = self.position(),
							h = self.outerHeight(true);
						var holder = $('<span></span>').text(txt).css({
							position: 'absolute',
							left: parseInt(pos.left) + 8 + 'px',
							top: '0',
							height: h + 'px',
							'line-height': h + 'px',
							'font-size': '14px',
							color: '#757575',
							zIndex: '2'
						}).appendTo(self.parent());
						self.focusin(function () {
							holder.hide();
						}).focusout(function () {
							if (!self.val()) {
								holder.show();
							}
						});
						holder.click(function () {
							holder.hide();
							self.focus();
						});
					});
				}
			};

			var cmpLgDialog,
				$lgDialog,
				$backError,
				$body = $('body');
			//登录框是否已添加到body,如果是，则不再添加
			if ($body.find('#login-popup').length) {
				$lgDialog = $('#login-popup');
				$backError = $lgDialog.find('.back-error');
				cmpLgDialog = $lgDialog.popup({coverClose: true, top: '25%'});
			} else {
				//添加登录弹框到body
				$body.append($('<div id="login-popup" class="popup-global"><div class="header"><h2>登录</h2><a class="close"></a></div><div class="content frm"><form><div class="account"><p class="error hide"></p><div><input type="text" placeholder="账号(注册手机)" name="account" maxlength="20"><i class="icon icon-person"></i></div></div><div class="pwd"><p class="error hide"></p><div><input type="password" placeholder="输入密码" name="pwd" maxlength="20"><i class="icon icon-lock"></i></div></div><div class="attach clearfix"><div class="pull-left"><input id="input-rember" type="checkbox">记住密码</div><div class="pull-right"><a href="./getpassword.html" class="forget">忘记密码？</a></div></div><p class="back-error"></p></form></div><div class="footer"><div class="lg-btn-box"><a href="javascript:;" class="btn btn-main">登录</a></div><div class="go-signup-box"><a href="/signup.html" class="go-signup">立即注册</a></div></div></div>'));
				$lgDialog = $('#login-popup');
				$backError = $lgDialog.find('.back-error');
				var frm = $lgDialog.find('form')[0],
					$account = $(frm.account),
					$pwd = $(frm.pwd),
					phoneEx = /^1[3|4|5|7|8]\d{9}$/,
					pswEx = /^.{6,20}$/;
				cmpLgDialog = $lgDialog.popup({coverClose: true, top: '25%'});

				$lgDialog.find('input[type=checkbox]').customCheckbox();
				//账号文本框失去焦点验证
				$account.on('blur', function () {
					var val = $.trim($(this).val());
					if (val.length && !phoneEx.test(val)) {
						$(this).parent().prev('.error').removeClass('hide').text('* 手机号码格式不正确，请重新输入');
					}
				}).on('focus', function () {
					$(this).parent().prev('.error').addClass('hide').text('');
					$backError.text('');
				});

				//密码文本框失去焦点验证
				$pwd.on('blur', function () {
					var val = $.trim($(this).val());
					if (val.length && !pswEx.test(val)) {
						$(this).parent().prev('.error').removeClass('hide').text('* 密码不正确，密码长度为6-20位任意字符');
					}
				}).on('focus', function () {
					$(this).parent().prev('.error').addClass('hide').text('');
					$backError.text('');
				});
				_iePlaceHolder();
			}

			//登录按钮click事件处理器
			$lgDialog.find('.footer .btn').off('click').on('click', function () {
				var frm = $lgDialog.find('form')[0],
					$account = $(frm.account),
					$pwd = $(frm.pwd),
					account = $.trim($account.val()),
					password = $.trim($pwd.val()),
					passVerify = $lgDialog.find('p.error.hide').length === 2;
				if (!account.length || !password.length) {
					$backError.text('* 账号和密码不能为空');
					return;
				}
				if (!passVerify) return;
				$.ajax({
					url: '/hr/user/login',
					method: 'POST',
					data: {
						account: $account.val(),
						password: $pwd.val(),
						rememberMe: $lgDialog.find('#input-rember').is(':checked') ? 1 : 0
					}
				}).done(function (data) {
					if (data.code === 0) {
						cmpLgDialog.close();
						if (callback) {
							typeof callback === 'function' && callback();
						} else {
							location.reload();
						}
					} else {
						$backError.text('* ' + (data.data ? data.data : data.msg));
					}
				})
			});
			$backError.text('');  //清空ajax请求错误信息
			cmpLgDialog.open();
		}
	});
})(jQuery);