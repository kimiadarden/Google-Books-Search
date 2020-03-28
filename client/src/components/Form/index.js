import React from "react";

// This file exports the Input, TextArea, and FormBtn components

function Form(props) {
  return (
    <div className="container">
      <form>
        <div className="form-group">
          <label ><h2>Search any book that you like and save them for later</h2></label>
          <input
            onChange={props.handleInputChange}
            value={props.search}
            name="search"
            type="text"
            className="form-control"
            placeholder="What is the title of your book?"
            id="search"
          />
          <button onClick={props.handleFormSubmit} className="btn btn-warning mt-3 mb-5">
            Search
        </button>
        </div>
      </form>
    </div>
  );
}






export default Form;
