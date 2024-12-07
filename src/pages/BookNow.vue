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

const intervalMinutes = 165; // 2 hours and 45 minutes
const minWaitHours = 6; // Minimum wait time of 6 hours

function generateAvailableSlots() {
  const slots = [];
  const now = new Date();

  // Slot 1: Always 9:00 AM the next day
  const firstSlot = new Date(now);
  firstSlot.setDate(now.getDate() + 1);
  firstSlot.setHours(9, 0, 0, 0);
  slots.push(formatSlot(firstSlot));

  // Slot 2: Dynamic slot (23 hours 30 mins to 23 hours 45 mins in the future, rounded)
  const dynamicSlot = new Date(now);
  dynamicSlot.setTime(now.getTime() + 23 * 60 * 60 * 1000 + 30 * 60 * 1000);
  dynamicSlot.setMinutes(Math.round(dynamicSlot.getMinutes() / 15) * 15, 0, 0);

  if (
    dynamicSlot.getTime() >= now.getTime() + 23 * 60 * 60 * 1000 + 30 * 60 * 1000 &&
    dynamicSlot.getTime() <= now.getTime() + 24 * 60 * 60 * 1000
  ) {
    slots.push(formatSlot(dynamicSlot));
  }

  // Slot 3: Middle slot between first and dynamic slots
  const firstSlotTime = firstSlot.getTime();
  const dynamicSlotTime = dynamicSlot.getTime();
  const timeGap = dynamicSlotTime - firstSlotTime;

  if (timeGap > intervalMinutes * 2 * 60 * 1000) {
    const middleSlot = new Date(firstSlot);
    middleSlot.setTime(firstSlotTime + timeGap / 2); // Midpoint between first and dynamic slots
    middleSlot.setMinutes(Math.round(middleSlot.getMinutes() / 15) * 15, 0, 0);

    if (
      middleSlot.getTime() - firstSlotTime >= intervalMinutes * 60 * 1000 &&
      dynamicSlotTime - middleSlot.getTime() >= intervalMinutes * 60 * 1000
    ) {
      slots.push(formatSlot(middleSlot));
    }
  }

  // Ensure exactly 3 slots by adding fallback if needed
  while (slots.length < 3) {
    const fallbackSlot = new Date(slots[slots.length - 1]?.dateTime || firstSlot);
    fallbackSlot.setMinutes(fallbackSlot.getMinutes() + intervalMinutes);
    fallbackSlot.setMinutes(Math.round(fallbackSlot.getMinutes() / 15) * 15, 0, 0);

    if (
      fallbackSlot.getTime() > firstSlot.getTime() &&
      fallbackSlot.getTime() < dynamicSlot.getTime()
    ) {
      slots.push(formatSlot(fallbackSlot));
    } else {
      break;
    }
  }

  // Ensure unique and sorted slots
  return slots
    .filter(
      (slot, index, self) =>
        index === self.findIndex((s) => s.dateTime === slot.dateTime)
    )
    .sort((a, b) => new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime());
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
