/**
 * 아쉬운 점
 * 1. combination보다 simple-brute-force가 속도 더 좋다.
 */

function solution(numbers) {
  const result = new Set();
  const cases = combination(numbers, 2);

  for (let [a, b] of cases) {
    result.add(a + b);
  }

  return [...result].sort((a, b) => (a > b ? 1 : -1));
}

function combination(list, count) {
  if (count === 1) return list.map((item) => [item]);

  const result = [];

  for (let i = 0; i < list.length; i++) {
    const slicing = list.slice(i + 1);
    const combi = combination(slicing, count - 1);
    result.push(...combi.map((v) => [...v, list[i]]));
  }

  return result;
}
