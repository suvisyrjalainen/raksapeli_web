import React, {Component} from 'react';

class Form extends Component {
  initialState = {
    name: '',
    password: '',
  }

  handleChange = (event) => {
    const {name, value} = event.target;

    this.setState({
      [name]: value,
    });
  }

  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  }

  render() {
    const { name, password } = this.state;

    return(
      <form>
        <label htmlFor="name">Nimi</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={this.handleChange} />
          <label htmlFor="password">Salasana</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={this.handleChange} />

            <input type="button" value="Submit" onClick={this.submitForm} />
      </form>
    );
  }
  
  state = this.initialState
}

export default './Form';
