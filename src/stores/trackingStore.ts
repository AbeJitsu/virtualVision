// src/stores/trackingStore.ts
import { defineStore } from 'pinia';
import { salesFunnelSequence, exploratorySequence } from '../data/PageConfig';

type Choice = 'left' | 'right';

export const useTrackingStore = defineStore('trackingStore', {
  state: () => ({
    visitedPages: [] as string[],
    choiceHistory: {} as Record<string, Choice>, // Keeps track of choices made on each page
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
      // Handle Left Button (Sales Funnel Progression)
      if (choice === 'left') {
        for (const page of salesFunnelSequence) {
          if (!this.visitedPages.includes(page)) {
            return `/${page}`;
          }
        }
        // If all sales funnel pages are visited, fallback to book-now
        return '/book-now';
      }

      // Handle Right Button (Exploratory Sequence Progression)
      if (choice === 'right') {
        for (const page of exploratorySequence) {
          if (!this.visitedPages.includes(page)) {
            return `/${page}`;
          }
        }

        // If all exploratory pages are visited, transition into the sales funnel
        for (const page of salesFunnelSequence) {
          if (!this.visitedPages.includes(page)) {
            return `/${page}`;
          }
        }
        // If all pages in both sequences are visited, fallback to book-now
        return '/book-now';
      }

      // Fallback in case of unexpected behavior
      return '/book-now';
    },
  },
});

// src/stores/trackingStore.ts
