function solution(skill, skill_trees) {
  let result = 0;

  for (let skill_tree of skill_trees) {
    const stk = [];
    let isCorrect = true;

    for (let i = 0; i < skill.length; i++) {
      const index = skill_tree.indexOf(skill[i]);
      const value = index === -1 ? Infinity : index;

      if (stk.length !== 0 && stk[stk.length - 1] > value) {
        isCorrect = false;
        break;
      }

      stk.push(value);
    }

    if (isCorrect) result += 1;
  }

  return result;
}
