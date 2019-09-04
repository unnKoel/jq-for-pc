function tplProfileFence(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (profile) {
buf.push("<div class=\"above-layer clearfix\"><div class=\"brief pull-right\"><div class=\"b1 clearfix\"><div class=\"pull-left\"><div class=\"title\"><span class=\"pos\">[" + (jade.escape((jade_interp = profile.position_name) == null ? '' : jade_interp)) + "]</span><span class=\"name\">" + (jade.escape((jade_interp = profile.name) == null ? '' : jade_interp)) + "</span><span class=\"no\">" + (jade.escape((jade_interp = profile.id) == null ? '' : jade_interp)) + "号候选人</span></div><div class=\"salary\"><span class=\"cur-salary\"><em>当前薪资 :</em>￥" + (jade.escape((jade_interp = profile.salary_current) == null ? '' : jade_interp)) + "</span><span class=\"expect-salary\"><em>期望薪资 :</em>￥" + (jade.escape((jade_interp = profile.salary_expect) == null ? '' : jade_interp)) + "</span></div></div><div class=\"pull-right\"><div class=\"outerpack\"><span class=\"fee\"><i class=\"icon icon-Y\"></i>外包费 ￥" + (jade.escape((jade_interp = profile.dispatch_fee) == null ? '' : jade_interp)) + "/月</span><span class=\"explain\"><i class=\"icon icon-what\"></i>资费说明</span><div class=\"fee-popup hide\"><h4>外包费构成</h4><p>人员成本 : 人员薪资+企业应缴社保公积金</p><p>管理费 : 人员成本的25%</p><p>增值税税率 : 7%</p><div class=\"foot-pad\"></div></div></div><div class=\"recruit\"><span class=\"fee\"><i class=\"icon icon-Y\"></i>招聘费 ￥" + (jade.escape((jade_interp = profile.recruit_fee) == null ? '' : jade_interp)) + "</span><span class=\"explain\"><i class=\"icon icon-what\"></i>资费说明</span><div class=\"fee-popup hide\"><h4>招聘费构成</h4><p>￥" + (jade.escape((jade_interp = profile.recruit_fee) == null ? '' : jade_interp)) + "=2个月的人员薪资</p><div class=\"foot-pad\"></div></div></div></div></div></div></div><div class=\"under-layer clearfix\"><div class=\"brief pull-right\"><ul class=\"clearfix\"><li class=\"pull-left sex\"><span>" + (jade.escape((jade_interp = profile.sex) == null ? '' : jade_interp)) + "</span><em>性别</em></li><li class=\"pull-left\"><span>" + (jade.escape((jade_interp = profile.age) == null ? '' : jade_interp)) + "</span><em>年龄</em></li><li class=\"pull-left\"><span>" + (jade.escape((jade_interp = profile.education) == null ? '' : jade_interp)) + "</span><em>学历</em></li><li class=\"pull-left\"><span>" + (jade.escape((jade_interp = profile.worktime) == null ? '' : jade_interp)) + "年</span><em>工作经验</em></li><li class=\"pull-left address\"><span>" + (jade.escape((jade_interp = profile.forward_city) == null ? '' : jade_interp)) + "</span><em>期望地点</em></li></ul></div></div><div class=\"portrait\"><div class=\"frame\">");
if ( profile.sex === '男')
{
buf.push("<img" + (jade.attr("src", '' + (profile.picture || "/img/candidate_man.png") + '', true, false)) + "/>");
}
else
{
buf.push("<img" + (jade.attr("src", '' + (profile.picture || "/img/candidate_woman.png") + '', true, false)) + "/>");
}
if ( profile.is_right === '1')
{
buf.push("<i class=\"icon icon-jyjm-green\"></i>");
}
buf.push("</div></div>");}.call(this,"profile" in locals_for_with?locals_for_with.profile:typeof profile!=="undefined"?profile:undefined));;return buf.join("");
}