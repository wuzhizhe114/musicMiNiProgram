//index.js
//获取应用实例
const app = getApp()
// 设置slider的宽度，用于计算中间位置
const sliderWidth = 50

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    // 搜索
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    inputShowed: false,
    inputVal: "",
    // tab栏切换
    tabs: ["歌手", "个性推荐", "排行榜", "歌单"],
    activeIndex: 1,
    sliderOffset: 1,
    sliderLeft: 0,
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
    // 图片放大
    picPreview: {
      isShow: true,
      src: '',
    }
  },
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
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
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
        src:''
      }
    })
  },
  demo: function (){

  },
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
