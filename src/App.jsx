import { useState } from 'react'
import TopBar from './components/TopBar/TopBar';
import HeroContainer from './components/HeroContainer/HeroContainer';
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <TopBar />
      <HeroContainer />
    </div>
  )
}

export default App
