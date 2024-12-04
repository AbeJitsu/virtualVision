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
    letter-spacing: -0.75px;

    @media (max-width: 599px) {
      padding-bottom: 1rem;
      padding: 0 2.75rem;
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
    }
  }

  .tone-message-grid {
    // display: grid;
    // gap: 2rem;

    @media (min-width: 600px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 599px) {
      grid-template-columns: 1fr;
      padding: 0 1rem; /* Prevent content from touching edges on mobile */
      gap: 2rem;
      margin-bottom: 4rem;
      margin-top: 2rem;
    }
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

    @media (max-width: 599px) {
      margin: 2rem 1rem 2rem;
    }
  }

  .binary-choice {
    // display: flex;
    // flex-direction: row;
    // justify-content: center;

    @media (max-width: 599px) {
      flex-direction: column;
      gap: 1.5rem;
      padding: 2rem 0rem 2rem 0rem;
      margin-top: 1.5rem;
    }

    .action-buttons {
      // display: flex;
      // flex-direction: row;
      // gap: 1rem;

      @media (max-width: 599px) {
        flex-direction: column;
        margin-top: 2rem;
        width: 100%;
      }

      .custom-btn {
        display: flex; /* Ensure proper flex behavior */
        align-items: center; /* Vertically align text */
        justify-content: center; /* Horizontally center text */
        text-align: center; /* Center-align text */
        white-space: normal; /* Allow text to wrap */
        overflow-wrap: break-word; /* Prevent text from spilling outside */
        width: auto; /* Allow width to fit text */
        max-width: 100%; /* Prevent the button from exceeding container size */
        height: auto; /* Let height adjust based on content */
        line-height: 1.5; /* Increase vertical spacing for multiline text */
        font-size: 1rem; /* Adjust font size */
        border-radius: 8px; /* Maintain rounded corners */
        box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow for contrast */
        background-color: rgba(255, 255, 255, 0.5); /* Background styling */
        transition: all 0.3s ease-in-out;

        @media (max-width: 599px) {
          width: 100%; /* Full-width button for mobile */
          padding: 2rem 2rem;
        }

        &:hover {
          background-color: rgba(255, 255, 255, 0.7); /* Subtle hover effect */
          color: #0b2545; /* Darker text on hover */
        }
      }
    }
  }
</style>
