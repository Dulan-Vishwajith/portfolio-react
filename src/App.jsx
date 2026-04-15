import Overview from './components/Overview/Overview';
import Navbar from './components/Navbar/Navbar'; 
import About from './components/About/About';
import Education from './components/Education/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Downloads from './components/Downloads';
import Publications from './components/Publications';
import Contact from './components/Contacts';

import './styles/App.css';
import './styles/Responsive.css';


function App() {

  return (<>
          <Navbar name="Dulan Vishwajith" />
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
