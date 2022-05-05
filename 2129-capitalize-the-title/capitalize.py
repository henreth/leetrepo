class Solution:
   def capitalizeTitle(self, title):
	    return " ".join([w.lower() if len(w) <= 2 else w.capitalize() for w in title.split()])