<!-- src/views/floors/ExhibitionView.vue -->
<template>
  <div class="floor-view">
    <FloorNavigation />

    <div class="content">
      <h1>예술과 함께하는 전시실</h1>

      <div class="image-slider">
        <img
          v-for="(image, index) in galleryData.images"
          :key="index"
          :src="image"
          :alt="galleryData.title"
          class="gallery-image"
        />
      </div>

      <div class="gallery-info">
        <p class="description">{{ galleryData.description }}</p>

        <!-- 현재 전시 섹션 -->
        <div class="current-exhibition">
          <h2>현재 전시</h2>
          <div class="exhibition-details">
            <img
              :src="galleryData.currentExhibition.image"
              :alt="galleryData.currentExhibition.title"
              class="exhibition-image"
            />
            <div class="exhibition-text">
              <h3>{{ galleryData.currentExhibition.title }}</h3>
              <p class="artist">{{ galleryData.currentExhibition.artist }}</p>
              <p class="period">{{ galleryData.currentExhibition.period }}</p>
              <p class="exhibition-description">{{ galleryData.currentExhibition.description }}</p>
            </div>
          </div>
        </div>

        <!-- 전시실 특징 -->
        <div class="features">
          <h2>전시실 특징</h2>
          <ul>
            <li v-for="feature in galleryData.features" :key="feature">
              {{ feature }}
            </li>
          </ul>
        </div>

        <!-- 이용 안내 -->
        <div class="information">
          <h2>이용 안내</h2>
          <div class="info-grid">
            <div v-for="(info, key) in galleryData.information" :key="key" class="info-item">
              <h3>{{ key }}</h3>
              <p>{{ info }}</p>
            </div>
          </div>
        </div>

        <!-- 예약 섹션 -->
        <div class="booking-section">
          <h2>전시실 투어 예약</h2>
          <QRGenerator :value="galleryData.airbnbUrl" />
          <div class="booking-buttons">
            <a :href="galleryData.airbnbUrl" target="_blank" class="book-btn">
              Airbnb에서 예약하기
            </a>
            <a :href="`mailto:${galleryData.contactEmail}`" class="contact-btn"> 전시 문의하기 </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import FloorNavigation from '@/components/FloorNavigation.vue';
import QRGenerator from '@/components/QRGenerator.vue';

const galleryData = ref({
  title: '예술과 함께하는 전시실',
  description:
    '자연과 예술이 조화롭게 어우러진 전시 공간에서 특별한 문화 체험을 즐기실 수 있습니다. 지역 작가들의 작품과 다양한 예술 작품을 감상하며 여유로운 시간을 보내세요.',
  images: [
    '/images/gallery-1.jpg',
    '/images/gallery-2.jpg',
    '/images/gallery-3.jpg',
    '/images/gallery-4.jpg'
  ],
  currentExhibition: {
    title: '자연과 예술의 대화',
    artist: '김예술 작가',
    period: '2024.03.01 - 2024.04.30',
    description:
      '자연의 아름다움을 현대적 감각으로 재해석한 작품들을 선보입니다. 계절의 변화와 자연의 생명력을 담은 작품들을 통해 특별한 예술 체험을 제공합니다.',
    image: '/images/current-exhibition.jpg'
  },
  features: [
    '자연광을 활용한 갤러리 조명',
    '프로페셔널 전시 조명 시스템',
    '방음 설비',
    '온습도 조절 시스템',
    '작품 설명 키오스크',
    '휴식 공간',
    '포토존'
  ],
  information: {
    관람시간: '매일 10:00 - 18:00',
    휴관일: '매주 월요일',
    입장료: '투숙객 무료 / 외부인 5,000원',
    단체관람: '10인 이상 사전예약 필수'
  },
  airbnbUrl: 'https://www.airbnb.com/h/barnstay-exhibition',
  contactEmail: 'gallery@barnstay.com'
});
</script>

<style scoped>
.floor-view {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.content {
  margin-right: 100px;
}

h1 {
  font-size: 2.5em;
  color: #2c3e50;
  margin-bottom: 30px;
}

.image-slider {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 40px;
}

.gallery-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 12px;
  transition: transform 0.3s ease;
}

.gallery-image:hover {
  transform: scale(1.02);
}

.description {
  font-size: 1.2em;
  line-height: 1.6;
  color: #666;
  margin-bottom: 40px;
}

.current-exhibition {
  background: #f8f8f8;
  padding: 30px;
  border-radius: 12px;
  margin-bottom: 40px;
}

.exhibition-details {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 30px;
  margin-top: 20px;
}

.exhibition-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
}

.exhibition-text {
  color: #2c3e50;
}

.artist {
  color: #ff5a5f;
  font-weight: 500;
  margin: 10px 0;
}

.period {
  color: #666;
  margin-bottom: 15px;
}

.features {
  margin: 40px 0;
}

.features ul {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
}

.features li {
  padding: 15px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 10px;
}

.features li::before {
  content: '✧';
  color: #ff5a5f;
}

.information {
  margin: 40px 0;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.info-item {
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.info-item h3 {
  color: #ff5a5f;
  margin-bottom: 10px;
  font-size: 1.1em;
}

.booking-section {
  text-align: center;
  padding: 40px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  margin-top: 40px;
}

.booking-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.book-btn,
.contact-btn {
  padding: 15px 30px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.book-btn {
  background: #ff5a5f;
  color: white;
}

.contact-btn {
  background: white;
  color: #ff5a5f;
  border: 2px solid #ff5a5f;
}

.book-btn:hover {
  background: #ff385e;
}

.contact-btn:hover {
  background: #fff3f3;
}

/* 반응형 디자인 */
@media (max-width: 768px) {
  .content {
    margin-right: 0;
    margin-bottom: 80px;
  }

  .image-slider {
    grid-template-columns: 1fr;
  }

  .exhibition-details {
    grid-template-columns: 1fr;
  }

  .booking-buttons {
    flex-direction: column;
  }

  .gallery-image,
  .exhibition-image {
    height: 250px;
  }
}
</style>
