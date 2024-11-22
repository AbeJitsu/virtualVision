<template>
  <q-page class="window-height window-width row justify-center items-center">
    <div class="column q-pa-lg">
      <div class="row">
        <q-card square class="shadow-24" style="width:300px;height:485px;">
          <!-- Header Section -->
          <q-card-section class="bg-deep-purple-7">
            <h4 class="text-h5 text-white q-my-md">Sign In</h4>
          </q-card-section>

          <!-- Form Section -->
          <q-card-section>
            <q-form class="q-px-sm q-pt-xl">
              <q-input
                v-model="email"
                type="email"
                label="Email"
                square
                clearable
                :rules="[val => !!val || 'Email is required']"
              >
                <template v-slot:prepend>
                  <q-icon name="email" />
                </template>
              </q-input>

              <q-input
                v-model="password"
                type="password"
                label="Password"
                square
                clearable
                :rules="[val => !!val || 'Password is required']"
              >
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
              </q-input>
            </q-form>
          </q-card-section>

          <!-- Social Media Buttons -->
          <q-card-section>
            <div class="text-center q-pa-md q-gutter-md">
              <q-btn round color="red-8" @click="handleGoogleSignIn">
                <q-icon name="fab fa-google" size="1.2rem" />
              </q-btn>
            </div>
          </q-card-section>

          <!-- Actions Section -->
          <q-card-actions class="q-px-lg">
            <q-btn unelevated size="lg" color="purple-4" class="full-width text-white" label="Sign In" />
          </q-card-actions>

          <!-- Footer Section -->
          <q-card-section class="text-center q-pa-sm">
            <p class="text-grey-6 clickable" @click="handleForgotPassword">Forgot your password?</p>
            <p class="text-grey-6 clickable" @click="toggleRegistration">Don't have an account? Register</p>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const email = ref('');
const password = ref('');

// Placeholder functions for interactivity
function handleGoogleSignIn() {
  console.log('Google Sign-In clicked');
}

function handleForgotPassword() {
  console.log('Forgot Password clicked');
}

function toggleRegistration() {
  console.log('Switch to Registration clicked');
}
</script>

<style scoped>
.clickable {
  cursor: pointer;
  text-decoration: underline;
  color: #673ab7;
}
.clickable:hover {
  color: #512da8;
}
</style>
