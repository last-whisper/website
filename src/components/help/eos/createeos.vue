<template>
    <section class="create-eos-wrapper help-page-wrapper">
      <section class="zh detail" v-if="$i18n.locale==='zh_CN'">
        <h3>如何创建EOS账户？</h3>

        <h4>1. 邀请朋友帮助创建EOS账户</h4>
        <h5>1.1 第一步 输入EOS账户</h5>

        <div class="line" >
          输入你想要创建的EOS账户，比如imaccount123。请谨慎取名，EOS账户名称同时也是你的EOS收款地址。
        </div>
        <el-row class="row">
          <el-col class="col" :sm="{span:8}">
            <img src="@img/eos/1.png" :alt="$t('alt')">
          </el-col>
          <el-col class="col" :sm="{span:8}">
            <img src="@img/eos/2.png" :alt="$t('alt')">
          </el-col>
          <el-col class="col" :sm="{span:8}">
            <img src="@img/eos/3.png" :alt="$t('alt')">
          </el-col>
        </el-row>
        <div class="line">Owner公钥：最高等级权限，拥有账户的所有权。</div>
        <div class="line">Active公钥 ：主要用来发送交易、投票或者进行高级别的账户修改操作。</div>

        <h5>1.2 第二步 分享二维码</h5>
        <div class="line">点击“下一步”，你将看到包含你的账户名称的二维码。点击“分享二维码”，将图片分享给你的朋友或者保存到相册。</div>
        <img src="@img/eos/4.png" :alt="$t('alt')">

        <h5>1.3 第三步 扫码支付 </h5>
        <div class="line">1) 对方打开CoinU APP，在首页点击扫码按钮，从相册中选择包含EOS账户信息的二维码图片并扫描。</div>
        <div class="line">
          2) 对方会看到“账户订单”页面，核对账户名称、创建账户需要的EOS数量，点击“确定”按钮并选择账户支付。
          操作成功表示你成功创建了EOS账户。
        </div>
        <img class="two" src="@img/eos/5.png" :alt="$t('alt')">
        <img class="two" src="@img/eos/6.jpg" :alt="$t('alt')">

        <h5>1.4 第四步 激活账户</h5>
        <div class="line">在“账户信息”页面点击“激活账户”，到达EOS主页，此时可以看到你创建的EOS账户。</div>
        <img class="two" src="@img/eos/7.png" :alt="$t('alt')">
        <img class="two" src="@img/eos/8.jpg" :alt="$t('alt')">

        <div class="line"><strong>注意事项</strong></div>
        <div class="line">EOS账户注册成功后，你的助记词中将包含EOS账户信息，请妥善保管你的助记词。</div>
        <div class="line">EOS账户注册成功后，你可以在EOS区块浏览器中查询账户明细。</div>
        <div class="line">CoinU推荐你使用 <a href="https://eospark.com" target="_blank">https://eospark.com</a> 或者
          <a href="https://eosflare.io" target="_blank">https://eosflare.io</a> </div>

        <h4>2. 自助创建新的EOS账户</h4>
        <h5>2.1 第一步 导入EOS私钥</h5>
        <div class="line">在EOS主页，点击“导入私钥”，在“导入私钥”页面输入你EOS账户的Active私钥，这种类型的私钥一般以数字5开头。
        </div>

        <el-row class="row">
          <el-col class="col" :sm="{span:8}">
            <img src="@img/eos/9.png" :alt="$t('alt')">
          </el-col>
          <el-col class="col" :sm="{span:8}">
            <img src="@img/eos/10.png" :alt="$t('alt')">
          </el-col>
          <el-col class="col" :sm="{span:8}">
            <img src="@img/eos/11.jpg" :alt="$t('alt')">
          </el-col>
        </el-row>

        <div class="line">
          1) 导入成功后回到CoinU首页，点击扫码按钮，从相册中选择包含EOS账户信息的二维码图片并扫描。
        </div>
        <div class="line">
          2) 在“账户订单”页面，核对账户名称、创建账户需要的EOS数量，点击“确定”按钮并选择账户支付。
          操作成功即成功创建了EOS账户。
        </div>
        <div class="line"><strong>注意事项</strong></div>
        <div class="line">自助创建新的EOS账户，请保证导入私钥的账户EOS余额充足。</div>

      </section>
      <section class="en detail" v-else-if="$i18n.locale==='en_US'">
        <h3>How should i create an eos account?</h3>

        <h4>1. Invite friend to help you create an EOS account</h4>
        <h5>1.1 NO.1  Input the EOS account</h5>

        <div class="line" >
          At first,please input the EOS account you want to create , such as imaccount123.  The name is also your receive address of EOS wallet, name it carefully !
        </div>
        <el-row class="row">
          <el-col class="col" :sm="{span:8}">
            <img src="@img/eos/1-EN.png" :alt="$t('alt')">
          </el-col>
          <el-col class="col" :sm="{span:8}">
            <img src="@img/eos/2-EN.png" :alt="$t('alt')">
          </el-col>
          <el-col class="col" :sm="{span:8}">
            <img src="@img/eos/3-EN.png" :alt="$t('alt')">
          </el-col>
        </el-row>
        <div class="line">Owner permission: the highest level of authority to own the account.</div>
        <div class="line">Active permission: can do everything such as transactions, voting or perform high-level account modification, except change the owner.</div>

        <h5>1.2 NO.2 Send QR code to Chat</h5>
        <div class="line">Click "next" and you will find a QR code which contains your account name. Click "Send to Chat" to share the pictures with your friends or save it to album.</div>
        <img src="@img/eos/4-EN.png" :alt="$t('alt')">

        <h5>1.3 NO.3 Scan QR code to pay</h5>
        <div class="line">1) ‘Friend’ should opens CoinU APP, clicks the scanning button at the home page, and select the QR code picture contains the EOS account information from album and scan.</div>
        <div class="line">
          2) ‘Friend’will find the "Account order" page,  confirm the account name, the quantity of EOS pay for creation, click "Ok" button and select the payment account.
          Successful operation means you successfully created an EOS account.
        </div>
        <img class="two" src="@img/eos/5-EN.png" :alt="$t('alt')">
        <img class="two" src="@img/eos/6-EN.jpg" :alt="$t('alt')">

        <h5>1.4 NO.4 Activate Account</h5>
        <div class="line">Click "Activate account" at "Account information" page, you will find the EOS account that you created.</div>
        <img class="two" src="@img/eos/7-EN.png" :alt="$t('alt')">
        <img class="two" src="@img/eos/8-EN.jpg" :alt="$t('alt')">

        <div class="line"><strong>Tips</strong></div>
        <div class="line">After successful created, your mnemonics will related to EOS account information. Please keep your mnemonic in a safe place.</div>
        <div class="line">After successfully created, you can view details at EOS Block Browser.</div>
        <div class="line">Such as <a href="https://eospark.com" target="_blank">https://eospark.com</a> or
          <a href="https://eosflare.io" target="_blank">https://eosflare.io</a> </div>

        <h4>2. Creates a new EOS account by yourself</h4>
        <h5>2.1 NO.1 import the EOS private key</h5>
        <div class="line">
          At EOS homepage, click "Import Account" and input EOS main network Active Private Key. The type of private key usually starts with the 5.
        </div>

        <el-row class="row">
          <el-col class="col" :sm="{span:8}">
            <img src="@img/eos/9-EN.png" :alt="$t('alt')">
          </el-col>
          <el-col class="col" :sm="{span:8}">
            <img src="@img/eos/10-EN.png" :alt="$t('alt')">
          </el-col>
          <el-col class="col" :sm="{span:8}">
            <img src="@img/eos/11-EN.jpg" :alt="$t('alt')">
          </el-col>
        </el-row>

        <div class="line">
          1) After importing Active Private Key successful, clicks the scanning button at the home page, and select the QR code picture contains the EOS account information from album and scan.
        </div>
        <div class="line">
          2) On the "Account order" page, confirm the account name, the quantity of EOS pay for creation, click "Ok" button and select the payment account.
          Successful operation means you successfully created an EOS account.
        </div>
        <div class="line"><strong>Tips</strong></div>
        <div class="line">Self-created a new EOS account, please ensure that the account with the private key imported has sufficient EOS balance.</div>
      </section>
    </section>
</template>

<script>
    export default {
        name: "createeos"
    }
</script>

<style scoped lang="stylus">
  .row
    padding 20px 0
    @media screen and (min-width :768px)
      margin-left -30px
    .col
      box-sizing border-box
      padding 0 30px
      text-align center
    @media screen and (max-width :767px)
      .col
        box-sizing border-box
        padding 0 20%
        text-align center
        img
          width 100% !important

</style>
