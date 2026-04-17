import Overview from './components/Overview/Overview';
import Navbar from './components/Navbar/Navbar'; 
import About from './components/About/About';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Downloads from './components/Downloads/Downloads';
import Publications from './components/Publications/Publications';
import Contact from './components/Contacts/Contacts';
import ScrollingButton from './components/Scolling/ScrollingButton';

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
          <ScrollingButton />
          </>);
}

export default App
