import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import "./App.css";
import Articles from "./pages/Articles";
import SavedArticles from "./pages/SavedArticles";
import Nav from "./components/Nav";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Articles} />
            <Route exact path="/articles" component={Articles} />
            <Route exact path="/savedArticles" component={SavedArticles} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
