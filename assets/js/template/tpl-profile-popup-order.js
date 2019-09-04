function tplProfilePopupOrder(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (profile) {
buf.push("<div id=\"order\" class=\"popup-global\"><div class=\"header\"><h2>预约面试</h2><a class=\"close\"></a></div><div class=\"content\"><div class=\"wrap\"><div class=\"brief clearfix\"><div class=\"pull-left left-layer\"><div class=\"portrait\"><div class=\"frame\">");
if ( profile.sex === '男')
{
buf.push("<img" + (jade.attr("src", '' + (profile.picture || "/img/candidate_man.png") + '', true, false)) + " alt=\"候选人头像\"/>");
}
else
{
buf.push("<img" + (jade.attr("src", '' + (profile.picture || "/img/candidate_woman.png") + '', true, false)) + " alt=\"候选人头像\"/>");
}
if ( profile.is_right === '1')
{
buf.push("<i class=\"icon icon-jyjm-green\"></i>");
}
buf.push("</div></div></div><div class=\"pull-right right-layer\"><div class=\"b1 clearfix\"><div class=\"pull-left\"><span class=\"pos\">[" + (jade.escape((jade_interp = profile.position_name) == null ? '' : jade_interp)) + "]</span><span class=\"name\">" + (jade.escape((jade_interp = profile.name) == null ? '' : jade_interp)) + "</span></div><div class=\"pull-right\"><span class=\"fee\">期望薪资：￥" + (jade.escape((jade_interp = profile.salary_expect) == null ? '' : jade_interp)) + "</span></div></div><div class=\"b2\"><span>" + (jade.escape((jade_interp = profile.age) == null ? '' : jade_interp)) + "岁</span><span class=\"separate\">|</span><span>" + (jade.escape((jade_interp = profile.education) == null ? '' : jade_interp)) + "</span><span class=\"separate\">|</span><span>" + (jade.escape((jade_interp = profile.city) == null ? '' : jade_interp)) + "</span><span class=\"separate\">|</span><span>经验" + (jade.escape((jade_interp = profile.worktime) == null ? '' : jade_interp)) + "年</span><span class=\"separate\">|</span><span>" + (jade.escape((jade_interp = profile.is_leave === '是' ? '已离职' : '目前在职') == null ? '' : jade_interp)) + "</span></div><div class=\"b3 clearfix\"><span>英语" + (jade.escape((jade_interp = profile.english_level) == null ? '' : jade_interp)) + "</span><span class=\"separate\">|</span><span>Office能力" + (jade.escape((jade_interp = profile.office_level) == null ? '' : jade_interp)) + "</span><span class=\"separate\">|</span><span>沟通能力" + (jade.escape((jade_interp = profile.communicate_level) == null ? '' : jade_interp)) + "</span></div></div></div><div class=\"bottom-some clearfix\"><p class=\"pull-left\">* 立即预约候选人，我们将在" + (jade.escape((jade_interp = profile.time) == null ? '' : jade_interp)) + "给您反馈</p><div class=\"pull-right clause\"><input type=\"checkbox\" class=\"size-x\"/><span class=\"link\">同意<a href=\"/pact.html\">《即派服务条款》</a></span></div></div></div></div><div class=\"footer\"><a class=\"btn btn-main\"><i class=\"icon icon-edit\"></i>确定预约</a></div></div>");}.call(this,"profile" in locals_for_with?locals_for_with.profile:typeof profile!=="undefined"?profile:undefined));;return buf.join("");
}