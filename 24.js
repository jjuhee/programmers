//서울에서 김서방 찾기
//https://school.programmers.co.kr/learn/courses/30/lessons/12919
//
// function solution(seoul) {
//     var answer = "김서방은 "+ seoul.indexOf('Kim') + "에 있다";
//     return answer;
// }

function solution(seoul) {
  var answer =
    "김서방은 " + seoul.findIndex((item) => item === "Kim") + "에 있다";
  return answer;
}
