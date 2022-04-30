//import Router from 'json-server/lib/server/router';
import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './Home'
import Company from './Company'
import Contact from './Contact'
import NewProject from './NewProject'
import Container from './Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'


function App() {

  const name = 'Teste'
  const newName = name.toUpperCase()

  return (
    <Router>
      <Container customClass="min-height">
      <Navbar>
      <Routes>
          <Route path="/" element={<Home />}/>
                          
          <Route path='/company' element={
                <>
                  <Company />
                </>
              }/>
          <Route path='/contact' element={
                <>
                  <Contact />
                </>
              }/>
          <Route path='/newproject' element={
                <>
                  <NewProject />
                </>
              }/>
        </Routes>
        </Navbar>
        <Footer />
      </Container>
    
    </Router>
  )
}


export default App;
