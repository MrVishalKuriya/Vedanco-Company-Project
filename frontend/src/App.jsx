import React from 'react'
import './App.css'
import Home from './page/Home'
import Navbar from './components/Navbar'
import { colors } from './js/Data'

const App = () => {
  return (
    <>
      <div className="App">
        <Home Color={colors[0]} />
        <Navbar />
      </div>
    </>
  )
}

export default App
