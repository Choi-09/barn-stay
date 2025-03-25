<!-- src/views/floors/GalleryView.vue -->
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

<style scoped></style>
