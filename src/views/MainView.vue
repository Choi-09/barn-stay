<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();

const navigateTo = (path: string) => {
  router.push(path);
};
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
