<template>
  <header id="header"
    :style="{backgroundColor:bgColor}"
  >
    <section class="header-wrapper auto">
      <el-row>
        <!--logo-->
        <el-col class="logo-warpper"
          :sm="4" :xs="{span:5,offset:0}"
        >
          <img @click="toHome" src="@img/logo.png" :alt="$t('alt')">
        </el-col>

        <!--nav-->
        <el-col
          :class="[
            bool?'nav-warpper-m-open':'nav-warpper-m-close',
            resolutionWidth<768?'nav-warpper-m':''
          ]"
          class="nav-warpper"
          :sm="{span:19,offset:1}"
        >
          <el-menu
            id="nav"
            class="el-menu-demo"
            mode="horizontal"
            :menu-trigger="'click'"
          >
            <el-menu-item
              class="nav-li-item"
              :key="index"
              index="index+1"
              v-if="!item.subItem.length"
              v-for="(item,index) in $t('nav')"
              :style="{color:navColor}"
              @click="to(item.link,index)"
            >
              {{item.item}}
            </el-menu-item>
            <el-submenu
              :key="index"
              index="index+1"
              :popper-append-to-body="false"
              v-if="item.subItem.length"
              v-for="(item,index) in $t('nav')"
              :style="{color:navColor}"
            >
              <template slot="title">{{item.item}}</template>
              <el-menu-item
                v-for="(i,n) in item.subItem"
                :key="n"
                index="index+'-'+n"
                @click="changeLanguage(i.lang)"
              >
                {{i.item}}
              </el-menu-item>
            </el-submenu>

            <div ref="line" class="line hidden-xs-only"></div>
          </el-menu>
        </el-col>

        <!--navbool-->
        <el-col class="bool hidden-sm-and-up"
          :xs="{span:2}"
        >
          <span :class="{'show-nav':bool}" @click="bool = !bool">
            <i></i>
            <i></i>
            <i></i>
          </span>
        </el-col>
      </el-row>
    </section>
  </header>
</template>

<script>
  import {getStyle} from '@js/tools'
  import {mapState,mapMutations,mapGetters} from 'vuex'
  import {cookies} from "@js/tools";

  export default {
    data(){
      return {
        bool:false,
        oUl:null,
      }
    },
    props:{
      bgColor:{
        type:String,
        default:'rgba(0,0,0,0)'
      }
    },
    computed:{
      ...mapState({
        resolutionWidth:state=>state.globalInfo.currentResolution.width,
        currentIndex:state=>state.globalInfo.currentNavIndex,
      }),
      ...mapGetters(['navColor'])
    },
    methods:{
      ...mapMutations(['changeCurrentNavIndex','changeLang']),
      to(link,index){
        this.bool = false;
        this.changeCurrentNavIndex(index);
        this.$router.push(link);
      },
      changeLanguage(lang){
        this.$i18n.locale=lang;//切换语言
      },
      //下标线位置及宽度计算
      paddle(n=this.currentIndex){
        if(this.resolutionWidth < 768){
          return
        }
        try {
          if(!this.oUl){
            this.oUl = document.getElementById('nav')
          }
          let oLi = this.oUl.children[n];
          this.$refs.line.style.width = oLi.clientWidth - parseInt(getStyle(oLi,'paddingLeft'))*2 + 'px';
          this.$refs.line.style.left = oLi.offsetLeft + parseInt(getStyle(oLi,'paddingLeft')) + 'px'
        }catch (e) {

        }
        
      },
      //给导航绑定移入 移出事件！！！！
      changeIndex(){
        let aLis = [...document.querySelectorAll('#nav .nav-li-item')];
        aLis.forEach((item,index)=>{
          item.addEventListener('mouseover',()=>{
            this.paddle(index)
          },false);
          item.addEventListener('mouseout',()=>{
            this.paddle()
          },false)
        })
      },
      toHome(){
        this.$router.push({name:'home'})
      }
    },
    created(){

    },
    mounted(){
      //初始化
      this.paddle();
      this.changeIndex();
    },
    updated(){
     this.paddle()//尺寸变化，语言变化而重新计算
    },
    watch:{
      currentIndex:function (newVal) {
        this.paddle(newVal)
      }
    }

  }
</script>

<style lang="stylus">
  header
    user-select none
    position fixed
    width 100%
    z-index 100
    .header-wrapper
      width 1000px
      height 100px
      line-height 100px
      box-sizing border-box
      color #fff
      @media screen and (min-width:769px)
        -webkit-font-smoothing:subpixel-antialiased
      .nav-warpper.nav-warpper-m//mobile
        position absolute
        top:45px
        background #fff
        color #333
        padding 10px 30px
        height calc(100vh - 45px)
        box-sizing border-box
        transition left cubic-bezier(0.18, 0.89, 0.45, 0.94) 0.2s
        &>ul>li
          border-bottom 1px solid #ebebeb !important
          padding 0
          width 100%
          line-height 50px !important
          height 50px !important
        li .el-menu--horizontal
          width 100%
          border-bottom none
          left auto !important
          ul
            box-shadow none
          li
            padding-left 20px
            font-size 14px
            color #999
            line-height 36px
      .nav-warpper.nav-warpper-m-close
        left -120%
      .nav-warpper.nav-warpper-m-open
        left 0
      .line
        position absolute
        height 2px
        background #0095e3
        width 0px
        bottom 20%
        pointer-events none
        transition left ease-in-out .3s,width ease-out .25s .15s
      ul.el-menu
        position relative
        background #fff
      @media screen and (max-width:1200px)
        height 80px
        line-height 80px
        padding 0 20px
        .nav-warpper>ul>li
          padding 0 25px
      @media screen and (max-width:1000px)
        width 100%
        height 60px
        line-height 60px
        .line
          bottom 15%
        .nav-warpper>ul>li
          padding 0 20px
      @media screen and (max-width:768px)
        padding 0
        height 45px
        line-height 45px
        .bool
          float right
          margin-right 10px
        .logo-warpper
          float left
          padding-left 10px
    .el-row
      height 100%
      .logo-warpper,.nav-warpper
        height 100%
      .nav-warpper,.nav-warpper>ul,.nav-warpper>ul>li
        height 100%
        line-height unset
        background none
        color unset
        border none
      .nav-warpper>ul>li.is-active,.nav-warpper .el-submenu__title
        color unset
        height 100%
        line-height unset
        border-bottom none
    .bool
      @media screen and (max-width:768px)
        display block
      height 100%
      display none
      span
        margin-top 14px
        display inline-block
        width 21px
        height 17px
        position relative
        float right
        i
          width 21px
          display inline-block
          position absolute
          opacity 1
          left 0
          border-bottom 1px solid #fff
          transition all ease-in-out .3s,opacity ease-in .2s
        i:nth-of-type(1)
          top: 0
          transform-origin 0 0
        i:nth-of-type(2)
          top: 8px
        i:nth-of-type(3)
          bottom 0
          transform-origin 0 1px
        &.show-nav
          i
            width 23px
          i:nth-of-type(1)
            transform:rotate(45deg)
          i:nth-of-type(2)
            width 21px
            opacity 0
          i:nth-of-type(3)
            transform:rotate(-45deg)
    .logo-warpper
      font-size 0
      cursor pointer
      img
        display inline-block
        line-height 100%
        vertical-align middle
        max-width 100%
        max-height 70%


</style>
