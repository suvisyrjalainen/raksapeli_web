import React, {Component} from 'react';
import { Redirect, useLocation } from "react-router-dom";
import Form from './Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {characters: []};
  }

  handleSubmit = character => {
      this.setState({characters: [...this.state.characters, character]});
  }

  render() {
      const { name, password } = this.state;

      return (
        <div>
          <h2>Login</h2>
          <div>
                <Form handleSubmit={this.handleSubmit} />
                <p className="App-intro apitestcolor">{this.state.apiResponse}</p>
          </div>
        </div>
      );
    }



}

export default Form;
