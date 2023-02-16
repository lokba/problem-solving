function solution(s) {
  let result = 0;

  let target = "";
  let [count1, count2] = [0, 0];

  for (let str of s) {
    if (count1 === 0) target = str;

    str === target ? count1++ : count2++;

    if (count1 === count2) {
      result += 1;
      count1 = 0;
      count2 = 0;
    }
  }

  if (count1 !== 0 || count2 !== 0) result += 1;
  return result;
}
