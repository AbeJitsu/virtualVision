<template>
  <q-header
    class="custom-header glossy"
    elevated
  >
    <q-toolbar>
      <!-- Mobile Navigation Section -->
      <div class="mobile-nav">
        <!-- Logo -->
        <router-link
          to="/"
          class="home-link no-link-style"
          active-class="active-link"
        >
          <img
            src="/icons/Logo_square_white_BG.png"
            alt="Vision2Virtual Logo"
            class="mobile-logo"
          />
        </router-link>

        <!-- OUR PROCESS Button -->
        <q-btn
          flat
          label="OUR PROCESS"
          :to="{ name: 'our-process' }"

          class="nav-text"

        />

        <!-- Dropdown Menu -->
        <q-btn-dropdown
          flat
          no-caps
          icon="menu"
          class="nav-dropdown"
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

        <!-- Login Section -->
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

      <!-- Desktop Navigation Section -->
      <div class="desktop-nav">
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
              <!-- <span class="toolbar-title desktop-only">{{ toolbarTitle }}</span> -->
              <span class="toolbar-title">{{ toolbarTitle }}</span>
            </div>
          </router-link>
        </div>

        <!-- <div class="nav-links desktop-only"> -->
        <div class="nav-links">

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

        <!-- <div class="login-section desktop-only"> -->
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
    background-color: $blueDark;
    height: 3.25rem;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.1);
  }

  .desktop-nav {
    display: flex; /* Visible by default */
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .mobile-nav {
    display: none; /* Hidden by default */
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 1rem;
  }

  .desktop-logo {
    max-width: 1.95rem;
    height: auto;
    border-radius: 50%;
    border: 3px solid $blueDark;
  }

  .mobile-logo {
    max-width: 1.8rem;
    height: auto;
    border-radius: 50%;
  }

  .title-logo-container {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .toolbar-title {
    font-size: x-large;
    font-weight: 700;
    color: white;
    margin: 0;
    text-decoration: none; /* No underline */
  }

  .home-link {
    text-decoration: none;
    color: inherit;
  }

  .home-link:hover,
  .home-link:focus,
  .home-link:active {
    text-decoration: none; /* Prevent underline in all states */
  }

  .nav-text {
    font-size: 1rem;
    white-space: nowrap;
  }

  .login-btn {
    font-size: 1.2rem;
    padding: 0.5rem;
  }

  @media (max-width: 768px) {
    .desktop-nav {
      display: none; /* Hide desktop navigation */
    }

    .mobile-nav {
      display: flex; /* Show mobile navigation */
    }
  }

  @media (min-width: 769px) {
    .mobile-nav {
      display: none; /* Hide mobile navigation */
    }

    .desktop-nav {
      display: flex; /* Show desktop navigation */
    }
  }


</style>
