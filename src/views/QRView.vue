<!-- src/views/QRView.vue -->
<template>
  <div class="home">
    <h1>상세보기</h1>
    <div class="qr-container">
      <p class="description">QR 코드를 스캔하여 객실 정보를 확인하세요</p>
      <QRGenerator :value="qrUrl" :foreground="'#000000'" />
    </div>
  </div>
</template>

<script setup lang="ts">
import QRGenerator from '../components/QRGenerator.vue';

// QR 코드가 가리킬 URL (2층 객실 페이지)
const qrUrl = 'https://barn-stay.netlify.app/main';
// const airbnbUrl = 'https://www.airbnb.com/h/barnstay-suite';
</script>

<style scoped></style>
