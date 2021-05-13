/* eslint-disable radix */
window.onload = () => {
  const epochSource = document.querySelector('#epoch-source');
  const dateResult = document.querySelector('#date-result');
  const toDateButton = document.querySelector('#to-date-convert');

  toDateButton.onclick = () => {
    const date = new Date(parseInt(epochSource.value, 10));
    dateResult.value = date.toUTCString();
  };

  const dateSourceYear = document.querySelector('#date-source-year');
  const dateSourceMonth = document.querySelector('#date-source-month');
  const dateSourceDay = document.querySelector('#date-source-day');
  const dateSourceHr = document.querySelector('#date-source-hr');
  const dateSourceMin = document.querySelector('#date-source-min');
  const dateSourceSec = document.querySelector('#date-source-sec');

  const epochResult = document.querySelector('#epoch-result');
  const toEpochButton = document.querySelector('#to-epoch-convert');

  toEpochButton.onclick = () => {
    const date = new Date(
      Date.UTC(
        parseInt(dateSourceYear.value),
        parseInt(dateSourceMonth.value) - 1,
        parseInt(dateSourceDay.value),
        parseInt(dateSourceHr.value),
        parseInt(dateSourceMin.value),
        parseInt(dateSourceSec.value),
      ),
    );
    epochResult.value = date.getTime();
  };
};
