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

<style scoped>
.floor-view {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.content {
  margin-right: 100px; /* 네비게이션 공간 확보 */
}

h1 {
  font-size: 2.5em;
  color: #2c3e50;
  margin-bottom: 30px;
}

.image-slider {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.room-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 12px;
  transition: transform 0.3s ease;
}

.room-image:hover {
  transform: scale(1.02);
}

.room-info {
  display: grid;
  gap: 30px;
}

.description {
  font-size: 1.2em;
  line-height: 1.6;
  color: #666;
}

.features {
  background: #f8f8f8;
  padding: 30px;
  border-radius: 12px;
}

.features h2 {
  color: #2c3e50;
  margin-bottom: 20px;
}

.features ul {
  list-style: none;
  padding: 0;
}

.features li {
  padding: 10px 0;
  color: #666;
  display: flex;
  align-items: center;
  gap: 10px;
}

.features li::before {
  content: '✓';
  color: #ff5a5f;
}

.booking-section {
  text-align: center;
  padding: 40px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.book-btn {
  display: inline-block;
  padding: 15px 30px;
  background: #ff5a5f;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  margin-top: 20px;
  transition: background-color 0.3s ease;
}

.book-btn:hover {
  background: #ff385e;
}

/* 모바일 반응형 */
@media (max-width: 768px) {
  .content {
    margin-right: 0;
    margin-bottom: 80px; /* 하단 네비게이션 공간 */
  }

  .image-slider {
    grid-template-columns: 1fr;
  }

  .room-image {
    height: 250px;
  }
}
</style>
