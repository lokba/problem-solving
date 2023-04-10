/**
 * 좋은 문제
 */
function solution(numbers) {
  const stack = [];
  const answer = [];

  for (let i = numbers.length - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] <= numbers[i]) stack.pop();

    if (stack.length) answer.push(stack[stack.length - 1]);
    else answer.push(-1);

    stack.push(numbers[i]);
  }

  return answer.reverse();
}
