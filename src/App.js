//import Router from 'json-server/lib/server/router';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'


function App() {

  const name = 'Teste'
  const newName = name.toUpperCase()

  return (
    <Router>
      <ul>
        <li>Home</li>
        <li>Contato</li>
        <li>Contato</li>
      </ul>
      <Routes>
          <Route path='/' element={
                <>
                  <Home />
                </>
              }/>
                          
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
    <p>footer</p>
    </Router>
  )
}


export default App;
