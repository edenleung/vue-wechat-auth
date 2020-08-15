const scopes = ['snsapi_base', 'snsapi_userinfo']

class WechatAuthPlugin {
  constructor (options = {}) {
    this.debug = options.debug || false
    this.app_id = options.app_id || ''
    this.scope = options.scope || scopes[0]
    this.redirect_uri = options.redirect_uri || ''
    this.login()
  }

  login () {
    if (!this.app_id) {
      throw 'The app_id option required'
    }

    if (!this.redirect_uri) {
      throw 'The redirect_uri option required'
    }

    if (!scopes.includes(this.scope)) {
      throw 'The scope option support only snsapi_base, snsapi_userinfo'
    }

    const app_id = this.app_id
    const scope = this.scope
    const app_callback = encodeURIComponent(window.location.href)
    const redirect_uri = encodeURIComponent(`${this.redirect_uri}?target=${app_callback}`)
    window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${app_id}&redirect_uri=${redirect_uri}&response_type=code&scope=${scope}#wechat_redirect`
  }

  callback() {}
}

const VueWechatAuth = {
  install (Vue, Options) {
    Vue.prototype.$wechatAuth = new WechatAuthPlugin(Options)
  }
}

export default VueWechatAuth
