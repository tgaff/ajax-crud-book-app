
var baseUrl = 'https://super-crud.herokuapp.com/books';

var BooksContainer = React.createClass({
  getInitialState: function() {
    return { books: [] };
  },

  componentDidMount: function() {
    $.get(baseUrl)
    .success(function(data) {
      console.log(data);
      this.setState({books: data.books });
    }.bind(this));
  },

  // BooksContainer owns the books data
  // in order to let child components alter that data we need to pass
  //   functions down to them from here for them to call.
  addNewItem: function(book) {
    this.setState({books: this.state.books.concat(book) } );
  },

  render: function() {
    var rows = [];
    console.log('hi', this.state.books);
    this.state.books.forEach(function(book) {
      rows.push(
        <Book book={book} key={book._id} />
      );
    });

    return (
      <div id="books-list">
        <BookForm addNewItem={this.addNewItem} />
        {rows}
      </div>
    )
  }
});



var Book = React.createClass({
  getInitialState: function() {
    return {  };
  },

  componentDidMount: function() {
    console.log('my props', this.props);
    //console.log('my state', this.state);
  },

  render: function() {
    return (
      // repeat for each book
      <div className="book" data-id="{this.props.book._id}">
        <div className="row">
          <div className="col-xs-4">
            <img src={this.props.book.image} className="img-responsive" />
          </div>
          <div className="col-xs-8">
            <p><strong>Title:</strong> {this.props.book.title}</p>
            <p><strong>Author:</strong> {this.props.book.author}</p>
            <p><strong>Released:</strong> {this.props.book.releaseDate}</p>
            <a className="btn btn-default btn-sm edit-book">
              <span className="glyphicon glyphicon-pencil" /> Edit
            </a>
            <a className="btn btn-default btn-sm delete-book">
              <span className="glyphicon glyphicon-trash" /> Delete
            </a>
            <div>
              <br />
              <form className="update-book">
                <div className="form-group">
                  <input type="text" name="title" className="form-control" placeholder="Title" value={this.props.book.title} />
                </div>
                <div className="form-group">
                  <input type="text" name="author" className="form-control" placeholder="Author" value={this.props.book.author} />
                </div>
                <div className="form-group">
                  <input type="text" name="image" className="form-control" placeholder="Image" value={this.props.book.image} />
                </div>
                <div className="form-group">
                  <input type="text" name="releaseDate" className="form-control" placeholder="Release Date" value={this.props.book.releaseDate} />
                </div>
                <div className="form-group">
                  <input type="submit" className="btn btn-block btn-default" defaultValue="Update" />
                </div>
              </form>
            </div>
          </div>
        </div>
        <hr />
      </div>
      //  END repeat for each book
    );
  }
});


/*  Form for creating a new book */
var BookForm = React.createClass({
  render: function() {
    return (
      <form id="create-book" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input type="text" name="title" className="form-control" placeholder="Title"  autofocus ref="title" />
        </div>
        <div className="form-group">
          <input type="text" name="author" className="form-control" placeholder="Author" ref="author" />
        </div>
        <div className="form-group">
          <input type="text" name="image" className="form-control" placeholder="Image" ref="image" />
        </div>
        <div className="form-group">
          <input type="text" name="releaseDate" className="form-control" placeholder="Release Date" ref="releaseDate" />
        </div>
        <div className="form-group">
          <input type="submit" className="btn btn-block btn-primary" value="Save" />
        </div>
      </form>
    )
  },

  handleSubmit: function(e) {
    var vm = this;
    e.preventDefault();
    console.log('you submitted', this.refs.title.value, this.refs.author.value, this.refs.image.value, this.refs.releaseDate.value);
    var newBook = { title: this.refs.title.value,
                    author: this.refs.author.value,
                    image: this.refs.image.value,
                    releaseDate: this.refs.releaseDate.value
                  };
    $.post(baseUrl, newBook).success(function(result) {
      console.log('got response', result);
      // the books list isn't controlled here, we have to call a passed down function to update the parent component
      vm.props.addNewItem(result);
    });
  }
})


React.render(
  <BooksContainer></BooksContainer>,
  document.getElementById('react-target')
);
