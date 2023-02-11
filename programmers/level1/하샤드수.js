function solution(x) {
  return x % [...String(x)].reduce((acc, cur) => (acc += Number(cur)), 0) === 0;
}
