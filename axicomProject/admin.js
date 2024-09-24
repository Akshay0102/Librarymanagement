// Function to load books from localStorage
function loadBooks() {
    let books = JSON.parse(localStorage.getItem("books")) || [];
    const bookTableBody = document.querySelector("#book-table tbody");
    bookTableBody.innerHTML = ""; // Clear previous entries

    books.forEach(book => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${book.id}</td>
            <td>${book.title}</td>
            <td>${book.category}</td>
            <td><button onclick="removeBook('${book.id}')">Remove</button></td>
        `;
        bookTableBody.appendChild(row);
    });
}

// Function to add a new book
document.getElementById("add-book-form").addEventListener("submit", function(e) {
    e.preventDefault();

    let books = JSON.parse(localStorage.getItem("books")) || [];
    const title = document.getElementById("book-title").value;
    const category = document.getElementById("book-category").value;

    const newBook = {
        id: String(books.length + 1),
        title: title,
        category: category
    };

    books.push(newBook);
    localStorage.setItem("books", JSON.stringify(books));
    loadBooks(); // Reload book list

    // Clear input fields
    document.getElementById("book-title").value = "";
    document.getElementById("book-category").value = "";
});

// Function to remove a book
function removeBook(bookId) {
    let books = JSON.parse(localStorage.getItem("books")) || [];
    books = books.filter(book => book.id !== bookId);
    localStorage.setItem("books", JSON.stringify(books));
    loadBooks(); // Reload book list
}

// Load books when page loads
window.onload = loadBooks;
