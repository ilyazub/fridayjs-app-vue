import VueRouter from 'vue-router';

import EventsList from '@/components/EventsList.vue';
import Event from '@/pages/Event.vue';
import BigPhoto from '@/components/BigPhoto.vue';

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: EventsList,
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
