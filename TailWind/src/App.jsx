import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './card'

function App() {
  const [count, setCount] = useState(0)
  const user = {
    username:"vashu",
    userdata:"Ready for me"
  }

  return (
    <>
      <h1 className='bg-green-400 '>Tailwind</h1>
      <Card username="Shashwat"/>
      <Card username="Vashu"/>
    </>
  )
}

export default App
