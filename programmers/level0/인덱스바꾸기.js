function solution(my_string, num1, num2) {
  let list = [...my_string];

  let temp = list[num1];
  list[num1] = list[num2];
  list[num2] = temp;

  return list.join("");
}
