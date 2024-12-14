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
          <q-form
            v-if="availableSlots.length > 0"
            @submit.prevent="submitBooking"
          >
            <!-- Select Date and Time -->
            <q-select
              filled
              v-model="formData.datetime"
              :options="availableSlots"
              label="Select a Date and Time"
              hint="Choose your session"
              :rules="[(val) => !!val || 'Selection is required']"
              class="input-field"
            />
            <!-- Name (shows after Date and Time is selected) -->
            <q-input
              v-if="formData.datetime"
              filled
              v-model="formData.name"
              label="Your Name"
              hint="Enter your full name"
              :rules="[(val) => !!val || 'Name is required']"
              class="input-field"
            />
            <!-- Email Address (shows after Name is filled) -->
            <q-input
              v-if="formData.name"
              filled
              v-model="formData.email"
              type="email"
              label="Email Address"
              hint="Enter your email for confirmation"
              :rules="[(val) => !!val || 'Email is required']"
              class="input-field"
            />
            <!-- Phone Number (shows after Email Address is filled) -->
            <q-input
              v-if="formData.email"
              filled
              v-model="formData.phone"
              type="tel"
              label="Phone Number"
              hint="Optional but helpful"
              class="input-field"
            />
            <!-- Submit Button (enabled only when all required fields are filled) -->
            <q-btn
              :label="messages.buttonText"
              type="submit"
              class="submit-button glossy"
              :disable="!formData.datetime || !formData.name || !formData.email"
            />
          </q-form>
          <div
            v-else
            class="loading-message"
          >
            Loading available slots...
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const formData = ref({
    name: '',
    email: '',
    phone: '',
    datetime: '',
  });

  const operationalHours = {
    start: 9, // 9:00 AM
    end: 19, // 7:00 PM
  };

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
      'Choose the best date and time for your first session, and we’ll confirm your request within a few hours.',
    buttonText: 'Request Your First Session',
  };

  const availableSlots = ref(generateAvailableSlots());

  function generateAvailableSlots() {
    const slots = [];
    const now = new Date();

    // Round current time up to the nearest 15 minutes
    now.setMinutes(Math.ceil(now.getMinutes() / 15) * 15, 0, 0);

    // Slot 1: Same rounded time on the next day
    const firstSlot = new Date(now);
    firstSlot.setDate(firstSlot.getDate() + 1); // Move to the next day
    adjustToOperationalHours(firstSlot); // Ensure within business hours
    slots.push(formatSlot(firstSlot));

    // Slot 2: 2 hours and 45 minutes after the first slot, or next valid time
    const secondSlot = new Date(firstSlot);
    secondSlot.setMinutes(secondSlot.getMinutes() + 165); // Add 2 hours and 45 minutes
    if (!isWithinOperationalHours(secondSlot)) {
      secondSlot.setDate(secondSlot.getDate() + 1); // Move to the day after
      secondSlot.setHours(9, 0, 0, 0); // Set to start of business hours
    }
    slots.push(formatSlot(secondSlot));

    // Slot 3: Always 6:45 PM on the same day as the second slot
    const thirdSlot = new Date(secondSlot);
    thirdSlot.setHours(18, 45, 0, 0); // Default to 6:45 PM
    if (!isWithinOperationalHours(thirdSlot)) {
      thirdSlot.setDate(thirdSlot.getDate() + 1); // Move to the next valid day
      thirdSlot.setHours(9, 0, 0, 0); // Start of business day as fallback
    }
    slots.push(formatSlot(thirdSlot));

    // Ensure unique and sorted slots
    return slots
      .filter(
        (slot, index, self) =>
          index === self.findIndex((s) => s.dateTime === slot.dateTime)
      )
      .sort(
        (a, b) =>
          new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime()
      );
  }

  // Helper to check if a time is within operational hours
  function isWithinOperationalHours(date) {
    return (
      date.getHours() >= operationalHours.start &&
      date.getHours() < operationalHours.end
    );
  }

  // Helper to adjust times within operational hours
  function adjustToOperationalHours(date) {
    if (date.getHours() < operationalHours.start) {
      date.setHours(operationalHours.start, 0, 0, 0); // Start of business day
    } else if (date.getHours() >= operationalHours.end) {
      date.setDate(date.getDate() + 1); // Move to next day
      date.setHours(operationalHours.start, 0, 0, 0); // Start of business day
    }
  }

  // Formatting function updated to ensure EST conversion
  function formatSlot(date) {
    const estDate = new Date(
      date.toLocaleString('en-US', { timeZone: 'America/New_York' })
    );
    const formattedTime = formatTimeTo12Hour(
      estDate.getHours(),
      estDate.getMinutes()
    );
    return {
      label: `${estDate.toISOString().split('T')[0]}, ${formattedTime} EST`,
      dateTime: estDate.toISOString(),
    };
  }

  function formatTimeTo12Hour(hours, minutes) {
    const period = hours >= 12 ? 'PM' : 'AM';
    const hour12 = hours % 12 || 12;
    const minuteString = minutes.toString().padStart(2, '0');
    return `${hour12}:${minuteString} ${period}`;
  }

  function submitBooking() {
    if (
      !formData.value.name ||
      !formData.value.email ||
      !formData.value.datetime
    ) {
      console.log('Please fill out all required fields.');
      return;
    }

    console.log('Booking Confirmed:', formData.value);
    alert(
      `Thank you, ${formData.value.name}! Your session is booked for ${formData.value.datetime}.`
    );
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
