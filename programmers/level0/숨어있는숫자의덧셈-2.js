function solution(my_string) {
  return my_string
    .split(/[a-z]/i)
    .filter((str) => str !== "")
    .reduce((acc, cur) => (acc += Number(cur)), 0);
}
