class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        white,red,blue = 0,0,0
        
        for num in nums:
            if num ==0:
                white+=1
            elif num==1:
                red+=1
            else:
                blue+=1
        
        nums.clear()

        
        for i in range(white): 

            nums.append(0)
        for i in range(red): 
            nums.append(1)
        for i in range(blue): 
            nums.append(2)