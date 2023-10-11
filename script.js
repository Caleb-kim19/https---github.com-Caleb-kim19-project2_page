// script.js
const viewButtons = document.querySelectorAll('.view-button');
const modal = document.getElementById('myModal');
const modalContent = document.getElementById('modalContent');
const closeModal = document.getElementById('closeModal');

viewButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const page = event.currentTarget.getAttribute('data-page');
        openModalWithPage(page);
    });
});

closeModal.addEventListener('click', () => {
    closeModalFunction();
});

document.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModalFunction();
    }
});

function openModalWithPage(page) {
    modalContent.innerHTML = `<iframe src="${page}" width="100%" height="400vh"></iframe>`;
    modal.style.display = 'block';
}

function closeModalFunction() {
    modal.style.display = 'none';
}



// index.html
viewButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const cardText = document.querySelectorAll('.card-text');
        const reservationInfo = cardText[index].innerText;

        localStorage.setItem('reservationInfo', reservationInfo);

        openModalWithPage('view1.html');
    });
});

// view1.html
document.addEventListener('DOMContentLoaded', function() {
    const cardDetails = document.getElementById('card-details');
    const reservationInfo = localStorage.getItem('reservationInfo');

    if (reservationInfo) {
        const detailsContainer = document.createElement('div');
        detailsContainer.innerHTML = `<p>${reservationInfo}</p>`;
        cardDetails.appendChild(detailsContainer);
    } else {
        cardDetails.innerHTML = '<p>No details available</p>';
    }
});
