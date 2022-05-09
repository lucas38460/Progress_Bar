const divRed = document.getElementById('progressing');
let count = 0;
let random = Math.floor(Math.random() * (15-3) + 3 );
function countRender(e) {
  count = count + e;
  divRed.style.width = `${count}px`;
}
setInterval(() => countRender(0.1), random);