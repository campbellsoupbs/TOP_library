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
};

// Add Book to Array
function addBookToLibrary(book) {
    myLibrary.push(book);
};


const form = document.querySelector("#addBookForm");
const grid = document.querySelector(".grid");

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
    createCard(newBook);
    console.log(myLibrary);
    bookCount++;
};



// Creates new cards 

function createCard(book){
    const div = document.createElement('div');
    div.className = 'card';
    div.classList.add(`${book.count}`);

    const pTitle = document.createElement('p');
    pTitle.appendChild(document.createTextNode(`Title: ${book.title}`));
    div.appendChild(pTitle);

    const pAuthor = document.createElement('p');
    pAuthor.appendChild(document.createTextNode(`Author: ${book.author}`));
    div.appendChild(pAuthor);

    const pPages = document.createElement('p');
    pPages.appendChild(document.createTextNode(`Title: ${book.pages}`));
    div.appendChild(pPages);

    const read_btn = document.createElement('button');
    read_btn.className = 'read_btn';
    read_btn.classList.add(`${book.isRead}`);
    read_btn.appendChild(document.createTextNode("Read"));
    div.appendChild(read_btn);

    const delete_btn = document.createElement('button');
    delete_btn.className = 'delete_btn';
    delete_btn.appendChild(document.createTextNode("Delete"));
    div.appendChild(delete_btn);


    grid.appendChild(div);     

    read_btn.addEventListener('click', toggleRead); //These event listeners are here bc card must be created 1st
    delete_btn.addEventListener('click', deleteBook);
}


// Toggle isRead value in Book object + read button appearance

const read_btn = document.querySelector(".read_btn");


function toggleRead(e) {
    const cardDiv = e.target.closest("div");
    let number = Array.from(cardDiv.classList)[1];
    let index = Number(number) - 1;
    console.log(cardDiv);
    console.log(index);
    if (e.target.classList.contains("yes")) {
        e.target.classList.remove("yes");       //Changes color
        changeReadNo(index);                    //Changes Book.isRead value
    } else {
        e.target.classList.add("yes");
        changeReadYes(index);
    }
   
    console.log(myLibrary); 
}

        // Changes isRead value in Book Objects
function changeReadNo(index) {
    for (var i = 0; i < myLibrary.length; i++) { 
        if (i == index) {
            myLibrary[i].isRead = "no";
        }
    }; 
}

function changeReadYes(index) {
    for (var i = 0; i < myLibrary.length; i++) { 
        if (i == index) {
            myLibrary[i].isRead = "yes";
        }
    }; 
}




// Delete Button = remove from cards and myLibrary Array

const delete_btn = document.querySelector(".delete_btn");

function deleteBook(e) {
    const cardDiv = e.target.closest("div");
    let number = Array.from(cardDiv.classList)[1];
    let index = Number(number);
    removeBook(index);                              //Removes Book from myLibrary array

    const grid = document.querySelector(".grid");
    grid.removeChild(cardDiv);                      //Removes card from page

    console.log(myLibrary);
}


function removeBook(index) {
    for (var i = 0; i < myLibrary.length; i++) { 
        if (myLibrary[i].count === index) {
            myLibrary.splice(i, 1);
        }
    };
}