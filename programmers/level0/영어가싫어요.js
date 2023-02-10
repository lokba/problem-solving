const LIST = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

function solution(numbers) {
  LIST.forEach((item, index) => {
    numbers = numbers.replace(new RegExp(item, "g"), index);
  });

  return Number(numbers);
}
