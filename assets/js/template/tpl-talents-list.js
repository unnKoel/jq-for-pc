function tplTalentsList(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (talents, undefined) {
// iterate talents
;(function(){
  var $$obj = talents;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var talent = $$obj[$index];

buf.push("<div" + (jade.attr("data-item", talent.id, true, false)) + " class=\"item clearfix\">");
if ( talent.sex === '男')
{
buf.push("<img" + (jade.attr("src", '' + (talent.pic || "/img/candidate_man.png") + '', true, false)) + " class=\"favicon pull-left\"/>");
}
else
{
buf.push("<img" + (jade.attr("src", '' + (talent.pic || "/img/candidate_woman.png") + '', true, false)) + " class=\"favicon pull-left\"/>");
}
if ( talent.is_right === '1')
{
buf.push("<i class=\"icon icon-ji\"></i>");
}
buf.push("<div class=\"info pull-right\"><div class=\"position-info clearfix\"><span" + (jade.attr("title", '' + (talent.position) + '[' + (talent.city) + '] ' + (talent.name) + '', true, false)) + " class=\"word-omit position pull-left\"><em>" + (jade.escape((jade_interp = talent.position) == null ? '' : jade_interp)) + "[" + (jade.escape((jade_interp = talent.city) == null ? '' : jade_interp)) + "]</em> " + (jade.escape((jade_interp = talent.name) == null ? '' : jade_interp)) + "</span><span" + (jade.attr("title", '期望薪资￥' + (talent.salary_month_expect) + '', true, false)) + " class=\"word-omit salary pull-right\">期望薪资￥" + (jade.escape((jade_interp = talent.salary_month_expect) == null ? '' : jade_interp)) + "</span></div><div class=\"personal-info clearfix\"><span" + (jade.attr("title", '' + (talent.age) + '岁/' + (talent.education) + '/经验' + (talent.worktime) + '年', true, false)) + " class=\"word-omit first pull-left\">" + (jade.escape((jade_interp = talent.age) == null ? '' : jade_interp)) + "岁/" + (jade.escape((jade_interp = talent.education) == null ? '' : jade_interp)) + "/经验" + (jade.escape((jade_interp = talent.worktime) == null ? '' : jade_interp)) + "年</span><span" + (jade.attr("title", '英语' + (talent.english) + '/沟通能力' + (talent.communicate) + '/Office能力' + (talent.office) + '', true, false)) + " class=\"word-omit second pull-left\">英语" + (jade.escape((jade_interp = talent.english) == null ? '' : jade_interp)) + "/沟通能力" + (jade.escape((jade_interp = talent.communicate) == null ? '' : jade_interp)) + "/Office能力" + (jade.escape((jade_interp = talent.office) == null ? '' : jade_interp)) + "</span>");
if ( talent.is_leave == '是')
{
buf.push("<span title=\"已离职\" class=\"word-omit third pull-left\">已离职</span>");
}
else
{
buf.push("<span title=\"在职\" class=\"word-omit third pull-left\">在职</span>");
}
buf.push("</div><div" + (jade.attr("title", talent.appraisal, true, false)) + " class=\"comments-info clearfix\"><span class=\"word-omit pull-left\">顾问评语：" + (jade.escape((jade_interp = talent.appraisal) == null ? '' : jade_interp)) + "</span></div></div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var talent = $$obj[$index];

buf.push("<div" + (jade.attr("data-item", talent.id, true, false)) + " class=\"item clearfix\">");
if ( talent.sex === '男')
{
buf.push("<img" + (jade.attr("src", '' + (talent.pic || "/img/candidate_man.png") + '', true, false)) + " class=\"favicon pull-left\"/>");
}
else
{
buf.push("<img" + (jade.attr("src", '' + (talent.pic || "/img/candidate_woman.png") + '', true, false)) + " class=\"favicon pull-left\"/>");
}
if ( talent.is_right === '1')
{
buf.push("<i class=\"icon icon-ji\"></i>");
}
buf.push("<div class=\"info pull-right\"><div class=\"position-info clearfix\"><span" + (jade.attr("title", '' + (talent.position) + '[' + (talent.city) + '] ' + (talent.name) + '', true, false)) + " class=\"word-omit position pull-left\"><em>" + (jade.escape((jade_interp = talent.position) == null ? '' : jade_interp)) + "[" + (jade.escape((jade_interp = talent.city) == null ? '' : jade_interp)) + "]</em> " + (jade.escape((jade_interp = talent.name) == null ? '' : jade_interp)) + "</span><span" + (jade.attr("title", '期望薪资￥' + (talent.salary_month_expect) + '', true, false)) + " class=\"word-omit salary pull-right\">期望薪资￥" + (jade.escape((jade_interp = talent.salary_month_expect) == null ? '' : jade_interp)) + "</span></div><div class=\"personal-info clearfix\"><span" + (jade.attr("title", '' + (talent.age) + '岁/' + (talent.education) + '/经验' + (talent.worktime) + '年', true, false)) + " class=\"word-omit first pull-left\">" + (jade.escape((jade_interp = talent.age) == null ? '' : jade_interp)) + "岁/" + (jade.escape((jade_interp = talent.education) == null ? '' : jade_interp)) + "/经验" + (jade.escape((jade_interp = talent.worktime) == null ? '' : jade_interp)) + "年</span><span" + (jade.attr("title", '英语' + (talent.english) + '/沟通能力' + (talent.communicate) + '/Office能力' + (talent.office) + '', true, false)) + " class=\"word-omit second pull-left\">英语" + (jade.escape((jade_interp = talent.english) == null ? '' : jade_interp)) + "/沟通能力" + (jade.escape((jade_interp = talent.communicate) == null ? '' : jade_interp)) + "/Office能力" + (jade.escape((jade_interp = talent.office) == null ? '' : jade_interp)) + "</span>");
if ( talent.is_leave == '是')
{
buf.push("<span title=\"已离职\" class=\"word-omit third pull-left\">已离职</span>");
}
else
{
buf.push("<span title=\"在职\" class=\"word-omit third pull-left\">在职</span>");
}
buf.push("</div><div" + (jade.attr("title", talent.appraisal, true, false)) + " class=\"comments-info clearfix\"><span class=\"word-omit pull-left\">顾问评语：" + (jade.escape((jade_interp = talent.appraisal) == null ? '' : jade_interp)) + "</span></div></div></div>");
    }

  }
}).call(this);
}.call(this,"talents" in locals_for_with?locals_for_with.talents:typeof talents!=="undefined"?talents:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
}