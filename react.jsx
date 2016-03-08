
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
       <div class="book" data-id={this.props.book._id} >
          <div class="row">

            <div class="col-xs-4">
              <img src={this.props.book.image} className="img-responsive"/>
            </div>

            <div class="col-xs-8">
              <p><strong>Title:</strong> {this.props.book.title}</p>
              <p><strong>Author:</strong> {this.props.book.author}</p>
              <p><strong>Released:</strong> {this.props.book.releaseDate}</p>

              <a class="btn btn-default btn-sm edit-book" >
                <span class="glyphicon glyphicon-pencil"></span> Edit
              </a>

              <a class="btn btn-default btn-sm delete-book" >
                <span class="glyphicon glyphicon-trash"></span> Delete
              </a>

              <div >
                <br />
                <form class="update-book" >
                  <div class="form-group">
                    <input type="text" name="title" class="form-control" placeholder="Title" val="this.props.book.title" />
                  </div>
                  <div class="form-group">
                    <input type="text" name="author" class="form-control" placeholder="Author" val="this.props.book.author" />
                  </div>
                  <div class="form-group">
                    <input type="text" name="image" class="form-control" placeholder="Image" val="this.props.book.image" />
                  </div>
                  <div class="form-group">
                    <input type="text" name="releaseDate" class="form-control" placeholder="Release Date" val="{this.props.book.releaseDate}" />
                  </div>
                  <div class="form-group">
                    <input type="submit" class="btn btn-block btn-default" value="Update" />
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


React.render(
  <BooksContainer></BooksContainer>,
  document.getElementById('react-target')
);
