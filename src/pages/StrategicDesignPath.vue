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
      const messages = {
  dominantTagline: 'Build on your foundation with focused progress.',
  influentialTagline: 'Refine your vision and create lasting impact.',

  supportiveStatement:
    'The Strategic Design Path builds on the foundation established during the QuickStart Phase. With two live collaboration sessions over two days, we’ll refine your vision and set the direction for meaningful progress.',
  dominantStatement:
    'Each day, I’ll dedicate up to five development hours to ensure your ideas take shape effectively and align with your goals. By the end, you’ll have a clear roadmap ready for action.',
  influentialStatement:
    'Picture leaving this phase with refined goals, expert insights, and tangible progress that sets your project on the path to success.',
  conscientiousStatement:
    'This phase ensures every detail from our sessions is translated into focused development. Over two days, you’ll gain clarity, alignment, and significant progress toward your objectives.',

  supportiveSummary:
    'The Strategic Design Path continues the momentum from QuickStart, delivering structured collaboration and focused development to move your vision forward.',
  influentialSummary:
    'Take the next step to refine your vision and achieve real progress. Let’s build something impactful together.',
};

      const router = useRouter();
      const route = useRoute();
      const trackingStore = useTrackingStore();

      function handleLeftClick() {
        const nextPage = trackingStore.getNextPage(route.name as string, 'left');
        if (nextPage) {
          router.push(nextPage);
        }
      }

      function handleRightClick() {
        const nextPage = trackingStore.getNextPage(route.name as string, 'right');
        if (nextPage) {
          router.push(nextPage);
        }
      }

      return { messages, handleLeftClick, handleRightClick };
    },
  });
</script>

<style scoped lang="scss">
  @import '/src/css/app.scss';
</style>
