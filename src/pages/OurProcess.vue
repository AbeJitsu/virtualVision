<template>
  <MessagingPage
    :messages="messages"
    @left-button-click="goToTalkToDeveloper"
    @right-button-click="goToDiscovery"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MessagingPage from '../components/MessagingPage.vue';
import OurProcess from '../data/messages/OurProcess'; // Data for this page
import { useRouter } from 'vue-router';

export default defineComponent({
  components: {
    MessagingPage,
  },
  data() {
    return {
      messages: OurProcess, // Import message data for this page
    };
  },
  setup() {
    const router = useRouter();

    // Left button navigates to "Talk to Developer"
    function goToTalkToDeveloper() {
      router.push('/talk-to-developer');
    }

    // Right button navigates to the "Discovery" page or next step in the process
    function goToDiscovery() {
      router.push('/discovery');
    }

    return { goToTalkToDeveloper, goToDiscovery };
  },
});
</script>

<style scoped>
  /* Add any unique styles for OurProcess.vue if necessary */
</style>
