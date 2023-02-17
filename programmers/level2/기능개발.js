function solution(progresses, speeds) {
  const stk = [];

  for (let i = 0; i < progresses.length; i++) {
    const 소요시간 = Math.ceil((100 - progresses[i]) / speeds[i]);
    stk.push(소요시간);
  }

  const result = [1];
  let target = stk[0];

  for (let i = 1; i < stk.length; i++) {
    if (target >= stk[i]) result[result.length - 1] += 1;
    else {
      result.push(1);
      target = stk[i];
    }
  }

  return result;
}
