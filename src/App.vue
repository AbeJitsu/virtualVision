<template>
  <router-view />
</template>

<script setup lang="ts">
  defineOptions({
    name: 'App',
  });
</script>

<style>
  * {
    /* outline: 0.1px dashed red !important; */
  }
  /* html,
  body {
    border: 3px solid blue !important;
  } */

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
</style>

<!-- src/App.vue -->
