import React, { Component } from 'react';
import About from './components/About';
import Game from './components/Game';
import Login from './components/Login';
import RegisterForm from './components/RegisterForm';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: ""};
  }

  callAPI() {
    fetch("http://localhost:9000/users")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
        console.log(this.state.apiResponse);
  }

  componentWillMount() {
       this.callAPI();
  }



  


    render() {
        return (
          <div>
            <header>
              <h1>Rakennusopetus peli</h1>
            </header>
          <Router>
            <div>
              <ul>
                <li>
                  <Link to="/">Kirjaudu</Link>
                </li>
                <li>
                  <Link to="/about">Tietoa meistä</Link>
                </li>
                <li>
                  <Link to="/game">peli</Link>
                </li>

              </ul>

              <Switch>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/game">
                  <Game_page />
                </Route>
                <Route path="/registerpage">
                  <Register_page />
                </Route>
                <Route path="/">
                  <Login_page />
                </Route>
              </Switch>
            </div>
          </Router>

          <footer>
            <div className="footer">
            </div>
          </footer>
          </div>
        );
    }
}

function Register_page() {
  return (
    <div>
      <RegisterForm />
    </div>
  );
}

function Login_page() {
  return (
    <div>
      <div>
          <Login/>
      </div>
    </div>
  );
}

function Game_page() {
  return (
    <div className="game">
      <Game />
    </div>
  );
}

function About_page() {
  return (
    <div className="about">
      <About />
    </div>
  );
}

export default App;
