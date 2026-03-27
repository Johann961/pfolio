import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import YRPCaseStudy from './pages/case-studies/YRPCaseStudy';
import CanisiusCaseStudy from './pages/case-studies/CanisiusCaseStudy';
import FSUCaseStudy from './pages/case-studies/FSUCaseStudy';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/work/yrp" element={<YRPCaseStudy />} />
          <Route path="/work/canisius" element={<CanisiusCaseStudy />} />
          <Route path="/work/fsu" element={<FSUCaseStudy />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
