import './App.css'
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import { ModalProvider } from './context/ModalContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LocomotiveScroll from 'locomotive-scroll';
import Loading from './components/Loading';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const locomotiveScroll = new LocomotiveScroll();

  useEffect(() => {
    // Simulate loading progress
    const timer = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    // Listen for when the page is fully loaded
    const handleLoad = () => {
      setLoadingProgress(100);
      setTimeout(() => {
        setIsLoading(false);
      }, 500); // Add a small delay to ensure smooth transition
    };

    window.addEventListener('load', handleLoad);
    
    // If the page is already loaded when component mounts
    if (document.readyState === 'complete') {
      handleLoad();
    }

    return () => {
      clearInterval(timer);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <ModalProvider>
      {isLoading && <Loading progress={loadingProgress} />}
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <ContactModal />
        <ToastContainer 
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          toastStyle={{
            background: 'black',
            color: 'white',
            border: '1px solid rgba(199, 200, 196, 0.2)',
            borderRadius: '8px',
            padding: '12px 24px',
            fontSize: '14px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            margin: '0',
            minHeight: '48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
          progressStyle={{
            background: '#C7C8C4'
          }}
          closeButton={({ closeToast }) => (
            <button
              onClick={closeToast}
              className="text-white/60 hover:text-white transition-colors"
              style={{
                background: 'none',
                border: 'none',
                padding: '4px',
                cursor: 'pointer',
                fontSize: '18px'
              }}
            >
              ✕
            </button>
          )}
        />
      </div>
    </ModalProvider>
  )
}

export default App
