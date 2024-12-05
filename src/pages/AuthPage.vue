<template>
  <div class="auth-page">
    <div class="auth-container">
      <q-card class="auth-card shadow-24">
        <!-- Header Section -->
        <q-card-section class="card-header glossy">
          <h4 class="text-h5 text-white q-my-md">Sign In</h4>
          <q-btn
            icon="close"
            flat
            round
            dense
            class="close-btn"
            @click="closeModal"
            aria-label="Close Authentication Modal"
          />
        </q-card-section>

        <!-- Form Section -->
        <q-card-section>
          <q-form class="form-container">
            <q-input
              v-model="email"
              type="email"
              label="Email"
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
            <GoogleSignInButton @click="handleGoogleSignIn" />
          </div>
        </q-card-section>

        <!-- Actions Section -->
        <q-card-actions class="actions-section justify-center">
          <q-btn
            unelevated
            size="lg"
            class="action-btn glossy"
            label="Sign In"
            @click="handleSignIn"
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
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import GoogleSignInButton from 'src/components/GoogleSignInButton.vue';

  // Define emitted events without importing defineEmits
  const emit = defineEmits(['close']);

  const email = ref('');
  const password = ref('');

  // Placeholder functions for interactivity
  function handleSignIn() {
    // Implement sign-in logic here
    console.log('Sign-In clicked');
    // After successful sign-in, close the modal
    emit('close');
  }

  function handleGoogleSignIn() {
    // Implement Google Sign-In logic here
    console.log('Google Sign-In clicked');
    // After successful sign-in, close the modal
    emit('close');
  }

  function handleForgotPassword() {
    console.log('Forgot Password clicked');
    // Implement forgot password logic or navigation here
  }

  function toggleRegistration() {
    console.log('Switch to Registration clicked');
    // Implement registration toggle or navigation here
  }

  // Function to close the modal
  function closeModal() {
    emit('close');
  }
</script>

<style scoped lang="scss">
  @import '/src/css/app.scss';
  @import '/src/css/shared-styles.scss';

  /* Container styling */
  .auth-page {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 7em;
    letter-spacing: -0.5px;
    font-weight: 500;
  }

  .auth-card {
    width: 100%;
    padding: 0rem;
    border-radius: 1em;
    background-color: rgba(
      255,
      255,
      255,
      0.9
    ); /* White background for the card with reduced opacity */
    position: relative;
  }

  /* Header styling */
  .card-header {
    background-color: $blueDark;
    // border-top-left-radius: 12px;
    // border-top-right-radius: 12px;
    // border-bottom-left-radius: 12px;
    // border-bottom-right-radius: 12px;
    text-align: center;
    position: relative;
  }

  /* Close button styling */
  .close-btn {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    color: white;
  }

  /* Form styling */
  .form-container {
    display: flex;
    flex-direction: column;
    padding: 0rem;
    margin: 1rem;
  }

  /* Input fields */
  .form-input {
    margin-bottom: 1rem;

    @media screen and (min-width: 768px) {
      margin-bottom: 0.5rem;
    }
  }

  /* Social buttons */
  .button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0rem 5rem;
    flex-direction: row;
    flex-wrap: nowrap;
    min-width: 14rem;
    margin-top: -2rem;

    @media screen and (max-width: 768px) {
      padding: 0rem 2em;
    }
  }

  /* Action buttons */
  .actions-section {
    padding: 1rem;
    text-align: center;
  }

  .action-btn {
    width: 40%;
    // padding: 0.75rem;
    background-color: $blueDark;
    color: white;
    border-radius: 8px;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: $blueVeryDark;
    }
  }

  /* Footer clickable text */
  .footer-section {
    text-align: center;
    padding: 1rem 0;

    .clickable {
      cursor: pointer;
      color: $grayDark;
      margin: 0.5rem 0;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .auth-card {
      padding: 0rem;
    }

    .card-header h4 {
      font-size: 1.5rem;
    }

    .action-btn {
      padding: 0.5rem;
    }
  }
</style>

<!-- src/pages/AuthPage.vue -->
