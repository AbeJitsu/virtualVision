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
        dominantTagline: 'Transform Your Vision Into a Digital Reality.',
        influentialTagline: 'Create a platform that reflects your goals and creativity.',

        supportiveStatement:
          'Building on the foundation established in the previous phases, this package focuses on bringing your vision to life with tailored development and collaboration.',
        dominantStatement:
          'Over 10 business days, we’ll collaborate for one hour each day to refine your priorities, while dedicating up to five development hours per day to make measurable progress.',
        influentialStatement:
          'Picture a website that not only looks exceptional but also functions seamlessly, empowering your business with a unique and effective online presence.',
        conscientiousStatement:
          'This phase ensures each detail is tailored to your specific needs. With 10 collaboration hours and 50 development hours, your platform will be designed for long-term success.',

        supportiveSummary:
          'The Premium Vision Build turns your goals into a fully realized platform, tailored to meet your business needs and aspirations.',
        influentialSummary:
          'Ready to create a powerful and unique digital presence? Let’s take the next step together.',
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
