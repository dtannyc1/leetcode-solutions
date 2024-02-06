/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    // Solution 1: slow approach, O(n^2)
//     // create dicts for each str, char -> count
//     let dicts = strs.map(str => {
//         let dict = {};
//         for (let char of str){
//             dict[char] ||= 0;
//             dict[char]++;
//         }
//         dict['length'] = str.length;
//         return dict;
//     });
    
//     // compare dicts and regroup
//     let groups = []; // eventually should store as [[1], [0,2], [3,4]]
//     for (let i=0; i < dicts.length; i++){
//         let foundMatch = false;
//         let dict = dicts[i];
//         for (let j=0; j < groups.length; j++){
//             let group = groups[j];
//             let option = dicts[group[0]];
//             if (option.length === dict.length){
//                 foundMatch = true;
//                 for (let [key, val] of Object.entries(option)){
//                     if (dict[key] != val){
//                         foundMatch = false;
//                         break;
//                     }
//                 }
//             }
//             if (foundMatch) {
//                 group.push(i);
//                 break;
//             }
//         }
//         if (!foundMatch){
//             groups.push([i]);
//         }
//     }
    
//     // remap to original strings
//     for (let i = 0; i < groups.length; i++){
//         groups[i] = groups[i].map(ind => strs[ind])
//     }
//     return groups;
    
    // create a dict, sortedAnagram -> [word1, word2]
    let dict = {}; 
    
    for (let str of strs){
        let key = [...str].sort().join('');
        dict[key] ||= [];
        dict[key].push(str);
    }
    
    return Object.values(dict);
};