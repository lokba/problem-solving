const list = ["3", "6", "9"];

function solution(order) {
  return [...String(order)].filter((str) => list.includes(str)).length;
}
