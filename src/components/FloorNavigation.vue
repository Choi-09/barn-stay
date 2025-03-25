<template>
  <nav class="floor-nav">
    <router-link
      v-for="floor in floors"
      :key="floor.path"
      :to="floor.path"
      class="floor-btn"
      :class="{ active: currentPath === floor.path }"
    >
      {{ floor.name }}
    </router-link>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const currentPath = computed(() => route.path);

const floors = [
  { name: '1층', path: '/floors/first' },
  { name: '2층', path: '/floors/second' },
  { name: '3층', path: '/floors/third' },
  { name: '전시실', path: '/floors/exhibition' }
];
</script>

<style scoped>
.floor-nav {
  position: fixed;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 15px;
  z-index: 100;
}

.floor-btn {
  padding: 15px;
  width: 80px;
  text-align: center;
  background: white;
  border-radius: 12px;
  text-decoration: none;
  color: #2c3e50;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.floor-btn:hover {
  transform: translateX(-5px);
  background: #f8f8f8;
}

.floor-btn.active {
  background: #ff5a5f;
  color: white;
}

/* 모바일 반응형 */
@media (max-width: 768px) {
  .floor-nav {
    position: fixed;
    top: auto;
    bottom: 0;
    right: 0;
    left: 0;
    transform: none;
    flex-direction: row;
    justify-content: space-around;
    padding: 10px;
    background: white;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  }

  .floor-btn {
    width: auto;
    padding: 10px 15px;
  }

  .floor-btn:hover {
    transform: none;
  }
}
</style>
