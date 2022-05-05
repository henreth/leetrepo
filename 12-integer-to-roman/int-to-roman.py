class Solution:
    def intToRoman(self, num: int) -> str:
        dict = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]
        nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
        result = ""
        for letter, n in zip(dict, nums):
            # divides the total count (num) by a value in the roman calculator then rounds to the nearest whole number
            # then multiplies the result by the corresponding letter and adds to the result string
            # afterwards the total count is reduced by the amount generated above
            # repeat until total count is 0
            result += letter * int(num / n)
            num %= n
        return result