<template>
  <q-header
    class="custom-header glossy"
    elevated
  >
    <q-toolbar>
      <!-- <q-btn
        flat
        dense
        round
        icon="menu"
        aria-label="Menu"
        class="menu-button"
        @click="toggleLeftDrawer"
      /> -->

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

      <!-- Navigation Links -->
      <div class="nav-links">
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
          label="Book Now"
          :to="{ path: '/book' }"
          class="nav-text"
        />
      </div>

      <!-- Dropdown with Login -->
      <q-btn-dropdown
        flat
        split
        class="login-dropdown"
        no-caps
        @click="navigateToAuth"
      >
        <!-- Custom Label with Spacing -->
        <template #label>
          <div class="login-label">
            <q-icon name="account_circle" />
            <span class="login-text">Login</span>
            <span class="icon-wrapper">
            </span>
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
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();

  // Function to handle navigation
  function navigateTo(page: string) {
    router.push({ name: page });
  }

  // Function to handle navigation to auth
  function navigateToAuth() {
    router.push({ name: 'auth-page' });
  }

  // Function to handle logout
  function handleLogout() {
    console.log('Logging out...');
    // Add logout logic here
  }

  const props = defineProps({
    toolbarTitle: {
      type: String,
      required: true,
    },
    visionPlanningLabel: {
      type: String,
      default: 'Talk to a Developer',
    },
    fullVisionLabel: {
      type: String,
      default: 'Focused Strategy Sessions',
    },
  });

  const emit = defineEmits(['toggleLeftDrawer']);

  // Function to toggle the left drawer menu
  function toggleLeftDrawer() {
    emit('toggleLeftDrawer');
  }
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
    transition: background-color 0.3s ease-in-out;
    padding: 1rem 1rem;
    white-space: nowrap;
  }

  .menu-button {
    margin-right: 1rem;

    @media (min-width: 768px) {
      margin-right: 2rem;
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
    padding: 0;
    margin: 0;
  }

  .nav-links {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    flex: 1;
    padding: 0;
  }

  .nav-text {
    color: $textWhite;
    font-size: 1.1em;
    font-weight: 600;
  }

  .login-dropdown {
    color: $textWhite;
    font-weight: 600;
    font-size: 11.5em;
  }

  .login-dropdown .login-label {
  display: flex;
  align-items: center;
  gap: 0.75rem; /* Adjust the gap as needed */
}

.login-dropdown .login-text {
  font-size: 1.1rem; /* Adjust the font size if necessary */
  font-weight: 500;
}

.login-dropdown .icon-wrapper {
  display: flex;
  align-items: center;
}
</style>


<!-- src/layouts/NavBar.vue -->
