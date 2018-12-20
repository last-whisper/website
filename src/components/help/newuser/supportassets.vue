<template>
  <section class="supportassets-wrapper help-page-wrapper">
    <section class="zh detail" v-if="$i18n.locale==='zh_CN'">
      <h3>CoinU 支持哪些数字资产</h3>
      <h4>1.支持的资产</h4>
      <div class="line">当前版本CoinU 支持以下资产</div>
      <div class="line">BTC 、 ETH及ERC20token 、DKKT 、 USDT</div>
    </section>
    <section class="en detail" v-else-if="$i18n.locale==='en_US'">
      <h3>
        What digital assets does CoinU support?
      </h3>
      <h4>1.Supported currency</h4>
      <div class="line">The current version of CoinU supports the following currencies
      </div>
      <div class="line">
        BTC 、 ETH&ERC20token 、DKKT 、 USDT
      </div>
    </section>

  </section>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: "supportassets",
    computed:{
      ...mapState({
        x:state=>state.globalInfo.currentResolution.width
      })
    }
  }
</script>

<style scoped>

</style>
