var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  jade = require('gulp-jade'),
  less = require('gulp-less'),
  cleanCSS = require('gulp-clean-css'),
  imagemin = require('gulp-imagemin'),
  pngquant = require('imagemin-pngquant'),
  rename = require('gulp-rename'),
  htmlreplace = require('gulp-html-replace'),
  del = require('del'),
  livereload = require('gulp-livereload'),
  data = require('gulp-data'),
  sequence = require('gulp-sequence'),
  path = require('path'),
  rev = require('gulp-rev'),
  revCollector = require('gulp-rev-collector'),
  sourcemaps = require('gulp-sourcemaps'),
  connect = require('gulp-connect'),
  merge = require('merge-stream'),
  spritesmith = require('gulp.spritesmith'),
  findlinks = require('./findlinks'),
  buffer = require('vinyl-buffer');
// path = require('path');

gulp.task('sprite', function () {
  var spriteData = gulp.src('assets/img/icon-*.png').pipe(spritesmith({
    imgName: 'icons.png',
    cssName: 'icons.css',
    padding: 2,
    cssTemplate: 'assets/css/iconTemplate.css.handlebars'
  }));
  // Pipe image stream through image optimizer and onto disk
  var imgStream = spriteData.img
    .pipe(buffer())
    .pipe(gulp.dest('assets/img/'));

  // Pipe CSS stream through CSS optimizer and onto disk
  var cssStream = spriteData.css
    .pipe(rename('icons.less'))
    .pipe(gulp.dest('assets/css/'));

  // Return a merged stream to handle both `end` events
  return merge(imgStream, cssStream);
});

gulp.task('less', ['less-component'], function () {
  return gulp.src('assets/css/special/*.less')
    .pipe(less({
      paths: ['assets/css']
    }))
    .pipe(gulp.dest('dev/css/special'))
    .pipe(livereload());
});

gulp.task('less-component', function () {
  return gulp.src('assets/css/component/*.less')
    .pipe(less({
      paths: ['assets/css']
    }))
    .pipe(gulp.dest('dev/css/component'))
    .pipe(livereload());
});

gulp.task('img', function () {
  return gulp.src('assets/img/**/*')
    .pipe(gulp.dest('dev/img'))
    .pipe(livereload());
});

gulp.task('js', function () {
  return gulp.src('assets/js/**/*.js')
    .pipe(gulp.dest('dev/js'))
    .pipe(livereload());
});

gulp.task('html', function () {
  return gulp.src(['assets/view/*.jade'])
    .pipe(data(function (file) {
      var data = {};
      data.fileName = path.basename(file.path, '.jade');
      return data;
    }))
    .pipe(jade())
    .pipe(gulp.dest('dev'))
    .pipe(livereload());
});

gulp.task('clean', function () {
  return del('dev');
});

/**
 *  jade template compile place here
 */
gulp.task('tpl-index-candi', function () {
  return gulp.src(['assets/view/template/tpl-index-candi.jade'])
    .pipe(jade({
      client: true,
      name: 'tplIndexCandi'
    }))
    .on('error', function (err) {
      console.log('-- tpl-index-candi');
      console.log(err);
      console.log('--/tpl-index-candi');
    })
    .pipe(gulp.dest('assets/js/template'))
});

gulp.task('tpl-index-client', function () {
  return gulp.src(['assets/view/template/tpl-index-client.jade'])
    .pipe(jade({
      client: true,
      name: 'tplIndexClient'
    }))
    .on('error', function (err) {
      console.log('-- tpl-index-client');
      console.log(err);
      console.log('--/tpl-index-client');
    })
    .pipe(gulp.dest('assets/js/template'))
});

gulp.task('tpl-talents-list', function () {
  return gulp.src(['assets/view/template/tpl-talents-list.jade'])
    .pipe(jade({
      client: true,
      name: 'tplTalentsList'
    }))
    .on('error', function (err) {
      console.log('-- tpl-talents-list');
      console.log(err);
      console.log('--/tpl-talents-list');
    })
    .pipe(gulp.dest('assets/js/template'))
});

gulp.task('tpl-order-list', function () {
  return gulp.src(['assets/view/template/tpl-orders-list.jade'])
    .pipe(jade({
      client: true,
      name: 'tplOrderList'
    }))
    .on('error', function (err) {
      console.log('-- tpl-order-list');
      console.log(err);
      console.log('--/tpl-order-list');
    })
    .pipe(gulp.dest('assets/js/template'))
});

gulp.task('tpl-profile-fence', function () {
  return gulp.src(['assets/view/template/tpl-profile-fence.jade'])
    .pipe(jade({
      client: true,
      name: 'tplProfileFence'
    }))
    .on('error', function (err) {
      console.log('-- tpl-profile-fence');
      console.log(err);
      console.log('--/tpl-profile-fence');
    })
    .pipe(gulp.dest('assets/js/template'))
});

gulp.task('tpl-profile-main', function () {
  return gulp.src(['assets/view/template/tpl-profile-main.jade'])
    .pipe(jade({
      client: true,
      name: 'tplProfileMain'
    }))
    .on('error', function (err) {
      console.log('-- tpl-profile-main');
      console.log(err);
      console.log('--/tpl-profile-main');
    })
    .pipe(gulp.dest('assets/js/template'))
});

gulp.task('tpl-profile-popup-order', function () {
  return gulp.src(['assets/view/template/tpl-profile-popup-order.jade'])
    .pipe(jade({
      client: true,
      name: 'tplProfilePopupOrder'
    }))
    .on('error', function (err) {
      console.log('-- tpl-profile-popup-order');
      console.log(err);
      console.log('--/tpl-profile-popup-order');
    })
    .pipe(gulp.dest('assets/js/template'))
});

gulp.task('tpl-profile-popup-send', function () {
  return gulp.src(['assets/view/template/tpl-profile-popup-send.jade'])
    .pipe(jade({
      client: true,
      name: 'tplProfilePopupSend'
    }))
    .on('error', function (err) {
      console.log('-- tpl-profile-popup-send');
      console.log(err);
      console.log('--/tpl-profile-popup-send');
    })
    .pipe(gulp.dest('assets/js/template'))
});

gulp.task('tpl-setting-main', function () {
  return gulp.src(['assets/view/template/tpl-setting-main.jade'])
    .pipe(jade({
      client: true,
      name: 'tplSettingMain'
    }))
    .on('error', function (err) {
      console.log('-- tpl-setting-main');
      console.log(err);
      console.log('--/tpl-setting-main');
    })
    .pipe(gulp.dest('assets/js/template'))
});

gulp.task('tpl-enterprise', function () {
  return gulp.src(['assets/view/template/tpl-enterprise.jade'])
    .pipe(jade({
      client: true,
      name: 'tplEnterprise'
    }))
    .on('error', function (err) {
      console.log('-- tpl-enterprise');
      console.log(err);
      console.log('--/tpl-enterprise');
    })
    .pipe(gulp.dest('assets/js/template'))
});

gulp.task('tpl-talentshome-list', function () {
  return gulp.src(['assets/view/template/tpl-talentshome-list.jade'])
    .pipe(jade({
      client: true,
      name: 'tplTalentsHomeList'
    }))
    .on('error', function (err) {
      console.log('-- tpl-enterprise');
      console.log(err);
      console.log('--/tpl-enterprise');
    })
    .pipe(gulp.dest('assets/js/template'))
});

gulp.task('tpl-offshore-rentInfo', function () {
  return gulp.src(['assets/view/template/tpl-offshore-rentInfo.jade'])
    .pipe(jade({
      client: true,
      name: 'tplOffshoreRentInfo'
    }))
    .on('error', function (err) {
      console.log('-- tpl-offshore-rentInfo');
      console.log(err);
      console.log('--/tpl-offshore-rentInfo');
    })
    .pipe(gulp.dest('assets/js/template'))
});

gulp.task('tpl-offshore-rules', function () {
  return gulp.src(['assets/view/template/tpl-offshore-rules.jade'])
    .pipe(jade({
      client: true,
      name: 'tplOffshoreRules'
    }))
    .on('error', function (err) {
      console.log('-- tpl-offshore-rules');
      console.log(err);
      console.log('--/tpl-offshore-rules');
    })
    .pipe(gulp.dest('assets/js/template'))
});

gulp.task('tpl-guide', function () {
  return gulp.src(['assets/view/template/tpl-guide.jade'])
    .pipe(jade({
      client: true,
      name: 'tplGuide'
    }))
    .on('error', function (err) {
      console.log('-- tpl-guide');
      console.log(err);
      console.log('--/tpl-guide');
    })
    .pipe(gulp.dest('assets/js/template'))
});

gulp.task('tpl-talents-table', function () {
  return gulp.src(['assets/view/template/tpl-talents-table.jade'])
    .pipe(jade({
      client: true,
      name: 'tplTalentsTable'
    }))
    .on('error', function (err) {
      console.log('-- tpl-talents-table');
      console.log(err);
      console.log('--/tpl-talents-table');
    })
    .pipe(gulp.dest('assets/js/template'))
});

gulp.task('template',
  ['tpl-index-candi', 'tpl-index-client', 'tpl-talents-list', 'tpl-guide',
    'tpl-talents-table',
    'tpl-order-list',
    'tpl-talents-table',
    'tpl-profile-fence', 'tpl-profile-main',
    'tpl-profile-popup-order', 'tpl-profile-popup-send',
    'tpl-setting-main', 'tpl-enterprise', 'tpl-talentshome-list', 'tpl-offshore-rentInfo', 'tpl-offshore-rules']);

gulp.task('dev', sequence('sprite', ['less', 'img', 'js', 'html', 'template']));

gulp.task('watch', ['dev'], function () {
  // Create LiveReload server
  livereload.listen();

  gulp.watch(['assets/css/**/*.less'], ['less']);
  gulp.watch(['assets/img/**/*'], ['img']);
  gulp.watch(['assets/js/**/*.js'], ['js']);
  gulp.watch(['assets/view/**/*.jade'], ['html']);
});

gulp.task('server', ['watch'], function () {
  connect.server({
    root: 'dev',
    port: 8000,
    host: 'localhost'
  })
});

// build for release
gulp.task('rel-js', function () {
  return gulp.src(['dev/*.html', '!dev/pact.html', '!dev/uikits.html'])
    .pipe(findlinks({match: 'js'}))
    .pipe(uglify(
      {
        compress: {screw_ie8: false},
        mangle: {screw_ie8: false},
        output: {screw_ie8: false}
      }
    ))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('rel-html', function () {
  return gulp.src(['dev/*.html', '!dev/uikits.html'])
    .pipe(htmlreplace({
      'index': '/js/index.min.js',
      'aboutus': '/js/aboutus.min.js',
      'cases': '/js/cases.min.js',
      'clause': '/js/clause.min.js',
      'enterprise': '/js/enterprise.min.js',
      'getpassword': '/js/getpassword.min.js',
      'login': '/js/login.min.js',
      'orders': '/js/orders.min.js',
      'profile': '/js/profile.min.js',
      'service': '/js/service.min.js',
      'setting': '/js/setting.min.js',
      'signup': '/js/signup.min.js',
      'talents': '/js/talents.min.js',
      'talentshome': '/js/talentshome.min.js',
      'offshore': '/js/offshore.min.js',
      'offshoreGoods': '/js/offshoreGoods.min.js'
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('rel-css', function () {
  return gulp.src(['dev/css/**/*.css', '!dev/css/special/uikits.css'])
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('rel-img', function () {
  return gulp.src('dev/img/*')
    .pipe(imagemin({
      progressive: true,
      use: [pngquant()]
    }))
    .pipe(gulp.dest('dist/img'));
});

gulp.task('dist', sequence('dev', ['rel-js', 'rel-css', 'rel-img', 'rel-html']));

//build with css/javascript version for release
gulp.task('rel-js-version', function () {
  return gulp.src('dist/js/*.js')
    .pipe(rev())
    .pipe(gulp.dest('dist/js'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('rev/js'));
});

gulp.task('rel-img-version', function () {
  return gulp.src('dist/img/*')
    .pipe(rev())
    .pipe(gulp.dest('dist/img'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('rev/img'));
});

gulp.task('rel-css-version', function () {
  return gulp.src('dist/css/**/*.css')
    .pipe(rev())
    .pipe(gulp.dest('dist/css'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('rev/css'));
});

gulp.task('rel-replace-html-link', function () {
  return gulp.src(['rev/**/*.json', 'dist/*.html'])
    .pipe(revCollector({
      replaceReved: true
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('rel-replace-css-link', function () {
  return gulp.src(['rev/img/*.json', 'dist/css/**/*'])
    .pipe(revCollector({
      replaceReved: true
    }))
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('rel-replace-js-link', function () {
  return gulp.src(['rev/img/*.json', 'dist/js/*'])
    .pipe(revCollector({
      replaceReved: true
    }))
    .pipe(gulp.dest('dist/js/'));
});

gulp.task('clean-version', function () {
  del(['dist/js/*.min.js', '!dist/js/*-*.min.js', 'dist/css/**/*.css', '!dist/css/**/*-*.css']);
});

gulp.task('clean', function () {
  del(['dev', 'dist']);
});

gulp.task('dist-version', sequence('clean', 'dist', 'rel-img-version', ['rel-replace-css-link', 'rel-replace-js-link'], ['rel-js-version', 'rel-css-version'],
  'clean-version', 'rel-replace-html-link'));