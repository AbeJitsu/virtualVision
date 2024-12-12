<template>
  <q-header
    class="custom-header glossy"
    elevated
  >
    <q-toolbar>
      <!-- Logo and Title Section -->
      <div class="logo-section">
        <router-link
          to="/"
          class="home-link no-link-style"
          active-class="active-link"
        >
          <div class="title-logo-container">
            <img
              src="/icons/Logo_square_white_BG.png"
              alt="Vision2Virtual Logo"
              class="desktop-logo"
            />
            <span class="toolbar-title desktop-only">{{ toolbarTitle }}</span>
          </div>
        </router-link>
      </div>

      <!-- Desktop Navigation Section -->
      <div class="nav-links desktop-only">
        <q-btn
          flat
          label="OUR PROCESS"
          :to="{ name: 'our-process' }"
          class="nav-text"
        />
        <q-btn
          flat
          label="BOOK NOW"
          :to="{ path: '/book-now' }"
          class="nav-text highlight-cta"
        />
        <q-btn-dropdown
          flat
          no-caps
          label="More"
          class="nav-text nav-dropdown"
          content-class="dropdown-content"
        >
          <q-list>
            <q-item
              v-for="(link, index) in navLinks"
              :key="index"
              clickable
              v-close-popup
              @click="navigateTo(link.to)"
            >
              <q-item-section>{{ link.label }}</q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>

      <div class="login-section desktop-only">
        <q-btn
          flat
          no-caps
          class="login-btn"
          @click="navigateTo({ name: 'auth-page' })"
        >
          <q-avatar
            icon="person"
            color="primary"
            text-color="white"
            size="md"
          />
        </q-btn>
      </div>

      <!-- Mobile Navigation Section -->
      <div class="mobile-nav">
        <q-btn
          flat
          label="OUR PROCESS"
          :to="{ name: 'our-process' }"
          class="mobile-only nav-text"
        />
        <q-btn-dropdown
          flat
          no-caps
          icon="menu"
          class="nav-dropdown mobile-only"
          content-class="dropdown-content"
        >
          <q-list>
            <q-item
              v-for="(link, index) in mobileLinks"
              :key="index"
              clickable
              v-close-popup
              @click="navigateTo(link.to)"
            >
              <q-item-section>{{ link.label }}</q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <div class="login-section">
          <q-btn
            flat
            no-caps
            class="login-btn"
            @click="navigateTo({ name: 'auth-page' })"
          >
            <q-avatar
              icon="person"
              color="primary"
              text-color="white"
              size="md"
            />
          </q-btn>
        </div>
      </div>
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router';

  const router = useRouter();

  // Navigation links for desktop and mobile views
  const navLinks = [
    { label: 'Talk to a Developer', to: { name: 'talk-to-developer' } },
    {
      label: 'Focused Strategy Sessions',
      to: { name: 'focused-strategy-sessions' },
    },
    { label: 'Complete Website Build', to: { name: 'complete-website-build' } },
    { label: 'Pricing Details', to: { name: 'full-service-pricing-details' } },
  ];

  // Mobile-only links
  const mobileLinks = [
    { label: 'BOOK NOW', to: { path: '/book-now' } },
    ...navLinks,
  ];

  // Navigation function
  const navigateTo = (route: object) => {
    router.push(route);
  };

  const props = defineProps({
    toolbarTitle: { type: String, required: true },
  });
</script>

<style scoped lang="scss">
  @import '/src/css/app.scss';
  .custom-header {
    background-color: #001f3f;
    height: 3.25rem;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.1);
  }

  .logo-section {
    flex: 1;
    display: flex;
    align-items: center;
    padding-left: 0.1rem;
  }

  .title-logo-container {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  .desktop-logo {
    max-width: 2rem;
    border-radius: 75%;
    border: 3px solid #001f3f; /* Dark blue color */
  }

  .toolbar-title {
    font-size: x-large; /* Adjusted size for better visibility */
    font-weight: 400; /* Matches the navbar text font weight */
    color: white; /* Ensure consistency */
    margin: 0; /* Prevent extra spacing */
    letter-spacing: -1px;
  }

  .home-link {
    text-decoration: none; /* Prevent underlines */
    color: inherit; /* Ensure it doesn't inherit unwanted colors */
  }

  .home-link:hover,
  .home-link:focus,
  .home-link.active-link {
    color: inherit; /* Prevent hover or active state from changing colors */
  }

  .no-link-style {
    text-decoration: none; /* Remove text underline */
    color: inherit; /* Ensure color stays consistent */
  }

  .nav-links {
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
  }

  .nav-text {
    color: white;
    font-size: large;
    font-weight: 500;
    transition: color 0.3s ease;
    letter-spacing: -0.5px;
  }

  .nav-text:hover,
  .nav-text:focus {
    color: rgba(255, 255, 255, 0.85);
  }

  .nav-text.highlight-cta {
    font-weight: 501;
  }

  .login-section {
    flex: 1;
    display: flex;
    justify-content: flex-end;
  }

  .login-btn {
    padding-right: 0.5rem;
    font-size: 1.2rem; /* Ensure consistent size with nav-text */
    color: $textWhite;
  }

  .login-btn:hover,
  .login-btn:focus {
    color: rgba(255, 255, 255, 0.85);
  }

  .mobile-nav {
    display: none;
  }

  .mobile-only {
    display: none;
  }

  @media (max-width: 768px) {
    .desktop-only {
      display: none;
    }

    .mobile-only {
      display: inline-flex;
    }

    .mobile-nav {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }

    .toolbar-title {
      font-size: 1.3rem; /* Slightly smaller for mobile */
    }

    .nav-text {
      font-size: 1.1rem; /* Adjusted for mobile consistency */
    }
  }
</style>
