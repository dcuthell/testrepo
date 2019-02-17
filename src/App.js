import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { PDFFrame } from 'grailsoft-modules'
import { Container, Row, Col } from 'reactstrap'

import samplePDF from './sample.pdf'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.min.css'

class App extends Component {
  goSup(){
    fetch('http://www.grailsoft.com/sup.php', {
      method: "GET",
      headers: { 'Content-Type': 'application/json' }
    })
    .then((res) => {
      // console.log(res)
      return res.json();
    })
    .then(result => {
        console.log(result)
      })
      .catch(error => {
        console.log(error)
      }
    );
  }

  async componentDidMount(){
    console.log("mount")
    function reqListener () {
      console.log(this.responseText);
    }

    this.goSup();
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "https://api.instagram.com/v1/users/self/media/recent/?access_token=6363559180.e98b264.d1763cf8104c4840ba64d9226c2bc70c&count=6");
    oReq.setRequestHeader("Access-Control-Allow-Origin", "*");
    oReq.onreadystatechange = (message) => console.log("Message is: " + message)
    // oReq.send();
    console.log('ok')
    let fetchAddress = "https://www.example.com/file.xml";
    // fetch(fetchAddress, {
    //   headers: {
    //     "Access-Control-Allow-Origin" : "https://www.example.com",
    //     "Access-Control-Request-Method" : "GET"
    //   }
    // })
    // .then(res => {
    //   console.log(res)
    //   return res.json();})
    // .then(
    //   (result) => {
    //     console.log(result);
    //   },
    //   (error) => {
    //     console.log(error)
    //   }
    // )
  }
// https://www.reqres.in/api/users?page=2
// https://api.instagram.com/v1/users/self/media/recent/?access_token=6363559180.e98b264.d1763cf8104c4840ba64d9226c2bc70c&count=6&callback=foo
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
        </header>
        <Container
          style={{ height: '100vh', maxWidth: '100vw', backgroundColor: '#d6c7c7' }}
        >
          <Row
            style={{ height: '90%', backgroundColor: '#cdd6c7' }} >
            <Col
              style={{ height: '90%', backgroundColor: '##c7d2d6' }}
            >
              <h1>FUCK</h1>
            </Col>
          </Row>
        </Container>
        <PDFFrame source={samplePDF} title='Sample' />
      </div>
    )
  }
}

export default App
