function solution(n) {
  var answer = 0;

  // 약수는 나머지가 0인 수이기 때문에 for문으로 반복해서 돌린 후 더해줬다
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) answer += i;
    console.log(answer);
  }

  return answer;
}

solution(12); // 28
solution(5); // 6

/**
 * 시간 복잡도: O(N)
 * - n 만큼 반복문을 돌리기 때문에
 *
 * 공간 복잡도: O(1)
 * - 변수가 하나뿐이라서
 */
