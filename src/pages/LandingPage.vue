<template>
  <q-page class="flex-column">
    <div class="content-container">
      <!-- Taglines -->
      <div>
        <div class="dominantTagline">{{ messages.dominantTagline }}</div>
        <div class="influentialTagline">{{ messages.influentialTagline }}</div>
      </div>

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
            class="custom-border-btn"
          />
          <q-btn
            :label="messages.customerObjectionDominantConscientious"
            @click="navigateToPage('focusedStrategySessions')"
            class="custom-border-btn"
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

  .custom-border-btn {
    border-width: 1px !important; /* Adjust as needed */
    border-radius: 10px; /* Optional: Smooth the corners */
    padding: 2rem 3rem; /* Adjust padding for consistent spacing */
    width: 100%; /* Ensure the button spans the desired width */
    text-align: center; /* Center-align the text */
    transition: all 0.3s ease; /* Smooth transition for hover effects */
    font-size: medium;
    font-weight: 600;
  }

  .custom-border-btn:hover {
    border-color: #007bff; /* Add a hover effect if needed */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Optional shadow */
  }
</style>

<!-- src/pages/LandingPage.vue -->
