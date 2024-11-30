import { defineStore } from 'pinia';

export const useTrackingStore = defineStore('trackingStore', {
  state: () => ({
    visitedPages: [] as string[], // Tracks the order of visited pages
    choiceHistory: {} as Record<string, 'left' | 'right'>, // Tracks choices per page
  }),

  actions: {
    // Add the current page to the visited list
    addVisitedPage(pageName: string) {
      if (!this.visitedPages.includes(pageName)) {
        this.visitedPages.push(pageName);
      }
    },

    // Record the user's choice for a page
    recordChoice(pageName: string, choice: 'left' | 'right') {
      console.log('Recording Choice:', { pageName, choice }); // Debug log
      this.choiceHistory[pageName] = choice;
      console.log('Updated Choice History:', this.choiceHistory); // Debug log
    },

    // Get the next page dynamically based on history and choice
    getNextPage(currentPage: string, choice: 'left' | 'right'): string {
      if (choice === 'left') {
        return '/focused-strategy-sessions'; // Example: Path for a positive choice
      }
      if (choice === 'right') {
        return '/objection-level-2'; // Example: Path for an objection
      }
      return '/'; // Default to home if no choice is made
    },
  },
});
