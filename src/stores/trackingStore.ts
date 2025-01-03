// src/stores/trackingStore.ts
import { defineStore } from 'pinia';

import { useRoute } from 'vue-router';


export const salesFunnelSequence = [
  'landing-page',
  'our-process',
  'quick-start-phase',
  'strategic-design-path',
  'premium-vision-build',
  'full-service-pricing-details',
  'book-now',
];

export const exploratorySequence = [
  'diy-comparison',
  'our-process',
  'about-us',
  'complete-process-summary',
  // Add more detail-oriented pages here if needed
];


type Choice = 'left' | 'right';

export const useTrackingStore = defineStore('trackingStore', {
  state: () => ({
    visitedPages: [] as string[],
    choiceHistory: {} as Record<string, Choice>, // Tracks choices made on each page
  }),

  actions: {
    addVisitedPage(pageName: string) {
      if (!this.visitedPages.includes(pageName)) {
        this.visitedPages.push(pageName);
      }
    },

    recordChoice(pageName: string, choice: Choice) {
      this.choiceHistory[pageName] = choice;
      console.log('Recording Choice:', { pageName, choice });
      console.log('Updated Choice History:', this.choiceHistory);
    },

    getNextPage(currentPage: string, choice: Choice): string | undefined {
      console.log('Current State:', {
        visitedPages: this.visitedPages,
        currentPage,
        choice,
      });

      // Handle Left Button (Sales Funnel Progression)
      if (choice === 'left') {
        for (const page of salesFunnelSequence) {
          if (!this.visitedPages.includes(page)) {
            return `/${page}`;
          }
        }
        return '/book-now'; // Default fallback
      }

      // Handle Right Button (Exploratory Sequence Progression)
      if (choice === 'right') {
        for (const page of exploratorySequence) {
          if (!this.visitedPages.includes(page)) {
            return `/${page}`;
          }
        }
        // If all exploratory pages are visited, transition to sales funnel
        for (const page of salesFunnelSequence) {
          if (!this.visitedPages.includes(page)) {
            return `/${page}`;
          }
        }
        return '/book-now'; // Default fallback
      }

      console.warn('Fallback triggered for unexpected behavior.');
      return '/book-now'; // Fallback
    },

    initializeFromRoute() {
      const route = useRoute();
      const currentPage = route.name as string;

      console.log('initializeFromRoute called for page:', currentPage);

      if (currentPage && !this.visitedPages.includes(currentPage)) {
        this.addVisitedPage(currentPage);
        console.log(
          `Added ${currentPage} to visitedPages in initializeFromRoute.`
        );
      }
    },
  },
});

// src/stores/trackingStore.ts
