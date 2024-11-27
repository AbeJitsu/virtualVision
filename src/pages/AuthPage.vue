<template>
  <q-page
    class="window-height window-width row justify-center items-center auth-page"
  >
    <div class="column q-pa-lg content-container">
      <div class="row justify-center">
        <q-card
          square
          class="shadow-24 auth-card"
        >
          <!-- Header Section -->
          <q-card-section class="card-header glossy">
            <h4 class="text-h5 text-white q-my-md">Sign In</h4>
          </q-card-section>

          <!-- Form Section -->
          <q-card-section>
            <q-form class="form-container">
              <q-input
                v-model="email"
                type="email"
                label="Email"
                square
                clearable
                :rules="[(val) => !!val || 'Email is required']"
                class="form-input"
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
                :rules="[(val) => !!val || 'Password is required']"
                class="form-input"
              >
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
              </q-input>
            </q-form>
          </q-card-section>

          <!-- Social Media Buttons -->
          <q-card-section>
            <div class="button-container">
              <GoogleSignInButton />
            </div>
          </q-card-section>

          <!-- Actions Section -->
          <q-card-actions class="actions-section justify-center">
            <q-btn
              unelevated
              size="lg"
              class="action-btn glossy"
              label="Sign In"
            />
          </q-card-actions>

          <!-- Footer Section -->
          <q-card-section class="footer-section">
            <p
              class="clickable"
              @click="handleForgotPassword"
            >
              Forgot your password?
            </p>
            <p
              class="clickable"
              @click="toggleRegistration"
            >
              Don't have an account? Register
            </p>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import GoogleSignInButton from 'src/components/GoogleSignInButton.vue';

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

<style scoped lang="scss">
@import '/src/css/app.scss';
@import '/src/css/shared-styles.scss';

/* Page styling */
.auth-page {
  // background-color: #f8f9fa;
}

/* Card styling */
.auth-card {
  width: 50%;
  height: 66%;
  padding: 2rem 2rem;
}

/* Header styling */
.card-header {
  background-color: $blueMid;
}

/* Form styling */
.form-container {
  padding: 1rem 1rem;
}

.form-input {
  margin-bottom: 1.5rem;
}

/* Social buttons */
.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

/* Action buttons */
.actions-section {
  padding: 1rem;
  text-align: center;
}

.action-btn {
  margin-top: 1rem;
  transition: background-color 0.3s ease-in-out;
  background-color: $blueMid;
  color: white;
  padding: 1rem 2rem;

  &:hover {
    background-color: $blueDark;
  }
}

/* Footer clickable text */
.footer-section {
  text-align: center;
  padding: 1rem;
}

.clickable {
  cursor: pointer;
  color: $grayDark;

  &:hover {
    text-decoration: underline;
  }
}
</style>
