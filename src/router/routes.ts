import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'landing-page',
        component: () => import('pages/LandingPage.vue'),
        alias: ['/landing-page', '/'], // Alias for the root route
      },
      {
        path: 'about-us',
        name: 'about-us',
        component: () => import('pages/footer/AboutUs.vue'),
      },
      {
        path: 'quick-start-plan',
        name: 'quick-start-plan',
        component: () => import('pages/TalkToDeveloper.vue'),
      },
      {
        path: 'strategic-design-path',
        name: 'strategic-design-path',
        component: () => import('pages/StrategicDesignPath.vue'),
      },
      {
        path: 'premium-vision-build',
        name: 'premium-vision-build',
        component: () => import('pages/PremiumVisionBuild.vue'),
      },
      {
        path: 'book-now',
        name: 'book-now',
        component: () => import('pages/BookNow.vue'),
      },
      {
        path: 'diy-comparison',
        name: 'diy-comparison',
        component: () => import('pages/DIYComparison.vue'),
      },
      {
        path: 'our-process',
        name: 'our-process',
        component: () => import('pages/OurProcess.vue'),
      },
      {
        path: 'privacy-policy',
        name: 'privacy-policy',
        component: () => import('pages/footer/PrivacyPolicy.vue'),
      },
      {
        path: 'terms-of-service',
        name: 'terms-of-service',
        component: () => import('pages/footer/TermsOfService.vue'),
      },
      {
        path: 'auth',
        name: 'auth-page',
        component: () => import('pages/AuthPage.vue'),
      },
      {
        path: 'contact',
        name: 'contact-us',
        component: () => import('pages/ContactUs.vue'),
      },
      {
        path: 'complete-process-summary',
        name: 'complete-process-summary',
        component: () => import('pages/CompleteProcessSummary.vue'),
      },
      {
        path: 'full-service-pricing-details',
        name: 'full-service-pricing-details',
        component: () => import('pages/FullServicePricingDetails.vue'),
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    name: 'error-not-found',
    component: () => import('pages/footer/ErrorNotFound.vue'),
  },
];

export default routes;


// src / router / routes.ts;
