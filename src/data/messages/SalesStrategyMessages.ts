import { LandingPage } from './LandingPage'; // Import Landing Page messages
import { TalkToDeveloper } from './TalkToDeveloper'; // Import Talk to Developer messages

// Define the structure for individual message sets
export interface Message {
  dominantTagline: string;
  influentialTagline: string;
  supportiveStatement: string;
  dominantStatement: string;
  influentialStatement: string;
  conscientiousStatement: string;
  supportiveWrapUp: string;
  influentialPrompt: string; // Changed from influential wrap-up to influential prompt
  customerChoiceSupportiveInfluential: string; // One sentence in the customer's voice
  customerObjectionDominantConscientious: string; // One sentence combining dominant and conscientious tones
}

// Refactor: Remove the Pinia store entirely
// Export individual messages as named exports
export const Messages = {
  LandingPage,
  TalkToDeveloper,
};

export default Messages;
