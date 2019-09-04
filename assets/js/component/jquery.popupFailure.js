/**
 * Created by common on 2016/11/24.
 */
;(function ($) {
  $.extend({
    /**
     * 失败结果弹窗
     *  可自定义一个按钮
     * @param msg  string 失败消息
     * @param button object 自定义按钮设置
     *        {
     *          name  string  按钮名称
     *          className  string  类名(多个类名以空格隔开)
     *          func    function  按钮click事件处理器
     *        }
     * @param id  string  弹窗Id
     */
    popupFailure: function (msg, button, id) {
      // var buttons = [{
      //   className: 'btn-hollow cancel',
      //   name: '取消', func: function (popup) {
      //     popup.close();
      //   }
      // }];
      var buttons =[];

      button && $.isPlainObject(button) && buttons.push(button);
      $.popupSem3({
        id: id || 'popupFailure',
        title: '失败消息提示',
        img: '/img/sad.png',
        msg: msg,
        buttons: buttons
      });
    }
  });
})(jQuery);