<!-- src/views/HomeView.vue -->
<template>
  <div class="home">
    <h1>상세보기</h1>
    <div class="qr-container">
      <p class="description">QR 코드를 스캔하여 객실 정보를 확인하세요</p>
      <QRGenerator :value="qrUrl" :foreground="'#000000'" />

      <div class="booking-section">
        <a :href="airbnbUrl" target="_blank" class="airbnb-btn"> 예약 바로가기 </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import QRGenerator from '../components/QRGenerator.vue';

// QR 코드가 가리킬 URL (2층 객실 페이지)
const qrUrl = 'https://remarkable-jalebi-a34d83.netlify.app/floors/second'; // 실제 도메인으로 변경 필요
const airbnbUrl = 'https://www.airbnb.com/h/barnstay-suite'; // 실제 Airbnb URL로 변경 필요
</script>

<style scoped>
.home {
  padding: 40px 20px;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

h1 {
  color: #2c3e50;
  margin-bottom: 30px;
}

.qr-container {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.description {
  color: #666;
  margin-bottom: 20px;
  font-size: 1.1em;
}

.booking-section {
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #eee;
}

.airbnb-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 30px;
  background: #ff5a5f;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  transition: background-color 0.3s ease;
}

.airbnb-btn:hover {
  background: #ff385e;
}

/* 모바일 반응형 */
@media (max-width: 768px) {
  .home {
    padding: 20px;
  }

  .airbnb-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
