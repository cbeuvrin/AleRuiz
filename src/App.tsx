import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Recognitions from './sections/Recognitions';
import Stats from './sections/Stats';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Recognitions />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
