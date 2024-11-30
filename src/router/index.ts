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

    scrollBehavior: () => ({ left: 0, top: 0 }), // Reset scroll on route change
    routes, // Pass in routes from routes.ts
    history: createHistory(process.env.VUE_ROUTER_BASE || '/'), // Use default '/' if BASE is not set
  });

  // Add global afterEach navigation hook
  Router.afterEach((to, from) => {
    const trackingStore = useTrackingStore();

    // Add visited page to store
    if (to.name && !trackingStore.visitedPages.includes(to.name as string)) {
      trackingStore.addVisitedPage(to.name as string);
    }

    // Log navigation for debugging
    console.log(`Navigated from ${String(from.name)} to ${String(to.name)}`);
  });

  return Router;
});
