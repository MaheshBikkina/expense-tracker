import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import MainLayout from './components/layout/MainLayout'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <MainLayout />
    </div>
  )
}

export default App
