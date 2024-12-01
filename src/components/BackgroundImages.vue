<template>
  <div class="background-images">
    <div class="bg-image" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
  .background-images {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
    opacity: 1;
  }

  .bg-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    filter: grayscale(100%) brightness(100%) opacity(0.2);
    background-image: url('/src/assets/influential_bottom_left.webp');
    animation: scrollBackground 70s ease-in-out infinite;
  }

  @keyframes scrollBackground {
    0% {
      background-position: center 20%;
    }
    50% {
      background-position: center 60%;
    }
    100% {
      background-position: center 20%;
    }
  }
</style>
