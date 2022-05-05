 /**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // there is a max integer value that we can not go over in data
    let maxInteger = Math.pow(2, 31) - 1;
    let num = parseInt(Math.sign(x)*Math.abs(x).toString().split("").reverse().join(""))
    // if the abs of the reverse is larger than the max value, return 0
    return Math.abs(num) > maxInteger ? 0 : num
};