// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
    let reg = /[A-Z]/g;
    let arrAll = [0];
    let arrStr = [];

    while (reg.exec(string) !== null) {
        arrAll.push(reg.lastIndex - 1);
    }

    for (let i = 0; i < arrAll.length; i++) {
        arrStr.push(string.substring(arrAll[i], arrAll[i + 1]));
    }

    console.log(arrStr.join(' '));
    return arrStr.join(' ');
}

let string = 'camelCasingQweSw';
solution(string);

function solution1(string) {
    string = string.split('').map(function (el) {
        if (el === el.toUpperCase()) {
            el = ' ' + el;
        }
        return el;
    });
    return string.join('');
}

const solution2 = (string) => string.replace(/[A-Z]/g, ' $&');
