class Solution:
    def maxArea(self, height: List[int]) -> int:
        area = 0
        length = len(height)
        head = 0
        tail = length -1 
        while tail - head > 0:
            potArea = min(height[head],height[tail]) * (tail-head) 
            area = max(area,potArea)
            if height[head] > height[tail]:
                tail=tail-1
            else:
                head=head+1
        
        return area
        