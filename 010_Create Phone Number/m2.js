// Write a function that accepts an array of 10 integers (between 0 and 9),
//that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function createPhoneNumber(numbers) {
    let arr = ['('];
    let regExp = /[0-9]/gi;

    if (numbers.length === 10 && regExp.test(numbers.join(''))) {
        console.log(numbers.join(''));
        numbers.forEach((el, index) => {
            if (index === 3) {
                arr.push(') ');
            }
            if (index === 6) {
                arr.push('-');
            }
            arr.push(el);
            console.log(arr);
        });
        console.log(arr.join(''));
    }
}

function createPhoneNumber1(numbers) {
    console.log(numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3'));

    return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
}

function createPhoneNumber2(numbers) {
    console.log(numbers.reduce((p, c) => p.replace('x', c), '(xxx) xxx-xxxx'));

    return numbers.reduce((p, c) => p.replace('x', c), '(xxx) xxx-xxxx');
}
createPhoneNumber2(numbers);
