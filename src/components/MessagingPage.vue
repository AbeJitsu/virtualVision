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
            :label="leftButtonLabel"
            @click="handleLeftClick"
            class="custom-btn"
          />
          <q-btn
            :label="rightButtonLabel"
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
      }>,
      required: true,
    },
    leftButtonLabel: {
      type: String,
      default: 'Discover the possibilities, and see how it works.',
    },
    rightButtonLabel: {
      type: String,
      default: 'Learn why it works, and understand the benefits.',
    },
  },
  setup(props) {
    const route = useRoute();
    const router = useRouter();
    const trackingStore = useTrackingStore();

    function handleLeftClick() {
      const currentPage = route.name as string;
      trackingStore.addVisitedPage(currentPage);
      trackingStore.recordChoice(currentPage, 'left');

      const nextPage = trackingStore.getNextPage(currentPage, 'left');
      if (nextPage === '/landing-page') {
        router.push('/');
      } else if (nextPage) {
        router.push(nextPage);
      } else {
        console.error('No next page determined for left choice.');
      }
    }

    function handleRightClick() {
      const currentPage = route.name as string;
      trackingStore.addVisitedPage(currentPage);
      trackingStore.recordChoice(currentPage, 'right');

      const nextPage = trackingStore.getNextPage(currentPage, 'right');
      if (nextPage) {
        router.push(nextPage);
      } else {
        console.error('No next page determined for right choice.');
      }
    }

    return { handleLeftClick, handleRightClick, props };
  },
});
</script>

<style scoped lang="scss">
  @import '/src/css/app.scss';

  .content-container {
    width: 100%;
    max-width: 1000px;
    letter-spacing: -1.1px;
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

  // Tagline Base Class with modifiers for dominant and influential
  .tagline {
    text-align: center;
    font-weight: 600;
    padding: 0rem;

    &::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba($textWhite, 0.35);
      z-index: -1;
    }

    &--dominant {
      font-size: xx-large;
      font-weight: 600;
      margin-bottom: 1rem;
      color: $grayDark;
      padding-top: 1rem;
    }

    &--influential {
      font-size: x-large;
      margin-bottom: 2.5rem;
      font-weight: 500;
      color: $grayDark;
      letter-spacing: -1px;
    }
  }

  .tagline--influential {
    margin-top: 1.5rem !important;
  }

  .influentialTagline {
    color: $grayDark;
    text-align: center;
    letter-spacing: -1px;

    @media (max-width: 599px) {
      margin-bottom: 3rem;
      font-size: medium; /* Adjust font size for better readability */
    }
  }

  // Stacked Tone Message Layout
  .tone-message-grid {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 50%;
    margin: 0rem auto;

    @media (max-width: 599px) {
      padding: 0 0rem; /* Adjust padding for mobile */
      gap: 1.75rem; /* Slightly reduce gap for smaller screens */
      width: 80%;
    }
  }

  .choice-prompts {
      display: flex;
      justify-content: center;
      font-size: 1.4rem;
      font-weight: 500;
      color: $grayVeryDark;
      margin-top: -2rem;
      letter-spacing: -0.55px;
      @media (max-width: 599px) {
        font-size: medium;
        margin-top: -0.5rem;
      }
    }

    // Binary Choice Buttons
  .binary-choice {
    text-align: center;
    flex-direction: row;
    justify-content: center;

    margin: 5rem 8rem;

    @media (max-width: 599px) {
      flex-direction: column;
      gap: 1rem;
      margin: 1em 3em 1em;
    }

    .action-buttons {
      display: flex;
      flex-direction: row;
      margin-top: 3rem;
      gap: 2rem;
      justify-content: center;

      @media (max-width: 599px) {
        flex-direction: column;
        gap: 1.5rem; /* Adjust button gap for smaller screens */
        margin-top: 2rem;
      }

      // Shared Button Styles
      .custom-btn {
        width: 50%;
        height: auto;
        background-color: rgba(255, 255, 255, 0.66);
        color: $grayDark;
        font-size: 1.3rem;
        font-weight: 600;
        border-radius: 8px;
        box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease-in-out;
        text-align: center;
        padding: 2rem 3rem;
        line-height: 1.5;
        letter-spacing: -0.75px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        word-break: break-word;
        white-space: normal;
        text-transform: none;
        margin-bottom: 0;

        &:hover {
          background-color: rgba(255, 255, 255, 0.6);
          box-shadow: 2px 4px 8px rgba($grayVeryDark, 0.5);
        }

        @media (max-width: 599px) {
          width: 100%;
          height: auto;
          font-size: large;
          line-height: 1.3;
        }
      }
    }
  }
</style>
