<template>
    <section class="account-order-wrapper help-page-wrapper">
      <section class="zh detail" v-if="$i18n.locale==='zh_CN'">
        <h3>关于EOS“账户订单”的说明</h3>
        <div class="line">
          1. 创建EOS账户的时候需要消耗一定的资源，EOS持有者通过买入内存RAM来存储数据，抵押网络带宽NET及带宽CPU来换取初始的资源。
        </div>

        <div class="line">
          2. 创建账户消耗的EOS完全由EOS系统收取。
        </div>
      </section>
      <section class="en detail" v-else-if="$i18n.locale==='en_US'">
        <h3>Instructions of the EOS "Account Order"</h3>
        <div class="line">
          1. When creating an EOS account will consumes resources. The EOS holder stores the data by buying RAM, and stake eos to exchange network bandwidth and the CPU bandwidth.

        </div>

        <div class="line">
          2. The EOS used to create the account is charged  by the EOS system entirely.
        </div>
      </section>
    </section>
</template>

<script>
    export default {
        name: "accountorder"
    }
</script>

<style scoped lang="stylus">

</style>
