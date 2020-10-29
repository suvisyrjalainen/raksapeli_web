import React, { Component } from 'react';
import Form from './Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "",
                    characters: []
                  };
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





    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]});
    }

    render() {


        return (
          <div>
                <Form handleSubmit={this.handleSubmit} />
                <p className="App-intro apitestcolor">{this.state.apiResponse}</p>
          </div>

        );
    }
}

export default App;
