function get최소공배수(n1, n2) {
  let 최대공약수 = 1;

  for (let i = 2; i <= Math.min(n1, n2); i++) {
    if (n1 % i === 0 && n2 % i === 0) 최대공약수 = i;
  }

  return 최대공약수 * (n1 / 최대공약수) * (n2 / 최대공약수);
}

function solution(n) {
  return get최소공배수(n, 6) / 6;
}
