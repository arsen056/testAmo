const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

const addNull = (strTime) => {
  return strTime
      .split(':')
      .map(e => e.length < 2 ? `0${e}` : e)
      .join(':')
}

const createTimerAnimator = () => {
  return (seconds) => {
    const timer = setInterval(() => {

      let hour = Math.trunc(seconds / 3600)
      let minutes = Math.trunc((seconds - hour * 3600) / 60)
      let timerSeconds = (seconds - hour * 3600) - minutes * 60

      if (seconds <= 0) {
        clearInterval(timer);
        timerEl.innerHTML = 'Время вышло!';
      } else {
        let strTimer = `${hour}:${minutes}:${timerSeconds}`;
        timerEl.innerHTML = addNull(strTimer);
      }
      seconds--
    }, 1000)
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', (event) => {
  const value = event.target.value

  if (/\D/g.test(event.data)) {
    event.target.value = value.slice(0, value.length - 1)
  }
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
