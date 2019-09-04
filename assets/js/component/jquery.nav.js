/**
 * Created by EVAN on 2016/11/22.
 */
;(function($){
  $.fn.extend({
    navBar : function (data, options) {

      var defaultOptions = {
        // 是否展开
        isExpand : true,
        // 是否支持单选,默认多选---功能未提供
        isSingle : false,
        // 标题
        headerTitle : "精细筛选条件"
      };

      $.extend(defaultOptions, options);

      //移除数组中指定的项
      function removeItemByArray(array, value){
        var index = $.inArray(value, array);
        array.splice(index, 1);
        return array.join(",");
      }

      // 组件模板
      var navMain = $("<div class='nav-main'></div>"),
        header = $("<div class='nav-header'>" +
          "<p>" + defaultOptions.headerTitle + "</p>" +
          "<i class='icon-condition'></i>" +
          "<div class='bottom-hr'></div>" +
          "</div>"),
        content = $("<div class='nav-content'></div>"),
        specialCondTem = $("<ul class='special-price'>" +
          "<li class='nav-cond-title'>预算上限<i class='icon-arrow'></i></li>" +
          "<li class='nav-cond clearfix'><input type='text' class='price-limit' placeholder='请输入'><a>提交</a></li>" +
          "</ul>");

      // 返回值
      var result = {};


      for (var condList in data) {
        var list = data[condList];
        result[condList] = [];
        var contentUl = $("<ul ></ul>"),
          contentReset = $("<li class='cond-reset'><a>重置</a></li>");

        //
        (function (result, condList, contentUl, contentReset) {
          // title
          var contentTitle = $("<li class='nav-cond-title'></li>"),
            titleArrow = $("<i class='icon-arrow'></i>");
          contentTitle.append(list.title);
          contentTitle.append(titleArrow);
          contentUl.on("click", "li.nav-cond-title", function () {
            var isSelect = titleArrow.toggleClass("icon-collapse").hasClass("icon-collapse");
            // 选中隐藏
            if (isSelect) {
              contentUl.find("li.nav-cond,li.cond-reset").hide();
            } else {
              contentUl.find("li.nav-cond,li.cond-reset").show();
            }
          });
          contentUl.append(contentTitle);


          $.each(list.data, function (index, itemValue) {
            var contentLi = $("<li class='nav-cond'></li>"),
              condCheck = $("<input type='checkbox' class='size-x'>");

            if ($.isPlainObject(itemValue)) {
              if (condList == "citylist") {
                contentLi.key = itemValue.name;
                contentLi.value = itemValue.name;
              } else {
                contentLi.key = itemValue.id;
                contentLi.value = itemValue.name;
              }
            } else {
              contentLi.key = itemValue;
              contentLi.value = itemValue;
            }

            // checkbox事件
            condCheck.on("change",function () {

              // 在这里添加单选的相关逻辑，暂时不做

              // push数组
              var condCheckStatus = condCheck.prop("checked");
              // ($.inArray(contentLi.key, result[condList]) == -1)

              if (condCheckStatus) {
                result[condList].push(contentLi.key);
              } else {
                removeItemByArray(result[condList], contentLi.key);
              }
              condCheck.trigger("navChange", result);
            });

            contentLi.append(condCheck);
            contentLi.append($("<span class='info'>" + contentLi.value + "</span>"));
            contentUl.append(contentLi);
          });
          // 重置事件
          contentReset.on("click", function () {
            result[condList] = [];
            contentUl.find("input[type=checkbox]").each(function () {
              $(this).prop("checked",false);
            })
          });

          contentUl.append(contentReset);

          // 默认不展开
          if (!defaultOptions.isExpand) {
            titleArrow.toggleClass("icon-collapse");
            contentUl.find("li.nav-cond,li.cond-reset").hide();
          }
        })(result, condList, contentUl, contentReset);


        content.append(contentUl);
      }

      specialCondTem.on("click", "li.nav-cond-title", function () {
        var isSelect = specialCondTem.find("i.icon-arrow").toggleClass("icon-collapse").hasClass("icon-collapse");
        // 选中隐藏
        if (isSelect) {
          specialCondTem.find("li.nav-cond,li.cond-reset").hide();
        } else {
          specialCondTem.find("li.nav-cond,li.cond-reset").show();
        }
      });
      // 预算上限输入，限数字和小数点
      specialCondTem.find(".price-limit").keydown(function (e) {
        var key = e.keyCode,
          value = $(".price-limit").val();
        if ((key > 95 && key < 106) ||                  //小键盘上的0到9
          (key > 47 && key < 60) ||                   //大键盘上的0到9
          (key == 110 && value.indexOf(".") < 0) ||   //小键盘上的.而且以前没有输入.
          (key == 190 && value.indexOf(".") < 0) ||   //大键盘上的.而且以前没有输入.
          key == 8 || key == 9 || key == 46 || key == 37 || key == 39     //不影响正常编辑键的使用(8:BackSpace;9:Tab;46:Delete;37:Left;39:Right)
        ) {
        } else {
          e.preventDefault();
        }
      }).change(function(){
        // if ($(this).val() == "" && $(".price-limit").next("a").text() == "重新提交") {
        //   $(".price-limit").next("a").text("提交");
        //   result.priceLimit = "";
          // $(this).trigger("navChange", result);
        // }
      })
      // 预算上限提交
      specialCondTem.find("a").click(function (e) {
        var textStatus = $(this).text();
        var price = $(".price-limit");
        var parseprice = price.val();
        if (parseInt(price.val(), 10) > 999999) {
          parseprice = "999999"
        }

        if (textStatus == "提交") {
          if (price.val() == null || price.val() == "") {
            return false;
          }
          $(this).text("重新提交");
          result.priceLimit = parseprice;
        } else {
          // $(this).text("提交");
          if (parseprice == "") {
             $(this).text("提交");
          }
          result.priceLimit = parseprice;
        }
        $(this).trigger("navChange", result);
      });
      if (!defaultOptions.isExpand) {
        specialCondTem.find("i.icon-arrow").toggleClass("icon-collapse");
        specialCondTem.find("li.nav-cond,li.cond-reset").hide();
      }
      content.append(specialCondTem);

      navMain.append(header).append(content);

      this.append(navMain);

      // 执行初始化函数
      if ($.isFunction(defaultOptions.init)) {
        defaultOptions.init();
      }

      return this;
    }
  });
}(jQuery));