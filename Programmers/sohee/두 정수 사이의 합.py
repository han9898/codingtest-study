def solution(a, b):
    start = min(a, b)
    end = max(a, b)
    answer = sum(range(start, end + 1))
    return answer

# 다른 사람 풀이
def adder(a, b):
    if a > b:
        a, b = b, a
    return sum(range(a, b + 1))

# 다른 사람 풀이
def adder(a, b):
    return (abs(a-b)+1)*(a+b)//2