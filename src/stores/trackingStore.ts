// src/stores/trackingStore.ts
import { defineStore } from 'pinia';
import { salesFunnelSequence, exploratorySequence } from '../data/PageConfig';

type Choice = 'left' | 'right';

export const useTrackingStore = defineStore('trackingStore', {
  state: () => ({
    visitedPages: [] as string[],
    choiceHistory: {} as Record<string, Choice>,
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
      // Determine which sequence to use based on the user's choice
      const sequence =
        choice === 'left' ? salesFunnelSequence : exploratorySequence;

      // Find the current page's index in the chosen sequence
      const currentIndex = sequence.indexOf(currentPage);
      if (currentIndex === -1) {
        // If the current page isn’t found, default to the starting point
        return sequence.length > 0 ? `/${sequence[0]}` : '/book-now';
      }

      // Move forward in the sequence to the next pages until we find one not visited
      for (let i = currentIndex + 1; i < sequence.length; i++) {
        const nextCandidate = sequence[i];
        if (!this.visitedPages.includes(nextCandidate)) {
          return `/${nextCandidate}`; // Assuming routes match page names
        }
      }

      // If all subsequent pages have been visited or there is no next page, go to book-now
      return '/book-now';
    },
  },
});
