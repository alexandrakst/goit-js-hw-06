const fontSizeController = document.querySelector('#font-size-control');
const textSizeChange = document.querySelector('#text');

fontSizeController.addEventListener('input', onControllerInput);

function onControllerInput(event) {
  return (textSizeChange.style.fontSize = event.currentTarget.value + 'px');
}
