<template>
  <q-page class="flex-column">
    <div class="content-container">
      <!-- Taglines -->
      <div>
        <div class="tagline tagline--dominant">
          A step-by-step process for building your ideal website.
        </div>
        <div class="tagline tagline--influential">
          Collaboration and strategy first, so execution is seamless.
        </div>
      </div>

      <!-- Tone message grid layout -->
      <div class="tone-message-grid">
        <div class="tone-message-box tone-message-box--supportive">
          <p>
            Every journey starts with the Essentials package, where we refine your ideas and clarify your objectives.
          </p>
        </div>
        <div class="tone-message-box tone-message-box--dominant">
          <p>
            In the Professional package, we dive deeper with five focused strategy sessions, ensuring every detail aligns perfectly before moving forward.
          </p>
        </div>
        <div class="tone-message-box tone-message-box--influential">
          <p>
            The Premium package combines tailored strategy and collaboration, transforming your vision into a fully realized, professional-grade platform.
          </p>
        </div>
        <div class="tone-message-box tone-message-box--conscientious">
          <p>
            Each package is designed to meet your unique needs, balancing collaboration and execution to achieve the best possible results.
          </p>
        </div>
      </div>

      <!-- Wrap-up and binary choice prompt -->
      <div class="supportive-wrapup">
        <p>
          With Essentials, Professional, and Premium, our process ensures your website isn’t just functional—it’s a platform for success.
        </p>
      </div>
      <div class="binary-choice">
        <div class="choice-prompts">
          <p>
            Take the first step with Essentials, or explore what Professional and Premium can offer. Let’s bring your vision to life.
          </p>
        </div>
        <div class="action-buttons">
          <q-btn
            label="Discover the possibilities, and see how it works."
            @click="handleLeftClick"
            class="custom-btn"
          />
          <q-btn
            label="Learn why it works, and understand the benefits."
            @click="handleRightClick"
            class="custom-btn"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useTrackingStore } from '../stores/trackingStore';

export default defineComponent({
  setup() {
    const router = useRouter();
    const route = useRoute();
    const trackingStore = useTrackingStore();

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

.content-container {
  width: 100%;
  max-width: 1000px;
  letter-spacing: -1px; /* Ensure letter-spacing is applied */
  padding-top: calc(var(--navbar-height, 4rem) + 2rem);
  margin: 0 auto;

  @media (max-width: 599px) {
    padding-bottom: 1rem;
    padding: 0 1.75rem;
    margin-top: 6rem;
  }
}

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
    background-color: rgba($textWhite, 0.25);
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
    color: $grayDark;
  }
}

.tagline--influential {
  margin-top: 1.5rem !important;
}

.tone-message-grid {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 50%;
  margin: 2rem auto;

  @media (max-width: 599px) {
    padding: 0;
    gap: 2rem;
    width: 80%;
  }
}

.tone-message-box {
  font-size: 1.25rem;
  font-weight: 400;
  letter-spacing: -0.55px; /* Ensure correct spacing is applied */
  text-align: center;
  padding: 2rem 4rem 1rem;
  border-radius: 8px;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);

  &--supportive {
    background-color: rgba($blueVeryLight, 0.8);
    border: 1px solid $blueVeryLight;
    color: $grayVeryDark;
  }

  &--dominant {
    background-color: rgba($orangeVeryLight, 0.6);
    border: 1px solid $orangeVeryLight;
    color: $grayVeryDark;
  }

  &--influential {
    background-color: rgba($yellowVeryLight, 0.7);
    color: $grayVeryDark;
  }

  &--conscientious {
    background-color: rgba($greenVeryLight, 0.6);
    border: 2px solid $greenVeryLight;
    color: $grayVeryDark;
  }

  @media (max-width: 599px) {
    font-size: 1rem;
    padding: 2rem 2.5rem 1rem;
  }
}

.supportive-wrapup {
  text-align: center;
  color: $grayVeryDark;
  font-weight: 600;
  font-size: x-large;
  margin: 4rem 8rem 4rem;
  padding-top: 0.1rem;
  letter-spacing: -0.5px;

  @media (max-width: 599px) {
    margin: 4rem 2em 3rem;
    font-size: large;
    font-weight: 500;
  }
}

.binary-choice {
  text-align: center;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;
  margin: 5rem 2rem;

  @media (max-width: 599px) {
    flex-direction: column;
    gap: 1rem;
    margin: 1em 3em 1em;
  }

  .choice-prompts {
    display: flex;
    justify-content: center;
    font-size: 1.3rem;
    font-weight: 500;
    color: $grayVeryDark;
    margin-top: -2rem;

    @media (max-width: 599px) {
      font-size: medium;
      margin-top: -0.5rem;
    }
  }

  .action-buttons {
    display: flex;
    flex-direction: row;
    margin-top: 3rem;
    gap: 2rem;
    justify-content: center;

    @media (max-width: 599px) {
      flex-direction: column;
      gap: 1.5rem;
      margin-top: 2rem;
    }

    .custom-btn {
      width: 50%;
      height: auto;
      background-color: rgba(255, 255, 255, 0.66);
      color: $grayDark;
      font-size: 1.1rem;
      font-weight: 600;
      border-radius: 8px;
      box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease-in-out;
      text-align: center;
      padding: 2rem 3rem;
      line-height: 1.5;
      letter-spacing: -0.75px;

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
