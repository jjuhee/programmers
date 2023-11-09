//배열의 평균값
//https://school.programmers.co.kr/learn/courses/30/lessons/120817
//
function solution(numbers) {
  var answer = 0;
  var sum = numbers.reduce((num, acc) => num + acc);
  answer = sum / numbers.length;
  return answer;
}
