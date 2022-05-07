/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let input = s.replace(/[^0-9a-z]/gi, '').toLowerCase()
    let reverse =''
    input.split('').map(i=>reverse=i+reverse)
    return input===reverse
};

// alt solution

// var isPalindrome = function (s) {
//     let input = s.replace(/[^0-9a-z]/gi, '').toLowerCase()
// 	let left = 0;
// 	let right = input.length - 1;

// 	while (left < right) {
// 		if (input[left] === input[right]) {
// 			left++;
// 			right--;
// 		} else {
// 			break;
// 		}
// 	}

// 	return right <= left;
// };
