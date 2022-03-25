/*
Write a function that when given a URL as a string, 
parses out just the domain name and returns it as a string. 
For example:
*/

function domainName(url) {
    const regHttp = /(http|https):\/\//gi;
    const regHttpWWW = /(http|https):\/\/www\./gi;
    const regWWW = /www\./gi;

    const regDot = /\./gi;
    let firstIndex;

    let endSearch = url.search(regDot);
    console.log('####endSearch:', endSearch);

    if (regHttp.test(url)) {
        console.log('Test one passed');
        firstIndex = regHttp.lastIndex;

        if (regHttpWWW.test(url)) {
            firstIndex = regHttpWWW.lastIndex;
            console.log('endSearch', endSearch);
            console.log('firstIndex', firstIndex);
            let a = url.split('');
            a.splice(0, firstIndex);
            console.log(' a.indexOf(.)', a.indexOf('.'));
            let b = a.slice(0, a.indexOf('.')).join('');
            // let c = b.slice(firstIndex).join('');
            console.log('WWWW a:', a);
            console.log('WWWW b:', b);
            //console.log('WWWW c:', c);
            return b;
        } else {
            let aa = url.split('', endSearch);
            console.log('non www:', aa);
            let bb = aa.slice(firstIndex).join('');
            console.log('non www:', bb);
            return bb;
        }
    }

    if (regWWW.test(url)) {
        console.log('Test one passed', url);
        let aaa = url.split('');
        aaa.splice(0, endSearch + 1);
        let bbb = aaa.slice(0, aaa.indexOf('.')).join('');
        console.log('aaa', aaa);
        console.log('aaa', bbb);
    } else {
        let aaa = url.split('', endSearch).join('');
        console.log(aaa);
    }

    //your code here
}

//urlM = 'http://github.com/carbonfive/raygun';
//urlM = 'http://www.google.co.jp';
urlM = 'www.xakep.ru';
domainName(urlM);

function domainName1(url) {
    url = url.replace('https://', '');
    url = url.replace('http://', '');
    url = url.replace('www.', '');
    return url.split('.')[0];
}

function domainName2(url) {
    return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
}

function domainName(url) {
    return url.replace('http://', '').replace('https://', '').replace('www.', '').split('.')[0];
}
