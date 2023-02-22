function solution(people, limit) {
  people.sort((a, b) => (a > b ? 1 : -1));

  let count = 0;
  let idx = 0;

  while (idx < people.length) {
    if (people.pop() + people[idx] <= limit) idx += 1;
    count += 1;
  }

  return count;
}
