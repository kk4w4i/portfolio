import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css'
import Hero from './pages/Hero'
import Loading from './pages/Loading'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Loading />
        </motion.div>
      ) : (
        <motion.div
          key="hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App