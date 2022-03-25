function longestConsec(strarr, k) {
    if (strarr.length === 0 || strarr.length < k || k <= 0) return '';

    let arr = [];
    let Anser1;

    for (let indexOfElement = 0; indexOfElement < strarr.length; indexOfElement++) {
        let arrConcat = [];

        for (let i = indexOfElement; i < k + indexOfElement; i++) {
            arrConcat.push(strarr[i]);
        }

        arr.push(arrConcat.join(''));

        let = longestStr = arr.reduce(
            (max, n) => (max.length >= n.length ? (Anser1 = max) : (Anser1 = n)),
            ''
        );
    }
    console.log(Anser1);
}

function longestConsec1(strarr, k) {
    if (k <= 0 || k > strarr.length) {
        return '';
    }

    return strarr
        .map((value, index) => strarr.slice(index, index + k).join(''))
        .reduce((longest, current) => (current.length > longest.length ? current : longest));
}

//let s = ['zone', 'abigail', 'theta', 'form', 'libe', 'zas'];
let s1 = [
    'a',
    'bb',
    'ccc',
    'dddd',
    'fffff',
    'ggggggg',
    'kkkkkkkkkkkk',
    'oocccffuucccjjjkkkjyyyeehh',
];

//longestConsec(s, 2);

let s = ['zone', 'abigail', 'theta', 'form', 'libe', 'zas'];

longestConsec(s, 3); //, "oocccffuucccjjjkkkjyyyeehh"

let f1 =
    'xisuigppadmstlfxlvehuusjvbpvpyrpkpspcsakdhqiflrqobhzqbxwafqfenlvtivfcldqbpjdaebxulohgvcopuflusxgornnqwoozaegd';
let f2 =
    'tlfxlvehuusjvbpvpyrpkpspcsakdhqiflrqobhzqbxwafqfenlvtivfcldqbpjdaebxulohgvcopuflusxgornnqwoozaegdjnnjuulmdmdp';

function count1(f1, f2) {
    let fa1 = f1.split('');
    let fa2 = f2.split('');
    console.log(fa1);
    console.log(fa2);
}

count1(f1, f2);
