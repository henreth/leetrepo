class Solution:
    def sumZero(self, n: int) -> List[int]:
        L, rem = n // 2, n % 2
        # L is n / 2 rounded 
        if rem != 0: ans = [0]
        else: ans = []
        for i in range(1,L+1):
            ans.append(-i)
            ans.append(i) 
        return ans
        