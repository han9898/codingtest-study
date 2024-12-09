def solution(n):
    sum=0
    for i in range(1,n+1):
        sum += i if n%i == 0 else 0
    return sum