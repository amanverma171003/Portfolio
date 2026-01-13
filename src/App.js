import Navbar from './components/common/Navbar';
import Profile from './components/sections/Profile';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Technologies from './components/sections/Technologies';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Profile />
      <About />
      <Projects />
      <Technologies />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
