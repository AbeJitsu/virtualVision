// src/data/messages/ContactUs.ts

// Validation Guidelines:
// 1. Tagline:
//    - Min: 8 words
//    - Max: 10 words
//    - **Must be a single statement that starts with a dominant tone and ends with an influential tone**
// 2. Tone-Driven Messaging (Supportive/Dominant/Influential/Conscientious Intros and Mains):
//    - Min: 15 words
//    - Max: 18 words
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

import { Message } from './SalesStrategyMessages';

export const ContactUs: Message = {
  dominantInfluentialTagline:
    'Get expert support to address your unique needs confidently.', // 9 words

  supportiveIntro:
    'We understand that reaching out can feel overwhelming, but it’s the first step toward clarity and growth.', // 17 words
  supportiveMain:
    'Our team listens, understands, and guides you to make informed and confident decisions.', // 15 words

  dominantSupportiveIntro:
    'Taking the first step ensures clarity, confidence, and progress while paving the way for actionable success.', // 16 words
  dominantMain:
    'We answer every question thoroughly, ensuring your goals are prioritized and actionable solutions are provided.', // 17 words

  influentialSupportiveIntro:
    'Your thoughts deserve attentive, respectful, and collaborative discussion to inspire progress.', // 14 words
  influentialMain:
    'Together, we’ll explore solutions that inspire confidence, build trust, and ensure the success of your goals.', // 17 words

  conscientiousSupportiveIntro:
    'Transparent and precise communication builds trust and ensures alignment to achieve shared goals and success.', // 16 words
  conscientiousMain:
    'We value clarity, accountability, and precision in every interaction, ensuring effective and dependable outcomes.', // 16 words

  supportiveWrapUpIntro: 'Let’s connect and create solutions together today.', // 8 words
  supportiveWrapUpMain:
    'We’re prepared to offer insights, guidance, and actionable steps uniquely tailored to you.', // 14 words

  promptInfluential: 'Ready to take the next step?', // 5 words
  promptSupportive: 'Let’s find the right solution together.', // 6 words

  binaryChoiceReadySupportiveInfluential:
    'Sounds like this is the right time to begin.', // 8 words
  binaryChoiceExploreSupportiveConscientious:
    'Feels like I need more clarity to proceed.', // 8 words
};
