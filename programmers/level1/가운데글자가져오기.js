function solution(s) {
  const midIndex = Math.floor((s.length - 1) / 2);

  return s.length % 2 === 0 ? s[midIndex] + s[midIndex + 1] : s[midIndex];
}
