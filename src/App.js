import React, { Component } from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'

import createBrowserHistory from 'history/createBrowserHistory'


const history = createBrowserHistory();


const Home = () => (
  <div>
    <div className="home__block">Home</div>
  </div>
);

const About = () => (
  <div>
    <div className="about__block">About</div>
  </div>
);

const Contacts = () => (
  <div>
    <div className="contact__block">Contacts</div>
  </div>

)

class Navigation extends Component {
  render() {
    return(
      <BrowserRouter >
        <div>
          <ul className="menu_list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
          </ul>

          <hr />
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contacts" component={Contacts}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default Navigation;
