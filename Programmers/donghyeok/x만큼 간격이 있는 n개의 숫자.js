// x만큼 간격이 있는 n개의 숫자를 구하는 문제
// 처음에는 배열을 만들어서 반복문으로 돌리려고 했는데 더 쉬운 방법이 있어서 찾아봄
// 방법 1 => 3 으로 갈수록 더 좋은 코드임

// 방법 1
function solution(x, n) {
  var answer = [];

  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
    // 2*1, 2*2, 2*3, 2*4, 2*5
  }

  return answer;
}

// 방법 2
function solution(x, n) {
  // 길이(length)는 n만큼만
  return Array.from({ length: n }, (_, i) => x * (i + 1));
}

// 방법3
function solution(x, n) {
  // Array(n)은 [empty x n] 이런 배열을 만들어주고
  // fill(x)는 배열을 x로 채워줌, 아무값도 안넣으면 undefined로 채워짐
  // map((v, i) => (i + 1) * v)는 각 자리 index마다 배열을 순회하면서 각 요소에 연산을 적용
  return Array(n)
    .fill(x)
    .map((v, i) => v * (i + 1));
}

solution(2, 5); // [2, 4, 6, 8, 10]
solution(4, 3); // [4, 8, 12]
solution(-4, 2); // [-4, -8]

/**
 * 시간 복잡도: O(N)
 * - 방법1: for문으로 n번 반복
 * - 방법2: Array.from으로 n번 반복
 * - 방법3: fill + map으로 n번 반복
 *
 * 공간 복잡도: O(N)
 * - 모든 방법다 길이가 n인 배열을 생성하기 때문에
 */
