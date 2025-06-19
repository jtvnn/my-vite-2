import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'
import NavBar from './NavBar.jsx'
import { Routes, Route } from 'react-router-dom';
import About from './About.jsx';
import Home from './Home.jsx';

function App() {
  const [name, setName] = useState('Bengal')

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gallery' element={<Header name={name} />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  )
}

export default App
