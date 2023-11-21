/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
    let vowels = {'a': 6, "e": 7, "i": 8,"o":9,"u":10,'A': 1, "E": 2, "I": 3,"O":4,"U":5}
    let found = [];
    let inds = [];
    for (let i=0; i < s.length; i++){
        let char = s.charAt(i);
        if (vowels[char]){
            found.push(char);
            inds.push(i);
        }
    }

    found.sort((a,b) => {
        if (vowels[a] < vowels[b]) return -1;
        if (vowels[a] > vowels[b]) return 1;
        return 0;
    });

    // console.log(found)

    let output = s.split("");
    for (let i = 0; i < found.length; i++){
        output[inds[i]] = found[i];
    }
    // console.log(output)

    return output.join("");
};