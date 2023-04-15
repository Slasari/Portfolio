import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Projects from './components/Projects'
import Technologies from './components/Technologies'

function App() {

  return (
    <div>
      <Home></Home>
      <Projects></Projects>
      <Technologies></Technologies>
    </div>
  )
} 

export default App
