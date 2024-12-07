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
        trackingStore.addVisitedPage(currentPage);
        trackingStore.recordChoice(currentPage, 'left');
        const nextPage = trackingStore.getNextPage(currentPage, 'left');
        if (nextPage) router.push(nextPage);
      }

      function handleRightClick() {
        const currentPage = route.name as string;
        trackingStore.addVisitedPage(currentPage);
        trackingStore.recordChoice(currentPage, 'right');
        const nextPage = trackingStore.getNextPage(currentPage, 'right');
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
    width: 100%;
    max-width: 1000px;
    letter-spacing: -0.75px;
    padding-top: calc(
      var(--navbar-height, 4rem) + 2rem
    ); // Navbar height + spacing
    margin: 0 auto;

    @media (max-width: 599px) {
      padding-bottom: 1rem;
      padding: 0 1.75rem; /* Adjust padding for better mobile spacing */
      margin-top: 6rem;
    }
  }

  .dominantTagline {
    font-size: xx-large;
    font-weight: 600;
    margin-bottom: 1rem;
    color: $grayDark;
    text-align: center;
    padding-top: 11rem;
    letter-spacing: -1.25px;

    @media (max-width: 599px) {
      margin-bottom: 2rem;
      font-size: large; /* Reduce font size on smaller screens */
      padding-top: 6rem; /* Adjust padding for mobile */
    }
  }

  .tagline--influential {
    margin-top: 1.5rem !important;
  }

  .influentialTagline {
    margin-bottom: 2.5rem;
    color: $grayDark;
    text-align: center;
    letter-spacing: -1px;

    @media (max-width: 599px) {
      margin-bottom: 3rem;
      font-size: medium; /* Adjust font size for better readability */
    }
  }

  // SDICS Message Box Grid Layout
  .tone-message-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
    width: 100%;
    margin-bottom: 0rem auto;
    padding-bottom: 0rem;

    @media (max-width: 599px) {
      grid-template-columns: 1fr;
      padding: 0 1rem; /* Prevent content from touching edges on mobile */
      gap: 1.5rem; /* Reduce gap for mobile */
      margin-bottom: 3rem;
      margin-top: 1.5rem;
    }
  }

  .tone-message-box {
    font-size: 1.25rem;
    font-weight: 400;
    letter-spacing: -0.75px;

    @media (max-width: 599px) {
      font-size: 1rem; /* Scale down font size for mobile */
      padding: 2rem 2rem 1rem; /* Add padding for better spacing */
    }
  }

  .supportive-wrapup {
    text-align: center;
    color: $grayVeryDark;
    font-weight: 600;
    font-size: x-large;
    margin: 2rem 7rem 1.5rem;
    padding-top: 0.1rem;
    letter-spacing: -0.5px;

    @media (max-width: 599px) {
      margin: 2rem 1rem 2rem;
      font-size: large;
      font-weight: 500;
    }
  }

  // Binary Choice Buttons
  .binary-choice {
    text-align: center;

    flex-direction: row;
    justify-content: center;
    gap: 2rem;

    @media (max-width: 599px) {
      flex-direction: column;
      gap: 1rem; /* Adjust gap for stacked buttons */
      margin: 1em 3em 1em;
    }

    .choice-prompts {
      display: flex;
      justify-content: center;
      font-size: 1.3rem;
      font-weight: 500;
      color: $grayVeryDark;
      margin-top: -1rem;

      @media (max-width: 599px) {
        font-size: medium;
        margin-top: -0.5rem;
      }
    }

    .action-buttons {
      display: flex;
      flex-direction: row;
      gap: 1rem;

      @media (max-width: 599px) {
        flex-direction: column;
        gap: 1.5rem; /* Adjust button gap for smaller screens */
      }

      .custom-btn {
        padding: 4rem 1.5rem; /* Adjust padding for mobile buttons */
        margin: 0;
        width: 100%; /* Full-width buttons on mobile */
        max-width: 100%; /* Prevent overflow */
        line-height: 1.4; /* Adjust line spacing */
        white-space: normal; /* Allow text to wrap */
        text-align: center;
        display: flex; /* Ensure content aligns properly */
        align-items: center;
        justify-content: center; /* Center-align content */
        flex-wrap: wrap; /* Wrap text if needed */
        word-break: break-word; /* Handle long words */

        @media (max-width: 599px) {
          font-size: 0.9rem; /* Adjust font size for better fit */
          line-height: 1.3;
        }
      }
    }
  }
</style>
