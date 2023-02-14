function solution(s) {
  if (s.length !== 4 && s.length !== 6) return false;

  for (let str of s) {
    if (Number.isNaN(Number(str))) return false;
  }

  return true;
}
