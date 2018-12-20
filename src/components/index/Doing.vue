<template>
    <section id="doing" class="doing-warpper">
      <section class="doing">
        <img src="@img/light.png" :alt="$t('alt')">
        <div class="title">{{$t('doing.title')}}</div>
        <section>
          <p
            v-for="(item,index) in $t('doing.introduce')"
            :key="index"
            :class="{'en':isEnglish}"
          >
            {{item}}
          </p>
        </section>
        <img class="arrow" src="@img/arrow.png" :alt="$t('alt')">
      </section>
    </section>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: "Doing",
    computed:{
      ...mapState({
        lang:state=>state.globalInfo.currentLang
      }),
      isEnglish(){
        if(this.lang === 'en') return true;
        return false
      }
    }
  }
</script>

<style lang="stylus">
  .doing-warpper
    background #f6f7fc
    .doing
      position relative
      padding 100px 0
      text-align center
      max-width 1000px
      margin auto
      .title
        font-size 36px
        color #3e4456
        margin 64px 0
        @media screen and (max-width:767px)
          font-size:30px
      p
        font-size 16px
        line-height 26px
        margin-bottom 14px
        color #999
        padding 0 15px
      .arrow
        width 100px
        position absolute
        bottom -50px
        margin auto
        left 0
        right 0
      @media screen and (min-width:1360px)
        p:nth-of-type(3)
          margin-bottom 100px
      @media screen and (max-width:1200px)
        p.en
          line-height 24px
          padding 15px
          margin-bottom 0
        .title
          margin 32px 0
      @media screen and (max-width:767px)
        p
          text-align left
          margin-bottom 0
          line-height 32px
          padding 15px


</style>
