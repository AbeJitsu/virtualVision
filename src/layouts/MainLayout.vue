<template>
  <q-layout view="lHh Lpr lFf">
    <!-- NavBar for the header -->
    <NavBar
      :toolbarTitle="toolbarTitle"
      :dominantTagline="dominantTagline"
      @toggleLeftDrawer="toggleLeftDrawer"
      class="no-padding no-margin"
    />

    <!-- LeftDrawer for the menu -->
    <LeftDrawer
      :drawerOpen="leftDrawerOpen"
      @update:drawerOpen="(value) => (leftDrawerOpen = value)"
    />

    <!-- Persistent background images -->
    <BackgroundImages />

    <q-page-container>
      <!-- Main content area with corrected transition -->
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component
            :is="Component"
            :key="route.fullPath"
          />
        </transition>
      </router-view>
    </q-page-container>

    <!-- Footer for the layout -->
    <Footer class="no-padding no-margin" />
  </q-layout>
</template>

<script setup lang="ts">
  import { ref, watch, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import NavBar from './NavBar.vue';
  import LeftDrawer from '../layouts/LeftDrawer.vue';
  import Footer from '../layouts/Footer.vue';
  import BackgroundImages from '../components/BackgroundImages.vue';

  defineOptions({
    name: 'MainLayout',
  });

  // State for controlling the left drawer
  const leftDrawerOpen = ref(false);

  // Ensure drawer starts closed
  onMounted(() => {
    leftDrawerOpen.value = false;
  });

  // Toolbar title and tagline
  const toolbarTitle = 'Vision 2 Virtual';
  const dominantTagline = 'Bringing Your Vision to Life';

  // Route management
  const route = useRoute();

  // Function to toggle the drawer state
  function toggleLeftDrawer() {
    leftDrawerOpen.value = !leftDrawerOpen.value;
  }
</script>

<style scoped lang="scss">
  @import '/src/css/app.scss';

  .q-layout,
  .q-header,
  .q-footer {
    width: 100vw;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .q-page-container {
    margin: 0 auto;
    max-width: 100%;
    padding: 0;
  }

  .no-padding,
  .no-margin {
    padding: 0 !important;
    margin: 0 !important;
  }

  /* Fade transition styles */
  .fade-enter-active {
    transition: opacity 0.35s ease-in;
  }

  .fade-leave-active {
    transition: opacity 0.35s ease-out;
  }

  .fade-enter-from {
    opacity: 0;
  }

  .fade-leave-to {
    opacity: 0;
  }
</style>

<!-- src/layouts/MainLayout.vue -->
