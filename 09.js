//https://school.programmers.co.kr/learn/courses/30/lessons/120831
//짝수의 합
//
function solution(n) {
	var answer = 0;
	var i = 0;
	while(i <= n) {
		answer += i;
		i+=2;
	}
	return answer;
}
