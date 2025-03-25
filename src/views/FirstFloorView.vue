<template>
  <div class="floor-view">
    <FloorNavigation />

    <div class="content">
      <h1>1층 객실</h1>

      <div class="image-slider">
        <img
          v-for="(image, index) in floorData.images"
          :key="index"
          :src="image"
          :alt="floorData.title"
          class="room-image"
        />
      </div>

      <div class="room-info">
        <p class="description">{{ floorData.description }}</p>

        <div class="features">
          <h2>객실 특징</h2>
          <ul>
            <li v-for="feature in floorData.features" :key="feature">
              {{ feature }}
            </li>
          </ul>
        </div>

        <div class="booking-section">
          <h2>예약하기</h2>
          <QRGenerator :value="floorData.airbnbUrl" />
          <a :href="floorData.airbnbUrl" target="_blank" class="book-btn"> Airbnb에서 예약하기 </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import FloorNavigation from '@/components/FloorNavigation.vue';
import QRGenerator from '@/components/QRGenerator.vue';

const floorData = ref({
  title: '1층 객실',
  description:
    '정원과 가까운 1층 객실에서는 자연과 함께하는 특별한 경험을 제공합니다. 테라스에서 즐기는 여유로운 시간과 함께 편안한 휴식을 누려보세요.',
  images: ['/images/first-floor-1.jpg', '/images/first-floor-2.jpg', '/images/first-floor-3.jpg'],
  features: [
    '퀸사이즈 침대',
    '프라이빗 테라스',
    '정원 전망',
    '미니 주방',
    '욕실 용품',
    '스마트 TV',
    '무료 Wi-Fi',
    '정원 접근성'
  ],
  airbnbUrl: 'https://www.airbnb.com/h/barnstay-first'
});
</script>

<style scoped></style>
