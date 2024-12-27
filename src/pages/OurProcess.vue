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
          'Every journey starts with the Essentials package, where we refine your ideas and clarify your objectives.',
        dominantStatement:
          'In the Professional package, we dive deeper with five focused strategy sessions, ensuring every detail aligns perfectly before moving forward.',
        influentialStatement:
          'The Premium package combines tailored strategy and collaboration, transforming your vision into a fully realized, professional-grade platform.',
        conscientiousStatement:
          'Each package is designed to meet your unique needs, balancing collaboration and execution to achieve the best possible results.',
        supportiveSummary:
          'With Essentials, Professional, and Premium, our process ensures your website isn’t just functional—it’s a platform for success.',
        influentialPrompt:
          'Take the first step with Essentials, or explore what Professional and Premium can offer. Let’s bring your vision to life.',
        leftButtonText:
          'How does Essentials help refine my ideas? What’s the next step in creating something aligned with my vision?',
        rightButtonText:
          'Would diving into the technical aspects upfront be more effective? Why prioritize strategy and collaboration first?',
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

<style scoped>
  /* Add any unique styles for OurProcess.vue if necessary */
</style>
