// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  return birdsPerDay.reduce(
    (accumulator, currentVal) => accumulator + currentVal,
    0
  );
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let weekCount = 0;
  let arr = [];
  for (let i = 0; i < birdsPerDay.length; i += 7) {
    arr.push(birdsPerDay.slice(i, i + 7));
  }
  return arr[week - 1].reduce((a, b) => a + b, 0);
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  birdsPerDay.forEach((element, index) => {
    index % 2 === 0 ? birdsPerDay[index]++ : element;
  });
  return birdsPerDay;
}
