<template>
  <section class="support-wrapper file-wrapper">
    <component :is="lang"></component>
  </section>
</template>

<script>
  import supportzh_CN from '@tpl/supportandpolicy/supportzh_CN'
  import supporten_US from '@tpl/supportandpolicy/supporten_US'
  export default {
    name: "support",
    beforeRouteEnter(to,from,next){
      next(()=>{
        document.getElementById('scroll-wrapper').scrollTop = 0
      })
    },
    computed:{
      lang(){
        if(this.$i18n.locale === 'zh_CN'){
          return supportzh_CN
        }else if(this.$i18n.locale === 'en_US'){
          return supporten_US
        }else {
          return supportzh_CN
        }

      }
    }
  }
</script>

<style lang="stylus">

</style>
