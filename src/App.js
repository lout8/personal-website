import {React, useState, useEffect} from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import axios from 'axios'
//GlobalBodyCSS
import {GlobalMainBody} from './AppElements.js'
//Components
import Navbar from "./components/navbar"
import Sidebar from './components/sidebar'
import Footer from './components/footer'
//Pages
import HomePage from './pages/home'
import AboutPage from './pages/about'
import ProjectPage from './pages/projects'
import ContactPage from './pages/contact'

function App() {
  // Data
  const [data,setData]=useState([]);

  useEffect(() =>{
    axios.get("https://dulcet-chimera-7feb47.netlify.app/data.json")
    .then(res => {
      setData(res.data)
    })
    .catch(err =>{
      console.log(err)
    })
  }, [])


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
          <Route exact path="/" element={<HomePage data={data}/>}/>
          <Route exact path="/about" element={<AboutPage data={data}/>}/>
          <Route exact path="/projects" element={<ProjectPage data={data}/>}/>
          <Route exact path="/contact" element={<ContactPage data={data}/>}/>
        </Routes>
        <footer><Footer/></footer>
      </HashRouter>
  );
}

export default App;
