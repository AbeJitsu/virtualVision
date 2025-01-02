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
  dominantTagline: 'Your first step to clarity and alignment.',
  influentialTagline: 'Collaborate, define, and start building with purpose.',

  supportiveStatement:
    'Begin with one hour of live collaboration to clarify your vision. Together, we’ll define the "who, what, when, where, why, and how" of your goals.',
  dominantStatement:
    'Following this session, I’ll dedicate two hours to developing a tangible starting point, ensuring we’re aligned on your priorities.',
  influentialStatement:
    'Picture leaving this phase with a clear vision, expert insights, and an actionable foundation that aligns with your goals.',
  conscientiousStatement:
    'This phase captures every detail to guide the next steps, whether you continue with additional services or implement the plan independently.',

  supportiveSummary:
    'The QuickStart Phase ensures your vision is fully understood and aligned with your goals. It lays the groundwork for building something meaningful and effective.',
  influentialSummary:
    'Take the next step toward realizing your vision. Start today with expert guidance and a clear path forward.',
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
