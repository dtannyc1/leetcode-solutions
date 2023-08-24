/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    // first build each line into an array
    // for each line, add spaces as necessary
    let lines = [];
    let line = {minLength: 0, data: []}

    for (let ii = 0; ii < words.length; ii++){
        let word = words[ii];

        if (line.data.length === 0) {
            line.data.push(word);
            line.minLength = word.length;
        } else {
            if (line.minLength + word.length + 1 <= maxWidth){
                line.data.push(word);
                line.minLength += word.length + 1;
            } else {
                lines.push(line.data);
                line.data = [word];
                line.minLength = word.length;
            }
        }
        if (ii === words.length - 1) {
            lines.push(line.data);
        }
    }

    // now that words are parsed, add spaces
    // numSpaces = numWords - 1
    // lineLength = sumLengthAllWords
    // spaceWidth[i] = Math.floor((maxWidth - lineLength) / numSpaces) maybe + 1

    lines = lines.map((line, jj) => {
        if (jj === lines.length-1) {
            let output = line.join(" ");
            while (output.length < maxWidth) {
                output += " ";
            }
            return output;
        } else {
            let lineLength = 0;
            for (let word of line) {
                lineLength += word.length;
            }
            let mappedLine = line[0];
            let numSpaces = line.length - 1;
            for (let ii = 0; ii < numSpaces; ii++){ // numSpaces is 3
                let spaceWidth = Math.floor((maxWidth - lineLength) / numSpaces) ; // 5 / 3 = 1
                if ((maxWidth - lineLength) % numSpaces > ii) { // 5 % 3 = 2 < ii
                    spaceWidth += 1;
                } 
                let space = " ";
                while (space.length < spaceWidth) {
                    space += " ";
                }
                mappedLine += space;
                mappedLine += line[ii+1];
            }
            while (mappedLine.length < maxWidth) {
                mappedLine += " ";
            }
            return mappedLine;
        }
    })

    // lines = lines.map(line => line.join(" ")); // naive joining just to check word parsing
    return lines;
};