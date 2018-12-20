<template>
  <section class="help-page-wrapper">
    <section class="detail zh" v-if="$i18n.locale==='zh_CN'">
      <div class="line">
        <strong>Bit-Z集团推出去中心化多链钱包CoinU，集赞瓜分10万VTC！</strong>
      </div>
      <div class="line">
        <strong>开始时间：</strong>
        香港时间 2018 年 9 月 20 日 10:00
      </div>
      <div class="line">
        <strong>结束时间：</strong>
        香港时间 2018 年 9 月 26 日 14:00
      </div>
      <div class="line">
        <strong>活动规则：</strong>
      </div>
      <ul>
        <li>1. 下载并创建CoinU钱包。</li>
        <li>2. 分享下方活动海报及文字至微信朋友圈（不设置分组）。</li>
        <li>3. 集满88个赞即可得66VTC，共10万VTC奖励，先到先得，奖完为止。</li>
        <li>4. 提交集赞截图、Bit-Z UID、CoinU ETH任一收款地址至表单
           <a target="_blank" href="https://wj.qq.com/s/2700289/e043">表单链接</a>
          。
        </li>
        <li>5. 活动奖励将于活动结束后7个工作日内发放至Bit-Z账户。</li>
        <li>6. CoinU保留活动解释权及对参与活动用户作弊行为的处理权。</li>
      </ul>
      <img src="@img/announcements/1.jpg" :alt="$t('alt')">
      <div class="line">
        分享文字：Bit-Z孵化，CoinU去中心化多链钱包正式上线，我已使用，邀你体验！
      </div>
      <div class="line">
        提交集赞截图、Bit-Z UID、CoinU ETH任一收款地址至表单，即可获得66 VTC:
        <a href="https://wj.qq.com/s/2700289/e043" target="_blank">https://wj.qq.com/s/2700289/e043</a>
      </div>
      <div class="line">
        CoinU 中文社区（Telegram）:<a target="_blank" href="https://t.me/CoinU_CN">https://t.me/CoinU_CN</a>
      </div>
      <div class="line">
        <strong>感谢您对CoinU的支持！</strong>

      </div>
      <div class="line"><strong>CoinU 团队</strong></div>
      <div class="line"><strong>2018年9月19日</strong></div>
    </section>
    <section class="detail zh" v-else-if="$i18n.locale==='en_US'">
      <div class="line">
        <strong>Bit-Z Launched CoinU, A Decentralized Multi-Chain Wallet. Collect  Likes, Win  100,000 VTC.</strong>
      </div>
      <div class="line">
        <strong>Time:</strong>
        Sep 20, 2018 10:00:00 (UTC/GMT+08:00)
      </div>
      <div class="line">
        <strong>Time:</strong>
        Sep 26, 2018 14:00:00 (UTC/GMT+08:00)
      </div>
      <div class="line">
        <strong>Rules:</strong>
      </div>
      <ul>
        <li>1. Download  CoinU  and  create  a   wallet.</li>
        <li>2. Share the poster and text  to the  moments  of  WeChat (no grouping).</li>
        <li>3. Collect 88 likes, win 66 VTC. A total of 100,000 VTC , first come first served.</li>
        <li>4. Submit a screenshot of the collection likes, Bit-Z UID, and any CoinU ETH payment address.

           <a target="_blank" href="https://wj.qq.com/s/2700289/e043">Form link</a>
          .
        </li>
        <li>5. The award will be distributed within 7 working days after the competition.</li>
        <li>6. CoinU reserves the right of final explanation.</li>
      </ul>
      <img src="@img/announcements/1-EN.jpg" :alt="$t('alt')">
      <div class="line">
        Share  the  text : Incubated by Bit-Z Group, Decentralized  Multi-currency  Wallet. I has used, invite you to experience.
      </div>
      <div class="line">
        Submit a screenshot of the collection likes, Bit-Z UID, and any CoinU ETH payment address. Win 66  VTC, the  form  link:
        <a href="https://wj.qq.com/s/2700289/e043" target="_blank">https://wj.qq.com/s/2700289/e043</a>
      </div>
      <div class="line">
        CoinU  Chinese  Group (Telegram):<a target="_blank" href="https://t.me/CoinU_CN">https://t.me/CoinU_CN</a>
      </div>
      <div class="line">
        <strong>Thank you for your support!</strong>

      </div>
      <div class="line"><strong>CoinU   Team</strong> </div>
      <div class="line"><strong>Sep  20,  2018</strong> </div>
    </section>
  </section>
</template>

<script>
  export default {
    name: "activity2018-9-20",
  }
</script>

<style lang="stylus">

</style>
