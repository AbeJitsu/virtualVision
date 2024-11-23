// src/stores/messages/TalkToDeveloper.ts

export const TalkToDeveloper = {
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

  dominantInfluentialTagline:
    'Collaborate to Solve Problems with a Custom Approach', // 8 words

  supportiveIntro:
    'We know how helpful it feels to work with someone who truly understands your goals.', // 16 words
  supportiveMain:
    'Collaborating with an expert developer ensures your ideas turn into actionable and effective solutions.', // 15 words

  dominantSupportiveIntro:
    'Your business deserves thoughtful support and actionable solutions that deliver results.', // 15 words
  dominantMain:
    'Partner with a professional to create tools tailored to meet your specific challenges and goals.', // 16 words

  influentialSupportiveIntro:
    'Your ideas deserve more than talk—they need expert execution and innovative thinking.', // 14 words
  influentialMain:
    'Together, we’ll craft solutions that inspire confidence and move your business forward.', // 13 words

  conscientiousSupportiveIntro:
    'Building the right solution starts with careful planning and precise execution.', // 13 words
  conscientiousMain:
    'We focus on the details to ensure every requirement is met for long-term success.', // 14 words

  supportiveWrapUpIntro: 'Your journey begins with a partner who understands.', // 7 words
  supportiveWrapUpMain:
    'Let’s take the first step toward making your vision a reality together.', // 13 words

  promptInfluential: 'Ready to collaborate with confidence?', // 5 words
  promptSupportive: 'Let’s take the first step together.', // 6 words

  binaryChoiceReadySupportiveInfluential:
    'This feels right. How do I get started?', // 8 words
  binaryChoiceExploreSupportiveConscientious:
    'Can I learn more about the process first?', // 8 words
};

export default TalkToDeveloper;
