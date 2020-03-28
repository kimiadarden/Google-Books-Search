import React from "react";
import API from "../utils/API";
import Results from "../components/Results";


class SearchBooks extends React.Component {


  state = {
    value: "",
    books: []
  };

  componentDidMount() {
    this.searchBook();
  }


  createNewBook = bookData => {
    return {
      _id: bookData.id,
      title: bookData.volumeInfo.title,
      authors: bookData.volumeInfo.authors,
      description: bookData.volumeInfo.description,
      image: bookData.volumeInfo.imageLinks.thumbnail,
      link: bookData.volumeInfo.previewLink
    }
  }

  searchBook = query => {
    API.getBook(query)
      .then(res => this.setState({ books: res.data.items.map(bookData => this.createNewBook(bookData)) }))
      .catch(err => console.error(err));
  };



  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });

  };


  handleFormSubmit= event=> {

    event.preventDefault();
    this.searchBook(this.state.search);

  };

  render() {
    return (
        <div>

            <div className="container">
                <form>
                    <div className="form-group">
                        <label htmlFor="search"><h2>Search for your favorite book and save them for later!</h2></label>
                        <input
                            onChange={this.handleInputChange}
                            value={this.state.search}
                            name="search"
                            type="text"
                            className="form-control"
                            placeholder="What is the title of your book?"
                            id="search"
                        />
                        <button onClick={this.handleFormSubmit} className="btn btn-warning mt-3 mb-5">
                            Search
    </button>
                    </div>
                </form>
            </div>


            <div className="container">
                <h2>Results</h2>
                <Results books={this.state.books} />
            </div>
        </div>
    )
}
      


}


export default SearchBooks;
