//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  const normal_question = /\?(?!\\|\n|\t)/;
  switch (true) {
    case normal_question.test(message):
        return "Sure."
    default:
     return "Whatever."
  }
};
