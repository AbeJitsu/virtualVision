// src/data/messages/ContactUs.ts

// Validation Guidelines:
// 1. Tagline:
//    - Min: 8 words
//    - Max: 10 words
//    - **Must be a single statement that starts with a dominant tone and ends with an influential tone**
// 2. Tone-Driven Messaging (Supportive/Dominant/Influential/Conscientious Intros and Mains):
//    - Min: 13 words
//    - Max: 15 words
// 3. Supportive Wrap-Up Intro:
//    - Min: 7 words
//    - Max: 9 words
// 4. Supportive Wrap-Up Main:
//    - Min: 12 words
//    - Max: 14 words
// 5. Prompts:
//    - Prompt Influential:
//       - Min: 4 words
//       - Max: 5 words
//    - Prompt Supportive:
//       - Min: 5 words
//       - Max: 6 words
// 6. Binary Choice Buttons:
//    - Min: 7 words
//    - Max: 8 words
//    - **Must be written in the user's inner voice**
//    - Left Button: Supportive and Influential (encouraging action)
//    - Right Button: Dominant and Conscientious (providing clarity or details)

import { Message } from '../../stores/SalesStrategyMessages';

export const ContactUs: Message = {
  dominantInfluentialTagline:
    'Connect With Us: Personalized Support at Your Fingertips',

  supportiveIntro:
    'We understand how important it is to feel supported and heard when making decisions.',
  supportiveMain:
    'Our team is here to guide you, offering solutions tailored to your unique needs and goals.',

  dominantSupportiveIntro:
    'Reaching out is the first step to finding the right solution.',
  dominantMain:
    'Our contact process ensures clear communication and actionable outcomes to meet your expectations.',

  influentialSupportiveIntro:
    'Your voice matters, and we’re here to listen and act.',
  influentialMain:
    'Together, we’ll build trust and find the right path to meet your needs with confidence.',

  conscientiousSupportiveIntro:
    'Every interaction is designed to ensure clarity and mutual understanding.',
  conscientiousMain:
    'We value precision and respect, delivering a seamless and transparent communication experience.',

  supportiveWrapUpIntro: 'Let’s connect and start the conversation.',
  supportiveWrapUpMain:
    'We’re here to provide clarity, support, and actionable insights to help you move forward.',

  promptInfluential: 'Ready to take the next step?',
  promptSupportive: 'Let’s find the right solution together.',

  binaryChoiceReadySupportiveInfluential: 'Sounds good. How can I get started?',
  binaryChoiceExploreSupportiveConscientious:
    'Can you explain the process further?',
};
