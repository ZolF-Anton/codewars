// Write a function, which takes a non-negative integer (seconds) as input
// and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

let seconds = 3600;

function humanReadable(seconds) {
    let hours = Math.floor(seconds / 60 / 60);
    let isoDate = new Date(seconds * 1000).toISOString();

    if (seconds >= 359999) {
        return '99:59:59';
    }

    if (seconds <= 3599) {
        return isoDate.substring(11, 19);
    } else {
        console.log(hours + isoDate.substring(13, 19));
        if (hours < 10) {
            return `0${hours}${isoDate.substring(13, 19)}`;
        }
        return hours + isoDate.substring(13, 19);
    }
}

humanReadable(seconds);

function humanReadable1(seconds) {
    return [seconds / 3600, (seconds % 3600) / 60, seconds % 60]
        .map(function (v) {
            v = Math.floor(v).toString();
            return v.length == 1 ? '0' + v : v;
        })
        .join(':');
}

function humanReadable2(seconds) {
    var pad = function (x) {
        return x < 10 ? '0' + x : x;
    };
    return (
        pad(parseInt(seconds / (60 * 60))) +
        ':' +
        pad(parseInt((seconds / 60) % 60)) +
        ':' +
        pad(seconds % 60)
    );
}

function humanReadable3(t) {
    function d(v) {
        return ('0' + v).slice(-2);
    }

    var s = t % 60;
    var m = ((t / 60) | 0) % 60;
    var h = (t / 3600) | 0;

    console.log('#####', d(h) + ':' + d(m) + ':' + d(s));
    return d(h) + ':' + d(m) + ':' + d(s);
}

humanReadable3(seconds);
