function solution(arr1, arr2) {
  const result = [];

  for (let i = 0; i < arr1.length; i++) {
    const row = [];

    for (let j = 0; j < arr2[0].length; j++) {
      const sum = arr1[i].reduce((acc, cur, i) => (acc += cur * arr2[i][j]), 0);
      row.push(sum);
    }

    result.push(row);
  }

  return result;
}
