<template>
  <section id="down-load" class="down-load-warpper-m">
    <section class="down-load-m">
      <img src="@img/downloadm/down-load-uptop.png" alt="" class="m-top">
      <img src="@img/downloadm/down-load-downtop.png" alt="" class="m-bottom">
      <section class="top">
        <img src="@img/downloadm/download-logo.png" alt="" class="m-logo">
        <img v-if="$i18n.locale==='zh_CN'" src="@img/downloadm/down-load-text.png" alt="" class="m-text">
        <img v-else-if="$i18n.locale==='en_US'" src="@img/downloadm/down-load-text_en.png" alt="" class="m-text">
        <img src="@img/downloadm/down-load-centertop.png" alt="" class="m-pic">
      </section>

      <section class="btn">
        <button v-if="system==='android'" @click="androidApk">
          <img src="@img/downloadm/android_m.png" alt="">
          <span>{{$t('system.android')}}</span>
        </button>
        <button v-if="system==='ios'" @click="iosIpa">
          <img src="@img/downloadm/ios_m.png" alt="">
          <span>{{$t('system.ios.ipa')}}</span>
        </button>
        <button v-if="system==='ios'" @click="toItunes">
          <img src="@img/downloadm/appStore.png" alt="">
          <span>{{$t('system.ios.appStore')}}</span>
        </button>
      </section>
    </section>
  </section>
</template>
<script>
  import {mapState} from 'vuex'
  import config from '@js/config'
  export default {
    name: "DownLoad",
    computed:{
      ...mapState({
        isWeixin:state=>state.globalInfo.isWeixin,
        system:state=>state.globalInfo.system,
        x:state=>state.globalInfo.currentResolution.width,
        y:state=>state.globalInfo.currentResolution.height
      })
    },
    methods:{
      iosIpa(){
        window.location.href=config.links.iosIpa;
      },
      toItunes(){
        window.location.href=config.links.itunes;
      },
      androidApk(){
        if(this.isWeixin){
          document.getElementById('teach').onclick=function () {
            document.getElementById('teach').classList.remove('teach')
          }
          document.getElementById('teach').classList.add('teach')
        }else {
          window.location.href=config.links.androidApk
        }
      }
    },
    mounted(){
    },
  }
</script>
<style lang="stylus">
  #down-load .down-load-m
    .top
      height 65%
      position relative
      z-index 6
    .btn
      width 70%
      min-width 280px
      margin auto
      height 35%
      position relative
      z-index 6
      button
        width 100%
        margin-bottom 10px
        background #3a3838
        color #065bca
        line-height 50px
        outline none
        box-shadow 0 4px 10px 1px #3769d2
        border-radius 12px
        &:focus,&:hover
          background #3a3838
          color #fff
        span
          font-size 16px
          color #fff
      img
        margin-top -4px
        margin-right 10px
        height 25px
        max-width 100%
        vertical-align middle

    height 100vh
    background url("../../assets/img/downloadm/download-bg-m.jpg")
    position relative
    text-align center
    img
      max-width 100%
    .m-logo
      width 25%
      margin auto
      padding 50px 0 0
      display block
    .m-text
      width 70%
      padding 20px 0
    .m-pic
      width 80%
      padding-top 15px
    .m-top,.m-bottom
      position absolute
      left 0
      right 0
      margin auto
      z-index 5
    .m-top
      top 0
    .m-bottom
      bottom 0
</style>
