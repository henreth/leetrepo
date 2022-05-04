var isPalindrome = function (s) {
	s = s.toLowerCase();
	let left = 0;
	let right = s.length - 1;

	while (left < right) {
		if (!isValid(s[left])) {
			left++;
			continue;
		}
		if (!isValid(s[right])) {
			right--;
			continue;
		}

		if (s[left] === s[right]) {
			left++;
			right--;
		} else {
			break;
		}
	}

	return right <= left;
};