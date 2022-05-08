class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        for i,value in enumerate(nums1[m:len(nums1)+n]):
            # iterate through nums1 at indexes, allowing us to select specific indexes for nums1 and nums2
            # need the value in the call to enable indexing despite not using the values later
            nums1[m+i] = nums2[i]
            
        nums1.sort()