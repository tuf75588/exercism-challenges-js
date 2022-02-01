//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (strand) => {
  const codes = {
    C: 'G',
    G: 'C',
    T: 'A',
    A: 'U',
  };
  let multi = '';
  if (strand.length > 1) {
    for (const key of strand) {
      const pair = codes[key];
      multi += pair;
    }
    return multi;
  }
  return codes[strand] || '';
};
