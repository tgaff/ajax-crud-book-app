// wait for DOM to load before running JS
$(function() {

  // base API route
  var baseUrl = 'https://super-crud.herokuapp.com/books';

  // element to display list of books
  var $booksList = $('#books-list');

  // form for creating new books
  var $createBookForm = $("#create-book");

  // helper function to render books to view
  function renderBooks(books) {
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


  // listen for clicks on delete buttons
  $booksList.on('click', '.delete-book', function (event) {
    event.preventDefault();

    // find the corresponding book element
    var $book = $(this).closest('.book');

    // find the book's id (stored in HTML as `data-id`)
    var bookId = $book.attr('data-id');

    // DELETE request to delete book
    $.ajax({
      url: baseUrl + '/' + bookId,
      method: 'DELETE',
      success: function(data) {
        // remove the book from the page
        $book.remove();
      },
      error: function(){
        alert("failed to delete book")
      }
    });
  });


});


});


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

                "<a href='javascript:void(0)' class='btn btn-default btn-sm delete-book'>" +
                  "<span class='glyphicon glyphicon-trash'></span> Delete" +
                "</a>" +

              "</div>" +
              "<hr>" +
            "</div>"
          );
}
