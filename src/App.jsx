import { Routes, Route } from 'react-router-dom'
import './App.scss'
import Home from './Containers/Home'
import {motion} from 'framer-motion';
import { useRef } from 'react';

function App() {
  const constraintsRef = useRef(null)

  return (
    <motion.div className='app-wrapper' ref={constraintsRef}>
      <Routes>
        <Route path="/" element={<Home constraintsRef={constraintsRef}/>}/>
      </Routes>
    </motion.div>
  )
}

export default App
