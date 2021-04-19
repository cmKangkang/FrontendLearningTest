// const path = require('path');
const loaderUtils = require('loader-utils');
const less = require('less');

module.exports = function(source) {
  // loader 是一个方法
  // 可在config中配置
  console.log('----- handle less file begin ---');
  console.log('less ---> ', source);
  // 获取webpack.config.js中配置的options
  const options = loaderUtils.getOptions(this);
  console.log('options ---> ', options);
  const callback = this.async();
  less.render(source).then(({css, map, imports}) => {
    console.log('----- less render finished, css ---> ', css);
    callback(null, css);
  })
}