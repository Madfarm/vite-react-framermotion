import { motion } from "framer-motion"
import './Bruh.css'

export const Bruh = () => (
  <motion.div className="Bruh"
    whileTap={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
    animate={{x: [-200, 0] }}
    drag
    dragConstraints={{
      top: -50000,
      left: -50000,
      right: 50000,
      bottom: 50000,
    }}
  >
    <h3>Coding is sick</h3>
    <motion.div className="Butt"
    animate={{
        opacity: [0, 0.1, 0.2, 0.3, 0.4, 0.5, .6, .7, .8, 1],
    }}
    
    >
        Brought to you by Vite</motion.div>

  </motion.div>
)