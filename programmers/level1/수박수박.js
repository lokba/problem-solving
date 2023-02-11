function solution(n) {
  const result = "수박".repeat(Math.ceil(n / 2));

  return n % 2 === 0 ? result : result.slice(0, -1);
}
