<template>
  <q-page class="flex-column">
    <div class="content-container">
      <!-- Taglines -->
      <div>
        <div class="dominantTagline">{{ messages.dominantTagline }}</div>
        <div class="influentialTagline">{{ messages.influentialTagline }}</div>
      </div>
      <div class="influentialTagline"></div>

      <!-- Tone message grid layout -->
      <div class="tone-message-grid">
        <div class="tone-supportive tone-message-box">
          <p>{{ messages.supportiveStatement }}</p>
        </div>
        <div class="tone-dominant tone-message-box">
          <p>{{ messages.dominantStatement }}</p>
        </div>
        <div class="tone-influential tone-message-box">
          <p>{{ messages.influentialStatement }}</p>
        </div>
        <div class="tone-conscientious tone-message-box">
          <p>{{ messages.conscientiousStatement }}</p>
        </div>
      </div>

      <!-- Wrap-up and binary choice prompt -->
      <div class="supportive-wrapup">
        <p>{{ messages.supportiveWrapUp }}</p>
      </div>
      <div class="binary-choice">
        <div class="choice-prompts">
          <p>{{ messages.influentialPrompt }}</p>
        </div>
        <div class="action-buttons">
          <q-btn
            :label="messages.customerChoiceSupportiveInfluential"
            @click="navigateToPage('talkToDeveloper')"
            class="choice-btn q-mb-md enhanced-btn"
          />
          <q-btn
            :label="messages.customerObjectionDominantConscientious"
            @click="navigateToPage('focusedStrategySessions')"
            class="choice-btn q-mb-md enhanced-btn"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
  import { LandingPage } from '../data/messages/LandingPage'; // Correct relative path
  import { useRouter } from 'vue-router';

  const messages = LandingPage; // Directly use the imported messages
  console.log('LandingPage messages:', messages); // Debug log to verify messages

  const router = useRouter();

  function navigateToPage(choice: string) {
    if (choice === 'talkToDeveloper') {
      router.push('/talk-to-developer');
    } else if (choice === 'focusedStrategySessions') {
      router.push('/focused-strategy-sessions');
    }
  }
</script>

<style scoped lang="scss">
  @import '/src/css/app.scss';
  @import '/src/css/shared-styles.scss';
</style>

<!-- src/pages/LandingPage.vue -->
