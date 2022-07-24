module.exports = {
  "title": "花生在剥我的壳",
  "description": "blog",
  "dest": "public",
  "locales": {
    '/': {
      lang: 'zh-CN'
    }
  },
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/avatar.png"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  // // 插件
  plugins: {
    // 鼠标点击特效
    "cursor-effects": {
      size: 2,
      shape: 'circle',  // 点击形状: 'star', 'star' | 'circle'
      zIndex: 999999999
    },
  },
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-home"
      },
      {
        "text": "联系",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/Torn1996",
            "icon": "reco-github"
          },
           {
            "text": "掘金",
            "link": "https://juejin.cn/user/3765154924738398",
            "icon": "reco-juejin"
          }
        ]
      }
    ],
    // valineConfig: {
    //   appId: '',// your appId
    //   appKey: '', // your appKey
    // },
    "nextLinks": true,
    "prevLinks": true,
    "type": "blog",
    "subSidebar": 'auto',
    "sidebarDepth": 4,
    // 最后更新时间
    "lastUpdated": 'Last Updated',
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "掘金",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1621321614@qq.com",
        "link": "https://juejin.cn/user/3765154924738398",
        "logo": "./cat.jpg"
      }
    ],
    "logo": "/avatar.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "author": "Torn",
    "authorAvatar": "/avatar.png",
    "record": "花生壳",
    "startYear": "2022"
  },
  "markdown": {
    "lineNumbers": true
  }
}