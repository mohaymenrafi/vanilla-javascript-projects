const busName = document.getElementById('bus');
const seatList = document.querySelector('.seat--list');
const seats = document.querySelectorAll('.row .seat:not(.seat__occupied)');
const total = document.getElementById('total');
const count = document.getElementById('count');

// get data from local storage and show in the UI
function rendeUI() {
  const selectedSeats = JSON.parse(localStorage.getItem('seatsIndex'));
  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('seat__selected');
      }
    });
  }
  const busIndex = localStorage.getItem('busNameIndex');
  if (busIndex !== null) {
    busName.selectedIndex = busIndex;
  }
}
rendeUI();

// userprice and count show
function updateInfo() {
  const seatCount = document.querySelectorAll('.row .seat.seat__selected');
  const seatsIndex = [...seatCount].map((item) => [...seats].indexOf(item));
  localStorage.setItem('seatsIndex', JSON.stringify(seatsIndex));
  //   console.log(seatsIndex);
  total.innerText = seatCount.length * busName.value;
  count.innerText = seatCount.length;
}

function saveBusInfo(index) {
  localStorage.setItem('busNameIndex', index);
}

// event on busname change
busName.addEventListener('change', (e) => {
  busName.value = +e.target.value;
  saveBusInfo(e.target.selectedIndex);
  updateInfo();
});

// seats event listener
seatList.addEventListener('click', (e) => {
  if (!e.target.classList.contains('seat__occupied')) {
    e.target.classList.toggle('seat__selected');
    updateInfo();
  }
});
// initializaton of info
updateInfo();
