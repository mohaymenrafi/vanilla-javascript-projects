const container = document.querySelector('.container');
const button = document.getElementById('change-color');
const colorName = document.getElementById('color');

const randomColor = () => {
  let color = '';
  const colorCodes = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
  ];
  for (let i = 0; i < 6; i += 1) {
    const randomIndex = Math.floor(Math.random() * 15);
    color += colorCodes[randomIndex];
  }
  return color;
};

const handleClick = async () => {
  const color = randomColor();
  const res = await fetch(`https://www.thecolorapi.com/id?hex=${color}`);
  const data = await res.json();
  console.log(data.name.value);
  console.log(color);
  container.style.backgroundColor = `#${color}`;
  colorName.innerText = data.name.value;
};

button.addEventListener('click', handleClick);
