import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { PDFFrame } from 'grailsoft-modules'
import { Container, Row, Col } from 'reactstrap'
import Thingy from './components/Thingy'

import samplePDF from './sample.pdf'
import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

class App extends Component {
  goSup() {
    fetch('http://www.grailsoft.com/sup.php', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, cors, *same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      entials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrer: 'no-referrer', // no-referrer, *client
      body: JSON.stringify({ access_code: '6363559180.e98b264.d1763cf8104c4840ba64d9226c2bc70c' }) // body data type must match 'Content-Type' header
    })
      .then((res) => {
      // console.log(res)
        return res.json()
      })
      .then(result => {
        console.log(JSON.parse(result))
      })
      .catch(error => {
        console.log(error)
      }
      )
  }

  async componentDidMount() {
    console.log('mount')
    function reqListener () {
      console.log(this.responseText)
    }

    // this.goSup()
    var oReq = new XMLHttpRequest()
    oReq.addEventListener('load', reqListener)
    oReq.open('GET', 'https://api.instagram.com/v1/users/self/media/recent/?access_token=6363559180.e98b264.d1763cf8104c4840ba64d9226c2bc70c&count=6')
    oReq.setRequestHeader('Access-Control-Allow-Origin', '*')
    oReq.onreadystatechange = (message) => console.log('Message is: ' + message)
    // oReq.send();
    console.log('ok')
    // let fetchAddress = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=6363559180.e98b264.d1763cf8104c4840ba64d9226c2bc70c&count=6';
    // fetch(fetchAddress, {
    //   headers: {
    //     'X-Frame-Options': 'SAMEORIGIN'
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
    let shit = { name: 'BOBert', age: 69, lifestyle: 'a feckin sweeet one' }
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
              <Thingy>
                {shit}
              </Thingy>
            </Col>
          </Row>
        </Container>
        <PDFFrame source={samplePDF} title='Sample' />
      </div>
    )
  }
}

export default App
