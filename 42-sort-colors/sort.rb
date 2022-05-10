# @param {Integer[]} nums
# @return {Void} Do not return anything, modify nums in-place instead.
def sort_colors(nums)
    white,red,blue = 0,0,0
        
        for num in nums
            if num ==0
                white+=1
            end
            if num==1
                red+=1
            end
        end
    
        blue = nums.size - red-white
        nums.clear()
    
        for i in (0..white-1) 
            nums.append(0)
        end
        for i in (0..red-1)
            nums.append(1)
        end
        for i in (0..blue-1)
            nums.append(2)
        end
end