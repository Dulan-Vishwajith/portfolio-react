import '../styles/Projects.css';
import project1 from '../assets/project_img/Porfolio.png';
import project2 from '../assets/project_img/3D-University-Map.png';
import project3 from '../assets/project_img/govibiz.png';


function Projects() {
    //return the projects section of the portfolio
    return(
        <section className="project" id="projects">
                {/*Section Title*/}
                <h2 className="title-text" id="projects-title">Projects</h2>
                
                <div className="project-container">
                
                    {/*Card 1*/}    
                    <div className="project-card">
                        <img src = {project1} alt="Project 1"/>
                        <h3>Personal Portfolio Website (Individual Project)</h3>
                        <p className="description">
                            Developed a responsive personal portfolio website to showcase my skills, projects, and academic background as a Software Engineering undergraduate. The site provides an interactive and user-friendly interface to highlight my work and technical expertise.
                        </p>

                        {/*DropDown Content*/}
                        <div className="project-details">
                            <p><strong>Technologies:</strong> JavaScript, HTML, CSS</p>
                            <p><strong>Features:</strong></p>
                            <ul>
                                <li>Modern and professional UI</li>
                                <li>Project cards with live demos and source code</li>
                                <li>Easy navigation and accessibility</li>
                                <li>Cross-browser compatibility</li>
                            </ul>

                            <div className="project-buttons">
                                <a href="https://dulanvish.com/" target="_blank">Live Demo</a>
                                <a href="https://github.com/Dulan-Vishwajith/Portfolio.git" target="_blank">GitHub</a>
                            </div>
                        </div>

                    </div>
                    
                    
                    {/*Card 2*/}
                    <div className="project-card">
                        <img src = {project2} alt="Project 2"/>
                        <h3>University 3D Map for Newcomers (Group Project)</h3>
                        <p className="description">
                            Developed an interactive 3D map to help new students easily navigate the university campus, including key locations such as lecture halls, libraries, and facilities.
                        </p>

                        {/*DropDown Content*/}
                        <div className="project-details">
                            <p><strong>Technologies:</strong> API, JavaScript, HTML, CSS</p>
                            <p><strong>Features:</strong></p>
                            <ul>
                                <li>3D navigation</li>
                                <li>Location markers</li>
                                <li>Interactive UI</li>
                            </ul>

                            <div className="project-buttons">
                                <a href="https://58to59.gt.tc/" target="_blank">Live Demo</a>
                                <a href="https://github.com/Dulan-Vishwajith/University-3D-Map.git" target="_blank">GitHub</a>
                            </div>
                        </div>
                    </div>
                    
                    {/*Card  3*/}
                    <div className="project-card">
                        <img src={project3} alt="Project 3"/>

                        <h3>GoviBiz – Smart Agriculture Marketplace (Group Project)</h3>
                        
                        <p className="description">
                            Developed a digital agriculture platform that connects farmers, buyers, agents, and delivery partners. 
                            The system enables direct trading, improves supply chain efficiency, and ensures fair pricing for agricultural products.
                        </p>

                        {/* DropDown Content */}
                        <div className="project-details">
                            <p><strong>Technologies:</strong> HTML, CSS, JavaScript,PHP,MySQL</p>
                            
                            <p><strong>Features:</strong></p>
                            <ul>
                                <li>Farmer product listing and management</li>
                                <li>Buyer ordering and product browsing system</li>
                                <li>Role-based authentication (Farmer, Buyer, Agent)</li>
                                <li>Delivery and logistics coordination</li>
                                <li>Responsive and user-friendly interface</li>
                            </ul>

                            <div className ="project-buttons">
                                <a href="http://govibiz.xo.je/" target="_blank">Live Demo</a>
                                <a href="https://github.com/Dulan-Vishwajith/GoviBiz.git" target="_blank">GitHub</a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>

    )
}

export default Projects;