function solution(n) {
  let array = [];

  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      if (n / i === i) array.push(i);
      else array.push(i, n / i);
    }
  }

  return array.sort((a, b) => a - b);
}
