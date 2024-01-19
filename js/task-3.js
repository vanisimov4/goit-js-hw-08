const textInput = document.querySelector('input#name-input');
const output = document.querySelector('span#name-output');

textInput.addEventListener('input', event => {
  const textTrim = event.currentTarget.value.trim();
  output.textContent = textTrim === '' ? 'Anonymous' : textTrim;
});
