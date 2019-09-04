/**
 * Created by common on 2016/11/18.
 */
;(function ($) {

  $.page({needLogin: false})
    .load(function () {
      //下拉选择
      $('.dropdown').dropdown({
        placeholder: '性别',
        options: [{value: 1, text: '男'}, {value: 2, text: '女'}]  //下拉选项
      });

      //分页
      $('.paging').createPage({
        pageCount: 20,   //总页数
        current: 7,       //当前页
        clickFn: function (currentPage) {  //点击页码回调函数
          console.log('currentPage :' + currentPage);
        }
      }).paging();

      //加载
      $('.loading').loading().show();
      // 导航条
      var navData = {
        "worktimelist": ["1-3年", "3-5年", "5-8年"],
        "educationlist": ["大专以下", "大专", "本科", "本科以上"],
        "citylist": [
          {
            "id": "3833",
            "name": "北京",
            "type": "2"
          },
          {
            "id": "3909",
            "name": "上海",
            "type": "2"
          },
          {
            "id": "2099",
            "name": "深圳",
            "type": "2"
          }
        ],
        "positionlist": [
          {
            "id": "57",
            "name": "秘书"
          },
          {
            "id": "65",
            "name": "前台"
          },
          {
            "id": "81",
            "name": "部门行政"
          }
        ],
        "otherlist": ["即约即面", "已经离职", "英语优秀", "沟通优秀"]
      };

      var navParam = {};
      navParam.positionlist = {"title": "职位筛选", "data": navData.positionlist};
      navParam.citylist = {"title": "工作地点", "data": navData.citylist};
      navParam.worktimelist = {"title": "工作年限", "data": navData.worktimelist};
      navParam.educationlist = {"title": "教育经历", "data": navData.educationlist};
      navParam.otherlist = {"title": "其他", "data": navData.otherlist};

      $("#nav").navBar(navParam, {headerTitle: "精细筛选条件", isExpand: true}).on("navChange", function (e, data) {
        console.log(data);
      });

      var tabData = [
        {
          "position_id": "1",
          "name": "全部订单"
        },
        {
          "position_id": "2",
          "name": "已完成订单"
        },
        {
          "position_id": "3",
          "name": "等待中订单"
        },
        {
          "position_id": "3",
          "name": "已取消订单"
        }
      ];
      var tabParam = [];
      for (var tabIt in tabData) {
        var tabItem = {};
        tabItem.id = tabData[tabIt].position_id;
        tabItem.name = tabData[tabIt].name;
        tabParam.push(tabItem);
      }
      $("#tab").tabBar({
        param: tabParam,
        img: ["tab-hr", "tab-finmo", "tab-finance", "tab-finance"],
        height: 90,
        init: function () {
          //自定义checkbox
          $.customCheckbox();
        }
      }, function (data) {
        console.log(data);
      });

      $('.size-x').on('change', function () {
        console.log($(this).prop('checked'));
      });

      $('.checkbox-triggle').on('click', function () {
        $(this).toggleClass('checked').hasClass('checked') ? $('.size-x').prop('checked', true) : $('.size-x').prop('checked', false);
      });

      //弹窗调用
      var popup = $('#popup').popup({coverClose: true, top: '25%'});
      $('#trigger').on('click', function () {
        popup.open();
      });

      //语义弹窗
      $('.popup-sem3-trigger').on('click', function () {
        $.popupSem3({
          id: 'popupSem3', title: '标题', img: '', msg: '提示文字', buttons: [{
            name: '取消', func: function (popup) {
              popup.close();
            }
          }, {name: 'GOTO'}]
        });
      });
      //成功弹窗
      $('.popup-success-trigger').on('click', function () {
        $.popupSuccess("预约成功！我们将在3日内给您反馈，请耐心等待！");
      });
      //失败弹窗
      $('.popup-failure-trigger').on('click', function () {
        $.popupFailure("抱歉!您的审核还没有通过，请耐心等待！", {
          name: '去审核',
          className: 'btn-main',
          func: function (popup) {
            popup.close();
          }
        });
      });
      //登录弹窗
      $('.popup-login-trigger').on('click', function () {
        $.ajax({
          url: '/hr/cart/add',
          method: 'POST',
          data: {
            profile_id: 2
          },
          noIdentity: 1
        }).done(function (data) {
          if (data.code === 0) {
            $.popupSuccess("预约成功！我们将在3日内给您反馈，请耐心等待！");
          } else {
            $.popupFailure("抱歉!您的审核还没有通过，请耐心等待！", {
              name: '去审核',
              className: 'btn-main',
              func: function (popup) {
                popup.close();
              }
            });
          }
        });
      });

      //checkbox 组
      $('.checkbox-group').checkGroup();

      // 页面头部
      // $("#mygee-wrapper").on("mousemove", function () {
      //   // $(".account-center").removeClass("hide");
      //   var number = $("i.number").text().length;
      //   if (number == 1) {
      //     $("i.number").css("padding", "0 5px");
      //   } else if (number == 2) {
      //     $("i.number").css("padding", "3px 5px");
      //   } else if (number == 3) {
      //     $("i.number").css("padding", "7px 5px");
      //   }
      //
      //   $(".account-center").fadeIn("slow");
      // });
      // $("#mygee-wrapper").on("mouseleave", function () {
      //   $(".account-center").slideUp();
      // });

      $("#sign-wrapper").show();
      $("#mygee-wrapper").hide();

      $("#sign-wrapper").hide();
      $("#mygee-wrapper").show();


      //锚点动画
      $('a.plink').click(function (e) {      //绑定事件
        e.preventDefault();              //阻止默认事件
        var id = $(this).attr('href'),
          top = $(id).offset().top;        //获取相对于页面的位置
        $('html,body').animate({
          'scrollTop': top
        }, 3000);
      });

      //卡片悬浮
      $('.card').css('position', 'relative').on('mouseenter', function () {
        var that = $(this);
        that.animate({
          top: '-20px',
          left: '-5px'
        }, function () {
          that.css({
            'box-shadow': '0 5px 10px #f7f7f7,0 6px 25px #f5f5f5'
          });
        });
      }).on('mouseleave', function () {
        var that = $(this);
        that.animate({
          top: '0',
          left: '0'
        }, function () {
          that.css({
            'box-shadow': 'none'
          });
        });
      });
    });
})(jQuery);