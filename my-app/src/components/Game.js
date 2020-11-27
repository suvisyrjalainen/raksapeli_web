import React, { Component } from 'react';
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
    buildUrl = "Build",
    loaderUrl = buildUrl + "/Builds.loader.js",
    config = {
        dataUrl: buildUrl + "/Builds.data.gz",
        frameworkUrl: buildUrl + "/Builds.framework.js.gz",
        codeUrl: buildUrl + "/Builds.wasm.gz",
        streamingAssetsUrl: "StreamingAssets",
        companyName: "DefaultCompany",
        productName: "Raksaopetuspeli",
        productVersion: "0.1",
      };

    container = document.querySelector("#unity-container"),
    canvas = document.querySelector("#unity-canvas"),
    loadingBar = document.querySelector("#unity-loading-bar"),
    progressBarFull = document.querySelector("#unity-progress-bar-full"),
    fullscreenButton = document.querySelector("#unity-fullscreen-button"),

      if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
        container.className = "unity-mobile";
        config.devicePixelRatio = 1;
      } else {
        canvas.style.width = "960px";
        canvas.style.height = "600px";
      }
      loadingBar.style.display = "block";

      script = document.createElement("script");
      script.src = loaderUrl;
      script.onload = () => {
        createUnityInstance(canvas, config, (progress) => {
          progressBarFull.style.width = 100 * progress + "%";
        }).then((unityInstance) => {
          loadingBar.style.display = "none";
          fullscreenButton.onclick = () => {
            unityInstance.SetFullscreen(1);
          };
        }).catch((message) => {
          alert(message);
        });
      };
      document.body.appendChild(script);
});

class Game extends Component {
    render() {
        return(
            <Unity unityContext={unityContext} />
        );
    }
}

export default Game;