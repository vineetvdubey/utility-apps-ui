window.onload = () => {
  const baseUrl = 'https://api.mymemory.translated.net/get';
  const translateEnHiButton = document.querySelector('#translate-en-hi');
  const enStringSource = document.querySelector('#source-str-en');
  const hiStringResult = document.querySelector('#translated-str-hi');

  const updateResult = (translatedText) => {
    hiStringResult.value = translatedText;
  };

  const showError = (errorMsg, displayTimeSecs = 5) => {
    document.querySelector('#error-msg').innerHTML = errorMsg;
    document.querySelector('#error-msg').style.display = 'block';
    setTimeout(() => {
      document.querySelector('#error-msg').innerHTML = '';
      document.querySelector('#error-msg').style.display = 'none';
    }, displayTimeSecs * 1000);
  };

  translateEnHiButton.addEventListener('click', () => {
    if (enStringSource.value.trim() === '') {
      showError('Input cannot be blank');
      return;
    }
    const url = `${baseUrl}?q=${enStringSource.value}&langpair=en|hi&de=example@gmail.com`;
    const encodedUrl = encodeURI(url);
    const request = new Request(encodedUrl);
    fetch(request)
      .then((res) => res.json())
      .then((json) => {
        if (json.responseStatus === 200) {
          updateResult(json.responseData.translatedText);
        } else if (json.responseStatus === 429) {
          showError(json.responseData.translatedText, 10);
        } else {
          showError('Unexpected Error - Please try again later.');
        }
      })
      .catch(() => showError('Unexpected Error - Please try again later.'));
  });
};
