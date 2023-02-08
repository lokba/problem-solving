function solution(my_string) {
  return [...my_string]
    .filter((str) => Number.isInteger(Number(str)))
    .map((v) => Number(v))
    .sort((a, b) => a - b);
}
