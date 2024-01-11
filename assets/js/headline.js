const text = document.querySelector('.headline');
const strText = text.textContent;
const splitText = strText.split('');

//remove headline from DOM
text.textContent = '';

for (let i = 0; i < splitText.length; i++) {
  text.innerHTML += '<span class="headline__letter">' + splitText[i] + '</span>';
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick () {
  const span = text.querySelectorAll('span')[char];
  
  span.classList.add('headline--animated');
  char++;
  
  if (char === splitText.length) {
    complete();
    return;
  }
}

function complete() {
  clearInterval(timer);
  timer = null;
}