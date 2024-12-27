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
          'Get a custom-built website tailored for your business success.',
        influentialTagline:
          'Partner with an expert to create a site built for growth.',

        supportiveStatement:
          'Building your website should feel simple and exciting. We make the process approachable by focusing on your vision and taking care of the technical details.',
        dominantStatement:
          'Our custom web development includes a responsive design, a robust backend, and seamless database integration—everything your business needs to thrive online.',
        influentialStatement:
          'This isn’t just a website; it’s a platform to grow your business. We’ll work together to craft something that reflects your brand and drives results.',
        conscientiousStatement:
          'Unlike cookie-cutter solutions, we build custom websites from scratch. With expert development and a proven process, you’ll get a site designed to meet your exact needs.',

        supportiveSummary:
          'Let us handle the tech while you focus on your vision. Together, we’ll build a site that empowers your business.',
        influentialPrompt:
          'Take the first step toward a website built to grow with you.',
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
  /* Your existing SCSS styles for the Landing Page */
</style>
