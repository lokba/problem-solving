function solution(k, m, score) {
  const sorted = [...score].sort((a, b) => (a > b ? -1 : 1));
  let result = 0;

  for (let i = 0; i < sorted.length - m + 1; i += m) {
    result += sorted.slice(i, i + m)[m - 1] * m;
  }

  return result;
}
