// 문자열 s, 거리 n
// 'A' = 65, 'Z' = 90, 'a' = 97, 'z' = 122
function solution(s, n) {
  return s
    .split("") // 문자열을 배열로 변환하고 각 문자를 변환한 후 다시 문자열로 합침
    .map((char) => {
      // 공백은 아무리 밀어도 공백입니다.라는 제한조건이 있으므로 공백인 경우 그대로 반환
      if (char === " ") return " ";

      // 문자의 ASCII 코드 얻기
      const code = char.charCodeAt(0);

      // 대문자인 경우 (65-90)
      if (code >= 65 && code <= 90) {
        return String.fromCharCode(((code - 65 + n) % 26) + 65);
        // 26으로 나눈 이유는 Z 다음에 A로 돌아가기 위해서 임
      }

      // 소문자인 경우 (97-122)
      return String.fromCharCode(((code - 97 + n) % 26) + 97);
    })
    .join("");
}

/*
 * 시간 복잡도: O(N)
 * - n은 입력 문자열 s의 길이입니다.
 *
 * 각 단계별 분석:
 * - split(""): O(N) - 문자열을 한 번 순회하며 배열로 변환
 * - map(): O(N) - 배열의 각 요소를 한 번씩 순회
 * - 각 문자에 대한 변환 연산(charCodeAt, fromCharCode 등)은 O(1)
 * - join(""): O(N) - 배열을 다시 한 번 순회하며 문자열로 변환
 * - 모든 연산이 순차적으로 실행되므로 최종 시간 복잡도는 O(N)입니다.
 *
 * 공간 복잡도: O(N)
 * - split("")으로 생성되는 배열: O(N)
 * - map()으로 생성되는 새로운 배열: O(N)
 * - 최종 문자열: O(N)
 * - 그 외 변수들(code, char 등): O(1)
 */

// ex)
// 입력: "AB", n=1
// s = "AB"
// ↓
// split → ["A", "B"]        O(n) 공간
// ↓
// map → ["B", "C"]          O(n) 공간
// ↓
// join → "BC"                O(n) 공간
