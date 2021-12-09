// SCSS Imports
import '@/assets/scss/config.scss';
import '@/assets/scss/contents/_buefy_base.scss';
// Regular Imports
import Vue from 'vue';
import App from './App.vue';
import Buefy from 'buefy';
import vueDebounce from 'vue-debounce'

Vue.use(Buefy, {
  defaultIconPack: 'fas',
});
Vue.config.productionTip = false;
Vue.use(vueDebounce, { defaultTime: '1000ms' })
new Vue({
  render: (h) => h(App),
}).$mount('#app');
