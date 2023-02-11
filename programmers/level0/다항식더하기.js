function solution(polynomial) {
  const expression = polynomial.split(" + ");
  let [variable, constant] = [0, 0];

  for (let exp of expression) {
    if (isNaN(Number(exp)))
      variable += Number(exp.padStart(2, "1").slice(0, -1));
    else constant += Number(exp);
  }

  variable = variable === 1 ? "" : variable;

  if (variable === 0) return `${constant}`;
  if (constant === 0) return `${variable}x`;
  return `${variable}x + ${constant}`;
}
