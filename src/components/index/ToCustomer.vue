<template>
    <section id="to-customer" class="to-customer-warpper">
      <section class="to-customer auto">
        <div class="title">
          {{$t('toCustomer.title')}}
        </div>
        <section class="introduce-list">
          <section
            class="introduce-list-item"
            v-for="(item,index) in $t('toCustomer.content')"
            :key="index"
          >
            <el-row>
              <!--文字-->
              <el-col class="text-part"
                :lg="{span:12,push:reverseDom(index,12)}"
                :md="{span:14,push:reverseDom(index,10)}"
                :sm="{span:17,push:reverseDom(index,7)}"
              >
                <el-row>
                  <el-col>
                    <!--标题-->
                    <el-row class="title-warpper">
                      <el-col :md="{span:3}" :sm="{span:2}" :xs="{span:3}">
                        <img class="icon-img" :src="iconUrl[index]" :alt="$t('alt')">
                      </el-col>
                      <el-col class="sub-title"
                        :md="{span:20,offset:1}"
                        :sm="{span:21,offset:1}"
                        :xs="{span:20,offset:1}"
                      >
                        {{item.subTitle}}
                      </el-col>
                    </el-row>

                    <!--介绍-->
                    <el-row>
                      <el-col
                        :md="{span:20,offset:4}"
                        :sm="{span:21,offset:3}"
                        :xs="{span:24}"
                        class="introduce" :class="{'en':isEnglish}"
                      >
                        {{item.introduce}}
                      </el-col>
                    </el-row>
                  </el-col>
                </el-row>
              </el-col>

              <!--图片-->
              <el-col class="pic-part"
                :lg="{span:12,pull:reverseDom(index,12)}"
                :md="{span:10,pull:reverseDom(index,14)}"
                :sm="{span:7,pull:reverseDom(index,17)}"
              >
                <img
                  class="customer-img"
                  :src="customerUrl[index]"
                  :alt="$t('alt')"
                >
              </el-col>
            </el-row>
          </section>
        </section>
        <img v-if="x>=768" class="arrow" src="@img/arrow.png" :alt="$t('alt')">
      </section>
    </section>
</template>

<script>
  import {mapState} from 'vuex'
  import customer1 from '@img/toCustomer1.png'
  import customer2 from '@img/toCustomer2.png'
  import customer3 from '@img/toCustomer3.png'
  import customer4 from '@img/toCustomer4.png'
  import customer5 from '@img/toCustomer5.png'
  import icon1 from '@img/num1.png'
  import icon2 from '@img/num2.png'
  import icon3 from '@img/num3.png'
  import icon4 from '@img/num4.png'
  import icon5 from '@img/num5.png'

  export default {
    name: "ToCustomer",
    data(){
      return{
        customerUrl:[customer1,customer2,customer3,customer4,customer5],
        iconUrl:[icon1,icon2,icon3,icon4,icon5]
      }
    },
    computed:{
      ...mapState({
        lang:state=>state.globalInfo.currentLang,
        x:state=>state.globalInfo.currentResolution.width,
      }),
      isEnglish(){
        if(this.lang === 'en') return true;
        return false
      }
    },
    methods:{
      reverseDom(index,n){
        if(index%2){
          return 0
        }
        return n
      }
    }
  }
</script>

<style lang="stylus">
#to-customer
  background #fff
.to-customer-warpper
  .to-customer
    position relative
    max-width 1000px
    padding 100px 0
    @media screen and (max-width:767px)
      padding-bottom 0
    .arrow
      width 100px
      position absolute
      bottom -50px
      z-index 10
      margin auto
      left 0
      right 0
    div.title
      font-size 36px
      margin-bottom 36px
      color #3e4456
      text-align center
      @media screen and (max-width:767px)
        font-size 30px
        margin-bottom 30px
    .introduce-list-item
      @media screen and (max-width:991px)
        padding 50px 0
        border-bottom 10px solid #f8f8f8
        &:last-child
          border-bottom none
      @media screen and (max-width:767px)
        padding 30px 15px
      overflow hidden
      .customer-img,.icon-img
        width 100%
      &>.el-row
        @media screen and (min-width:768px)
          display flex
          align-items center
      .title-warpper
        display flex
        align-items center
        margin-bottom 10px
        @media screen and (max-width:767px)
          margin-bottom 20px
      .text-part
        .sub-title
          font-size 28px
          color #0386f6
          @media screen and (max-width:767px)
            font-size 22px
        .introduce
          font-size 16px
          line-height 32px
          color #999
          text-align justify
          &.en
            text-align left
            text-indent 0
          @media screen and (max-width:767px)
            text-indent 2em
            margin-bottom 20px
        @media screen and (min-width:768px)
          padding 0 3%

</style>
