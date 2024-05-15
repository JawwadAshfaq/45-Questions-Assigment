function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

function make_great(magicians: string[]){
    return magicians.map(name => `The Great ${name}`);
}

let magicians_names = ["Jawwad", "Ali"];

let great_magicians = make_great(magicians_names);

let magicians_names_copy = magicians_names.slice();

let great_magicians_copy = make_great(magicians_names_copy);


console.log(`Orignal Array\n`);
show_magicians(magicians_names);

console.log(`\nCopied Array`);
show_magicians(great_magicians_copy);



// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

