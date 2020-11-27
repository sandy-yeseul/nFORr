import React from 'react';
import{ BrowserRouter as Router,
Switch,
Route} from 'react-router-dom';
import './App.css';
import {HomePage, LandingPage, BookListPage, AboutPage, AddBookPage, BookPage, UpdateBookPage} from '../Pages'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/home' component={HomePage} />
        <Route exact path='/books' component={BookListPage} />
        <Route exact path='/books/new' component={AddBookPage} />
        <Route exact path='/books/update/:bookId' component={UpdateBookPage} />
        <Route exact path='/about' component={AboutPage} />
        <Route exact path='/books/:bookId' component={BookPage} />
      </Switch>
    </Router>
  );
}

export default App;