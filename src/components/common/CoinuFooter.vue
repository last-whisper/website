<template>
  <section class="footer-warpper">
    <section class="footer auto">
      <el-row>
        <!--<el-col class="hidden-xs-only" :sm="{span:3}">-->
          <!--<img class="logo-img" @click="toHome" src="@img/logo.png" :alt="$t('alt')">-->
        <!--</el-col>-->
        <el-col :sm="{span:14}" :xs="{span:24}">
          <el-col>{{$t('footer.email')}}</el-col>
          <el-col>
            <router-link
              v-for="(item,index) in $t('footer.files.filename')" :key="index"
              :to="item.link"
            >
              {{item.name}}
              <span v-if="index!=$t('footer.files.filename').length-1">
                {{$t('footer.files.join')}}
              </span>
            </router-link>
          </el-col>
          <el-col>
            {{$t('footer.copyRight')}}
          </el-col>
        </el-col>
        <el-col class="logo-warpper hidden-xs-only" :sm="{span:10}" :xs="{span:24}">
          <img class="code" :class="{on:bool}" src="@img/logo/code.png" :alt="$t('alt')">
          <el-row>{{$t('footer.title')}}</el-row>
          <el-row>
            <div
              @mouseover="index===0?bool=true:null"
              @mouseout="index===0?bool=false:null"
              class="foot-logo" v-for="(item,index) in logos" :key="index">
              <a target="_blank" :href="item.link">
                <img :src="item.src" :alt="$t('alt')">
              </a>
            </div>
          </el-row>
        </el-col>
      </el-row>
    </section>
  </section>
</template>

<script>
  import biyong from '@img/logo/biyong.png'
  import facebook from '@img/logo/facebook.png'
  import instagram from '@img/logo/instagram.png'
  import linkedin from '@img/logo/linkedin.png'
  import medium from '@img/logo/medium.png'
  import telegram from '@img/logo/telegram.png'
  import toutiao from '@img/logo/toutiao.png'
  import wechat from '@img/logo/wechat.png'
  import weibo from '@img/logo/weibo.png'
  import twitter from '@img/logo/twitter.png'

  export default {
    name: "CoinuFooter",
    data(){
      return {
        bool:false,
        logos:[
          {
            src:wechat,

          },
          {
            src:weibo,
            link:'https://weibo.com/p/1006066709736191/home?from=page_100606&mod=TAB&is_all=1#place'
          },
          {
            src:toutiao,
            link:'https://www.toutiao.com/c/user/104552161556/#mid=1611935420806157'
          },
          {
            src:telegram,
            link:'https://t.me/CoinU_CN'
          },
          {
            src:biyong,
            link:'https://0.plus/CoinU_CN'
          },
          {
            src:facebook,
            link:'https://www.facebook.com/CoinUwallet/?modal=admin_todo_tour'
          },
          {
            src:twitter,
            link:'https://twitter.com/CoinU12'
          },
          {
            src:linkedin,
            link:'https://www.linkedin.com/in/coin-u-44531a171/detail/recent-activity/posts/'
          },
          {
            src:medium,
            link:'https://medium.com/@bd_87383'
          },
          {
            src:instagram,
            link:'https://www.instagram.com/coinuwallet/'
          },







        ]
      }
    },
    methods:{
      toHome(){
        this.$router.push({name:'home'})
      }
    }
  }
</script>

<style lang="stylus">
  .footer-warpper
    background-color #222839
    padding 110px 0
    color #fff
    font-weight bold
    .logo-warpper
      position relative
      .code
        left -180px
        top -30px
        position absolute
        width 160px
        border-radius 4px
        display none
      .code.on
        display block
    .foot-logo
      margin 0 5px
      opacity .4
      transition opacity ease-in .2s
      &:hover
        opacity 1
      img
        width 100%
    @media screen and (max-width:767px)
      padding 30px 0
  .footer-warpper .footer
    @media screen and (max-width:1080px)
      padding 0 40px
    @media screen and (max-width:768px)
      font-weight normal
      font-size 12px
    @media screen and (max-width:767px)
      padding 0 15px
    font-size 16px
    line-height 40px
    max-width 1100px
    .el-row
      display flex
      align-items center
      @media screen and (max-width :767px)
        display block
        .el-col
          text-align center
          line-height 200%
      .logo-img
        cursor pointer
      a
        color #566695
        span
          color #fff
</style>
