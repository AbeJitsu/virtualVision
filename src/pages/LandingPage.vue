<template>
  <MessagingPage :messages="messages" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MessagingPage from '../components/MessagingPage.vue';
import LandingPage from '../data/messages/LandingPage';

export default defineComponent({
  components: {
    MessagingPage,
  },
  data() {
    return {
      messages: LandingPage, // Import the data file
    };
  },
});
</script>

<style scoped>
/* Add any page-specific styles here, if needed */
</style>
