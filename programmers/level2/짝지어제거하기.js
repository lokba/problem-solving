function solution(s) {
  if (s.length % 2 === 1) return 0;

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    stack.push(s[i]);

    if (stack[stack.length - 1] === stack[stack.length - 2]) {
      stack.pop();
      stack.pop();
    }
  }

  return stack.length ? 0 : 1;
}
