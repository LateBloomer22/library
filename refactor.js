const myLibrary = [];
const table = document.getElementById("myTableBody");
const btn = document.getElementById("addBook")
let rmvBtns = Array.from(document.querySelectorAll('.remove'));

class Book {
    constructor(name,author,pages, status){
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.readStatus = status;
        this.uniqueID = crypto.randomUUID();
    }
}
