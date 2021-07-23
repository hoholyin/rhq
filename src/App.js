import logo from './assets/logo_transparent.png';
import './App.css';
import React from "react";
import {Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="App-header">
          <Link to="/">
              <img src={logo} className="App-logo" alt="logo"/>
          </Link>
          <Link className="links" to="/submitOrder">
              <div className="button">Submit an Order</div>
          </Link>
      </div>
    </div>
  );
}

export default App;
