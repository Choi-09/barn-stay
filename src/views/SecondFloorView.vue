<template>
  <div class="floor-view">
    <FloorNavigation />

    <div class="content">
      <h1>2층 스위트룸</h1>

      <!-- 이미지 슬라이더 -->
      <div class="image-slider">
        <img
          v-for="(image, index) in floorData.images"
          :key="index"
          :src="image"
          :alt="floorData.title"
          class="room-image"
        />
      </div>

      <!-- 객실 정보 -->
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

        <!-- Airbnb 예약 섹션 -->
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
  title: '2층 스위트룸',
  description:
    '넓은 창문을 통해 자연 전망을 감상할 수 있는 프리미엄 스위트룸입니다. 편안한 킹사이즈 침대와 프라이빗 발코니에서 특별한 휴식을 경험하세요.',
  images: [
    '/images/second-floor-1.jpg',
    '/images/second-floor-2.jpg',
    '/images/second-floor-3.jpg'
  ],
  features: [
    '킹사이즈 침대',
    '프라이빗 발코니',
    '전망 좋은 대형 창문',
    '미니 주방',
    '고급 욕실 용품',
    '스마트 TV',
    '무료 Wi-Fi'
  ],
  airbnbUrl: 'https://www.airbnb.com/h/barnstay-suite'
});
</script>

<style scoped></style>
