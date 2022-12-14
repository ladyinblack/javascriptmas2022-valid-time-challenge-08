// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Valid Time</h1>`;

function validTime(str) {
  const time = str.split(':');
  let hour = parseInt(time[0]);
  let minute = parseInt(time[1]);

  if (hour > 23 || hour < 0) {
    return false;
  }

  if (minute > 59 || minute < 0) {
    return false;
  }
  // write code here.
  return true;
}

console.log(validTime('13:58'));
console.log(validTime('25:51'));
console.log(validTime('02:76'));
