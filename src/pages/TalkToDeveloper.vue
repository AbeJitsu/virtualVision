<template>
  <MessagingPage
    :messages="messages"
    @left-button-click="goToFocusedStrategySessions"
    @right-button-click="goToObjectionPage"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MessagingPage from '../components/MessagingPage.vue'; // Import MessagingPage component
import { TalkToDeveloper } from '../data/messages/TalkToDeveloper'; // Import TalkToDeveloper messages
import { useRouter } from 'vue-router';

export default defineComponent({
  components: {
    MessagingPage,
  },
  setup() {
    const messages = TalkToDeveloper; // Load TalkToDeveloper messages
    const router = useRouter();

    // Navigation for left button
    function goToFocusedStrategySessions() {
      router.push('/focused-strategy-sessions');
    }

    // Navigation for right button
    function goToObjectionPage() {
      router.push('/why-strategy-before-building');
    }

    return { messages, goToFocusedStrategySessions, goToObjectionPage };
  },
});
</script>

<style scoped lang="scss">
  @import '/src/css/app.scss';
  @import '/src/css/shared-styles.scss';
</style>

<!-- src/pages/TalkToDeveloper.vue -->
