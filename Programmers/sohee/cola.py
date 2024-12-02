def solution(a, b, n):
    answer = 0
    
    while a <= n:
        remain_B = n % a
        n = (n//a) * b
        answer += n
        n += remain_B
        
    return answer