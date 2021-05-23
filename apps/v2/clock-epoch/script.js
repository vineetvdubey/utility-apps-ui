window.onload = () => {
  setInterval(() => {
    document.querySelector('#epoch-display').innerHTML = Math.floor(Date.now() / 1000);
  }, 1000);

  setInterval(() => {
    const date = new Date();

    document.querySelector('#time-display-ist').innerHTML = new Intl.DateTimeFormat('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'long',
      hour12: false,
    }).format(date);
    document.querySelector('#time-display-utc').innerHTML = new Intl.DateTimeFormat('en-IN', {
      timeZone: 'UTC',
      dateStyle: 'full',
      timeStyle: 'long',
      hour12: false,
    }).format(date);
  }, 1000);
};
