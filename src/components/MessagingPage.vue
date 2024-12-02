<template>
  <q-page class="flex-column">
    <div class="content-container">
      <!-- Taglines -->
      <div>
        <div :class="['tagline', 'tagline--dominant']">
          {{ messages.dominantTagline }}
        </div>
        <div :class="['tagline', 'tagline--influential']">
          {{ messages.influentialTagline }}
        </div>
      </div>

      <!-- Tone message grid layout -->
      <div class="tone-message-grid">
        <div class="tone-message-box tone-message-box--supportive">
          <p>{{ messages.supportiveStatement }}</p>
        </div>
        <div class="tone-message-box tone-message-box--dominant">
          <p>{{ messages.dominantStatement }}</p>
        </div>
        <div class="tone-message-box tone-message-box--influential">
          <p>{{ messages.influentialStatement }}</p>
        </div>
        <div class="tone-message-box tone-message-box--conscientious">
          <p>{{ messages.conscientiousStatement }}</p>
        </div>
      </div>

      <!-- Wrap-up and binary choice prompt -->
      <div class="supportive-wrapup">
        <p>{{ messages.supportiveSummary }}</p>
      </div>
      <div class="binary-choice">
        <div class="choice-prompts">
          <p>{{ messages.influentialPrompt }}</p>
        </div>
        <div class="action-buttons">
          <q-btn
            :label="messages.customerInnerVoiceSupportiveInfluentialChoice"
            @click="handleLeftClick"
            class="custom-btn"
          />
          <q-btn
            :label="messages.customerInnerVoiceDominantConscientiousObjection"
            @click="handleRightClick"
            class="custom-btn"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { useTrackingStore } from '../stores/trackingStore';

  export default defineComponent({
    props: {
      messages: {
        type: Object as PropType<{
          dominantTagline: string;
          influentialTagline: string;
          supportiveStatement: string;
          dominantStatement: string;
          influentialStatement: string;
          conscientiousStatement: string;
          supportiveSummary: string;
          influentialPrompt: string;
          customerInnerVoiceSupportiveInfluentialChoice: string;
          customerInnerVoiceDominantConscientiousObjection: string;
        }>,
        required: true,
      },
    },
    setup() {
      const route = useRoute(); // Access current route
      const router = useRouter(); // Access router instance
      const trackingStore = useTrackingStore(); // Access Pinia store

      function handleLeftClick() {
        const currentPage = route.name as string;
        console.log('Left Clicked:', { currentPage }); // Debug log
        trackingStore.addVisitedPage(currentPage);
        trackingStore.recordChoice(currentPage, 'left');
        const nextPage = trackingStore.getNextPage(currentPage, 'left');
        console.log('Next Page (Left):', nextPage); // Debug log
        if (nextPage) router.push(nextPage);
      }

      function handleRightClick() {
        const currentPage = route.name as string;
        console.log('Right Clicked:', { currentPage }); // Debug log
        trackingStore.addVisitedPage(currentPage);
        trackingStore.recordChoice(currentPage, 'right');
        const nextPage = trackingStore.getNextPage(currentPage, 'right');
        console.log('Next Page (Right):', nextPage); // Debug log
        if (nextPage) router.push(nextPage);
      }

      return { handleLeftClick, handleRightClick };
    },
  });
</script>

<style scoped lang="scss">
  @import '/src/css/app.scss';
  @import '/src/css/shared-styles.scss';

  .content-container {
    letter-spacing: -0.75px;
  }

  .dominantTagline {
    font-size: xx-large;
    font-weight: 600;
    margin-bottom: 1rem;
    color: $grayDark;
    text-align: center;
    padding-top: 1rem;
    letter-spacing: -1.25px;
  }

  .influentialTagline {
    margin-bottom: 2.5rem;
    color: $grayDark;
    text-align: center;
    letter-spacing: -1px;
  }

  .tone-message-box {
    font-size: 1.25rem;
    font-weight: 400;
    letter-spacing: -0.75px;
  }

  .supportive-wrapup {
    text-align: center;
    color: $grayVeryDark;
    font-weight: 600;
    font-size: x-large;
    margin: 2rem 7rem 1.5rem;
    padding-top: 0.1rem;
    letter-spacing: -0.5px;
  }
</style>
