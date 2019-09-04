# gt-pc-2

即派 pc 第 2 版

## 项目目录结构

```
assets/                      -->源文件夹
   css/                        -->存放样式文件
      special/                   -->每个特定页面的样式
         uikits.less
   img/                        -->图片资源
   js/                         -->javascript,存放每个特定页面的js
      component/                 -->组件js
      jquery.js
      uikit.js
   view/                       -->页面jade,存放每个特定页面的jade
      partials/                  -->公共页面头尾和页面layout
         footer.jade
         header.jade
         layout.jade
      template/                  -->存放Jade模板，用于根据ajax数据生成html
      uikit.jade
dev/                          -->开发编辑目录
dist/                         -->发布编辑目录
...
```

## 编码规范

1.文件命名如需要分隔，均以"-"号分隔。文件命名以字母开头而不是数字。还有一些情况

下，需要对文件增加前后缀或特定的扩展名（比如 .min.js, .min.css），这种情况下，建

议使用点分隔符来区分。

2.添加必要的注释

3.js 变量采用驼峰式命名，变量和函数的命名要有逻辑意义

4.脚本语句末尾要有分号"；"

5.js 的引入要放在 body 的尾部

6.最好使用 var 声明 js 变量，减少全局变量

7.html 中必须引入  Doctype,<!DOCTYPE html>

8.css 加载放在文件 head 部分

9.css 类名也以"-"号分隔。选择器单独占一行，每个属性占一行。属性声明要有缩进。
