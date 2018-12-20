<template>
  <section id="activity-list" class="help-page-wrapper">
    <ul>
      <router-link
        v-for="(item,index) in $t('newactivitylist')"
        :key="index"
        tag="div"
        :to="item.link"
      >
        <span v-if="item.tag" class="tag">{{item.tag}}</span>{{item.title}}
      </router-link>
    </ul>
  </section>
</template>

<script>
  export default {
    name: "activityList"
  }
</script>

<style lang="stylus">
  #activity-list
    span.tag
      background: #ef0808;
      color: #fff;
      padding: 2px 8px;
      font-size: 16px;
      font-weight: bold;
      border-radius: 5px;
      margin-right: 15px;
      position: relative;
      font-style: italic;
      top: -3px;

    div
      padding-bottom 10px
      margin-bottom 10px
      cursor pointer
      font-size 22px
      line-height 36px
      min-height 40px
      border-bottom 1px solid #e8e8e8
      &:hover
        color #3a8ee6

</style>
