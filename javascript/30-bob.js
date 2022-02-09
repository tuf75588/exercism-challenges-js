//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  const normal_question = /[a-z0-9\s]\?$(?!\\|\n|\t)/gm;
  const shouting_question = /[A-Z]{4,}\?$(?!\\|\n|\t)/gm;
  const endsWithOkay = message.endsWith('OK?');
  const GO = message.endsWith('GO!');
  let shouting = /[(A-Z0-9\d]{3,}[^\.\s]/gm;
  let silence = message.trim().length === 0;
  switch (true) {
    case normal_question.test(message.trim()):
        return "Sure."
    case shouting_question.test(message): 
        return "Calm down, I know what I'm doing!";
    case silence:
        return 'Fine. Be that way!';
    case endsWithOkay:
        return 'Sure.';
    case shouting.test(message) || GO: 
        return "Whoa, chill out!";
    default:
     return "Whatever."
  }
};
