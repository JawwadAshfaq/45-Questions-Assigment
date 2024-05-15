var guest = ["Afifa", "Ayesha", "Alishba"];
var cantAttend = "Afifa";
var newGuest = "Marium";
guest[guest.indexOf(cantAttend)] = newGuest;
guest.unshift("Ali");
var middleArray = "Jawwad";
var middleIndex = guest.length / 2;
guest.splice(middleIndex, 0, middleArray);
guest.push("Ahmed");
console.log("We can invite only two people for dinner");
while (guest.length > 2) {
    var removeGuest = guest.pop();
    console.log("\nSorry ".concat(removeGuest, " we can't invite you"));
}
guest.map(function (items) { return console.log("\n".concat(items, " You are still invited to dinner")); });
guest.pop();
guest.pop();
console.log(guest);
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
