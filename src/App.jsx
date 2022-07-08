import { Routes, Route } from 'react-router-dom'
import './App.scss'
import Home from './Containers/Home'

function App() {

  return (
    <div className='app-wrapper'>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </div>
  )
}

export default App
