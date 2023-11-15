// 핸드폰 번호 가리기
//https://school.programmers.co.kr/learn/courses/30/lessons/12948
//
function solution(phone_number) {
  var answer = "";
  var length = phone_number.length;
  answer = "*".repeat(length - 4) + phone_number.slice(-4);
  return answer;
}

// const solution = n => [...n].fill("*",0,n.length-4).join("")
