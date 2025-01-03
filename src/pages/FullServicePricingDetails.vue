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
  dominantTagline: 'See the value behind every investment.',
  influentialTagline: 'Understand the benefits of each phase clearly.',

  supportiveStatement:
    'Each phase of our process is designed to adapt to your goals and priorities, giving you the flexibility to build at your own pace.',
  dominantStatement:
    'Your investment drives expert collaboration and development. With no obligation to move forward, each step ensures progress that aligns with your vision.',
  influentialStatement:
    'Start with the QuickStart Phase for $199, continue with the Strategic Design Path for $649, and achieve your goals with the Premium Vision Build for $2999. Each phase is tailored to your success.',
  conscientiousStatement:
    'When combining all phases, the process includes 13 hours of live collaboration and 62 development hours. Together, these ensure a custom platform aligned with your long-term vision.',

  supportiveSummary:
    'This journey begins with one session and no pressure to continue. Every step is tailored to your needs and timeline.',
  influentialSummary:
    'Take control of your progress with clarity and purpose, creating a solution designed specifically for your goals.',
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
