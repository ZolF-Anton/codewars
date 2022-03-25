decodeMorse = function (morseCode) {
    console.log(MORSE_CODE['.--']);

    let rawArr = morseCode.trim().split(' ');
    return rawArr
        .map((code) => MORSE_CODE[code])
        .join()
        .replace(/,,,/gi, ' ')
        .replace(/,/gi, '');
};

decodeMorse1 = function (morseCode) {
    return morseCode
        .trim()
        .split(/  | /)
        .map((code) => MORSE_CODE[code] || ' ')
        .join('');
};
