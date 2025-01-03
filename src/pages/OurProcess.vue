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
    'Your vision, brought to life with clarity and purpose.',
  influentialTagline:
    'Together, we’ll craft solutions that elevate your business.',

  supportiveStatement:
    'Every journey starts with a clear understanding. Through live collaboration, we’ll explore what truly matters to your business and how to reflect that in your website.',
  dominantStatement:
    'Our process adapts to your goals, ensuring each step adds value. You’ll see your ideas come to life in ways that are both meaningful and effective.',
  influentialStatement:
    'Imagine a website that not only looks great but also saves you time—streamlining tasks, connecting with customers, and helping your business grow effortlessly.',
  conscientiousStatement:
    'We focus on creating a seamless experience: a user-friendly interface, reliable functionality, and tools tailored to your needs. Every detail is designed to align with your goals.',

  supportiveSummary:
    'This is more than building a website—it’s about building a foundation for your business to thrive. Step by step, we bring your vision into reality.',
  influentialSummary:
    'Let’s work together to create something impactful. Your business deserves a site that works as hard as you do.',
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
