/**
 * Main App Component
 * Portfolio website for a fresher/junior software developer
 * 
 * This component assembles all sections of the portfolio
 * and manages the overall layout and smooth scrolling behavior
 */

// Import all section components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
// import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Interests from './components/Interests';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Import global styles
import './App.css';

function App() {
  return (
    <div className="app">
      {/* Navigation Bar - Fixed position with scroll effects */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* 1. Hero / Profile Section */}
        <Hero />

        {/* 2. About Me Section */}
        <About />

        {/* 3. Education Section */}
        <Education />

        {/* 4. Experience Section */}
        {/*<Experience />*/}

        {/* 5. Projects Section */}
        <Projects />

        {/* 6. Skills Section */}
        <Skills />

        {/* 7. Areas of Interest Section */}
        <Interests />

        {/* 8. Contact Us Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
