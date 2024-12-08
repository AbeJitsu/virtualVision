<template>
  <q-page class="book-now-page">
    <div class="container">
      <q-card class="card">
        <q-card-section>
          <div class="title">Book Your First Session</div>
          <p class="description">
            Start your journey with a $49 session. Choose a convenient time to
            discuss your vision with an expert developer.
          </p>
        </q-card-section>
        <q-card-section>
          <q-form @submit.prevent="submitBooking">
            <q-input
              filled
              v-model="formData.name"
              label="Your Name"
              hint="Enter your full name"
              :rules="[(val) => !!val || 'Name is required']"
              class="input-field"
            />
            <q-input
              filled
              v-model="formData.email"
              type="email"
              label="Email Address"
              hint="Enter your email for confirmation"
              :rules="[(val) => !!val || 'Email is required']"
              class="input-field"
            />
            <q-input
              filled
              v-model="formData.phone"
              type="tel"
              label="Phone Number"
              hint="Optional but helpful"
              class="input-field"
            />
            <q-select
              filled
              v-model="formData.datetime"
              :options="availableSlots"
              label="Select a Date and Time"
              hint="Choose your session"
              :rules="[(val) => !!val || 'Selection is required']"
              class="input-field"
            />
            <q-btn
              label="Confirm Booking"
              type="submit"
              class="submit-button glossy"
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
    start: 9, // 9:00 AM
    end: 19, // 7:00 PM (6:45 PM is the last start time)
  };

  const intervalMinutes = 165; // 2 hours and 45 minutes
  const minWaitHours = 15; // Minimum wait time of 15 hours

  function generateAvailableSlots() {
    const slots = [];
    const now = new Date();

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

  const availableSlots = ref(generateAvailableSlots());

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
  @import 'src/css/app.scss';
  .book-now-page {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3.25em 1em;
  }

  .container {
    max-width: 600px;
    width: 100%;
  }

  .card {
    margin: 1em;
    padding: 1em;
    // background-color: $grayVeryLight;
    opacity: 0.9;
    color: $grayDark; // White text for contrast
    border-radius: 8px; // Rounded corners for modern appearance
  }

  .title {
    font-size: 1.5em;
    text-align: center;
    margin-bottom: 1em;
    color: $grayVeryDark; // Ensuring title is readable on dark background
  }

  .description {
    text-align: center;
    margin-bottom: 1.5em;
    color: $grayDark; // Softer gray for descriptive text
  }

  .input-field {
    margin-bottom: 1.5em;
    background-color: $grayVeryLight; // Light blue for inputs
    border-radius: 5px;
  }

  .submit-button {
    width: 100%;

    margin-top: 1.5em;
    background-color: $primary;
    color: $textWhite; // White text
    font-weight: bold;
    @extend .shared-hover; // Hover effect
    // @media (min-width: 768px) {
    //   width: auto;
  }
</style>

<!-- src/pages/BookNow.vue -->
