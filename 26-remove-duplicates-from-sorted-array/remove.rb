# @param {Integer[]} nums
# @return {Integer}
# @param {Integer[]} nums
# @return {Integer}
def remove_duplicates(nums)
    nums.uniq! # turns nums into only unique values
    nums.size # get the length of nums
end

# alternative but longer approach
# def remove_duplicates(nums)
#         x = 1
#         # counter starts at 1 in order to not skip over the first value in the array
#         for i in (0..nums.size-1)
#             if(nums[i]!=nums[i+1])
#                 nums[x] = nums[i+1]
#                 x+=1
#             end
#         end
#         # counter needs to be decrease by 1 in order to return the correct value
#         return(x-1)
# end