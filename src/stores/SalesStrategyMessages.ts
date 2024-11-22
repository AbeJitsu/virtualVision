import { LandingPage } from './messages/LandingPage'; // Import Landing Page messages
import { TalkToDeveloper } from './messages/TalkToDeveloper'; // Import Talk to Developer messages

// Define the structure for individual message sets
export interface Message {
  dominantInfluentialTagline: string;
  supportiveIntro: string;
  supportiveMain: string;
  dominantSupportiveIntro: string;
  dominantMain: string;
  influentialSupportiveIntro: string;
  influentialMain: string;
  conscientiousSupportiveIntro: string;
  conscientiousMain: string;
  supportiveWrapUpIntro: string;
  supportiveWrapUpMain: string;
  promptInfluential: string;
  promptSupportive: string;
  binaryChoiceReadySupportiveInfluential: string;
  binaryChoiceExploreSupportiveConscientious: string;
}

// Refactor: Remove the Pinia store entirely
// Export individual messages as named exports
export const Messages = {
  LandingPage,
  TalkToDeveloper,
};

export default Messages;
