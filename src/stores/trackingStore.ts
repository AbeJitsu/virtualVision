import { defineStore } from 'pinia';

// Define a type for page options
type PageOptions = {
  [key: string]: {
    left: string;
    right: string;
  };
};

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
      // Use the defined type for page options
      const pageOptions: PageOptions = {
        'landing-page': {
          left: '/talk-to-developer',
          right: '/our-process',
        },
        'talk-to-developer': {
          left: '/focused-strategy-sessions',
          right: '/why-strategy-before-building',
        },
        'focused-strategy-sessions': {
          left: '/complete-website-build',
          right: '/diy-comparison',
        },
        // Add mappings for other pages as needed
      };

      const nextPage = pageOptions[currentPage]?.[choice];

      // Ensure the next page is unvisited
      if (nextPage && !this.visitedPages.includes(nextPage)) {
        return nextPage;
      }

      // Fallback: Find the first unvisited page from all options
      for (const [page, choices] of Object.entries(pageOptions)) {
        if (!this.visitedPages.includes(choices[choice])) {
          return choices[choice];
        }
      }

      return '/'; // Default fallback to home
    },
  },
});
