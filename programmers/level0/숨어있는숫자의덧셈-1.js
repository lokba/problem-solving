function solution(my_string) {
  return [...my_string].reduce(
    (acc, cur) => (Number.isInteger(Number(cur)) ? acc + Number(cur) : acc),
    0
  );
}
