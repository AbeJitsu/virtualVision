import { defineStore } from 'pinia';

interface Message {
  supportive: string;
  dominant: string;
  influential: string;
  conscientious: string;
}

interface Messages {
  [key: string]: Message; // Allows dynamic indexing based on levels
}

export const useSalesStrategyMessages = defineStore('salesStrategyMessages', {
  state: () => ({
    messages: {
      level1: {
        supportive:
          'We believe in your vision, inspiring you to reach new heights.',
        dominant:
          'Let’s take the next step together and bring your ideas to life.',
        influential:
          'Your audience will be captivated by what you create together.',
        conscientious:
          'Every detail is carefully crafted, ensuring excellence in every step.',
      },
      // Add more levels as needed...
    } as Messages,
    currentLevel: 1, // Track the current level
  }),
  actions: {
    setMessages(newMessages: Messages) {
      this.messages = newMessages; // Accepts an object with messages for each level
    },
    setCurrentLevel(level: number) {
      this.currentLevel = level; // Updates the current level
    },
  },
  getters: {
    getCurrentMessages: (state): Message => {
      return state.messages[`level${state.currentLevel}`]; // Returns the current level messages correctly
    },
  },
});