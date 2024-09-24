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
        `;
        bookTableBody.appendChild(row);
    });
}

// Load books when page loads
window.onload = loadBooks;
