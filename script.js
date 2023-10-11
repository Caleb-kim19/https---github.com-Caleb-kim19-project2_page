// script.js
const viewButtons = document.querySelectorAll('.view-button');
const deleteButtons = document.querySelectorAll('.delete-button');
const modal = document.getElementById('myModal');
const modalContent = document.getElementById('modalContent');
const closeModal = document.getElementById('closeModal');

viewButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const page = event.currentTarget.getAttribute('data-page');
        openModalWithPage(page);
    });
});

deleteButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // 사용자에게 삭제 여부를 확인하는 확인 창 표시
        const confirmDelete = confirm("예약을 삭제할까요?");
        if (confirmDelete) {
            // 여기에서 삭제 작업을 수행하거나 삭제 요청을 서버로 보낼 수 있습니다.
            // 삭제 작업을 완료하면 해당 카드를 삭제하거나 다른 조치를 취하실 수 있습니다.
            // 이 예제에서는 삭제 작업을 수행하지 않고 확인 메시지만 표시합니다.
            alert("예약이 삭제되었습니다.");
        } else {
            // 사용자가 "취소"를 클릭한 경우 아무 작업도 수행하지 않습니다.
        }
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
