import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Domain from './pages/Domain';
import Booking from './pages/Booking';
import Store from './pages/Store';
import Blog from './pages/Blog';
import Email from './pages/Email';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/home'  exact component={Home} />
        <Route path='/domain' component={Domain} />
        <Route path='/booking' component={Booking} />
        <Route path='/store' component={Store} />
        <Route path='/blog' component={Blog} />
        <Route path='/email' component={Email} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
