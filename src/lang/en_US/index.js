export default {
  alt:'CoinU',
  nav:[
    {
      item:'Home',
      link:{name:'home'},
      subItem:[]
    },
    {
      item:'About',
      link:{name:'home',hash:'#to-customer'},
      subItem:[]
    },
    {
      item:'Download',
      link:{name:'home',hash:'#down-load'},
      subItem:[]
    },
    {
      item:'Help',
      link:{name:'help'},
      subItem:[]
    },
    {
      item:'Language',
      link:{},
      subItem:[
        {
          item:'简体中文',
          lang:'zh_CN',
          link:{}
        },
        {
          item:'English',
          lang:'en_US',
          link:{}
        }
      ]
    }
  ],
  doing:{
    title:'What are we doing?',
    introduce:[
      'We are always committed to developing a decentralized multi-currency wallet that supports the management of multiple encrypted digital currencies, helping users achieve full "log-on storage" of digital assets.',
      'Users do not need to put all the digital assets in the centralized transaction for asset custody, and do not have to worry about keeping their digital assets at the same time to remember multiple private keys at the same time.',
      'CoinU has helped you solve these problems.'
    ]
  },
  toCustomer:{
    title:'About CoinU',
    content:[
      {
        subTitle:'Decentralized wallet',
        introduce: 'Use only one set of mnemonic words to make it easy for you to manage all your digital assets easily. Support for BTC, ETH, USDT and all ERC20 Token, LTC, DOGE and EOS wallets are coming soon.'
      },
      {
        subTitle:'Your assets, you are the master',
        introduce: 'The mnemonic is completely kept by you. CoinU only generates mnemonics for you based on certain algorithms without storing backups. Anyone can\'t take your digital assets.'
      },
      {
        subTitle:'Multiple transaction addresses',
        introduce: 'CoinU can generate 20 transaction addresses for you, to meet your transfer needs in different scenarios, where the assets are placed. You can also transfer assets from an address where the asset is not zero.'
      },
      {
        subTitle:'Scan to read the QR code address',
        introduce: 'One-click scan code transfer address, CoinU can identify the currency according to the scanned information, easy to sweep the operation transfer, convenient and time-saving.'
      },
      {
        subTitle:'Reasonable transaction fee',
        introduce: 'Based on the operation of the blockchain network, CoinU calculates the most reasonable transaction fee for you, avoid your order will not be packaged. Inadvertently save you a lot of money transfer costs.'
      }
    ]
  },
  download:'Download',
  footer:{
    files:{
      filename:[
        {
          name:'Terms of Service',
          link:{name:'support'}
        },
        {
          name:'Privacy Policy',
          link:{name:'policy'}
        }
      ],
      join:'&'
    },
    email:'Email: support@creditshares.com',
    copyRight:'© Creditshares（Beijing）Technology Co., Ltd.',
    title:'Follow us'
  },
  //帮助中心
  pathNav:{
    menu:[{nav:'Home',link:{name:'home'}},{nav:'Help',link:{name:'help'}}],
    join:'/'
  },

  //帮助中心侧边栏导航
  helpSideBar:[
    {
      title:'Beginner\'s guide',
      children:[
        {
          name:'Download & install',
          link:{name:'help'}
        },
        {
          name:'User registration',
          link:{name:'userregister'}
        },
        {
          name:'Introduction',
          link:{name:'funcintroduce'}
        },
        {
          name:'Offline signature',
          link:{name:'offlinesignature'}
        },
        {
          name:'Supporting assets',
          link:{name:'supportassets'}
        }
      ]
    },
    {
      title:'Announcements',
      children:[
        {
          name:'Recent activity',
          link:{name:'newestactivity'}
        }
      ]
    },
    {
      title:'Blockchain knowledge',
      children:[
        {
          name:'Basic concept',
          link:{name:'concepts'}
        }
      ]
    },
    {
      title:'About EOS',
      children:[
        {
          name:'How to create',
          link:{name:'createeos'}
        },
        {
          name:'EOS account order',
          link:{name:'accountorder'}
        },
        {
          name:'Bandwidth and RAM',
          link:{name:'bandwidthandram'}
        }

      ]
    }
  ],
  //最新活动列表
  newactivitylist:[
    {
      title:'Decentralized  Cryptocurrency wallet  CoinU  has been  launched. Sign up and share  to  win  1000,000  VTC.',
      link:{name:'2018-9-30'},
    },
    {
      title:'Experience CoinU, Collect Likes, Win 100,000 VTC',
      link:{name:'2018-9-20'},
    },

  ],

  //区块链常见概念
  docs:{
    titlePoint:'.',
    itemPoint:'· ',
    content:[
      {
        ask:'How CoinU Wallet Decentralizes?',
        answer:['CoinU is a decentralized HD wallet,your wallet mnemonic is kept by youself. All your assets are stored in a blockchain network. CoinU Wallet will not host your assets.']
      },
      {
        ask:'What is mnemonic?',
        answer:[
          'The mnemonic is based on  BIP39 (Bitcoin Improvement Proposal) ,it is used to help you remember your private key more convenient.',
          'The mnemonic is equivalent to your private key and is another manifestation of your private key. Anyone who acquires your mnemonic, he could spend your assets.',
          ' If you reinstall CoinU or use another phone to stall CoinU , you can restore your wallet by importing your mnemonics.'
        ]
      },
      {
        ask:'What if i can’t find my mnemonic?',
        answer:['Since CoinU does not keep your mnemonic, once the mnemonic is lost, it will not be recovered. So please make sure you keep your mnemonics at somewhere safety.']
      },
      {
        ask:'What is BTC?',
        answer:[
          'BTC is cryptocurrency based on blockchain technology. The Bitcoin network is the first cryptocurrency system in history and has undergoned large-scale, long-term testing.',
          'BTC issuance will need to be carried out through mining. The circulation will be halved every four years. With a maximum of 21 million pieces, which cannot be over-issued.'
        ]
      },
      {
        ask:'What is ETH?',
        answer:[
          'ETH is the currency in Ethereum network. Ether is mainly used to purchase gas and paid to miners to keep running smart contracts in Ethereum network.',
          'ETH can also be generated by mining. At present, more than 10 million ethers can be generated through mining every year.'
        ]
      },
      {
        ask: 'What is DKKT?',
        answer:['DKKT is a kind of token based on the stable value currency Danish krone (DKK). The exchange rate is 1DKKT≈ 1 Danish krone.Geatest feature is that DKKT almost equivalent to RMB, 1 DKKT ≈ 1 RMB,  which has a good hedging function in cryptocurrency market.']
      },
      {
        ask:'About transaction fee?',
        subAsk:[
          {
            question:'What is transaction fee?',
            answer:[
              'The miners constantly construct the next block on the basis of the new block, compete for the bookkeeping rights through computational competition, and confirm the transfer transactions in blockchain network while the  process will consume electric power and hash rate. ',
              'The fee will be rewarded to miners, also prevented the Internet from being heavily attacked. Miners will have a preference for higher miner fee. When you pay too little, blocks which containing your transfer information may be packaged slowly or not packaged for a long time.'
            ]
          },
          {
            question:'Who gets the miners fees?',
            answer:['Transaction fee is earned by miners who are involved in the calculation competition. CoinU will not charge any fee.']
          }
        ]
      },
      {
        ask:'Receiving time for transfer',
        answer:[
          'Depending on the fee you pay.',
          'When you pay enough transaction fee, you will receive the BTC transfer within 1 hour , receive ETH about 15 seconds and receive DKKT within 1 minute .In addition, when the network is congested, it will affect the transfer time.'
        ]
      },
      {
        ask:'What should I do if I forget my wallet unlock password?',
        answer:['As long as you remember the mnemonic of the CoinU wallet, you can use it to reset the unlock password. The CoinU wallet supports fingerprint unlocking.']
      },
      {
        ask:'What is Gas? How is the transfer of ETH\'s miners\' fees calculated?',
        answer:[
          'Gas is a unit of measure for computing resources. Each transaction needs to include the Gas cap and the unit price of Gas. If the trade uses less than or equal to the upper limit of Gas, the transaction continues. On the contrary, the miners will cancel all the modifications, but the miners involved in the competition will still be able to receive a portion of the transaction costs.',
          'The miners accept or reject mining based on the price of Gas.',
          'Miner fee calculation method: Gas Price*Gas Limit'
        ]
      },
      {
        ask:'I obviously generated a lot of addresses in my wallet. Why can\'t I find all e addresses in the "address"?',
        answer:['To facilitate the transfer operation, the CoinU Wallet Address page only displays addresses with a non-zero balance.']
      },
      {
        ask: 'Can I import mnemonics generated in other wallets?',
        answer:['Yes. The CoinU wallet follows the BIP32, BIP39, and BIP44 standards, and you can use the same mnemonic (in any other wallet that follows the standard) to recover and manage your blockchain assets.']
      }
    ]
  },
  system:{
    ios:{
      appStore:'Download on the App Store',
      ipa:'Download enterprise release'
    },
    android:'Download'
  }

}
