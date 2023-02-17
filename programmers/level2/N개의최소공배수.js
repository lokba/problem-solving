function solution(arr) {
  let result = arr[0];

  for (let i = 1; i < arr.length; i++) {
    result = 최소공배수(result, arr[i]);
  }

  return result;
}

function 최소공배수(a, b) {
  return (a * b) / 최대공약수(a, b);
}

function 최대공약수(a, b) {
  return a % b ? 최대공약수(b, a % b) : b;
}
