var guest = ["Afifa", "Ayesha", "Alishba"];
var cantAttend = "Afifa";
var newGuest = "Marium";
guest[guest.indexOf(cantAttend)] = newGuest;
console.log("Welcome we found a bigger dinner table.");
guest.unshift("Ali");
var middleArray = "Jawwad";
var middleIndex = guest.length / 2;
guest.splice(middleIndex, 0, middleArray);
guest.push("Ahmed");
guest.map(function (items) { return console.log("".concat(items, " You are invited for a dinner")); });
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
