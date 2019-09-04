function tplIndexCandi(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (candis, undefined) {
buf.push("<div class=\"clearfix\">");
// iterate candis
;(function(){
  var $$obj = candis;
  if ('number' == typeof $$obj.length) {

    for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
      var candi = $$obj[index];

if ( (index + 1) % 4 !== 0)
{
buf.push("<div" + (jade.attr("data-id", '' + (candi.profile_id) + '', true, false)) + " class=\"card pull-left\"><div class=\"wrap\"><div class=\"avatar\">");
if ( candi.is_right === '1')
{
buf.push("<i class=\"icon icon-ji\"></i>");
}
if ( candi.sex === '男')
{
buf.push("<img" + (jade.attr("src", '' + (candi.pic || "/img/candidate_man.png") + '', true, false)) + " alt=\"头像\"/>");
}
else
{
buf.push("<img" + (jade.attr("src", '' + (candi.pic || "/img/candidate_woman.png") + '', true, false)) + " alt=\"头像\"/>");
}
buf.push("</div><div class=\"desc\"><h2 class=\"word-omit\">" + (jade.escape((jade_interp = candi.name) == null ? '' : jade_interp)) + "</h2><div class=\"fee word-omit\"><span>期望薪资</span><em>￥" + (jade.escape((jade_interp = candi.salary_expect) == null ? '' : jade_interp)) + "</em></div><div class=\"three-sign\"><span class=\"age word-omit\">" + (jade.escape((jade_interp = candi.age) == null ? '' : jade_interp)) + "岁</span><span class=\"year word-omit\">" + (jade.escape((jade_interp = candi.worktime) == null ? '' : jade_interp)) + "年</span><span class=\"address word-omit\">" + (jade.escape((jade_interp = candi.city) == null ? '' : jade_interp)) + "</span></div><ul class=\"dots\"><li class=\"word-omit\">" + (jade.escape((jade_interp = candi.education) == null ? '' : jade_interp)) + "学历</li><li class=\"word-omit\">英语能力" + (jade.escape((jade_interp = candi.english) == null ? '' : jade_interp)) + "</li><li class=\"word-omit\">沟通能力" + (jade.escape((jade_interp = candi.communicate) == null ? '' : jade_interp)) + "</li><li class=\"word-omit\">Office能力" + (jade.escape((jade_interp = candi.office) == null ? '' : jade_interp)) + "</li></ul></div><a" + (jade.attr("data-id", '' + (candi.profile_id) + '', true, false)) + " class=\"btn\">立即预约</a></div></div>");
}
else
{
buf.push("<div" + (jade.attr("data-id", '' + (candi.profile_id) + '', true, false)) + " class=\"card pull-left four\"><div class=\"wrap\"><div class=\"avatar\">");
if ( candi.is_right === '1')
{
buf.push("<i class=\"icon icon-ji\"></i>");
}
if ( candi.sex === '男')
{
buf.push("<img" + (jade.attr("src", '' + (candi.pic || "/img/candidate_man.png") + '', true, false)) + " alt=\"头像\"/>");
}
else
{
buf.push("<img" + (jade.attr("src", '' + (candi.pic || "/img/candidate_woman.png") + '', true, false)) + " alt=\"头像\"/>");
}
buf.push("</div><div class=\"desc\"><h2 class=\"word-omit\">" + (jade.escape((jade_interp = candi.name) == null ? '' : jade_interp)) + "</h2><div class=\"fee word-omit\"><span>期望薪资</span><em>￥" + (jade.escape((jade_interp = candi.salary_expect) == null ? '' : jade_interp)) + "</em></div><div class=\"three-sign\"><span class=\"age word-omit\">" + (jade.escape((jade_interp = candi.age) == null ? '' : jade_interp)) + "岁</span><span class=\"year word-omit\">" + (jade.escape((jade_interp = candi.worktime) == null ? '' : jade_interp)) + "年</span><span class=\"address word-omit\">" + (jade.escape((jade_interp = candi.city) == null ? '' : jade_interp)) + "</span></div><ul class=\"dots\"><li class=\"word-omit\">" + (jade.escape((jade_interp = candi.education) == null ? '' : jade_interp)) + "学历</li><li class=\"word-omit\">英语能力" + (jade.escape((jade_interp = candi.english) == null ? '' : jade_interp)) + "</li><li class=\"word-omit\">沟通能力" + (jade.escape((jade_interp = candi.communicate) == null ? '' : jade_interp)) + "</li><li class=\"word-omit\">Office能力" + (jade.escape((jade_interp = candi.office) == null ? '' : jade_interp)) + "</li></ul></div><a" + (jade.attr("data-id", '' + (candi.profile_id) + '', true, false)) + " class=\"btn\">立即预约</a></div></div>");
}
    }

  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;      var candi = $$obj[index];

if ( (index + 1) % 4 !== 0)
{
buf.push("<div" + (jade.attr("data-id", '' + (candi.profile_id) + '', true, false)) + " class=\"card pull-left\"><div class=\"wrap\"><div class=\"avatar\">");
if ( candi.is_right === '1')
{
buf.push("<i class=\"icon icon-ji\"></i>");
}
if ( candi.sex === '男')
{
buf.push("<img" + (jade.attr("src", '' + (candi.pic || "/img/candidate_man.png") + '', true, false)) + " alt=\"头像\"/>");
}
else
{
buf.push("<img" + (jade.attr("src", '' + (candi.pic || "/img/candidate_woman.png") + '', true, false)) + " alt=\"头像\"/>");
}
buf.push("</div><div class=\"desc\"><h2 class=\"word-omit\">" + (jade.escape((jade_interp = candi.name) == null ? '' : jade_interp)) + "</h2><div class=\"fee word-omit\"><span>期望薪资</span><em>￥" + (jade.escape((jade_interp = candi.salary_expect) == null ? '' : jade_interp)) + "</em></div><div class=\"three-sign\"><span class=\"age word-omit\">" + (jade.escape((jade_interp = candi.age) == null ? '' : jade_interp)) + "岁</span><span class=\"year word-omit\">" + (jade.escape((jade_interp = candi.worktime) == null ? '' : jade_interp)) + "年</span><span class=\"address word-omit\">" + (jade.escape((jade_interp = candi.city) == null ? '' : jade_interp)) + "</span></div><ul class=\"dots\"><li class=\"word-omit\">" + (jade.escape((jade_interp = candi.education) == null ? '' : jade_interp)) + "学历</li><li class=\"word-omit\">英语能力" + (jade.escape((jade_interp = candi.english) == null ? '' : jade_interp)) + "</li><li class=\"word-omit\">沟通能力" + (jade.escape((jade_interp = candi.communicate) == null ? '' : jade_interp)) + "</li><li class=\"word-omit\">Office能力" + (jade.escape((jade_interp = candi.office) == null ? '' : jade_interp)) + "</li></ul></div><a" + (jade.attr("data-id", '' + (candi.profile_id) + '', true, false)) + " class=\"btn\">立即预约</a></div></div>");
}
else
{
buf.push("<div" + (jade.attr("data-id", '' + (candi.profile_id) + '', true, false)) + " class=\"card pull-left four\"><div class=\"wrap\"><div class=\"avatar\">");
if ( candi.is_right === '1')
{
buf.push("<i class=\"icon icon-ji\"></i>");
}
if ( candi.sex === '男')
{
buf.push("<img" + (jade.attr("src", '' + (candi.pic || "/img/candidate_man.png") + '', true, false)) + " alt=\"头像\"/>");
}
else
{
buf.push("<img" + (jade.attr("src", '' + (candi.pic || "/img/candidate_woman.png") + '', true, false)) + " alt=\"头像\"/>");
}
buf.push("</div><div class=\"desc\"><h2 class=\"word-omit\">" + (jade.escape((jade_interp = candi.name) == null ? '' : jade_interp)) + "</h2><div class=\"fee word-omit\"><span>期望薪资</span><em>￥" + (jade.escape((jade_interp = candi.salary_expect) == null ? '' : jade_interp)) + "</em></div><div class=\"three-sign\"><span class=\"age word-omit\">" + (jade.escape((jade_interp = candi.age) == null ? '' : jade_interp)) + "岁</span><span class=\"year word-omit\">" + (jade.escape((jade_interp = candi.worktime) == null ? '' : jade_interp)) + "年</span><span class=\"address word-omit\">" + (jade.escape((jade_interp = candi.city) == null ? '' : jade_interp)) + "</span></div><ul class=\"dots\"><li class=\"word-omit\">" + (jade.escape((jade_interp = candi.education) == null ? '' : jade_interp)) + "学历</li><li class=\"word-omit\">英语能力" + (jade.escape((jade_interp = candi.english) == null ? '' : jade_interp)) + "</li><li class=\"word-omit\">沟通能力" + (jade.escape((jade_interp = candi.communicate) == null ? '' : jade_interp)) + "</li><li class=\"word-omit\">Office能力" + (jade.escape((jade_interp = candi.office) == null ? '' : jade_interp)) + "</li></ul></div><a" + (jade.attr("data-id", '' + (candi.profile_id) + '', true, false)) + " class=\"btn\">立即预约</a></div></div>");
}
    }

  }
}).call(this);

buf.push("</div>");}.call(this,"candis" in locals_for_with?locals_for_with.candis:typeof candis!=="undefined"?candis:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
}