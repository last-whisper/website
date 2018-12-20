<template>
  <div id="coinu-wrapper">
    <section ref="coinu" class="coinu" id="scroll-wrapper">
      <coinu-header :bgColor="setBgColor"></coinu-header>
      <router-view/>
      <coinu-footer></coinu-footer>
    </section>
    <div id="backTop"
       @click="toTop"
       v-show="scrollTop>800 && x<768 && $route.name !== 'home'">
      <i class="el-icon-back"></i>
    </div>
    <div id="teach">
      <img src="@img/teach.png" >
    </div>
  </div>
</template>

<script>
  import {isMobile,mobileSystem,cookies} from "@js/tools";
  import {mapMutations,mapState} from 'vuex';
  import CoinuHeader from '@tpl/common/CoinuHeader'
  import CoinuFooter from '@tpl/common/CoinuFooter'
  import {isWeixinBrowser} from '@js/tools'

  export default {
  name: 'App',
  data(){
    return {
      //网站目前支持的语种
      language:['zh_CN','en_US']
    }
  },
  computed:{
    ...mapState({
      x:state=>state.globalInfo.currentResolution.width,
      y:state=>state.globalInfo.currentResolution.height,
      m:state=>state.globalInfo.isMobile,
      scrollTop:state=>state.globalInfo.scrollTop,
      hashArr:state=>state.globalInfo.hashArr,
      isWeixin:state=>state.globalInfo.isWeixin,
    }),
    setBgColor(){
      //手机设备，导航条背景色始终为rgba(0,0,0,.65)
      if(this.x<768){
        return 'rgba(0,0,0,.65)'
      }
      //路由为主页,导航条背景色随滚动而变化
      if(this.$route.name === 'home'){
        let opacity = Math.min(0.65,this.scrollTop / 600);
        opacity > 0 ? this.changHeaderMask(true) : this.changHeaderMask(false);
        return `rgba(0,0,0,${opacity})`
      }//其他页导航条背景色始终为rgba(0,0,0,.75)
      else {
        this.changHeaderMask(true);
        return 'rgba(0,0,0,.75)'
      }
    },
    getHashEL(){
      let elArr = [];
      this.$t('nav').forEach(item=>{
        item.link.hash && elArr.push(item.link.hash.replace('#',''))
      });
      return elArr
    }
  },
  methods:{
    //绑定即时获取分辨率和终端设备的事件，存储在vuex globalInfo模块中
    init(){
      this.changeResolution(this.windowResolution());
      this.changeTerminal(isMobile());
      window.addEventListener("resize",()=>{
        this.changeResolution(this.windowResolution());
        this.changeTerminal(isMobile())
      },false)
    },
    ...mapMutations([
      'changeResolution',
      'changeTerminal',
      'changeCurrentHash',
      'changHeaderMask',
      'changeScrollTop',
      'changeCurrentNavIndex',
      'changeHashArr',
      'changeSystem',
      'changeIsWeixin',
      'changeLang',
    ]),
    windowResolution(){
      return {
        width:window.innerWidth,
        height:window.innerHeight
      }
    },
    setHeight(){
      this.$refs.coinu.style.height = this.y+'px';
    },
    //判断当前滚动到哪个hashDom板块，调整导航下标线的位置
    scrollToWhichHash(){
      if(this.$route.name != 'home') return
      let n = this.$refs.coinu.scrollTop;
      let i = Math.max(this.hashArr.findIndex((item,index,arr)=>{
        return item <= n && arr[index+1] > n
      }),0);
      this.changeCurrentNavIndex(i)
    },
    //返回锚点的offsetTop值集合并派发
    getHashElOffsetTop(){
      if(this.$route.name != 'home') return
      let offsetTopArr = [];
      this.getHashEL.forEach(item=>{
        offsetTopArr.push(document.getElementById(item).offsetTop-150)
      });
      offsetTopArr.unshift(0);
      offsetTopArr.push(this.$refs.coinu.scrollHeight);
      this.changeHashArr(offsetTopArr)
    },
    //返回顶部
    toTop(){
      document.getElementById('scroll-wrapper').scrollTop = 0
    },
    bindEvent(el,event,fn,bool=false){
      el.addEventListener(event,fn,bool)
    }
  },
  created(){
    //判断系统ios or android
    this.changeSystem(mobileSystem());
    //判断是不是微信浏览器并派发
    this.changeIsWeixin(isWeixinBrowser());
    this.init();

  },
  mounted(){
    this.setHeight();
    //绑定滚动事件
    this.bindEvent(this.$refs.coinu,'scroll', ()=>{
      this.changeScrollTop(this.$refs.coinu.scrollTop);
    });
    this.bindEvent(window,'load',()=>{
      this.getHashElOffsetTop();
      this.bindEvent(this.$refs.coinu,'scroll',this.scrollToWhichHash)
    })
  },
  components:{
    CoinuHeader,
    CoinuFooter
  },
  watch:{
    /**
     * 改变window的宽度和切换语言都会导致各板块的scrollTop值变化，从而影响导航下标线的准确度
     * 所以需要重新获取offsettop值，并判断当前处于哪个板块
     * 该功能只在home路由下生效
     */

    //改变window尺寸重新获取hash元素的offsetTop,并且重新计算当前滚动到哪个hashDom板块
    x:function(newVal){
      if(newVal >= 768 && this.$route.name === 'home'){
        this.getHashElOffsetTop();
        this.scrollToWhichHash();
      }
    },
    //切换语言重新获取hash元素的offsetTop,并且重新计算当前滚动到哪个hashDom板块
    '$i18n.locale':function (newVal,oldVal) {
      if(this.$route.name === 'home'){
        this.getHashElOffsetTop();
        this.scrollToWhichHash();
      }
      cookies('language',newVal);//保存到浏览器
      this.changeLang(newVal);//保存到vuex
      let path = this.$route.fullPath.replace(this.$route.params.lang,newVal);
      this.$router.push(path)//切换路由中的语言参数
    },
    y:function () {
      this.setHeight();
    },
    '$route':{
      //监听路由的变化，派发changeCurrentNavIndex
      handler(to,from){
        if(to.params.lang){
          if(to.params.lang!=this.$i18n.locale){
            if(this.language.find(item=>item === to.params.lang)){
              this.$i18n.locale = to.params.lang;
              cookies('language',to.params.lang);
            }else {
              //当路由中 语言参数 与 语言库（this.language） 不匹配应该跳转到404页面
            }
          }
        }else {
          //路由中没有语言参数则加进去
          let path ='/'+this.$i18n.locale + this.$route.fullPath;
          this.$router.push(path)//切换路由中的语言参数
        }
        if(to.name === 'home'){
          if(!to.hash){
            this.changeCurrentNavIndex()
          } else {
            let index = Math.max(this.$t('nav').findIndex(item=>item.link.hash === to.hash),0);
            this.changeCurrentNavIndex(index)
          }
        }else{
          let index = this.$t('nav').findIndex(item=>item.link.name === to.name);
          index!=-1?this.changeCurrentNavIndex(index):null
        }
      },
      immediate:true
    }
  }
}
</script>

<style lang="stylus">
  #coinu-wrapper
    position relative
  .coinu
    position relative
    overflow scroll
    //苹果滑屏滚动启用硬件加速特性
    -webkit-overflow-scrolling: touch

  //协议与服务
  .file-wrapper
    max-width 1000px
    margin auto
    padding 100px 0
    @media screen and (max-width 1200px)
      padding 80px 0
    @media screen and (max-width 1000px)
      padding 60px 20px
    @media screen and (max-width 767px)
      padding 45px 10px
      line-height 24px
    section.title
      padding-top 50px
      @media screen and (max-width:767px)
        padding-top 30px
      p
        color #ccc
        margin-top 20px
        margin-bottom 30px
        @media screen and (max-width:767px)
          margin-top 10px
          margin-bottom 10px
    ul
      list-style disc
      padding-left 30px
      li
        padding 10px 0
      @media screen and (max-width:767px)
        padding-left 10px
        list-style none
    section.detail
      p
        padding 15px 0
    .support_zh,.policy_zh
      section.detail
        text-align justify
        word-break break-all
    .support_en,.policy_en
      section.detail
        text-align left
  #backTop
    width 45px
    height 45px
    background #fff
    box-shadow 0 0 6px 2px #eeeeee
    position absolute
    right 20px
    bottom 150px
    font-size 18px
    color #ccc
    text-align center
    line-height 45px
    border-radius 50%px
    z-index 30
    i
      transform rotate(90deg)
  #teach
    display none
    img
      width 100%
  .teach
    display block !important
    top 0
    left 0
    width 100%
    height 100%
    position absolute
    z-index 100000
    overflow hidden
</style>
