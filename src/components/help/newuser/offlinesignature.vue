<template>
  <section class="offline-wrapper help-page-wrapper" >
    <section class="zh detail" v-if="$i18n.locale==='zh_CN'">
      <h3>CoinU钱包"离线签名"使用教程</h3>
      <div class="version">
        <p>更新时间:2018/10/18</p>
        <p>应用版本: V1.1.2.1</p>
      </div>
      <img :class="{'litter-banner':x<768}" src="@img/offlinesignature/1.jpg" :alt="$t('alt')">
      <div class="line">
        <strong>使用前须知：</strong>
      </div>
      <ul>
        <li>1.请准备好两个没有Root过或者没有"越狱"过的手机；</li>
        <li>2.从CoinU官网或者从应用商店下载CoinU钱包后，选择"导入钱包"或者"创建钱包"，根据页面提示到达首页。</li>
        <li>3.在确认余额充足的情况下将其中一款手机断开网络或者打开飞行模式，作为冷钱包备用。</li>
      </ul>
      <h4>1.使用热钱包创建交易</h4>
      <h5>1.1发送交易入口</h5>
      <div class="line">
        首页选择任意资产—点击进入资产主页—点击资产主页右上角离线签名入口，即可进入创建离线签名交易的页面。（ETH“离线签名”须点击资产主页右上角“+”，选择“离线签名”。）
      </div>

      <h5>1.2操作流程</h5>
      <div class="line">
        首页—资产主页—点击右上角离线签名图标，进入创建离线签名交易的页面—点击将要签名资产，进入热钱包发送交易界面—可以通过扫一扫或复制粘贴接收地址，扫一扫填入转出地址 <strong>（该地址为冷钱包地址）</strong>— 输入转账数额—选择默认矿工费或自定义矿工费—点击下一步—生成交易二维码
      </div>
      <img class="two" src="@img/offlinesignature/2.jpg" :alt="$t('alt')">
      <img class="two" src="@img/offlinesignature/3.jpg" :alt="$t('alt')">
      <img class="two" src="@img/offlinesignature/4.jpg" :alt="$t('alt')">
      <img class="two" src="@img/offlinesignature/5.jpg" :alt="$t('alt')">
      <img class="two" src="@img/offlinesignature/6.jpg" :alt="$t('alt')">

      <h4>2.使用冷钱包扫码签名</h4>
      <h5>2.1签名入口</h5>
      <div class="line">首页—断开网络或者打开飞行模式—点击将要签名资产—进入资产详情，点击离线签名</div>
      <img src="@img/offlinesignature/7.jpg" :alt="$t('alt')">

      <h5>2.2操作流程</h5>
      <div class="line">
        断网情况下—在首页点击将要签名的资产，进入资产详情—点击离线签名—打开扫一扫，扫描热钱包生成的交易二维码—读取交易信息—点击下一步，进行签名（输入钱包密码）—签名完成生成签名后二维码
      </div>
      <img class="two" src="@img/offlinesignature/8.jpg" :alt="$t('alt')">
      <img class="two" src="@img/offlinesignature/9.jpg" :alt="$t('alt')">

      <h4>3.使用热钱包广播交易</h4>
      <h5>3.1广播交易入口</h5>
      <div class="line">热钱包生成交易二维码的页面，点击“已扫码，下一步”。</div>

      <h5>3.2操作流程</h5>
      <div class="line">
        热钱包生成交易二维码的页面—“点击已扫码，下一步”—打开扫一扫，扫描冷钱包签名后的二维码—签名后的交易信息及交易ID将自动填入输入框—点击发送—交易广播成功，等待打包。
      </div>


      <el-row class="row">
        <el-col class="col" :sm="{span:8}">
          <img src="@img/offlinesignature/10.jpg" :alt="$t('alt')">
        </el-col>
        <el-col class="col" :sm="{span:8}">
          <img src="@img/offlinesignature/11.jpg" :alt="$t('alt')">
        </el-col>
        <el-col class="col" :sm="{span:8}">
          <img src="@img/offlinesignature/12.jpg" :alt="$t('alt')">
        </el-col>
      </el-row>

      <div class="line">操作完成</div>
      <div class="line">你可以在CoinU热钱包资产详情页查看交易记录及交易详情,或者复制交易ID在区块链浏览器中查看交易详情。</div>

      <img src="@img/offlinesignature/13.jpg" :alt="$t('alt')">

      <hr>
      <div class="line">注：</div>
      <div class="line">CoinU钱包”离线签名”功能适用于所有去中心化钱包。</div>
      <div class="line">你可以将你在其它去中心化钱包里创建的助记词导入到CoinU钱包后使用“离线签名”功能。</div>
      <div class="line">
        <strong>重要的事情说三遍</strong>
      </div>
      <div class="line">助记词=银行卡+取款密码，请一定保管好你的助记词，一旦丢失则无法找回！</div>
      <div class="line">助记词=银行卡+取款密码，请一定保管好你的助记词，一旦丢失则无法找回！</div>
      <div class="line">助记词=银行卡+取款密码，请一定保管好你的助记词，一旦丢失则无法找回！</div>

    </section>

    <section class="en detail" v-else-if="$i18n.locale==='en_US'">
      <h3>CoinU wallet "offline signature" tutorial</h3>
      <div class="version">
        <p>Update time : 2018/10/18</p>
        <p>Version: V1.1.2.1</p>
      </div>
      <img :class="{'litter-banner':x<768}" src="@img/offlinesignature/1-EN.jpg" :alt="$t('alt')">
      <div class="line">
        <strong>Before using:</strong>
      </div>
      <ul>
        <li>1. Please prepare two mobile phones that have not been rooted or have not been "jailbroken";</li>
        <li>2. After downloading the CoinU wallet from CoinU's official website or  APP Store, select "Import Wallet" or "Create Wallet" and follow the on-screen instructions to reach the homepage.</li>
        <li>3. Disconnect one of the mobile phones from the network or open the flight mode when the balance is sufficient, as a cold wallet.</li>
      </ul>
      <h4>1. Create a transaction using a hot wallet</h4>
      <h5>1.1 Sending a transaction entry</h5>
      <div class="line">
        Home Select any asset - click to enter the asset home page - click on the offline signature entry in the upper right corner of the asset home page to enter the page for creating an offline signature transaction. (ETH "Offline Signature" must click "+" in the upper right corner of the asset homepage and select "Offline Signature".)
      </div>

      <h5>1.2 Operation process</h5>
      <div class="line">
        Home—Asset Homepage—Click the offline signature icon in the upper right corner to enter the page for creating an offline signature transaction—click on the assets to be signed and enter the hot wallet to send the transaction interface — you can scan or copy the received address, scan and fill in the outgoing address (The address is the cold wallet address) — enter the transfer amount — choose the default miner fee or custom miner fee — click Next - generate the transaction QR code
      </div>
      <img class="two" src="@img/offlinesignature/2-EN.jpg" :alt="$t('alt')">
      <img class="two" src="@img/offlinesignature/3-EN.jpg" :alt="$t('alt')">
      <img class="two" src="@img/offlinesignature/4-EN.jpg" :alt="$t('alt')">
      <img class="two" src="@img/offlinesignature/5-EN.jpg" :alt="$t('alt')">
      <img class="two" src="@img/offlinesignature/6-EN.jpg" :alt="$t('alt')">

      <h4>2. Use cold wallet scan code signature</h4>
      <h5>2.1 Signature entry</h5>
      <div class="line">
        Home—Disconnect from the network or turn on airplane mode—click on the asset to be signed—enter asset details, click offline signature
      </div>
      <img src="@img/offlinesignature/7-EN.jpg" :alt="$t('alt')">

      <h5>2.2 Operation process</h5>
      <div class="line">
        In case of network disconnection — click on the asset to be signed on the home page, enter the asset details — click offline signature - open the sweep, scan the QR code generated by the hot wallet — read the transaction information - click next to sign (input wallet Password) — the signature is completed after the signature is generated.
      </div>
      <img class="two" src="@img/offlinesignature/8-EN.jpg" :alt="$t('alt')">
      <img class="two" src="@img/offlinesignature/9-EN.jpg" :alt="$t('alt')">

      <h4>3. Use hot wallet to broadcast transactions</h4>
      <h5>3.1 Broadcast transaction portal</h5>
      <div class="line">
        The hot wallet generates a QR code page and clicks “Scanned, Next”.
      </div>

      <h5>3.2 Operation process</h5>
      <div class="line">
        The hot wallet generates the QR code page of the transaction - "click on the scanned code, the next step" - open the sweep, scan the QR code after the signature of the cold wallet - the signed transaction information and transaction ID will be automatically filled in the input box - Click to send - the transaction broadcasts successfully, waiting for packaging.
      </div>


      <el-row class="row">
        <el-col class="col" :sm="{span:8}">
          <img src="@img/offlinesignature/10-EN.jpg" :alt="$t('alt')">
        </el-col>
        <el-col class="col" :sm="{span:8}">
          <img src="@img/offlinesignature/11-EN.jpg" :alt="$t('alt')">
        </el-col>
        <el-col class="col" :sm="{span:8}">
          <img src="@img/offlinesignature/12-EN.jpg" :alt="$t('alt')">
        </el-col>
      </el-row>

      <div class="line">The operation is complete.</div>
      <div class="line">
        You can view transaction history and transaction details on the CoinU Hot Wallet Asset Details page, or copy the transaction ID to view transaction details in the Blockchain Browser.
      </div>

      <img src="@img/offlinesignature/13-EN.jpg" :alt="$t('alt')">

      <hr>
      <div class="line">Tips:</div>
      <div class="line">The CoinU Wallet "Offline Signature" feature is available for all decentralized wallets.</div>
      <div class="line">
        You can use the "Offline Signature" feature after importing the mnemonics you created in other decentralized wallets into your CoinU wallet.
      </div>
      <div class="line">
        <strong>You have to remember</strong>
      </div>
      <div class="line">Mnemonic = bank card + withdrawal password, please keep your mnemonic, if you lose it, you can't
        retrieve it!
      </div>
      <div class="line">Mnemonic = bank card + withdrawal password, please keep your mnemonic, if you lose it, you can't
        retrieve it!
      </div>
      <div class="line">Mnemonic = bank card + withdrawal password, please keep your mnemonic, if you lose it, you can't
        retrieve it!
      </div>
    </section>

  </section>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: "offlinesignature",
    computed:{
      ...mapState({
        x:state=>state.globalInfo.currentResolution.width
      })
    }
  }
</script>

<style lang="stylus">
  .offline-wrapper .row
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
