<template>
  <section id="help">
    <el-row>
      <el-col class="sidebar-wrapper" :lg="{span:5}" :md="{span:6}" :sm="{span:7}">
        <!--侧导航-->
        <section class="sidebar">
          <el-menu
            id="help-side-nav"
            mode="vertical"
            :menu-trigger="'click'"
            :default-active="$route.name"
            :default-openeds="openeds"
          >
            <el-submenu
              v-for="(item,index) in $t('helpSideBar')" :key="index"
              :index="item.title"
            >
              <template slot="title">{{item.title}}</template>
              <el-menu-item
                v-for="(i,n) in item.children" :key="index+'-'+n"
                :index="i.link.name"
                @click="to(i.link)"
              >
                {{i.name}}
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </section>
      </el-col>
      <el-col class="f-r" :lg="{span:19}" :md="{span:18}" :sm="{span:17}">
        <section class="detail-wrapper">
          <!--正文部分-->
          <router-view></router-view>
        </section>
      </el-col>
    </el-row>

  </section>
</template>

<script>

  import {mapMutations,mapState} from 'vuex'
  export default {
    name: "help",
    data(){
      return {
      }
    },
    computed:{
      //侧边栏默认打开项（当前全部打开，手机端全部关闭）
      ...mapState({
        x:state=>state.globalInfo.currentResolution.width,
      }),
      openeds(){
        let arr = [];
        if(this.x>768){
          this.$t('helpSideBar').forEach(item=>{
            arr.push(item.title)
          });
        }

        return arr
      }
    },
    methods:{
      ...mapMutations(['changeCurrentNavIndex']),
      to(link){
        this.$router.push(link)
      }
    },
    mounted(){
      let w = document.querySelector('.sidebar-wrapper').offsetWidth;
      document.querySelector('.sidebar').style.width = w+'px'
    },
    beforeRouteEnter(to,from,next){
      next(()=>{
        document.getElementById('scroll-wrapper').scrollTop = 0
      })
    },
    beforeRouteUpdate(to,from,next){
      document.getElementById('scroll-wrapper').scrollTop = 0
      next()
    },
  }


</script>

<style lang="stylus">

  #help
    max-width 1260px
    margin auto
    position relative
    padding-bottom 100px
    padding-top 100px
    .help-page-wrapper
      box-sizing border-box
      margin auto
      width 100%
      max-width 1000px
      min-height 700px
      @media screen and (max-width :767px)
        min-height 450px

    //左侧
    .sidebar
      user-select none
      @media screen and (max-width:768px)
        width 100% !important
      >ul>li
        padding 0
      ul ul li
        color #929292
        font-size 14px
        line-height 36px
        height 36px
        cursor pointer
      li li.is-active
        color #058ff7


    //右侧
    .detail-wrapper
      padding-top 70px
      max-width 1000px
      box-sizing border-box
      padding-left 40px
      padding-right 20px
      @media screen and (max-width :992px)
        padding-left 25px
      @media screen and (max-width :768px)
        padding-top 40px
        padding-left 20px
        padding-right 20px

      //右侧文档样式
      .help-page-wrapper
        li
          padding-left 10px
          color #5f5f5f
          line-height 30px
        h3
          font-weight bold
          font-size 30px
          margin 30px auto
        h4
          margin 20px auto
          font-size 24px

          font-weight normal
        h5
          margin 15px auto
          font-size 18px
          font-weight normal

        img + h5
          padding-top 20px
        img + .line
          padding-top 20px
        img + h4,img + h6,img + h6,.line + h4,.line + h5,.line + h6
          padding-top 30px
        h6
          font-size 16px
          margin 10px auto
          font-weight normal

        .line
          font-size 16px
          color #5f5f5f
          line-height 26px
          margin-top 15px
          margin-bottom 15px
        .red
          color #861b22
          margin-top 25px
          margin-bottom 25px
          font-weight bold
        .grey
          color #929292
          line-height 18px
        .version
          font-size 14px
          color #999
        a
          color #70b1e7
        img.three
          @media screen and (min-width :768px)
            width 31%
            margin-left 2%
            margin-right 2%
            display inline-block
        img.two
          @media screen and (min-width :768px)
            width 22%
            margin-left 1%
            margin-right 1%
            display inline-block
        img
          border-radius 4px
          display block
          margin-top 20px
          margin-bottom 20px
          max-width 100%
          box-shadow 0 2px 6px 0 rgba(0,0,0,.3)
          width 375px
          transition all ease-in-out .25s
          @media screen and (min-width:768px)
            &:hover
              box-shadow 0 6px 10px 0 rgba(0,0,0,.3)
          @media screen and (max-width:767px)
            width 60%
            margin 20px auto


    @media screen and (max-width :1200px)
      padding-top 80px
      .help-wrapper
        padding 0 20px
    @media screen and (max-width :1000px)
      padding-top 60px
      .help-wrapper
        padding 0 20px
    @media screen and (max-width :768px)
      padding-top 45px
      .help-wrapper
        padding 0 10px

  .nav-path,.sidebar
    padding-top 70px
    padding-bottom 30px
    @media screen and (max-width :767px)
      padding-top 25px
      padding-bottom 10px
    a
      color #333
      font-size 18px
  .litter-banner
    width 100% !important

</style>
