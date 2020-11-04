import React, { Component } from 'react';
import Login from './Login';
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
          <Router>
            <div>
              <ul>
                <li>
                  <Link to="/">Login</Link>
                </li>
                <li>
                  <Link to="/game">Game</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>

              </ul>

              <Switch>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/game">
                  <Game />
                </Route>
                <Route path="/">
                  <Login_page />
                </Route>
              </Switch>
            </div>
          </Router>



          </div>
        );
    }
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
    <div>
      <h2>Game</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

export default App;
