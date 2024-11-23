// src/stores/messages/TalkToDeveloper.ts

export const TalkToDeveloper = {
  // Validation Guidelines:
  // 1. Tagline:
  //    - Min: 8 words
  //    - Max: 10 words
  //    - Must include collaboration and problem-solving, starting dominant and ending influential.
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
  //    - Must be written in the user's inner voice.
  //    - Left Button: Supportive and Influential (encouraging action).
  //    - Right Button: Dominant and Conscientious (providing clarity or details).

  dominantInfluentialTagline:
    'Start Your Journey with Tailored Expertise and Insight', // 8 words

  supportiveIntro:
    'Imagine a live, interactive call focused entirely on understanding and advancing your goals.', // 15 words
  supportiveMain:
    'This one-hour video call connects you with a developer who listens, strategizes, and builds for results.', // 17 words

  dominantSupportiveIntro:
    'With decades of high-level customer service experience, I bring clarity and focus to refining your vision.', // 17 words
  dominantMain:
    'Let’s identify your goals, create actionable steps, and position your project for success.', // 15 words

  influentialSupportiveIntro:
    'Your vision deserves focused attention and actionable insight to turn ideas into results.', // 13 words
  influentialMain:
    'Together, we’ll outline a clear path to ensure your project moves forward with confidence.', // 14 words

  conscientiousSupportiveIntro:
    'An organized approach ensures every aspect of your project is thoughtfully addressed.', // 12 words
  conscientiousMain:
    'Within 24 hours, you’ll receive a detailed summary with actionable next steps.', // 13 words

  supportiveWrapUpIntro:
    'Focused, tailored attention like this is rare and invaluable.', // 8 words
  supportiveWrapUpMain:
    'For $49, gain professional insight and a personalized session summary within 24 hours.', // 14 words

  promptInfluential: 'Ready to start planning together?', // 5 words
  promptSupportive: 'Let’s schedule your first session today.', // 6 words

  binaryChoiceReadySupportiveInfluential:
    'This feels right. How do I book now?', // 8 words
  binaryChoiceExploreSupportiveConscientious:
    'Can I learn more before scheduling a call?', // 8 words
};

export default TalkToDeveloper;
