import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css'
import Hero from './pages/Hero'
import Loading from './pages/Loading'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import WokringProgress from './pages/projects/workingProgress';
import NotFound from './pages/NotFound';

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  
  useEffect(() => {
    if (location.pathname === '/') {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    } else {
      setIsLoading(false);
    }
  }, [location]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && location.pathname === '/' ? (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Loading />
        </motion.div>
      ) : (
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <motion.div
              key="hero"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Hero />
            </motion.div>
          } />
          <Route path="/projects/*" element={<WokringProgress/>}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      )}
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App