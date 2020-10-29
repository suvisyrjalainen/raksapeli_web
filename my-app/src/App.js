import React, { Component } from "react";
import Form from './Form';


class App extends Component {

  /*constructor(props) {
      super(props);
      this.state = { apiResponse: "" };
  }
  callAPI() {
      fetch("http://localhost:9000/users")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }));
  }
  componentWillMount() {
      this.callAPI();
  }*/

  handleSubmit =(characters) => {
    this.state({characters: [...this.state.characters, characters]})
  }

  render() {
    return (
      <form handleSubmit={this.handleSubmit} />
    );
  }
}

export default App;
