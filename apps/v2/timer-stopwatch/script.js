const currentTimeMillis = () => Date.now();
const currentTimeSecs = () => Math.floor(currentTimeMillis() / 1000);

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const beep = (durationInMs = 250) => {
  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();
  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  gainNode.gain.value = 0.8;
  oscillator.frequency.value = 500;
  oscillator.type = 'sine';

  oscillator.start();
  setTimeout(() => {
    oscillator.stop();
  }, durationInMs);
};

window.onload = () => {
  const minsSourceElement = document.querySelector('#mins-source');
  const secsSourceElement = document.querySelector('#secs-source');
  const minsElement = document.querySelector('#mins');
  const secsElement = document.querySelector('#secs');
  const startButton = document.querySelector('#start');
  let runningTimerInterval;

  const timer = (mins, secs) => {
    const time = parseInt(mins, 10) * 60 + parseInt(secs, 10);
    const start = currentTimeSecs();
    runningTimerInterval = setInterval(() => {
      const timeleft = time - (currentTimeSecs() - start);
      if (timeleft <= 0) {
        clearInterval(runningTimerInterval);
        beep();
        minsElement.innerHTML = '00';
        secsElement.innerHTML = '00';
      } else {
        const minutes = Math.floor((timeleft % (60 * 60)) / 60);
        const seconds = Math.floor(timeleft % 60);
        minsElement.innerHTML = String(minutes).padStart(2, '0');
        secsElement.innerHTML = String(seconds).padStart(2, '0');
      }
    }, 200); // the smaller this number, the more accurate the timer will be
  };

  startButton.addEventListener('click', () => {
    clearInterval(runningTimerInterval);
    timer(minsSourceElement.value, secsSourceElement.value);
  });

  const stopwatchStartButton = document.querySelector('#stopwatch-start');
  const stopwatchStopButton = document.querySelector('#stopwatch-stop');
  const stopwatchResetButton = document.querySelector('#stopwatch-reset');
  const swMinsElement = document.querySelector('#sw-mins');
  const swSecsElement = document.querySelector('#sw-secs');
  const swMsElement = document.querySelector('#sw-ms');

  let runningStopwatchInterval;
  const stopwatch = () => {
    const start = currentTimeMillis();
    runningStopwatchInterval = setInterval(() => {
      const timeGained = currentTimeMillis() - start;
      const minutes = Math.floor((timeGained % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeGained % (1000 * 60)) / 1000);
      const millis = Math.floor((timeGained % 1000) / 10);
      swMinsElement.innerHTML = String(minutes).padStart(2, '0');
      swSecsElement.innerHTML = String(seconds).padStart(2, '0');
      swMsElement.innerHTML = String(millis).padStart(2, '0');
    }, 50);
  };

  stopwatchStartButton.addEventListener('click', () => {
    stopwatchStartButton.style.display = 'none';
    stopwatchStopButton.style.display = 'inline';
    stopwatch();
  });

  stopwatchStopButton.addEventListener('click', () => {
    stopwatchStopButton.style.display = 'none';
    stopwatchResetButton.style.display = 'inline';
    clearInterval(runningStopwatchInterval);
  });

  stopwatchResetButton.addEventListener('click', () => {
    swMinsElement.innerHTML = '00';
    swSecsElement.innerHTML = '00';
    swMsElement.innerHTML = '00';
    stopwatchResetButton.style.display = 'none';
    stopwatchStartButton.style.display = 'inline';
  });
};
