import React , { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SearchBooks from "./pages/SearchBooks";
import SavedBooks from "./pages/SavedBooks";
import Wrapper from "./components/Wrapper";

class App extends Component {
 
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Wrapper>
            <Route exact path="/" component={SearchBooks} />
            <Route exact path="/search" component={SearchBooks} />
            <Route exact path="/saved" component={SavedBooks} />
          </Wrapper>
        </div>
      </Router>
    )
  };
};

export default App;
