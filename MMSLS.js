/**
利用随机概率实现多账户运行

填写格式如下：


const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=24142114&pid=afa31488bb3cbb430d648be0fc55800f&tid=60f82d026e63fcf6fdbeff19b3a3d0c3",
    "https://www.maimemo.com/share/page?uid=24142114&pid=afa31488bb3cbb430d648be0fc55800f&tid=60f82d026e63fcf6fdbeff19b3a3d0c3",
    "https://www.maimemo.com/share/page?uid=24142114&pid=afa31488bb3cbb430d648be0fc55800f&tid=60f82d026e63fcf6fdbeff19b3a3d0c3",
    "https://www.maimemo.com/share/page?uid=24142114&pid=afa31488bb3cbb430d648be0fc55800f&tid=60f82d026e63fcf6fdbeff19b3a3d0c3",

  ]
=====================以上为范例！=====================

=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
 */
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=24142114&pid=0da2e268f4d42f3d1e48291bddf12b53&tid=24d9741bae40f832a840aead3d9da509",
    "https://www.maimemo.com/share/page?uid=24142114&pid=0da2e268f4d42f3d1e48291bddf12b53&tid=24d9741bae40f832a840aead3d9da509",
    "https://www.maimemo.com/share/page?uid=24142114&pid=0da2e268f4d42f3d1e48291bddf12b53&tid=24d9741bae40f832a840aead3d9da509",
    "https://www.maimemo.com/share/page?uid=24142114&pid=0da2e268f4d42f3d1e48291bddf12b53&tid=24d9741bae40f832a840aead3d9da509",
  ]
  /**
   * 生成随机数字
   * @param {number} min 最小值（包含）
   * @param {number} max 最大值（不包含）
   */
  function randomNumber(min = 0, max = 100) {
    return Math.min(Math.floor(min + Math.random() * (max - min)), max);
  }
  const MMSL_random = MMSLS[randomNumber(0, MMSLS.length)];
  
  module.exports = {
    MMSL_random
  }
