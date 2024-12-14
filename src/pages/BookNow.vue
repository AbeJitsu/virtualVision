<template>
  <q-page class="book-now-page">
    <div class="container">
      <q-card class="card">
        <q-card-section>
          <!-- Supportive Statement -->
          <p class="message tone-message-box tone-message-box--supportive">
            {{ messages.supportiveStatement }}
          </p>

          <!-- Dominant Statement -->
          <p class="message tone-message-box tone-message-box--dominant">
            {{ messages.dominantStatement }}
          </p>

          <!-- Influential Statement -->
          <p class="message tone-message-box tone-message-box--influential">
            {{ messages.influentialStatement }}
          </p>

          <!-- Conscientious Statement -->
          <p class="message tone-message-box tone-message-box--conscientious">
            {{ messages.conscientiousStatement }}
          </p>

          <!-- Supportive Summary -->
          <p class="message supportive-wrapup">
            {{ messages.supportiveSummary }}
          </p>
        </q-card-section>

        <q-card-section>
          <q-form @submit.prevent="submitSessionRequest">
            <!-- Select Day -->
            <q-select
              filled
              v-model="formData.day"
              :options="dayOptions"
              label="Select a Day"
              hint="Choose Tomorrow or Day After"
              :rules="[(val) => !!val || 'Day selection is required']"
              class="input-field"
            />

            <!-- Select Time of Day -->
            <q-select
              filled
              v-model="formData.timeOfDay"
              :options="timeOfDayOptions"
              label="Select a Time of Day"
              hint="Choose Morning, Afternoon, or Evening"
              :rules="[(val) => !!val || 'Time selection is required']"
              class="input-field"
            />

            <!-- Submit Button -->
            <q-btn
              :label="messages.buttonText"
              type="submit"
              class="submit-button glossy"
              :disable="!formData.day || !formData.timeOfDay"
            />
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const formData = ref({
    day: '', // Day selection (Tomorrow, Day After Tomorrow)
    timeOfDay: '', // Time of day (Morning, Afternoon, Evening)
    name: '', // Optional user details
    email: '',
    phone: '',
  });

  const messages = {
    supportiveStatement:
      'It all starts with a single session to explore your ideas and clarify your vision.',
    dominantStatement:
      'This first step is entirely in your control, you decide the direction, and we’ll guide you with focus and clarity.',
    influentialStatement:
      'For just $49, you will gain expert insights and personalized strategies in a one-hour consultation.',
    conscientiousStatement:
      'Beyond this session, future steps are scheduled collaboratively, with each phase requiring mutual agreement before moving forward.',
    supportiveSummary:
      'Choose the best day and time for your session, and we’ll confirm your request within a few hours.',
    buttonText: 'Request Your Session',
  };

  const dayOptions = [
    { label: `Tomorrow (${getFormattedDate(1)})`, value: 'tomorrow' },
    { label: `Day After Tomorrow (${getFormattedDate(2)})`, value: 'dayAfter' },
  ];

  const timeOfDayOptions = [
    { label: 'Morning (9 AM–12 PM)', value: 'morning' },
    { label: 'Afternoon (12 PM–4 PM)', value: 'afternoon' },
    { label: 'Evening (4 PM–7 PM)', value: 'evening' },
  ];

  function submitSessionRequest() {
    console.log('Session Request Submitted:', formData.value);

    alert(
      `Thank you for your request! You selected ${
        dayOptions.find((d) => d.value === formData.value.day)?.label
      } during the ${
        timeOfDayOptions.find((t) => t.value === formData.value.timeOfDay)
          ?.label
      } window. We will confirm your session soon.`
    );
  }

  // Helper function to format future dates
  function getFormattedDate(offset) {
    const date = new Date();
    date.setDate(date.getDate() + offset);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'short',
      day: 'numeric',
    });
  }
</script>

<style scoped lang="scss">
  @import 'src/css/shared-styles.scss';

  .book-now-page .tone-message-box {
    margin-bottom: 1rem !important;
    padding: 1rem 1.5rem !important;
    opacity: 0.9;
  }

  .tone-message-box {
    margin: 1rem 2rem !important;
  }

  .book-now-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3.25em 1em;
    box-sizing: border-box;
    margin-top: 0.5rem;
  }

  .container {
    max-width: 600px;
    width: 100%;
  }

  .card {
    margin: 2em;
    padding: 1.5em;
    opacity: 0.9;
    color: $grayDark;
    border-radius: 8px;
    opacity: 0.95;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  }

  .message {
    text-align: center;
    color: $grayDark; /* Use consistent dark gray */
    font-size: medium; /* Adjust font size */
    margin: -0.5rem 3em;
    font-weight: 600;
  }

  .supportive-wrapup {
    margin: 2rem 4rem 0rem !important; /* Ensure final message aligns well */
    color: $grayDark;
    font-size: large; /* Adjust font size */
    font-weight: 600;
  }

  .input-field {
    margin-bottom: 2em;
    background-color: $grayVeryLight;
    border-radius: 5px;
  }

  .submit-button {
    width: 100%;
    margin-top: 1.5em;
    background-color: $primary;
    color: $textWhite;
    font-weight: bold;
    @extend .shared-hover;
  }
</style>

<!-- src/pages/BookNow.vue -->
