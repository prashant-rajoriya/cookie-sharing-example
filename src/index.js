import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Cookies from "universal-cookie";

const cookies = new Cookies();

cookies.set("paare_jwt", "Pacman", {
  path: "/",
  maxAge: 3600,
  expires: new Date(),
});
console.log(cookies.get("paare_jwt")); // Pacman

// document.cookie =
//   "paare_jwt=hereisthedance;domain=localhost;expires=2020-03-25T06:30:26Z;httpOnly=true";
// encodeURIComponent(
//     `paare_jwt=${"hereisthedance"};domain=${"localhost:8000"};max-age=${60 *
//       60 *
//       24};expires=2020-03-24T06:30:26Z;`
//   )
// ;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
