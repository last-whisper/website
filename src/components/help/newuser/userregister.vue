<template>
  <section class="userregister-wrapper help-page-wrapper">
    <section class="zh detail" v-if="$i18n.locale==='zh_CN'">
      <h3>创建和导入钱包</h3>
      <h4>1.用户注册</h4>
      <div class="line">用户下载完成，进入启动界面</div>
      <h5>1.1 创建钱包</h5>
      <div class="line">新用户选择创建钱包，根据引导进行操作，备份并确认助记词，设置使用密码，进入CoinU首页</div>
      <img class="two" src="@img/userregister/1.png" alt="$t('alt')">
      <img class="two" src="@img/userregister/2.png" alt="$t('alt')">
      <img class="two" src="@img/userregister/3.png" alt="$t('alt')">
      <img class="two" src="@img/userregister/4.png" alt="$t('alt')">
      <img class="two" src="@img/userregister/5.png" alt="$t('alt')">
      <img class="two" src="@img/userregister/6.png" alt="$t('alt')">
      <img class="two" src="@img/userregister/7.png" alt="$t('alt')">
      <img class="two" src="@img/userregister/8.png" alt="$t('alt')">

      <h5>1.2 导入钱包</h5>
      <div class="line">
        已有钱包账号的用户，选择导入钱包入口，导入12位助记词（兼容其他遵循BIP32标准的钱包），设置好密码后，进入CoinU首页
      </div>
      <img class="two" src="@img/userregister/9.png" alt="$t('alt')">
      <img class="two" src="@img/userregister/10.png" alt="$t('alt')">
      <img class="two" src="@img/userregister/11.png" alt="$t('alt')">
      <img class="two" src="@img/userregister/12.png" alt="$t('alt')">
      <img class="two" src="@img/userregister/13.png" alt="$t('alt')">
      <img class="two" src="@img/userregister/14.png" alt="$t('alt')">

    </section>
    <section class="en detail" v-else-if="$i18n.locale==='en_US'">
      <h3>Create and import wallet</h3>
      <h4>1. User registration</h4>
      <div class="line">The user download is complete and enter the startup interface.</div>
      <h5>1.1 How can I create a wallet?</h5>
      <div class="line">
        The new user chooses to create a wallet, operate according to the boot, back up and confirm the mnemonic, set the password, and enter the CoinU homepage.
      </div>
      <img class="two" src="@img/userregister/1-EN.png" alt="$t('alt')">
      <img class="two" src="@img/userregister/2-EN.png" alt="$t('alt')">
      <img class="two" src="@img/userregister/3-EN.png" alt="$t('alt')">
      <img class="two" src="@img/userregister/4-EN.png" alt="$t('alt')">
      <img class="two" src="@img/userregister/5-EN.png" alt="$t('alt')">
      <img class="two" src="@img/userregister/6-EN.png" alt="$t('alt')">
      <img class="two" src="@img/userregister/7-EN.png" alt="$t('alt')">
      <img class="two" src="@img/userregister/8-EN.png" alt="$t('alt')">

      <h5>1.2 How can I import a wallet?</h5>
      <div class="line">
        Users who have a wallet account, choose to import the wallet entry, import 12 mnemonics (compatible with other wallets that follow the BIP32 standard), set a password and enter the CoinU homepage.
      </div>
      <img class="two" src="@img/userregister/9-EN.png" alt="$t('alt')">
      <img class="two" src="@img/userregister/10-EN.png" alt="$t('alt')">
      <img class="two" src="@img/userregister/11-EN.png" alt="$t('alt')">
      <img class="two" src="@img/userregister/12-EN.png" alt="$t('alt')">
      <img class="two" src="@img/userregister/13-EN.png" alt="$t('alt')">
      <img class="two" src="@img/userregister/14-EN.png" alt="$t('alt')">
    </section>
  </section>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: "createwallet",
    computed:{
      ...mapState({
        x:state=>state.globalInfo.currentResolution.width
      })
    }
  }
</script>

<style lang="stylus">

</style>
