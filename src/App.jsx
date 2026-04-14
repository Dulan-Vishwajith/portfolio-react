import Overview from './components/Overview';
import Navbar from './components/Navbar'; 
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';


import './styles/App.css';
import './styles/Responsive.css';
import Projects from './components/Projects';
import Downloads from './components/Downloads';
import Publications from './components/Publications';
import Contact from './components/Contacts';



function App() {

  return (<>
          <Navbar />
          <Overview />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Downloads />
          <Publications/>
          <Contact/>
          </>);
}

export default App
