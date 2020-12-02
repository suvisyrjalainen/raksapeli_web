import React, {Component} from 'react';
import {Link, Redirect, useLocation } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
        input: {},
        errors: {}
    };

  this.state = this.initialState;
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    let input = this.initialState.input;
    input[event.target.name] = event.target.value;

    this.setState({
        input
    });
}

  handleSubmit = (event) => {
    event.preventDefault();

    let input = {};
    input["name"] = "";
    input["password"] = "";
    this.setState({input:input});

    alert('lomake on lähetetty');
  }

  validate(){
      let input = this.initialState.input;
      let errors = {};
      let isValid = true;

      if(!input["name"]) {
          isValid = false;
          errors["name"] = "Please enter ypur name";
      }

      if(!input["password"]) {
          isValid = false;
          errors["password"] = "please enter your password";
      }

      this.setState({
        errors: errors
      });

      return isValid;
  }


  render() {
    const { name, password } = this.state;

        return (
            <div className="login-box">
                <form onSubmit={this.onFormSubmit} method="POST">
                    <div className="row">
                        <h1>Kirjaudu</h1>
                        <div className="user-box">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Nimi"
                                value={name}
                                onChange={this.handleChange}
                                required />
                        </div>
                        <div className="user-box">
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Salasana"
                                value={password}
                                onChange={this.handleChange}
                                required />
                        </div>
                        <div class="row">
                            <Link to="game">
                                <button type="submit" class="btn btn-primary btn-ghost" onSubmit={this.handleSubmit} value="submit">
                                    Kirjaudu sisään
                                </button>
                            </Link>

                            <Link to="registerpage">
                                <button type="submit" class="btn btn-primary btn-ghost" value="submit">
                                    Rekisteröidy jos tiliä ei ole
                                </button>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;
