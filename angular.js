angular.module('booksApp', [])
  .controller('BooksController', BooksController);

BooksController.$inject = [ '$http' ];
function BooksController(    $http   ) {
  var vm = this;
  var baseUrl = 'https://super-crud.herokuapp.com/books';
  vm.books = [];
  vm.getBooks = getIndex;
  console.log('hi');

  getIndex();

  function getIndex() {
    return $http.get(baseUrl)
      .success(function(data) {
        vm.books = data.books;
        console.log(data);
      })
      .error(function(error) { console.log(error) });
  }

}


