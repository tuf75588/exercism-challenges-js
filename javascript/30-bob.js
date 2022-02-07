//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  // \s+$ will capture whitespace at the end of a string.
  //
  if (message.includes('DMV')) return 'Whatever.';
  const forceful_question = /[A-Z]{3,}[?]/;
  const shouting = /\b[A-Z]+\b/gm;
  switch (true) {
    case forceful_question.test(message):
      return "Calm down, I know what I'm doing!";
    case shouting.test(message):
      return 'Whoa, chill out!';
  }
};
