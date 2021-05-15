window.onload = () => {
  const countCharacterTextArea = document.querySelector('#source-character-counter');
  const countCharacterResult = document.querySelector('#character-count');
  const countCharacterButton = document.querySelector('#count-character');
  const countWordTextArea = document.querySelector('#source-word-counter');
  const countWordResult = document.querySelector('#word-count');
  const countWordButton = document.querySelector('#count-word');

  countCharacterButton.onclick = () => {
    countCharacterResult.value = countCharacterTextArea.value.length;
  };

  countWordButton.onclick = () => {
    const content = countWordTextArea.value;
    if (content === '') {
      countWordResult.value = '0';
    } else {
      countWordResult.value = countWordTextArea.value.trim().split(/\s+/).length;
    }
  };
};
