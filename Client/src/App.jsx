import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Inicio from './components/Home'
import Proyectos from './components/Projects'
import Technologies from './components/Technologies'

function App() {

  return (
    <div>
      <Inicio></Inicio>
      <Proyectos></Proyectos>
      <Technologies></Technologies>
    </div>
  )
} 

export default App
