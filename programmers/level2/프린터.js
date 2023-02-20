/**
 * 알게된 점
 * 1. 연산 횟수 : Math.max() > Array.prototype.some()
 */

function solution(priorities, location) {
  priorities = priorities.map((priority, index) => [priority, index]);
  let count = 0;

  while (true) {
    const [priority, index] = priorities.shift();
    const maxPriority = Math.max(...priorities.map((v) => v[0]));

    if (priority < maxPriority) priorities.push([priority, index]);
    else {
      count += 1;
      if (index === location) return count;
    }
  }
}

//better solution
function solution(priorities, location) {
  priorities = priorities.map((priority, index) => [priority, index]);
  let count = 0;

  while (true) {
    const [priority, index] = priorities.shift();
    const hasMaxPriority = priorities.some((v) => v[0] > priority);

    if (hasMaxPriority) priorities.push([priority, index]);
    else {
      count += 1;
      if (index === location) return count;
    }
  }
}
