<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Use NavBar for the Navigation Bar -->
    <NavBar
      :toolbarTitle="toolbarTitle"
      :tagline="tagline"
      @toggleLeftDrawer="toggleLeftDrawer"
    />

    <!-- Use LeftDrawer for the Drawer Menu -->
    <LeftDrawer
      :drawerOpen="leftDrawerOpen"
      @update:drawerOpen="(value) => (leftDrawerOpen = value)"
    />

    <q-page-container>
      <!-- Add BackgroundImages component -->
      <BackgroundImages />

      <!-- Main content -->
      <router-view />
    </q-page-container>

    <!-- Add Footer here -->
    <Footer />
  </q-layout>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router'; // Import useRoute and useRouter
import NavBar from './NavBar.vue';
import LeftDrawer from '../layouts/LeftDrawer.vue';
import Footer from '../layouts/Footer.vue';
import BackgroundImages from '../components/BackgroundImages.vue';

defineOptions({
  name: 'MainLayout',
});

// State for controlling the left drawer
const leftDrawerOpen = ref(false);

// Function to toggle the drawer
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

// Close the drawer on mount to ensure it's closed by default
onMounted(() => {
  leftDrawerOpen.value = false;
});

// Toolbar title and tagline
const toolbarTitle = 'Vision 2 Virtual';
const tagline = 'Bringing Your Vision to Life';

// Use route and router for navigation logic
const route = useRoute();
const router = useRouter();

// Detect navigation to Talk to Developer
watch(
  () => route.path,
  (newPath) => {
    console.log('Route changed:', newPath);

    if (newPath === '/talk-to-developer') {
      console.log('Redirecting via back button simulation...');
      setTimeout(() => {
        router.back(); // Simulate the "back button"
      }, 100); // Delay to ensure the correct route renders
    }
  }
);
</script>

<style scoped lang="scss">
  @import '/src/css/app.scss';
</style>
