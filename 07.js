// 두 수의 나눗셈
//https://school.programmers.co.kr/learn/courses/30/lessons/120806

function solution(num1, num2) {
  var answer = 0;
  answer = (num1 / num2) * 1000;
  return Math.floor(answer);
}
