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
        const confirmDelete = confirm("예약을 삭제할까요?");
        if (confirmDelete) {
            alert("예약이 삭제되었습니다.");
        } else {
            // 사용자가 취소를 선택한 경우의 처리
        }
    });
});

function openModalWithPage(page) {
    modalContent.innerHTML = `<iframe src="${page}" width="100%" height="400vh"></iframe>`;
    modal.style.display = 'block';
}

closeModal.addEventListener('click', () => {
    closeModalFunction();
});

document.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModalFunction();
    }
});

function closeModalFunction() {
    modal.style.display = 'none';
}
