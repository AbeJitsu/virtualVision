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

      // Inlined OurProcess messaging
      const messages = {
        dominantTagline:
          'A step-by-step process for building your ideal website.',
        influentialTagline:
          'Collaboration and strategy first, so execution is seamless.',
        supportiveStatement:
          'Every journey starts with a scheduled one-hour consultation. We’ll explore your ideas, clarify your objectives, and ensure we’re aligned to move forward with confidence.',
        dominantStatement:
          'Next, we’ll dive into four focused strategy sessions to refine your site’s vision and style, ensuring every detail aligns perfectly before moving forward with precision.',
        influentialStatement:
          'After five hours of strategy, we expand with 16 additional hours of live collaboration and 42 hours of tailored execution, ensuring every element reflects your unique vision.',
        conscientiousStatement:
          'With a solid foundation, the build phase transforms your vision into a professional-grade platform, tailored to meet your unique needs with precision and care.',
        supportiveSummary:
          'With flexibility and collaboration, our process ensures your website is more than just functional, it’s a platform for success.',
        influentialPrompt:
          'Take the next step in creating a platform that reflects your vision. Let’s start your consultation today.',
        leftButtonText:
          'How does a one-on-one approach refine my ideas and bring clarity? What’s the next step in creating something aligned with my vision?',
        rightButtonText:
          'Would learning the technical details be a better use of my time? Why prioritize planning instead of jumping straight into execution?',
      };

      const currentPage = route.name as string;

      // Handle left button click
      function handleLeftClick() {
        trackingStore.addVisitedPage(currentPage);
        trackingStore.recordChoice(currentPage, 'left');
        const nextPage = trackingStore.getNextPage(currentPage, 'left');
        if (nextPage) router.push(nextPage);
      }

      // Handle right button click
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
