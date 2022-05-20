class Solution:
    def luckyNumbers (self, matrix: List[List[int]]) -> List[int]:
        return {min(row) for row in matrix}.intersection(max(column) for column in zip(*matrix))