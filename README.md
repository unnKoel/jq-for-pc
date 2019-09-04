# gt-pc-2

 即派pc第2版
 
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

3.js变量采用驼峰式命名，变量和函数的命名要有逻辑意义

4.脚本语句末尾要有分号"；"

5.js的引入要放在body的尾部

6.最好使用var声明js变量，减少全局变量

7.html中必须引入 Doctype,<!DOCTYPE html>

8.css加载放在文件head部分

9.css类名也以"-"号分隔。选择器单独占一行，每个属性占一行。属性声明要有缩进。 

## 页面统计
1. 登录 - evan - http://www.geetemp.com/login.html
2. 注册 - evan - http://www.geetemp.com/signup.html
3. 找回密码 - evan - http://www.geetemp.com/getpassword.html
4. 首页 - common - http://www.geetemp.com/index.html
5. 企业展示页 - evan - http://www.geetemp.com/enterprise.html
6. 租人才页 - evan - http://www.geetemp.com/talents.html
7. 人才详情页 - common - http://www.geetemp.com/profile.html
8. 人才库页 - evan - http://www.geetemp.com/talentshome.html
9. 派服务页 - evan - http://www.geetemp.com/service.html
10. 账号设置页 - common - http://www.geetemp.com/setting.html
11. 我的订单页 - common - http://www.geetemp.com/orders.html
12. 成功案例页 - common - http://www.geetemp.com/cases.html
13. 关于我们页 - common - http://www.geetemp.com/aboutus.html