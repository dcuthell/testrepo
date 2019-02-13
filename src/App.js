import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import { PDFFrame } from 'grailsoft-modules'
import { Container, Row, Col } from 'reactstrap'

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
        <Container
          style={{height: '100vh', maxWidth: '100vw', backgroundColor: '#d6c7c7'}}
        >
          <Row
            style={{height: '90%', backgroundColor: '#cdd6c7'}} >
            <Col
              style={{height: '90%', backgroundColor: '##c7d2d6'}}
              >
              <h1>FUCK</h1>
            </Col>
            <Col style={{backgroundColor: '##c7d2d6'}}>
              <h1>FUCK</h1>
            </Col>
            <Col style={{backgroundColor: '##c7d2d6'}}>
              <h1>FUCK</h1>
            </Col>
            <Col style={{backgroundColor: '##c7d2d6'}}>
              <h1>FUCK</h1>
            </Col>
            <Col style={{backgroundColor: '##c7d2d6'}}>
              <h1>FUCK</h1>
            </Col>
          </Row>
          <Row style={{backgroundColor: '#cdd6c7'}}>
            <Col style={{backgroundColor: '##c7d2d6'}}>
              <h1>FUCK</h1>
            </Col>
          </Row>
        </Container>
        <PDFFrame source={samplePDF} title='Sample' />
      </div>
    );
  }
}

export default App;
