const divProress = document.getElementById("progress");

let count = 0;

function NomDeLaFunction(count) {
  return count++;
}

if (count != 100) {
  setInterval(NomDeLaFunction, 1000);
}

console.log(count);
