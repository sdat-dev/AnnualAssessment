let content = document.getElementsByClassName('content')[0];

const form = document.getElementById('form');
const log = document.getElementById('log');
form.addEventListener('submit', printReport);

function printReport(event) {
    log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`;
    event.preventDefault();
}