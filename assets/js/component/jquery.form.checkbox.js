/**
 * Created by common on 2016/11/21.
 *
 */
;(function ($) {
    /**
     * 自定义checkbox
     *
     * options  可选参数，不同尺寸checkbox的配置参数
     *  {
   *   'nromal':[    //默认大小checkbox设置
   *     '/img/cb-normal.png',   //unchecked 背景图
   *     '/img/cb-normal-checked.png',  //checked 背景图
   *     '14px'  //checkbox ui大小
   *    ]
   *  }
     */
    $.extend({
        customCheckbox: function (options) {
            var localOptions = $.extend({
                'normal': ['/img/cb-normal.png', '/img/cb-normal-checked.png', '14px'],
                'size-x': ['/img/cb-x.png', '/img/cb-x-checked.png', '16px'],
                'service-x': ['/img/cb-normal-servicex.png', '/img/cb-servicex-checked.png', '16px']
            }, options);

            //重绘checkbox
            (function () {
                $('input[type=checkbox]').each(function () {
                    var $checkbox = $(this);
                    var hasClasses = $checkbox[0].className ? $checkbox[0].className.split(' ') : [],
                        whichSize;
                    for (var i = 0; i < hasClasses.length; i++) {
                        var className = hasClasses[i];
                        if (className in localOptions) {
                            whichSize = localOptions[className];
                            break;
                        }
                    }

                    whichSize = !whichSize ? ['/img/cb-normal.png', '/img/cb-normal-checked.png', '14px'] : whichSize;

                    var $fakeCheckbox = $('<i></i>').css({
                        display: 'inline-block',
                        width: whichSize[2],
                        height: whichSize[2],
                        background: 'url(' + whichSize[0] + ') no-repeat scroll'
                    });
                    $checkbox.wrap($('<span class="input-checkbox"></span>'));
                    $checkbox.parent()
                        .append($fakeCheckbox.on('click', function () {
                            if (!$fakeCheckbox.hasClass('checked')) {
                                $checkbox.prop('checked', true);
                            } else {
                                $checkbox.prop('checked', false);
                            }
                        }));

                    //监听checkbox表单元素change事件
                    $checkbox.on('change', function () {
                        if (!$fakeCheckbox.length) return;
                        if ($(this).prop('checked')) {
                            $fakeCheckbox.css('background', 'url(' + whichSize[1] + ') no-repeat scroll');
                            $fakeCheckbox.addClass('checked');
                        } else {
                            $fakeCheckbox.css('background', 'url(' + whichSize[0] + ') no-repeat scroll');
                            $fakeCheckbox.removeClass('checked');
                        }
                    })
                });
            })();
        }
    });

    $.fn.extend({
        /***
         * 自定义checkbox
         */
        customCheckbox: function (options) {
            var localOptions = $.extend({
                'normal': ['/img/cb-normal.png', '/img/cb-normal-checked.png', '14px'],
                'size-x': ['/img/cb-x.png', '/img/cb-x-checked.png', '16px'],
                'service-x': ['/img/cb-normal-servicex.png', '/img/cb-servicex-checked.png', '16px']
            }, options);
            var that = this;
            //重绘checkbox
            (function () {
                $(that).each(function () {
                    var $checkbox = $(this);
                    var hasClasses = $checkbox[0].className ? $checkbox[0].className.split(' ') : [],
                        whichSize;
                    for (var i = 0; i < hasClasses.length; i++) {
                        var className = hasClasses[i];
                        if (className in localOptions) {
                            whichSize = localOptions[className];
                            break;
                        }
                    }

                    whichSize = !whichSize ? ['/img/cb-normal.png', '/img/cb-normal-checked.png', '14px'] : whichSize;

                    var $fakeCheckbox = $('<i></i>').css({
                        display: 'inline-block',
                        width: whichSize[2],
                        height: whichSize[2],
                        background: 'url(' + whichSize[0] + ') no-repeat scroll'
                    });
                    $checkbox.wrap($('<span class="input-checkbox"></span>'));
                    $checkbox.parent()
                        .append($fakeCheckbox.on('click', function () {
                            if (!$fakeCheckbox.hasClass('checked')) {
                                $checkbox.prop('checked', true);
                            } else {
                                $checkbox.prop('checked', false);
                            }
                        }));

                    //监听checkbox表单元素change事件
                    $checkbox.on('change', function () {
                        if (!$fakeCheckbox.length) return;
                        if ($(this).prop('checked')) {
                            $fakeCheckbox.css('background', 'url(' + whichSize[1] + ') no-repeat scroll');
                            $fakeCheckbox.addClass('checked');
                        } else {
                            $fakeCheckbox.css('background', 'url(' + whichSize[0] + ') no-repeat scroll');
                            $fakeCheckbox.removeClass('checked');
                        }
                    })
                });
            })();
        }
    });

    var _prop = $.fn.prop;    //备份jquery prop方法

    $.fn.extend({
        prop: function (name, value) {
            if (value !== undefined) {
                _prop.apply(this, [name, value]);
            } else {
                return _prop.apply(this, [name]);
            }
            //如果是checkbox元素，则触发它的change事件
            if (this.is('input[type=checkbox]') && value !== undefined) {
                this.trigger('change');
            }
            return this;
        }
    });
    // $.customCheckbox();
})(jQuery);