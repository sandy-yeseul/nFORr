import React from 'react';
import{ BrowserRouter as Router,
Switch,
Route} from 'react-router-dom';
import './App.css';
import {Header, Footer} from '../Common';
import {LandingPage, ListPage, AboutPage, SearchPage, BookFormPage, ViewBookPage} from '../Pages'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/books' component={ListPage} />
        <Route exact path='/books/new' component={BookFormPage} />
        <Route exact path='/books/update/:bookId' component={BookFormPage} />
        <Route exact path='/about' component={AboutPage} />
        <Route exact path='/search' component={SearchPage} />
        <Route exact path='/books/:bookId' component={ViewBookPage} />
      </Switch>
      < Footer />
    </Router>
  );
}

export default App;