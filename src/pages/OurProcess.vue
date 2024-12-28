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
          'A step-by-step process for building your ideal website.',
        influentialTagline:
          'Collaboration and strategy first, so execution is seamless.',

        supportiveStatement:
          'Every plan starts with collaboration to ensure we’re aligned on your goals. The QuickStart Plan includes 30 minutes of focused collaboration, giving you the space to explain your vision and priorities.',
        dominantStatement:
          'Following our discussion, I’ll spend up to one hour of development creating your requested solution, which will be delivered within 24 hours, along with a detailed report.',
        influentialStatement:
          'The Strategic Design Path deepens this process with two days of collaboration and development, refining your vision through two 30-minute sessions and five hours of dedicated work. Your deliverables will be ready by day three.',
        conscientiousStatement:
          'For larger projects, the Premium Vision Build offers up to five collaboration sessions and 25 hours of development over a week, ensuring every detail is thoughtfully executed and delivered by day seven.',

        supportiveSummary:
          'No matter which path you choose—QuickStart, Strategic Design Path, or Premium Vision Build—you’ll experience a collaborative process that brings your vision to life.',
        influentialPrompt:
          'Start with the QuickStart Plan to get clarity and momentum, then continue with the Strategic Design Path or upgrade to the Premium Vision Build as your goals evolve.',
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
