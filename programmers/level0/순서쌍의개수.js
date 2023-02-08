function solution(n) {
  let result = 0;

  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      if (n / i === i) result += 1;
      else result += 2;
    }
  }

  return result;
}
