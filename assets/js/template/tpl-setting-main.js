function tplSettingMain(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (user) {
buf.push("<form><ul><li><div class=\"cur-account clearfix\"><span class=\"caption pull-left\">当前账号</span><div class=\"pull-right\"><div class=\"clearfix\"><div class=\"func-zone pull-left\">" + (jade.escape((jade_interp = user.phone) == null ? '' : jade_interp)) + "</div><div class=\"action pull-right\"><a class=\"logout\">退出账号<i class=\"icon icon-double-arrows\"></i></a></div></div></div></div></li><li><div class=\"portrait clearfix\"><span class=\"caption pull-left\">头像</span><div class=\"pull-right\"><div class=\"clearfix\"><div class=\"func-zone pull-left\">");
if ((user.avatar))
{
buf.push("<img" + (jade.attr("src", '' + (user.avatar) + '', true, false)) + " alt=\"用户头像\"/>");
}
else
{
buf.push("<img src=\"/img/account.png\" alt=\"用户头像\"/>");
}
buf.push("</div><div class=\"action pull-right\"><a class=\"portraitUpload\">重新上传<i class=\"icon icon-double-arrows\"></i><input type=\"file\" name=\"avatar\" data-url=\"/hr/user/editAvatar\" id=\"portraitUpload\"/></a></div></div></div></div></li><li><div class=\"name clearfix\"><span class=\"caption pull-left\">姓名</span><div class=\"pull-right\"><div class=\"clearfix display\"><span class=\"func-zone pull-left word-omit\">" + (jade.escape((jade_interp = user.name) == null ? '' : jade_interp)) + "</span><span class=\"action pull-right\"><a>修改姓名<i class=\"icon icon-double-arrows\"></i></a></span></div><div class=\"clearfix edit hide\"><span class=\"func-zone pull-left\"><input name=\"name\" type=\"text\"" + (jade.attr("value", '' + (user.name) + '', true, false)) + "/><span class=\"back-error hidden\">* 错误提示信息</span></span><span class=\"action pull-right\"><a>保存</a></span></div></div></div></li><li><div class=\"pos clearfix\"><span class=\"caption pull-left\">职位</span><div class=\"pull-right\"><div class=\"clearfix display\"><span class=\"func-zone pull-left word-omit\">" + (jade.escape((jade_interp = user.position_name) == null ? '' : jade_interp)) + "</span><span class=\"action pull-right\"><a>修改职位<i class=\"icon icon-double-arrows\"></i></a></span></div><div class=\"clearfix edit hide\"><span class=\"func-zone pull-left\"><input name=\"position\" type=\"text\"" + (jade.attr("value", '' + (user.position_name) + '', true, false)) + "/><span class=\"back-error hidden\">* 错误提示信息</span></span><span class=\"action pull-right\"><a>保存</a></span></div></div></div></li><li><div class=\"password clearfix\"><span class=\"caption pull-left\">密码</span><div class=\"pull-right\"><div class=\"clearfix\"><span class=\"func-zone pull-left\">已设置密码</span><span class=\"action pull-right\"><a class=\"edit-pwd\">重置密码<i class=\"icon icon-double-arrows\"></i></a></span></div></div></div></li><li><div class=\"phone clearfix\"><span class=\"caption pull-left\">手机号</span><div class=\"pull-right\"><div class=\"clearfix\"><span class=\"func-zone pull-left\">" + (jade.escape((jade_interp = user.phone) == null ? '' : jade_interp)) + "</span><span class=\"action pull-right\"><a class=\"edit-phone\">修改手机号<i class=\"icon icon-double-arrows\"></i></a></span></div></div></div></li><li><div class=\"email clearfix\"><span class=\"caption pull-left\">邮箱</span><div class=\"pull-right\"><div class=\"clearfix\"><span class=\"func-zone pull-left\">" + (jade.escape((jade_interp = user.email) == null ? '' : jade_interp)) + "</span><span class=\"action pull-right\"><a class=\"edit-email\">修改邮箱<i class=\"icon icon-double-arrows\"></i></a></span></div></div></div></li><li><div class=\"wechat clearfix\"><span class=\"caption pull-left\">微信账号</span><div class=\"pull-right\"><div class=\"clearfix\">");
if ( user.is_bind_wechat !== 0)
{
buf.push("<span class=\"func-zone pull-left\">已绑定微信账号</span>");
}
else
{
buf.push("<span class=\"func-zone pull-left\">未绑定微信账号</span>");
}
buf.push("<span class=\"action pull-right\">");
if ( user.is_bind_wechat === 0)
{
buf.push("<a>微信绑定<i class=\"icon icon-double-arrows\"></i></a>");
}
buf.push("</span></div></div></div></li></ul></form>");}.call(this,"user" in locals_for_with?locals_for_with.user:typeof user!=="undefined"?user:undefined));;return buf.join("");
}