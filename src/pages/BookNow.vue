<template>
  <q-page class="book-now-page">
    <div class="container">
      <q-card class="q-ma-md q-pa-md">
        <q-card-section>
          <div class="text-h5 text-center q-mb-md">
            Book Your First Session
          </div>
          <p class="text-center">
            Start your journey with a $49 session. Choose a convenient time to discuss your vision with an expert developer.
          </p>
        </q-card-section>
        <q-card-section>
          <q-form @submit.prevent="submitBooking">
            <q-input
              filled
              v-model="formData.name"
              label="Your Name"
              hint="Enter your full name"
              :rules="[val => !!val || 'Name is required']"
              class="q-mb-md"
            />
            <q-input
              filled
              v-model="formData.email"
              type="email"
              label="Email Address"
              hint="Enter your email for confirmation"
              :rules="[val => !!val || 'Email is required']"
              class="q-mb-md"
            />
            <q-input
              filled
              v-model="formData.phone"
              type="tel"
              label="Phone Number"
              hint="Optional but helpful"
              class="q-mb-md"
            />
            <q-select
              filled
              v-model="formData.datetime"
              :options="availableSlots"
              label="Select a Date and Time"
              hint="Choose your session"
              :rules="[val => !!val || 'Selection is required']"
              class="q-mb-md"
            />
            <q-btn
              label="Confirm Booking"
              type="submit"
              color="primary"
              class="full-width q-mt-md"
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
  end: 19, // 7:00 PM
};

const minWaitHours = 6; // Minimum wait time of 6 hours
const intervalMinutes = 165; // 2 hours and 45 minutes

function generateAvailableSlots() {
  const slots = [];
  const now = new Date();

  // Slot 1: Always 9:00 AM the next day
  const tomorrowMorning = new Date(now);
  tomorrowMorning.setDate(now.getDate() + 1);
  tomorrowMorning.setHours(9, 0, 0, 0);
  slots.push(formatSlot(tomorrowMorning));

  // Slot 2: 6:45 PM slot
  const eveningSlot = new Date(now);
  eveningSlot.setHours(18, 45, 0, 0); // Set to 6:45 PM
  if (eveningSlot.getTime() - now.getTime() >= minWaitHours * 60 * 60 * 1000) {
    // If valid for today, add it
    slots.push(formatSlot(eveningSlot));
  } else {
    // Otherwise, move it to tomorrow
    eveningSlot.setDate(eveningSlot.getDate() + 1);
    slots.push(formatSlot(eveningSlot));
  }

  // Slot 3: Dynamic slot between 9:00 AM and 6:45 PM
  const dynamicSlot = new Date(tomorrowMorning);
  dynamicSlot.setMinutes(dynamicSlot.getMinutes() + intervalMinutes); // Add 2 hours and 45 minutes to 9:00 AM
  if (dynamicSlot.getTime() < eveningSlot.getTime()) {
    slots.push(formatSlot(dynamicSlot));
  } else {
    // If dynamic slot cannot fit between, try earlier slot (2 hours and 45 minutes before 6:45 PM)
    const earlierSlot = new Date(eveningSlot);
    earlierSlot.setMinutes(earlierSlot.getMinutes() - intervalMinutes);
    if (earlierSlot.getTime() > tomorrowMorning.getTime()) {
      slots.push(formatSlot(earlierSlot));
    }
  }

  // Ensure slots are unique and sorted chronologically
  return slots
    .filter(
      (slot, index, self) =>
        index === self.findIndex((s) => s.dateTime === slot.dateTime)
    )
    .sort(
      (a, b) => new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime()
    );
}

function formatSlot(date) {
  const formattedTime = formatTimeTo12Hour(date.getHours(), date.getMinutes());
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
  if (!formData.value.name || !formData.value.email || !formData.value.datetime) {
    console.log('Please fill out all required fields.');
    return;
  }

  console.log('Booking Confirmed:', formData.value);
  alert(`Thank you, ${formData.value.name}! Your session is booked for ${formData.value.datetime}.`);
}
</script>

<style scoped lang="scss">
.book-now-page {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4em;

  .container {
    max-width: 600px;
    width: 100%;
  }
}
</style>

<!-- src/pages/BookNow.vue -->
