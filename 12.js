//https://school.programmers.co.kr/learn/courses/30/lessons/12944
//평균 구하기
//
function solution(arr) {   
	var sum = arr.reduce((acc, c) => acc+c)

	return sum/arr.length;
}
