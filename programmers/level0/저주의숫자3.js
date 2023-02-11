function solution(n) {
  let count = 1;
  let result = 1;

  while (count <= n) {
    if (result % 3 !== 0 && !String(result).includes("3")) count++;
    result++;
  }

  return result - 1;
}
