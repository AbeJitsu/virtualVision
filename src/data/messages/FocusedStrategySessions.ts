// Validation Guidelines:
// 1. Tagline:
//    - Min: 8 words
//    - Max: 10 words
//    - **Must include collaboration and problem-solving, starting dominant and ending influential**
// 2. Tone-Driven Messaging (Supportive/Dominant/Influential/Conscientious Intros and Mains):
//    - Min: 15 words
//    - Max: 18 words
// 3. Supportive Wrap-Up Intro:
//    - Min: 7 words
//    - Max: 9 words
// 4. Supportive-Influential Wrap-Up Main:
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

// src/data/messages/FocusedStrategySessions.ts

import { Message } from './SalesStrategyMessages';


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
