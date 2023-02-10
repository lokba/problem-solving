function solution(my_string) {
  const strList = my_string.split(" ");
  let result = 0;
  let operand = "+";

  for (let item of strList) {
    if (item === "+" || item === "-") operand = item;
    else {
      if (operand === "+") result += Number(item);
      else result -= Number(item);
    }
  }

  return result;
}
