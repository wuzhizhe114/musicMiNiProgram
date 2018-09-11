const util = require('../../utils/util.js');
//index.js
//获取应用实例
const app = getApp()
// 设置slider的宽度，用于计算中间位置
const sliderWidth = 50
let hostname = 'http://localhost:3000/'
// let hostname = 'https://f78f9f6c.ngrok.io/'

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    goTopBg:'#827f2e',
    isShowGoTop: true,
    // 搜索
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    inputShowed: false,
    inputVal: "",
    // tab栏切换
    tabs: ["歌手", "个性推荐", "排行榜", "歌单"],
    activeIndex: 1,
    sliderOffset: 1,
    sliderLeft: 0,
    // 歌手 start
    singerLanuageIndex: 0, // 语种
    singerLanuageList: ['华语', '欧美', '日本', '韩国', '其他'],
    singerList: [{
        src: '../../images/singer1.jpg',
        text: 'G.E.M.邓紫棋'
      },
      {
        src: '../../images/singer2.jpg',
        text: '林俊杰'
      },
      {
        src: '../../images/singer3.jpg',
        text: '薛之谦'
      },
      {
        src: '../../images/singer1.jpg',
        text: 'G.E.M.邓紫棋'
      },
      {
        src: '../../images/singer2.jpg',
        text: '林俊杰'
      },
      {
        src: '../../images/singer3.jpg',
        text: '薛之谦'
      },
      {
        src: '../../images/singer1.jpg',
        text: 'G.E.M.邓紫棋'
      },
      {
        src: '../../images/singer2.jpg',
        text: '林俊杰'
      },
      {
        src: '../../images/singer3.jpg',
        text: '薛之谦'
      }
    ],
    // 分类
    singerSortIndex: 0,
    singerSortList: [{
        text: '男歌手',
        no: '1001'
      },
      {
        text: '女歌手',
        no: '1002'
      },
      {
        text: '乐队/组合',
        no: '1003'
      }
    ],
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
    grids: [{
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
    recommendList: [{
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
    rankingTypeList: ['云音乐新歌榜', '音乐热歌榜', '网易原创歌曲榜', '音乐飙升榜', '音乐电音榜', '排行榜周榜', '国Billboard周榜', 'V嗨榜', 'unes榜', 'Hit FM Top榜', '日本Oricon周榜', '韩国Melon排行榜周榜', '韩国Mnet排行榜周榜', '韩国Melon原声周榜', '中国TOP排行榜(港台榜)', '中国TOP排行榜(内地榜)', '香港电台中文歌曲龙虎榜', '华语金曲榜', '中国嘻哈榜', '法国 NRJ EuroHot 30周榜', '台湾Hito排行榜', 'eatport全球电子舞曲榜', '云音乐ACG音乐榜', '云音乐嘻哈榜'],
    rankingTitle: '云音乐新歌榜',
    rankingList: [{
        src: '../../images/1.png',
        name: '开始懂了',
        duration: '03:12',
        author: '孙燕姿'
      },
      {
        src: '../../images/1.png',
        name: '开始懂了',
        duration: '03:12',
        author: '孙燕姿'
      }
    ],
    // 排行榜 end 

    // 歌单 start
    songListType: [
      ['全部', '语种', '风格', '场景', '情感', '主题'],
      ['']
    ],
    songListIndex: [0, 0],
    songList: [{
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
    songListRecomList: [{
        text: '华语',
        pos: [1, 0]
      },
      {
        text: '粤语',
        pos: [1, 1]
      },
      {
        text: '摇滚',
        pos: [2, 1]
      },
      {
        text: '轻音乐',
        pos: [2, 7]
      },
      {
        text: '流行',
        pos: [2, 0]
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
  showInput: function() {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function() {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function() {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function(e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  // 搜索框 end
  // tab 栏点击事件
  tabClick: function(e) {
    var that = this;
    // console.log(e.currentTarget)
    that.setData({
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
    switch (e.currentTarget.id) {
      case '0':
        that.getData({
          path: 'artist/list?cat=1001',
          method: 'GET',
          callback: function(res) {
            // console.log(res)
            that.setData({
              singerList: res.artists
            })
          }
        })
        break;
      case '1':
        that.getData({
          path: 'personalized',
          method: 'GET',
          callback: function(res) {
            // console.log(res);
            that.setData({
              recommendList: res.result
            })
          }
        });
        break;
      case '2':
        that.getData({
          path: 'top/list?idx=0',
          method: 'GET',
          callback: function(res) {
            // console.log(res)
            // 转换歌曲时间
            res.playlist.tracks.forEach(function(ele, i) {
              ele['duration'] = util.formatSongDuration(ele.dt);
            });

            // console.log(res.playlist.tracks)

            that.setData({
              rankingTitle: res.playlist.name,
              rankingList: res.playlist.tracks
            })
          }
        })
        break;
      case '3':
        that.getData({
          path: 'top/playlist/highquality?limit=30',
          method: 'GET',
          callback: function(res) {
            // console.log(res)
            that.setData({
              songList: res.playlists
            })
          }
        })
        break;
    }
  },
  // 歌手 start
  // 筛选 切换选择
  filterSwitchClick: function(e) {
    var that = this;
    // console.log(e.currentTarget)
    var obj = {};
    // 根据类型变更索引
    switch (e.currentTarget.dataset['type']) {
      // 歌手 语种筛选项
      case 'singerLan':
        obj['singerLanuageIndex'] = e.currentTarget.dataset['id'];
        switch (e.currentTarget.dataset['id']) {
          case 0:
            this.setData({
              singerSortList: [{
                  text: '男歌手',
                  no: '1001'
                },
                {
                  text: '女歌手',
                  no: '1002'
                },
                {
                  text: '乐队/组合',
                  no: '1003'
                }
              ]
            })
            break;
          case 1:
            // console.log(e.currentTarget.dataset['id'])
            this.setData({
              singerSortList: [{
                  text: '男歌手',
                  no: '2001'
                },
                {
                  text: '女歌手',
                  no: '2002'
                },
                {
                  text: '乐队/组合',
                  no: '2003'
                }
              ]
            })
            break;
          case 2:
            this.setData({
              singerSortList: [{
                  text: '男歌手',
                  no: '6001'
                },
                {
                  text: '女歌手',
                  no: '6002'
                },
                {
                  text: '乐队/组合',
                  no: '6003'
                }
              ]
            })
            break;
          case 3:
            this.setData({
              singerSortList: [{
                  text: '男歌手',
                  no: '7001'
                },
                {
                  text: '女歌手',
                  no: '7002'
                },
                {
                  text: '乐队/组合',
                  no: '7003'
                }
              ]
            })
            break;
          case 4:
            this.setData({
              singerSortList: [{
                  text: '男歌手',
                  no: '4001'
                },
                {
                  text: '女歌手',
                  no: '4002'
                },
                {
                  text: '乐队/组合',
                  no: '4003'
                }
              ]
            })
            break;
        }

        // console.log(that.data.singerSortList[that.data.singerSortIndex].no)
        that.getData({
          path: 'artist/list?cat=' + that.data.singerSortList[that.data.singerSortIndex].no,
          method: 'GET',
          callback: function(res) {
            // console.log(res)
            that.setData({
              singerList: res.artists
            })
          }
        })
        break;
        // 歌手 分类筛选项
      case 'singerSort':
        // console.log(e)
        obj['singerSortIndex'] = e.currentTarget.dataset['id'];
        that.getData({
          path: 'artist/list?cat=' + e.currentTarget.dataset['no'],
          method: 'GET',
          callback: function(res) {
            // console.log(res)
            that.setData({
              singerList: res.artists
            })
          }
        })
        break;
        // 歌单 类型推荐项
      case 'slRecomm':
        obj['songListRecomIndex'] = e.currentTarget.dataset['id'];
        // obj['songListIndex'] = e.currentTarget.dataset['pos']
        var target = {
          detail: {
            column: 0,
            value: e.currentTarget.dataset['pos'][0]
          }
        }
        this.bindSongListTypeColChange(target)
        target = {
          detail: {
            column: 1,
            value: e.currentTarget.dataset['pos'][1]
          }
        }
        this.bindSongListTypeColChange(target)

        // console.log(e.currentTarget.dataset['text'])
        that.getData({
          path: 'top/playlist?cat=' + e.currentTarget.dataset['text'],
          method: 'GET',
          callback: function(res) {
            // console.log(res);
            that.setData({
              songList: res.playlists
            })
          }
        });
        break;
    }
    this.setData(obj);
  },
  // 歌手 end

  // 排行榜 start
  bindRankingTypeChange: function(e) {
    var that = this;
    console.log(e)
    // this.setData({
    //   rankingTypeIndex: e.detail.value,
    // })
    that.getData({
      path: 'top/list?idx=' + e.detail.value,
      method: 'GET',
      callback: function(res) {
        console.log(res)
        // 转换歌曲时间
        res.playlist.tracks.forEach(function(ele, i) {
          ele['duration'] = util.formatSongDuration(ele.dt);
        });

        // console.log(res.playlist.tracks)

        that.setData({
          rankingTypeIndex: e.detail.value,
          rankingTitle: res.playlist.name,
          rankingList: res.playlist.tracks
        })
      }
    })
  },
  // 排行榜 end

  // 歌单 start
  bindSongListTypeChange: function(e) {
    var that = this;
    // console.log(e)
    // console.log('picker发送选择改变，携带值为', e.detail.value)
    var recommIndex = null;
    // console.log(this.data.songListRecomList)
    that.data.songListRecomList.forEach(function(item, i) {
      if (item.pos.join('') === e.detail.value.join('')) {
        recommIndex = i;
      } else {

      }
    });
    that.setData({
      songListIndex: e.detail.value,
      songListRecomIndex: recommIndex
    })
    let tag = that.data.songListType[1][e.detail.value[1]] == '' ? '全部' : that.data.songListType[1][e.detail.value[1]]
    // console.log(tag)
    that.getData({
      path: 'top/playlist?cat=' + tag,
      method: 'GET',
      callback: function(res) {
        // console.log(res);
        that.setData({
          songList: res.playlists
        })
      }
    });
  },
  bindSongListTypeColChange: function(e) {
    // console.log(e);
    // console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
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
  preViewPic: function(e) {
    var that = this;
    console.log(e.currentTarget.dataset['src'])
    that.setData({
      picPreview: {
        isShow: false,
        src: e.currentTarget.dataset['src']
      }
    })
  },
  preViewPicHide: function() {
    this.setData({
      picPreview: {
        isShow: true,
        src: ''
      }
    })
  },
  // 图片预览 end

  // 发送请求
  getData: function(params) {
    var that = this;
    wx.showLoading({
      title: '加载中...',
      mask: true
    })
    wx.request({
      url: hostname + params.path,
      type: params.method,
      data: params.data,
      header: {
        'content-type': 'application/json'
      },
      success: function(res) {
        // console.log(res)
        wx.hideLoading()

        if (res.data.code == 200) {
          // that.setData({
          //   recommendList: res.data.result
          // })
          params.callback(res.data);
        } else {
          wx.showModal({
            content: '状态码：' + res.data.code,
          })
        }
      },
      fail: function(err) {
        wx.hideLoading();
        wx.showModal({
          content: 'error：' + JSON.stringify(err),
          showCancel: false,
          success: function(res) {
            if (res.confirm) {
              // console.log('用户点击确定')
            }
          }
        });
      }
    })
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
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
    } else if (this.data.canIUse) {
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

    // 个性推荐 歌单推荐
    that.getData({
      path: 'personalized',
      method: 'GET',
      data: {

      },
      callback: function(res) {
        console.log(res);
        that.setData({
          recommendList: res.result
        })
      }
    });
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  goTop: function(e){
    // console.log(e);
    let that = this;
    if (that.data.goTopBg == '#827f2e'){
      that.setData({
        goTopBg:'#a8a546'
      })
    }else{
      that.setData({
        goTopBg: '#827f2e'
      })
    }
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 300
    })
  },
  onPageScroll: function (e) {
    // console.log(e);
    let flag = null;
    if(e.scrollTop > 100){
      flag = false;
    }else{
      flag = true;
    }
    // console.log(flag)
    this.setData({
      isShowGoTop: flag
    })
  }
})