/**
 * Created by common on 2016/11/21.
 */
;(function ($) {
    var _ajax = $.ajax;
    $.extend({
        /**
         * 重写ajax实现
         * 主要封装了接口在未登录的情况下调用，弹窗登入弹窗
         *   比juqery的ajax多了一个可配置参数 noIdentity
         *   undefined:不需要用户身份，
         *   0:需要用户身份，在没登录状态下，跳转到登录页,
         *   1:需要用户身份，在没登录状态下，跳登录弹窗；
         *
         * @param url
         * @param options
         * @returns {*}
         */
        ajax: function (url, options) {
            // If url is an object, simulate pre-1.5 signature
            if (typeof url === "object") {
                options = url;
                url = undefined;
            }

            // Force options to be an object
            options = options || {};

            var deferred = $.Deferred(),
                $trigger;   //出发ajax jquery元素
            if (options.trigger) {
                $trigger = options.trigger.button();
            }
            $trigger && $trigger.disable();  //禁用元素
            _ajax(url, options)
                .done(function (data, textStatus, jqXHR) {
                    $trigger && $trigger.enable();
                    var code = data.code;   //Get require status
                    if (code === 5112 && options.noIdentity !== undefined) {    //If user does not login in
                        if (options.noIdentity === 0) {
                            location.href = 'login.html?rel=' + encodeURIComponent(location.href);
                        } else if (options.noIdentity === 1) {
                            var closePopups = options.closePopups;
                            if (closePopups && closePopups.length) {
                                for (var i = 0; i < closePopups.length; i++) {
                                    closePopups[i].close();
                                }
                            }
                            $.popupLogin(options.lgCallback);  //popup login dialog
                        }
                    } else {
                        deferred.resolve(data, textStatus, jqXHR);
                    }
                })
                .fail(function (data, textStatus, errorThrown) {
                    $trigger && $trigger.enable();
                    deferred.reject(data, textStatus, errorThrown);
                });
            return deferred.promise();
        }
    });
})(jQuery);