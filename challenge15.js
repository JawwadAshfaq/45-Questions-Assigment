var guest = ["Afifa", "Ayesha", "Alishba"];
guest.map(function (myitem) { return console.log("".concat(myitem, " You are invited for a dinner")); });
var cantAttend = "Afifa";
console.log("".concat(cantAttend, " Not coming for a dinner"));
var newGuest = "Marium";
guest[guest.indexOf(cantAttend)] = newGuest;
console.log(guest);
guest.map(function (items) { return console.log("Hello, ".concat(items, " You are invited for a dinner")); });
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
