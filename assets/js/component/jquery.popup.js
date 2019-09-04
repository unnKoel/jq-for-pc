/**
 * Created by common on 2016/11/21.
 */

;(function ($) {
    /**
     * 弹窗组件
     * @param options
     *        {
   *           closeEle    string      关闭按钮选择器
   *           opened      function    弹窗打开回调
   *           closed      function    弹窗关闭回调
   *           coverClose  boolean     蒙层点击，弹窗是否关闭
   *        }
     *
     * @returns {{
   *            open: Function, 弹窗打开方法
   *            close: Function 弹窗关闭方法
   *          }}
     */
    $.fn.popup = function (options) {
        options = options || {};

        var _self = this,
            _coverLayer,
            _closeBtn = _self.find(options.closeEle || '.close').css('cursor', 'pointer'),
            _win = $(window),
            _isDrew = false,

            _opened = options.opened,
            _closed = options.closed,
            _coverClose = options.coverClose || false;

        /**
         * ui 绘画
         * @private
         */
        var _drew = function () {
            //绘画蒙层元素
            (function drewCoverLayer() {
                _coverLayer = $('<div></div>');
                _coverLayer.css({
                    position: 'fixed',
                    zIndex: 100,
                    display: 'none',
                    width: '100%',
                    height: '100%',
                    left: 0,
                    top: 0,
                    'background-color': '#000',
                    opacity: 0.6,
                    filter: 'alpha(opacity = 60)'
                });
                _self.coverLayer = _coverLayer;
            })();

            //绘画弹窗
            (function drewPopup() {
                _self.css({
                    position: 'fixed',
                    zIndex: 101,
                    display: 'none'
                });
            })();

            _eventBind();
            _isDrew = true;
        };

        /**
         * 事件绑定
         */
        var _eventBind = function (onlyCoverClose) {
            //关闭按钮绑定关闭事件处理器
            if (_closeBtn.length && !onlyCoverClose) {
                _closeBtn.on('click', function (event) {
                    event.preventDefault();
                    _close();
                });
            }

            //点击蒙层，弹窗关闭事件绑定
            if (_coverClose) {
                _coverLayer.css('cursor', 'pointer').on('click', function () {
                    _close();
                });
            }
        };

        /**
         * 打开弹窗
         */
        var _open = function () {
            _coverLayer.appendTo(document.body);
            _coverLayer.show();
            _eventBind(true);
            _self.fadeIn();
            popupPlace();
            _opened && typeof _opened === 'function' && _opened();

            //弹窗位置放置
            function popupPlace() {
                var popupHgt = _self.outerHeight(),
                    winHgt = _win.height(),
                    popupWth = _self.outerWidth(),
                    winWth = _win.width();

                if (!options.top) {
                    popupHgt < winHgt ? _self.css({top: (winHgt - popupHgt) / 2}) : _self.css({top: 0});
                } else {
                    _self.css('top', options.top);
                }

                if (!options.left) {
                    popupWth < winWth ? _self.css({left: (winWth - popupWth) / 2}) : _self.css({left: 0});
                } else {
                    _self.css('left', options.left);
                }
            }
        };

        /**
         * 关闭弹窗
         */
        var _close = function () {
            _self.fadeOut(function () {
                _coverLayer.remove();
            });
            _closed && typeof _closed === 'function' && _closed();
        };

        !_isDrew ? _drew() : !1;
        return {
            open: _open,
            close: _close,
            self: _self
        }
    }
})(jQuery);