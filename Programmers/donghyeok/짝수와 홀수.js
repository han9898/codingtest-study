// 짝수와 홀수를 구하는 문제이기 때문에 나머지가 0인 경우와 아닌 경우를 구분해줘야 함

// 풀이 방법 1
function solution(num) {
  if (num % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

// 풀이 방법 2
function solution(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}

solution(3); // "Odd"
solution(4); // "Even"

/**
 * 시간 복잡도: O(1)
 * - 조건문 하나만 있기 때문에
 *
 * 공간 복잡도: O(1)
 * - 누적값만 저장
 */
