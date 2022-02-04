//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
    const forcefulQuestion = /[A-Z]+[?]$/gm;
    if (forcefulQuestion.test(message)) {
      return "Calm down, I know what I'm doing!";
    }
    
  };
  