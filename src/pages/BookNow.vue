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
                @click="selectDay(day.value)"
              />
            </div>

            <!-- Time of Day Selection -->
            <div class="time-selection" v-if="formData.day">
              <p>Select a Time Range (One-Hour Session):</p>
              <q-btn
                v-for="time in timeOfDayOptions"
                :key="time.value"
                :label="time.label"
                class="time-button"
                outline
                :color="formData.timeOfDay === time.value ? 'primary' : 'secondary'"
                @click="selectTimeOfDay(time.value)"
              />
            </div>

            <!-- Specific Time Options -->
            <div class="specific-time-selection" v-if="formData.timeOfDay">
              <p>Select a Specific Time:</p>
              <q-btn
                v-for="time in specificTimeOptions"
                :key="time.value"
                :label="time.label"
                class="specific-time-button"
                outline
                :color="formData.specificTime === time.value ? 'primary' : 'secondary'"
                @click="formData.specificTime = time.value"
              />
            </div>

            <!-- Submit Button -->
            <q-btn
              :label="messages.buttonText"
              type="submit"
              class="submit-button glossy"
              :disable="!formData.day || !formData.timeOfDay || !formData.specificTime"
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
  day: '',
  timeOfDay: '',
  specificTime: '',
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
    'Choose the best day, time range, and specific hour for your session, and we’ll confirm your request within a few hours.',
  buttonText: 'Request Your Session',
};

// Day options
const dayOptions = [
  { label: `Tomorrow (${getFormattedDate(1)})`, value: 'tomorrow' },
  { label: `Day After Tomorrow (${getFormattedDate(2)})`, value: 'dayAfter' },
  { label: `Three Days From Now (${getFormattedDate(3)})`, value: 'threeDays' },
];

// Time of day options
const timeOfDayOptions = [
  { label: 'Morning (9:00 AM – 12:00 PM)', value: 'morning' },
  { label: 'Early PM (12:00 PM – 3:30 PM)', value: 'earlyAfternoon' },
  { label: 'Late PM (3:30 PM – 6:45 PM)', value: 'lateAfternoon' },
];

// Specific time options based on time of day
const specificTimeMap = {
  morning: [
    { label: '9:00 AM', value: '9:00' },
    { label: '10:15 AM', value: '10:15' },
    { label: '11:30 AM', value: '11:30' },
  ],
  earlyAfternoon: [
    { label: '12:00 PM', value: '12:00' },
    { label: '1:45 PM', value: '1:45' },
    { label: '3:15 PM', value: '3:15' },
  ],
  lateAfternoon: [
    { label: '3:30 PM', value: '3:30' },
    { label: '5:00 PM', value: '5:00' },
    { label: '6:45 PM', value: '6:45' },
  ],
};

const specificTimeOptions = ref([]);

function getFormattedDate(offset) {
  const date = new Date();
  date.setDate(date.getDate() + offset);
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
  });
}

function selectDay(day) {
  formData.value.day = day;
  formData.value.timeOfDay = '';
  formData.value.specificTime = '';
  specificTimeOptions.value = [];
}

function selectTimeOfDay(timeOfDay) {
  formData.value.timeOfDay = timeOfDay;
  formData.value.specificTime = '';
  specificTimeOptions.value = specificTimeMap[timeOfDay];
}

function submitSessionRequest() {
  console.log('Session Request Submitted:', formData.value);

  alert(
    `Thank you for your request! Your session is set for ${
      dayOptions.find((d) => d.value === formData.value.day)?.label
    } during the ${
      timeOfDayOptions.find((t) => t.value === formData.value.timeOfDay)?.label
    }, specifically at ${
      specificTimeOptions.value.find((t) => t.value === formData.value.specificTime)?.label
    }. We will confirm your session soon.`
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

.day-button, .time-button, .specific-time-button {
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
