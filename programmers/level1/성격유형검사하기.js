/**
 * 아쉬운 점
 * 1. 데이터 가공을 해야하는 경우, 효율적인 테이블 객체를 빠르게 구성하는 것이 주요 관건이다.
 */

function solution(survey, choices) {
  const SCORE_TABLE = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };

  for (let i = 0; i < choices.length; i++) {
    const position = choices[i];
    const str = position < 4 ? survey[i][0] : survey[i][1];

    SCORE_TABLE[str] += Math.abs(4 - position);
  }

  let result = "";

  result += SCORE_TABLE["R"] >= SCORE_TABLE["T"] ? "R" : "T";
  result += SCORE_TABLE["C"] >= SCORE_TABLE["F"] ? "C" : "F";
  result += SCORE_TABLE["J"] >= SCORE_TABLE["M"] ? "J" : "M";
  result += SCORE_TABLE["A"] >= SCORE_TABLE["N"] ? "A" : "N";

  return result;
}
