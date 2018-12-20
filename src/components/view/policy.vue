<template>
  <section class="policy-wrapper file-wrapper">
    <component :is="lang"></component>
  </section>
</template>

<script>
  import policyzh_CN from '@tpl/supportandpolicy/policyzh_CN'
  import policyen_US from '@tpl/supportandpolicy/policyen_US'
  export default {
    name: "policy",
    beforeRouteEnter(to,from,next){
      next(()=>{
        document.getElementById('scroll-wrapper').scrollTop = 0
      })
    },
    computed:{
      lang(){
        if(this.$i18n.locale === 'zh_CN'){
          return policyzh_CN
        }else if(this.$i18n.locale === 'en_US'){
          return policyen_US
        }else {
          return policyzh_CN
        }

      }
    }
  }
</script>

<style lang="stylus">

</style>
