<script setup lang="ts">
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';

const router = useRouter();

const images = ['@/assets/images/barn-logo-thick-black.png', '@/assets/images/kyoja.png'];

const preloadImages = () => {
  images.forEach(src => {
    const img = new Image();
    img.src = src;
  });
};
const navigateTo = (path: string) => {
  router.push(path);
};

onMounted(() => {
  preloadImages();
});
</script>

<template>
  <div class="main-container">
    <img src="@/assets/images/barn-logo-thick-black.png" alt="barn" class="logo" />
    <img src="@/assets/images/kyoja.png" alt="barn" class="table-image" />
    <nav class="main-navigation">
      <div class="nav-row first">
        <button class="nav-item venue" @click="navigateTo('/venue')">VENUE</button>
        <button class="nav-item shop" @click="navigateTo('/shop')">SHOP</button>
      </div>
      <div class="nav-row second">
        <button class="nav-item room" @click="navigateTo('/room/second')">ROOM</button>
      </div>
    </nav>
  </div>
</template>

<style scoped></style>
