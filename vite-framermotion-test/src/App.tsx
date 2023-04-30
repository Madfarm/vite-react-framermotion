import './App.css'
import { motion } from 'framer-motion';
import { Bruh } from './components/Bruh';

function App() {
  

  return (
    <>
      <Bruh/>
      <motion.div 
      whileHover={{ scale: 1.2 }}
      animate={{ x: 100 }}>Hellooooo</motion.div>
    </>
  )
}

export default App
