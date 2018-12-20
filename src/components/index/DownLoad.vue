<template>
  <section id="down-load" class="down-load-warpper">
    <section ref="inner_warpper" class="down-load">
      <section ref="phone_part" class="phone-part auto">
        <div class="code">
          <el-row  class="code-inner">
            <el-col id="code-box" :span="9">
              <img ref="code_img" src="@img/code.jpg" :alt="$t('alt')">
            </el-col>
            <el-col id="down-load-box" :span="12" :offset="3">
              <button @click="toHelp">
                <img class="btn-android" src="@img/downloadm/iphone.png" :alt="$t('alt')">
              </button>
              <button @click="androidApk">
                <img class="btn-android" src="@img/downloadm/android.png" :alt="$t('alt')">
              </button>
            </el-col>
          </el-row>
        </div>
      </section>
      <img ref="bg" class="down-load-bg" src="@img/down-load-bg.png" :alt="$t('alt')">
    </section>
  </section>

</template>

<script>
  import {mapState} from 'vuex'
  import config from '@js/config'

  export default {
    name: "DownLoad",
    computed:{
      ...mapState({
        x:state=>state.globalInfo.currentResolution.width,
        y:state=>state.globalInfo.currentResolution.height
      })
    },
    methods:{
      setBgLeft(){
        let el = this.$refs.bg;
        let disparity = el.offsetWidth - this.x;
        if(disparity > 0){
          el.style.left = '-'+disparity/2+'px'
        }else {
          el.style.left = Math.abs(disparity/2)+'px'
        }
      },
      setHeight(){
        if(this.x<768){
          this.$refs.phone_part.style.height = this.y + 'px'
          this.$refs.inner_warpper.style.height = this.y + 'px'
        }else if(this.x>=768 && this.x<1360){
          this.$refs.phone_part.style.height = this.x/2 + 'px'
          this.$refs.inner_warpper.style.height = this.x/2 + 'px'

        }else {
          this.$refs.phone_part.style.height = this.x/3 + 'px'
          this.$refs.inner_warpper.style.height = this.x/3 + 'px'
        }
      },
      setBtnHeight(){
        document.getElementById('down-load-box').style.height =
        document.getElementById('code-box').offsetWidth+'px';
        let btnArr = document.querySelectorAll('.down-load-btn');
        btnArr.forEach(item=>{
          item.style.height = document.getElementById('code-box').offsetWidth/3.3 + 'px'
        })
      },

      toHelp(){
        this.$router.push({name:'help'})
      },
      androidApk(){
        window.location.href=config.links.androidApk
      }
    },
    mounted(){
      this.setBtnHeight();
      this.setHeight();
      this.$refs.bg.onload=()=>{
        this.setBgLeft()
      }
    },
    watch:{
      x:function () {
        this.setBtnHeight();
        this.setHeight();
        this.setBgLeft();
      }
    }
  }
</script>

<style lang="stylus">
  #down-load-box
    display flex
    flex-direction: column;
    justify-content: space-between;
  #down-load .down-load
    overflow hidden
    .phone-part
      left 0
      right 0
      width 100%
      position absolute
      z-index 2
      max-width 1200px
      overflow hidden
      text-align center
      font-size 0
      display flex
      align-items center
      .l-p
        left 0
        top -55%
        width 20%
        position absolute
        opacity .35
      .r-p
        width 30%
        bottom -40%
        right 0
        position absolute
        opacity .7
      .code
        margin auto
        width 35%
        text-align left
        button
          cursor pointer
          background none
          border none
          width 100%
          outline none
          margin-left 0
          text-align left
          font-size 0px
          span
            display flex
            align-items center
        img
          border-radius 5px
          width 100%
          box-sizing border-box
    position relative
    .down-load-bg
      z-index 1
      position absolute
      height 100%
</style>
