import React, {Component} from 'react';
import {Link, Redirect, useLocation } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    
    this.initialState = {
      name: '',
      password: ''
  };

  this.state = this.initialState;
  this.handleSubmit = this.handleSubmit.bind(this);
  this.input = React.createRef();
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
        [name] : value
    });
}

  handleSubmit = (event) => {
    alert('A name was submitted: ' + this.input.current.value);
    event.preventDefault();
  }


  render() {
    const { name, password } = this.state;

        return (
            <div class="login-box">
                <form onSubmit={this.onFormSubmit} method="POST">
                    <div class="row">
                        <h1>Kirjaudu</h1>
                        <div class="user-box">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Nimi"
                                value={name}
                                onChange={this.handleChange} 
                                required />
                        </div>
                        <div class="user-box">
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
                                <button type="submit" class="btn btn-primary btn-ghost" onSubmit={this.onFormSubmit} value="submit">
                                    Kirjaudu sisään
                                </button>

                            <Link to="registerpage">
                                <button type="submit" class="btn btn-primary btn-ghost">
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
