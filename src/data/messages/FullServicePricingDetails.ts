// src/data/messages/FullServicePricingDetails.ts

import { Message } from './SalesStrategyMessages';

export const FullServicePricingDetails: Message = {
  dominantTagline: 'See the Full Value and Investment Clearly', // 7 words
  influentialTagline: 'Understand the costs and benefits upfront.', // 7 words

  supportiveStatement:
    'This overview provides complete clarity on pricing for each step of the process. See how your investment delivers tangible results at every stage.', // 163 characters
  dominantStatement:
    'With detailed pricing and transparent costs, you can make informed decisions. Every dollar contributes to achieving your vision with precision and quality.', // 158 characters
  influentialStatement:
    'Knowing the costs upfront gives you control and confidence. Learn how each investment leads to a polished and tailored result for your goals.', // 155 characters
  conscientiousStatement:
    'Our pricing is straightforward, ensuring no surprises. See how we allocate resources effectively to deliver value at every stage of your project.', // 143 characters

  supportiveSummary:
    'See the investment needed to create your vision. Our pricing is clear, empowering you to make confident decisions.', // 20 words
  influentialPrompt:
    'Ready to understand the investment required for your success?', // 10 words

  customerInnerVoiceSupportiveInfluentialChoice:
    'What makes this pricing structure transparent and fair? How does each step’s cost reflect its value to my project?', // 20 words
  customerInnerVoiceDominantConscientiousObjection:
    'Can I start small before committing to the full cost? How flexible is this structure for my specific needs?', // 20 words
};

export default FullServicePricingDetails;
