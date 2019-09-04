/**
 * Created by common on 2016/11/22.
 */
;(function ($) {
  /**
   *
   * @param that
   * @param opts
   *      placeholder 文本框提示
   *      inputStyle 文本框样式
   *      toggleBackground 按钮背景
   *      options  所有选项数组
   *       [
   *        {value:'' //选项值
   *         text:''  //选择名称
   *        }
   *       ]
   *      callback 选择某个选项后的回调
   *
   * @returns {{drew: Function}}
   */
  var Dropdown = function (that, opts) {
    var _self = $(that),
      _$triggle,
      _$menu,
      _$input,
      _$holder,
      inputTxtIndent;
    var _domDrew = function () {
      var $downList = $('<div class="down-list"></div>').css({'position': 'relative'});
      _$input = $('<input type="text" readonly>').attr('placeholder', opts.placeholder);
      _$input.css(opts.inputStyle);
      $downList.append(_$input);
      _self.append($downList);

      var inputInnerH = _$input.innerHeight(),
        inputW = _$input.width(),
        inputBorderW = _$input[0].clientLeft,
        inputOuterH = _$input.outerHeight(),
        inputBg = _$input.css('background-color'),
        inputBorder = _$input.css('border');
      inputTxtIndent = parseFloat(_$input.css('padding-left')) + parseFloat(_$input.css('text-indent'));
      $downList.width(_$input.outerWidth(true));
      _$triggle = $('<a class="triggle"></a>').css({
        position: 'absolute',
        cursor: 'pointer',
        top: inputBorderW + 'px',
        right: inputBorderW + 'px',
        background: opts.toggleBackground.indexOf('#') === -1 ? 'url("+' + opts.toggleBackground + '+")' : opts.toggleBackground,
        width: inputInnerH,
        height: inputInnerH,
        zIndex: 1000
      });

      _$menu = $('<ul class="menu"></ul>').css({
        position: 'absolute',
        left: 0,
        top: inputOuterH - 2 + 'px',
        border: inputBorder,
        borderTop: 'none',
        backgroundColor: inputBg,
        display: 'none'
      });

      if (!opts.options) return;
      var lis = opts.options;
      $.each(lis, function (index, obj) {
        var $optLi = $('<li></li>').data('value', obj.value).text(obj.text).css({
          width: _$input.width() + parseFloat(_$input.css('padding-left')) + parseFloat(_$input.css('padding-right')),
          textIndent: inputTxtIndent + 'px',
          'padding-bottom': '5px',
          cursor: 'pointer'
        }).on('mouseover', function () {
          $(this).css({
            'background-color': '#e2f3fc'
          })
        }).on('mouseout', function () {
          $(this).css({
            'background-color': '#fff'
          })
        });
        obj.defaulted ? _$input.attr('data-value', obj.value).val(obj.text) : !1;
        _$menu.append($optLi);
      });
      $downList.append(_$triggle, _$menu);
    };

    var _iePlaceHolder = function () {
      var isIE = !-[, 1];
      if (isIE && document.documentMode <= 9) {
        _$input.filter(function () {
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
          _$holder = $('<span></span>').text(txt).css({
            position: 'absolute',
            left: parseInt(pos.left) + 8 + 'px',
            top: '0',
            height: h + 'px',
            'line-height': h + 'px',
            'font-size': '14px',
            //'font-family': "宋体",
            color: '#757575',
            zIndex: '2'
          }).appendTo(self.parent());
        });
      }
    };

    var _menuDown = function () {
      _$input.css('borderBottom', 'none');  //去除input的下边边框
      _$triggle.toggleClass('down');
      _$menu.css('display', 'block');
    };

    var _menuUp = function () {
      _$input.css('borderBottom', opts.inputStyle.border);  //去除input的下边边框
      _$triggle.toggleClass('down');
      _$menu.css('display', 'none');
    };

    var _isMenuDown = function () {
      return _$triggle.hasClass('down');
    };

    var _menuItemSelect = function () {
      //选择某个选项
      _$menu.on('click', 'li', function () {
        _menuUp();
        var value = $(this).data('value');
        _$input.attr('data-value', value);
        _$input.val($(this).text());
        if (!-[, 1] && document.documentMode <= 9) {
          _$holder && _$holder.hide();
        }
        opts.callback && typeof opts.callback === 'function' && opts.callback({
          value: value,
          text: $(this).text()
        });
      });
    };

    var _menuSelect = function () {
      //点击下拉按钮
      _$triggle.on('click', function () {
        if (!_isMenuDown()) {
          _menuDown();
        } else {
          _menuUp();
        }
      });

      //点击非控件区域，收起下拉框
      $(document).click(function (event) {
        event = event || window.event;
        var it = $(event.target);
        if (!it.parentsUntil(document.body, '.' + _self.attr('class')).length) {
          if (_isMenuDown()) {
            _menuUp();
          }
        }
      })
    };

    return {
      drew: function () {
        _domDrew();
        _menuItemSelect();
        _menuSelect();
        _iePlaceHolder();
      },

      addOption: function (options, prepend) {
        if (!options) return;
        var lis = options;
        $.each(lis, function (index, obj) {
          var $optLi = $('<li></li>').data('value', obj.value).text(obj.text).css({
            width: _$input.width() + parseFloat(_$input.css('padding-left')) + parseFloat(_$input.css('padding-right')),
            textIndent: inputTxtIndent + 'px',
            'padding-bottom': '5px',
            cursor: 'pointer'
          }).on('mouseover', function () {
            $(this).css({
              'background-color': '#e2f3fc'
            })
          }).on('mouseout', function () {
            $(this).css({
              'background-color': '#fff'
            })
          });
          obj.defaulted ? _$input.attr('data-value', obj.value).val(obj.text) : !1;
          if (prepend === 'prepend') {
            _$menu.prepend($optLi);
          } else {
            _$menu.append($optLi);
          }
        });
      },

      removeOption: function (index) {
        index = index || 0;
        $(_$menu.find('li')[index]).remove();
      }
    }
  };

  $.fn.dropdown = function (options) {
    options = $.extend({
      placeholder: '',
      inputStyle: {
        'height': '26px',
        'line-height': '26px',
        'border': '1px solid #ccc',
        'background-color': '#fff',
        'border-radius': 0,
        'padding': '0 5px'
      },
      toggleBackground: '#32a4e5',
      options: []
    }, options ? options : {});
    var dropDown = Dropdown(this, options);
    dropDown.drew();
    return dropDown;
  }
})(jQuery);