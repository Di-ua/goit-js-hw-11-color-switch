const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

const refs = {
    body: document.querySelector("body"),
    start: document.querySelector('button[data-action="start"]'),
    stop: document.querySelector('button[data-action="stop"]'),
}
// refs.body.dataset.action = false;

  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  let intervalId = null;

  refs.body.addEventListener('click', event => {
    if (event.target === refs.start) {
        onStartHandler();
    }
    if (event.target === refs.stop) {
        onStopHandler();
    }
});

  // refs.body.dataset.action = true;
  const changeRandomColor = () => {
      const colorBg = randomIntegerFromInterval(0, colors.length -1);
      document.body.style.backgroundColor = colors[colorBg];
      console.log(changeRandomColor);
  }
  const onStartHandler = () => {
      refs.start.disabled = true;
      refs.stop.disabled = false;
      intervalId = setInterval(changeRandomColor, 1000);
  }
  const onStopHandler = () => {
      refs.start.disabled = false;
      refs.stop.disabled = true;
      // refs.body.dataset.action = false;
      clearInterval(intervalId);
  }