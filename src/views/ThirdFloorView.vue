<template>
  <div class="floor-view">
    <FloorNavigation />

    <div class="content">
      <h1>3층 스카이 라운지</h1>

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
          <h2>공간 특징</h2>
          <ul>
            <li v-for="feature in floorData.features" :key="feature">
              {{ feature }}
            </li>
          </ul>
        </div>

        <div class="special-features">
          <h2>특별 서비스</h2>
          <ul>
            <li v-for="service in floorData.specialServices" :key="service">
              {{ service }}
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
  title: '3층 스카이 라운지',
  description:
    '최상층에 위치한 3층 스카이 라운지에서는 탁 트인 전망과 함께 프라이빗한 휴식을 즐기실 수 있습니다. 루프탑 테라스에서는 아름다운 일몰과 야경을 감상하실 수 있습니다.',
  images: [
    '/images/third-floor-1.jpg',
    '/images/third-floor-2.jpg',
    '/images/third-floor-3.jpg',
    '/images/third-floor-4.jpg'
  ],
  features: [
    '루프탑 테라스',
    '파노라마 뷰',
    '프라이빗 바',
    '라운지 소파',
    '음향 시스템',
    '미니 키친',
    '공기청정기'
  ],
  specialServices: [
    '선셋 와인 서비스 (예약제)',
    '프라이빗 바비큐 (예약제)',
    '조식 서비스',
    '커피 & 티 서비스'
  ],
  airbnbUrl: 'https://www.airbnb.com/h/barnstay-third'
});
</script>

<style scoped></style>
