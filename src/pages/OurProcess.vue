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
    'A collaborative approach tailored to your evolving goals.',
  influentialTagline:
    'We build as you go, refining your vision step by step.',

  supportiveStatement:
    'Every project starts with the Quick Start Phase, designed to clarify your vision. This includes one hour of live collaboration to ensure we understand the who, what, when, where, why, and how of your goals.',
  dominantStatement:
    'The Quick Start Phase provides two hours of focused development based on this discussion, ensuring your vision is clear and ready for the next steps.',
  influentialStatement:
    'The Strategic Design Path introduces a structured 1:5 ratio—two live collaboration sessions and 10 hours of dedicated development—focused on refining and executing your vision.',
  conscientiousStatement:
    'The Premium Vision Build offers 10 hours of live collaboration and 50 hours of dedicated development, following the same 1:5 structure. Each phase is guided by your input to ensure every detail resonates with your goals.',

  supportiveSummary:
    'No matter the package—QuickStart, Strategic Design Path, or Premium Vision Build—you’ll experience a collaborative process that keeps your vision at the center.',
  influentialPrompt:
    'Start with the Quick Start Phase to establish a solid foundation, then expand with the Strategic Design Path or Premium Vision Build for greater results.',
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
