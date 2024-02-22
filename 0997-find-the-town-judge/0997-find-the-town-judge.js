/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    let relationships = {};
    
    for (let i = 1; i <= n; i++){
        relationships[i] = [];
    }
    
    for (let [a,b] of trust){
        if (a != b){
            if (relationships[a]){
                delete relationships[a];
            }
            if (relationships[b]){
                relationships[b].push(a);
            }
        } else {
            if (relationships[i]){
                delete relationships[i];
            }
        }
    }
    let judges = [];
    for (let [judge, trusters] of Object.entries(relationships)){
        if (trusters.length === n-1){
            judges.push(parseInt(judge));
        }
    }
    if (judges.length === 1){
        return judges[0];
    } else {
        return -1;
    }
};