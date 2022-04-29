//import Router from 'json-server/lib/server/router';
import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './Home'
import Company from './Company'
import Contact from './Contact'
import NewProject from './NewProject'
import Container from './Container'


function App() {

  const name = 'Teste'
  const newName = name.toUpperCase()

  return (
    <Router>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/contact'>Contato</Link>
        <Link to='/company'>Empresa</Link>
        <Link to='/newproject'>Novo Projeto</Link>
      </div>
      <Container customClass="min-height">
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
      </Container>
    <p>footer</p>
    </Router>
  )
}


export default App;
