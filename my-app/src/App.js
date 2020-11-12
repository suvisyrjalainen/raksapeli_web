import React, { Component } from 'react';
import Login from './Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import RegisterForm from './RegisterForm';

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
                  <Link to="/registerpage">Rekisteröidy</Link>
                </li>
                <li>
                  <Link to="/game">Peli</Link>
                </li>
                <li>
                  <Link to="/about">Tietoa meistä</Link>
                </li>

              </ul>

              <Switch>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/game">
                  <Game />
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
            <div class="footer">
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

function Game() {
  return (
    <div class="game">
      <h2>This is game scene</h2>
    </div>
  );
}

function About() {
  return (
    <div class="about">
      <h2>About</h2>
    </div>
  );
}

export default App;
