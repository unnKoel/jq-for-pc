function tplEnterprise(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (enterprise, undefined) {
buf.push("<div class=\"banner\"><div class=\"container clearfix\"><div class=\"company-icon pull-left\"><img" + (jade.attr("src", enterprise.logo, true, false)) + "/></div><div class=\"company-info pull-right\"><div class=\"company-name\">" + (jade.escape((jade_interp = enterprise.name) == null ? '' : jade_interp)) + "</div><div" + (jade.attr("title", enterprise.desc, true, false)) + " class=\"company-history\">" + (jade.escape((jade_interp = enterprise.desc) == null ? '' : jade_interp)) + "</div></div></div></div><div id=\"erp\" class=\"erp container clearfix\"><div class=\"company-left-side pull-left\"><div class=\"company-profile clearfix\"><div class=\"area-header\"><i class=\"icon icon-border\"></i>公司简介<i class=\"icon icon-th-arrow\"></i></div><div class=\"profile pull-left\"><p>");
if ( enterprise.pic_list[0])
{
buf.push("" + (jade.escape((jade_interp = enterprise.pic_list[0].describe) == null ? '' : jade_interp)) + "");
}
buf.push("</p></div><div class=\"imgprofile pull-right\">");
if ( enterprise.pic_list[0])
{
buf.push("<img" + (jade.attr("src", enterprise.pic_list[0].pic, true, false)) + "/>");
}
else
{
buf.push("<img/>");
}
buf.push("</div></div><div class=\"company-history\"><div class=\"area-header\"><i class=\"icon icon-border\"></i>发展历程<i class=\"icon icon-th-arrow\"></i></div><ul class=\"time-line clearfix\">");
// iterate enterprise.history_list
;(function(){
  var $$obj = enterprise.history_list;
  if ('number' == typeof $$obj.length) {

    for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
      var history = $$obj[index];

buf.push("<li class=\"history\"><p class=\"history-time\"><i class=\"icon icon-td-dot\"></i><span class=\"time\">" + (jade.escape((jade_interp = history.event_time) == null ? '' : jade_interp)) + "</span><span" + (jade.attr("title", history.identification, true, false)) + " class=\"title word-omit\">" + (jade.escape((jade_interp = history.identification) == null ? '' : jade_interp)) + "</span></p><p class=\"history-profile\">" + (jade.escape((jade_interp = history.describe) == null ? '' : jade_interp)) + "</p></li>");
    }

  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;      var history = $$obj[index];

buf.push("<li class=\"history\"><p class=\"history-time\"><i class=\"icon icon-td-dot\"></i><span class=\"time\">" + (jade.escape((jade_interp = history.event_time) == null ? '' : jade_interp)) + "</span><span" + (jade.attr("title", history.identification, true, false)) + " class=\"title word-omit\">" + (jade.escape((jade_interp = history.identification) == null ? '' : jade_interp)) + "</span></p><p class=\"history-profile\">" + (jade.escape((jade_interp = history.describe) == null ? '' : jade_interp)) + "</p></li>");
    }

  }
}).call(this);

buf.push("</ul></div><div class=\"company-address clearfix\"><div class=\"area-header\"><i class=\"icon icon-border\"></i>公司地址<i class=\"icon icon-th-arrow\"></i></div><ul class=\"address-list pull-left\">");
// iterate enterprise.address_list
;(function(){
  var $$obj = enterprise.address_list;
  if ('number' == typeof $$obj.length) {

    for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
      var address = $$obj[index];

buf.push("<li" + (jade.attr("data-city", address.city_name, true, false)) + (jade.attr("data-address", address.address, true, false)) + " class=\"address\"><p class=\"address-profile\"><i class=\"icon icon-td-dot\"></i><span class=\"name\">" + (jade.escape((jade_interp = address.city_name) == null ? '' : jade_interp)) + "</span></p><p" + (jade.attr("title", address.address, true, false)) + " class=\"word-omit address-detail\">" + (jade.escape((jade_interp = address.address) == null ? '' : jade_interp)) + "</p></li>");
    }

  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;      var address = $$obj[index];

buf.push("<li" + (jade.attr("data-city", address.city_name, true, false)) + (jade.attr("data-address", address.address, true, false)) + " class=\"address\"><p class=\"address-profile\"><i class=\"icon icon-td-dot\"></i><span class=\"name\">" + (jade.escape((jade_interp = address.city_name) == null ? '' : jade_interp)) + "</span></p><p" + (jade.attr("title", address.address, true, false)) + " class=\"word-omit address-detail\">" + (jade.escape((jade_interp = address.address) == null ? '' : jade_interp)) + "</p></li>");
    }

  }
}).call(this);

buf.push("</ul><div class=\"map pull-right\"><img src=\"\"/></div></div></div><div class=\"company-right-side pull-right\"><div class=\"company-base\"><div class=\"area-header\"><i class=\"icon icon-border\"></i>基本信息<i class=\"icon icon-th-arrow\"></i></div><p>阶段：" + (jade.escape((jade_interp = enterprise.period_name) == null ? '' : jade_interp)) + "</p><p>规模：" + (jade.escape((jade_interp = enterprise.scale_name) == null ? '' : jade_interp)) + "</p><p>坐标：" + (jade.escape((jade_interp = enterprise.company_city) == null ? '' : jade_interp)) + "</p></div><div class=\"company-manager\"><div class=\"area-header\"><i class=\"icon icon-border\"></i>管理团队<i class=\"icon icon-th-arrow\"></i></div><ul class=\"manager-list\">");
// iterate enterprise.manager_list
;(function(){
  var $$obj = enterprise.manager_list;
  if ('number' == typeof $$obj.length) {

    for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
      var manager = $$obj[index];

buf.push("<li class=\"manager\"><div class=\"manager-icon\"><img" + (jade.attr("src", manager.pic, true, false)) + "/></div><div" + (jade.attr("title", manager.name, true, false)) + " class=\"manager-name word-omit\">" + (jade.escape((jade_interp = manager.name) == null ? '' : jade_interp)) + "</div><div" + (jade.attr("title", manager.type_name, true, false)) + " class=\"manager-position word-omit\">" + (jade.escape((jade_interp = manager.type_name) == null ? '' : jade_interp)) + "</div><div" + (jade.attr("title", manager.describe, true, false)) + " class=\"manager-profile\">" + (jade.escape((jade_interp = manager.describe) == null ? '' : jade_interp)) + "</div></li>");
    }

  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;      var manager = $$obj[index];

buf.push("<li class=\"manager\"><div class=\"manager-icon\"><img" + (jade.attr("src", manager.pic, true, false)) + "/></div><div" + (jade.attr("title", manager.name, true, false)) + " class=\"manager-name word-omit\">" + (jade.escape((jade_interp = manager.name) == null ? '' : jade_interp)) + "</div><div" + (jade.attr("title", manager.type_name, true, false)) + " class=\"manager-position word-omit\">" + (jade.escape((jade_interp = manager.type_name) == null ? '' : jade_interp)) + "</div><div" + (jade.attr("title", manager.describe, true, false)) + " class=\"manager-profile\">" + (jade.escape((jade_interp = manager.describe) == null ? '' : jade_interp)) + "</div></li>");
    }

  }
}).call(this);

buf.push("</ul></div><div class=\"company-tag\"><div class=\"area-header\"><i class=\"icon icon-border\"></i>公司标签<i class=\"icon icon-th-arrow\"></i></div><ul class=\"tag-list clearfix\">");
// iterate enterprise.tag_list
;(function(){
  var $$obj = enterprise.tag_list;
  if ('number' == typeof $$obj.length) {

    for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
      var tag = $$obj[index];

buf.push("<li" + (jade.attr("title", tag.tag_name, true, false)) + " class=\"word-omit tag pull-left\">" + (jade.escape((jade_interp = tag.tag_name) == null ? '' : jade_interp)) + "</li>");
    }

  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;      var tag = $$obj[index];

buf.push("<li" + (jade.attr("title", tag.tag_name, true, false)) + " class=\"word-omit tag pull-left\">" + (jade.escape((jade_interp = tag.tag_name) == null ? '' : jade_interp)) + "</li>");
    }

  }
}).call(this);

buf.push("</ul></div></div></div>");}.call(this,"enterprise" in locals_for_with?locals_for_with.enterprise:typeof enterprise!=="undefined"?enterprise:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
}