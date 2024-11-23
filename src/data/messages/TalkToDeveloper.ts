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
    'Leverage Expertise to Transform Your Vision Into Results', // 8 words

  supportiveIntro:
    'Imagine working with a professional who brings decades of experience to understanding your vision.', // 15 words
  supportiveMain:
    'This session connects you with a developer and designer who truly knows how to deliver results.', // 16 words

  dominantSupportiveIntro:
    'Over 20 years of high-level customer service and technical expertise—tailored to your needs.', // 16 words
  dominantMain:
    'Let’s clarify your goals and create actionable solutions that align with your vision and success.', // 16 words

  influentialSupportiveIntro:
    'Your project deserves the insight of someone who listens, refines, and implements effectively.', // 14 words
  influentialMain:
    'Together, we’ll create a roadmap to move your business forward with confidence and clarity.', // 14 words

  conscientiousSupportiveIntro:
    'Combining technical expertise and customer focus ensures a seamless and efficient experience.', // 13 words
  conscientiousMain:
    'With every detail considered, you’ll leave the session with clarity and actionable next steps.', // 15 words

  supportiveWrapUpIntro:
    'Focused attention from an expert is rare and invaluable.', // 7 words
  supportiveWrapUpMain:
    'For just $49, you’ll gain valuable insights and a personalized project summary.', // 14 words

  promptInfluential: 'Ready to collaborate with an expert?', // 5 words
  promptSupportive: 'Let’s schedule your first session today.', // 6 words

  binaryChoiceReadySupportiveInfluential:
    'This feels right. How do I book now?', // 8 words
  binaryChoiceExploreSupportiveConscientious:
    'Can I learn more before scheduling a call?', // 8 words
};

export default TalkToDeveloper;
