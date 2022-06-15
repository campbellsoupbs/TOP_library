// Modal

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

// Books

let myLibrary = [];     //Array
let bookCount = 1;


// Book constructor

function Book(title, author, pages, isRead, count) {
    this.title = title;
    this.author = author;
    this.pages = pages,
    this.isRead = isRead;
    this.count = count;
}

// Add Book to Array
function addBookToLibrary(book) {
    myLibrary.push(book);
}


const form = document.querySelector("#addBookForm");

form.addEventListener('submit', logInfo);

function logInfo(e){
    e.preventDefault();
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const checkbox = document.querySelector("#checkbox");
    let isRead = "";
    if (checkbox.checked) {
        isRead = "yes";
    } else {
        isRead = "no";
    }
    let count = bookCount;

    const newBook = new Book(title, author, pages, isRead, count);
    addBookToLibrary(newBook);
    console.log(myLibrary);
    bookCount++;
};


