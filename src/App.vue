<template>
  <!-- Add a global transition for all route changes -->
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup lang="ts">
  defineOptions({
    name: 'App',
  });
</script>

<style>
  /* Global styles */

  * {
    /* outline: 0.1px dashed red !important; */ /* Uncomment for debugging layout issues */
  }

  /* html and body styling for full-page layout */
  html,
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden; /* Prevent horizontal scrolling */
    scrollbar-color: #c8c8c8 transparent; /* Thumb and track colors */
    scrollbar-width: thin;
  }

  /* Custom scrollbar styling */
  ::-webkit-scrollbar {
    width: 1px; /* Adjust width */
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: transparent; /* Thumb color */
    border-radius: 1px; /* Rounded corners */
  }

  /* Fade transition for route changes */
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.1s ease-in-out; /* Smooth transition */
  }

  .fade-enter-from, .fade-leave-to {
    opacity: 0; /* Start and end states for fade */
  }
</style>

<!-- src/App.vue -->
