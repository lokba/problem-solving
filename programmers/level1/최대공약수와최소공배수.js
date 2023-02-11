function get최대공약수(a, b) {
  let result = 1;

  for (let i = 2; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) result = i;
  }

  return result;
}

function solution(n, m) {
  const 최대공약수 = get최대공약수(n, m);
  const 최소공배수 = 최대공약수 * (n / 최대공약수) * (m / 최대공약수);

  return [최대공약수, 최소공배수];
}

console.log(solution(3, 12));
console.log(solution(2, 5));
