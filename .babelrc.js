/*
 * @Author: kevinZzzzzz
 * @Date: 2023-04-14 10:09:33
 * @version: 
 * @LastEditors: kevinZzzzzz
 * @LastEditTime: 2023-04-14 17:09:45
 * @Description: Do not Edit
 * @FilePath: \js-tools-xxx\.babelrc.js
 */
module.exports = {
  presets: [
    ['@babel/preset-env', {
      // rollupjs 会处理模块，所以设置成 false
      modules: false
    }]
  ],
  plugins: [
  ]
}