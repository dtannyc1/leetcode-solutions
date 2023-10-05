/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    // let output = [];
    // let dict = ({});
    // let minCount = nums.length/3;

    // for (let num of nums){
    //     if (!dict[num]){
    //         dict[num] = [1, false];
    //     } else {
    //         dict[num][0]++;
    //     }

    //     if (dict[num][0] > minCount && !dict[num][1]){
    //         output.push(num);
    //         dict[num][1] = true;
    //     }
    // }

    // return output;

    // Solution 2: output cant be more than 2 numbers!
    let sol1 = 0, sol2 = 1, count1 = 0, count2 = 0;

    for (let num of nums){
        if (num === sol1){
            count1++;
        } else if (num === sol2){
            count2++;
        } else if (count1 === 0){
            count1 = 1;
            sol1 = num;
        } else if (count2 === 0){
            count2 = 1;
            sol2 = num;
        } else {
            count1--;
            count2--;
        }
    }

    // second pass to get an accurate count
    let output = [];
    count1 = 0;
    count2 = 0;
    for (let num of nums){
        if (num === sol1){
            count1++;
        } else if (num === sol2){
            count2++;
        }
    }
    if (count1 > nums.length / 3) output.push(sol1);
    if (count2 > nums.length / 3) output.push(sol2);
    return output;
};