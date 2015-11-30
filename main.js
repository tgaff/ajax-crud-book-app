// wait for DOM to load before running JS
$(function() {

  // base API route
  var baseUrl = 'https://super-crud.herokuapp.com/books';

  // element to display list of books
  var $booksList = $('#books-list');

  // form for creating new books
  var $createBookForm = $("#create-book");

  // GET all books on page load
  $.ajax({
    url: baseUrl,
    method: "GET",
    success: function (data) {
      renderBooks(data.books);
    }
  });

  // listen for the submit event
  $createBookForm.on('submit', function (event) {
    event.preventDefault();

    var newBook = $(this).serialize(); // this grabs all the form data

    // POST request to create new book
    $.ajax({
      url: baseUrl,
      method: "POST",
      data: newBook,
      success: function (data) {
        console.log(data);
        renderBooks([data]);
      },
      error: function() {
        console.log("uh oh, failed to create book!")
      }
    });

    // reset the form
    $createBookForm[0].reset();
    $createBookForm.find('input').first().focus();
  });

});


// helper function to render books to view
function renderBooks(books) {
  var books_html = books.reverse().map(buildBookHTMLString);
  $booksList.prepend(books_html);
};


// helper function to build a single book element
function buildBookHTMLString(book){
  return (
            "<div class='book' data-id='" + book._id + "'>" +
              "<div class='row'>" +

                "<div class='col-xs-4'>" +
                  "<img src='" + book.image + "' class='img-responsive'>" +
                "</div>" +

                "<div class='col-xs-8'>" +
                  "<p><strong>Title:</strong> " + book.title + "</p>" +
                  "<p><strong>Author:</strong> " + book.author + "</p>" +
                  "<p><strong>Released:</strong> " + book.releaseDate + "</p>" +
                "</div>" +

              "</div>" +
              "<hr>" +
            "</div>"
          );
}
