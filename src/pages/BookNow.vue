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
            <!-- Day Selection -->
            <div class="day-selection">
              <p>Select a Day:</p>
              <q-btn
                v-for="day in dayOptions"
                :key="day.value"
                :label="day.label"
                class="day-button"
                outline
                :color="formData.day === day.value ? 'primary' : 'secondary'"
                @click="formData.day = day.value"
              />
            </div>

            <!-- Time Range Selection -->
            <div class="time-selection" v-if="formData.day">
              <p>Select a Time Range:</p>
              <q-btn
                v-for="time in timeRangeOptions"
                :key="time.value"
                :label="time.label"
                class="time-button"
                outline
                :color="formData.time === time.value ? 'primary' : 'secondary'"
                @click="formData.time = time.value"
              />
            </div>

            <!-- Submit Button -->
            <q-btn
              :label="messages.buttonText"
              type="submit"
              class="submit-button glossy"
              :disable="!formData.day || !formData.time"
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
  day: '', // Selected day (e.g., "tomorrow" or "dayAfter")
  time: '', // Selected time range (e.g., "morning")
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
    'Choose the best day and time range for your session, and we’ll confirm your request within a few hours.',
  buttonText: 'Request Your Session',
};

// Day options
const dayOptions = [
  { label: `Tomorrow (${getFormattedDate(1)})`, value: 'tomorrow' },
  { label: `Day After Tomorrow (${getFormattedDate(2)})`, value: 'dayAfter' },
];

// Time range options
const timeRangeOptions = [
  { label: 'Morning (9:00 AM – 12:00 PM)', value: 'morning' },
  { label: 'Early Afternoon (12:00 PM – 3:00 PM)', value: 'earlyAfternoon' },
  { label: 'Late Afternoon (3:00 PM – 5:00 PM)', value: 'lateAfternoon' },
  { label: 'Early Evening (5:00 PM – 7:00 PM)', value: 'earlyEvening' },
];

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

function submitSessionRequest() {
  console.log('Session Request Submitted:', formData.value);

  alert(
    `Thank you for your request! Your session is set for ${
      formData.value.day === 'tomorrow' ? 'Tomorrow' : 'Day After Tomorrow'
    } during the ${
      timeRangeOptions.find((t) => t.value === formData.value.time)?.label
    } range. We will confirm your session soon.`
  );
}
</script>

<style scoped lang="scss">
@import 'src/css/shared-styles.scss';

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
  opacity: 0.95;
  color: $grayDark;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}

.message {
  text-align: center;
  color: $grayDark;
  font-size: medium;
  margin: -0.5rem 3em;
  font-weight: 600;
}

.supportive-wrapup {
  margin: 2rem 4rem 0rem !important;
  color: $grayDark;
  font-size: large;
  font-weight: 600;
}

.day-button, .time-button {
  margin: 0.5rem;
  width: 100%;
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
