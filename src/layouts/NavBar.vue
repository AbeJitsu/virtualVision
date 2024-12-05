<template>
  <q-header
    class="custom-header glossy"
    elevated
  >
    <q-toolbar>
      <!-- Title (Vision2Virtual links to Landing Page) -->
      <q-toolbar-title class="toolbar-title">
        <router-link
          to="/"
          class="home-link"
          active-class="active-link"
        >
          {{ toolbarTitle }}
        </router-link>
      </q-toolbar-title>

      <!-- Desktop Navigation Links -->
      <div class="nav-links desktop-only">
        <q-btn
          flat
          label="Our Process"
          :to="{ name: 'complete-process-summary' }"
          class="nav-text"
        />
        <q-btn
          flat
          :label="visionPlanningLabel"
          :to="{ name: 'talk-to-developer' }"
          class="nav-text"
        />
        <q-btn
          flat
          :label="fullVisionLabel"
          to="/focused-strategy-sessions"
          class="nav-text"
        />
        <q-btn
          flat
          label="Complete Website Build"
          :to="{ name: 'complete-website-build' }"
          class="nav-text"
        />
        <q-btn
          flat
          label="Pricing Details"
          :to="{ name: 'full-service-pricing-details' }"
          class="nav-text"
        />
        <q-btn
          flat
          label="Book Now"
          :to="{ path: '/book' }"
          class="nav-text"
        />
      </div>

      <!-- Mobile "Book Now" Button -->
      <q-btn
        flat
        label="Book Now"
        :to="{ path: '/book' }"
        class="mobile-only nav-text"
      />

      <!-- Mobile Navigation Dropdown -->
      <q-btn-dropdown
        flat
        no-caps
        icon="menu"
        class="nav-dropdown mobile-only"
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

      <!-- Dropdown with Login -->
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
            <span class="login-text desktop-only">Login</span>
          </div>
        </template>
        <q-list>
          <q-item
            clickable
            v-close-popup
            @click="navigateTo({ name: 'profile' })"
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
            @click="navigateTo({ name: 'settings' })"
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
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();

  // List of navigation links
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
    // Add logout logic here
  };

  const props = defineProps({
    toolbarTitle: { type: String, required: true },
    visionPlanningLabel: { type: String, default: 'Talk to a Developer' },
    fullVisionLabel: { type: String, default: 'Focused Strategy Sessions' },
  });
</script>

<style scoped lang="scss">
  @import '/src/css/app.scss';

  .q-toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    letter-spacing: -0.5px;

    @media (max-width: 768px) {
      letter-spacing: -1px;
      margin-left: -5px;
    }
  }

  .custom-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 4rem;
    z-index: 10;
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.1);
    opacity: 0.98;
    transition: background-color 0.3s ease-in-out;
    white-space: nowrap;
  }

  .menu-button {
    margin-right: 2rem;

    @media (min-width: 768px) {
      margin-right: 1rem;
    }
  }

  .toolbar-title {
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;
    flex: none;
    font-size: 1.75rem;
    font-weight: 600;
    color: $textWhite;
    margin-left: 2px;
    letter-spacing: -0.75px;

    @media (max-width: 599px) {
      font-size: 1.25rem;
      letter-spacing: -0.35px;
      margin-right: -15px;
    }
  }

  .nav-links {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    flex: 1;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .nav-text {
    color: $textWhite;
    font-size: 1.1em;
    font-weight: 600;
    transition: color 0.3s ease;

    &:hover {
      color: mix($textWhite, white, 20%);
    }
  }

  .login-dropdown {
    color: $textWhite;
    font-weight: 600;
    font-size: 1rem;
    margin-left: -10px;

    @media (max-width: 768px) {
      margin-left: -15px; /* Pushes the dropdown to the left */
    }

    .login-label {
      display: flex;
      align-items: center;
      gap: 0.75rem;

      @media (max-width: 768px) {
        .login-text {
          display: none;
        }
      }

      .login-text {
        font-size: 1.1rem;
        font-weight: 500;
      }
    }

    .q-icon {
      margin-right: -9px;
    }
  }

  .q-icon {
    margin-right: -10px;
  }

  .home-link {
    color: $textWhite;
    text-decoration: none;
    margin-left: 5px;

    &.active-link {
      border-bottom: 2px solid $primary; /* Highlight active link */
    }
  }

  .dropdown-content {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    min-width: 200px;
    padding: 1rem;
    position: absolute;
    top: 100%;
    right: 0;
    transition: opacity 0.3s ease, transform 0.3s ease;
    opacity: 0;
    transform: translateY(-10px);

    &.q-btn-dropdown__content--visible {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .q-item {
    transition: background-color 0.2s ease;

    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
  }

  .q-btn-dropdown {
    @media (max-width: 768px) {
      margin-right: -20px;
    }
  }

  .mobile-only {
    display: none;

    @media (max-width: 768px) {
      display: inline-flex;
      margin-right: -10px;
    }
  }

  .desktop-only {
    @media (max-width: 768px) {
      display: none;
    }
  }

  /* Focus States for Accessibility */
  .q-btn:focus, .q-item:focus {
    outline: 2px solid $primary;
  }
</style>
