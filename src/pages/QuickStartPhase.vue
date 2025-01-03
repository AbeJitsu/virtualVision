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
  dominantTagline: 'Start strong with clarity and confidence.',
  influentialTagline: 'Together, we’ll build the foundation for success.',

  supportiveStatement:
    'This phase begins with one hour of live collaboration to clarify your goals. We’ll explore the key elements of your vision and ensure it aligns with your business needs.',
  dominantStatement:
    'After our session, I’ll dedicate two hours to crafting a tangible starting point, tailored to your priorities and designed to set your project in motion.',
  influentialStatement:
    'Imagine leaving this phase with actionable insights and a clear direction, ready to take meaningful steps toward your goals.',
  conscientiousStatement:
    'Every detail from this phase is documented to guide your next steps, whether you continue with our services or implement the plan independently.',

  supportiveSummary:
    'The QuickStart Phase ensures your goals are understood and translated into a clear plan, forming the foundation for success.',
  influentialSummary:
    'Take your first step toward realizing your vision, and experience how clarity and collaboration can propel your vision forward.',
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
  @import '/src/css/app.scss';
</style>

<!-- src/pages/QuickStartPhase.vue -->
