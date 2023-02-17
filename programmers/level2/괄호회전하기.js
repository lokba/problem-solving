/**
 * 효율적인 접근방식
 * 1. (for + splice) 조합보다는 (stack + push + pop)을 우선적으로 선택한다.
 * 2. 1번 과정에서 효율성 감점이 생기면, 옳지 않은 케이스(false)를 빠르게 반환해서 횟수를 줄인다.
 */

function solution(s) {
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const spinned = spin(s, i);
    if (isCorrectBracket(spinned)) result += 1;
  }

  return result;
}

function spin(s, index) {
  return s.slice(index) + s.slice(0, index);
}

function isCorrectBracket(str) {
  const list = str.split("");
  const stk = [];
  const table = new Map([
    ["]", "["],
    ["}", "{"],
    [")", "("],
  ]);

  for (let i = 0; i < list.length; i++) {
    if (list[i] === "]" || list[i] === "}" || list[i] === ")") {
      if (stk[stk.length - 1] === table.get(list[i])) stk.pop();
      else return false;
    } else stk.push(list[i]);
  }

  return stk.length ? false : true;
}
