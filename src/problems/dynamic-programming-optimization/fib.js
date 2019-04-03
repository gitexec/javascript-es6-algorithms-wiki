function fib(x, cached = {}) {
  if(cached[x] !== undefined) {
   return cached[x];
  }

  if (x === 0) return 0;
  if(x === 1) return 1;

  cached[x] = fib(x - 1) + fib(x-2);
  return cached[x];
}
module.exports = fib;
