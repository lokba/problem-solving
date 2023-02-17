function solution(n) {
  const target = n.toString(2).match(/1/g)?.length ?? 0;

  for (let i = n + 1; ; i++) {
    const count = i.toString(2).match(/1/g)?.length ?? 0;

    if (count === target) return i;
  }
}
