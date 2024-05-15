function make_shirt(size: string = "Large", printMessage: string = "I love TypeScript"){
    console.log(`Creating a ${size} size shirt with the name of ${printMessage} prints on shirt`);
}
make_shirt();
make_shirt("Medium", "I love React");
make_shirt("Small", "I love Typescript");


// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.