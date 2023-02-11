const list = [...Array(10)].map((_, index) => index);

function solution(numbers) {
  let sum = 0;

  for (let item of list) {
    if (!numbers.includes(item)) sum += item;
  }

  return sum;
}
