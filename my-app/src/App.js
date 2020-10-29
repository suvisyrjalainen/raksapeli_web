import React, {Component} from "react";


class App extends Component {

  constructor(props) {
      super(props);
      this.state = { apiResponse: "" };

      const [email, setEmail] = React.useState("");
      const [password, setPassword] = React.useState("");
      const [acceptedTerms, setAcceptedTerms] = React.useState(false);

      const handleSubmit = (event) => {
      console.log(`
        Email: ${email}
        Password: ${password}
        Accepted Terms: ${acceptedTerms}
      `);

        event.preventDefault();
      }
  }
  callAPI() {
      fetch("http://localhost:9000/users")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }));
  }
  componentWillMount() {
      this.callAPI();
  }

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [acceptedTerms, setAcceptedTerms] = React.useState(false);

  const handleSubmit = (event) => {
  console.log(`
    Email: ${email}
    Password: ${password}
    Accepted Terms: ${acceptedTerms}
  `);

    event.preventDefault();
  }

  render() {
    return (
      <form /*onSubmit={handleSubmit}*/ >
        <h1>Luo tili</h1>
        <p className="App-intro">{this.state.apiResponse}</p>

        <label>
          Email:
          <input
            name="email"
            type="email"
            //value={email}
            //onChange={e => setEmail(e.target.value)}
            required />
        </label>

        <label>
          Password:
          <input
            name="password"
            type="password"
            //value={password}
            //onChange={e => setPassword(e.target.value)}
            required />
        </label>

        <label>
          <input
            name="acceptedTerms"
            type="checkbox"
            //onChange={e => setAcceptedTerms(e.target.value)}
            required />
          I accept the terms of service
        </label>

        <button>submit</button>
      </form>
    );
  }
}

export default App;
