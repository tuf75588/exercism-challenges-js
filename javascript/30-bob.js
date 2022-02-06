//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  const normal_question = /[a-z0-9\D]+[?]$/gm;
  const forceful_talking = /[a-z]+[!]$/gm;
  const forceful_question = /[A-Z]+[?]$/gm;
  const all_caps = /(\b[A-Z]+\b){3,}/gm;
  const silence = message.length === 0;
  switch (true) {
    case normal_question.test(message):
      return 'Sure.';
    case forceful_talking.test(message):
      return 'Whatever.';
  }
};
