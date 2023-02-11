function get최대공약수(a, b) {
  let 최대공약수 = 1;

  for (let i = 2; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) 최대공약수 = i;
  }

  return 최대공약수;
}

function solution(a, b) {
  b /= get최대공약수(a, b);

  while (b % 2 === 0) b /= 2;
  while (b % 5 === 0) b /= 5;

  return b === 1 ? 1 : 2;
}
