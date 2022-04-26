import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import * as echarts from 'echarts';
import './mock/mockServe'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//import 'echarts-gl';
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$echarts = echarts
new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus=this
  },
  store,
  router
}).$mount('#app')
