// src/data/messages/FullServicePricingDetails.ts

import { Message } from './SalesStrategyMessages';

export const FullServicePricingDetails: Message = {
  dominantTagline: 'See the Full Value and Investment Clearly', // 7 words
  influentialTagline: 'Understand the costs and benefits upfront.', // 7 words

  supportiveStatement:
    'Our services grow with your vision, offering clarity, collaboration, and results. Each phase builds on the last, but every step remains independent and tailored to your goals.', // 29 words
  dominantStatement:
    'Your investment powers expert development and tailored solutions. Sessions are flexible, scheduled at your convenience, and there’s no obligation to proceed to the next phase.', // 26 words
  influentialStatement:
    'Begin with a $49 Talk to a Developer session to refine your vision, expand with four strategy sessions for $449, and build a high-performance custom site for $4,499, all at your pace.', // 35 words
  conscientiousStatement:
    'This process combines 21 hours of live collaboration and 42 flexible coding hours. Sessions don’t expire, giving you the freedom to prioritize and build your platform on your terms.', // 26 words

  supportiveSummary:
    'It all starts with a single session, with no pressure to continue. Each step is optional, empowering you to build at your own pace.', // 20 words
  influentialPrompt:
    'Take the first step toward a website that reflects your vision. Book your initial session today to begin.', // 16 words

  customerInnerVoiceSupportiveInfluentialChoice:
    'I understand I can start with my first session to explore possibilities without obligation. How do I check availability to book now and move forward confidently?', // 27 words
  customerInnerVoiceDominantConscientiousObjection:
    'Is the process flexible enough to adapt if my priorities shift? Can I adjust as needed without affecting the final outcome or results?', // 25 words
};

export default FullServicePricingDetails;
