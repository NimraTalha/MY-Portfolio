import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Portfolio from '../components/Portfolio';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white"> 
      <Navbar />
      <Hero />
      <About/>
      <Portfolio/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  );
}

