import './Navbar.css';

//Navbar component to display the navigation bar at the top of the portfolio with buttons to navigate to different sections of the portfolio 
//and the name of the portfolio owner from the props passed to the component
function Navbar({name}) {
    
    //return the navbar section of the portfolio
    return(
        <section className="navbar" id="navbar">
        
        
            {/*right section*/}
            <div className="right-section">
                <a className='nav-title' id="nav-title" href="#overview">{name}</a>     {/*Display the name of the portfolio owner passed as a prop to the component*/}
            </div>
            
            {/*left section*/}
            <div className="left-section">
                
                {/*Navigation Buttons*/}
                <a className="nav-button" href="#about">About</a>
                <a className="nav-button" href="#education">Education</a>
                <a className="nav-button" href="#skills">Skills</a>
                <a className="nav-button" href="#projects">Projects</a>
                <a className="nav-button" href="#downloads">Downloads</a>
                <a className="nav-button" href="#publications">Publications</a>
                <a className="nav-button" href="#contact">Contact</a>
            </div>
        
        </section>
    )
}
export default Navbar