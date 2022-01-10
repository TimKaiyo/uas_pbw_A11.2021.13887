const container = document.querySelector('.layout');
const seats = document.querySelectorAll('.baris .kursi:not(.penuh)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
const serviceP = document.getElementById('service');

let ticketPrice = +movieSelect.value;
let ServicePrice = +serviceP.value;

function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}

function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.baris .kursi.dipilih');
    const selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
    setMovieData(movieSelect.selectedIndex, movieSelect.value);
}

movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
});

container.addEventListener('click', e => {
    if (
        e.target.classList.contains('kursi') &&
        !e.target.classList.contains('penuh')
    ) {
        e.target.classList.toggle('dipilih');

        updateSelectedCount();
    }
});