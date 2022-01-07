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
