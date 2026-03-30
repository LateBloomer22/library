const myLibrary = [];
const table = document.getElementById("myTableBody");
const btn = document.getElementById("addBook");
let rmvBtns = Array.from(document.querySelectorAll('.remove'));

// Default data
function defaultData (){
    addBookToLibrary("One up on Wallstreet","Peter Lynch", 304, "Read");
    addBookToLibrary("Beyond Entrepreneurship 2.0","Jim Collins", 352, "Read");
    addBookToLibrary("The Intelligent Investor","Ben graham", 608, "Read");
    createTable(myLibrary);
    updateNodelist();
}

// Populate default data on page load
document.addEventListener("DOMContentLoaded", () => {
    defaultData();
});

let nameInput = document.querySelector('#name');
let authorInput = document.querySelector('#author');
let pagesInput = document.querySelector('#pages');
let readStatusInput = document.querySelector('#readStatus');

// Add book by clicking button
btn.addEventListener('click', () => {
    let name = nameInput.value;
    let author = authorInput.value;
    let pages = pagesInput.value;
    let status = readStatusInput.value;
    addBookToLibrary(name, author,pages, status);
    createTable(myLibrary);
    resetForm();
    updateNodelist();
})

// Remove a book from list
// rmvBtns.forEach(button)

// Function to update nodelist of remove buttons
function updateNodelist(){
    rmvBtns = Array.from(document.querySelectorAll('.remove'));
}

// reset form for new inputs
function resetForm(){
    document.getElementById('form').reset();
}

// the constructor to create the book object
function Book(name, author, pages, status) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.readStatus = status;
  this.uniqueID = crypto.randomUUID();
}

// Create book and add it to the existing library
function addBookToLibrary(name, author, pages, status) {
  let addedBook = new Book(name, author, pages, status);
  myLibrary.unshift(addedBook);
}

// Function to create the table
function createTable(arr) {
    table.innerHTML = "";
    arr.forEach((book, index) => {
        let template = `<tr>
                            <td>${index+1}</td>
                            <td>${book.name}</td>
                            <td>${book.author}</td>
                            <td>${book.pages}</td>
                            <td>${book.readStatus}</td>
                            <td><button data-key="${book.uniqueID}" onclick="removeBook(this)" class="remove">Remove</button></td>
                        </tr>`;
        table.innerHTML += template;
    });
}

// When i press remove button
// It should remove that book from the book array
// Update the display

function removeBook(button){
    let val = button.getAttribute('data-key');
    let index = myLibrary.findIndex(book => book.uniqueID == val);
    if(index !== -1){
        myLibrary.splice(index,1);
        createTable(myLibrary);
        updateNodelist();
    }
}

