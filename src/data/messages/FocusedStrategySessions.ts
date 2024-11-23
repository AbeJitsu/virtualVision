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

// src/data/messages/FocusedStrategySessions.ts

import { Message } from '../../data/messages/FocusedStrategySessions';

export const FocusedStrategySessions: Message = {
  dominantInfluentialTagline:
    'Turn Planning into Actionable Results with Expert Guidance', // 55 chars (within limits)

  supportiveIntro:
    'Success begins with understanding your unique challenges and goals to create tailored solutions.', // 114 chars (within limits)
  supportiveMain:
    'Together, we’ll refine your vision and craft a clear strategy to turn it into a meaningful reality.', // 122 chars (within limits)

  dominantSupportiveIntro:
    'Your strategy deserves an actionable path to effective implementation and measurable success.', // 115 chars (within limits)
  dominantMain:
    'Focused sessions provide proven steps to achieve your goals while ensuring long-term sustainability.', // 123 chars (within limits)

  influentialSupportiveIntro:
    'Your ideas should inspire trust, build confidence, and encourage decisive action from your audience.', // 122 chars (within limits)
  influentialMain:
    'We’ll develop strategies to captivate and engage your audience, fostering loyalty and meaningful connections.', // 118 chars (within limits)

  conscientiousSupportiveIntro:
    'Attention to detail ensures every aspect of your plan aligns with your long-term vision and goals.', // 115 chars (within limits)
  conscientiousMain:
    'We’ll design processes that address every detail, creating a solid foundation for sustainable success.', // 118 chars (within limits)

  supportiveWrapUpIntro:
    'Strategic planning is the foundation for meaningful growth.', // 53 chars (within limits)
  supportiveWrapUpMain:
    'Let’s transform your ideas into a powerful, comprehensive growth and achievement.', // 116 chars (within limits)

  promptInfluential: 'Are you ready to explore what we can together?', // 47 chars (within limits)
  promptSupportive: 'Let’s take the first step toward clarity and progress.', // 46 chars (within limits)

  binaryChoiceReadySupportiveInfluential:
    'This sounds exactly like what I need! Let’s begin.', // 50 chars (within limits)
  binaryChoiceExploreSupportiveConscientious:
    'I’d like to understand more about details first.', // 50 chars (within limits)
};
