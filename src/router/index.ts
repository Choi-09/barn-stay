import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import SecondFloorView from '@/views/SecondFloorView.vue';
import FirstFloorView from '@/views/FirstFloorView.vue';
import ThirdFloorView from '@/views/ThirdFloorView.vue';
import ExhibitionView from '@/views/ExhibitionView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/floors/second',
      name: 'second-floor',
      component: SecondFloorView
    },
    {
      path: '/floors/first',
      name: 'first-floor',
      component: FirstFloorView
    },
    {
      path: '/floors/third',
      name: 'third-floor',
      component: ThirdFloorView
    },
    {
      path: '/floors/exhibition',
      name: 'exhibition',
      component: ExhibitionView
    }
  ]
});

export default router;
