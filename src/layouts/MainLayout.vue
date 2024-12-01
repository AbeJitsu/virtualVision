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

    <q-page-container>
      <!-- Background images for parallax -->
      <BackgroundImages />

      <!-- Main content area with transition -->
      <router-view v-slot="{ Component }">
        <component
          :is="Component"
          :key="route.fullPath"
        />
      </router-view>
    </q-page-container>

    <!-- Footer for the layout -->
    <Footer class="no-padding no-margin" />
  </q-layout>
</template>

<script setup lang="ts">
  import { ref, onMounted, watch } from 'vue';
  import { useRoute } from 'vue-router'; // Import useRoute
  import NavBar from './NavBar.vue';
  import LeftDrawer from '../layouts/LeftDrawer.vue';
  import Footer from '../layouts/Footer.vue';
  import BackgroundImages from '../components/BackgroundImages.vue';
  import { Messages } from '../data/messages/SalesStrategyMessages'; // Import the messages object directly

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
  const dominantTagline = 'Bringing Your Vision to Life';

  // Use route for navigation logic
  const route = useRoute(); // Call the useRoute function

  // Type guard to validate route names
  function isValidRouteName(
    routeName: string | undefined
  ): routeName is keyof typeof Messages {
    return routeName !== undefined && routeName in Messages;
  }

  // Dynamically determine messages based on the route name
  const currentMessages = ref(Messages['LandingPage']); // Default to Landing Page messages
  watch(
    () => route.name,
    (newRouteName) => {
      // Ensure newRouteName is a string before proceeding
      if (
        typeof newRouteName === 'string' &&
        newRouteName &&
        isValidRouteName(newRouteName)
      ) {
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

  .q-layout,
  .q-header,
  .q-footer {
    width: 100vw; /* Force to fill the entire viewport width */
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .q-page-container {
    margin: 0 auto;
    max-width: 100%; /* Prevent content from spilling over */
    padding: 0;
  }

  .no-padding,
  .no-margin {
    padding: 0 !important;
    margin: 0 !important;
  }
</style>

<!-- src/layouts/MainLayout.vue -->
