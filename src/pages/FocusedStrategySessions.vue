<template>
  <MessagingPage
    :messages="messages"
    @left-button-click="goToCompleteWebsiteBuild"
    @right-button-click="goToObjectionPage"
  />
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import MessagingPage from '../components/MessagingPage.vue'; // Import MessagingPage component
  import { FocusedStrategySessions } from '../data/messages/FocusedStrategySessions'; // Import messages for Focused Strategy Sessions
  import { useRouter } from 'vue-router';

  export default defineComponent({
    components: {
      MessagingPage,
    },
    setup() {
      const messages = FocusedStrategySessions; // Load Focused Strategy Sessions messages
      const router = useRouter();

      // Navigation for left button
      function goToCompleteWebsiteBuild() {
        router.push('/complete-website-build');
      }

      // Navigation for right button
      function goToObjectionPage() {
        router.push('/diy-comparison');
      }

      return { messages, goToCompleteWebsiteBuild, goToObjectionPage };
    },
  });
</script>

<style scoped lang="scss">
  @import '/src/css/app.scss';
  @import '/src/css/shared-styles.scss';
</style>
