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
          <q-form @submit.prevent="submitBooking">
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
    start: 9,
    end: 19,
  };

  const intervalMinutes = 165;
  const minWaitHours = 15;

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
    const intervalMinutes = 165;
    const minWaitHours = 15;

    // Slot 1: Dynamically calculated slot
    const firstSlot = new Date(now);
    firstSlot.setTime(now.getTime() + 23.5 * 60 * 60 * 1000); // 23 hours 30 minutes
    firstSlot.setMinutes(Math.round(firstSlot.getMinutes() / 15) * 15, 0, 0); // Round to nearest 15 minutes
    if (firstSlot.getHours() < operationalHours.start)
      firstSlot.setHours(operationalHours.start, 0, 0, 0);
    if (firstSlot.getHours() >= operationalHours.end)
      firstSlot.setHours(operationalHours.end - 1, 45, 0, 0);
    slots.push(formatSlot(firstSlot));

    // Slot 2: Check 2 hours and 45 minutes prior or after
    const secondSlot = new Date(firstSlot);
    secondSlot.setMinutes(secondSlot.getMinutes() - intervalMinutes);
    if (
      secondSlot.getHours() >= operationalHours.start &&
      secondSlot.getTime() >= now.getTime() + minWaitHours * 60 * 60 * 1000
    ) {
      slots.push(formatSlot(secondSlot));
    } else {
      secondSlot.setTime(firstSlot.getTime() + intervalMinutes * 60 * 1000); // 2 hours 45 minutes later
      if (
        secondSlot.getHours() < operationalHours.end &&
        secondSlot.getTime() >= now.getTime() + minWaitHours * 60 * 60 * 1000
      ) {
        slots.push(formatSlot(secondSlot));
      }
    }

    // Slot 3: Always the next day if two slots are on the same day
    if (
      slots.length === 2 &&
      slots.every((slot) =>
        slot.dateTime.includes(firstSlot.toISOString().split('T')[0])
      )
    ) {
      const thirdSlot = new Date(firstSlot);
      thirdSlot.setDate(firstSlot.getDate() + 1); // Day after tomorrow
      if (slots[1].dateTime.includes('AM')) {
        thirdSlot.setHours(18, 45, 0, 0); // 6:45 PM
      } else {
        thirdSlot.setHours(9, 0, 0, 0); // 9:00 AM
      }
      slots.push(formatSlot(thirdSlot));
    } else {
      // Otherwise, follow the same day logic for the third slot
      const thirdSlot = new Date(firstSlot);
      if (slots[1] && slots[1].dateTime.includes('AM')) {
        thirdSlot.setHours(18, 45, 0, 0); // 6:45 PM
      } else {
        thirdSlot.setHours(9, 0, 0, 0); // 9:00 AM
      }
      slots.push(formatSlot(thirdSlot));
    }

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

  function formatSlot(date) {
    const formattedTime = formatTimeTo12Hour(
      date.getHours(),
      date.getMinutes()
    );
    return {
      label: `${date.toISOString().split('T')[0]}, ${formattedTime} EST`,
      dateTime: date.toISOString(),
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
