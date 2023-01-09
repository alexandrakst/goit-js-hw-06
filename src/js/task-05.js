const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');

inputRef.addEventListener('input', event => {
  if (event.currentTarget.value === '') {
    return (spanRef.textContent = 'Anonymous');
  } else return (spanRef.textContent = event.currentTarget.value);
});
