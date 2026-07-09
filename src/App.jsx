import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Hero from './views/Hero';
import About from './views/About';
import Portfolio from './views/Portfolio';
import ScrollToTopButton from './components/ScrollToTopButton';
import Contact from './views/Contact';
import Experience from './views/Experiences';
import Certificates from './views/Certificates';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300 font-sans">
      {/* Decorative ambient glowing spots */}
      <div className="absolute top-[10%] left-[-15%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full bg-blue-500/10 dark:bg-blue-600/15 ambient-glow animate-pulse pointer-events-none" style={{ animationDuration: '8s' }} />
      <div className="absolute top-[35%] right-[-15%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full bg-cyan-400/10 dark:bg-cyan-500/15 ambient-glow animate-pulse pointer-events-none" style={{ animationDuration: '10s' }} />
      <div className="absolute top-[65%] left-[-10%] w-[250px] h-[250px] md:w-[500px] md:h-[500px] rounded-full bg-purple-500/10 dark:bg-purple-600/15 ambient-glow animate-pulse pointer-events-none" style={{ animationDuration: '12s' }} />
      <div className="absolute top-[85%] right-[5%] w-[250px] h-[250px] md:w-[500px] md:h-[500px] rounded-full bg-indigo-500/10 dark:bg-indigo-600/15 ambient-glow animate-pulse pointer-events-none" style={{ animationDuration: '14s' }} />

      <Navbar />

      <main className="flex-grow text-center relative z-10">
        <Hero />
        <div className="mt-28 space-y-8">
          <About />
          <Experience />
          <Portfolio />
          <Certificates />
          <Contact />
        </div>
      </main>

      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

export default App;
