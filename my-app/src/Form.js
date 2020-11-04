import React, {Component} from 'react';
import { Link, Redirect, useLocation } from "react-router-dom";

class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            name: '',
            password: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
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
                                placeholder="name.."
                                value={name}
                                onChange={this.handleChange} 
                                required/>
                        </div>
                        <div class="user-box">
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password.." 
                                value={password}
                                onChange={this.handleChange} 
                                required/>
                        </div>
                        <div class="row">
                            <Link to="/game">
                                <button type="submit" class="btn btn-primary btn-ghost">
                                    kirjaudu sisään
                                </button>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;
