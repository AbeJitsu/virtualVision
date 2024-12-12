<template>
  <q-footer class="custom-footer glossy">
    <div class="footer-links">
      <q-btn
        flat
        label="Privacy Policy"
        :to="{ name: 'privacy-policy' }"
        class="nav-text footer-btn"
      />
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
        class="nav-text footer-btn"
      />
      <q-btn
        flat
        label="Terms of Service"
        :to="{ name: 'terms-of-service' }"
        class="nav-text footer-btn"
      />
    </div>
  </q-footer>
</template>

<style scoped lang="scss">
  @import '/src/css/app.scss';

  .custom-footer {
    background-color: $blueDark;
    color: $textWhite;
    text-align: center;
    box-shadow: 0px -2px 8px rgba(0, 0, 0, 0.1);

    .footer-links {
      display: flex;
      justify-content: space-between;
      margin-top: 0.175rem;
      align-items: center;
      width: 100%;

      .footer-btn {
        font-size: small;
        white-space: nowrap;
        color: $textWhite;
        transition: color 0.3s ease-in-out;

        &:hover {
          color: rgba(255, 255, 255, 0.8); /* Matches header hover color */
        }
      }
    }
  }
</style>
