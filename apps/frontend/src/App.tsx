import './App.css'
import { App as KonstaApp } from 'konsta/react'
import { Button } from 'konsta/react'

function App() {
  return (
    <KonstaApp theme='material'>
      <div className='h-screen flex flex-col justify-center items-center'>
        <h1 className='font-mono'>Quest Search</h1>
        <Button>Search</Button>
      </div>
    </KonstaApp>
  )
}

export default App
