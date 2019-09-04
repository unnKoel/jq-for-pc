/**
 * Created by common on 2016/11/24.
 */
;(function ($) {
  $.extend({
    /**
     * 即派语义3弹窗
     * @param semanticValues
     *        {
     *          id      string  弹窗Id  必传
     *          title   string  标题
     *          img     string  提示图片
     *          msg     string  提示文字
     *          buttons array[semanticValuesect]  按钮组
     *          [
     *           {
     *            name    string   按钮名称
     *            className   string   按钮类名
     *            func    fucntion 按钮点击行为
     *           }
     *          ]
     *        }
     */
    popupSem3: function (semanticValues) {
      semanticValues = semanticValues || {};
      if (!semanticValues.id) {
        return;
      }
      var $body = $(document.body),
        $popup = $body.find('#' + semanticValues.id),
        popup;
      if (!$popup.length) {
        $popup = $('<div class="popup-global popup-sem3">\
          <div class="header">\
            <h2>成功消息提示</h2>\
            <a class="close"></a>\
          </div>\
          <div class="content">\
            <div class="wrap">\
              <div class="img">\
              </div>\
              <p>预约成功！我们将在3日内给您反馈，请耐心等待！</p>\
            </div>\
          </div>\
          <div class="footer">\
          </div>\
          </div>');
        $popup.attr('id', semanticValues.id);
        $body.append($popup);
        popup = $popup.popup({coverClose: true, top: '25%'});  //生成弹窗
      } else {
        popup = $('#' + semanticValues.id).popup({coverClose: true, top: '25%'});  //生成弹窗
      }
      //附上弹窗数据
      $popup.find('h2').text(semanticValues.title || '');
      if (semanticValues.img) {
        $popup.find('.img').html('<img src="' + semanticValues.img + '">');
      } else {
        $popup.find('.img').html('');
      }
      $popup.find('p').text(semanticValues.msg || '');
      //弹窗页脚，按钮处理
      var $footer = $popup.find('.footer'),
        buttons = semanticValues.buttons || [];
      $footer.empty();
      for (var i = 0; i < buttons.length; i++) {
        var button = buttons[i];
        renderButton(button);
      }

      //渲染按钮
      function renderButton(button) {
        var func = button.func,
          $button = $('<a class="btn"></a>');
        $button.text(button.name || '');
        $button.addClass(button.className || '');
        $footer.append($button);
        func && typeof func === 'function' && $button.on('click', function () {
          func(popup);
        });
      }

      popup.open();
    }
  });
})(jQuery);