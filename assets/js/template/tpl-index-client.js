function tplIndexClient(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (pages, undefined) {
// iterate pages
;(function(){
  var $$obj = pages;
  if ('number' == typeof $$obj.length) {

    for (var key = 0, $$l = $$obj.length; key < $$l; key++) {
      var page = $$obj[key];

buf.push("<div class=\"one-page\"><ul class=\"clearfix\">");
// iterate page
;(function(){
  var $$obj = page;
  if ('number' == typeof $$obj.length) {

    for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
      var client = $$obj[index];

if ( (index + 1) % 3 !== 0 && index < 3)
{
buf.push("<li" + (jade.attr("data-id", '' + (client.company_id) + '', true, false)) + " class=\"card pull-left first-row\"><div class=\"wrap\"><img" + (jade.attr("src", '' + (client.logo) + '', true, false)) + " alt=\"client brand logo\"/><p class=\"word-omit\">" + (jade.escape((jade_interp = client.name) == null ? '' : jade_interp)) + "</p></div></li>");
}
else if ( (index + 1) % 3 === 0 && index < 3)
{
buf.push("<li" + (jade.attr("data-id", '' + (client.company_id) + '', true, false)) + " class=\"card pull-left first-row three\"><div class=\"wrap\"><img" + (jade.attr("src", '' + (client.logo) + '', true, false)) + " alt=\"client brand logo\"/><p class=\"word-omit\">" + (jade.escape((jade_interp = client.name) == null ? '' : jade_interp)) + "</p></div></li>");
}
else if ( (index + 1) % 3 !== 0 && index >= 3)
{
buf.push("<li" + (jade.attr("data-id", '' + (client.company_id) + '', true, false)) + " class=\"card pull-left\"><div class=\"wrap\"><img" + (jade.attr("src", '' + (client.logo) + '', true, false)) + " alt=\"client brand logo\"/><p class=\"word-omit\">" + (jade.escape((jade_interp = client.name) == null ? '' : jade_interp)) + "</p></div></li>");
}
else
{
buf.push("<li" + (jade.attr("data-id", '' + (client.company_id) + '', true, false)) + " class=\"card pull-left three\"><div class=\"wrap\"><img" + (jade.attr("src", '' + (client.logo) + '', true, false)) + " alt=\"client brand logo\"/><p class=\"word-omit\">" + (jade.escape((jade_interp = client.name) == null ? '' : jade_interp)) + "</p></div></li>");
}
    }

  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;      var client = $$obj[index];

if ( (index + 1) % 3 !== 0 && index < 3)
{
buf.push("<li" + (jade.attr("data-id", '' + (client.company_id) + '', true, false)) + " class=\"card pull-left first-row\"><div class=\"wrap\"><img" + (jade.attr("src", '' + (client.logo) + '', true, false)) + " alt=\"client brand logo\"/><p class=\"word-omit\">" + (jade.escape((jade_interp = client.name) == null ? '' : jade_interp)) + "</p></div></li>");
}
else if ( (index + 1) % 3 === 0 && index < 3)
{
buf.push("<li" + (jade.attr("data-id", '' + (client.company_id) + '', true, false)) + " class=\"card pull-left first-row three\"><div class=\"wrap\"><img" + (jade.attr("src", '' + (client.logo) + '', true, false)) + " alt=\"client brand logo\"/><p class=\"word-omit\">" + (jade.escape((jade_interp = client.name) == null ? '' : jade_interp)) + "</p></div></li>");
}
else if ( (index + 1) % 3 !== 0 && index >= 3)
{
buf.push("<li" + (jade.attr("data-id", '' + (client.company_id) + '', true, false)) + " class=\"card pull-left\"><div class=\"wrap\"><img" + (jade.attr("src", '' + (client.logo) + '', true, false)) + " alt=\"client brand logo\"/><p class=\"word-omit\">" + (jade.escape((jade_interp = client.name) == null ? '' : jade_interp)) + "</p></div></li>");
}
else
{
buf.push("<li" + (jade.attr("data-id", '' + (client.company_id) + '', true, false)) + " class=\"card pull-left three\"><div class=\"wrap\"><img" + (jade.attr("src", '' + (client.logo) + '', true, false)) + " alt=\"client brand logo\"/><p class=\"word-omit\">" + (jade.escape((jade_interp = client.name) == null ? '' : jade_interp)) + "</p></div></li>");
}
    }

  }
}).call(this);

buf.push("</ul></div>");
    }

  } else {
    var $$l = 0;
    for (var key in $$obj) {
      $$l++;      var page = $$obj[key];

buf.push("<div class=\"one-page\"><ul class=\"clearfix\">");
// iterate page
;(function(){
  var $$obj = page;
  if ('number' == typeof $$obj.length) {

    for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
      var client = $$obj[index];

if ( (index + 1) % 3 !== 0 && index < 3)
{
buf.push("<li" + (jade.attr("data-id", '' + (client.company_id) + '', true, false)) + " class=\"card pull-left first-row\"><div class=\"wrap\"><img" + (jade.attr("src", '' + (client.logo) + '', true, false)) + " alt=\"client brand logo\"/><p class=\"word-omit\">" + (jade.escape((jade_interp = client.name) == null ? '' : jade_interp)) + "</p></div></li>");
}
else if ( (index + 1) % 3 === 0 && index < 3)
{
buf.push("<li" + (jade.attr("data-id", '' + (client.company_id) + '', true, false)) + " class=\"card pull-left first-row three\"><div class=\"wrap\"><img" + (jade.attr("src", '' + (client.logo) + '', true, false)) + " alt=\"client brand logo\"/><p class=\"word-omit\">" + (jade.escape((jade_interp = client.name) == null ? '' : jade_interp)) + "</p></div></li>");
}
else if ( (index + 1) % 3 !== 0 && index >= 3)
{
buf.push("<li" + (jade.attr("data-id", '' + (client.company_id) + '', true, false)) + " class=\"card pull-left\"><div class=\"wrap\"><img" + (jade.attr("src", '' + (client.logo) + '', true, false)) + " alt=\"client brand logo\"/><p class=\"word-omit\">" + (jade.escape((jade_interp = client.name) == null ? '' : jade_interp)) + "</p></div></li>");
}
else
{
buf.push("<li" + (jade.attr("data-id", '' + (client.company_id) + '', true, false)) + " class=\"card pull-left three\"><div class=\"wrap\"><img" + (jade.attr("src", '' + (client.logo) + '', true, false)) + " alt=\"client brand logo\"/><p class=\"word-omit\">" + (jade.escape((jade_interp = client.name) == null ? '' : jade_interp)) + "</p></div></li>");
}
    }

  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;      var client = $$obj[index];

if ( (index + 1) % 3 !== 0 && index < 3)
{
buf.push("<li" + (jade.attr("data-id", '' + (client.company_id) + '', true, false)) + " class=\"card pull-left first-row\"><div class=\"wrap\"><img" + (jade.attr("src", '' + (client.logo) + '', true, false)) + " alt=\"client brand logo\"/><p class=\"word-omit\">" + (jade.escape((jade_interp = client.name) == null ? '' : jade_interp)) + "</p></div></li>");
}
else if ( (index + 1) % 3 === 0 && index < 3)
{
buf.push("<li" + (jade.attr("data-id", '' + (client.company_id) + '', true, false)) + " class=\"card pull-left first-row three\"><div class=\"wrap\"><img" + (jade.attr("src", '' + (client.logo) + '', true, false)) + " alt=\"client brand logo\"/><p class=\"word-omit\">" + (jade.escape((jade_interp = client.name) == null ? '' : jade_interp)) + "</p></div></li>");
}
else if ( (index + 1) % 3 !== 0 && index >= 3)
{
buf.push("<li" + (jade.attr("data-id", '' + (client.company_id) + '', true, false)) + " class=\"card pull-left\"><div class=\"wrap\"><img" + (jade.attr("src", '' + (client.logo) + '', true, false)) + " alt=\"client brand logo\"/><p class=\"word-omit\">" + (jade.escape((jade_interp = client.name) == null ? '' : jade_interp)) + "</p></div></li>");
}
else
{
buf.push("<li" + (jade.attr("data-id", '' + (client.company_id) + '', true, false)) + " class=\"card pull-left three\"><div class=\"wrap\"><img" + (jade.attr("src", '' + (client.logo) + '', true, false)) + " alt=\"client brand logo\"/><p class=\"word-omit\">" + (jade.escape((jade_interp = client.name) == null ? '' : jade_interp)) + "</p></div></li>");
}
    }

  }
}).call(this);

buf.push("</ul></div>");
    }

  }
}).call(this);
}.call(this,"pages" in locals_for_with?locals_for_with.pages:typeof pages!=="undefined"?pages:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
}