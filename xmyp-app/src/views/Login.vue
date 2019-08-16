<template>
  <div class="xmyp-login">
    <div class="xmyp-login-wrapper">
      <h4 class="xmyp-login-wrapper-title">欢迎登陆小米有品</h4>
      <mt-field label="手机号" placeholder="请输入手机号" v-model="username"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
      <button class="xmyp-login-wrapper-btn" @click="doLogin">立即登陆</button>
       <button class="xmyp-login-wrapper-btn" @click="toRegister">注册</button>
      <p class="xmyp-login-wrapper-other">其他方式登陆</p>
      <div class="xmyp-login-wrapper__share">
        <a class="xmyp-login-wrapper__share__share1" href="https://graph.qq.com/oauth2.0/show?which=Login&display=pc&response_type=code&client_id=100284651&redirect_uri=https://account.xiaomi.com/pass/sns/login/load&state=STATE_354517">
          <i class="xmyp-login-wrapper__share__share1-wb"></i>
        </a>
        <a class="xmyp-login-wrapper__share__share2" href="https://auth.alipay.com/login/express.htm?goto=https%3A%2F%2Fmemberexprod.alipay.com%3A443%2Fauthorize%2FuserAuthQuickLoginAction.htm%3Fe_i_i_d%3D2376b7e01bf8c68350668a015c09e3ba">
          <i class="xmyp-login-wrapper__share__share2-zfb"></i>
        </a>
        <a class="xmyp-login-wrapper__share__share3" href="https://open.weixin.qq.com/sns/explorer_broker?appid=wx62ba64796e13f092&redirect_uri=https%3A%2F%2Faccount.xiaomi.com%2Fpass%2Fsns%2Flogin%2Fload&response_type=code&scope=snsapi_userinfo&state=STATE_510711#wechat_redirect">
          <i class="xmyp-login-wrapper__share__share3-wx"></i>
        </a>
      </div>
      <ul class="xmyp-login-wrapper-footer">
        <li class="xmyp-login-wrapper-footer-title">简体</li>
        <li class="xmyp-login-wrapper-footer-title">|</li>
        <li class="xmyp-login-wrapper-footer-title">繁体</li>
        <li class="xmyp-login-wrapper-footer-title">|</li>
        <li class="xmyp-login-wrapper-footer-title">English</li>
        <li class="xmyp-login-wrapper-footer-title">|</li>
        <li class="xmyp-login-wrapper-footer-title">常见问题</li>
        <li class="xmyp-login-wrapper-footer-title">|</li>
        <li class="xmyp-login-wrapper-footer-title">隐私政策</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Field, Toast } from 'mint-ui'
import Vue from 'vue'
import {
  mapActions,
  mapGetters
} from 'vuex'
Vue.component(Field.name, Field)
export default {
  created () {
    console.log(this.$route)
  },
  data () {
    return {
      username: '',
      password: '',
      users: '',
      isExit: ''
    }
  },
  methods: {
    ...mapActions([
      'login'
    ]),
    doLogin () {
      const user = JSON.parse(window.localStorage.getItem('users'))
      if (user) {
        if (this.username !== '' && this.password !== '') {
          this.users = JSON.parse(window.localStorage.getItem('users'))
          this.isExit = this.users.some(item => {
            console.log(item.username, item.password)
            return item.username === this.username && item.password === this.password
          })
          console.log(this.isExit)
          if (this.isExit) {
            this.login({
              username: this.username,
              password: this.password
            })
          } else {
            let instance = Toast('用户名或密码错误')
            setTimeout(() => {
              instance.close()
            }, 2000)
          }
        } else {
          let instance = Toast('用户名或密码不能为空')
          setTimeout(() => {
            instance.close()
          }, 2000)
        }
      } else {
        let instance = Toast('用户名不存在请先去注册')
        setTimeout(() => {
          instance.close()
        }, 2000)
      }
    },
    toRegister () {
      this.$router.push('/register')
    }
  },
  computed: {
    ...mapGetters(['isLogin'])
  },
  watch: {
    isLogin (value) {
      if (value === true) {
        let instance = Toast('登录成功')
        setTimeout(() => {
          instance.close()
          const { to } = this.$route.params
          if (to) {
            this.$router.push(to)
          } else {
            this.$router.back()
          }
        }, 1000)
      }
    }
  }
}
</script>

<style lang='scss' scoped>
$mainColor: #E4BB7E;
.xmyp-login {
  width: 100%;
  height: 100%;
  background: url("https://shop.io.mi-img.com/app/shop/img?id=shop_dfa89d9b977aa2f32346a1e2e3ecb838.png&w=750&h=1334") no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
  &-wrapper {
    width: 80%;
    margin: 1.4rem auto;
    &-title {
      font-size: .4rem;
      margin: 30px 54px;
      color: #666;
      font-weight: normal;
      position: relative;
    }
    &-btn {
      border: none;
      background-color: $mainColor;
      height: .8rem;
       width: 92%;
      margin: .1rem;
      border-radius: .4rem;
      color: #fff;
      font-size: .4rem;
      outline: none;
    }
    &-changelogin {
      font-size: .28rem;
      color: #666;
      line-height: 10px;
      letter-spacing: 1px;
    }
    &-other {
      font-size: .2rem;
      color: #666;
      line-height: 10px;
      text-align: center;
      margin-top:35px;
      letter-spacing: 1px;
    }
    &__share {
      margin-top: 20px;
      height: 30px;
      text-align: center;
      &__share1 {
        width: 28px;
        height: 28px;
        display: inline-block;
        &-wb {
          width:28px;
          height: 100%;
          display: inline-block;
          background: rgb(238, 142, 142) url("https://account.xiaomi.com/static/res/166d6dc/account-static/respassport/acc-2014/img/icons_type.png") no-repeat -34px 4px;
          border-radius: 50%;
        }
      }
      &__share2 {
        width: 28px;
        height: 28px;
        display: inline-block;
        margin: 0 30px;
        &-zfb {
          width:28px;
          height: 100%;
          background: rgb(76, 76, 231) url("https://account.xiaomi.com/static/res/166d6dc/account-static/respassport/acc-2014/img/icons_type.png") no-repeat -56px 5px;
          display: inline-block;
          border-radius: 50%;
        }
      }
      &__share3 {
        width: 28px;
        height: 28px;
        display: inline-block;
        &-wx {
          width:28px;
          height: 100%;
          background:  rgb(12, 177, 108) url("https://account.xiaomi.com/static/res/166d6dc/account-static/respassport/acc-2014/img/icons_type.png") no-repeat -81px 5px;
          display: inline-block;
          border-radius: 50%;
        }
      }
    }
    &-footer {
      display: flex;
      margin-top: 65px;
      bottom: 70px;
      &-title {
        display: flex;
        font-size: 12px;
        padding: 0px 5px;
        color: #666;
        &:hover {
          color: rgb(17, 16, 16);
        }
      }
    }
  }

}
</style>
