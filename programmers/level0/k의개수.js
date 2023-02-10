function solution(i, j, k) {
  const str = [...Array(j - i + 1)].map((_, index) => index + i).join("");

  return [...str.matchAll(new RegExp(k, "g"))].length;
}
