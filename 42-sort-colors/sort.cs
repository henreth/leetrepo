public class Solution {
public void SortColors(int[] nums) 
    {
        int[] counts = new int[3];

        foreach (int x in nums)
        {
            counts[x]++;
        }
        int index = 0;
        for (int x = 0; x <= 2; x++)
        {
            while (counts[x]-- > 0)
            {
                nums[index++] = x;
            }
        }
    }
}