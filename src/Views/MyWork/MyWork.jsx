import { motion } from "framer-motion";
import './MyWork.scss'

const MyWork = () => {
  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)"
    }
  }
  return(
    <motion.div
      className='app-wrapper'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration:1, delay: 0.2}}
      exit={{ opacity: 0 }}
      >

      <div className="in-progress">
        <h2>Estamos en proceso...</h2>
      </div>
      <motion.div
        className="animate-div"
        whileHover={{ scale: 1.2, rotate: 90 }}
        whileTap={{
          scale: 0.8,
          rotate: -90,
          borderRadius: "100%"
        }}
      >
        <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
  >
    <motion.path
      d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
      variants={icon}
      initial="hidden"
      animate="visible"
    />
  </svg>
      </motion.div>
    </motion.div>
  )
}
export default MyWork;