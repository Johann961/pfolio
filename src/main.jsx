import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { LazyMotion, domAnimation } from 'framer-motion';
import './styles/globals.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LazyMotion features={domAnimation} strict>
      <App />
    </LazyMotion>
  </StrictMode>
);
