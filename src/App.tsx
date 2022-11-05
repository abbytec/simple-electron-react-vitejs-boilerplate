import { useState } from 'react'
import  Home from './home/Home'
import './App.css'

function App() {
  const [user, setUser] = useState()

  return (
    <div className="App">
      <Home></Home>
    </div>
  )
}

export default App
