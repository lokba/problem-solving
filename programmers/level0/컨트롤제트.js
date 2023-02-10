function solution(s) {
  const list = s.split(" ");
  let numbers = [];

  for (let item of list) {
    if (item === "Z") numbers.pop();
    else numbers.push(item);
  }

  return numbers.reduce((acc, cur) => (acc += Number(cur)), 0);
}
