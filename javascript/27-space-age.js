
const spaceKey = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1.0,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
};


export const age = (planet, secondsOld) => {
  const earthYears = secondsOld / (365.25 * 24 * 60 * 60);
  const otherYears = earthYears / spaceKey[planet];
  return Number(otherYears.toFixed(2))
};

