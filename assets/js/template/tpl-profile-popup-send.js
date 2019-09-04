function tplProfilePopupSend(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (colleagues, undefined) {
buf.push("<div id=\"send\" class=\"popup-global\"><div class=\"header\"><h2>转发简历</h2><a class=\"close\"></a></div><div class=\"content\"><div class=\"wrap\"><div class=\"write\"><p>");
if ( colleagues.length > 0)
{
buf.push("<span class=\"select-colleague\"><i class=\"icon icon-person-green\"></i>选择我的同事</span>");
}
buf.push("</p><form><div class=\"colleague\"><div class=\"input-item\"><input type=\"text\" placeholder=\"请输入您同事的邮箱\" name=\"email\" maxlength=\"50\"/><i class=\"icon icon-email\"></i></div><p class=\"error hide\">* 错误信息</p></div><div class=\"remark\"><div class=\"input-item\"><input type=\"text\" placeholder=\"添加备注后，系统会记录为您的同事，方便下次操作...\" name=\"name\" maxlength=\"100\"/><i class=\"icon icon-pen\"></i></div><p class=\"error hide\">* 错误信息</p></div><p class=\"back-error hidden\">* 后台错误信息</p></form></div><div class=\"selector hide\"><ul>");
// iterate colleagues
;(function(){
  var $$obj = colleagues;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var colleague = $$obj[$index];

buf.push("<li><input type=\"checkbox\"/><span class=\"name\">" + (jade.escape((jade_interp = colleague.name) == null ? '' : jade_interp)) + "</span><span class=\"email\">" + (jade.escape((jade_interp = colleague.mail) == null ? '' : jade_interp)) + "</span></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var colleague = $$obj[$index];

buf.push("<li><input type=\"checkbox\"/><span class=\"name\">" + (jade.escape((jade_interp = colleague.name) == null ? '' : jade_interp)) + "</span><span class=\"email\">" + (jade.escape((jade_interp = colleague.mail) == null ? '' : jade_interp)) + "</span></li>");
    }

  }
}).call(this);

buf.push("</ul><p class=\"back-error hidden\">* 后台错误信息</p></div></div></div><div class=\"footer\"><a class=\"btn btn-hollow\">取消</a><a class=\"btn btn-main\">发送</a></div></div>");}.call(this,"colleagues" in locals_for_with?locals_for_with.colleagues:typeof colleagues!=="undefined"?colleagues:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
}