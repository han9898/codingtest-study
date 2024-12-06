// 평균을 구해야하기 때문에 전부 더하고 마지막에 배열의 길이로 나눠줌
// 자릿수 더하기에서 배운 reduce 메서드 활용했습니다!

function solution(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
}

solution([1, 2, 3, 4]); // 2.5
solution([5, 5]); // 5

/**
 * 시간 복잡도: O(N)
 * - reduce로 배열 한 번 순회하기 때문에
 *
 * 공간 복잡도: O(1)
 * - 누적값만 저장
 */
