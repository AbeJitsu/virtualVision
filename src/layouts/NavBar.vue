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
          :class="{ 'active-link': route.name === 'our-process' }"
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
              :class="{ 'active-link': route.path === link.to.path }"
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
              <span class="toolbar-title">{{ toolbarTitle }}</span>
            </div>
          </router-link>
        </div>

        <!-- Grouped Navigation Section -->
        <div class="nav-group">
          <q-btn
            flat
            label="OUR PROCESS"
            :to="{ name: 'our-process' }"
            class="nav-text"
            :class="{ 'active-link': route.name === 'our-process' }"
          />
          <q-btn
            flat
            label="BOOK NOW"
            :to="{ path: '/book-now' }"
            class="nav-text highlight-cta"
            :class="{ 'active-link': route.path === '/book-now' }"
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
                :class="{ 'active-link': route.path === link.to.path }"
              >
                <q-item-section>{{ link.label }}</q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>

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
  import { useRouter, useRoute } from 'vue-router';

  const router = useRouter();
  const route = useRoute(); // Access the current route

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
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .mobile-nav {
    display: none;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 1rem;
  }

  .nav-group {
    display: flex;
    align-items: center;
    gap: 0rem;
    margin-right: 9.75rem;
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
    text-decoration: none;
    margin-top: 0.175rem;
  }

  .home-link {
    text-decoration: none;
    color: inherit;
  }

  .home-link:hover,
  .home-link:focus,
  .home-link:active {
    text-decoration: none;
  }

  .nav-text {
    font-size: 1rem;
    white-space: nowrap;
    margin-top: 0.175rem;
    position: relative;
  }

  .login-btn {
    font-size: 1.2rem;
    padding: 0.5rem;
    margin-top: 0.175rem;
  }

  .active-link {
    font-weight: bold;
    color: $yellowMid;
    text-decoration: none;
    background-color: rgba($grayVeryLight, 0.1); /* Balanced opacity */
    padding: 0.25rem 1.5rem 0rem; /* Adjusted top, sides, bottom */
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    .desktop-nav {
      display: none;
    }

    .mobile-nav {
      display: flex;
    }
  }

  @media (min-width: 769px) {
    .mobile-nav {
      display: none;
    }

    .desktop-nav {
      display: flex;
    }
  }
</style>
