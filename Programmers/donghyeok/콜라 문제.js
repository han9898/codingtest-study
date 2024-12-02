// a: 마트에 주어야 하는 빈 병 개수
// b: 마트가 주는 새 콜라 개수
// n: 현재 가지고 있는 빈 병 개수 (초기값)
function solution(a, b, n) {
  let answer = 0;
  let emptyBottle = n; // 변수 정의: 빈 병 개수

  // 내가 가지고 있는 빈병은 마트에 줘야 하는 빈병 수 보다는 같거나 커야함
  while (emptyBottle >= a) {
    // 현재 가진 빈 병으로 받을 수 있는 콜라의 수 계산
    const newColas = Math.floor(emptyBottle / a) * b;
    answer += newColas;

    // 남은 빈 병 계산 (새로 받은 콜라의 빈 병 + 교환하고 남은 빈 병)
    emptyBottle = newColas + (emptyBottle % a);
  }

  return answer;
}

/*
 * 시간 복잡도: O(log N)
 * - n은 초기 빈 병의 개수입니다.
 * - 매 반복마다 병의 개수가 a/b 비율로 감소합니다.
 * - 예를 들어, a=2, b=1인 경우:
 *   20 -> 10 -> 5 -> 2 -> 1 처럼 감소
 * - 이는 로그 함수의 특성을 보여줍니다.
 *
 * 공간 복잡도: O(1)
 * - 공간 복잡도는 알고리즘이 사용하는 메모리의 양을 나타냅니다.
 * - 사용된 변수들:
 *   · answer: 숫자형 변수 1개
 *   · emptyBottle: 숫자형 변수 1개
 *   · newColas: 반복문 내 임시 변수 1개
 * - 입력 크기(n)에 관계없이 일정한 메모리만 사용
 * - 따라서 상수 공간 복잡도 O(1)를 가집니다.
 */

// ex)
// 입력: a=2, b=1, n=20
// let emptyBottle = 20
// 1회차: 20/2 * 1 = 10개 받고, 남은 병 0개 -> emptyBottle = 10
// 2회차: 10/2 * 1 = 5개 받고, 남은 병 0개 -> emptyBottle = 5
// 3회차: 5/2 * 1 = 2개 받고, 남은 병 1개 -> emptyBottle = 3
// 4회차: 3/2 * 1 = 1개 받고, 남은 병 1개 -> emptyBottle = 2
// 5회차: 2/2 * 1 = 1개 받고, 남은 병 0개 -> emptyBottle = 1
// 종료 (1 < 2)
// 이처럼 입력값 n이 2배씩 감소하므로 로그 시간이 걸리며, 사용하는 변수의 개수는 일정합니다.
