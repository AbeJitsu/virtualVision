import { route } from 'quasar/wrappers';
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router';

import routes from './routes';
import { useTrackingStore } from '../stores/trackingStore'; // Import Pinia store

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  // Use history mode explicitly for cleaner URLs
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === 'history'
    ? createWebHistory
    : createWebHashHistory;

  const Router = createRouter({
    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath

    scrollBehavior(to, from, savedPosition) {
      console.log('ScrollBehavior triggered', { to, from, savedPosition });
      if (savedPosition) {
        return savedPosition;
      } else {
        const body = document.querySelector('body');
        if (body) {
          body.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }
        return { top: 0, left: 0 }; // Default position
      }
    },
    routes, // Pass in routes from routes.ts
    history: createHistory(process.env.VUE_ROUTER_BASE || '/'),
  });

  // Add global beforeEach navigation guard
  Router.beforeEach((to, from, next) => {
    const trackingStore = useTrackingStore();

    // Ensure the current route is initialized in the store
    if (to.name && !trackingStore.visitedPages.includes(to.name as string)) {
      trackingStore.addVisitedPage(to.name as string);
      console.log(
        `Added ${
          to.name ? String(to.name) : '(unknown)'
        } to visitedPages in beforeEach guard.`
      );
    }

    // Log navigation details for debugging
    console.log(
      `Before navigating from ${String(from.name)} to ${String(to.name)}`
    );

    // Proceed to the next route
    next();
  });

  // Add global afterEach navigation hook
  Router.afterEach((to, from) => {
    const trackingStore = useTrackingStore();

    // Add visited page to store
    if (to.name && !trackingStore.visitedPages.includes(to.name as string)) {
      trackingStore.addVisitedPage(to.name as string);
    }

    // Manually scroll to the top of the page for all transitions
    console.log('Manually scrolling to top');
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

    // Log navigation for debugging
    console.log(`Navigated from ${String(from.name)} to ${String(to.name)}`);
  });

  return Router;
});

// src/router/index.ts
