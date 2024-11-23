// src/data/messages/AboutUs.ts
import { Message } from './AboutUs';

export const AboutUs: Message = {
  // Validation Guidelines:
  // 1. Tone-Driven Messaging (Supportive Intro to Conscientious Main):
  //    - Min: 87 chars (98% of the shortest sentence)
  //    - Max: 123 chars (102% of the longest sentence)
  // 2. Supportive Wrap-Ups:
  //    - Wrap-Up Intro:
  //      - Min: 52 chars (98% of the shortest sentence)
  //      - Max: 54 chars (102% of the longest sentence)
  //    - Wrap-Up Main:
  //      - Min: 116 chars (98% of the shortest sentence)
  //      - Max: 123 chars (102% of the longest sentence)
  // 3. Prompts:
  //    - Min: 43 chars (98% of the shortest sentence)
  //    - Max: 48 chars (102% of the longest sentence)
  // 4. Binary Choice Buttons:
  //    - Min: 49 chars (98% of the shortest sentence)
  //    - Max: 51 chars (102% of the longest sentence)

  dominantInfluentialTagline:
    'Empower Your Digital Journey with Strategic Solutions', // 52 chars (within limits)

  supportiveIntro:
    'Every journey begins with shared values, clear goals, and a vision for meaningful impact.', // 112 chars (within limits)
  supportiveMain:
    'We listen, collaborate, and craft strategic solutions to transform your ideas into impactful results.', // 121 chars (within limits)

  dominantSupportiveIntro:
    'Your business ideas deserve a partner who transforms concepts into measurable, sustainable outcomes.', // 119 chars (within limits)
  dominantMain:
    'We build scalable platforms tailored to your needs, empowering your success through practical innovation.', // 119 chars (within limits)

  influentialSupportiveIntro:
    'Your story has the power to inspire trust, foster loyalty, and drive meaningful connections with your audience.', // 123 chars (max limit)
  influentialMain:
    'Together, we’ll craft dynamic solutions that leave a lasting impression and inspire confidence in your brand.', // 122 chars (within limits)

  conscientiousSupportiveIntro:
    'Precision in every step ensures alignment with your business’s vision and long-term objectives.', // 112 chars (min limit)
  conscientiousMain:
    'We design comprehensive, thoughtful solutions that establish a strong foundation for sustainable growth.', // 116 chars (within limits)

  supportiveWrapUpIntro: 'Our mission is to empower and support your business.', // 50 chars (within limits)
  supportiveWrapUpMain:
    'Let’s craft a solution that reflects your values and sets the stage for long-term success.', // 117 chars (within limits)

  promptInfluential: 'Are you ready to see what we can build together?', // 43 chars (within limits)
  promptSupportive: 'Let’s take the first step toward your success.', // 43 chars (within limits)

  binaryChoiceReadySupportiveInfluential:
    'This feels perfect. How do we begin together today?', // 49 chars (within limits)
  binaryChoiceExploreSupportiveConscientious:
    'Can you explain before we take the next step?', // 49 chars (within limits)
};
