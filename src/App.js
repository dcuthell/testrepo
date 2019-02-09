import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { PDFFrame } from 'grailsoft-modules'

import samplePDF from './sample.pdf'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.min.css'

class App extends Component {
  render() {
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
        </header>
        <PDFFrame source={samplePDF} title='Sample' />
      </div>
    );
  }
}

export default App;
