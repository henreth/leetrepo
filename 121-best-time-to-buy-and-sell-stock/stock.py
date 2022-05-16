class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        left = 0 # day to buy
        right = 1 # day to sell
        max_profit = 0
        while right < len(prices): #iterate through prices
            currentProfit = prices[right] - prices[left] 
            if prices[left] < prices[right]: # if the price to sell is higher than the selected day to buy
                max_profit =max(currentProfit,max_profit) #compare and update the current profit to the current max profit
            else:
                left = right #if the price to buy is higher than the selected price to sell, then update the day to buy on to that day
            right += 1
        return max_profit