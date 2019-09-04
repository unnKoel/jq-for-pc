function tplTalentsHomeList(locals) {
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

buf.push("<div" + (jade.attr("data-profile", talent.profile_id, true, false)) + " class=\"item clearfix\"><div class=\"check pull-left\"><input type=\"checkbox\" class=\"size-x ck-member\"/></div><div class=\"person-info pull-left\"><div class=\"facicon pull-left\">");
if ( talent.sex === '男')
{
buf.push("<img" + (jade.attr("src", '' + (talent.pic || "/img/candidate_man.png") + '', true, false)) + " class=\"header\"/>");
}
else
{
buf.push("<img" + (jade.attr("src", '' + (talent.pic || "/img/candidate_woman.png") + '', true, false)) + " class=\"header\"/>");
}
if ( talent.is_right === 1)
{
buf.push("<i class=\"icon icon-ji\"></i>");
}
buf.push("</div><div class=\"info pull-left\"><div class=\"name-info\"><span>" + (jade.escape((jade_interp = talent.name) == null ? '' : jade_interp)) + "</span></div><div class=\"personal-info\"><span>" + (jade.escape((jade_interp = talent.sex) == null ? '' : jade_interp)) + " |&nbsp</span><span>" + (jade.escape((jade_interp = talent.age) == null ? '' : jade_interp)) + " |&nbsp</span><span>" + (jade.escape((jade_interp = talent.education) == null ? '' : jade_interp)) + " |&nbsp</span><span>" + (jade.escape((jade_interp = talent.forward_city) == null ? '' : jade_interp)) + " |&nbsp</span><span>" + (jade.escape((jade_interp = talent.worktime) == null ? '' : jade_interp)) + "年经验 |&nbsp</span><span>" + (jade.escape((jade_interp = talent.is_leave === '是' ? '已离职' : '目前在职') == null ? '' : jade_interp)) + "</span></div><div" + (jade.attr("title", talent.appraisal, true, false)) + " class=\"comments-info word-omit\"><span>期望薪资 ￥" + (jade.escape((jade_interp = talent.salary_expect) == null ? '' : jade_interp)) + "</span></div></div></div><div class=\"functions pull-left\"><span class=\"pull-left\">" + (jade.escape((jade_interp = talent.position_name) == null ? '' : jade_interp)) + "</span></div><div class=\"operation pull-left\"><a href=\"#\" title=\"删除\" class=\"btn btn-delt\">删除</a></div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var talent = $$obj[$index];

buf.push("<div" + (jade.attr("data-profile", talent.profile_id, true, false)) + " class=\"item clearfix\"><div class=\"check pull-left\"><input type=\"checkbox\" class=\"size-x ck-member\"/></div><div class=\"person-info pull-left\"><div class=\"facicon pull-left\">");
if ( talent.sex === '男')
{
buf.push("<img" + (jade.attr("src", '' + (talent.pic || "/img/candidate_man.png") + '', true, false)) + " class=\"header\"/>");
}
else
{
buf.push("<img" + (jade.attr("src", '' + (talent.pic || "/img/candidate_woman.png") + '', true, false)) + " class=\"header\"/>");
}
if ( talent.is_right === 1)
{
buf.push("<i class=\"icon icon-ji\"></i>");
}
buf.push("</div><div class=\"info pull-left\"><div class=\"name-info\"><span>" + (jade.escape((jade_interp = talent.name) == null ? '' : jade_interp)) + "</span></div><div class=\"personal-info\"><span>" + (jade.escape((jade_interp = talent.sex) == null ? '' : jade_interp)) + " |&nbsp</span><span>" + (jade.escape((jade_interp = talent.age) == null ? '' : jade_interp)) + " |&nbsp</span><span>" + (jade.escape((jade_interp = talent.education) == null ? '' : jade_interp)) + " |&nbsp</span><span>" + (jade.escape((jade_interp = talent.forward_city) == null ? '' : jade_interp)) + " |&nbsp</span><span>" + (jade.escape((jade_interp = talent.worktime) == null ? '' : jade_interp)) + "年经验 |&nbsp</span><span>" + (jade.escape((jade_interp = talent.is_leave === '是' ? '已离职' : '目前在职') == null ? '' : jade_interp)) + "</span></div><div" + (jade.attr("title", talent.appraisal, true, false)) + " class=\"comments-info word-omit\"><span>期望薪资 ￥" + (jade.escape((jade_interp = talent.salary_expect) == null ? '' : jade_interp)) + "</span></div></div></div><div class=\"functions pull-left\"><span class=\"pull-left\">" + (jade.escape((jade_interp = talent.position_name) == null ? '' : jade_interp)) + "</span></div><div class=\"operation pull-left\"><a href=\"#\" title=\"删除\" class=\"btn btn-delt\">删除</a></div></div>");
    }

  }
}).call(this);
}.call(this,"talents" in locals_for_with?locals_for_with.talents:typeof talents!=="undefined"?talents:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
}