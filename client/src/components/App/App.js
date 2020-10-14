import React from 'react';
import{ BrowserRouter as Router,
Switch,
Route} from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';

import Header from '../Header/index';
import Footer from '../Footer/index';
import LandingPage from '../Pages/Landing/index';
import ListPage from '../Pages/List/index';
import NewBookPage from '../Pages/CreateBook/index';
import AboutPage from '../Pages/About/index';

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
