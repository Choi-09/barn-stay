import { createRouter, createWebHistory } from 'vue-router';
import SecondFloorView from '@/views/SecondFloorView.vue';
import FirstFloorView from '@/views/FirstFloorView.vue';
import ThirdFloorView from '@/views/ThirdFloorView.vue';
import GalleryView from '@/views/GalleryView.vue';
import QRView from '@/views/QRView.vue';
import MainView from '@/views/MainView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'qr',
      component: QRView
    },
    {
      path: '/main',
      name: 'main',
      component: MainView
    },
    // {
    //   path: '/room-tour',
    //   name: 'main',
    //   component: MainView
    // },
    {
      path: '/room-tour/second',
      name: 'second-floor',
      component: SecondFloorView
    },
    {
      path: '/room-tour/first',
      name: 'first-floor',
      component: FirstFloorView
    },
    {
      path: '/room-tour/third',
      name: 'third-floor',
      component: ThirdFloorView
    },
    {
      path: '/floors/gallery',
      name: 'gallery',
      component: GalleryView
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/main'
    }
  ]
});

export default router;
