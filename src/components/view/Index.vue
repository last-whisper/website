<template>
  <section id="index-wrapper">
    <!--banner-->
    <coinu-banner></coinu-banner>
    <!--doing-->
    <coinu-doing></coinu-doing>
    <!--tocustomer-->
    <coinu-to-customer></coinu-to-customer>
    <!--down-load-->
    <component :is="whichDownload"></component>

  </section>
</template>

<script>
  import CoinuBanner from '@tpl/index/BannerList'
  import CoinuDoing from '@tpl/index/Doing'
  import CoinuToCustomer from '@tpl/index/ToCustomer'
  import CoinuDownLoad from '@tpl/index/DownLoad'
  import CoinuDownLoadM from '@tpl/index/DownLoadM'
  import {mapState} from 'vuex'
  export default {
    name: "index",
    computed:{
      ...mapState({
        x:state=>state.globalInfo.currentResolution.width
      }),
      whichDownload(){
        if(this.x>=768){
          return CoinuDownLoad
        }
        return CoinuDownLoadM
      }
    },
    //路由hash=>滚动到锚点
    beforeRouteEnter(to,from,next){
      next(()=>{
        if(to.hash){
          let viewEl = document.querySelector(to.hash);
          viewEl && viewEl.scrollIntoView()
        }else {
          document.getElementById('scroll-wrapper').scrollTop = 0;
        }
      })
    },
    beforeRouteUpdate(to,from,next){
      next();
      if(to.hash){
        let viewEl = document.querySelector(to.hash);
        viewEl && viewEl.scrollIntoView()
      }else {
        document.getElementById('scroll-wrapper').scrollTop = 0;
      }
    },
    methods:{
    },
    mounted(){

    },
    components:{
      CoinuBanner,
      CoinuDoing,
      CoinuToCustomer,
      CoinuDownLoad,
      CoinuDownLoadM
    }
  }
</script>

