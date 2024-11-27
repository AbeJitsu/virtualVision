<template>
  <q-page class="flex-column">
    <div class="content-container">
      <!-- Header for Terms of Service -->
      <div class="dominantTagline">
        <div>{{ messages.dominantTagline }}</div>
      </div>

      <!-- Tone-driven messaging -->
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

      <!-- Supportive wrap-up and binary choice -->
      <div class="supportive-wrapup">
        <p class="supportive-wrapup-intro">
          {{ messages.supportiveWrapUpIntro }}
        </p>
        <p class="supportive-wrapup-main">
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
            @click="navigateToPage('talkToDeveloper')"
            class="choice-btn q-mb-md enhanced-btn"
          />
          <q-btn
            :label="messages.binaryChoiceExploreSupportiveConscientious"
            @click="navigateToPage('termsDetails')"
            class="choice-btn q-mb-md enhanced-btn"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
  import { TermsOfService } from '../data/messages/TermsOfService'; // Correct relative path
  import { useRouter } from 'vue-router';

  const messages = TermsOfService; // Use imported messages
  const router = useRouter();

  function navigateToPage(choice: string) {
    if (choice === 'talkToDeveloper') {
      router.push('/talk-to-developer');
    } else if (choice === 'termsDetails') {
      router.push('/terms-details'); // Placeholder route
    }
  }
</script>

<style scoped lang="scss">
  @import '/src/css/app.scss';
  @import '/src/css/shared-styles.scss';
</style>
