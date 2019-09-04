/**
 * Created by EVAN on 2016/11/23.
 */
/**
 * options  可选参数
 *  {
 *    backgroundStyle : "url(/img/tab-back.png) 65% 50% no-repeat"  背景图片风格
 *    height : "90"                                                      默认高度
 *    img: ["tab-1","tab-2", "tab-3"]                                    tab项图片名
 *    select                                                             tab选中项，不传或为null则为第一项
 *    param: [{                                                          tab项数据格式须为ID：name的数组
 *               "id": "1",
 *               "name": "全部订单"
 *           },
 *           {
 *              "id": "2",
 *              "name": "已完成订单"
 *           },
 *           {
 *             "id": "3",
 *             "name": "等待中订单"
 *           },
 *           {
 *              "id": "3",
 *              "name": "已取消订单"
 *           }]
 *  }
 *  callback(data) 回调函数,选中值会传给回调
 */
;(function ($) {
  var tabBar = function (defaultOptions) {

    this.tabContainer = $("<div class='tab-content'></div>");
    this.tabUl = $("<ul></ul>");
    this.tabContainer.css("background", defaultOptions.backgroundStyle);

    this.init = function (rootObj, defaultOptions, callback) {

      var data = defaultOptions.param;
      if (!$.isArray(data)) return;

      // 默认选中item
      var id = data[0].id,
        selectIndex = 0;
      if (defaultOptions.select) {
        for (var i = 0; i < data.length; i++) {
          if (data[i].id == defaultOptions.select) {
            id = data[i].id;
            selectIndex = i;
            break;
          }
        }
      }

      var length = data.length;
      for (var i = 0; i < length; i++) {
        var item = new tabItem(defaultOptions, i, selectIndex, callback);
        this.tabUl.append(item);

        // 配置项调整高度
        if (defaultOptions.height) {
          // 正常tab高度
          this.tabUl.css("height", defaultOptions.height + "px");
          this.tabUl.css("line-height", defaultOptions.height + "px");
          // 选中tab高度
          item.css("height", defaultOptions.height - 2 + "px")
        }
      }

      this.tabContainer.append(this.tabUl);
      rootObj.append(this.tabContainer);

      // 执行初始化函数
      if ($.isFunction(defaultOptions.init)) {
        defaultOptions.init(id);
      }
    }

  };

  var tabItem = function (defaultOptions, index, selectIndex, callback) {
    var data = defaultOptions.param,
      imgs = defaultOptions.img,
      select = defaultOptions.select;
    this.tabItem = $("<li class='tab-item'></li>");
    if (imgs != null && $.isArray(imgs) && imgs.length != 0) {
      this.tabItemIcon = $("<i class='tab-item-icon'></i>");
      this.tabItemIcon.css("background", "url(/img/" + imgs[index] + ".png) right no-repeat")
    } else {
      this.tabItemIcon = $("<i class='tab-item-icon-" + (index + 1) + "'></i>");
    }
    this.tabItemName = $("<span class='tab-item-name'></span>");
    this.tabItemSelect = $("<i class='tab-item-select'></i>");


    if (data.length == 3) {
      this.tabItem.addClass("tab-item-col3");
    } else if (data.length == 4) {
      this.tabItem.addClass("tab-item-col4");
    } else {

    }
    // 最后一项去除margin
    if (data.length - 1 == index) {
      this.tabItem.addClass("tab-item-remove");
    }

    this.tabItemName.append(data[index].name);
    this.tabItem.append(this.tabItemIcon);
    this.tabItem.append(this.tabItemName);
    // 处理选中item
    if (index == selectIndex) {
      this.tabItem.addClass("tab-select");
      this.tabItem.append(this.tabItemSelect);
    }

    // 悬浮
    this.tabItem.on("mousemove", function () {
      if (!$(this).hasClass("tab-move") && !$(this).hasClass("tab-select")) {
        $(this).addClass("tab-move");
        $(this).append($("<i class='tab-item-select'></i>"));

      }
    });
    // 离开
    this.tabItem.on("mouseleave", function () {
      if (!$(this).hasClass("tab-select")) {
        $(this).removeClass("tab-move");
        $(this).find("i.tab-item-select").remove();
      }
    });
    // 点击
    this.tabItem.on("click", function (event) {
      if (!$(this).hasClass("tab-select")) {
        $(this).parent().find("li.tab-select i.tab-item-select").remove();
        $(this).parent().find("li.tab-select").removeClass("tab-select");
        $(this).addClass("tab-select");
        $(this).removeClass("tab-move");
      }

      // 存在回调函数调用并传值
      if ($.isFunction(callback)) {
        callback(data[index], Array.prototype.slice.call(arguments).slice(1));
      }
    });

    return this.tabItem;
  };

  $.fn.tabBar = function (options, callback) {
    var defaultOptions = {
      backgroundStyle: "url(/img/tab-back.png) 65% 50% no-repeat",
      height: "90"
    };

    $.extend(defaultOptions, options);

    var that = this;

    new tabBar(defaultOptions).init(that, defaultOptions, callback);
  }
})(jQuery);