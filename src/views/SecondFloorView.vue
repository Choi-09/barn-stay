<script setup lang="ts">
import router from '@/router/index.js';
import { onMounted } from 'vue';

const preloadImages = () => {
  const images = [
    '@/assets/images/second-floor/203.png',
    '@/assets/images/second-floor/205.png',
    '@/assets/images/second-floor/204.png',
    '@/assets/images/second-floor/208.png',
    '@/assets/images/second-floor/210.png',
    '@/assets/images/second-floor/206.png',
    '@/assets/images/second-floor/209.png',
    '@/assets/images/second-floor/207.png',
    '@/assets/images/second-floor/201.png',
    '@/assets/images/second-floor/202.png'
  ];

  images.forEach(src => {
    const img = new Image();
    img.src = src;
  });
};

onMounted(() => {
  preloadImages();
});
</script>

<template>
  <div class="room-tour">
    <img
      src="@/assets/images/second-floor/full-screen.png"
      alt="Room detail 1"
      class="grid-item item1"
    />

    <!--    <div class="image-grid">-->
    <!--      &lt;!&ndash; 텍스트 그룹 &ndash;&gt;-->
    <!--      <div class="text-group left-text-1">-->
    <!--        <div class="text-item multi-line">-->
    <!--          2F<br />-->
    <!--          deluxe suite<br />-->
    <!--          Room-->
    <!--        </div>-->
    <!--      </div>-->

    <!--      <div class="text-group right-text-1">-->
    <!--        <div class="text-item floor-info">Yoga & Meditation</div>-->
    <!--      </div>-->

    <!--      <div class="text-group left-text-2">-->
    <!--        <div class="text-item floor-info left-align">OUTDOOR POOL</div>-->
    <!--        <div class="text-item floor-info left-align">KITCHENETTE</div>-->
    <!--      </div>-->

    <!--      <div class="text-group right-text-2">-->
    <!--        <div class="text-item floor-info">Botanical Bathroom</div>-->
    <!--      </div>-->

    <!--      &lt;!&ndash; 이미지 그룹 &ndash;&gt;-->
    <!--      <img src="@/assets/images/second-floor/203.png" alt="Room detail 1" class="grid-item item1" />-->
    <!--      <img src="@/assets/images/second-floor/205.png" alt="Room detail 2" class="grid-item item2" />-->
    <!--      <img src="@/assets/images/second-floor/204.png" alt="Room detail 3" class="grid-item item3" />-->
    <!--      <img src="@/assets/images/second-floor/208.png" alt="Room detail 4" class="grid-item item4" />-->
    <!--      <img src="@/assets/images/second-floor/210.png" alt="Room detail 5" class="grid-item item5" />-->
    <!--      <img src="@/assets/images/second-floor/206.png" alt="Room detail 6" class="grid-item item6" />-->
    <!--      <img src="@/assets/images/second-floor/209.png" alt="Room detail 7" class="grid-item item7" />-->
    <!--      <img src="@/assets/images/second-floor/207.png" alt="Room detail 8" class="grid-item item8" />-->
    <!--      <img src="@/assets/images/second-floor/201.png" alt="Room detail 9" class="grid-item item9" />-->
    <!--      <img-->
    <!--        src="@/assets/images/second-floor/202.png"-->
    <!--        alt="Room detail 10"-->
    <!--        class="grid-item item10"-->
    <!--      />-->
    <!--    </div>-->

    <div class="navigation">
      <a
        href="https://www.airbnb.com/h/barnstay-suite"
        target="_blank"
        rel="noopener noreferrer"
        class="text-item more-info"
        >MORE INFO</a
      >

      <div class="text-item floor-nav" @click="router.push('/room/third')">3F</div>
    </div>
  </div>
</template>

<style scoped></style>
