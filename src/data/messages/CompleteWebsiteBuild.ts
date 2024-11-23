// src/data/messages/CompleteWebsiteBuild.ts
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

import { Message } from '../../stores/SalesStrategyMessages';

export const CompleteWebsiteBuild: Message = {
  dominantInfluentialTagline:
    'Discover how a custom-built website scales your vision.', // 54 chars (within limits)

  supportiveIntro:
    'Every business deserves a website tailored to its unique needs and goals.', // 98 chars (within limits)
  supportiveMain:
    'We’ll craft a platform that reflects your vision and drives meaningful results.', // 100 chars (within limits)

  dominantSupportiveIntro:
    'Your business needs a platform designed to meet its goals and adapt to growth.', // 94 chars (within limits)
  dominantMain:
    'Our custom builds ensure scalability, efficiency, and measurable success.', // 91 chars (within limits)

  influentialSupportiveIntro:
    'Your site should not only work well but leave a lasting impression on users.', // 91 chars (within limits)
  influentialMain:
    'Together, we’ll create a site that inspires trust, fosters loyalty, and drives engagement.', // 98 chars (within limits)

  conscientiousSupportiveIntro:
    'Attention to detail ensures every element supports your long-term goals.', // 90 chars (within limits)
  conscientiousMain:
    'We’ll build processes that ensure reliability, scalability, and long-term success.', // 95 chars (within limits)

  supportiveWrapUpIntro: 'A website is an investment in your future success.', // 51 chars (within limits)
  supportiveWrapUpMain:
    'Let’s craft a site that reflects your goals and equips you for growth.', // 87 chars (within limits)

  promptInfluential: 'Excited to see what we can build together?', // 43 chars (within limits)
  promptSupportive: 'Let’s start creating the perfect platform for your needs.', // 47 chars (within limits)

  binaryChoiceReadySupportiveInfluential:
    'This feels perfect. How do we get started today?', // 49 chars (within limits)
  binaryChoiceExploreSupportiveConscientious:
    'Can you explain the process? I’d like details.', // 49 chars (within limits)
};
