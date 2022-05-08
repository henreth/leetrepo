# @param {Integer[]} nums1
# @param {Integer} m
# @param {Integer[]} nums2
# @param {Integer} n
# @return {Void} Do not return anything, modify nums1 in-place instead.
def merge(nums1, m, nums2, n)
        for i in (m..nums1.size-1+n)
            if nums2[i-m] != nil
                nums1[i]= nums2[i-m]
            end
        end
    nums1.sort!
    # -! means that the array will be sorted in place
end


# alternative solution
# def merge(nums1, m, nums2, n)
#     nums1[m..m+n] = nums2
#     nums1.sort! 
# end