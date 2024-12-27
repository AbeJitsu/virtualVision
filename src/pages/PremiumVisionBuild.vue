<template>
  <MessagingPage
    :messages="messages"
    @left-button-click="handleLeftClick"
    @right-button-click="handleRightClick"
  />
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import MessagingPage from '../components/MessagingPage.vue'; // Import MessagingPage component
  import { PremiumVisionBuild } from '../data/messages/PremiumVisionBuild'; // Import messages for Premium Vision Build
  import { useRouter, useRoute } from 'vue-router';
  import { useTrackingStore } from '../stores/trackingStore';

  export default defineComponent({
    components: {
      MessagingPage,
    },
    setup() {
      const router = useRouter();
      const route = useRoute();
      const trackingStore = useTrackingStore();

      const messages = PremiumVisionBuild; // Load messages for Complete Website Build
      const currentPage = route.name as string;

      // Handle left button click
      function handleLeftClick() {
        trackingStore.addVisitedPage(currentPage); // Log the current page as visited
        trackingStore.recordChoice(currentPage, 'left'); // Record left button choice
        const nextPage = trackingStore.getNextPage(currentPage, 'left'); // Determine the next page dynamically
        if (nextPage) router.push(nextPage); // Navigate to the next page
      }

      // Handle right button click
      function handleRightClick() {
        trackingStore.addVisitedPage(currentPage); // Log the current page as visited
        trackingStore.recordChoice(currentPage, 'right'); // Record right button choice
        const nextPage = trackingStore.getNextPage(currentPage, 'right'); // Determine the next page dynamically
        if (nextPage) router.push(nextPage); // Navigate to the next page
      }

      return { messages, handleLeftClick, handleRightClick };
    },
  });
</script>

<style scoped lang="scss">
  @import '/src/css/app.scss';
</style>
