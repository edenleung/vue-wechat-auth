# vue-wechat-auth

## 安装
```
$ yarn add @edenleung/vue-wechat-auth --registry=https://npm.pkg.github.com

// OR

$ npm install @edenleung/vue-wechat-auth --registry=https://npm.pkg.github.com
```

## 使用

`main.js`

```Vue

import VueWechatAuth from '@edenleung/vue-wechat-auth'

Vue.use(WechatAuth , {
  app_id: WECHAT_APPID,
  scope: 'snsapi_userinfo',
  redirect_uri: 'http://example/wechat/callback'
})

```
