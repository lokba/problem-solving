function solution(id_pw, db) {
  const [userId, userPw] = id_pw;
  const list = db.filter(([id]) => userId === id);

  if (list.length === 0) return "fail";
  if (userPw === list[0][1]) return "login";
  return "wrong pw";
}
