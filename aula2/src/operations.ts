const sum = (a: number, b: number) => a + b;
 
const sumPositives = (a: number, b: number) => {
  if (a < 0 || b < 0) return null;
  return a + b;
};
 
export default { sum, sumPositives };
