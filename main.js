const myLibrary = [];
const table = document.getElementById("myTableBody");
const btn = document.getElementById("addBook")
let rmvBtns = Array.from(document.querySelectorAll('.remove'));
let nameInput = document.querySelector('#name');
let authorInput = document.querySelector('#author');
let pagesInput = document.querySelector('#pages');
let readStatusInput = document.querySelector('#readStatus');

// Populate default data on page load
document.addEventListener("DOMContentLoaded", () => {
    defaultData();
});

// Default data
function defaultData (){
    new Book("One up on Wallstreet","Peter Lynch", 304,"Read").addBookToLibrary();
    new Book("Beyond Entrepreneurship 2.0","Jim Collins", 352,"Read").addBookToLibrary()
    createTable(myLibrary);
    updateNodelist();
}

class Book {
    constructor(name,author,pages, status){
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.readStatus = status;
        this.uniqueID = crypto.randomUUID();
    }
    addBookToLibrary(){
        myLibrary.unshift(this);
    }

    htmlMarkup(){
        return `<td>${this.name}</td>
            <td>${this.author}</td>
            <td>${this.pages}</td>
            <td>${this.readStatus}</td>
            <td class="leftOption"><button data-key="${this.uniqueID}" onclick="removeBook(this)" class="remove">Remove</button></td>
            <td class="rightOption"><button data-key="${this.uniqueID}" onclick="editBook(this)" class="edit">Edit</button></td>`
    } 
}

// Function to create the table
function createTable(arr) {
    table.innerHTML = "";
    arr.forEach((book, index) => {
        let template = `<tr><td>${index+1}</td>${book.htmlMarkup()}</tr>`;
        table.innerHTML += template;
    });
};

// reset form for new inputs
function resetForm(){
    document.getElementById('form').reset();
}

// Function to update nodelist of remove buttons
function updateNodelist(){
    rmvBtns = Array.from(document.querySelectorAll('.remove'));
}

// Add book by clicking button
btn.addEventListener('click', () => {
    let name = nameInput.value;
    let author = authorInput.value;
    let pages = pagesInput.value;
    let status = readStatusInput.value;
    new Book(name, author,pages, status).addBookToLibrary();
    createTable(myLibrary);
    resetForm();
    updateNodelist();
})

// When i press remove button
// It should remove that book from the book array
// Update the display
function removeBook(button){
    let val = button.getAttribute('data-key');
    let index = myLibrary.findIndex(book => book.uniqueID === val);
    if(index !== -1){
        myLibrary.splice(index,1);
        createTable(myLibrary);
        updateNodelist();
    }
}

