angular.module('booksApp', [])
  .controller('BooksController', BooksController);

BooksController.$inject = [ '$http' ];
function BooksController(    $http   ) {
  var vm = this;
  var baseUrl = 'https://super-crud.herokuapp.com/books';
  vm.books = [];
  vm.getBooks = getIndex;
  vm.newBook = {};
  vm.createBook = create;
  vm.update = update;
  console.log('hi');

  // fetch data at start
  getIndex();

  function getIndex() {
    return $http.get(baseUrl)
      .success(function(data) {
        vm.books = data.books;
        console.log(data);
      })
      .error(function(error) { console.log(error) });
  }

  function create() {
    if (vm.newBook.title.length < 2) { return; }
    return $http.post(baseUrl, vm.newBook)
      .success(function(data) {
        vm.books.push(data);
        vm.newBook = {};
      });
  }

  function update(book) {
    console.log('updating book: ', book);
    var put = $http.put(baseUrl + '/' + book._id, book);
    book.editFormVisible = false;
    return put;
  }
}


