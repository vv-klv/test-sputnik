import React from 'react'
import './App.css'
import Button from "./components/Button/Button"

function App() {

    const handleClick = () => {
        console.log('hello')
    }

  return (
    <div className="App">
          <Button handleClick={handleClick} >
              Hello
          </Button>
    </div>
  )
}

export default App
