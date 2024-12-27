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
  dominantTagline: 'Build a website that grows your business.',
  influentialTagline: 'Bring your vision to life with expert help.',

  supportiveStatement:
    'Your website should work as hard as you do. We’ll help you create a site that’s simple for visitors to use and focused on achieving your goals.',
  dominantStatement:
    'Your site will attract and engage visitors, keep everything running smoothly, and connect to the tools your business needs to succeed.',
  influentialStatement:
    'Imagine a site that looks professional, is easy for customers to navigate, and saves you time by handling routine tasks automatically.',
  conscientiousStatement:
    'Every site we build is customized to fit your goals, ensuring it works exactly as you need it to. No templates or shortcuts—just a solution built for you.',

  supportiveSummary:
    'We’ll handle the details so you can focus on what you do best. Together, we’ll build a website that supports your vision.',
  influentialPrompt:
    'Take the first step to create a website that saves time, looks great, and grows with your business.',
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
  /* Your existing SCSS styles for the Landing Page */
</style>
