function isValidWalk(walk) {
    const wayArr = ['n', 's', 'w', 'e'];
    function countWay(way) {
        let arr = walk.filter((elem) => [way].includes(elem));
        return arr;
    }
    let n = countWay(wayArr[0]);
    let s = countWay(wayArr[1]);
    let w = countWay(wayArr[2]);
    let e = countWay(wayArr[3]);
    console.log(n, s, w, e);

    if (walk.length % 2 !== 0) {
        return console.log('false 1');
    } else if (n.length === s.length && w.length === e.length) {
        return console.log('true');
    } else return console.log('false 2');
}

isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']);

// function isValidWalk(walk) {
//     var res = { n: 0, w: 0, s: 0, e: 0 };
//     walk.forEach((c) => res[c]++);
//     return walk.length === 10 && res.n == res.s && res.e == res.w;
// }
