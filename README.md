
# 音乐-微信小程序（原生开发）

### 借助工具：

- 网易云音乐API：[https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=neteasecloudmusicapi](https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=neteasecloudmusicapi "网易云音乐API")
- 服务器反向代理（ngrok）：[https://ngrok.com/](https://ngrok.com/ "服务器反向代理")
- 参照作品：[https://github.com/MengZhaoFly/wechatApp-netease_cloudmusic](https://github.com/MengZhaoFly/wechatApp-netease_cloudmusic)

### 引入 weui

- GitHub地址：[https://github.com/Tencent/weui-wxss/](https://github.com/Tencent/weui-wxss/)

	直接在app.wxss 中全局引入 weui.wxss

### 底部导航栏配置

	"tabBar": {
	    "backgroundColor": "#524b38",  // 导航栏背景
	    "color": "#a7a7a7",   // 文字颜色
	    "selectedColor": "#ffffff",  // 选中文字颜色
	    "list": [
	      {
	        "iconPath": "./images/find.png",  // 默认图标路径
	        "selectedIconPath": "./images/find1.png",  // 选中图标路径 
	        "pagePath": "pages/index/index",  // 跳转页面路径
	        "text": "发现音乐"  // 导航文字
	      },
	      {
	        "iconPath": "./images/my.png",
	        "selectedIconPath": "./images/my1.png",
	        "pagePath": "pages/my/my",
	        "text": "我的音乐"
	      },
	      {
	        "iconPath": "./images/now.png",
	        "selectedIconPath": "./images/now1.png",
	        "pagePath": "pages/play/play",
	        "text": "正在播放"
	      },
	      {
	        "iconPath": "./images/account.png",
	        "selectedIconPath": "./images/account1.png",
	        "pagePath": "pages/account/account",
	        "text": "账号"
	      }
	    ]
	  }

- 更多配置：[https://developers.weixin.qq.com/miniprogram/dev/framework/config.html](https://developers.weixin.qq.com/miniprogram/dev/framework/config.html)