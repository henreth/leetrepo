class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
    # non destructive function that returns the sorted unique values in the beginning of the array with the remaining original values at the end 
    # create counter that is also used for indexing the unique values
        x = 1
        # counter starts at 1 in order to not skip over the first value in the array
        for i in range(len(nums)-1):
            if(nums[i]!=nums[i+1]):
                # if the value does not equal the next value in the array
                # move the value to the front of the array at the index of the current counter
                nums[x] = nums[i+1]
                # increase the counter
                x+=1
        # the counter will return the same value as the length of the unique values 
        return(x)