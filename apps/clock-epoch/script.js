window.onload = () => {
  setInterval(() => {
    document.querySelector('#epoch-display').innerHTML = Math.floor(Date.now() / 1000);
  }, 1000);
};
