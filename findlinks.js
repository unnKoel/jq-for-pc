/**
 * Created by common on 2016/12/19.
 */
'use strict';

var through = require('through2'),
    path = require('path'),
    Concat = require('concat-with-sourcemaps'),
    vfs = require('vinyl-fs');
var File = require('vinyl');
const vinylFile = require('vinyl-file');


module.exports = function (opt) {
    opt = opt || {};

    function buildLinks(file, enc, cb) {
        if (file.isNull()) {
            cb();
            return;
        }
        if (file.isStream()) {
            this.emit('error', new Error('gulp-concat: Streaming not supported'));
            cb();
            return;
        }

        var distFileName = path.basename(file.path, '.html');
        var html = file.contents.toString();
        var pattern;
        if (opt.match === 'js') {
            pattern = /<script.*?src="(.*?)\.js".*?/gi;
        } else {
            pattern = /<link.*?href="(.*?)\.css"?/gi;
        }
        var b,
            handledLinkList = [];
        while (b = pattern.exec(html)) {
            var relPath = 'dev' + b[1] + '.js';
            console.log(relPath);
            handledLinkList.push(relPath);
        }
        var concatFileName = distFileName.toString() + '.js';
        var concat = new Concat(false, concatFileName, '\n');
        for (var i = 0; i < handledLinkList.length; i++) {
            try {
              var handledFile = vinylFile.readSync(handledLinkList[i]);
              concat.add(handledFile.relative, handledFile.contents, handledFile.sourceMap);
            }catch (e){
              // console.log(e);
            }
        }
        var joinedFile = new File({
            cwd: '/',
            base: '/dist/',
            path: '/dist/' + concatFileName
        });
        joinedFile.contents = concat.content;
        this.push(joinedFile);
        cb();
    }

    return through.obj(buildLinks);
};