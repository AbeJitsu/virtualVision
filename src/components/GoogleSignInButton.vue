<template>
  <q-btn
    flat
    class="gsi-quasar-button"
    @click="onClick"
  >
    <div class="gsi-button-content">
      <q-avatar>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          class="gsi-icon"
        >
          <path
            fill="#EA4335"
            d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
          ></path>
          <path
            fill="#4285F4"
            d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
          ></path>
          <path
            fill="#FBBC05"
            d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
          ></path>
          <path
            fill="#34A853"
            d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
          ></path>
          <path
            fill="none"
            d="M0 0h48v48H0z"
          ></path>
        </svg>
      </q-avatar>
      <span class="gsi-quasar-button-contents">Sign in with Google</span>
    </div>
  </q-btn>
</template>

<script setup lang="ts">
  const onClick = () => {
    console.log('Sign in with Google button clicked');
    // Add Google Sign-In logic here
  };
</script>

<style scoped>
  .gsi-quasar-button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background-color: #f2f2f2;
    border-radius: 20px;
    color: #1f1f1f;
    cursor: pointer;
    height: 40px;
    padding: 1rem;
    text-align: center;
    transition: background-color 0.218s, border-color 0.218s, box-shadow 0.218s;
    min-width: 12rem;
    letter-spacing: -0.5px;
  }

  .gsi-quasar-button:hover {
    background-color: #e6e6e6;
    box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
      0 1px 3px 1px rgba(60, 64, 67, 0.15);
  }

  .gsi-button-content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem; /* Space between the icon and text */
  }

  .gsi-icon {
    width: 20px;
    height: 20px;
  }

  .gsi-quasar-button-contents {
    font-size: 0.9rem;
    font-weight: 500;
    color: #1f1f1f;
    white-space: nowrap; /* Prevents text from wrapping */
  }

  /* Responsive adjustments */
  @media (max-width: 480px) {
    .gsi-quasar-button {
      padding: 0.5rem 1rem;
      min-width: 10rem;
    }

    .gsi-quasar-button-contents {
      font-size: 0.8rem;
    }

    .gsi-icon {
      width: 18px;
      height: 18px;
    }
  }

  .gsi-button-content {
    display: flex;
    align-items: center;
    justify-content: center;
    /* gap: -0.5rem;  */
    padding-right: 1rem;
  }
</style>
