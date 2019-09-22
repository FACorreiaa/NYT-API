import React from "react";
import "./App.css";
import Opening from "./components/opening/Opening";
import { HashRouter, Switch, Route } from "react-router-dom";
import BookComponent from "./components/book/Book";
import MainComponent from "./components/main/Main";
import NotFound from "./components/error/Error";
// eslint-disable-next-line flowtype/require-valid-file-annotation
// @flow

function App() {
  return (
    <>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Opening} />
          <Route path="/main" component={MainComponent} />
          <Route path="/books" component={BookComponent} />
          <Route component={NotFound} />
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
