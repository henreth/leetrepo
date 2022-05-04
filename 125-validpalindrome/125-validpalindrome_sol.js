/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function (s) {
    let input = s.replace(/[^0-9a-z]/gi, '').toLowerCase()
	let left = 0;
	let right = input.length - 1;

	while (left < right) {
		if (input[left] === input[right]) {
			left++;
			right--;
		} else {
			break;
		}
	}

	return right <= left;
};
// this is actually slower than my answer