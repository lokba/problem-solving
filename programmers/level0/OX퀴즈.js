function solution(quiz) {
  const result = [];

  for (let expression of quiz) {
    const [op1, operand, op2, eq, answer] = expression.split(" ");

    if (operand === "-") {
      if (Number(op1) - Number(op2) === Number(answer)) result.push("O");
      else result.push("X");
    } else {
      if (Number(op1) + Number(op2) === Number(answer)) result.push("O");
      else result.push("X");
    }
  }

  return result;
}
