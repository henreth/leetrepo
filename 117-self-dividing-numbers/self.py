class Solution:
    def selfDividingNumbers(self, left: int, right: int) -> List[int]:
        def divisible(num):
            for val in str(num):
                if val == '0' or num % int(val) > 0:
                    return False
            return True
        
        nums = []
        for num in range(left, right + 1):
            if divisible(num):
                nums.append(num)
        return nums