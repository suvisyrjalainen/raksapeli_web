import React, { Component } from 'react';
import { Link, Redirect, useLocation } from "react-router-dom";
import Unity, { UnityContext } from "react-unity-webgl";

class Game extends Component {
    constructor(props) {
        super(props);

        // Next up create a new Unity Context object to
        // initialise and define your WebGL build. The
        // paths are relative from your index file.

        this.unityContext = new UnityContext({
          loaderUrl: "unity/Build/Builds.loader.js",
          dataUrl: "unity/Build/Builds.data",
          frameworkUrl: "unity/Build/Builds.framework.js",
          codeUrl: "unity/Build/Builds.wasm"
        });
      }

    render() {
        return (
            <div class="game">
                <h2>Game scene</h2>
                <div class="column">
                    <p>gaming is fun</p>
                    <Unity unityContext={this.unityContext} />;
                </div>
            </div>
        );
    }
}

export default Game;
