const h2 = document.getElementById('hh');
console.log('hello');

function printerError(s) {
    let printStr = s.length;
    let strArr = [...s];
    let abcArr = [...'abcdefghijklm'];
    let badString = strArr.filter((elem) => !abcArr.includes(elem));
    return `${badString.length}/${printStr}`;
}
let s = 'aaaxbbbbyyhwawiwjjjwwm';

printerError(s);
//NOPQRSTUVWXYZ

let oldArr = [10, 20, 130, 70, 80, 12, 40, 50, 60, 90];
let includedArr = [10, 20, 70, 40];
let emptyArr = [];
let newArr = oldArr.filter((elem) => !includedArr.includes(elem));

// let newArr = oldArr.filter((elem) => {
//     return elem === includedArr[i];
// });

// let newArr = oldArr.filter((elem) => {
//     return (
//         elem ===
//         includedArr.map((elem) => {
//             return elem;
//         })
//     );
// });

///////////////////////////////BEST
/////////////////////////////

function printerError1(s) {
    return s.match(/[^a-m]/g).length + '/' + s.length;
}
