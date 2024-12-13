import { Message } from './SalesStrategyMessages';

export const ContactUs: Message = {
  dominantTagline: 'Your vision deserves clear, actionable support.', // 7 words
  influentialTagline: 'Connect with experts to bring your goals to life.', // 10 words

  supportiveStatement:
    'We understand reaching out can feel daunting, but it’s the first step toward clarity and growth. Let us guide you with solutions tailored to your needs.', // 27 words
  dominantStatement:
    'Every question you have matters. We provide clear answers, prioritize your goals, and offer actionable solutions to help you move forward confidently.', // 25 words
  influentialStatement:
    'Collaboration unlocks progress. Together, we’ll explore ideas, build trust, and align on solutions that set the foundation for success.', // 21 words
  conscientiousStatement:
    'Precise communication builds trust. We prioritize transparency and alignment to ensure dependable, effective solutions for your unique goals.', // 20 words

  supportiveSummary:
    'Let’s connect and create solutions that align with your vision. Together, we can make progress and bring clarity to your goals.', // 21 words
  influentialPrompt:
    'Taking the first step is simple, and it opens doors to success.', // 13 words

  customerInnerVoiceSupportiveInfluentialChoice:
    'How can an expert’s guidance help clarify my goals and make progress easier? What’s the first step in working together?', // 22 words
  customerInnerVoiceDominantConscientiousObjection:
    'How do I know this process will deliver reliable results? What makes expert support essential for achieving success?', // 19 words
};

export default ContactUs;
