import React from 'react';
import{ BrowserRouter as Router,
Switch,
Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Header from './components/header';
import Footer from './components/footer';
import LandingPage from './components/landing';

function App() {
  return (
    <Router>
      <div className="App">
          <Header />
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/book'  />
            <Route exact path='/book'  />
            <Route exact path='/about' />
            <Route exact path='/search' />
          </Switch>
          < Footer />
      </div>
    </Router>
  );
}

export default App;
