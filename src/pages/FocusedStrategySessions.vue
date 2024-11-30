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
  import { FocusedStrategySessions } from '../data/messages/FocusedStrategySessions';
  import { useRouter, useRoute } from 'vue-router';
  import { useTrackingStore } from '../stores/trackingStore';

  export default defineComponent({
    components: {
      MessagingPage,
    },
    setup() {
      const messages = FocusedStrategySessions;
      const router = useRouter();
      const route = useRoute();
      const trackingStore = useTrackingStore();

      function handleLeftClick() {
        const nextPage = trackingStore.getNextPage(
          route.name as string,
          'left'
        );
        if (nextPage) {
          router.push(nextPage);
        }
      }

      function handleRightClick() {
        const nextPage = trackingStore.getNextPage(
          route.name as string,
          'right'
        );
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
  @import '/src/css/shared-styles.scss';
</style>
