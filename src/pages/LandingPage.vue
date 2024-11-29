<template>
  <MessagingPage
    :messages="messages"
    @left-button-click="goToTalkToDeveloper"
    @right-button-click="goToDIYComparison"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MessagingPage from '../components/MessagingPage.vue';
import LandingPage from '../data/messages/LandingPage';
import { useRouter } from 'vue-router';

export default defineComponent({
  components: {
    MessagingPage,
  },
  data() {
    return {
      messages: LandingPage, // Import the data file
    };
  },
  setup() {
    const router = useRouter();

    function goToTalkToDeveloper() {
      router.push('/talk-to-developer');
    }

    function goToDIYComparison() {
      router.push('/diy-comparison'); // This would be the new page addressing objections.
    }

    return { goToTalkToDeveloper, goToDIYComparison };
  },
});
</script>
