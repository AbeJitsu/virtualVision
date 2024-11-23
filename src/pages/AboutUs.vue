<template>
  <q-page class="flex-column">
    <div class="content-container">
      <!-- Tagline for the page or section -->
      <div class="dominantInfluentialTagline">
        <h2>{{ messages.dominantInfluentialTagline }}</h2>
      </div>

      <!-- Tone message choices in a 2x2 grid layout -->
      <div class="tone-message-grid">
        <div class="tone-supportive tone-message-box">
          <p>{{ messages.supportiveIntro }}</p>
          <p>{{ messages.supportiveMain }}</p>
        </div>
        <div class="tone-dominant tone-message-box">
          <p>{{ messages.dominantSupportiveIntro }}</p>
          <p>{{ messages.dominantMain }}</p>
        </div>
        <div class="tone-influential tone-message-box">
          <p>{{ messages.influentialSupportiveIntro }}</p>
          <p>{{ messages.influentialMain }}</p>
        </div>
        <div class="tone-conscientious tone-message-box">
          <p>{{ messages.conscientiousSupportiveIntro }}</p>
          <p>{{ messages.conscientiousMain }}</p>
        </div>
      </div>

      <!-- Supportive wrap-up and binary choice prompt below -->
      <div class="supportive-wrapup">
        <p class="supportive-wrapup-intro">
          {{ messages.supportiveWrapUpIntro }}
        </p>
        <p class="supportiveWrapUpMain">
          {{ messages.supportiveWrapUpMain }}
        </p>
      </div>

      <div class="binary-choice">
        <div class="choice-prompts">
          <p>{{ messages.promptInfluential }}</p>
          <p>{{ messages.promptSupportive }}</p>
        </div>
        <div class="action-buttons">
          <q-btn
            :label="messages.binaryChoiceReadySupportiveInfluential"
            to="/talk-to-developer"
            class="choice-btn q-mb-md enhanced-btn"
          />
          <q-btn
            :label="messages.binaryChoiceExploreSupportiveConscientious"
            to="/focused-strategy-sessions"
            class="choice-btn q-mb-md enhanced-btn"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
  import { AboutUs } from '../data/messages/AboutUs'; // Correct relative path
  const messages = AboutUs; // Directly use the imported messages
</script>

<style scoped lang="scss">
  @import '/src/css/app.scss';
  @import '/src/css/shared-styles.scss';
</style>
