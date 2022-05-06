class Solution(object):
    def isAnagram(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
        # sorted(list) -> splits and sorts the supplied list 
        sorted_s = "".join(sorted(s))
        sorted_t = "".join(sorted(t))
        
        return sorted_s == sorted_t

    # alt solution
    def isAnagram1(self, s, t):
        return collections.Counter(s) == collections.Counter(t)