/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    nums1.splice(m,)
    for (num of nums2.slice(0, n)) {
        nums1.push(num)
    }
    nums1.sort((a, b) => a - b)
};