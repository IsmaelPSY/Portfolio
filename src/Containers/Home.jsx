import './Home.scss'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom';

const Home = (props) => {

  const{constraintsRef} = props;

  return(
    <>
      <motion.div 
        initial="hidden"
        animate="visible"
        transition={{duration:2.5}}
        variants={{
          visible: { opacity: .8 },
          hidden: { opacity: 0 },
        }}
        drag
        dragConstraints={constraintsRef}
        className='main-text'>
        <h1>Bienvenido</h1>
        <h2>Ismael Sanchez</h2>
        <h3>Web Developer</h3>
        <p> Hola! Gracias por tu interés. 
            Aquí encontrarás información
            sobre mi y mi trabajo. DISFRUTALO!!!</p>
        <span>HEY! Muéveme! :D</span>
      </motion.div>
      <span className='back-circle one'/>
      <span className='back-circle two'/>
      <motion.div 
      initial="hidden"
        animate="visible"
        transition={{duration:1}}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0.2 },
        }}
      className='circle-radius'><div className='circle big'/></motion.div>
      <motion.div
      initial="hidden"
        animate="visible"
        transition={{duration:1.5}}
        variants={{
          visible: { opacity: .9 },
          hidden: { opacity: 0.1 },
        }}
       className='circle small one'/>
      <motion.div
      initial="hidden"
        animate="visible"
        transition={{duration:1}}
        variants={{
          visible: { opacity: .9 },
          hidden: { opacity: 0.1 },
        }}
       className='circle small two'/>
      <motion.div
      initial="hidden"
        animate="visible"
        transition={{duration:1}}
        variants={{
          visible: { opacity: .9 },
          hidden: { opacity: 0.1 },
        }}
       className='circle small three'/>
      <motion.div
      initial="hidden"
        animate="visible"
        transition={{duration:1}}
        variants={{
          visible: { opacity: .9 },
          hidden: { opacity: 0.1 },
        }}
       className='circle small four'/>
      <motion.nav 
        initial="hidden"
        animate="visible"
        transition={{duration:2.5}}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
      className='nav-sect'>
      <div className='link-cont'>
      <Link className='nav-link' to="">MiTrabajo</Link>
      </div>
      <div className='link-cont'>
      <Link className='nav-link' to="">SobreMi</Link>
      </div>
      </motion.nav>
    </>
  )
}

export default Home;