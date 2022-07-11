import { motion } from "framer-motion";

const MyWork = () => {
  return(
    <motion.div
      className='app-wrapper'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration:1, delay: 0.2}}
      exit={{ opacity: 0 }}
      >
    
    </motion.div>
  )
}
export default MyWork;