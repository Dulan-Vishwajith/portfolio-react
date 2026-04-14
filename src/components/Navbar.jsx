import '../styles/Navbar.css';

function Navbar() {
    //return the navbar section of the portfolio
    return(
        <section className="header" id="header">
        
        
            {/*right section*/}
            <div className="right-section">
                <p id="goOverview">Dulan Vishwajith</p>
            </div>
            
            {/*left section*/}
            <div className="left-section">
                
                {/*Navigation Buttons*/}
                <button class="about-button" onclick="goTo('about')">About</button>
                <button class="education-button" onclick="goTo('education')">Education</button>
                <button class="skill-button" onclick="goTo('skill')">Skills</button>
                <button class="projects-button" onclick="goTo('project')">Projects</button>
                <button class="downloads-button" onclick="goTo('downloads')">Downloads</button>
                <button class="publications-button" onclick="goTo('publications')">Publications</button>
                <button class="contact-button" onclick="goTo('contact')">Contact</button>
            </div>
        
        </section>

    )
}
export default Navbar