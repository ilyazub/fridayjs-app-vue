import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueApollo from 'vue-apollo';

import App from '@/App.vue';
import router from "@/router.ts";
import apolloProvider from "@/graphql.ts";

Vue.use(VueApollo);
Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  template: '<App/>',
  router,
  apolloProvider,
  components: {App}
});
