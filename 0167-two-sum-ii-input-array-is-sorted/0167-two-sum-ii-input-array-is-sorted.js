/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let sol = [1,2];

    while (numbers[sol[0] - 1] + numbers[sol[1] - 1] != target){
        if (numbers[sol[0] - 1] + numbers[sol[1]] <= target) {
            sol[1] += 1;
        } else {
            sol[0] += 1;
            while (numbers[sol[0] - 1] + numbers[sol[1] - 1] > target) {
                sol[1] -= 1;
            }
        }
    }
    return sol;
};