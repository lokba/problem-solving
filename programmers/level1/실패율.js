function solution(N, stages) {
  let result = [];
  let people = stages.length;

  for (let i = 0; i < N; i++) {
    const filtered = stages.filter((stage) => stage === i + 1);

    result.push([filtered.length / people, i + 1]);
    people -= filtered.length;
  }

  const sorted = [...result].sort((a, b) => {
    if (a[0] === b[0]) return a[1] > b[1] ? 1 : -1;
    return a[0] > b[0] ? -1 : 1;
  });

  return sorted.map((value) => value[1]);
}
