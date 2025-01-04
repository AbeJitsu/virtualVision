<template>
  <MessagingPage
    :messages="messages"
    @left-button-click="handleLeftClick"
    @right-button-click="handleRightClick"
  />

  <!-- Nav Buttons -->
  <NavButtons
    :currentPage="currentPage"
    :leftButtonLabel="leftButtonLabel"
    :rightButtonLabel="rightButtonLabel"
    @left-click="handleLeftClick"
    @right-click="handleRightClick"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MessagingPage from '../components/MessagingPage.vue';
import NavButtons from '../components/NavButtons.vue';
import { useRouter, useRoute } from 'vue-router';
import { useTrackingStore } from '../stores/trackingStore';

export default defineComponent({
  components: {
    MessagingPage,
    NavButtons,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const trackingStore = useTrackingStore();

    const currentPage = route.name as string;

    // Messages for MessagingPage
    const messages = {
      dominantTagline: 'Empower your business with a custom site that drives growth.',
      influentialTagline: 'Turn your ideas into a site that inspires and connects.',
      supportiveStatement:
        'Your website should work as hard as you do. We’ll help you create a site that’s simple for visitors to use and focused on achieving your goals.',
      dominantStatement:
        'Your site will attract and engage visitors, keep everything running smoothly, and connect to the tools your business needs to succeed.',
      influentialStatement:
        'Imagine a site that looks professional, is easy for customers to navigate, and saves you time by handling routine tasks automatically.',
      conscientiousStatement:
        'Every site we build is customized to fit your goals, ensuring it works exactly as you need it to. No templates or shortcuts—just a solution built for you.',
      supportiveSummary:
        'We’ll handle the details so you can focus on what you do best. Together, we’ll build a website that supports your vision.',
      influentialSummary:
        'Take the first step to create a website that saves time, looks great, and grows with your business.',
    };

    // Determine next pages and their labels
    const leftNextPage = trackingStore.getNextPage(currentPage, 'left');
    const rightNextPage = trackingStore.getNextPage(currentPage, 'right');

    const leftButtonLabel = leftNextPage?.label || 'Explore More Options';
    const rightButtonLabel = rightNextPage?.label || 'Continue Your Journey';

    function handleLeftClick() {
      if (leftNextPage) {
        trackingStore.addVisitedPage(currentPage);
        trackingStore.recordChoice(currentPage, 'left');
        router.push(leftNextPage.route);
      }
    }

    function handleRightClick() {
      if (rightNextPage) {
        trackingStore.addVisitedPage(currentPage);
        trackingStore.recordChoice(currentPage, 'right');
        router.push(rightNextPage.route);
      }
    }

    return {
      messages,
      currentPage,
      leftButtonLabel,
      rightButtonLabel,
      handleLeftClick,
      handleRightClick,
    };
  },
});
</script>

<style scoped lang="scss">
/* Your existing SCSS styles for the Landing Page */
</style>
