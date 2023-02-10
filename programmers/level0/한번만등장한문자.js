function solution(s) {
  const strObj = {};

  for (let str of s) {
    if (strObj[str] === undefined) strObj[str] = 1;
    else strObj[str]++;
  }

  return Object.keys(strObj)
    .filter((key) => strObj[key] === 1)
    .sort((a, b) => (a > b ? 1 : -1))
    .join("");
}
