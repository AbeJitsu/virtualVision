<template>
  <MessagingPage
    :messages="messages"
    @left-button-click="handleLeftClick"
    @right-button-click="handleRightClick"
  />
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import MessagingPage from '../components/MessagingPage.vue';
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

      const messages = {
  dominantTagline:
    'Your vision, crafted into a powerful online presence.',
  influentialTagline:
    'Together, we’ll build tools that grow with your business.',

  supportiveStatement:
    'Every project begins with a conversation. Through live collaboration, we’ll clarify your goals and identify how your website can reflect your unique vision and passion.',
  dominantStatement:
    'Our approach is iterative and flexible, ensuring every step aligns with your priorities. You’ll see your ideas take shape as we focus on the areas that matter most to you.',
  influentialStatement:
    'Imagine a website that not only looks great but also simplifies your work—connecting with your customers, organizing data, and automating repetitive tasks to save you time and energy.',
  conscientiousStatement:
    'Our ultimate goal is to create a full-stack solution: a polished front-end for users, a reliable back-end for functionality, and a database to store and manage information. Along the way, we’ll integrate the tools and systems you need to succeed.',

  supportiveSummary:
    'This journey is about bringing your ideas to life, one step at a time, with a flexible process that adapts to your needs.',
  influentialSummary:
    'Let’s start the conversation and create something meaningful for your business.',
};

      const currentPage = route.name as string;

      function handleLeftClick() {
        trackingStore.addVisitedPage(currentPage);
        trackingStore.recordChoice(currentPage, 'left');
        const nextPage = trackingStore.getNextPage(currentPage, 'left');
        if (nextPage) router.push(nextPage);
      }

      function handleRightClick() {
        trackingStore.addVisitedPage(currentPage);
        trackingStore.recordChoice(currentPage, 'right');
        const nextPage = trackingStore.getNextPage(currentPage, 'right');
        if (nextPage) router.push(nextPage);
      }

      return { messages, handleLeftClick, handleRightClick };
    },
  });
</script>

<style scoped lang="scss">
  /* No additional styles needed since all are moved to app.scss */
</style>
