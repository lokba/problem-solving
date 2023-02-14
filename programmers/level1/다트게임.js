function solution(dartResult) {
  let result = [];
  let numberString = "";

  for (let str of dartResult) {
    if (["S", "D", "T"].includes(str)) {
      result.push(
        Math.pow(Number(numberString), ["S", "D", "T"].indexOf(str) + 1)
      );
      numberString = "";

      continue;
    }

    if (["*", "#"].includes(str)) {
      const currentValue = result.pop();

      if (str === "*") {
        if (result.length !== 0) result.push(result.pop() * 2);
        result.push(currentValue * 2);
      } else result.push(currentValue * -1);

      continue;
    }

    numberString += str;
  }

  return result.reduce((acc, cur) => (acc += cur), 0);
}
