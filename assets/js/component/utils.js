/**
 * Created by common on 2016/11/24.
 */
;(function ($) {
  Array.prototype.indexOf = function (obj, start, key) {
    for (var i = (start || 0), j = this.length; i < j; i++) {
      if (key) {
        if (this[i][key] === obj[key]) {
          return i;
        }
      } else {
        if (this[i] === obj) {
          return i;
        }
      }
    }
    return -1;
  };
  /**
   * 新打开窗口
   * @param url 链接地址
   * @param id
   */
  $.newWin = function (url, id) {
    // var winA = $('#' + id);
    // if (!winA.length) {
    //     winA = $('<a></a>');
    //     winA.attr('href', url);
    //     winA.attr('target', '_blank');
    //     winA.attr('id', id);
    //     winA.append('<span></span>');
    //     $('body').append(winA);
    // } else {
    //     winA.attr('href', url);
    // }
    // winA.find('span').trigger('click');
    window.open(url, '_blank');
  };

  /**
   *  获取url上的参数
   * @param name
   * @returns {null}
   */
  $.getUrlParam = function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
  };

  /**
   *  组织事件冒泡
   * @param event
   */
  $.stopEvent = function (event) {
    if (event && event.stopPropagation) {
      // this code is for Mozilla and Opera
      event.stopPropagation();
    } else {
      // this code is for IE
      event.cancelBubble = true;
    }
  };

  /**
   * IE检查
   * $.isIE("9","lte"); 支持lte,gte
   * @param version
   * @param comparison
   */
  $.isIE = function (version, comparison) {
    var cc = 'IE',
      b = document.createElement('B'),
      docElem = document.documentElement,
      isIE;

    if (version) {
      cc += ' ' + version;
      if (comparison) {
        cc = comparison + ' ' + cc;
      }
    }

    b.innerHTML = '<!--[if ' + cc + ']><b id="iecctest"></b><![endif]-->';
    docElem.appendChild(b);
    isIE = !!document.getElementById('iecctest');
    docElem.removeChild(b);
    return isIE;
  };

  $.debounce = function debounce(fn, delay) {

    // 定时器，用来 setTimeout
    var timer;

    // 返回一个函数，这个函数会在一个时间区间结束后的 delay 毫秒时执行 fn 函数
    return function () {

      // 保存函数调用时的上下文和参数，传递给 fn
      var context = this;
      var args = arguments;

      // 每次这个返回的函数被调用，就清除定时器，以保证不执行 fn
      clearTimeout(timer);

      // 当返回的函数被最后一次调用后（也就是用户停止了某个连续的操作），
      // 再过 delay 毫秒就执行 fn
      timer = setTimeout(function () {
        fn.apply(context, args)
      }, delay)
    }
  };
})(jQuery);