import {React, useState, useEffect, useCallback} from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
//GlobalBodyCSS
import {GlobalMainBody} from './AppElements.js'
//Components
import Navbar from "./components/navbar"
import Sidebar from './components/sidebar'
import Footer from './components/footer'
//Pages
import HomePage from './pages/home'
import ProjectPage from './pages/projects'

function App() {
  // Sidebar Button
  const[isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }


  
  return (
      <HashRouter>
        <GlobalMainBody isOpen={isOpen}></GlobalMainBody>
        <header>
          <Navbar isOpen={isOpen} toggle={toggle}/>
          <Sidebar isOpen={isOpen} toggle={toggle}/>
        </header>
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route exact path="/projects" element={<ProjectPage/>}/>
        </Routes>
        <footer><Footer/></footer>
      </HashRouter>
  );
}

export default App;
