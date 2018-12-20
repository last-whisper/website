<template>
  <section id="concepts-wrapper" class="concepts-wrapper">
    <section class="question" :class="$i18n.locale">
      <ul>
        <li
          class="item-list"
          v-for="(item,index) in $t('docs.content')"
          :key="index"
        >
          <h3>{{(index+1)+$t('docs.titlePoint')+item.ask}}</h3>
          <ul v-if="item.answer">
            <li
              v-for="(i,n) in item.answer"
              :key="n"
            >
              {{$t('docs.itemPoint')+i}}
            </li>
          </ul>
          <dl v-if="item.subAsk">
            <dt v-for="(i,n) in item.subAsk" :key="n">
              <h4>{{i.question}}</h4>
              <p v-for="(k,j) in i.answer" :key="j">
                {{$t('docs.itemPoint')+k}}
              </p>
            </dt>
          </dl>
        </li>
      </ul>
    </section>
  </section>
</template>

<script>
  export default {
    name: "concepts"
  }
</script>

<style lang="stylus">
  #concepts-wrapper
    .question
      li.item-list
        width 100%
        margin-bottom 10px
        padding-bottom 10px
        border-bottom 1px solid #e5e5e5
        ul li
          font-size 14px
          line-height 40px
          color #666
      h3
        font-size 18px
        color #0095e3
        line-height 48px
      h4
        line-height 40px
        font-size 14px
        color #6b6b6b
      dl
        padding-left 30px
        line-height 40px
        font-size 14px
        p
          color #666
        @media screen and (max-width :767px)
          padding-left 10px
    .question.zh_CN,.question.zh_HK
      word-break break-all
      text-align justify
    .question.en_US
      dl
        padding-left 10px
</style>
