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
            class="desktop-logo"
          />
        </router-link>

        <!-- OUR PROCESS Button -->
        <q-btn
          flat
          label="OUR PROCESS"
          :to="{ name: 'our-process' }"
          class="mobile-only nav-text"
        />

        <!-- Dropdown Menu -->
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
              <span class="toolbar-title desktop-only">{{ toolbarTitle }}</span>
            </div>
          </router-link>
        </div>

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

  .mobile-nav {
    display: none;
  }

  .desktop-nav {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
  }

  .title-logo-container {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .desktop-logo {
    max-width: 1.95rem; /* Size of the logo */
    height: auto; /* Maintain aspect ratio */
    border-radius: 50%; /* Rounded corners */
    border: 3px solid $blueDark; /* Border for styling */
  }

  .home-link {
    text-decoration: none; /* Removes underline */
    color: inherit; /* Ensures it inherits the desired text color */
  }

  .home-link:hover,
  .home-link:focus,
  .home-link:active {
    text-decoration: none; /* Prevents underline on hover, focus, or active states */
  }

  .toolbar-title {
    font-size: x-large;
    font-weight: 700;
    color: white;
    margin: 0;
    letter-spacing: -0.5px;
    padding-top: 0.2rem;
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

  .login-section {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0;
  }

  .login-btn {
    font-size: 1.2rem;
    color: $textWhite;
  }

  .login-btn:hover,
  .login-btn:focus {
    color: rgba(255, 255, 255, 0.85);
  }

  @media (max-width: 768px) {
    .desktop-nav {
      display: none; /* Hide desktop navigation on mobile */
    }

    .mobile-nav {
      display: flex; /* Show mobile navigation */
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding-left: 0.7rem;
    }

    .desktop-logo {
      max-width: 1.95rem; /* Adjust logo size for mobile */
      height: auto;
    }

    .nav-text {
      font-size: 1rem;
      white-space: nowrap;
    }

    .login-btn {
      font-size: 1.1rem;
    }
  }
</style>
