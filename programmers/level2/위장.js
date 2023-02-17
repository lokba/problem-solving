function solution(clothes) {
  const 테이블 = new Map();

  for (let [name, type] of clothes) {
    if (테이블.has(type)) 테이블.set(type, [...테이블.get(type), name]);
    else 테이블.set(type, [name]);
  }

  let result = 1;

  for (let [_, names] of 테이블) {
    result *= names.length + 1;
  }

  return result - 1;
}
