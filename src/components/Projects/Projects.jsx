import './Projects.css';
import project1 from '../../assets/project_img/Porfolio.png';
import project2 from '../../assets/project_img/3D-University-Map.png';
import project3 from '../../assets/project_img/govibiz.png';
import ProjectCard from './ProjectCard';


function Projects() {
    //return the projects section of the portfolio
    return(
        <section className="project" id="projects">
                {/*Section Title*/}
                <a href="#projects" className='title-button'><h2 className="title-text" id="projects-title">Projects</h2></a>

                <div className="project-container">
                    
                    
                    {/*Card 1*/}    
                    <ProjectCard 
                        project_img={project1} 
                        
                        title="Personal Portfolio Website (Individual Project)"
                        
                        description="Developed a responsive personal portfolio website to showcase my skills, projects, and academic background as a Software Engineering undergraduate. The site provides an interactive and user-friendly interface to highlight my work and technical expertise."
                        
                        technologies="JavaScript, HTML, CSS"
                        
                        features={[
                                    "Modern and professional UI",
                                    "Project cards with live demos and source code",
                                    "Easy navigation and accessibility",
                                    "Cross-browser compatibility"
                                ]}
                        
                        liveDemoLink="https://dulanvish.com/"
                        
                        githubLink="https://github.com/Dulan-Vishwajith/Portfolio.git"

                    />
                    


                    {/*Card 2*/}
                    <ProjectCard 
                        project_img={project2} 
                        
                        title="University 3D Map for Newcomers (Group Project)"
                        
                        description="Developed an interactive 3D map to help new students easily navigate the university campus, including key locations such as lecture halls, libraries, and facilities."
                        
                        technologies="API, JavaScript, HTML, CSS"
                        
                        features={[
                                    "3D navigation",
                                    "Location markers",
                                    "Interactive UI"
                                ]}
                        
                        liveDemoLink="https://58to59.gt.tc/"
                        
                        githubLink="https://github.com/Dulan-Vishwajith/University-3D-Map.git"
                    />
                    

                    {/*Card  3*/}
                    <ProjectCard 
                        project_img={project3} 
                        
                        title="GoviBiz – Smart Agriculture Marketplace (Group Project)"
                        
                        description="Developed a digital agriculture platform that connects farmers, buyers, agents, and delivery partners. The system enables direct trading, improves supply chain efficiency, and ensures fair pricing for agricultural products."
                        
                        technologies="HTML, CSS, JavaScript, PHP, MySQL"
                        
                        features={[
                                    "Farmer product listing and management",
                                    "Buyer ordering and product browsing system",
                                    "Role-based authentication (Farmer, Buyer, Agent)",
                                    "Delivery and logistics coordination",
                                    "Responsive and user-friendly interface"
                                ]}
                        
                                liveDemoLink="http://govibiz.xo.je/"
                        
                        githubLink="https://github.com/Dulan-Vishwajith/GoviBiz.git"
                    />

                    
                </div>
            </section>

    )
}

export default Projects;