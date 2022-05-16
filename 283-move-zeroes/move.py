class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        nonZeroes=0
        for i in range(len(nums)):
            if nums[i] !=0:
                nums[nonZeroes], nums[i] = nums[i], nums[nonZeroes] # swap positions if nums[i] != 0 
                nonZeroes +=1

# first solution: less optimized
    # def moveZeroes(self, nums: List[int]) -> None:
    #     """
    #     Do not return anything, modify nums in-place instead.
    #     """
    #     nonZeroes = 0 
    #     for i in range(len(nums)):
    #         if nums[i]!=0:
    #             nums[nonZeroes] = nums[i]
    #             nonZeroes+=1

    #     for i in range(nonZeroes,len(nums)):
    #         nums[i] = 0
        