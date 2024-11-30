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
import { CompleteWebsiteBuild } from '../data/messages/CompleteWebsiteBuild'; // Import messages for Complete Website Build
import { useRouter } from 'vue-router';

export default defineComponent({
  components: {
    MessagingPage,
  },
  setup() {
    const messages = CompleteWebsiteBuild; // Load Complete Website Build messages
    const router = useRouter();

    // Navigation for left button
    function goToFocusedStrategySessions() {
      router.push('/focused-strategy-sessions');
    }

    // Navigation for right button
    function goToObjectionPage() {
      router.push('/diy-comparison');
    }

    return { messages, goToFocusedStrategySessions, goToObjectionPage };
  },
});
</script>

<style scoped lang="scss">
@import '/src/css/app.scss';
@import '/src/css/shared-styles.scss';
</style>
