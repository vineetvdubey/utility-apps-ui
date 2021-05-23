window.onload = () => {
  const celsiusToFahrenheit = (temp) => (temp * 9) / 5 + 32;

  const fahrenheitToCelsius = (temp) => ((temp - 32) * 5) / 9;

  const poundToKilogram = (weight) => weight / 2.20462;

  const kilogramToPound = (weight) => weight * 2.20462;

  const tempC = document.querySelector('#temp-c');
  const fResult = document.querySelector('#result-f');
  const toFButton = document.querySelector('#to-f');

  toFButton.onclick = () => {
    fResult.value = `${celsiusToFahrenheit(parseFloat(tempC.value, 10))} °F`;
  };

  const tempF = document.querySelector('#temp-f');
  const cResult = document.querySelector('#result-c');
  const toCButton = document.querySelector('#to-c');

  toCButton.onclick = () => {
    cResult.value = `${fahrenheitToCelsius(parseFloat(tempF.value, 10))} °C`;
  };

  const weightKg = document.querySelector('#weight-kg');
  const lbResult = document.querySelector('#result-lb');
  const toLbButton = document.querySelector('#to-lb');

  toLbButton.onclick = () => {
    lbResult.value = kilogramToPound(parseFloat(weightKg.value));
  };

  const weightLb = document.querySelector('#weight-lb');
  const kgResult = document.querySelector('#result-kg');
  const toKgButton = document.querySelector('#to-kg');

  toKgButton.onclick = () => {
    kgResult.value = poundToKilogram(parseFloat(weightLb.value));
  };
};
