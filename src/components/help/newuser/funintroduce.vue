<template>
  <section class="funcintroduce-wrapper help-page-wrapper" >
    <section class="zh detail" v-if="$i18n.locale==='zh_CN'">
      <h3>CoinU 功能介绍</h3>
      <h4>1.功能介绍</h4>
      <h5>1.1 多资产收款</h5>
      <div class="line">
        <strong>功能简介：</strong>
        收款界面显示默认地址，点击切换，生成新地址收款二维码，最多生成20个收款二维码，地址可循环展示，点击可复制
      </div>
      <div class="line">
        <strong>操作流程：</strong>
        首页—点击任意资产，进入资产详情—点击收款，显示收款二维码,可设置自己的收款数额—转账方扫描收款二维码，即可进入转账界面，收款地址及收款数额自动填入
      </div>
      <img class="two" src="@img/funcintroduce/1.png" :alt="$t('alt')">
      <img class="two" src="@img/funcintroduce/2.png" :alt="$t('alt')">
      <img class="two" src="@img/funcintroduce/3.png" :alt="$t('alt')">
      <img class="two" src="@img/funcintroduce/4.png" :alt="$t('alt')">

      <h5>1.2多资产转账</h5>
      <h6>1.2.1 转账入口</h6>
      <div class="line">首页点击任意资产，进入资产详情页</div>
      <div class="line">首页扫一扫，扫描任意收款二维码</div>
      <div class="line">
        <strong>操作流程：</strong>首页点击任意资产，进入资产详情—点击转账，进入转账界面，填写相应资产收款地址，选择余额充足地址，填写转账数额，输入支付密码，即可发送交易等待打包。
      </div>
      <div class="line">
        <strong>交易详情：</strong>交易记录可至资产详情交易列表查看，点击跳转交易详情，交易详情底部，点击在浏览器中查看，可至区块链浏览器，查看交易详情
      </div>
      <div class="line">
        <strong>BTC转账：</strong>
      </div>
      <div class="line">首页扫一扫，扫描BTC收款二维码，跳转BTC转账界面</div>
      <div class="line">首页点击BTC，进入BTC资产详情，点击转账，跳转BTC转账界面，输入或粘贴BTC收款地址，输入转账数额，可选择一般或快速矿工费，也可输入自定义矿工费，自定义矿工费不可小于默认的一般矿工费，输入支付密码，即注册时设置的密码，即可发送交易等待打包
      </div>
      <div class="line">
        BTC转账一般会在10分钟以内到账，你支付的矿工费越高，被矿工打包的速度将会越快
      </div>
      <div class="line">
        USDT、DKKT转账流程同BTC
      </div>
      <img class="two" src="@img/funcintroduce/5.png" :alt="$t('alt')">
      <img class="two" src="@img/funcintroduce/6.png" :alt="$t('alt')">


      <div class="line">
        <strong>ETH转账：</strong>
      </div>
      <div class="line">
        首页扫一扫，扫描ETH收款二维码，可跳转ETH转账界面
      </div>
      <div class="line">
        首页点击ETH，进入ETH资产详情，点击转账，跳转ETH转账界面，输入或粘贴ETH收款地址
      </div>
      <div class="line">
        输入转账数额，选择默认或自定义矿工费，自定义矿工费 gas limit最小值为21000，且gas price不可为0，输入支付密码，即可发送交易等待打包
      </div>
      <div class="line">
        ETH交易一般会在15秒左右到账
      </div>
      <div class="line">
        ERC 20 token转账流程同ETH
      </div>
      <img class="two" src="@img/funcintroduce/7.png" :alt="$t('alt')">
      <img class="two" src="@img/funcintroduce/8.png" :alt="$t('alt')">


      <h5>1.3资产管理</h5>
      <div class="line">
        <strong>功能简介：</strong>
        资产列表分为两部分，顶部为三个公链币，公链币下方为搜索添加的erc 20 token（代币列表），用户可根据token名称或合约地址搜索并添加任意token。页面右上方编辑按钮，用来隐藏首页资产为0的token
      </div>
      <div class="line">
        <strong>操作流程：</strong>
        CoinU首页—点击右上右上角“+”—点击搜索icon—输入token名称或合约地址—搜索结果列表点击添加—点击右上角保存按钮—返回首页—ETH列表新增token显示—再次进入资产管理界面—显示新增token—点击右上角编辑并隐藏余额为0的资产—资产为0的token滑块关闭，且首页不再显示该token
      </div>

      <el-row class="row">
        <el-col class="col" :sm="{span:8}">
          <img src="@img/funcintroduce/9.png" :alt="$t('alt')">
        </el-col>
        <el-col class="col" :sm="{span:8}">
          <img src="@img/funcintroduce/10.png" :alt="$t('alt')">
        </el-col>
        <el-col class="col" :sm="{span:8}">
          <img src="@img/funcintroduce/11.png" :alt="$t('alt')">
        </el-col>
      </el-row>


      <h5>1.4 Dapps</h5>
      <div class="line">用户可至应用tab，点击查看顶部图片，可了解具体使用方法</div>
      <img class="two" src="@img/funcintroduce/12.png" :alt="$t('alt')">
      <img class="two" src="@img/funcintroduce/13.png" :alt="$t('alt')">


      <h5>1.5设置</h5>
      <div class="line">
        <strong>新消息通知—</strong>
        包含所有的交易通知，点击任意通知可查看交易详情
      </div>
      <div class="line">
        <strong>指纹解锁—</strong>
        安卓端home键或灭屏即可弹出解锁界面，iOS端home键或灭屏十分钟后启动才可弹出解锁界面
      </div>
      <div class="line">
        <strong>修改密码—</strong>
        导入助记词，进入设置，修改密码界面，输入原密码，设置新密码，确认新密码即可修改成功
      </div>
      <div class="line">
        <strong>
          选择语言—
        </strong>
        CoinU目前支持中文及英文相互切换
      </div>
      <div class="line">
        <strong>默认货币—</strong>
        CoinU货币单位目前支持人民币及美元
      </div>
      <div class="line">
        <strong>意见反馈—</strong>
        用户可通过意见反馈入口，为我们提出宝贵的意见或者建议
      </div>
    </section>
    <section class="en detail" v-else-if="$i18n.locale==='en_US'">
      <h3>About CoinU</h3>
      <h4>1. Introduction of function</h4>
      <h5>1.1 Multi-currency  receiving assets</h5>
      <div class="line">
        <strong>Function introduction: </strong>
        The payment interface displays the default address, click to switch, generate a new address to receive the QR code, generate up to 20 collection QR codes, the address can be displayed cyclically, click to copy
      </div>
      <div class="line">
        <strong>Operation process:</strong>
        Homepage - click on any asset, enter asset details - click on the payment, display the QR code of the receipt
        You can set your own payment amount—the transfer party scans the receipt QR code to enter the transfer interface, and the payment address and the amount received are automatically filled in.
      </div>
      <img class="two" src="@img/funcintroduce/1-EN.png" :alt="$t('alt')">
      <img class="two" src="@img/funcintroduce/2-EN.png" :alt="$t('alt')">
      <img class="two" src="@img/funcintroduce/3-EN.png" :alt="$t('alt')">
      <img class="two" src="@img/funcintroduce/4-EN.png" :alt="$t('alt')">

      <h5>1.2 Multi-currency Payment</h5>
      <h6>1.2.1 Transfer entry</h6>
      <div class="line">Home Click on any asset to go to the asset details page</div>
      <div class="line">Home scan, scan any collection QR code</div>
      <div class="line">
        <strong>Operation process: </strong>
        Click on any asset on the home page to enter the asset details—click the transfer, enter the transfer interface, fill in the corresponding asset collection address, select the sufficient balance address, fill in the transfer amount, enter the payment password, and then send the transaction to wait for packaging.
      </div>
      <div class="line">
        <strong>Transaction details:</strong>
        Transaction history can be viewed in the asset details transaction list, click on the jump transaction details, click on the bottom of the transaction details, click on the browser, and go to the blockchain browser to view the transaction details.
      </div>
      <div class="line">
        <strong>BTC transfer:</strong>
      </div>
      <div class="line">Home scan, scan BTC collection QR code, jump BTC transfer interface
      </div>
      <div class="line">
        Home Click BTC, enter BTC asset details, click Transfer, jump to BTC transfer interface, enter or paste BTC collection address, enter transfer amount, choose general or fast miner fee, enter custom miner fee, custom miner fee Can not be less than the default general miner fee, enter the payment password, that is, the password set at the time of registration, you can send the transaction waiting for packaging
      </div>
      <div class="line">
        BTC transfers usually arrive within 10 minutes. The higher the miners you pay, the faster the package will be mined by the miners.
      </div>
      <div class="line">
        USDT, DKKT transfer process is the same as BTC
      </div>
      <img class="two" src="@img/funcintroduce/5-EN.png" :alt="$t('alt')">
      <img class="two" src="@img/funcintroduce/6-EN.png" :alt="$t('alt')">


      <div class="line">
        <strong>ETH Transfer：</strong>
      </div>
      <div class="line">
        Home scan, scan ETH collection QR code, you can jump to ETH transfer interface
      </div>
      <div class="line">
        Home Click ETH, enter the ETH asset details, click Transfer, jump to the ETH transfer interface, enter or paste the ETH payment address
      </div>
      <div class="line">
        Enter the transfer amount, choose the default or custom miner fee, the custom miner gas limit is 21000, and the gas price can't be 0. Enter the payment password, you can send the transaction and wait for the package.
      </div>
      <div class="line">
        ETH transactions will generally arrive in about 15 seconds.
      </div>
      <div class="line">
        ERC 20 token transfer process is the same as ETH
      </div>
      <img class="two" src="@img/funcintroduce/7-EN.png" :alt="$t('alt')">
      <img class="two" src="@img/funcintroduce/8-EN.png" :alt="$t('alt')">


      <h5>1.3 Asset Management</h5>
      <div class="line">
        <strong>Function introduction:</strong>
         The asset list is divided into two parts. The top is three public chain coins. Below the public chain coins is the erc 20 token (token list) added by the search. Users can search for and add any token according to the token name or contract address. The edit button at the top right of the page is used to hide the token with the home asset of 0.
      </div>
      <div class="line">
        <strong>Operation flow:</strong>
         CoinU homepage - click on the top right upper right corner "+" - click search icon - enter the token name or contract address - search result list click add - click the upper right corner save button - return to the home page - ETH list add token display - re-enter the asset Management interface—displays the new token—click on the upper right corner to edit and hide the asset with balance 0. The token slider with asset 0 is closed, and the token is no longer displayed on the home page.
      </div>
      <el-row class="row">
        <el-col class="col" :sm="{span:8}">
          <img src="@img/funcintroduce/9-EN.png" :alt="$t('alt')">
        </el-col>
        <el-col class="col" :sm="{span:8}">
          <img src="@img/funcintroduce/10-EN.png" :alt="$t('alt')">
        </el-col>
        <el-col class="col" :sm="{span:8}">
          <img src="@img/funcintroduce/11-EN.png" :alt="$t('alt')">
        </el-col>
      </el-row>


      <h5>1.4 Dapps</h5>
      <div class="line">Users can go to the application tab, click on the top image to find out how to use it.</div>
      <img class="two" src="@img/funcintroduce/12-EN.png" :alt="$t('alt')">
      <img class="two" src="@img/funcintroduce/13-EN.png" :alt="$t('alt')">


      <h5>1.5 Setting</h5>
      <div class="line">
        <strong>New message notifications - </strong>
        including all transaction notifications, click on any notification to view transaction details
      </div>
      <div class="line">
        <strong>Fingerprint unlocking -</strong>
         the home button or the screen of the Android will pop up the unlock interface. The iOS home button or the screen will be activated after ten minutes.
        Unlock interface
      </div>
      <div class="line">
        <strong>Change Password -</strong>
        Import the mnemonic, enter the settings, change the password interface, enter the original password, set a new password, confirm the new password and modify it successfully.
      </div>
      <div class="line">
        <strong>
          Select language -
        </strong>
         CoinU currently supports Chinese and English switching
      </div>
      <div class="line">
        <strong>Default currency -</strong>
         CoinU currency unit currently supports RMB and USD
      </div>
      <div class="line">
        <strong>Feedback -</strong>
         Users can provide us with valuable comments or suggestions through feedback feedback
      </div>
    </section>
  </section>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: "funintroduce",
    computed:{
      ...mapState({
        x:state=>state.globalInfo.currentResolution.width
      })
    }
  }
</script>

<style lang="stylus">
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
