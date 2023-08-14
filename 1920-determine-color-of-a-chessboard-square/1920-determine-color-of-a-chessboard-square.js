/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
    return ((coordinates.charCodeAt(0) - 97) + (coordinates.charCodeAt(1))) % 2 === 0;
};