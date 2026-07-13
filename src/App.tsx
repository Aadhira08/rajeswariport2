import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Research from './components/Research';
import Publications from './components/Publications';
import Awards from './components/Awards';
import Skills from './components/Skills';
import Leadership from './components/Leadership';
import Events from './components/Events';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0f1e] text-white">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Research />
        <Publications />
        <Awards />
        <Skills />
        <Leadership />
        <Events />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
