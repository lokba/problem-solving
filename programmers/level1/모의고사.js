const pattern1 = [1, 2, 3, 4, 5];
const pattern2 = [2, 1, 2, 3, 2, 4, 2, 5];
const pattern3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

function solution(answers) {
  const count = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === pattern1[i % pattern1.length]) count[0] += 1;
    if (answers[i] === pattern2[i % pattern2.length]) count[1] += 1;
    if (answers[i] === pattern3[i % pattern3.length]) count[2] += 1;
  }

  const result = [];
  const maxCount = Math.max(...count);

  for (let i = 0; i < count.length; i++) {
    if (count[i] === maxCount) result.push(i + 1);
  }

  return result;
}
