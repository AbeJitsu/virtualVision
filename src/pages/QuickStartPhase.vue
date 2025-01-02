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
        dominantTagline: 'Collaborate directly with the expert who’ll build your vision.',
        influentialTagline: 'Turn your first ideas into a clear, actionable plan.',

        supportiveStatement:
          'Start with a live session to refine your vision. Together, we’ll shape your ideas into a focused roadmap that aligns with your goals.',
        dominantStatement:
          'Gain clarity and confidence with a structured session that prioritizes your needs, ensuring your project starts strong and stays on track.',
        influentialStatement:
          'Imagine gaining expert insights to refine your ideas, address challenges, and leave with a clear direction forward.',
        conscientiousStatement:
          'This session captures every detail, whether you choose additional services or not. Your next steps will be clear and actionable.',

        supportiveSummary:
          'This is the first step to building something extraordinary. Partner with a developer who listens, guides, and delivers.',
        influentialPrompt:
          'Start refining your vision today. Let’s turn your goals into a concrete plan for success.',
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
