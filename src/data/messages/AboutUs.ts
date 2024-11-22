// src/data/messages/AboutUs.ts
import { Message } from './AboutUs';

export const AboutUs: Message = {
  // Validation Guidelines:
  // Tagline: 52 chars ±10% (47–57 chars)
  // Intro/Main: 112 chars ±10% (106–123 chars)
  // Supportive Wrap-Up Intro: 50 chars ±10% (45–55 chars)
  // Supportive Wrap-Up Main: 118 chars ±10% (106–130 chars)
  // Prompts: 43 chars ±10% (39–47 chars)
  // Binary Choice Buttons: 50 chars ±10% (45–55 chars)

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
    'Can you explain more before we take the next step?', // 50 chars (within limits)
};
