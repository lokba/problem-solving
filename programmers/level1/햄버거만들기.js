/**
 * 아쉬운 점
 * 1. 효율성 측면에서 지양하면 좋은 메서드 - indexOf, splice
 * 2. splice 대안 - push & pop with stack
 */

function solution(ingredient) {
  let result = 0;

  for (let i = 0; i < ingredient.length - 3; i++) {
    const [a, b, c, d] = ingredient.slice(i, i + 4);

    if (a === 1 && b === 2 && c === 3 && d === 1) {
      ingredient.splice(i, 4);

      i = i - 4 < 0 ? -1 : i - 4;
      result += 1;
    }
  }

  return result;
}
