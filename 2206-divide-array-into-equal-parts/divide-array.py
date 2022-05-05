class Solution:
    def divideArray(self, nums: List[int]) -> bool:
        lenth = len(nums)
        count = sum(num//2 for num in Counter(nums).values())
        return (lenth/2 == count)