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
      <div class="container">
          <div class="instructions">
            <h3>ohjeet:</h3>
            <p>Liikkuminen W, ja S</p>
            <h4>Pelin kulku:</h4>
            <p>pelaat quiz tyyppistä peliä jossa</p>
            <p>vastailet rakennustyömaa aiheisiin kysymyksiin</p>
            <p>Jokaisesta oikesta vastauksesta saat 1 pisteen</p>
            <p>gl hf :).</p>
          </div>

          

          <div class="score">
            <h3>pisteesi:</h3>
            <p>mikko:
            pisteesi: 10/10.</p>
          </div>

          <div class="game">
            <Unity unityContext={this.unityContext} />
          </div>
      </div>
    );
  }
}

export default Game;
