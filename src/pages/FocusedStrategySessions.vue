<template>
  <q-page class="flex-column">
    <div class="content-container">
      <!-- Tagline for the page or section -->
      <div class="dominantTagline">
        <div>{{ currentMessage.dominantTagline }}</h2>
      </div>

      <!-- Tone message choices in a 2x2 grid layout -->
      <div class="tone-message-grid">
        <div class="tone-supportive tone-message-box">
          <p>{{ currentMessage.supportiveIntro }}</p>
          <p>{{ currentMessage.supportiveMain }}</p>
        </div>
        <div class="tone-dominant tone-message-box">
          <p>{{ currentMessage.dominantSupportiveIntro }}</p>
          <p>{{ currentMessage.dominantMain }}</p>
        </div>
        <div class="tone-influential tone-message-box">
          <p>{{ currentMessage.influentialSupportiveIntro }}</p>
          <p>{{ currentMessage.influentialMain }}</p>
        </div>
        <div class="tone-conscientious tone-message-box">
          <p>{{ currentMessage.conscientiousSupportiveIntro }}</p>
          <p>{{ currentMessage.conscientiousMain }}</p>
        </div>
      </div>

      <!-- Supportive wrap-up and binary choice prompt below -->
      <div class="supportive-wrapup">
        <p class="supportive-wrapup-intro">
          {{ currentMessage.supportiveWrapUpIntro }}
        </p>
        <p class="supportive-wrapup-main">
          {{ currentMessage.supportiveWrapUpMain }}
        </p>
      </div>

      <div class="binary-choice">
        <div class="choice-prompts">
          <p>{{ currentMessage.promptInfluential }}</p>
          <p>{{ currentMessage.promptSupportive }}</p>
        </div>
        <div class="action-buttons">
          <!-- Left button navigates to booking page -->
          <q-btn
            :label="currentMessage.binaryChoiceReadySupportiveInfluential"
            to="/book"
            class="choice-btn q-mb-md enhanced-btn"
          />
          <!-- Right button navigates to Complete Website Build page -->
          <q-btn
            :label="currentMessage.binaryChoiceExploreSupportiveConscientious"
            to="/complete-website-build"
            class="choice-btn q-mb-md enhanced-btn"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
  import { FocusedStrategySessions } from '../data/messages/FocusedStrategySessions';

  // Directly use the imported messages
  const currentMessage = FocusedStrategySessions;
</script>

<style scoped lang="scss">
  @import '/src/css/app.scss';
  @import '/src/css/shared-styles.scss';
</style>
