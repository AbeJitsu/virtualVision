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
      <router-view :key="route.fullPath" />
    </q-page-container>

    <!-- Add Footer here -->
    <Footer />
  </q-layout>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router'; // Import useRoute
import NavBar from './NavBar.vue';
import LeftDrawer from '../layouts/LeftDrawer.vue';
import Footer from '../layouts/Footer.vue';
import BackgroundImages from '../components/BackgroundImages.vue';
import { Messages } from '../stores/SalesStrategyMessages'; // Import the messages object directly

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

// Use route for navigation logic
const route = useRoute(); // Call the useRoute function

// Type guard to validate route names
function isValidRouteName(routeName: string | undefined): routeName is keyof typeof Messages {
  return routeName !== undefined && routeName in Messages;
}

// Dynamically determine messages based on the route name
const currentMessages = ref(Messages['LandingPage']); // Default to Landing Page messages
watch(
  () => route.name,
  (newRouteName) => {
    // Ensure newRouteName is a string before proceeding
    if (typeof newRouteName === 'string' && newRouteName && isValidRouteName(newRouteName)) {
      currentMessages.value = Messages[newRouteName]; // Update messages dynamically
      console.log('Current messages updated to:', currentMessages.value);
    } else {
      console.warn('Invalid route name or no messages found:', newRouteName);
    }
  },
  { immediate: true } // Run immediately on mount
);
</script>

<style scoped lang="scss">
  @import '/src/css/app.scss';
</style>

<!-- src/layouts/MainLayout.vue -->
