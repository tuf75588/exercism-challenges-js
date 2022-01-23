// @ts-check

export class ArgumentError extends Error {}

export class OverheatingError extends Error {
  constructor(temperature) {
    super(`The temperature is ${temperature} ! Overheating !`);
    this.temperature = temperature;
  }
}

/**
 * Check if the humidity level is not too high.
 *
 * @param {number} humidityPercentage
 * @throws {Error}
 */
export function checkHumidityLevel(humidityPercentage) {
  if (humidityPercentage > 70) {
    throw new Error('Too hot!');
  }
  return humidityPercentage;
}

/**
 * Check if the temperature is not too high.
 *
 * @param {number|null} temperature
 * @throws {ArgumentError|OverheatingError}
 */
export function reportOverheating(temperature) {
  const broken = null;
  if (temperature === broken) {
    throw new ArgumentError();
  } else if (temperature > 500) {
    throw new OverheatingError(temperature);
  }
  return temperature;
}

/**
 *  Triggers the needed action depending on the result of the machine check.
 *
 * @param {{
 * check: function,
 * alertDeadSensor: function,
 * alertOverheating: function,
 * shutdown: function
 * }} actions
 * @throws {ArgumentError|OverheatingError|Error}
 */
export function monitorTheMachine(actions) {
  const { check, alertDeadSensor, alertOverheating, shutdown } = actions;
  // check the current temp
  try {
    check();
  } catch (error) {
    const { message } = error;
    if (error instanceof ArgumentError) {
      actions.alertDeadSensor();
    } else if (error instanceof OverheatingError) {
      const { temperature } = error;
      temperature > 600 ? actions.shutdown() : actions.alertOverheating();
    } else {
      throw error;
    }
  }
}
