const addModal = document.querySelector('.add_book');
const modal = document.querySelector('.modal');
const submit = document.querySelector('.submit');
const overlay = document.getElementById('overlay');



addModal.addEventListener('click', openModal);
submit.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);




function openModal() {
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal() {
    modal.classList.remove('active');
    overlay.classList.remove('active');
}