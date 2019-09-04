/**
 * Created by common on 2016/12/8.
 */
;(function ($) {
    $.fn.extend({
        /***
         * 自定义button
         */
        button: function (options) {
            options = options || {};
            var eventIndex = options.eventIndex || 0,
                eventType = options.eventType || 'click';
            var that = this,
                eventHandler;

            that.disable = function () {
                eventHandler = $._data(that[0], "events")[eventType][eventIndex];
                $._data(that[0], "events")[eventType][eventIndex] = undefined;
                that.addClass('btn-processing');
            };

            that.enable = function () {
                $._data(that[0], "events")[eventType][eventIndex] = eventHandler;
                that.removeClass('btn-processing');
            };

            return that;
        }
    });
})(jQuery);