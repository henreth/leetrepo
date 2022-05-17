class Solution:
    def plusOne(self, digits):
        for i in range(len(digits)):
            # ~i will find the opposite index 
            # if i = i, ~i = -1 or len(digits) -1 
            # using ~i will allow you iterate backwards through an array easily
            if digits[~i] < 9: # if the last digit iterated through is less than 9 
                digits[~i] += 1  # increase the digit by one 
                return digits # return the new digits array
            else: # if the last digit iterated through is greater than or equal to 9
                digits[~i] = 0 # set the digit to 0 and continue to iterate
        return [1] + [0] * len(digits) # if all of the digits are 9, return 10^(length of digits)