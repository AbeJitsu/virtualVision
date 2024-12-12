<template>
  <q-footer class="custom-footer glossy">
    <div class="footer-links">
      <q-btn
        flat
        label="About Us"
        :to="{ name: 'about-us' }"
        class="nav-text footer-btn"
      />
      <q-btn
        flat
        icon="email"
        label="Contact Us"
        :to="{ name: 'contact-us' }"
        class="nav-text footer-btn nowrap"
      />
      <q-btn-dropdown
        flat
        label="More"
        class="nav-text footer-dropdown"
        content-class="dropdown-content"
      >
        <q-list>
          <q-item
            clickable
            v-close-popup
            @click="navigateTo({ name: 'privacy-policy' })"
          >
            <q-item-section>Privacy Policy</q-item-section>
          </q-item>
          <q-item
            clickable
            v-close-popup
            @click="navigateTo({ name: 'terms-of-service' })"
          >
            <q-item-section>Terms of Service</q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </div>
  </q-footer>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router';

  const router = useRouter();

  const navigateTo = (route: object) => {
    router.push(route);
  };
</script>

<style scoped lang="scss">
  @import '/src/css/app.scss';

  .custom-footer {
    background-color: $blueDark;
    color: $textWhite;
    text-align: center;
    box-shadow: 0px -2px 8px rgba(0, 0, 0, 0.1);
    padding: 1rem;

    .footer-links {
      display: flex;
      justify-content: space-between;
      margin-top: 0.175rem;
      align-items: center;
      width: 100%;
      padding: 0 1rem;

      .footer-btn,
      .footer-dropdown {
        font-size: small;
        white-space: nowrap;
        color: $textWhite;
        transition: color 0.3s ease-in-out;

        &:hover {
          color: rgba(255, 255, 255, 0.8);
        }
      }

      .nowrap {
        white-space: nowrap;
      }
    }

    @media (max-width: 768px) {
      .footer-links {
        justify-content: space-around;

        .footer-dropdown {
          display: inline-block;
        }
      }
    }
  }
</style>
