// wait for DOM to load before running JS
$(function() {

  // base API route
  var baseUrl = 'https://super-crud.herokuapp.com/books';

  // element to display list of books
  var $booksList = $('#books-list');

  // helper function to render all books to view
  var renderBooks = function(books) {
    var books_html = books.reverse().map(buildBookHTMLString);
    $booksList.prepend(books_html);
  };

  // GET all books on page load
  $.ajax({
    url: baseUrl,
    method: "GET",
    success: function (data) {
      renderBooks(data.books);
    }
  });

});


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
