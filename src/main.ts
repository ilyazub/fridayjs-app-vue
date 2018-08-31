import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '@/App.vue';
import Home from '@/pages/Home.vue';
import Event from '@/pages/Event.vue';
import BigPhoto from '@/components/BigPhoto.vue';

Vue.use(VueRouter);

Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      name: 'Event',
      path: '/events/:id',
      component: Event,
      props: true,
      children: [
        {
          name: 'BigPhoto',
          path: 'photos/:photoId',
          component: BigPhoto,
        }
      ],
    },
  ],
});

new Vue({
  el: '#app',
  template: '<App/>',
  router,
  components: {App}
});
