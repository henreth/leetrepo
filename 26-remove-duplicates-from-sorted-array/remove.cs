public class Solution {
    public int RemoveDuplicates( int[] nums ) 
    {
        var count = ( nums.Length == 0 ? 0 : 1 );
        
        foreach( var num in nums )
            if ( nums[count-1] < num )
                nums[count++] = num;
                
        return count;
    }
}