function tplTalentsTable(locals) {
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

buf.push("<li" + (jade.attr("data-item", talent.id, true, false)) + " class=\"item\"><div class=\"up-info\"><span>" + (jade.escape((jade_interp = talent.name) == null ? '' : jade_interp)) + "</span><span>" + (jade.escape((jade_interp = talent.sex) == null ? '' : jade_interp)) + "</span><span>" + (jade.escape((jade_interp = talent.age) == null ? '' : jade_interp)) + "</span><span>" + (jade.escape((jade_interp = talent.position) == null ? '' : jade_interp)) + "</span><span>" + (jade.escape((jade_interp = talent.worktime) == null ? '' : jade_interp)) + "年</span><span>" + (jade.escape((jade_interp = talent.education) == null ? '' : jade_interp)) + "</span><span>" + (jade.escape((jade_interp = talent.city) == null ? '' : jade_interp)) + "</span><span>" + (jade.escape((jade_interp = talent.salary_month_expect) == null ? '' : jade_interp)) + "</span><span>" + (jade.escape((jade_interp = talent.salary_month_current) == null ? '' : jade_interp)) + "</span><span>" + (jade.escape((jade_interp = talent.last_update) == null ? '' : jade_interp)) + "</span></div><div class=\"down-info clearfix\"><div class=\"pull-left\">");
if ( talent.sex === '男')
{
buf.push("<img" + (jade.attr("src", '' + (talent.pic || "/img/candidate_man.png") + '', true, false)) + "/>");
}
else
{
buf.push("<img" + (jade.attr("src", '' + (talent.pic || "/img/candidate_woman.png") + '', true, false)) + "/>");
}
buf.push("<p>" + (jade.escape((jade_interp = talent.arrival) == null ? '' : jade_interp)) + "</p>");
if ( talent.is_right === '1')
{
buf.push("<i class=\"icon icon-ji\"></i>");
}
buf.push("</div><div class=\"pull-right\"><div class=\"school\"><em>毕业院校 :</em>");
if ( talent.edu_list && talent.edu_list.length)
{
buf.push("<span>" + (jade.escape((jade_interp = talent.edu_list[0].begin_time) == null ? '' : jade_interp)) + "至" + (jade.escape((jade_interp = talent.edu_list[0].end_time) == null ? '' : jade_interp)) + " |&nbsp;</span><span>" + (jade.escape((jade_interp = talent.edu_list[0].school_name) == null ? '' : jade_interp)) + " |&nbsp;</span><span>" + (jade.escape((jade_interp = talent.edu_list[0].major_name) == null ? '' : jade_interp)) + "</span>");
}
buf.push("</div><div class=\"job-experience clearfix\"><em class=\"pull-left\">工作经历 :</em>");
if ( talent.job_list && talent.job_list.length)
{
buf.push("<ul class=\"pull-left\"><li class=\"one\"><div class=\"title\"><span>" + (jade.escape((jade_interp = talent.job_list[0].begin_time) == null ? '' : jade_interp)) + "至" + (jade.escape((jade_interp = talent.job_list[0].end_time) == null ? '' : jade_interp)) + " |&nbsp;</span><span>" + (jade.escape((jade_interp = talent.job_list[0].company_name) == null ? '' : jade_interp)) + " |&nbsp;</span><span>" + (jade.escape((jade_interp = talent.job_list[0].department) == null ? '' : jade_interp)) + " |&nbsp;</span><span>" + (jade.escape((jade_interp = talent.job_list[0].position) == null ? '' : jade_interp)) + "</span></div><p" + (jade.attr("title", '' + (talent.job_list[0].duty) + '', true, false)) + " class=\"content\">" + (jade.escape((jade_interp = talent.job_list[0].duty) == null ? '' : jade_interp)) + "</p></li>");
if ( talent.job_list[1])
{
buf.push("<li class=\"sec\"><div class=\"title\"><span>" + (jade.escape((jade_interp = talent.job_list[1].begin_time) == null ? '' : jade_interp)) + "至" + (jade.escape((jade_interp = talent.job_list[1].end_time) == null ? '' : jade_interp)) + " |&nbsp;</span><span>" + (jade.escape((jade_interp = talent.job_list[1].company_name) == null ? '' : jade_interp)) + " |&nbsp;</span><span>" + (jade.escape((jade_interp = talent.job_list[1].department) == null ? '' : jade_interp)) + " |&nbsp;</span><span>" + (jade.escape((jade_interp = talent.job_list[1].position) == null ? '' : jade_interp)) + "</span></div><p></p></li>");
}
buf.push("</ul>");
}
buf.push("</div><div class=\"comments\"><em class=\"pull-left\">顾问评语 :</em><p class=\"word-omit pull-left\">" + (jade.escape((jade_interp = talent.appraisal) == null ? '' : jade_interp)) + "</p></div></div></div></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var talent = $$obj[$index];

buf.push("<li" + (jade.attr("data-item", talent.id, true, false)) + " class=\"item\"><div class=\"up-info\"><span>" + (jade.escape((jade_interp = talent.name) == null ? '' : jade_interp)) + "</span><span>" + (jade.escape((jade_interp = talent.sex) == null ? '' : jade_interp)) + "</span><span>" + (jade.escape((jade_interp = talent.age) == null ? '' : jade_interp)) + "</span><span>" + (jade.escape((jade_interp = talent.position) == null ? '' : jade_interp)) + "</span><span>" + (jade.escape((jade_interp = talent.worktime) == null ? '' : jade_interp)) + "年</span><span>" + (jade.escape((jade_interp = talent.education) == null ? '' : jade_interp)) + "</span><span>" + (jade.escape((jade_interp = talent.city) == null ? '' : jade_interp)) + "</span><span>" + (jade.escape((jade_interp = talent.salary_month_expect) == null ? '' : jade_interp)) + "</span><span>" + (jade.escape((jade_interp = talent.salary_month_current) == null ? '' : jade_interp)) + "</span><span>" + (jade.escape((jade_interp = talent.last_update) == null ? '' : jade_interp)) + "</span></div><div class=\"down-info clearfix\"><div class=\"pull-left\">");
if ( talent.sex === '男')
{
buf.push("<img" + (jade.attr("src", '' + (talent.pic || "/img/candidate_man.png") + '', true, false)) + "/>");
}
else
{
buf.push("<img" + (jade.attr("src", '' + (talent.pic || "/img/candidate_woman.png") + '', true, false)) + "/>");
}
buf.push("<p>" + (jade.escape((jade_interp = talent.arrival) == null ? '' : jade_interp)) + "</p>");
if ( talent.is_right === '1')
{
buf.push("<i class=\"icon icon-ji\"></i>");
}
buf.push("</div><div class=\"pull-right\"><div class=\"school\"><em>毕业院校 :</em>");
if ( talent.edu_list && talent.edu_list.length)
{
buf.push("<span>" + (jade.escape((jade_interp = talent.edu_list[0].begin_time) == null ? '' : jade_interp)) + "至" + (jade.escape((jade_interp = talent.edu_list[0].end_time) == null ? '' : jade_interp)) + " |&nbsp;</span><span>" + (jade.escape((jade_interp = talent.edu_list[0].school_name) == null ? '' : jade_interp)) + " |&nbsp;</span><span>" + (jade.escape((jade_interp = talent.edu_list[0].major_name) == null ? '' : jade_interp)) + "</span>");
}
buf.push("</div><div class=\"job-experience clearfix\"><em class=\"pull-left\">工作经历 :</em>");
if ( talent.job_list && talent.job_list.length)
{
buf.push("<ul class=\"pull-left\"><li class=\"one\"><div class=\"title\"><span>" + (jade.escape((jade_interp = talent.job_list[0].begin_time) == null ? '' : jade_interp)) + "至" + (jade.escape((jade_interp = talent.job_list[0].end_time) == null ? '' : jade_interp)) + " |&nbsp;</span><span>" + (jade.escape((jade_interp = talent.job_list[0].company_name) == null ? '' : jade_interp)) + " |&nbsp;</span><span>" + (jade.escape((jade_interp = talent.job_list[0].department) == null ? '' : jade_interp)) + " |&nbsp;</span><span>" + (jade.escape((jade_interp = talent.job_list[0].position) == null ? '' : jade_interp)) + "</span></div><p" + (jade.attr("title", '' + (talent.job_list[0].duty) + '', true, false)) + " class=\"content\">" + (jade.escape((jade_interp = talent.job_list[0].duty) == null ? '' : jade_interp)) + "</p></li>");
if ( talent.job_list[1])
{
buf.push("<li class=\"sec\"><div class=\"title\"><span>" + (jade.escape((jade_interp = talent.job_list[1].begin_time) == null ? '' : jade_interp)) + "至" + (jade.escape((jade_interp = talent.job_list[1].end_time) == null ? '' : jade_interp)) + " |&nbsp;</span><span>" + (jade.escape((jade_interp = talent.job_list[1].company_name) == null ? '' : jade_interp)) + " |&nbsp;</span><span>" + (jade.escape((jade_interp = talent.job_list[1].department) == null ? '' : jade_interp)) + " |&nbsp;</span><span>" + (jade.escape((jade_interp = talent.job_list[1].position) == null ? '' : jade_interp)) + "</span></div><p></p></li>");
}
buf.push("</ul>");
}
buf.push("</div><div class=\"comments\"><em class=\"pull-left\">顾问评语 :</em><p class=\"word-omit pull-left\">" + (jade.escape((jade_interp = talent.appraisal) == null ? '' : jade_interp)) + "</p></div></div></div></li>");
    }

  }
}).call(this);
}.call(this,"talents" in locals_for_with?locals_for_with.talents:typeof talents!=="undefined"?talents:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
}