/**
 * @param {string} colors
 * @return {boolean}
 */
var winnerOfGame = function(colors) {
    // Brute Force Method:
    // let currentPlayer = "A";
    // let done = false;
    // let arr = colors.split("");
    // while (!done){
    //     done = true;
    //     for (let ii = 1; ii < arr.length-1; ii++){
    //         if (arr[ii] === currentPlayer && 
    //             arr[ii-1] === currentPlayer && 
    //             arr[ii+1] === currentPlayer){
    //                 done = false;
    //                 arr.splice(ii,1);
    //                 currentPlayer = currentPlayer === "A" ? "B" : "A";
    //                 break;
    //             }
    //     }
    // }
    // return currentPlayer === "B";

    let curLet = colors.charAt(0);
    let curStrLen = 1;
    let totalA = 0, totalB = 0;
    for (let ii = 1; ii < colors.length; ii++){
        if (colors.charAt(ii) === curLet){
            curStrLen++;
        } else {
            if (curStrLen > 2){
                if (curLet === "A"){
                    totalA += curStrLen - 2;
                } else {
                    totalB += curStrLen - 2;
                }
            }
            curLet = colors.charAt(ii);
            curStrLen = 1;
        }
    }
    if (curStrLen > 2){
        if (curLet === "A"){
            totalA += curStrLen - 2;
        } else {
            totalB += curStrLen - 2;
        }
    }
    
    return totalA > totalB;
};