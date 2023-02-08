function solution(age) {
  return [...String(age)]
    .map((str) => String.fromCharCode(97 + Number(str)))
    .join("");
}
