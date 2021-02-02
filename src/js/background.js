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
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  let intervalId = null;

  const changeColor = () => {
      const color = randomIntegerFromInterval(0, color.length -1);
      refs.body.style.backgroundColor = colors[color];
  }
  const startHandler = () => {
      refs.start.disabled = true;
      intervalId = setInterval(changeColor, 1000);
  }
  const stopHandler = () => {
      refs.start.disabled = false;
      refs.stop.disabled = true;
      clearInterval(intervalId);
  }