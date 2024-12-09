<template>
  <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80"
      stroke="black"
      fill="transparent"
      stroke-width="2"
    />
  </svg>
</template>

<script lang="ts">
import { onMounted } from 'vue';
import { animateLineDrawing } from '../helpers/lineDrawingAnimation';

export default {
  name: 'LineDrawingExample',
  setup() {
    onMounted(() => {
      animateLineDrawing('path', { duration: 2, ease: 'power1.inOut' });
    });
  },
};
</script>
