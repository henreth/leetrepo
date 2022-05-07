public class Solution {
  
    public int StrStr(string haystack, string needle)
        {
            if (string.IsNullOrEmpty(needle))
                return 0;

            int len = haystack.Length - needle.Length;
            for (int i = 0; i <= len; i++)
            {
                int j = i;
                foreach (var ch in needle)
                {
                    if (ch != haystack[j])
                        break;
                    j++;
                }

                if (j - i != needle.Length)
                    continue;

                return i;
            }

            return -1;
        }
}


