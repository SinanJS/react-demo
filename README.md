# 新手入门-Reacht.js 踩坑日志

## Gulp+Babel构建开发环境
1. pakage.json中的最简单插件依赖项目如下
```js
{
  "name": "react-demos",
  "version": "1.0.0",
  "description": "This is a collection of simple demos of React.js.",
  "devDependencies": {
    "babel-preset-es2015": "^6.14.0",
    "babel-preset-react": "^6.11.1",//注意：如果没有该插件，babel不会识别jsx语法
    "gulp": "^3.9.1",
    "gulp-babel": "^6.1.2"
}
```
2.gulpfile.js
```js
var gulp = require('gulp');
var babel = require('gulp-babel');
gulp.task('jsx', function() {
    gulp.src("src/**/*.jsx")
        .pipe(babel({
            presets: ['react','es2015'] //babel识别jsx的配置项
        }))
    .pipe(gulp.dest("src"));
});
gulp.task("default",['jsx'],function(){
    gulp.watch('src/**/*.jsx',function(){
       gulp.start(['jsx']);
    });
});
```


## console控制台里的Warning及Error

<b>1. Error: _registerComponent(...): Target container is not a DOM element.</b>
就是一个找不到DOM节点的问题，用`jQuery`的`domReady`或者直接把js文件放到页面最后就好了。

<b>2.Warning: Each child in an array or iterator should have a unique "key" prop. Check the top-level render call using `<div>`. See https://fb.me/react-warning-keys for more information.</b>
