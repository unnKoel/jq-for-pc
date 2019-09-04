function tplOrderList(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (orders, undefined) {
// iterate orders
;(function(){
  var $$obj = orders;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var order = $$obj[$index];

if ( order.type === 1)
{
buf.push("<div class=\"item\"><h2 class=\"title\"><span class=\"time\">" + (jade.escape((jade_interp = order.add_time) == null ? '' : jade_interp)) + "</span><span class=\"num\"><span>订单号 :</span><em>" + (jade.escape((jade_interp = order.number) == null ? '' : jade_interp)) + "</em></span></h2><div class=\"content clearfix\"><div class=\"pull-left profiles\"><ul>");
// iterate order.profile_list
;(function(){
  var $$obj = order.profile_list;
  if ('number' == typeof $$obj.length) {

    for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
      var profile = $$obj[index];

buf.push("<li" + (jade.attr("data-pid", '' + (profile.profile_id) + '', true, false)) + "><div class=\"wrap\">");
if ((index !== order.profile_list.length - 1))
{
buf.push("<div class=\"profile clearfix\"><div class=\"pull-left\"><div class=\"portrait\"><div class=\"frame\">");
if ( profile.sex === '男')
{
buf.push("<img" + (jade.attr("src", '' + (profile.pic || "/img/candidate_man.png") + '', true, false)) + "/>");
}
else
{
buf.push("<img" + (jade.attr("src", '' + (profile.pic || "/img/candidate_woman.png") + '', true, false)) + "/>");
}
if ( profile.is_right)
{
buf.push("<i class=\"icon icon-ji\"></i>");
}
buf.push("</div></div></div><div class=\"pull-right\"><div class=\"row-1\"><span>" + (jade.escape((jade_interp = profile.profile_name) == null ? '' : jade_interp)) + "</span></div><div class=\"row-2\"><span class=\"something\"><span class=\"sex\">" + (jade.escape((jade_interp = profile.sex) == null ? '' : jade_interp)) + " |</span><span class=\"age\">" + (jade.escape((jade_interp = profile.age) == null ? '' : jade_interp)) + " |</span><span class=\"edu\">" + (jade.escape((jade_interp = profile.education) == null ? '' : jade_interp)) + " |</span><span class=\"address\">" + (jade.escape((jade_interp = profile.city) == null ? '' : jade_interp)) + " |</span><span class=\"year\">" + (jade.escape((jade_interp = profile.worktime) == null ? '' : jade_interp)) + "年经验</span></span><span class=\"functions word-omit\">" + (jade.escape((jade_interp = profile.position_name) == null ? '' : jade_interp)) + "</span><span class=\"money\"></span><span class=\"status\"><b>" + (jade.escape((jade_interp = order.message) == null ? '' : jade_interp)) + "</b></span></div><div class=\"row-3\"><span class=\"remark clearfix\"><span class=\"title pull-left\">期望薪资</span><em class=\"pull-left word-omit\">￥" + (jade.escape((jade_interp = profile.expect_salary) == null ? '' : jade_interp)) + "</em></span></div></div></div>");
}
else
{
buf.push("<div class=\"profile clearfix no-border\"><div class=\"pull-left\"><div class=\"portrait\"><div class=\"frame\">");
if ( profile.sex === '男')
{
buf.push("<img" + (jade.attr("src", '' + (profile.pic || "/img/candidate_man.png") + '', true, false)) + "/>");
}
else
{
buf.push("<img" + (jade.attr("src", '' + (profile.pic || "/img/candidate_woman.png") + '', true, false)) + "/>");
}
if ( profile.is_right)
{
buf.push("<i class=\"icon icon-ji\"></i>");
}
buf.push("</div></div></div><div class=\"pull-right\"><div class=\"row-1\"><span>" + (jade.escape((jade_interp = profile.profile_name) == null ? '' : jade_interp)) + "</span></div><div class=\"row-2\"><span class=\"something\"><span class=\"sex\">" + (jade.escape((jade_interp = profile.sex) == null ? '' : jade_interp)) + " |</span><span class=\"age\">" + (jade.escape((jade_interp = profile.age) == null ? '' : jade_interp)) + " |</span><span class=\"edu\">" + (jade.escape((jade_interp = profile.education) == null ? '' : jade_interp)) + " |</span><span class=\"address\">" + (jade.escape((jade_interp = profile.city) == null ? '' : jade_interp)) + " |</span><span class=\"year\">" + (jade.escape((jade_interp = profile.worktime) == null ? '' : jade_interp)) + "年经验</span></span><span class=\"functions word-omit\">" + (jade.escape((jade_interp = profile.position_name) == null ? '' : jade_interp)) + "</span><span class=\"money\"></span><span class=\"status\"><b>" + (jade.escape((jade_interp = order.message) == null ? '' : jade_interp)) + "</b></span></div><div class=\"row-3\"><span class=\"remark clearfix\"><span class=\"title pull-left\">期望薪资</span><em class=\"pull-left word-omit\">￥" + (jade.escape((jade_interp = profile.expect_salary) == null ? '' : jade_interp)) + "</em></span></div></div></div>");
}
buf.push("</div></li>");
    }

  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;      var profile = $$obj[index];

buf.push("<li" + (jade.attr("data-pid", '' + (profile.profile_id) + '', true, false)) + "><div class=\"wrap\">");
if ((index !== order.profile_list.length - 1))
{
buf.push("<div class=\"profile clearfix\"><div class=\"pull-left\"><div class=\"portrait\"><div class=\"frame\">");
if ( profile.sex === '男')
{
buf.push("<img" + (jade.attr("src", '' + (profile.pic || "/img/candidate_man.png") + '', true, false)) + "/>");
}
else
{
buf.push("<img" + (jade.attr("src", '' + (profile.pic || "/img/candidate_woman.png") + '', true, false)) + "/>");
}
if ( profile.is_right)
{
buf.push("<i class=\"icon icon-ji\"></i>");
}
buf.push("</div></div></div><div class=\"pull-right\"><div class=\"row-1\"><span>" + (jade.escape((jade_interp = profile.profile_name) == null ? '' : jade_interp)) + "</span></div><div class=\"row-2\"><span class=\"something\"><span class=\"sex\">" + (jade.escape((jade_interp = profile.sex) == null ? '' : jade_interp)) + " |</span><span class=\"age\">" + (jade.escape((jade_interp = profile.age) == null ? '' : jade_interp)) + " |</span><span class=\"edu\">" + (jade.escape((jade_interp = profile.education) == null ? '' : jade_interp)) + " |</span><span class=\"address\">" + (jade.escape((jade_interp = profile.city) == null ? '' : jade_interp)) + " |</span><span class=\"year\">" + (jade.escape((jade_interp = profile.worktime) == null ? '' : jade_interp)) + "年经验</span></span><span class=\"functions word-omit\">" + (jade.escape((jade_interp = profile.position_name) == null ? '' : jade_interp)) + "</span><span class=\"money\"></span><span class=\"status\"><b>" + (jade.escape((jade_interp = order.message) == null ? '' : jade_interp)) + "</b></span></div><div class=\"row-3\"><span class=\"remark clearfix\"><span class=\"title pull-left\">期望薪资</span><em class=\"pull-left word-omit\">￥" + (jade.escape((jade_interp = profile.expect_salary) == null ? '' : jade_interp)) + "</em></span></div></div></div>");
}
else
{
buf.push("<div class=\"profile clearfix no-border\"><div class=\"pull-left\"><div class=\"portrait\"><div class=\"frame\">");
if ( profile.sex === '男')
{
buf.push("<img" + (jade.attr("src", '' + (profile.pic || "/img/candidate_man.png") + '', true, false)) + "/>");
}
else
{
buf.push("<img" + (jade.attr("src", '' + (profile.pic || "/img/candidate_woman.png") + '', true, false)) + "/>");
}
if ( profile.is_right)
{
buf.push("<i class=\"icon icon-ji\"></i>");
}
buf.push("</div></div></div><div class=\"pull-right\"><div class=\"row-1\"><span>" + (jade.escape((jade_interp = profile.profile_name) == null ? '' : jade_interp)) + "</span></div><div class=\"row-2\"><span class=\"something\"><span class=\"sex\">" + (jade.escape((jade_interp = profile.sex) == null ? '' : jade_interp)) + " |</span><span class=\"age\">" + (jade.escape((jade_interp = profile.age) == null ? '' : jade_interp)) + " |</span><span class=\"edu\">" + (jade.escape((jade_interp = profile.education) == null ? '' : jade_interp)) + " |</span><span class=\"address\">" + (jade.escape((jade_interp = profile.city) == null ? '' : jade_interp)) + " |</span><span class=\"year\">" + (jade.escape((jade_interp = profile.worktime) == null ? '' : jade_interp)) + "年经验</span></span><span class=\"functions word-omit\">" + (jade.escape((jade_interp = profile.position_name) == null ? '' : jade_interp)) + "</span><span class=\"money\"></span><span class=\"status\"><b>" + (jade.escape((jade_interp = order.message) == null ? '' : jade_interp)) + "</b></span></div><div class=\"row-3\"><span class=\"remark clearfix\"><span class=\"title pull-left\">期望薪资</span><em class=\"pull-left word-omit\">￥" + (jade.escape((jade_interp = profile.expect_salary) == null ? '' : jade_interp)) + "</em></span></div></div></div>");
}
buf.push("</div></li>");
    }

  }
}).call(this);

buf.push("</ul></div></div></div>");
}
else if ( order.type === 2)
{
buf.push("<div class=\"item wait pai\"><h2 class=\"title\"><span class=\"time\">" + (jade.escape((jade_interp = order.add_time) == null ? '' : jade_interp)) + "</span><span class=\"num\"><span>订单号 :</span><em>" + (jade.escape((jade_interp = order.number) == null ? '' : jade_interp)) + "</em></span></h2><div class=\"content clearfix\"><div class=\"pull-left profiles\"><ul><li><div class=\"wrap\"><div class=\"profile clearfix\"><div class=\"pull-left\"><div class=\"portrait\"><div class=\"frame\"><img src=\"/img/orders-portrait-default.png\"/></div></div></div><div class=\"pull-right\"><div class=\"row-1\"><b>派服务</b></div><div class=\"row-2\"><span class=\"something\"><b>该订单正在等待客服致电，请您耐心等待！</b></span><span class=\"status\"><b>等待客服致电</b></span></div></div></div></div></li></ul></div></div></div>");
}
else if ( order.type === 3)
{
buf.push("<div class=\"item wait offshore\"><h2 class=\"title\"><span class=\"time\">" + (jade.escape((jade_interp = order.add_time) == null ? '' : jade_interp)) + "</span><span class=\"num\"><span>订单号 :</span><em>" + (jade.escape((jade_interp = order.number) == null ? '' : jade_interp)) + "</em></span></h2><div class=\"content clearfix\"><div class=\"pull-left profiles\"><ul><li><div class=\"wrap\"><div class=\"profile clearfix\"><div class=\"pull-left\"><div class=\"portrait\"><div class=\"frame\"><img src=\"/img/orders-portrait-offshore.png\"/></div></div></div><div class=\"pull-right\"><div class=\"row-1\"><b>[离岸外包]招聘专员</b></div><div class=\"row-2 clearfix\"><div class=\"something pull-left\"><div class=\"pull-left city\"><span>所在城市 :</span><em>" + (jade.escape((jade_interp = order.profile_list.city_name) == null ? '' : jade_interp)) + "</em></div><div class=\"pull-left nums\"><span>租用数量 :</span><em>" + (jade.escape((jade_interp = order.profile_list.rent_number) == null ? '' : jade_interp)) + "人</em></div><div class=\"pull-left times\"><span>租用时长 :</span><em>" + (jade.escape((jade_interp = order.profile_list.rent_month) == null ? '' : jade_interp)) + "个月</em></div></div><div class=\"pull-left money word-omit\"><span>￥" + (jade.escape((jade_interp = order.sum_price) == null ? '' : jade_interp)) + "</span></div><div class=\"pull-left\"><b>" + (jade.escape((jade_interp = order.message) == null ? '' : jade_interp)) + "</b></div></div></div></div></div></li></ul></div></div></div>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var order = $$obj[$index];

if ( order.type === 1)
{
buf.push("<div class=\"item\"><h2 class=\"title\"><span class=\"time\">" + (jade.escape((jade_interp = order.add_time) == null ? '' : jade_interp)) + "</span><span class=\"num\"><span>订单号 :</span><em>" + (jade.escape((jade_interp = order.number) == null ? '' : jade_interp)) + "</em></span></h2><div class=\"content clearfix\"><div class=\"pull-left profiles\"><ul>");
// iterate order.profile_list
;(function(){
  var $$obj = order.profile_list;
  if ('number' == typeof $$obj.length) {

    for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
      var profile = $$obj[index];

buf.push("<li" + (jade.attr("data-pid", '' + (profile.profile_id) + '', true, false)) + "><div class=\"wrap\">");
if ((index !== order.profile_list.length - 1))
{
buf.push("<div class=\"profile clearfix\"><div class=\"pull-left\"><div class=\"portrait\"><div class=\"frame\">");
if ( profile.sex === '男')
{
buf.push("<img" + (jade.attr("src", '' + (profile.pic || "/img/candidate_man.png") + '', true, false)) + "/>");
}
else
{
buf.push("<img" + (jade.attr("src", '' + (profile.pic || "/img/candidate_woman.png") + '', true, false)) + "/>");
}
if ( profile.is_right)
{
buf.push("<i class=\"icon icon-ji\"></i>");
}
buf.push("</div></div></div><div class=\"pull-right\"><div class=\"row-1\"><span>" + (jade.escape((jade_interp = profile.profile_name) == null ? '' : jade_interp)) + "</span></div><div class=\"row-2\"><span class=\"something\"><span class=\"sex\">" + (jade.escape((jade_interp = profile.sex) == null ? '' : jade_interp)) + " |</span><span class=\"age\">" + (jade.escape((jade_interp = profile.age) == null ? '' : jade_interp)) + " |</span><span class=\"edu\">" + (jade.escape((jade_interp = profile.education) == null ? '' : jade_interp)) + " |</span><span class=\"address\">" + (jade.escape((jade_interp = profile.city) == null ? '' : jade_interp)) + " |</span><span class=\"year\">" + (jade.escape((jade_interp = profile.worktime) == null ? '' : jade_interp)) + "年经验</span></span><span class=\"functions word-omit\">" + (jade.escape((jade_interp = profile.position_name) == null ? '' : jade_interp)) + "</span><span class=\"money\"></span><span class=\"status\"><b>" + (jade.escape((jade_interp = order.message) == null ? '' : jade_interp)) + "</b></span></div><div class=\"row-3\"><span class=\"remark clearfix\"><span class=\"title pull-left\">期望薪资</span><em class=\"pull-left word-omit\">￥" + (jade.escape((jade_interp = profile.expect_salary) == null ? '' : jade_interp)) + "</em></span></div></div></div>");
}
else
{
buf.push("<div class=\"profile clearfix no-border\"><div class=\"pull-left\"><div class=\"portrait\"><div class=\"frame\">");
if ( profile.sex === '男')
{
buf.push("<img" + (jade.attr("src", '' + (profile.pic || "/img/candidate_man.png") + '', true, false)) + "/>");
}
else
{
buf.push("<img" + (jade.attr("src", '' + (profile.pic || "/img/candidate_woman.png") + '', true, false)) + "/>");
}
if ( profile.is_right)
{
buf.push("<i class=\"icon icon-ji\"></i>");
}
buf.push("</div></div></div><div class=\"pull-right\"><div class=\"row-1\"><span>" + (jade.escape((jade_interp = profile.profile_name) == null ? '' : jade_interp)) + "</span></div><div class=\"row-2\"><span class=\"something\"><span class=\"sex\">" + (jade.escape((jade_interp = profile.sex) == null ? '' : jade_interp)) + " |</span><span class=\"age\">" + (jade.escape((jade_interp = profile.age) == null ? '' : jade_interp)) + " |</span><span class=\"edu\">" + (jade.escape((jade_interp = profile.education) == null ? '' : jade_interp)) + " |</span><span class=\"address\">" + (jade.escape((jade_interp = profile.city) == null ? '' : jade_interp)) + " |</span><span class=\"year\">" + (jade.escape((jade_interp = profile.worktime) == null ? '' : jade_interp)) + "年经验</span></span><span class=\"functions word-omit\">" + (jade.escape((jade_interp = profile.position_name) == null ? '' : jade_interp)) + "</span><span class=\"money\"></span><span class=\"status\"><b>" + (jade.escape((jade_interp = order.message) == null ? '' : jade_interp)) + "</b></span></div><div class=\"row-3\"><span class=\"remark clearfix\"><span class=\"title pull-left\">期望薪资</span><em class=\"pull-left word-omit\">￥" + (jade.escape((jade_interp = profile.expect_salary) == null ? '' : jade_interp)) + "</em></span></div></div></div>");
}
buf.push("</div></li>");
    }

  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;      var profile = $$obj[index];

buf.push("<li" + (jade.attr("data-pid", '' + (profile.profile_id) + '', true, false)) + "><div class=\"wrap\">");
if ((index !== order.profile_list.length - 1))
{
buf.push("<div class=\"profile clearfix\"><div class=\"pull-left\"><div class=\"portrait\"><div class=\"frame\">");
if ( profile.sex === '男')
{
buf.push("<img" + (jade.attr("src", '' + (profile.pic || "/img/candidate_man.png") + '', true, false)) + "/>");
}
else
{
buf.push("<img" + (jade.attr("src", '' + (profile.pic || "/img/candidate_woman.png") + '', true, false)) + "/>");
}
if ( profile.is_right)
{
buf.push("<i class=\"icon icon-ji\"></i>");
}
buf.push("</div></div></div><div class=\"pull-right\"><div class=\"row-1\"><span>" + (jade.escape((jade_interp = profile.profile_name) == null ? '' : jade_interp)) + "</span></div><div class=\"row-2\"><span class=\"something\"><span class=\"sex\">" + (jade.escape((jade_interp = profile.sex) == null ? '' : jade_interp)) + " |</span><span class=\"age\">" + (jade.escape((jade_interp = profile.age) == null ? '' : jade_interp)) + " |</span><span class=\"edu\">" + (jade.escape((jade_interp = profile.education) == null ? '' : jade_interp)) + " |</span><span class=\"address\">" + (jade.escape((jade_interp = profile.city) == null ? '' : jade_interp)) + " |</span><span class=\"year\">" + (jade.escape((jade_interp = profile.worktime) == null ? '' : jade_interp)) + "年经验</span></span><span class=\"functions word-omit\">" + (jade.escape((jade_interp = profile.position_name) == null ? '' : jade_interp)) + "</span><span class=\"money\"></span><span class=\"status\"><b>" + (jade.escape((jade_interp = order.message) == null ? '' : jade_interp)) + "</b></span></div><div class=\"row-3\"><span class=\"remark clearfix\"><span class=\"title pull-left\">期望薪资</span><em class=\"pull-left word-omit\">￥" + (jade.escape((jade_interp = profile.expect_salary) == null ? '' : jade_interp)) + "</em></span></div></div></div>");
}
else
{
buf.push("<div class=\"profile clearfix no-border\"><div class=\"pull-left\"><div class=\"portrait\"><div class=\"frame\">");
if ( profile.sex === '男')
{
buf.push("<img" + (jade.attr("src", '' + (profile.pic || "/img/candidate_man.png") + '', true, false)) + "/>");
}
else
{
buf.push("<img" + (jade.attr("src", '' + (profile.pic || "/img/candidate_woman.png") + '', true, false)) + "/>");
}
if ( profile.is_right)
{
buf.push("<i class=\"icon icon-ji\"></i>");
}
buf.push("</div></div></div><div class=\"pull-right\"><div class=\"row-1\"><span>" + (jade.escape((jade_interp = profile.profile_name) == null ? '' : jade_interp)) + "</span></div><div class=\"row-2\"><span class=\"something\"><span class=\"sex\">" + (jade.escape((jade_interp = profile.sex) == null ? '' : jade_interp)) + " |</span><span class=\"age\">" + (jade.escape((jade_interp = profile.age) == null ? '' : jade_interp)) + " |</span><span class=\"edu\">" + (jade.escape((jade_interp = profile.education) == null ? '' : jade_interp)) + " |</span><span class=\"address\">" + (jade.escape((jade_interp = profile.city) == null ? '' : jade_interp)) + " |</span><span class=\"year\">" + (jade.escape((jade_interp = profile.worktime) == null ? '' : jade_interp)) + "年经验</span></span><span class=\"functions word-omit\">" + (jade.escape((jade_interp = profile.position_name) == null ? '' : jade_interp)) + "</span><span class=\"money\"></span><span class=\"status\"><b>" + (jade.escape((jade_interp = order.message) == null ? '' : jade_interp)) + "</b></span></div><div class=\"row-3\"><span class=\"remark clearfix\"><span class=\"title pull-left\">期望薪资</span><em class=\"pull-left word-omit\">￥" + (jade.escape((jade_interp = profile.expect_salary) == null ? '' : jade_interp)) + "</em></span></div></div></div>");
}
buf.push("</div></li>");
    }

  }
}).call(this);

buf.push("</ul></div></div></div>");
}
else if ( order.type === 2)
{
buf.push("<div class=\"item wait pai\"><h2 class=\"title\"><span class=\"time\">" + (jade.escape((jade_interp = order.add_time) == null ? '' : jade_interp)) + "</span><span class=\"num\"><span>订单号 :</span><em>" + (jade.escape((jade_interp = order.number) == null ? '' : jade_interp)) + "</em></span></h2><div class=\"content clearfix\"><div class=\"pull-left profiles\"><ul><li><div class=\"wrap\"><div class=\"profile clearfix\"><div class=\"pull-left\"><div class=\"portrait\"><div class=\"frame\"><img src=\"/img/orders-portrait-default.png\"/></div></div></div><div class=\"pull-right\"><div class=\"row-1\"><b>派服务</b></div><div class=\"row-2\"><span class=\"something\"><b>该订单正在等待客服致电，请您耐心等待！</b></span><span class=\"status\"><b>等待客服致电</b></span></div></div></div></div></li></ul></div></div></div>");
}
else if ( order.type === 3)
{
buf.push("<div class=\"item wait offshore\"><h2 class=\"title\"><span class=\"time\">" + (jade.escape((jade_interp = order.add_time) == null ? '' : jade_interp)) + "</span><span class=\"num\"><span>订单号 :</span><em>" + (jade.escape((jade_interp = order.number) == null ? '' : jade_interp)) + "</em></span></h2><div class=\"content clearfix\"><div class=\"pull-left profiles\"><ul><li><div class=\"wrap\"><div class=\"profile clearfix\"><div class=\"pull-left\"><div class=\"portrait\"><div class=\"frame\"><img src=\"/img/orders-portrait-offshore.png\"/></div></div></div><div class=\"pull-right\"><div class=\"row-1\"><b>[离岸外包]招聘专员</b></div><div class=\"row-2 clearfix\"><div class=\"something pull-left\"><div class=\"pull-left city\"><span>所在城市 :</span><em>" + (jade.escape((jade_interp = order.profile_list.city_name) == null ? '' : jade_interp)) + "</em></div><div class=\"pull-left nums\"><span>租用数量 :</span><em>" + (jade.escape((jade_interp = order.profile_list.rent_number) == null ? '' : jade_interp)) + "人</em></div><div class=\"pull-left times\"><span>租用时长 :</span><em>" + (jade.escape((jade_interp = order.profile_list.rent_month) == null ? '' : jade_interp)) + "个月</em></div></div><div class=\"pull-left money word-omit\"><span>￥" + (jade.escape((jade_interp = order.sum_price) == null ? '' : jade_interp)) + "</span></div><div class=\"pull-left\"><b>" + (jade.escape((jade_interp = order.message) == null ? '' : jade_interp)) + "</b></div></div></div></div></div></li></ul></div></div></div>");
}
    }

  }
}).call(this);
}.call(this,"orders" in locals_for_with?locals_for_with.orders:typeof orders!=="undefined"?orders:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
}