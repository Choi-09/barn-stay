<template>
  <div>
    <qrcode-vue
      :value="value"
      :size="size"
      :level="level"
      render-as="svg"
      :foreground="foreground"
    />
    <p class="qr-text">QR코드를 스캔하여 자세히 보기</p>
    <button class="home-btn" @click="navigateTo('/main')">홈</button>
  </div>
</template>

<script setup lang="ts">
import QrcodeVue from 'qrcode.vue';
import { useRouter } from 'vue-router';

interface Props {
  value: string;
  size?: number;
  foreground?: string;
}

withDefaults(defineProps<Props>(), {
  size: 150,
  foreground: '#FF5A5F'
});

const level: 'L' | 'M' | 'Q' | 'H' = 'H';

const router = useRouter();
const navigateTo = (path: string) => {
  router.push(path);
};
</script>

<style scoped>
.qr-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.qr-text {
  color: #666;
  font-size: 0.9em;
}
.home-btn {
  min-width: 100px;
  height: 40px;
  font-size: 1rem;
  font-weight: 500;
  text-transform: none;
  letter-spacing: 0;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
}

.home-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
</style>
