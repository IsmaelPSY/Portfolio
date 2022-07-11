import { Routes, Route } from 'react-router-dom'
import './App.scss'
import Home from './Views/Home/Home'
import {AnimatePresence, motion} from 'framer-motion';
import { useRef } from 'react';
import MyWork from './Views/MyWork/MyWork';
import AboutMe from './Views/AboutMe/AboutMe';

function App() {

  return (
    <motion.div >
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/my-work" element={<MyWork/>}/>
          <Route path="/about-me" element={<AboutMe/>}/>
        </Routes>
      </AnimatePresence>
    </motion.div>
  )
}

export default App
