/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(time) {
  if (time === undefined) return 'You forgot to set the timer.';
  return time === 0 ? 'Lasagna is done.' : 'Not done, please wait.';
}

export function preparationTime(layers, prepTime = 2) {
  return layers.length * prepTime;
}

export function quantities(ingredients) {
  const noodles = 50;
  const sauce = 0.2;
  const filterArray = (array, item) =>
    array.filter((element) => element === item);
  const [noodleCount, sauceCount] = [
    filterArray(ingredients, 'noodles'),
    filterArray(ingredients, 'sauce'),
  ];
  return {
    noodles: noodles * noodleCount.length,
    sauce: sauce * sauceCount.length,
  };
}

export function addSecretIngredient(friendsList, myList) {
  const secret = friendsList[friendsList.length - 1];
  myList.push(secret);
}

export function scaleRecipe(recipe, portions) {
  if (portions === undefined) return {};
  let copy = { ...recipe };
  const scale = portions / 2;
  const keys = Object.keys(copy).map((element) => {
    copy[element] = copy[element] * scale;
    return copy;
  });
  return keys[0];
}
