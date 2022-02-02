const spaceKey = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 365.25,
  mars: 1.8808158,
  jupiter: 1.8808158,
  saturn: 29.447498,
  uranus: 29.447498,
  neptune: 29.447498,
};

export const age = (planet, secondsOld) => {
  const days = 365.25;
  const hours = 24;
  const minutes = 60;
  const seconds = 60;
  const earthFormula = secondsOld / (days * hours * minutes * seconds);
  const earthYears = earthFormula.toFixed(2);
  return planet === 'earth'
    ? Number(earthYears)
    : Number((earthYears / spaceKey[planet]).toFixed(2));
};
