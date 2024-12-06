// 처음 풀었던 풀이 방법인데 정확도는 통과했지만 효율성에서 통과하지 못했다
function solution(scoville, K) {
  var answer = 0;

  scoville.sort((a, b) => a - b); // 오름차순 정렬

  while (scoville[0] < K && scoville.length > 1) {
    answer++;

    const newScoville = scoville.shift() + scoville.shift() * 2;

    scoville.push(newScoville);
    scoville.sort((a, b) => a - b);
  }

  if (scoville[0] < K) {
    return -1;
  }

  return answer;
}

console.log(solution([1, 2, 3, 9, 10, 12], 7));

/**
 * 시간 복잡도
 * 1) 초기 정렬 : O(n log n)
 *
 * 2) while 루프 내부
 * - shift() 연산: O(n)
 * - sort() 연산: O(n log n)
 * - 최대 n번 반복
 *
 * 총 시간 복잡도: O(n^2 log n)
 *
 * 공간 복잡도
 * - O(n) (저장하기 위한 배열 공간)
 */

// 효율성 통과 풀이 방법 (이게 Lv.2 난이도라고?)
// MinHeap 클래스를 정의하는 코드입니다. 이 클래스는 최소 힙을 구현합니다.
class MinHeap {
  // constructor는 클래스의 생성자 메서드로, 힙을 저장할 빈 배열 heap을 초기화합니다.
  constructor() {
    this.heap = [];
  }

  // getParentIndex 메서드는 주어진 인덱스의 부모 노드 인덱스를 계산하여 반환합니다.
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
    // 부모 노드의 인덱스는 (index - 1) / 2의 내림 값입니다.
  }

  // getLeftChildIndex 메서드는 주어진 인덱스의 왼쪽 자식 노드 인덱스를 계산하여 반환합니다.
  getLeftChildIndex(index) {
    return 2 * index + 1;
    // 왼쪽 자식 노드의 인덱스는 2 * index + 1입니다.
  }

  // getRightChildIndex 메서드는 주어진 인덱스의 오른쪽 자식 노드 인덱스를 계산하여 반환합니다.
  getRightChildIndex(index) {
    return 2 * index + 2;
    // 오른쪽 자식 노드의 인덱스는 2 * index + 2입니다.
  }

  // swap 메서드는 힙의 두 노드의 값을 교환합니다. (구조분해 할당 사용)
  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  // push 메서드는 새로운 값을 힙의 마지막에 추가합니다.
  push(value) {
    this.heap.push(value);
    this.heapifyUp(); // 힙 속성을 유지하기 위해 상향 재정렬
  }

  // 새로 추가된 값을 올바른 위치로 이동 (상향 정렬)
  heapifyUp() {
    // 새로 추가된 값의 인덱스부터 시작합니다.
    let currentIndex = this.heap.length - 1;
    // 루트에 도달하거나 힙 특성이 만족될 때까지 반복합니다.
    while (currentIndex > 0) {
      const parentIndex = this.getParentIndex(currentIndex);
      // 부모가 현재 노드보다 작거나 같으면 힙 속성 만족
      if (this.heap[parentIndex] <= this.heap[currentIndex]) break;
      // 부모 노드가 더 크다면 두 노드를 교환합니다.
      this.swap(currentIndex, parentIndex);
      // 부모 노드로 이동하여 계속 검사합니다.
      currentIndex = parentIndex;
    }
  }

  // pop 메서드는 힙이 비어있거나 하나의 요소만 있다면 그대로 반환합니다.
  pop() {
    if (this.heap.length <= 1) return this.heap.pop();

    // 최소값(루트)을 저장해둡니다.
    const min = this.heap[0];
    // 마지막 노드를 루트로 이동시킵니다.
    this.heap[0] = this.heap.pop();
    // 힙의 특성을 유지하기 위해 하향식으로 재정렬합니다.
    this.heapifyDown();
    // 저장해둔 최소값을 반환합니다.
    return min;
  }

  // 루트에서 시작하여 올바른 위치로 이동 (하향 정렬)
  heapifyDown() {
    let currentIndex = 0;
    while (true) {
      let smallestIndex = currentIndex;
      const leftIndex = this.getLeftChildIndex(currentIndex);
      const rightIndex = this.getRightChildIndex(currentIndex);

      // 왼쪽 자식이 더 작으면 교환 대상을 왼쪽자식으로 변경
      if (
        leftIndex < this.heap.length &&
        this.heap[leftIndex] < this.heap[smallestIndex]
      ) {
        smallestIndex = leftIndex;
      }
      // 오른쪽 자식이 더 작으면 교환 대상을 오른쪽자식으로 변경
      if (
        rightIndex < this.heap.length &&
        this.heap[rightIndex] < this.heap[smallestIndex]
      ) {
        smallestIndex = rightIndex;
      }

      // 교환이 필요 없으면 종료
      if (smallestIndex === currentIndex) break;
      // 현재 노드와 가장 작은 자식을 교환합니다.
      this.swap(currentIndex, smallestIndex);
      // 자식 노드로 이동하여 계속 검사합니다.
      currentIndex = smallestIndex;
    }
  }

  // 최소값(루트) 확인
  peek() {
    return this.heap[0];
  }

  // 힙의 크기 반환
  size() {
    return this.heap.length;
  }
}

function solution(scoville, K) {
  const minHeap = new MinHeap();
  // 모든 스코빌 지수를 힙에 추가
  scoville.forEach((s) => minHeap.push(s));

  let count = 0;
  // 가장 작은 값이 K보다 작고, 섞을 수 있는 음식이 2개 이상 있는 동안 반복
  while (minHeap.peek() < K && minHeap.size() > 1) {
    const first = minHeap.pop(); // 가장 맵지 않은 음식
    const second = minHeap.pop(); // 두 번째로 맵지 않은 음식
    minHeap.push(first + second * 2); // 두 음식을 섞어서 새로운 음식 생성하고 힙에 추가
    // 섞은 횟수를 증가시킵니다.
    count++;
  }

  // 모든 음식의 스코빌 지수가 K 이상이면 횟수를, 아니면 -1 반환
  return minHeap.peek() >= K ? count : -1;
}

/**
 * 시간 복잡도
 * 1) 힙 생성: O(n)
 * 2) push/pop 연산: O(log n)
 * 3) while 루프: 최대 n-1번 반복
 * - 전체 시간 복잡도: O(n log n)
 *
 * 공간 복잡도
 * - O(n) (힙을 저장하기 위한 배열 공간)
 */

/**
 * !결론
 * 효율성 테스트를 통과하지 못한 이유
 * 1) 매 반복마다 수행되는 sort() 연산이 O(n log n)의 시간 복잡도를 가짐
 * 2) shift() 연산이 O(n)의 시간 복잡도를 가짐
 *
 * 두 번째 풀이는 MinHeap을 사용하여:
 * 1) 정렬된 상태를 유지하면서 삽입/삭제가 O(log n)으로 가능
 * 2) 전체적으로 더 효율적인 O(n log n)의 시간 복잡도를 달성
 *
 * 따라서 두 번째 풀이가 훨씬 더 효율적인 해결책입니다.
 */
