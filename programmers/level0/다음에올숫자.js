function solution(common) {
  const [a, b, c] = common;

  if (b - a === c - b) return common[common.length - 1] + b - a;
  return common[common.length - 1] * (b / a);
}
