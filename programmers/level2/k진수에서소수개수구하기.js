/**
 * 소수 판별 방식
 * 1. O(N)으로 순회
 * 2. O(루트 N)으로 순회
 * 3. 에라토스테네스의 체
 *
 * 접근 방식
 * 이 문제는 3번 방식이 아닌, 2번 방식으로 풀어야 효율성 통과를 한다.
 *
 * 결론
 * 1. 제곱근을 이용한 소수 판별 - 넓은 범위에서의 많지 않은 소수가 필요할 때
 * 2. 에라토스테네스의 체를 이용한 소수 판별 - 다소 좁은 범위에서의 많은 소수가 필요할 때
 */

function solution(n, k) {
  // case 1 - O(루트 N)으로 순회
  const list = trim(n.toString(k)).map(Number);
  let result = 0;

  for (let item of list) {
    if (isPrime(item)) result += 1;
  }

  return result;

  // case 2 - 에라토스테네스의 체
  // const list = trim(n.toString(k)).map(Number);
  // const 소수테이블 = generate소수테이블(Math.max(...list));
  // let result = 0;

  // for (let item of list) {
  //   if (소수테이블[item]) result += 1;
  // }

  // return result;
}

function trim(s) {
  const list = [];
  let lastStr = "";

  for (let str of s) {
    if (str === "0") {
      if (lastStr !== "") list.push(lastStr);
      lastStr = "";
    } else lastStr += str;
  }

  if (lastStr !== "") list.push(lastStr);

  return list;
}

function isPrime(n) {
  if (n === 1) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
}

function generate소수테이블(value) {
  const table = Array(value + 1).fill(true);
  table[0] = false;
  table[1] = false;

  for (let i = 2; i <= Math.sqrt(value); i++) {
    if (table[i]) {
      for (let j = i * i; j <= value; j += i) {
        table[j] = false;
      }
    }
  }

  return table;
}
