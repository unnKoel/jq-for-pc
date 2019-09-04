/**
 * Created by common on 2016/11/24.
 */
;(function ($) {
  $.extend({
    /**
     * 成功结果弹窗
     * @param msg  string   提示消息   非必传
     * @param func fucntion 确认按钮click事件方法  非必传
     * @param id   string   弹窗Id  非必传
     */
    popupSuccess: function (msg, func, id) {
      $.popupSem3({
        id: id || 'popupSuccess',
        title: '成功消息提示',
        img: '/img/smile.png',
        msg: msg,
        buttons: [{
          className: 'btn-main sure',
          name: '确认', func: function (popup) {
            if (func && typeof func === 'function') {  //如果提供了func方法，则调用它，否则执行默认行为-关闭弹窗
              func(popup);
            } else {
              popup.close();
            }
          }
        }]
      });
    }
  });
})(jQuery);