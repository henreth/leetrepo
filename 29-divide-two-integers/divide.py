class Solution:
    def divide(self, dividend: int, divisor: int) -> int:
        negative = ((dividend<0 and divisor >0) or (dividend>0 and divisor <0));
        ret = 0;       
        dividend,divisor=abs(dividend),abs(divisor);
        count,sub = 1, divisor;

        while(dividend >= divisor):
            if(dividend>=sub):
                dividend-=sub;
                ret+=count;
                sub=(sub<<1);
                count=(count<<1);
            else:
                sub=(sub>>1);
                count=(count>>1);

        if(negative):
            ret=-ret;
        return min(max(-2147483648,ret),2147483647);