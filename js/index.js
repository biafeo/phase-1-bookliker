document.addEventListener('DOMContentLoaded', () => {
    function renderBookName(book) {
      let bookName = document.createElement('li');
      bookName.innerText = book.title;
      bookName.addEventListener('click', () => {
        displayBookDetails(book);
      });
      return bookName;
    }
  
    function initialize(bookData) {
      let bookNamesList = document.getElementById('book-names');
      bookData.forEach(book => {
        let bookNameItem = renderBookName(book);
        bookNamesList.appendChild(bookNameItem);
      });
    }
  
    function displayBookDetails(book) {
      let showPanel = document.getElementById('show-panel');
      showPanel.innerHTML = `
        <img src="${book.img_url}">
        <div class="content">
          <h4>${book.title}</h4>
          <h4>${book.subtitle}</h4>
          <p>${book.description}</p>
          <p>${book.author}</p>
          <button>Like</button>
          <button>Unlike</button>
        </div>
      `;
    }
  
    function fetchBookData() {
      fetch('http://localhost:3000/books')
        .then(response => response.json())
        .then(data => {
          initialize(data);
        });
    }
  
    fetchBookData();
  });