<template>
  <q-footer class="custom-footer glossy">
    <div class="footer-container">
      <!-- Footer Logo Section -->
      <div class="footer-logo">
        <router-link
          to="/"
          class="home-link no-link-style"
        >
          <img
            src="/icons/Logo_square_white_BG.png"
            alt="Vision2Virtual Logo"
            class="footer-logo-img"
          />
        </router-link>
      </div>

      <!-- Footer Links Section -->
      <div class="footer-links">
        <q-btn
          flat
          label="About Us"
          :to="{ name: 'about-us' }"
          class="nav-text footer-btn"
        />
        <q-btn
          flat
          label="Privacy Policy"
          :to="{ name: 'privacy-policy' }"
          class="nav-text footer-btn"
        />
        <q-btn
          flat
          label="Terms of Service"
          :to="{ name: 'terms-of-service' }"
          class="nav-text footer-btn"
        />
        <q-btn
          flat
          icon="email"
          label="Contact Us"
          :to="{ name: 'contact-us' }"
          class="nav-text footer-btn"
        />
      </div>
    </div>
  </q-footer>
</template>

<script setup lang="ts">
  // No additional logic required; purely styling-focused component
</script>

<style scoped lang="scss">
  @import '/src/css/app.scss';

  .custom-footer {
    background-color: $blueDark;
    color: $textWhite;
    padding: 1rem 2rem;
    text-align: center;
    box-shadow: 0px -2px 8px rgba(0, 0, 0, 0.1);
  }

  .footer-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 0.5rem 1.25rem 0.5rem 2rem;
    }
  }

  .footer-logo {
    display: flex;
    justify-content: center;
    align-items: center;

    .footer-logo-img {
      max-width: 1.8rem;
      height: auto;
      border-radius: 50%;
      border: 3px solid $textWhite;
    }
  }

  .footer-links {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;

    .footer-btn {
      font-size: 1rem;
      white-space: nowrap;
      text-transform: none;
      color: $textWhite;
      transition: color 0.3s ease-in-out;

      &:hover {
        color: rgba(255, 255, 255, 0.8);
      }
    }
  }

  @media (max-width: 768px) {
    .footer-links {
      flex-direction: column;
      align-items: center;
    }
  }
</style>
