import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const globalInfo = {
  state:{
    currentResolution:{width:0,height:0},
    isMobile:false,
    system:null,
    currentLang:'zh',
    navFontColor:'#fff',
    headerMask:false,
    scrollTop:0,
    currentNavIndex:0,//当前匹配的导航的下标
    hashArr:[],
    isWeixin:false,//判断是否在微信
  },
  mutations:{
    changeIsWeixin(state,bool=false){
      state.isWeixin = bool;
    },
    changeResolution(state,obj={width:0,height:0}){
      state.currentResolution = obj
    },
    changeTerminal(state,bool=false){
      state.isMobile = bool
    },
    changeLang(state,str='zh'){
      state.currentLang = str
    },
    changeNavColor(state,bool=true){
      bool?state.navFontColor = '#fff':state.navFontColor = '#333';
    },
    changHeaderMask(state,bool=false){
      state.headerMask = bool
    },
    changeScrollTop(state,n=0){
      state.scrollTop = n
    },
    changeCurrentNavIndex(state,n=0){
      state.currentNavIndex = n
    },
    changeHashArr(state,arr){
      state.hashArr = arr
    },
    changeSystem(state,str='android'){
      state.system = str
    }
  },
  getters:{
    navColor(state){
      if(state.currentResolution.width<768){
        return '#333'
      }else if(state.headerMask){
        return '#fff'
      }
      return state.navFontColor
    }
  }
};



const store = new Vuex.Store({
  modules:{
    globalInfo
  }
});

export default store
