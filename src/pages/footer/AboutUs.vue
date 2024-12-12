<template>
  <MessagingPage
    :messages="messages"
    @left-button-click="handleLeftClick"
    @right-button-click="handleRightClick"
  />
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import MessagingPage from '../../components/MessagingPage.vue';
  import { AboutUs } from '../../data/messages/AboutUs'; // Import the updated AboutUs messages
  import { useRouter, useRoute } from 'vue-router';
  import { useTrackingStore } from '../../stores/trackingStore';

  export default defineComponent({
    components: {
      MessagingPage,
    },
    setup() {
      const router = useRouter();
      const route = useRoute();
      const trackingStore = useTrackingStore();

      const messages = AboutUs; // Load the AboutUs messages
      const currentPage = route.name as string;

      function handleLeftClick() {
        trackingStore.addVisitedPage(currentPage); // Log the current page as visited
        trackingStore.recordChoice(currentPage, 'left'); // Record the left button choice
        const nextPage = trackingStore.getNextPage(currentPage, 'left'); // Get the next page dynamically
        if (nextPage) router.push(nextPage); // Navigate to the next page
      }

      function handleRightClick() {
        trackingStore.addVisitedPage(currentPage); // Log the current page as visited
        trackingStore.recordChoice(currentPage, 'right'); // Record the right button choice
        const nextPage = trackingStore.getNextPage(currentPage, 'right'); // Get the next page dynamically
        if (nextPage) router.push(nextPage); // Navigate to the next page
      }

      return { messages, handleLeftClick, handleRightClick };
    },
  });
</script>

<style scoped lang="scss">
  @import '../../css/app.scss';

  /* Add any additional styles if necessary */
</style>
