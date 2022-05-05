class Solution:
    def divide(self, dividend: int, divisor: int) -> int:
        """
        :param int divisor
        :param int dividend
        :return int
        """
        if divisor == 0:
            raise ZeroDivisionError
        if abs(divisor) == 1:
            result = dividend if 1 == divisor else -dividend
            return min(2**31-1, max(-2**31, result))

        sign = ((dividend >= 0) == (divisor >= 0))

        result = 0

        _divisor = abs(divisor)
        _dividend = abs(dividend)

        while _divisor <= _dividend:
            r, _dividend = self._multi_divide(_divisor, _dividend)
            result += r

        result = result if sign else -result

        return min(2**31-1, max(-2**31, result))
    
    
    def _multi_divide(self, divisor, dividend):
        """
        :param int divisor
        :param int dividend
        :return tuple result, left_dividend
        """
        result = 0
        times_count = 1
        while divisor <= dividend:
            dividend -= divisor
            result += times_count
            times_count += times_count
            divisor += divisor
        return result, dividend