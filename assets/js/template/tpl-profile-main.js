function tplProfileMain(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (profile, undefined) {
buf.push("<div class=\"item base\"><h2 id=\"base\"><span class=\"vertical\"></span><span>基础信息</span><i class=\"icon icon-arrows-declivity\"></i></h2><div class=\"content\"><div class=\"above\"><ul class=\"clearfix\"><li class=\"pull-left current word-omit\"><span>目前在" + (jade.escape((jade_interp = profile.city) == null ? '' : jade_interp)) + "工作，考虑" + (jade.escape((jade_interp = profile.forward_city) == null ? '' : jade_interp)) + "</span></li><li class=\"pull-left native word-omit\"><span>籍贯 :</span><em>" + (jade.escape((jade_interp = profile.native) == null ? '' : jade_interp)) + "</em></li><li class=\"pull-left dimission word-omit\"><span>是否离职 :</span><em> " + (jade.escape((jade_interp = profile.is_leave) == null ? '' : jade_interp)) + "</em></li></ul></div><div class=\"under\"><ul class=\"clearfix\"><li class=\"pull-left cometo word-omit\"><span>可到岗时间 :</span><em>" + (jade.escape((jade_interp = profile.arrival) == null ? '' : jade_interp)) + "</em></li><li class=\"pull-left marriage word-omit\"><span>婚育状况 :</span><em>" + (jade.escape((jade_interp = profile.marry) == null ? '' : jade_interp)) + "</em></li><li class=\"pull-left eng word-omit\"><span>英语能力 :</span><em>" + (jade.escape((jade_interp = profile.english_level) == null ? '' : jade_interp)) + "</em></li></ul></div></div></div><div class=\"item remark\"><h2 id=\"remark\"><span class=\"vertical\"></span><span>顾问评语</span><i class=\"icon icon-arrows-declivity\"></i></h2><div class=\"content\"><ul><li class=\"clearfix\"><span class=\"dot pull-left\">Office能力 :</span><em class=\"pull-left\">" + (jade.escape((jade_interp = profile.office_level) == null ? '' : jade_interp)) + "（" + (jade.escape((jade_interp = profile.office_desc) == null ? '' : jade_interp)) + "）</em></li><li class=\"clearfix\"><span class=\"dot pull-left\">沟通能力 :</span><em class=\"pull-left\">" + (jade.escape((jade_interp = profile.communicate_level) == null ? '' : jade_interp)) + "（" + (jade.escape((jade_interp = profile.communicate_desc) == null ? '' : jade_interp)) + "）</em></li></ul><p>" + (((jade_interp = profile.appraisal) == null ? '' : jade_interp)) + "</p></div></div><div class=\"item jobs\"><h2 id=\"jobs\"><span class=\"vertical\"></span><span>工作经历</span><i class=\"icon icon-arrows-declivity\"></i></h2><div class=\"content\">");
// iterate profile.job
;(function(){
  var $$obj = profile.job;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var job = $$obj[$index];

buf.push("<div class=\"job-item\"><div class=\"first\"><span class=\"cname dot\">" + (jade.escape((jade_interp = job.company_name) == null ? '' : jade_interp)) + "</span><span class=\"number\">" + (jade.escape((jade_interp = job.company_scale) == null ? '' : jade_interp)) + "</span><span class=\"industry\">" + (jade.escape((jade_interp = job.business) == null ? '' : jade_interp)) + "</span></div><div class=\"second\"><span class=\"bgtime\">" + (jade.escape((jade_interp = job.begin_time) == null ? '' : jade_interp)) + "</span><span>至</span><span class=\"endtime\">" + (jade.escape((jade_interp = job.end_time) == null ? '' : jade_interp)) + "</span><span class=\"range\">（" + (jade.escape((jade_interp = job.range) == null ? '' : jade_interp)) + "）</span></div><ul class=\"others\"><li><span>所在部门 :</span><em>" + (jade.escape((jade_interp = job.department) == null ? '' : jade_interp)) + "</em></li><li><span>职位名称 :</span><em>" + (jade.escape((jade_interp = job.position) == null ? '' : jade_interp)) + "</em></li><li><span>汇报对象 :</span><em>" + (jade.escape((jade_interp = job.supervisor) == null ? '' : jade_interp)) + "</em></li><li class=\"salary\"><span>薪资范围 :</span><em>" + (jade.escape((jade_interp = job.salary_scope) == null ? '' : jade_interp)) + "</em></li><li class=\"clearfix duty\"><span class=\"pull-left\">工作职责 :</span><p class=\"pull-left\">" + (((jade_interp = job.duty) == null ? '' : jade_interp)) + "</p></li></ul></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var job = $$obj[$index];

buf.push("<div class=\"job-item\"><div class=\"first\"><span class=\"cname dot\">" + (jade.escape((jade_interp = job.company_name) == null ? '' : jade_interp)) + "</span><span class=\"number\">" + (jade.escape((jade_interp = job.company_scale) == null ? '' : jade_interp)) + "</span><span class=\"industry\">" + (jade.escape((jade_interp = job.business) == null ? '' : jade_interp)) + "</span></div><div class=\"second\"><span class=\"bgtime\">" + (jade.escape((jade_interp = job.begin_time) == null ? '' : jade_interp)) + "</span><span>至</span><span class=\"endtime\">" + (jade.escape((jade_interp = job.end_time) == null ? '' : jade_interp)) + "</span><span class=\"range\">（" + (jade.escape((jade_interp = job.range) == null ? '' : jade_interp)) + "）</span></div><ul class=\"others\"><li><span>所在部门 :</span><em>" + (jade.escape((jade_interp = job.department) == null ? '' : jade_interp)) + "</em></li><li><span>职位名称 :</span><em>" + (jade.escape((jade_interp = job.position) == null ? '' : jade_interp)) + "</em></li><li><span>汇报对象 :</span><em>" + (jade.escape((jade_interp = job.supervisor) == null ? '' : jade_interp)) + "</em></li><li class=\"salary\"><span>薪资范围 :</span><em>" + (jade.escape((jade_interp = job.salary_scope) == null ? '' : jade_interp)) + "</em></li><li class=\"clearfix duty\"><span class=\"pull-left\">工作职责 :</span><p class=\"pull-left\">" + (((jade_interp = job.duty) == null ? '' : jade_interp)) + "</p></li></ul></div>");
    }

  }
}).call(this);

buf.push("</div></div><div class=\"item edu\"><h2 id=\"edu\"><span class=\"vertical\"></span><span>教育经历</span><i class=\"icon icon-arrows-declivity\"></i></h2><div class=\"content\">");
// iterate profile.edu
;(function(){
  var $$obj = profile.edu;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var edu = $$obj[$index];

buf.push("<div class=\"edu-item\"><p class=\"dot\">" + (jade.escape((jade_interp = edu.education) == null ? '' : jade_interp)) + "</p><ul><li><span class=\"school\">学校 :</span><em>" + (jade.escape((jade_interp = edu.school_name) == null ? '' : jade_interp)) + "</em></li><li><span class=\"time\">时间 :</span><em>" + (jade.escape((jade_interp = edu.begin_time) == null ? '' : jade_interp)) + " ~ " + (jade.escape((jade_interp = edu.end_time) == null ? '' : jade_interp)) + "</em></li><li><span class=\"major\">专业 :</span><em>" + (jade.escape((jade_interp = edu.major_name) == null ? '' : jade_interp)) + "</em></li><li><span class=\"recruitment\"> 统招 :</span><em>" + (jade.escape((jade_interp = edu.is_unified) == null ? '' : jade_interp)) + "</em></li></ul></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var edu = $$obj[$index];

buf.push("<div class=\"edu-item\"><p class=\"dot\">" + (jade.escape((jade_interp = edu.education) == null ? '' : jade_interp)) + "</p><ul><li><span class=\"school\">学校 :</span><em>" + (jade.escape((jade_interp = edu.school_name) == null ? '' : jade_interp)) + "</em></li><li><span class=\"time\">时间 :</span><em>" + (jade.escape((jade_interp = edu.begin_time) == null ? '' : jade_interp)) + " ~ " + (jade.escape((jade_interp = edu.end_time) == null ? '' : jade_interp)) + "</em></li><li><span class=\"major\">专业 :</span><em>" + (jade.escape((jade_interp = edu.major_name) == null ? '' : jade_interp)) + "</em></li><li><span class=\"recruitment\"> 统招 :</span><em>" + (jade.escape((jade_interp = edu.is_unified) == null ? '' : jade_interp)) + "</em></li></ul></div>");
    }

  }
}).call(this);

buf.push("</div></div><div class=\"item skill\"><h2 id=\"skill\"><span class=\"vertical\"></span><span>技能证书</span><i class=\"icon icon-arrows-declivity\"></i></h2><div class=\"content\"><ul>");
if ( profile.skills)
{
// iterate profile.skills
;(function(){
  var $$obj = profile.skills;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var skill = $$obj[$index];

buf.push("<li><span>" + (jade.escape((jade_interp = skill.name) == null ? '' : jade_interp)) + " :</span><em>" + (jade.escape((jade_interp = skill.ext) == null ? '' : jade_interp)) + "</em></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var skill = $$obj[$index];

buf.push("<li><span>" + (jade.escape((jade_interp = skill.name) == null ? '' : jade_interp)) + " :</span><em>" + (jade.escape((jade_interp = skill.ext) == null ? '' : jade_interp)) + "</em></li>");
    }

  }
}).call(this);

}
buf.push("</ul></div></div><div class=\"item answer\"><h2 id=\"answer\"><span class=\"vertical\"></span><span>你问我答</span><i class=\"icon icon-arrows-declivity\"></i></h2><div class=\"content\">");
// iterate profile.qa
;(function(){
  var $$obj = profile.qa;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var qa = $$obj[$index];

buf.push("<div class=\"answer-item\"><p class=\"dot\">Q : " + (jade.escape((jade_interp = qa.question) == null ? '' : jade_interp)) + "</p><p class=\"answer\">" + (jade.escape((jade_interp = qa.answer) == null ? '' : jade_interp)) + "</p></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var qa = $$obj[$index];

buf.push("<div class=\"answer-item\"><p class=\"dot\">Q : " + (jade.escape((jade_interp = qa.question) == null ? '' : jade_interp)) + "</p><p class=\"answer\">" + (jade.escape((jade_interp = qa.answer) == null ? '' : jade_interp)) + "</p></div>");
    }

  }
}).call(this);

buf.push("</div></div>");}.call(this,"profile" in locals_for_with?locals_for_with.profile:typeof profile!=="undefined"?profile:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
}