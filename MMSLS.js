/**
利用随机概率实现多账户运行

填写格式如下：


const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=24142114&pid=ccb12c4f335b61ec57aec0fb944715a6&tid=d41a820f905f28b67b38d5df65e52cee",
    "https://www.maimemo.com/share/page?uid=24142114&pid=ccb12c4f335b61ec57aec0fb944715a6&tid=d41a820f905f28b67b38d5df65e52cee",
    "https://www.maimemo.com/share/page?uid=24142114&pid=ccb12c4f335b61ec57aec0fb944715a6&tid=d41a820f905f28b67b38d5df65e52cee",
    "https://www.maimemo.com/share/page?uid=24142114&pid=ccb12c4f335b61ec57aec0fb944715a6&tid=d41a820f905f28b67b38d5df65e52cee",

  ]
=====================以上为范例！=====================

=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
 */
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=24142114&pid=d3a89b7c4fba0b125c14de37877ff74f&tid=d6e02e9f37812d3dfaa5261083e41c7a",
    "https://www.maimemo.com/share/page?uid=24142114&pid=d3a89b7c4fba0b125c14de37877ff74f&tid=d6e02e9f37812d3dfaa5261083e41c7a",
    "https://www.maimemo.com/share/page?uid=24142114&pid=d3a89b7c4fba0b125c14de37877ff74f&tid=d6e02e9f37812d3dfaa5261083e41c7a",
    "https://www.maimemo.com/share/page?uid=24142114&pid=d3a89b7c4fba0b125c14de37877ff74f&tid=d6e02e9f37812d3dfaa5261083e41c7a",
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
