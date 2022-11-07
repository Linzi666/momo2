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
    
    "https://www.maimemo.com/share/page?uid=24142114&pid=200083dce9685bee9c78f0a8d1df4091&tid=a8788721ae1e7dc734c3d2fe8bc80b2c",
    "https://www.maimemo.com/share/page?uid=24142114&pid=200083dce9685bee9c78f0a8d1df4091&tid=a8788721ae1e7dc734c3d2fe8bc80b2c",
    "https://www.maimemo.com/share/page?uid=24142114&pid=200083dce9685bee9c78f0a8d1df4091&tid=a8788721ae1e7dc734c3d2fe8bc80b2c",
    "https://www.maimemo.com/share/page?uid=24142114&pid=200083dce9685bee9c78f0a8d1df4091&tid=a8788721ae1e7dc734c3d2fe8bc80b2c",
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
