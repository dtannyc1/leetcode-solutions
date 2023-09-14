/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    let candies = new Array(ratings.length).fill(1);

    for (let ii = 1; ii < ratings.length; ii++){
        if (ratings[ii] > ratings[ii-1]){
            candies[ii] = candies[ii-1] + 1;
        }
    }
    let total = candies[candies.length-1];
    for (let ii = ratings.length-2; ii >=0; ii--){
        if (ratings[ii] > ratings[ii+1]){
            candies[ii] = Math.max(candies[ii+1] + 1, candies[ii]);
        }
        total += candies[ii];
    }
    console.log(candies)
    return total;
};