import React, { Component } from 'react';
import { Link, Redirect, useLocation } from "react-router-dom";

class Game extends Component {
    constructor(props) {
        super(props);
    };


    render() {
        return (
            <div class="game">
                <h2>Game scene</h2>
                <div class="column">
                    <p>gaming is fun</p>
                </div>
            </div>
        );
    }
}

export default Game;