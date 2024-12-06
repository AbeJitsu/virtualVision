import { Message } from './SalesStrategyMessages';

export const DIYComparison: Message = {
  dominantTagline: 'Evaluate your path with clarity', // 5 words
  influentialTagline: 'Empower your vision by understanding key differences', // 7 words

  supportiveStatement:
    'Exploring your options should feel reassuring. We’ll help you see exactly what sets a professional build apart.',
  // Keep this concise and supportive.
  dominantStatement:
    'Choosing between a do-it-yourself approach and expert collaboration isn’t trivial. Our process focuses on results that truly matter, saving you time and frustration.',
  influentialStatement:
    // Here we integrate the table conceptually:
    // In practice, you might have to modify MessagingPage.vue to handle HTML or slot content.
    // For now, we describe the table in the message, and later we can enhance MessagingPage.vue
    // to accept slots for complex components.
    'Compare key benefits side by side and see how a professional’s touch transforms your website. Below is a clear breakdown of what you gain, ensuring informed decisions. [TABLE_GOES_HERE]',
  conscientiousStatement:
    'Every feature, every customization—tailored to your goals. While DIY tools offer templates, true scalability and efficiency come from expert guidance. Your time is valuable; invest it wisely.',

  supportiveSummary:
    'With a clear comparison, you can choose confidently. Let’s illuminate the path that leads you forward.',
  influentialPrompt:
    'Ready to see how these differences shape your outcome? Let’s dive deeper into your options.',

  customerInnerVoiceSupportiveInfluentialChoice:
    'If clarity matters, how can I explore these differences further to refine my direction?',
  customerInnerVoiceDominantConscientiousObjection:
    'If I invest hours on my own, can I match a professional’s results—or will I always lag behind?',
};

export default DIYComparison;
