<template>
  <section class="help-page-wrapper">
    <section class="detail zh" v-if="$i18n.locale==='zh_CN'">
      <div class="line">
        <strong>CoinU去中心化多链钱包上线，注册分享瓜分100万VTC!</strong>
      </div>
      <div class="line">
        <strong>开始时间：</strong>
        香港时间 2018 年 9 月 30 日 15:00
      </div>
      <div class="line">
        <strong>结束时间：</strong>
        香港时间 2018 年 10 月 8 日 15:00
      </div>
      <div class="line">
        <strong>活动规则：</strong>
      </div>
      <ul>
        <li>1. 扫描海报二维码或点击 <a href="https://www.coinu.top/#down-load" target="_blank">https://www.coinu.top/#down-load</a> 下载 CoinU 钱包 ，并转入不少于0.1ETH资产（老用户直接转入即可）可以获得 38.88 VTC；</li>
        <li>2. CoinU 钱包用户分享活动“文案+海报”至微信朋友圈（不设置分组），或转发到三个币圈微信社群（大于200人） ，还可获得福利奖10.88 VTC（每人限领取一次）；</li>
        <li>3. 将分享朋友圈或社群的截图上传任一表单：
          <a href="http://cn.mikecrm.com/MLKJYMZ" target="_blank">表单1 </a>
          <a href="http://cn.mikecrm.com/Hy7CJZs" target="_blank">表单2 </a>
          <a href="http://cn.mikecrm.com/WqqEYyf" target="_blank">表单3 </a>（请勿重复提交）进行登记，活动结束后于7个工作日内我们会将奖励发放至 Bit-Z 账户（需完成二级认证）；
        </li>
        <li>
          4. 本次奖励共 100 万 VTC，送完为止;  参与活动的用户，提供 CoinU钱包内余额不少于0.1ETH的地址才可领取奖励哦；
        </li>
        <li>5.活动结束时，保持本人钱包账户总资产不小于0.1 ETH，我们将于香港时间 2018 年 10 月 8 日 15:00:00进行快照，符合条件的用户将发放奖励；</li>
        <li>6. 本次活动的最终解释权归CoinU团队所有，CoinU保留活动解释权及对参与活动用户作弊行为的处理权。</li>
      </ul>

      <div class="line">
        活动转发文案及海报：
      </div>
      <div class="line">
        CoinU去中心化多链钱包正式上线
      </div>
      <div class="line">
        由Bit-Z集团生态重磅推出 注册、分享瓜分100万VTC，送完为止
      </div>
      <div class="line">
        了解活动详情、登记领奖钱包地址请点击：<a href="https://support.bit-z.pro/hc/zh-cn/articles/360009808334" target="_blank">https://support.bit-z.pro/hc/zh-cn/articles/360009808334</a>
      </div>
      <img src="@img/announcements/2.jpg" :alt="$t('alt')">
      <div class="line">
        <strong>感谢您对CoinU的支持！</strong>
      </div>
      <div class="line"><strong>CoinU 团队</strong></div>
      <div class="line"><strong>2018年9月30日</strong></div>
    </section>
    <section class="detail zh" v-else-if="$i18n.locale==='en_US'">
      <div class="line">
        <strong>Decentralized  Cryptocurrency wallet  CoinU  has been  launched. Sign up and share  to  win  1000,000  VTC.</strong>
      </div>
      <div class="line">
        Activity  time: 2018/09/30 15:00 PM to 2018/10/08 15:00 PM (UTC).
      </div>
      <div class="line">
        <strong>Rules:</strong>
      </div>
      <ul>
        <li>1.Scan the poster QR code or <a href="https://www.coinu.top/#down-load" target="_blank">click</a> to download the CoinU wallet and transfer it to no less than 0.1 ETH assets (old users can directly transfer) to get 38.88 VTC;  </li>
        <li>CoinU wallet user sharing event "text + poster" to  WeChat moments (do not set up group) or forward to three  WeChat communities  about  blockchain (more than 200 people), win 10.88 VTC (Limit one person to one chance);</li>
        <li>3. Submit the screenshot of a shared  Wechat moments or a community to any form:
          <a href="http://cn.mikecrm.com/MLKJYMZ" target="_blank">Form 1 </a>
          <a href="http://cn.mikecrm.com/Hy7CJZs" target="_blank">Form 2  </a>
          <a href="http://cn.mikecrm.com/WqqEYyf" target="_blank">Form 3</a> (Do not submit twice). The award will be distributed within 7 working days after the competition.(users need to complete Level 2 Certification.)
        </li>
        <li>
          4. A total of 1000,000 VTC , first come first served. People who  complete the two requirements need to provide an address with a balance of not less than 0.1 ETH in the CoinU wallet to receive the reward;
        </li>
        <li>5.At the end of the event, keep the total assets of your wallet account at least 0.1 ETH. We will take a snapshot at 15:00 on October 8, 2018, Hong Kong time, and eligible users will be rewarded;</li>
        <li>6. CoinU reserves the right of final explanation.</li>
      </ul>

      <div class="line">
        Activity share  text and poster:
      </div>
      <div class="line">
        Decentralized  Cryptocurrency wallet  CoinU  has been  launched.
      </div>
      <div class="line">
        Incubated by Bit-Z Group. Sign up and share  to  win  1000,000  VTC.
        See all and  submit  form :<a href="https://support.bit-z.pro/hc/zh-cn/articles/360009808334" target="_blank">https://support.bit-z.pro/hc/zh-cn/articles/360009808334</a>
      </div>
      <img src="@img/announcements/2-EN.jpg" :alt="$t('alt')">
      <div class="line">
        <strong>Thank you for your support!</strong>
      </div>
      <div class="line"><strong>CoinU Team</strong> </div>
      <div class="line"><strong>Sep 30, 2018</strong> </div>
    </section>
  </section>
</template>

<script>
  export default {
    name: "activity2018-9-30",
    computed:{}
  }
</script>

<style lang="stylus">

</style>
