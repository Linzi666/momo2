/**
利用随机概率实现多账户运行

填写格式如下：


const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=24142114&pid=21b2401b3d80aff3486ba63354142110&tid=800aac44c9db90d33566e78a02fbe45e",
    "https://www.maimemo.com/share/page?uid=24142114&pid=21b2401b3d80aff3486ba63354142110&tid=800aac44c9db90d33566e78a02fbe45e",
    "https://www.maimemo.com/share/page?uid=24142114&pid=21b2401b3d80aff3486ba63354142110&tid=800aac44c9db90d33566e78a02fbe45e",
    "https://www.maimemo.com/share/page?uid=24142114&pid=21b2401b3d80aff3486ba63354142110&tid=800aac44c9db90d33566e78a02fbe45e",

  ]
=====================以上为范例！=====================

=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
 */
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=24142114&pid=122dee1b3261092d4037ab54b65b8028&tid=14c9bd5b6bff907b7421d740a3c99601",
    "https://www.maimemo.com/share/page?uid=24142114&pid=122dee1b3261092d4037ab54b65b8028&tid=14c9bd5b6bff907b7421d740a3c99601",
    "https://www.maimemo.com/share/page?uid=24142114&pid=122dee1b3261092d4037ab54b65b8028&tid=14c9bd5b6bff907b7421d740a3c99601",
    "https://www.maimemo.com/share/page?uid=24142114&pid=122dee1b3261092d4037ab54b65b8028&tid=14c9bd5b6bff907b7421d740a3c99601",
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
