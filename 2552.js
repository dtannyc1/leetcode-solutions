//https://leetcode.com/problems/count-increasing-quadruplets/description/

// var countQuadruplets = function(nums) {
//     // SO SLOW
//     // nested for loop
//     // store indices of everything greater than current number

//     // go through list again, iterate once?
//     // at index i, every number greater is treated like a k
//     // look left to see how many are greater than nums[k] but less index than i
//     // look right to see how many are greater than nums[k]

//     // let order = new Array(nums.length).fill(0);
//     let order = Array.from(Array(nums.length), () => []);
//     for (let ii = 0; ii < nums.length; ii++) {
//         for (let jj = ii+1; jj < nums.length; jj++) {
//             if (nums[jj] > nums[ii]){
//                 if (order[ii]){
//                     order[ii].push(jj)
//                 } else {
//                     order[ii] = [jj];
//                 }
//             } else if (nums[jj] < nums[ii]) {
//                 if (order[jj]) {
//                     order[jj].push(ii)
//                 } else {
//                     order[jj] = [ii];
//                 }
//             }
//         }
//     }
//     // console.log(order)
//     let countQuads = 0;
//     for (let ii = 0; ii < order.length; ii++) {
//         order[ii].forEach(kk => {
//             // look for elements in order[kk] which have indices higher than ii but less than kk
//             order[kk].forEach(jj => {
//                 if (ii < jj && jj < kk){
//                     order[jj].forEach(ll => {
//                         if (ll > kk) {
//                             countQuads += 1;
//                         }
//                     })
//                 }
//             });
//         })
//     }
//     return countQuads;
// };

var countQuadruplets = function(nums) {
    // nested for loop
    // keep track of ii, kk

    // this is n^2
    let data = ({});
    for (let jj = 0; jj < nums.length; jj++) {
        data[jj] = ({});
        data[jj].left = 0;
        for (let kk = 0; kk < jj; kk++) {
            if (data[jj] > data[kk]) {
                data[jj].left += 1;
            }
        }
        for (let kk = jj+1; kk < nums.length; kk++) {
            let rightLess = 0;

        }
    }
}

console.log(countQuadruplets([1,3,2,4,5]) === 2)
console.log(countQuadruplets([1,2,3,4]) === 0)
console.log(countQuadruplets([2,5,3,1,4]) === 0)
