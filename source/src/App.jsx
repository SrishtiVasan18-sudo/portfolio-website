import { MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import CaseStudies from './components/CaseStudies';
import Education from './components/Education';
import Recognition from './components/Recognition';
import Contact from './components/Contact';
import Footer from './components/Footer';
export default function App() { return <MotionConfig reducedMotion="user"><a href="#main" className="fixed left-6 top-4 z-[100] -translate-y-24 rounded-lg bg-accent px-4 py-2 text-background focus:translate-y-0">Skip to content</a><Navbar /><main id="main"><Hero /><Stats /><About /><Experience /><CaseStudies /><Skills /><Education /><Recognition /><Contact /></main><Footer /></MotionConfig>; }
