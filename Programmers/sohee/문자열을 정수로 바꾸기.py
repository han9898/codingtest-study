# int로 타입을 바꾸어서 반환하는 간단 함수
def solution(s):
    answer = int(s)
    return answer

# 다른 사람 풀이
def solution(str): 
    result = 0
    # enumerate 함수는 인덱스와 각 문자를 가져옴 ex:: [(0, '2'), (0, '1'), ...]
    # -1을 작성함으로 역순 인덱스를 가져옴
    for idx, number in enumerate(str[::-1]):
        if number == '-':
            result *= -1
        else:
            result += int(number) * (10 ** idx)
    return result

# 위의 코드 참고 후 변형
# int 함수를 사용하지 않는 코드
def solution(str):
    result = 0
    for idx, number in enumerate(str[::-1]):
        if number == '-':
            result *= -1
        else:
            digit = ord(number) - ord('0')
            result += digit * (10 ** idx)
    return result