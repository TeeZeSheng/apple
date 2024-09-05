import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import './App.css'
import Highlight from './components/Highlight'
import Hero from './components/Hero'
import Model from './components/Model'
import VideoCarousel from './components/VideoCarousel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='bg-black'>
      <Navbar />
      <Hero />
      <Highlight />
      <VideoCarousel />
      <Model />
    </main>
  )
}

export default App
