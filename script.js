const layout = document.querySelector('.layout');
const seats = document.querySelectorAll('.baris .kursi:not(.penuh)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
const service = document.getElementById('service');

let ticketPrice = +movieSelect.value;

function countUpdate() {
    const selectedSeats = document.querySelectorAll('.baris .kursi.dipilih');
    const selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;
    total.innerText = (ticketPrice + 1000) * selectedSeatsCount;
    Data(movieSelect.selectedIndex, movieSelect.value);
}

function seatsUpdate() {

}

movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    Data(e.target.selectedIndex, e.target.value);
    countUpdate();
});

layout.addEventListener('click', e => {
    if (
        e.target.classList.contains('kursi') &&
        !e.target.classList.contains('penuh')
    ) {
        e.target.classList.toggle('dipilih');
        countUpdate();
    }
});
