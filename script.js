// Book class
class Book {
  constructor(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// UI class
class UI {
  static displayBooks(){
    const StoredBooks = [
      {
        title: "A",
        author: "B",
        isbn: "133"
      }
    ];
    const books = StoredBooks;
    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book){
    const list = document.querySelector("#book-list");
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
    `;

    list.appendChild(row);
  }

  static deleteBook(el){
    if(el.classList.contains("delete")){
      el.parentElement.parentElement.remove();
    }
  }
  static clearFields(){
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }
}


// Store class

// Event: display books
document.addEventListener("DOMContentLoaded", UI.displayBooks);

// Event: add a book
document.querySelector("#book-form").addEventListener("submit", (e) => {

  // Prevent default behavior
  e.preventDefault();

  // Store input data
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;

  // Create new book object
  const book = new Book(title, author, isbn);

  // Add the new object to the list and clear the input fields
  UI.addBookToList(book);
  UI.clearFields();
});

// Event: remove a book
document.querySelector("#book-list").addEventListener("click", (e) => {
  UI.deleteBook(e.target);
});

