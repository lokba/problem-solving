function solution(s) {
  let result = "";
  let index = 0;

  for (let str of s) {
    if (str === " ") {
      result += str;
      index = 0;
      continue;
    }

    if (index % 2 === 0) result += str.toUpperCase();
    else result += str.toLowerCase();
    index++;
  }

  return result;
}
