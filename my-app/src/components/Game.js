// Get started by creating a new React
// component and importing the libraries!


import React, { Component } from 'react';
import Unity, { UnityContext } from "react-unity-webgl";

export class Game extends React.Component {
  constructor(props) {
    super(props);

    // Next up create a new Unity Context object to
    // initialise and define your WebGL build. The
    // paths are relative from your index file.
    this.unityContext = new UnityContext({
      loaderUrl: "suvin_build/Build/raksapelibuild.loader.js",
      dataUrl: "suvin_build/Build/raksapelibuild.data",
      frameworkUrl: "suvin_build/Build/raksapelibuild.framework.js",
      codeUrl: "suvin_build/Build/raksapelibuild.wasm"
    });

  }


  render() {

    // Finally render the Unity component and pass
    // the Unity context through the props.

    return(
      <div>
      <h1>Tässä pitäisi olla peli</h1>
      <Unity unityContext={this.unityContext} />
      </div>
    );
  }
}

export default Game;
