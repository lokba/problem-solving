const list = ["a", "e", "i", "o", "u"];

function solution(my_string) {
  return [...my_string].filter((str) => !list.includes(str)).join("");
}
