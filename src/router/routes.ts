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
      },
      {
        path: 'about-us',
        name: 'about-us',
        component: () => import('pages/AboutUs.vue'),
      },
      {
        path: 'talk-to-developer',
        name: 'talk-to-developer',
        component: () => import('pages/TalkToDeveloper.vue'),
      },
      {
        path: 'focused-strategy-sessions',
        name: 'focused-strategy-sessions',
        component: () => import('pages/FocusedStrategySessions.vue'),
      },
      {
        path: 'complete-website-build',
        name: 'complete-website-build',
        component: () => import('pages/CompleteWebsiteBuild.vue'),
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
        component: () => import('pages/PrivacyPolicy.vue'),
      },
      {
        path: 'terms-of-service',
        name: 'terms-of-service',
        component: () => import('pages/TermsOfService.vue'),
      },
      {
        path: '/auth',
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
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;


// src / router / routes.ts;
