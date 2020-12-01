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
          loaderUrl: "WebglZippaamaton/Build/WebglZippaamaton.loader.js",
          dataUrl: "WebglZippaamaton/Build/WebglZippaamaton.data",
          frameworkUrl: "WebglZippaamaton/Build/WebglZippaamaton.framework.js",
          codeUrl: "WebglZippaamaton/Build/WebglZippaamaton.wasm"
        });
      }

    render() {
        return (
            <div class="game">
                <h2>Game scene</h2>
                <p>gaming is fun</p>
                <div class="column">
                    <Unity unityContext={this.unityContext} />;
                </div>
            </div>
        );
    }
}

export default Game;
