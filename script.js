var width= window.innerWidth;
console.log(width)

var Elements = document.getElementById('break');

setTimeout(() => {  fix() }, 2000);

function fix() {
if(width > 784) {
  console.log('true')
  Elements.remove();
}
}
  