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
      padding-bottom: 9rem;
      padding-left: 2rem;
      padding-right: 2rem;
      padding-top: 5rem;
    }
  }

  .dominantTagline {
    font-size: xx-large;
    font-weight: 600;
    margin-bottom: 1rem;
    color: $grayDark;
    text-align: center;
    padding-top: 1rem;
    letter-spacing: -1.25px;

    @media (max-width: 599px) {
      margin-bottom: 2rem;
    }
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
      padding: 0 1.5rem; /* Prevent content from touching edges on mobile */
    }
  }

  .tone-message-box {
    font-size: 1.25rem;
    font-weight: 400;
    letter-spacing: -0.75px;
  }

  .binary-choice {
    // display: flex;
    // flex-direction: row;
    // justify-content: center;

    @media (max-width: 599px) {
      flex-direction: column;
      gap: 1.5rem;
      padding: 0 2rem;
    }

    .action-buttons {
      // display: flex;
      // flex-direction: row;
      // gap: 1rem;

      @media (max-width: 599px) {
        flex-direction: column;
        width: 100%;
      }

      .custom-btn {
        width: auto;
        text-align: justify;
        padding: 1rem 3rem;

        @media (max-width: 599px) {
          width: 100%;
        }

        &:hover {
          background-color: $textWhite;
          color: $blueDark;
        }
      }
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
      margin: 2rem 1rem 1.5rem;
    }
  }
</style>
