import React from 'react';
import{ BrowserRouter as Router,
Switch,
Route} from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';

import Header from '../Header';
import Footer from '../Footer';
import LandingPage from '../Pages/Landing';
import ListPage from '../Pages/List';
import NewBookPage from '../Pages/CreateBook';
import AboutPage from '../Pages/About';

function App() {
  return (
    <Router>
      <div className="App">
          <Header />
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/book' component={ListPage} />
            <Route exact path='/book/new' component={NewBookPage} />
            <Route exact path='/about' component={AboutPage} />
            <Route exact path='/search' />
          </Switch>
          < Footer />
      </div>
    </Router>
  );
}

export default App;
