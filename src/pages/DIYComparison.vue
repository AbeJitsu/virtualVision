<template>
  <q-page class="flex-column">
    <MessagingPage
      :messages="messages"
      @left-button-click="handleLeftClick"
      @right-button-click="handleRightClick"
    />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MessagingPage from '../components/MessagingPage.vue';
import DIYComparison from '../data/messages/DIYComparison';
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

    const messages = DIYComparison; // Load messages from DIYComparison.ts
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
