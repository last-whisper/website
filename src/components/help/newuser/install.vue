<template>
  <section class="install-wrapper help-page-wrapper">
    <section class="zh detail" v-if="$i18n.locale==='zh_CN'">
      <h3>下载与安装说明</h3>
      <div class="version">
        <p>更新时间:2018/11/22</p>
        <p>应用版本: V1.2.0</p>
      </div>
      <img :class="{'litter-banner':x<768}" src="@img/installapp/1.png" :alt="$t('alt')">
      <h4>1.下载安装</h4>
      <h5>1.1 下载iOS版本CoinU</h5>
      <h6>1.1.1 国内用户选择企业版安装包下载</h6>
      <div class="line" v-if="system!=='ios'">
        <div>
          <img class="code" src="@img/installapp/code.jpg" :alt="$t('alt')">
        </div>
        <div>手机用户请扫描二维码安装企业发布版本</div>
      </div>

      <div v-else class="line line-btn">
        <button class="btn" @click="downloadIpa">
          {{$t('system.ios.ipa')}}
        </button>
      </div>



      <el-row class="row">
        <el-col class="col" :sm="{span:8}">
          <img src="@img/installapp/4.png" :alt="$t('alt')">
          <div class="line">(1)、第一次打开”CoinU“的时候会弹出以上框</div>
        </el-col>
        <el-col class="col" :sm="{span:8}">
          <img src="@img/installapp/5.png" :alt="$t('alt')">
          <div class="line">(2)、在手机的 设置—通用—设备管理 中找到 CoinU 证书</div>
        </el-col>
        <el-col class="col" :sm="{span:8}">
          <img src="@img/installapp/6.png" :alt="$t('alt')">
          <div class="line">(3)、点击信任这个证书就可以开始使用 CoinU 了</div>
        </el-col>

      </el-row>

      <h6>1.1.2 海外用户可在App Store搜索CoinU下载安装</h6>
      <img src="@img/installapp/2.png" :alt="$t('alt')">
      <div class="line">以下香港id供参考使用：</div>
      <div class="line red bold">
        为了防止您的手机信息泄露，请您务必不要使用下方Apple ID登录iCloud，使用参考Apple ID下载过APP后，请您及时退出该账号。
      </div>
      <div class="line">账号：</div>
      <div class="line grey">bw679237@icloud.com</div>
      <div class="line grey">m83n2l73@icloud.com</div>
      <div class="line grey">f047pxq6@icloud.com</div>
      <div class="line grey">u53xf4a2@icloud.com</div>
      <div class="line grey">b74821d9@icloud.com</div>
      <div class="line grey">d985lk5f@icloud.com</div>
      <div class="line grey">rx4x9b9z@icloud.com</div>
      <div class="line grey">x22d80d5@icloud.com</div>
      <div class="line">以上账号密码均为：Aa112211</div>
      <h5>1.2 下载安卓版本 CoinU</h5>
      <h6>1.2.1 Android用户可在GooglePlay（需要科学上网）、三星、应用宝、豌豆荚、360等应用商店下载</h6>
      <img src="@img/installapp/3.png" :alt="$t('alt')">
      <h5>1.3 CoinU官网下载</h5>
      <div class="line">
        官网下载链接：
        <a href="https://www.coinu.top/zh_CN/#down-load">
          https://www.coinu.top/zh_CN/#down-load
        </a>
      </div>
    </section>
    <section class="en detail" v-else-if="$i18n.locale==='en_US'">
      <h3>Download and installation instructions</h3>
      <div class="version">
        <p>Update time : 2018/11/22</p>
        <p>Version: V1.2.0</p>
      </div>
      <img :class="{'litter-banner':x<768}" src="@img/installapp/1-EN.png" :alt="$t('alt')">
      <h4>1. Download and install</h4>
      <h5>1.1 Download iOS version of CoinU Wallet</h5>
      <h6>1.1.1 Download enterprise release</h6>

      <div class="line" v-if="system!=='ios'">
        <div>
          <img class="code" src="@img/installapp/code.jpg" :alt="$t('alt')">
        </div>
        <div>For iOS users, please scan the QR code to install.</div>
      </div>

      <div v-else class="line line-btn">
        <button class="btn" @click="downloadIpa">
          {{$t('system.ios.ipa')}}
        </button>
      </div>


      <el-row class="row">
        <el-col class="col" :sm="{span:8}">
          <img src="@img/installapp/4-EN.png" :alt="$t('alt')">
          <div class="line">(1).After installing CoinU Wallet for Enterprise, you will see the following pop-up on the first time you access CoinU Wallet.</div>
        </el-col>
        <el-col class="col" :sm="{span:8}">
          <img src="@img/installapp/5-EN.png" :alt="$t('alt')">
          <div class="line">(2).Head over to Settings -> General -> Device Management to find the certification for CoinU  Wallet.</div>
        </el-col>
        <el-col class="col" :sm="{span:8}">
          <img src="@img/installapp/6-EN.png" :alt="$t('alt')">
          <div class="line">(3).Click to trust the enterprise certificate to start using CoinU Wallet.</div>
        </el-col>

      </el-row>


      <div class="line">1.1.2 Users can search for CoinU download and install in App Store</div>
      <img src="@img/installapp/2-EN.png" :alt="$t('alt')">
      <div class="line">The following IDs for Hongkong App Store are listed for use:</div>
      <div class="line red bold">
        In case of the information leakage from your cellphone, please DON’T log in your icloud with these IDs, after downloading the CoinU App, please log out these accounts in time.
      </div>
      <div class="line">Accounts:</div>
      <div class="line grey">bw679237@icloud.com</div>
      <div class="line grey">m83n2l73@icloud.com</div>
      <div class="line grey">f047pxq6@icloud.com</div>
      <div class="line grey">u53xf4a2@icloud.com</div>
      <div class="line grey">b74821d9@icloud.com</div>
      <div class="line grey">d985lk5f@icloud.com</div>
      <div class="line grey">rx4x9b9z@icloud.com</div>
      <div class="line grey">x22d80d5@icloud.com</div>
      <div class="line">And the password for the above accounts is: Aa112211</div>
      <h5>1.2   Download  Android  version of CoinU Wallet</h5>
      <h6>1.2.1 Android users can download in GooglePlay , Samsung, App, Pea Pod, 360 and other app stores.</h6>
      <img src="@img/installapp/3-EN.png" :alt="$t('alt')">
      <h5>1.3 Download on CoinU  official website</h5>
      <div class="line">
        URL:
        <a href="https://www.coinu.top/en_US/#down-load">
          https://www.coinu.top/en_US/#down-load
        </a>
      </div>
    </section>

  </section>
</template>

<script>
  import {mapState} from 'vuex'
  import config from '@js/config.js'
  export default {
    name: "install",
    computed:{
      ...mapState({
        x:state=>state.globalInfo.currentResolution.width,
        system:state=>state.globalInfo.system
      })
    },
    methods:{
      downloadIpa(){
        window.location.href=config.links.iosIpa
      }
    }
  }
</script>

<style lang="stylus">
  .install-wrapper .line-btn
    padding-top 35px
    box-sizing border-box
    text-align center
  .install-wrapper button.btn
    width auto
    padding 0 20px
    background #357eff
    border-radius 30px
    height 50px
    line-height 50px
    font-size 16px
    color #fff


  .install-wrapper img.code
    @media screen and (min-width :768px)
      width 200px !important
  .install-wrapper .row
    padding 20px 0
    @media screen and (min-width :768px)
      margin-left -30px
      .col
        box-sizing border-box
        padding 0 30px
        text-align center
    @media screen and (max-width :767px)
      .col
        box-sizing border-box
        padding 0 20%
        text-align center
        img
          width 100% !important

</style>
