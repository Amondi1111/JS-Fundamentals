function factorial(n) {
  if (n <= 1) return 1;
  const res = n * factorial(n - 1);
  if (res > Number.MAX_VALUE) return Infinity;
  return res;
}

const arg = Number(process.argv[2]);
const n = Number.isInteger(arg) ? arg : NaN;

console.log(Number.isNaN(n) ? 1 : factorial(n));
