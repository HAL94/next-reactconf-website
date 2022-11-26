export const createButtonRipple = (event, rippleClassName) => {
  const button = event.currentTarget;

  const circle = document.createElement('span');
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
  circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
  circle.classList.add(`${rippleClassName}`);

  const ripple = button.getElementsByClassName(`${rippleClassName}`)[0];

  if (ripple) {
    ripple.remove();
  }

  button.appendChild(circle);
};
