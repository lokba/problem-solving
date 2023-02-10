function solution(num, total) {
  const startNum = ((2 * total) / num - num + 1) / 2;

  return [...Array(num)].map((_, index) => startNum + index);
}
