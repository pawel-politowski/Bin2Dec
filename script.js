function convertBinToDec() {
    const binary = document.querySelector('#binaryInput').value;
    if (binary === '') return alert('Please, enter a binary number');
    binary.split('').map((element) => {
        if (element !== '0' && element !== '1') return alert('Please, enter a binary number');
    });
    const decimal = parseInt(binary, 2);
    document.querySelector('#decimalOutput').value = decimal;
    return true
}

function convertDecToBin() {
    const decimal2 = document.querySelector('#decimalInput').value;
    if (decimal2 === '' || typeof Number(decimal2) !== "number") {return alert('Please, enter a decimal number')};
    const binary2 = (decimal2 >>> 0).toString(2)
    document.querySelector('#binaryOutput').value = binary2;
    return true
}

