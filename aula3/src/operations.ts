const sum = (a: number, b: number) => a + b;

const sumPositives = (a: number, b: number) => {
  if (a < 0 || b < 0) throw Error('Os parâmetros devem ser positivos');
  return a + b;
};

const div = (a:number, b:number) => a / b;

// (a + b) / c
const computeEquation = (a:number, b:number, c:number) => {
  const sumTotal = sum(a, b);
  const divTotal = div(sumTotal, c);

  return divTotal;
}

export default { sum, sumPositives, div, computeEquation };
