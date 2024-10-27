function pyramid(x) {
  const pyramidDiv = document.getElementById('pyramid');
  pyramidDiv.innerHTML = '';
  let line = '';
  for (let i = 1; i <= x; i++) {
    line = '';
    for (let j = 0; j <= i; j++) {
      line += (2 * j + 1) + ' ';
    }
    const row = document.createElement('div');
    row.textContent = line;
    pyramidDiv.appendChild(row);
  }
}

const userInput = prompt('Enter a number for the height of the pyramid:');
const x = parseInt(userInput);

if (!isNaN(x) && x > 0) {
  pyramid(x);
} else {
  alert('Please enter a valid positive number.');
}
