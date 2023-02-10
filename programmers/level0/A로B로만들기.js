function solution(before, after) {
  if (before.length !== after.length) return 0;

  const sortedBefore = [...before].sort((a, b) => (a > b ? 1 : -1)).join("");
  const sortedAfter = [...after].sort((a, b) => (a > b ? 1 : -1)).join("");

  return sortedBefore === sortedAfter ? 1 : 0;
}
