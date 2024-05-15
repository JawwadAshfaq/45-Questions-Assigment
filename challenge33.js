var mynumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, mynumbers_1 = mynumbers; _i < mynumbers_1.length; _i++) {
    var oneNumber = mynumbers_1[_i];
    var ordinalEnding = void 0;
    if (oneNumber === 1) {
        ordinalEnding = "st";
    }
    else if (oneNumber === 2) {
        ordinalEnding = "nd";
    }
    else if (oneNumber === 3) {
        ordinalEnding = "rd";
    }
    else if (oneNumber === 4) {
        ordinalEnding = "th";
    }
    else {
        ordinalEnding = "th";
    }
    console.log("".concat(oneNumber, " ").concat(ordinalEnding));
}
// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
