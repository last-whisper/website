import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App'
import VueI18n from 'vue-i18n'
import router from './router'
import store from '@/store'
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/common.stylus';
import 'element-ui/lib/theme-chalk/display.css';
import en_US from '@/lang/en_US'
import zh_CN from '@/lang/zh_CN'
import {cookies,userLang} from "@js/tools";

Vue.use(ElementUI);
Vue.use(VueI18n);
Vue.config.productionTip = false;



const i18n = new VueI18n({
  locale:cookies('language') || userLang(),
  messages:{
    zh_CN,
    en_US
  }
});

new Vue({
  el: '#coinu-wrapper',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
