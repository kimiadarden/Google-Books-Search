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

  return (){



  }
      


}


export default SearchBooks;
