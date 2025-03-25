<template>
  <div class="qr-container">
    <qrcode-vue
      :value="value"
      :size="size"
      :level="level"
      render-as="svg"
      :foreground="foreground"
    />
    <p class="qr-text">QR코드를 스캔하여 자세히 보기</p>
  </div>
</template>

<script setup lang="ts">
import QrcodeVue from 'qrcode.vue';

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
</style>
