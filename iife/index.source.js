var $xxx = (function (exports) {
  'use strict';

  /*
   * @Author: kevin-zzzzzz
   * @Date: 2023-04-14 10:14:08
   * @version:
   * @LastEditors: kevinZzzzzz
   * @LastEditTime: 2023-04-14 17:57:18
   * @Description:  主项目文件汇总(请勿使用路径别名，否则会导致声明文件失效。)
   * @FilePath: \js-tools-xxx\src\index.ts
   */
  /**
   * 比较前一个版本号是否比后一个版本号高
   * example:
   * `compareVer('1.1.1', '1.2.1') => false`
   * @params firstV 比较的版本号
   * @params secV 被比较的版本号
   * @returns true or false
   */
  function compareVer(firstV, secV) {
      const firstVer = firstV.split('.');
      const secVer = secV.split('.');
      let bool = false;
      let a = true;
      bool = secVer.some((e, idx) => {
          if (Number(firstVer[idx]) < Number(e))
              a = false;
          return Number(firstVer[idx]) > Number(e);
      });
      return bool && a;
  }

  exports.compareVer = compareVer;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

})({});
