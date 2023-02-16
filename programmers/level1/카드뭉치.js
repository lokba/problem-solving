/**
 * 아쉬운 점
 * 1. 접근 방식이 아쉽다. goal과 (cards1, cards2)의 엘리먼트 비교만으로 풀이가 가능했다.
 */

// better solution
function solution(cards1, cards2, goal) {
  let cards1Idx = 0;
  let cards2Idx = 0;

  for (let i = 0; i < goal.length; i++) {
    if (goal[i] === cards1[cards1Idx]) cards1Idx++;
    else if (goal[i] === cards2[cards2Idx]) cards2Idx++;
    else return "No";
  }

  return "Yes";
}

function solution(cards1, cards2, goal) {
  const list = [];
  const GOAL_STRING = goal.join(" ");

  let cards1Idx = 0;
  let cards2Idx = 0;
  let goalIdx = 0;

  while (cards1Idx < cards1.length && cards2Idx < cards2.length) {
    if (cards1[cards1Idx] === goal[goalIdx]) {
      list.push(cards1[cards1Idx]);
      cards1Idx++;
      goalIdx++;
    } else if (cards2[cards2Idx] === goal[goalIdx]) {
      list.push(cards2[cards2Idx]);
      cards2Idx++;
      goalIdx++;
    } else return "NO";

    if (compareTo(list, GOAL_STRING)) return "Yes";
  }

  if (cards1Idx < cards1.length) {
    while (cards1Idx < cards1.length) {
      list.push(cards1[cards1Idx]);
      cards1Idx++;

      if (compareTo(list, GOAL_STRING)) return "Yes";
    }
  } else if (cards2Idx < cards2.length) {
    while (cards2Idx < cards2.length) {
      list.push(cards2[cards2Idx]);
      cards2Idx++;

      if (compareTo(list, GOAL_STRING)) return "Yes";
    }
  }

  return "No";
}

function compareTo(array, str) {
  return array.join(" ") === str;
}
