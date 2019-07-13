// define the mash function
function mash() {
    let result = "house";
    return result;
}

// call the mash function and store whatever's being returned in the message variable
// REMEMBER: when a function returns something, the things that's being returned REPLACES the function call
// after the mash function returns, the next line would read: let message = "house";
let message = mash();
console.log(message);

function getHome() {
    // declare a houseArray
    let houseArray =  ['Mansion', 'Apartment', 'Shack', 'House'];

    // generate a random number by calling the randomNumberGenerator
    let randomIndex = randomNumberGenerator(4);

    // get randomHouse from the houseArray using randomIndex
    let randomHouse = houseArray[randomIndex];
    return randomHouse;
}

function randomNumberGenerator(num) {
    // the algorithm to generate random numbers 
    let decimal = Math.random(); 
    let adjustedNumber = decimal * num;
    let randomInteger = Math.floor(adjustedNumber);
    return randomInteger;
}

let randomHouse = getHome();


































// mash function
function mash() {
    let house = getHome();
    let childrenCount = getChildrenCount();
    let car = getCar();

    let message = "You will live in a " + house + ", and you will have " + childrenCount + " kids and you’ll drive a " + car + "!";
    
    if (house == 'Mansion' && childrenCount == 0 && car == 'Lambo') {
        return message + " You're living a GOOOOOOOD life!";
    }
    else {
        return message;
    }
}

function getHome() {
    let myArray = ['Mansion', 'Apartment', 'Shack', 'House', 'Dirty New York'];
    if (process.argv[2]) {
        let userInput = process.argv[2];
        myArray.push(userInput);
    }
    let randomInteger = getRandomInt(myArray.length);
    return myArray[randomInteger];
}

function getRandomInt(num) {
    // the algorithm to generate random numbers 
    let decimal = Math.random(); 
    let adjustedNumber = decimal * num;
    let randomInteger = Math.floor(adjustedNumber);
    return randomInteger;
}

function getChildrenCount() {
    let chance = getRandomInt(2);
    
    if (chance == 0) {
        if (process.argv[3]) {
            let userInput2 = process.argv[3];
            return userInput2;
        }
        else {
            let num = getRandomInt(101);
            return num; 
        }
    }
    else {
        let num = getRandomInt(101);
        return num;
    }
}

function getCar() {
    let myArray = ['Lambo', 'Batman Mobile', 'Box with Wheels', 'Cutesy Car'];
    if (process.argv[4]) {
        let userInput3 = process.argv[4];
        myArray.push(userInput3);
    }
    let randomInteger = getRandomInt(myArray.length);
    return myArray[randomInteger];
}

let result = mash();
console.log(result);