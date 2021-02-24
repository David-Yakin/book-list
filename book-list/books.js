// 1---> books constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// 3 -->UI Constructor
function UI() {}

//add a book to the list
UI.prototype.addBookToList = function (book) {
  const list = document.getElementById('bookList');
  //create tr element
  const row = document.createElement('tr');
  //Create the td
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href="#" class="delete">X</a></td>
  `
  list.appendChild(row);
}
//Clear Fields
UI.prototype.clearFields = function () {
  document.getElementById('title').value = "";
  document.getElementById('author').value = "";
  document.getElementById('isbn').value = "";
}
//Delete a book from the list
UI.prototype.deleteBook = function (target) {
  if (target.className === 'delete') {
    target.parentElement.parentElement.remove();
  }
};



// 2 --> create the eventlisteners 
document.getElementById('bookForm').addEventListener('submit', function (e) {
  //get the form values
  const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value;
  //create a book --> Create a book object
  const book = new Book(title, author, isbn);

  //console.log(book);

  //add book to list
  const ui = new UI();
  ui.addBookToList(book);

  //clear fields
  ui.clearFields();
  //Stops the Submit from sending the form
  e.preventDefault();
});
//Event Listenet for the Delete
document.getElementById('bookList').addEventListener('click', function (e) {

  const ui = new UI();
  //Delete Book
  ui.deleteBook(e.target);

  e.preventDefault();
});