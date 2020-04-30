function convertBinToDec() {
    const binary = document.querySelector('#binaryInput').value;
    if (binary === '') return alert('Please, enter a binary number');
    binary.split('').map((element) => {
        if (element !== '0' && element !== '1') return alert('Please, enter a binary number');
    });
    const decimal = parseInt(binary, 2);
    document.querySelector('#decimalOutput').value = decimal;
    return true;
}

