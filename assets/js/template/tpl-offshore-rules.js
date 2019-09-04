function tplOffshoreRules(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (promotes, undefined) {
buf.push("<div class=\"rule-desc-wrap\"><h2><span class=\"vertical\"></span><span>服务内容</span><i class=\"icon icon-arrows-declivity\"></i></h2><ul class=\"rules\">");
// iterate promotes
;(function(){
  var $$obj = promotes;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var promote = $$obj[$index];

buf.push("<li class=\"clearfix\"><div class=\"time pull-left\"><em>租用时长 :</em><span>" + (jade.escape((jade_interp = promote.duration) == null ? '' : jade_interp)) + "</span></div><div class=\"benefit pull-right\"><em>优惠比率 :</em><span>" + (jade.escape((jade_interp = promote.promote) == null ? '' : jade_interp)) + "</span></div></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var promote = $$obj[$index];

buf.push("<li class=\"clearfix\"><div class=\"time pull-left\"><em>租用时长 :</em><span>" + (jade.escape((jade_interp = promote.duration) == null ? '' : jade_interp)) + "</span></div><div class=\"benefit pull-right\"><em>优惠比率 :</em><span>" + (jade.escape((jade_interp = promote.promote) == null ? '' : jade_interp)) + "</span></div></li>");
    }

  }
}).call(this);

buf.push("</ul></div>");}.call(this,"promotes" in locals_for_with?locals_for_with.promotes:typeof promotes!=="undefined"?promotes:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
}