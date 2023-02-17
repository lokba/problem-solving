function solution(k, tangerines) {
  const 테이블 = new Map();

  for (let tangerine of tangerines) {
    if (테이블.has(tangerine)) 테이블.set(tangerine, 테이블.get(tangerine) + 1);
    else 테이블.set(tangerine, 1);
  }

  const sorted = [...테이블]
    .map(([_, value]) => value)
    .sort((a, b) => (a > b ? -1 : 1));

  let result = 0;
  let index = 0;

  while (k > 0) {
    k -= sorted[index];
    result += 1;
    index += 1;
  }

  return result;
}
