const myLibrary = [];
const table = document.getElementById("myTableBody");
const btn = document.getElementById("addBook");

let nameInput = document.querySelector('#name');
let authorInput = document.querySelector('#author');
let pagesInput = document.querySelector('#pages');
let readStatusInput = document.querySelector('#readStatus');

btn.addEventListener('click', () => {
    let name = nameInput.value;
    let author = authorInput.value;
    let pages = pagesInput.value;
    let status = readStatusInput.value;
    addBookToLibrary(name, author,pages, status);
    createTable(myLibrary);
})

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
                            <td><button class="remove">Sample text</button></td>
                        </tr>`;
        // // const row = document.createElement('tr');
        // const row = table.insertRow(-1);
        // const serial = document.createElement('td');
        // serial.textContent = index + 1;
        // console.log(serial.textContent);
        // row.appendChild(serial);
        // for (const [key, value] of Object.entries(book)) {
        //     if(key == "uniqueID") return;
        //     //else console.log(`${key}: ${value}`);
        //     else {
        //         const cell = document.createElement('td');
        //         cell.textContent = value;
        //         console.log(value);
        //         row.appendChild(cell);
        //     }
        // } 
        // table.appendChild(row);
        table.innerHTML += template;
    });
}