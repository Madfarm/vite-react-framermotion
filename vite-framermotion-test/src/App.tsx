import './App.css'
import { motion } from 'framer-motion';
import { Bruh } from './components/Bruh';

function App() {


  return (
    <>
      <Bruh />
      <motion.div
        whileHover={{ scale: 1.2 }}
        animate={{ x: [200, 0] }}
        drag
        dragConstraints={{
          top: -50000,
          left: -50000,
          right: 50000,
          bottom: 50000,
        }}>Hellooooo</motion.div>
    </>
  )
}

export default App
