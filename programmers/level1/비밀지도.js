function solution(n, arr1, arr2) {
  const result = [];

  for (let i = 0; i < n; i++) {
    const arr1Row = arr1[i].toString(2).padStart(n, 0);
    const arr2Row = arr2[i].toString(2).padStart(n, 0);
    let row = "";

    for (let j = 0; j < arr1Row.length; j++) {
      if (arr1Row[j] === "1" || arr2Row[j] === "1") row += "#";
      else row += " ";
    }

    result.push(row);
  }

  return result;
}
