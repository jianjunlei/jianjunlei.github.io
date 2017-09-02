var path = require('path');

module.exports = {
  entry: {
    index: './js/index.js' // 入口文件
  },
  output: {
    path: path.resolve(__dirname, './output'),
    filename: '[name].js' // 打包输出的文件
  },
  module: {
    loaders: [
      {
        test: /\.js$/, // test 去判断是否为.js,是的话就是进行es6和jsx的编译
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        // query: {
        //   presets: ['es2015', 'react']
        // }
      },
      {test: /\.less$/, loader: 'style-loader!css-loader!less-loader'}, // 用!去链式调用loader
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'} // 内联的base64的图片地址，图片要小于8k，直接的url的地址则不解析
    ]
  }
};
