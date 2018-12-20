<template>
  <section ref="banner" class="banner-warpper" id="banner-warpper">
    <ul class="banner-list">
      <li
        @click="link(item.link)"
        ref="item" :key="index"
        v-for="(item,index) in imgList"
        class="banner-list-item"
      >
        <a>
          <img class="bg" :src="item.bg" :alt="$t('alt')">

          <img v-if="$i18n.locale==='zh_CN'" class="left pic"
               :src="size==='xs'?item.left.m:item.left.pc" :alt="$t('alt')">
          <img v-else-if="$i18n.locale==='en_US'" class="left pic"
               :src="size==='xs'?item.left.mEn:item.left.pcEn" :alt="$t('alt')">

          <img v-if="$i18n.locale==='zh_CN'" class="right pic"
               :src="size==='xs'?item.right.m:item.right.pc" :alt="$t('alt')">
          <img v-else-if="$i18n.locale==='en_US'" class="right pic"
               :src="size==='xs'?item.right.mEn:item.right.pcEn" :alt="$t('alt')">

        </a>
      </li>
      <el-row class="banner-progress" v-if="imgList.length>1">
        <el-col :span="12" :offset="6">
          <!--<div-->
            <!--class="banner-point"-->
            <!--v-for="(item,index) in imgList"-->
            <!--:class="{'wait':circleNum!==index}"-->
          <!--&gt;</div>-->
          <!--<el-progress-->
            <!--v-for="(item,index) in imgList"-->
            <!--:class="{'wait':circleNum!==index}"-->
            <!--type="circle"-->
            <!--:percentage="circleNum===index?progress:0"-->
            <!--color="#666"-->
            <!--:stroke-width="2"-->
            <!--:width="circleNum===index?15:10"-->
            <!--:show-text="false"-->
            <!--:key="index"-->
          <!--&gt;-->
          <!--</el-progress>-->
        </el-col>
      </el-row>
    </ul>
  </section>
</template>

<script>
  import {mapState} from 'vuex'
  import {getStyle} from "@js/tools"
  import {mapMutations} from 'vuex'
  import {TweenMax} from 'gsap'
  export default {
    name: "BannerList",
    data(){
      return {
        currentItem:0,
        t:null,
        progress:0,
        circleNum:0,
        imgList:[
          {
            link:{name:'createeos'},
            bg:'/static/img/banner12_17/bg0.png',
            dark:true,
            left:{
              pc:'/static/img/banner12_17/left0.png',
              pcEn:'/static/img/banner12_17/left0_en.png',
              m:'/static/img/banner12_17/left0.png',
              mEn:'/static/img/banner12_17/left0_en.png'
            },
            right:{
              pc:'/static/img/banner12_17/right0.png',
              pcEn:'/static/img/banner12_17/right0.png',
              m:'/static/img/banner12_17/right0.png',
              mEn:'/static/img/banner12_17/right0.png'
            },
            leftConfig:{
              before:{
                xl:{
                  left:'100%',
                  top:'33%',
                  maxWidth:'30%',
                  maxHeight:'40%'
                },
                lg:{
                  left:'100%',
                  top:'37%',
                  maxWidth:'40%',
                  maxHeight:'33%'
                },
                md:{
                  left:'100%',
                  top:'40%',
                  maxWidth:'40%',
                  maxHeight:'30%',
                },
                sm:{
                  left:'100%',
                  top:'40%',
                  maxWidth:'40%',
                  maxHeight:'30%',
                },
                xs:{
                  right:0,
                  left:0,
                  margin:'auto',
                  top:'-100%',
                  maxWidth:'80%',
                  maxHeight:'35%'
                }
              },
              after:{
                xl:{
                  left:'20%'
                },
                lg:{
                  left:'10%'
                },
                md:{
                  left:'10%',
                },
                sm:{
                  left:'10%',
                },
                xs:{
                  top:'20%'
                }
              }
            },
            rightConfig:{
              before:{
                xl:{
                  right:'-15%',
                  top:'30%',
                  width:'25%'
                },
                lg:{
                  right:'-10%',
                  top:'30%',
                  width:'30%'
                },
                md:{
                  right:'-50%',
                  top:'34%',
                  width:'33%'
                },
                sm:{
                  right:'-50%',
                  top:'34%',
                  width:'33%'
                },
                xs:{
                  left:0,
                  right:0,
                  margin:'auto',
                  bottom:'-110%',
                  maxWidth:'100%'
                }
              },
              after:{
                xl:{
                  right:'18%'
                },
                lg:{
                  right:'13%'
                },
                md:{
                  right:'10%',
                },
                sm:{
                  right:'10%',
                },
                xs:{
                  bottom:'10%'
                }
              }
            }
          },
          {
            bg:'/static/img/banner12_17/bg1.jpg',
            dark:true,
            left:{
              pc:'/static/img/banner12_17/left1.png',
              pcEn:'/static/img/banner12_17/left1_en.png',
              m:'/static/img/banner12_17/left1.png',
              mEn:'/static/img/banner12_17/left1_en.png'
            },
            right:{
              pc:'/static/img/banner12_17/right1.png',
              pcEn:'/static/img/banner12_17/right1_en.png',
              m:'/static/img/banner12_17/right1.png',
              mEn:'/static/img/banner12_17/right1_en.png'
            },
            leftConfig:{
              before:{
                xl:{
                  left:'100%',
                  top:'35%',
                  maxWidth:'40%',
                  maxHeight:'33%'
                },
                lg:{
                  left:'100%',
                  top:'40%',
                  maxWidth:'40%',
                  maxHeight:'28%'
                },
                md:{
                  left:'100%',
                  top:'40%',
                  maxWidth:'40%',
                  maxHeight:'30%',
                },
                sm:{
                  right:0,
                  left:0,
                  margin:'auto',
                  top:'-100%',
                  maxWidth:'70%',
                  maxHeight:'25%'
                },
                xs:{
                  right:0,
                  left:0,
                  margin:'auto',
                  top:'-100%',
                  maxWidth:'80%',
                  maxHeight:'35%'
                }
              },
              after:{
                xl:{
                  left:'20%'
                },
                lg:{
                  left:'10%'
                },
                md:{
                  left:'10%',
                },
                sm:{
                  top:'15%'
                },
                xs:{
                  top:'20%'
                }
              }
            },
            rightConfig:{
              before:{
                xl:{
                  right:'-15%',
                  top:'18%',
                  width:'35%'
                },
                lg:{
                  right:'-10%',
                  top:'41%',
                  width:'40%'
                },
                md:{
                  right:'-50%',
                  top:'36%',
                  width:'40%'
                },
                sm:{
                  left:0,
                  right:0,
                  margin:'auto',
                  top:'110%',
                  maxWidth:'50%'
                },
                xs:{
                  left:0,
                  right:0,
                  margin:'auto',
                  bottom:'-110%',
                  maxWidth:'100%'
                }
              },
              after:{
                xl:{
                  right:'15%'
                },
                lg:{
                  right:'10%'
                },
                md:{
                  right:'10%',
                },
                sm:{
                  top:'38%'
                },
                xs:{
                  bottom:'-1%'
                }
              }
            }
          },
          {
            link:{name:'offlinesignature'},
            bg:'/static/img/banner12_17/bg2.jpg',
            dark:true,
            left:{
              pc:'/static/img/banner12_17/left2.png',
              pcEn:'/static/img/banner12_17/left2_en.png',
              m:'/static/img/banner12_17/left2.png',
              mEn:'/static/img/banner12_17/left2_en.png'
            },
            right:{
              pc:'/static/img/banner12_17/right2.png',
              pcEn:'/static/img/banner12_17/right2.png',
              m:'/static/img/banner12_17/right2.png',
              mEn:'/static/img/banner12_17/right2.png'
            },
            leftConfig:{
              before:{
                xl:{
                  left:'100%',
                  top:'38%',
                  maxWidth:'44%',
                  maxHeight:'40%'
                },
                lg:{
                  left:'100%',
                  top:'40%',
                  maxWidth:'40%',
                  maxHeight:'28%'
                },
                md:{
                  left:'100%',
                  top:'40%',
                  maxWidth:'40%',
                  maxHeight:'30%',
                },
                sm:{
                  right:0,
                  left:0,
                  margin:'auto',
                  top:'-100%',
                  maxWidth:'70%',
                  maxHeight:'25%'
                },
                xs:{
                  right:0,
                  left:0,
                  margin:'auto',
                  top:'-100%',
                  maxWidth:'80%',
                  maxHeight:'35%'
                }
              },
              after:{
                xl:{
                  left:'20%'
                },
                lg:{
                  left:'10%'
                },
                md:{
                  left:'10%',
                },
                sm:{
                  top:'15%'
                },
                xs:{
                  top:'20%'
                }
              }
            },
            rightConfig:{
              before:{
                xl:{
                  right:'-15%',
                  top:'30%',
                  width:'25%'
                },
                lg:{
                  right:'-10%',
                  top:'30%',
                  width:'30%'
                },
                md:{
                  right:'-50%',
                  top:'36%',
                  width:'40%'
                },
                sm:{
                  left:0,
                  right:0,
                  margin:'auto',
                  top:'110%',
                  maxWidth:'50%'
                },
                xs:{
                  left:0,
                  right:0,
                  margin:'auto',
                  bottom:'-110%',
                  maxWidth:'100%'
                }
              },
              after:{
                xl:{
                  right:'18%'
                },
                lg:{
                  right:'13%'
                },
                md:{
                  right:'10%',
                },
                sm:{
                  top:'38%'
                },
                xs:{
                  bottom:'-1%'
                }
              }
            }
          },
        ],
        timer:null,
      }
    },
    computed:{
      ...mapState({
        x:state=>state.globalInfo.currentResolution.width,
        y:state=>state.globalInfo.currentResolution.height,
      }),
      size(){
        if(this.x>=1900){
          return 'xl';
        }else if(this.x>=1200 && this.x<1900){
          return 'lg';
        }else if(this.x>=992 && this.x<1200){
          return 'md';
        }else if(this.x>=768 && this.x<992){
          return 'sm';
        }else {
          return 'xs';
        }
      },
      totalItems(){
        return this.$refs.item.length
      },
      nowel(){
        this.$refs.item[this.currentItem].style.zIndex = 20;
        return this.$refs.item[this.currentItem]
      },
      nextel(){
        this.$refs.item[this.nextItem].style.zIndex = 30;
        this.$refs.item[this.nextItem].style.left = '100%';
        return this.$refs.item[this.nextItem]
      },
      prevel(){
        return this.$refs.item[this.prevItem]
      },
      nextItem(){
        if(this.currentItem + 1 >= this.totalItems){
          return 0
        }
        return this.currentItem + 1
      },
      prevItem(){
        if(this.currentItem - 1 < 0){
          return this.totalItems-1
        }
        return this.currentItem - 1
      },

    },
    methods:{
      ...mapMutations(['changeNavColor']),
      play(){//单次移动动画
        let This = this;
        this.t = new TimelineMax();
        this.timer=setInterval(()=>{
          this.progress =parseInt( (this.t.time()/this.t.totalDuration()) *100 );
        });
        //下一张进场
        this.t.to(this.nextel,1.5,{
          left:'0%',
          ease:Quint.easeOut,
          delay:3.5,
          onStart(){
            let rightPic = This.nextel.querySelector('.right');
            let leftPic = This.nextel.querySelector('.left');
            //调整，使banner与相应的配置参数吻合；
            let n = This.currentItem+1>This.totalItems-1?0:This.currentItem+1;
            This.changeNavColor(This.imgList[n].dark);
            if(rightPic) {
              let x = new TimelineMax();
              x.to(rightPic,1.5,{
                ease:Quint.easeOut,
                ...This.imgList[n].rightConfig.after[This.size],
                startAt:Object.assign(This.imgList[n].rightConfig.before[This.size],{opacity:1}) ,
              })
            };
            if(leftPic) {
              let y = new TimelineMax();
              y.to(leftPic,1.5,{
                ease:Quint.easeOut,
                ...This.imgList[n].leftConfig.after[This.size],
                startAt:Object.assign(This.imgList[n].leftConfig.before[This.size],{opacity:1})
              })
            }
          },
          onComplete(){
            This.progressPlay();
            clearInterval(This.timer)
          }
        },0);

        //当前张离场
        this.t.to(this.nowel,1.5,{
          left:'-50%',
          ease:Quint.easeOut,
          delay:3.5,
          onStart(){
            let rightPic = This.nowel.querySelector('.right');
            let leftPic = This.nowel.querySelector('.left');
            if(rightPic) {
              let x = new TimelineMax();
              x.to(rightPic,3,{
                ease:Quint.easeOut,
                left:'0%',
                onComplete(){
                  rightPic.removeAttribute('style')
                }
              })
            };
            if(leftPic) {
              let y = new TimelineMax();
              y.to(leftPic,2,{
                ease:Quint.easeOut,
                left:'0%',
                onComplete(){
                  leftPic.removeAttribute('style')
                }
              })
            }
          },
          onComplete(){
          //一屏动画结束，立即开始新的一屏
          This.autoPlay();
          //当当前张变成上一张的时候，初始化上一张的样式
          This.prevel?This.prevel.style.zIndex = 10:null;
          This.prevel?This.prevel.style.left = '0%':null;
        }
        },0);

      },
      autoPlay(){
        this.currentItem < this.totalItems-1 ? this.currentItem++ : this.currentItem = 0;
      },
      progressPlay(){
        this.circleNum < this.totalItems-1 ? this.circleNum++ : this.circleNum = 0;
      },
      setHeight(){
        if(this.x>=768){
          this.$refs.banner.removeAttribute('style');
          return
        }
        this.$refs.banner.style.height = this.y+'px';
      },
      setPicLeft(el=document.querySelectorAll('img.bg')){
        if(el.length){
          el.forEach(item=>{
            let disparity = item.offsetWidth - this.x;
            if(disparity >= 0){
              item.style.left = '-'+disparity/2+'px';
            }else {
              item.style.left = Math.abs(disparity)/2+'px'
            }
          })
        }else if(!el.length && el.length!==0){
          let disparity = el.offsetWidth - this.x;
          if(disparity >= 0){
            el.style.left = '-'+disparity/2+'px';
          }else {
            el.style.left = Math.abs(disparity)/2+'px'
          }
        }
      },
      link(link){
        if(link){
          this.$router.push(link)
        }
      }
    },
    mounted(){
      let This = this
      this.setHeight();
      //首屏加载动画
      let f_pic_left = document.querySelector('.banner-list-item').querySelector('.left');
      let f_pic_right = document.querySelector('.banner-list-item').querySelector('.right');

      if(f_pic_left){
        f_pic_left.onload=()=>{
          let x = new TimelineMax();
          x.to(f_pic_left,1.5,{
            ...This.imgList[0].leftConfig.after[This.size],
            opacity:1,
            ease:Quint.easeOut,
            startAt:{
              ...this.imgList[0].leftConfig.before[This.size],
              opacity:0
            }
          })
        }
      }
      if(f_pic_right){
        f_pic_right.onload=()=>{
          let x = new TimelineMax();
          x.to(f_pic_right,1.5,{
            ...This.imgList[0].rightConfig.after[This.size],
            opacity:1,
            ease:Quint.easeOut,
            startAt:{
              ...This.imgList[0].rightConfig.before[This.size],
              opacity:0
            }
          })
        }
      }

      let timer=null;
      //imgArr在生产环境中是通过数据获取到以后进行设置的！！！！！！！！！！！！！！！！
      this.changeNavColor(this.imgList[0].dark);
      let imgArr = document.querySelectorAll('img.bg');
      let completeImgNum = 0;
      imgArr.forEach((item,index)=>{
        item.onload=()=>{
          this.setPicLeft(item);
          completeImgNum++;
        };
        item.onerror=()=>{
          this.setPicLeft(item);
          completeImgNum++
        };
      });
      timer=setInterval(()=>{
        //当所有的banner背景图加载（成功与失败）完成并且有两张及以上的轮播图存在时，
        //开启自动播放
        if(completeImgNum === imgArr.length && imgArr.length>1){
          clearInterval(timer);
          this.play();
        }
      },20);

      this.$refs.item[this.currentItem].style.zIndex = 20;
    },
    created(){
    },
    watch:{
      x:function () {
        this.setPicLeft();
        this.setHeight()
      },
      y:function () {
        this.setPicLeft();
        this.setHeight()
      },
      currentItem:function () {
        this.play()
      }
    }
  }
</script>

<style lang="stylus">
  .banner-warpper
    img.left
      opacity 0
    img.right
      opacity 0
    width 100%
    position relative
    @media screen and (min-width:1200px)
      height 700px
    @media screen and (max-width:1199px) and (min-width:768px)
      height 540px
    ul
      position relative
      width 100%
      height 100%
      overflow hidden
      li
        cursor pointer
        width 100%
        height 100%
        position absolute
        overflow hidden
        z-index 1
        img.bg
          position absolute
          top:0
          left:0
          height 100%
        img.pic
          position absolute
          z-index 5


    .banner-progress
      position absolute
      height auto
      bottom 40px
      left 0
      z-index 50
      width 100%
      .el-col
        display flex
        justify-content center
      .banner-point
        display inline-block
        width 10px
        height 10px
        background rgba(0,0,0,.2)
        border-radius 50%
        margin 0 10px
        box-sizing border-box
      .wait
        background rgba(0,0,0,.4)
        border 1px solid #e0e0e0
      svg path
        transition none !important
</style>
