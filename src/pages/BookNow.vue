<template>
  <!-- Messaging Page for taglines and summaries -->
  <MessagingPage :messages="messages" />

  <!-- Scheduling Component -->
  <div class="scheduling-container">
    <q-card class="card">
      <q-card-section>
        <q-form @submit.prevent="submitSessionRequest">
          <!-- Day Selection -->
          <div class="day-selection">
            <p class="section-title">Select a Day:</p>
            <div class="button-group">
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
          </div>

          <!-- Time of Day Selection -->
          <div v-if="formData.day" class="time-selection">
            <p class="section-title">Select a Time Range (One-Hour Session):</p>
            <div class="button-group">
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
          </div>

          <!-- Specific Time Options -->
          <div v-if="formData.timeOfDay" class="specific-time-selection">
            <p class="section-title">Select a Specific Time:</p>
            <div class="button-group">
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
          </div>

          <!-- Submit Button -->
<q-btn
  label="Request Your Session"
  class="submit-button glossy"
  type="submit"
  :disable="!formData.day || !formData.timeOfDay || !formData.specificTime"
/>
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import MessagingPage from '../components/MessagingPage.vue';

export default defineComponent({
  components: { MessagingPage },
  setup() {
    const messages = {
      dominantTagline: 'Book your personalized session today!',
      influentialTagline: 'Take the first step towards your vision.',
      supportiveStatement: 'Your journey starts with a single session. Choose a day and time that fits your schedule.',
      dominantStatement: 'This is your opportunity to take control and gain clarity on your goals.',
      influentialStatement: 'Imagine the possibilities as we turn your ideas into actionable steps together.',
      conscientiousStatement: 'Every session is customized to your needs, ensuring no time is wasted.',
      supportiveSummary: 'Choose a day, time range, and specific hour for your session.',
      influentialSummary: 'We’ll confirm your request promptly and guide you every step of the way.',
    };

    const formData = ref({
      day: '',
      timeOfDay: '',
      specificTime: '',
    });

    const dayOptions = [
      { label: 'Tomorrow', value: 'tomorrow' },
      { label: 'Day After Tomorrow', value: 'dayAfter' },
      { label: 'Three Days From Now', value: 'threeDays' },
    ];

    const timeOfDayOptions = [
      { label: 'Morning (9:00 AM – 12:00 PM)', value: 'morning' },
      { label: 'Early PM (12:00 PM – 3:30 PM)', value: 'earlyAfternoon' },
      { label: 'Late PM (3:30 PM – 6:45 PM)', value: 'lateAfternoon' },
    ];

    const specificTimeOptions = ref<{ label: string; value: string }[]>([]);

    const specificTimeMap: Record<string, { label: string; value: string }[]> = {
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

    function selectDay(day: string) {
      formData.value.day = day;
      formData.value.timeOfDay = '';
      formData.value.specificTime = '';
      specificTimeOptions.value = [];
    }

    function selectTimeOfDay(timeOfDay: string) {
      formData.value.timeOfDay = timeOfDay;
      formData.value.specificTime = '';
      specificTimeOptions.value = specificTimeMap[timeOfDay];
    }

    function submitSessionRequest() {
      alert(
        `Session Requested for ${formData.value.day}, ${formData.value.timeOfDay}, ${formData.value.specificTime}`
      );
    }

    return {
      messages,
      formData,
      dayOptions,
      timeOfDayOptions,
      specificTimeOptions,
      selectDay,
      selectTimeOfDay,
      submitSessionRequest,
    };
  },
});
</script>

<style scoped lang="scss">
  @import '/src/css/app.scss';

.scheduling-container {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 4rem;
}

.card {
  width: 100%;
  max-width: 600px;
  padding: 1.5rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
}

.section-title {
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
}

.button-group {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.day-button,
.time-button,
.specific-time-button {
  width: 100%;
  max-width: 200px;
}

.submit-button {
  width: 100%;
  margin-top: 2rem;
  background-color: var(--q-primary);
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
}

.submit-button.glossy {
  background-color: $blueDark; /* Replace with your original blue */
  box-shadow: none;
}

.submit-button.glossy:hover {
  /* background: linear-gradient(145deg, #357ab7, #4a90e2); */
  transform: scale(1.02);
}
</style>
