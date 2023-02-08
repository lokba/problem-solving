function solution(my_string) {
  return [...my_string]
    .map((str) =>
      str === str.toUpperCase() ? str.toLowerCase() : str.toUpperCase()
    )
    .join("");
}
