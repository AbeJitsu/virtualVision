<template>
  <q-header
    class="custom-header glossy"
    elevated
  >
    <q-toolbar>
      <!-- Title -->
      <q-toolbar-title class="toolbar-title">
        <router-link
          to="/"
          class="home-link"
          active-class="active-link"
        >
          {{ toolbarTitle }}
        </router-link>
      </q-toolbar-title>

      <!-- Navigation Links Dropdown for Mobile -->
      <q-btn-dropdown
        flat
        no-caps
        icon="menu"
        class="nav-dropdown"
        content-class="dropdown-content"
      >
        <q-list style="max-height: 300px; overflow-y: auto">
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

      <!-- Login Dropdown -->
      <q-btn-dropdown
        flat
        split
        class="login-dropdown"
        no-caps
        @click="navigateToAuth"
      >
        <template #label>
          <div class="login-label">
            <q-icon name="account_circle" />
            <span class="login-text">Login</span>
          </div>
        </template>
        <q-list>
          <q-item
            clickable
            v-close-popup
            @click="navigateTo('profile')"
          >
            <q-item-section avatar>
              <q-avatar
                icon="person"
                color="primary"
                text-color="white"
              />
            </q-item-section>
            <q-item-section>
              <q-item-label>Profile</q-item-label>
            </q-item-section>
          </q-item>
          <q-item
            clickable
            v-close-popup
            @click="navigateTo('settings')"
          >
            <q-item-section avatar>
              <q-avatar
                icon="settings"
                color="secondary"
                text-color="white"
              />
            </q-item-section>
            <q-item-section>
              <q-item-label>Settings</q-item-label>
            </q-item-section>
          </q-item>
          <q-item
            clickable
            v-close-popup
            @click="handleLogout"
          >
            <q-item-section avatar>
              <q-avatar
                icon="logout"
                color="negative"
                text-color="white"
              />
            </q-item-section>
            <q-item-section>
              <q-item-label>Logout</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router';

  const router = useRouter();

  // Navigation Links
  const navLinks = [
    { label: 'Our Process', to: { name: 'complete-process-summary' } },
    { label: 'Talk to a Developer', to: { name: 'talk-to-developer' } },
    {
      label: 'Focused Strategy Sessions',
      to: { path: '/focused-strategy-sessions' },
    },
    { label: 'Complete Website Build', to: { name: 'complete-website-build' } },
    { label: 'Pricing Details', to: { name: 'full-service-pricing-details' } },
    { label: 'Book Now', to: { path: '/book' } },
  ];

  // Function to navigate to specific routes
  const navigateTo = (route: object) => {
    router.push(route);
  };

  // Function to navigate to auth page
  const navigateToAuth = () => {
    router.push({ name: 'auth-page' });
  };

  // Function to handle logout
  const handleLogout = () => {
    console.log('Logging out...');
  };

  // Props for toolbar title
  const props = defineProps({
    toolbarTitle: { type: String, required: true },
  });
</script>

<style scoped lang="scss">
  @import '/src/css/app.scss';

  .custom-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 4rem;
    z-index: 10;
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.1);
    opacity: 0.98;
    padding: 0.5rem 1rem;
    transition: background-color 0.3s ease-in-out;

    @media (max-width: 599px) {
      padding: 0.25rem 0.5rem;
    }
  }

  .toolbar-title {
    font-size: 1.5rem;
    font-weight: bold;
    color: #fff;
    margin: 0;
    letter-spacing: -0.75px;

    @media (max-width: 599px) {
      font-size: 1.2rem;
    }
  }

  .nav-dropdown {
    display: none;

    @media (max-width: 768px) {
      display: inline-flex;
    }
  }

  .dropdown-content {
    min-width: 150px;
  }

  .login-dropdown {
    color: #fff;
    font-size: 1rem;
  }

  .login-label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .q-list {
    max-height: 300px; /* Limit dropdown height */
    overflow-y: auto; /* Enable scrolling */
  }

  .login-text {
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: -0.25px;
  }
</style>
