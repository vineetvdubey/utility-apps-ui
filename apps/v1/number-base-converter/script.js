window.onload = () => {
  const convertBase = (number, sourceBase, destinationBase) => parseInt(number, sourceBase).toString(destinationBase);

  const sourceBaseOption = document.querySelector('#source-base');

  const sourceNumberInput = document.querySelector('#source-num');

  const convertButton = document.querySelector('#convert');

  const binaryResult = document.querySelector('#binary-num');

  const octalResult = document.querySelector('#octal-num');

  const decimalResult = document.querySelector('#decimal-num');

  const hexadecimalResult = document.querySelector('#hexadecimal-num');

  convertButton.onclick = () => {
    const sourceNumber = sourceNumberInput.value;
    const sourceBase = sourceBaseOption.value;
    binaryResult.value = convertBase(sourceNumber, sourceBase, 2);
    octalResult.value = convertBase(sourceNumber, sourceBase, 8);
    decimalResult.value = convertBase(sourceNumber, sourceBase, 10);
    hexadecimalResult.value = convertBase(sourceNumber, sourceBase, 16).toUpperCase();
  };
};
