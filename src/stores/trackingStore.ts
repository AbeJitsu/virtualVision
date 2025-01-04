// src/stores/trackingStore.ts
import { defineStore } from 'pinia';

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
  'complete-process-summary',
  'about-us',
];

const pageMetadata: Record<string, string> = {
  'landing-page': 'Let’s Explore What’s Possible',
  'our-process': 'See How We Work Together',
  'quick-start-phase': 'Let’s Get Started Together',
  'strategic-design-path': 'Collaborate on Your Vision',
  'premium-vision-build': 'Turn Your Ideas into Reality',
  'full-service-pricing-details': 'Clear Details for Your Plan',
  'book-now': 'Take the First Step',
  'diy-comparison': 'Explore the Best Options', // Updated
  'complete-process-summary': 'Understand the Full Journey',
  'about-us': 'Get to Know Us',
};

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
    },

    getNextPage(currentPage: string, choice: Choice): { route: string; label: string } | undefined {
      const sequence = choice === 'left' ? exploratorySequence : salesFunnelSequence;
      for (const page of sequence) {
        if (!this.visitedPages.includes(page)) {
          return { route: `/${page}`, label: pageMetadata[page] || 'next step' };
        }
      }
      return { route: '/book-now', label: 'book now' }; // Default fallback
    },

    getPageLabel(pageName: string): string {
      return pageMetadata[pageName] || 'next step';
    },
  },
});

// src/stores/trackingStore.ts
