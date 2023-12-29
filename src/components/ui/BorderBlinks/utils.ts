export const generateRandomNumberInRange = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const linePositionGenerator = () => {
  const randomValue = Math.random();
  if (randomValue < 0.33) return "Right";
  else if (randomValue < 0.66) return "Top";
  else return "Left";
};
