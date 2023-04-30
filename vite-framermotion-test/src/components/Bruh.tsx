import { motion } from "framer-motion"
import './Bruh.css'

export const Bruh = () => (
  <motion.div className="Bruh"
    whileTap={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
    animate={{x: [-100, -200, -100, 0, 100]}}
  >
    <h3>My parents dont love me</h3>

  </motion.div>
)