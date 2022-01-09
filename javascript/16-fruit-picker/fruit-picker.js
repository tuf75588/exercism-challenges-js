/// <reference path="./global.d.ts" />
//
// @ts-nocheck
//
// The lines above enable type checking for this file. Various IDEs interpret
// the @ts-check and reference directives. Together, they give you helpful
// autocompletion when implementing this exercise. You don't need to understand
// them in order to use it.
//
// In your own projects, files, and code, you can play with @ts-check as well.

import { checkStatus, checkInventory } from './grocer';

/**
 * Returns the service status as a boolean value
 * @return {boolean}
 */
export function isServiceOnline() {
  const currentStatus = checkStatus((result) => {
    return result === 'OFFLINE' || result === undefined ? false : true;
  });
  return currentStatus;
}

/**
 * Pick a fruit using the checkInventory API
 *
 * @param {string} variety
 * @param {number} quantity
 * @param {InventoryCallback} callback
 * @return {AvailabilityAction} the result from checkInventory
 */

function action(error, data) {
  if (error) throw new Error(error);
  return data;
}
export function pickFruit(variety, quantity, callback) {
  let data = checkInventory({ variety, quantity }, callback);
  return data;
}
/**
 * This is a callback function to be passed to the checkInventory API
 * handles the next step once the inventory is known
 * @param {string | null} err
 * @param {boolean | undefined} isAvailable
 * @return {AvailabilityAction} whether the fruit was purchased 'PURCHASE' or 'NOOP'
 */
export function purchaseInventoryIfAvailable(err, isAvailable) {
  if (err) throw new Error('Inventory error');
  if (isAvailable) return 'PURCHASE';
  return 'NOOP';
}

/**
 * Pick a fruit, and if it is available, purchase it
 *
 * @param {string} variety
 * @param {number} quantity
 * @return {AvailabilityAction} whether the fruit was purchased 'PURCHASE' or 'NOOP'
 */
export function pickAndPurchaseFruit(variety, quantity) {
  const pick = pickFruit(variety, quantity, purchaseInventoryIfAvailable);
  return pick;
}
