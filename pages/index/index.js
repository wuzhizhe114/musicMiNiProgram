//index.js
//获取应用实例
const app = getApp()
// 设置slider的宽度，用于计算中间位置
const sliderWidth = 50

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    // 搜索
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    inputShowed: false,
    inputVal: "",
    // tab栏切换
    tabs: ["歌手", "个性推荐", "排行榜", "歌单"],
    activeIndex: 2,
    sliderOffset: 1,
    sliderLeft: 0,
    // 歌手 start
    singerLanuageIndex: 0, // 语种
    singerLanuageList:['全部','华语','欧美','日本','韩国','其他'],
    singerList:[
      {
        src:'../../images/singer1.jpg',
        text:'G.E.M.邓紫棋'
      },
      {
        src:'../../images/singer2.jpg',
        text:'林俊杰'
      },
      {
        src:'../../images/singer3.jpg',
        text:'薛之谦'
      },
      {
        src:'../../images/singer1.jpg',
        text:'G.E.M.邓紫棋'
      },
      {
        src:'../../images/singer2.jpg',
        text:'林俊杰'
      },
      {
        src:'../../images/singer3.jpg',
        text:'薛之谦'
      },
      {
        src:'../../images/singer1.jpg',
        text:'G.E.M.邓紫棋'
      },
      {
        src:'../../images/singer2.jpg',
        text:'林俊杰'
      },
      {
        src:'../../images/singer3.jpg',
        text:'薛之谦'
      }
    ],
    // 分类
    singerSortIndex: 0,
    singerSortList:['全部','男歌手','女歌手','乐队组合'],
    // 歌手 end

    // 个性推荐 start
    // 图片轮播
    picSwiper: {
      imgUrls: [
        '../../images/slide/gongyuan.png',
        '../../images/slide/jiangnan.png',
        '../../images/slide/piaomiao.png',
        '../../images/slide/xiaoyuan.png',
        '../../images/slide/yilan.png'
      ],
      indicatorDots: true,
      autoplay: true,
      interval: 3000,
      duration: 1000
    },
    // 推荐
    grids: [
      {
        text: '私人FM',
        src: '../../images/fm.png'
      },
      {
        text: '每日歌曲推荐',
        src: '../../images/tuijian.png'
      },
      {
        text: '云音乐热歌榜',
        src: '../../images/hot.png'
      }
    ],
    recommendList: [
      {
        text: '睡在一片花海里做个美梦吧',
        src: '../../images/1.png'
      },
      {
        text: '华语｜我是成年人 但还是好想哭',
        src: '../../images/2.png'
      },
      {
        text: 'KTV麦霸必点歌曲',
        src: '../../images/3.png'
      },
      {
        text: '带酒进来听故事',
        src: '../../images/4.png'
      },
      {
        text: '两字情书：斯人若彩虹 遇上方知有',
        src: '../../images/5.png'
      },
      {
        text: '邂逅秋意，定格美丽',
        src: '../../images/6.png'
      },
    ],
    // 个性推荐 end

    // 排行榜 start 
    rankingTypeIndex: 0,
    rankingTypeList: ['音乐新歌榜','音乐热歌榜','易原创歌曲榜','音乐飙升榜','音乐电音榜','排行榜周榜','国Billboard周榜','V嗨榜','unes榜','Hit FM Top榜','日本Oricon周榜','韩国Melon排行榜周榜','韩国Mnet排行榜周榜','韩国Melon原声周榜','中国TOP排行榜(港台榜)','中国TOP排行榜(内地榜)','香港电台中文歌曲龙虎榜','华语金曲榜','中国嘻哈榜','法国 NRJ EuroHot 30周榜','台湾Hito排行榜','eatport全球电子舞曲榜','云音乐ACG音乐榜','云音乐嘻哈榜'],
    // 排行榜 end 

    // 歌单 start
    songListType: [['全部', '语种', '风格', '场景', '情感', '主题'], ['']],
    songListIndex: [0, 0],
    songList: [
      {
        text: '睡在一片花海里做个美梦吧',
        src: '../../images/1.png'
      },
      {
        text: '华语｜我是成年人 但还是好想哭',
        src: '../../images/2.png'
      },
      {
        text: 'KTV麦霸必点歌曲',
        src: '../../images/3.png'
      },
      {
        text: '带酒进来听故事',
        src: '../../images/4.png'
      },
      {
        text: '两字情书：斯人若彩虹 遇上方知有',
        src: '../../images/5.png'
      },
      {
        text: '邂逅秋意，定格美丽',
        src: '../../images/6.png'
      },
      {
        text: '带酒进来听故事',
        src: '../../images/1.png'
      },
      {
        text: '两字情书：斯人若彩虹 遇上方知有',
        src: '../../images/2.png'
      },
      {
        text: '邂逅秋意，定格美丽',
        src: '../../images/3.png'
      },
      {
        text: '带酒进来听故事',
        src: '../../images/4.png'
      },
      {
        text: '两字情书：斯人若彩虹 遇上方知有',
        src: '../../images/5.png'
      },
      {
        text: '邂逅秋意，定格美丽',
        src: '../../images/6.png'
      }
    ],
    songListRecomIndex: null,
    songListRecomList: [
      {
        text: '华语',
        pos:[1,0]
      },
      {
        text: '粤语',
        pos:[1,1]
      },
      {
        text: '摇滚',
        pos:[2,1]
      },
      {
        text: '轻音乐',
        pos:[2,7]
      },
      {
        text: '流行',
        pos:[2,0]
      },
    ],
    // 歌单 end
    // 图片放大
    picPreview: {
      isShow: true,
      src: '',
    }
  },
  // 搜索框 start
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  // 搜索框 end
  tabClick: function (e) {
    // console.log(e.currentTarget)
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
    // if(e.currentTarget.id == 2){
    //   wx.showToast({
    //     title: '待完善',
    //     icon: 'none',
    //     duration: 2000
    //   });
    // }
  },
  // 歌手 start
  // 筛选 切换选择
  filterSwitchClick: function(e){
    // console.log(e.currentTarget)
    var obj = {};
    // 根据类型变更索引
    switch (e.currentTarget.dataset['type']){
      // 歌手 语种筛选项
      case 'singerLan':
        obj['singerLanuageIndex'] = e.currentTarget.dataset['id'];
        break;
      // 歌手 分类筛选项
      case 'singerSort':
        obj['singerSortIndex'] = e.currentTarget.dataset['id'];
        break;
      // 歌单 类型推荐项
      case 'slRecomm':
        obj['songListRecomIndex'] = e.currentTarget.dataset['id'];
        // obj['songListIndex'] = e.currentTarget.dataset['pos']
        var target = {
          detail:{
            column: 0,
            value: e.currentTarget.dataset['pos'][0]
          }
        }
        this.bindSongListTypeColChange(target)
        target = {
          detail:{
            column: 1,
            value: e.currentTarget.dataset['pos'][1]
          }
        }
        this.bindSongListTypeColChange(target)
        break;
    }
    this.setData(obj);
  },
  // 歌手 end

  // 排行榜 start
  bindRankingTypeChange: function (e){
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      rankingTypeIndex: e.detail.value,
    })
  },
  // 排行榜 end

  // 歌单 start
  bindSongListTypeChange: function (e) {
    // console.log(e)
    console.log('picker发送选择改变，携带值为', e.detail.value)
    var recommIndex = null;
    // console.log(this.data.songListRecomList)
    this.data.songListRecomList.forEach(function(item,i){
      if(item.pos.join('') === e.detail.value.join('')){
        recommIndex = i;
      }
      else {
        
      }
    });
    this.setData({
      songListIndex: e.detail.value,
      songListRecomIndex: recommIndex
    })
    // console.log(this.data.songListRecomIndex)
  },
  bindSongListTypeColChange: function (e) {
    console.log(e);
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      songListType: this.data.songListType,
      songListIndex: this.data.songListIndex
    };
    data.songListIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0:
        switch (data.songListIndex[0]) {
          case 0:
            data.songListType[1] = [''];
            break;
          case 1:
            data.songListType[1] = ['华语', '粤语', '日语', '韩语', '欧美', '小语种'];
            break;
          case 2:
            data.songListType[1] = ['流行', '摇滚', '古风', '民谣', '电子', '舞曲', '说唱', '轻音乐', '爵士', '乡村', '古典', '民族', '英伦', '金属', '朋克', '蓝调', '雷鬼', '世界音乐', '拉丁', '后摇'];
            break;
          case 3:
            data.songListType[1] = ['清晨', '夜晚', '学习', '工作', '午休', '下午茶', '地铁', '驾车', '运动', '旅行', '散步', '酒吧']
            break;
          case 4:
            data.songListType[1] = ['怀旧', '清新', '浪漫', '性感', '伤感', '治愈', '放松', '孤独', '感动', '兴奋', '快乐', '安静', '思念']
            break;
          case 5:
            data.songListType[1] = ['影视原声', 'ACG', '儿童', '校园', '游戏', '70后', '80后', '90后', '网络歌曲', 'KTV', '经典', '翻唱', '吉他', '钢琴', '器乐', '榜单', '00后']
            break;
        }
        data.songListIndex[1] = 0;
        data.songListIndex[2] = 0;
        break;
    }
    this.setData(data);
  },
  // 歌单 end
  // 图片预览 start
  preViewPic: function (e) {
    var that = this;
    console.log(e.currentTarget.dataset['src'])
    that.setData({
      picPreview: {
        isShow: false,
        src: e.currentTarget.dataset['src']
      }
    })
  },
  preViewPicHide: function () {
    this.setData({
      picPreview: {
        isShow: true,
        src: ''
      }
    })
  },
  // 图片预览 end
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 9,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });


    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
