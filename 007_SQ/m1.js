function comp(array1, array2) {
    console.log(array1);
    console.log(array2);
    if (Array.isArray(array1) && Array.isArray(array2)) {
        let sqA = array1.map((elem) => elem * elem);
        let arr1 = sqA.sort((a, b) => a - b);
        let arr2 = array2.sort((a, b) => a - b);
        console.log(String(arr1));
        console.log(String(arr2));

        if (String(arr1) === String(arr2)) {
            return true;
        } else return false;
    } else return console.log('false end'); //false;
}

aaa = [4, 1, 1];
bbb = [4, 1, 1];

a1 = [3, 3, 10, 1, 5, 7];
b1 = [10, 9, 0, 10, 25, 49];

comp(aaa, bbb);

c = undefined || NaN || null;
