<template>
    <section class="bandwidth-ram-wrapper help-page-wrapper">
      <section class="zh detail" v-if="$i18n.locale==='zh_CN'">
        <h3>如何理解带宽和内存？</h3>
        <div class="line">
          1. 在使用EOS期间，会消耗以下资源。内存RAM、CPU带宽（CPU Bandwidth）及NET带宽（Network Bandwidth）。
        </div>
        <div class="line">
          2. RAM是在区块链上存储数据的必备资源，需要支付EOS向系统购买。存储的数据越多，需要的RAM越多。
          买卖RAM都需要手续费的。在EOS系统中，买卖内存RAM会分别向eosio.ram支付0.5%的手续费。创建账户消耗的EOS完全由EOS系统收取。
        </div>
        <div class="line">
          3. CPU带宽，用来衡量你最近3天内，合约执行过程中的运算时间消耗（按ms计算）。CPU带宽和网络带宽一样，是一种临时性的消耗。当调用量减少时，消耗随之减少，最小可以降到0。你随时可以通过抵押EOS，来获得更大的CPU，也可以随时取消抵押，取回抵押的EOS。
        </div>
        <div class="line">
          4. 网络带宽NET，用来衡量最近3天内，合约执行产生的数据量（按kb算）。也是一种临时性的消耗，期间合约调用量大，消耗越大，当调用量减少时，消耗随之减少，最小可以降到0。用户可以通过抵押更多的EOS，来获得更大的网络带宽NET,也可以随时取消抵押，取回抵押的EOS。
        </div>

        <div class="line"><strong>注意事项</strong></div>
        <div class="line">内存RAM的价格是实时变化的，具体成交的价格以最终的价格为准。</div>
        <div class="line">当你发起任意一笔赎回操作，72小时后赎回的EOS才会到账。若不能自动到账，72小时后，你可以在“资源管理”页面点击“一键到账”，即可退回到你的账户余额中。</div>
        <div class="line">CoinU支持为他人的账户买入内存RAM或抵押EOS换取带宽。</div>
        <div class="line">CoinU“总抵押” 中不包含别人为自己账户抵押的EOS数量； “赎回中“ 包含赎回我给自己账户抵押的EOS数量和赎回我给别人账户抵押的EOS数量。</div>
      </section>
      <section class="en detail" v-else-if="$i18n.locale==='en_US'">
        <h3>What is Bandwidth and RAM?</h3>
        <div class="line">
          1. With a blockchain that uses EOS.IO software, there are 3 resources that are consumed by applications, RAM, CPU Bandwidth, and Network Bandwidth.
        </div>
        <div class="line">
          2. RAM is an essential resource for storing data on the blockchain and  EOS holder must pay EOS to system. The more data you store, the more RAM you need.
          In the EOS system, buying or selling  RAM will pay a 0.5% fee to eosio.ram.

        </div>
        <div class="line">
          3. CPU bandwidth, which is used to measure the computation time consumed during contract execution (calculated in ms) within the last 3 days. CPU bandwidth, like network bandwidth, is a temporary drain. When the dosage is reduced, the consumption is reduced to zero. You can always get a bigger CPU by stake EOS, or unstake and get your EOS back.

        </div>
        <div class="line">
          4. NET bandwidth, which is used to measure the computation time consumed during contract execution (calculated in ms) within the last 3 days. NET bandwidth, like CPU bandwidth, is a temporary drain. When the dosage is reduced, the consumption is reduced to zero. You can always get a bigger CPU by stake EOS, and unstake and get your EOS back.

        </div>

        <div class="line"><strong>Tips</strong></div>
        <div class="line">The price of RAM is changing in real time. The actual payment amount may be slightly different from the displayed amount on the page.</div>
        <div class="line">When you initiate any unstake, the refunding EOS will returns to your account after 72 hours. If the payment cannot be received automatically, you could click "Click to refund" at the "Resources " page after 72 hours, and it will be returns to you immediately.</div>
        <div class="line">CoinU supports buying RAM or stake EOS for any account.</div>
        <div class="line">The "Staked" of CoinU does not include the quantity of EOS that staked for others; "Refunding" includes both the quantity of EOS that staked for yourself and staked for others.</div>
      </section>
    </section>
</template>

<script>
    export default {
        name: "bandwidthandRAM"
    }
</script>

<style lang="stylus">

</style>
