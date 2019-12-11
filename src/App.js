import React, {Component} from 'react';
import logo from './logo.svg';
import axios from "axios";
import './App.css';

class App extends Component {
  
  logIn = async () => {
    // Request on Client

      try {
          const res = await axios.get('http://localhost:5000/authenticate', { auth: { username: 'admin', password: '123' } });
          console.log(res.data);
      } catch (e) {
          console.log(e);
      }
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button onClick={this.logIn}>Auth</button>
  
        </header>
        
      </div>
    );
  }
  
}

export default App;
