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
              v-model="formData.date"
              :options="availableDates"
              label="Select a Date"
              hint="Choose a preferred session date"
              :rules="[val => !!val || 'Date is required']"
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
  date: '',
});

const availableDates = ref([
  '2024-11-25',
  '2024-11-26',
  '2024-11-27',
  '2024-11-28',
]);

function submitBooking() {
  if (!formData.value.name || !formData.value.email || !formData.value.date) {
    console.log('Please fill out all required fields.');
    return;
  }

  console.log('Booking Confirmed:', formData.value);
  alert('Thank you! Your session has been booked.');
}
</script>

<style scoped lang="scss">
.book-now-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f8f9fa;

  .container {
    max-width: 600px;
    width: 100%;
  }
}
</style>
