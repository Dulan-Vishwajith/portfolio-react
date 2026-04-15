

import { useState } from "react";

function ProjectCard({project_img, title, description, technologies, features, liveDemoLink, githubLink}) {
    //State to manage the active/inactive state of the project card
    const [activeness, setActiveness] = useState('inactive');
    //Function to toggle the active/inactive state of the project card
    //When the project card is clicked, this function is called to toggle the state between 'active' and 'inactive'
    function toggleDetails() {

        //Toggle the activeness state between 'active' and 'inactive'
        //If the current state is 'active', set it to 'inactive', otherwise set it to 'active'
        setActiveness(prev => prev === 'active' ? 'inactive' : 'active');      
    }
    

    //Return the project card component with the provided props and the toggle functionality
    //className of the project card is determined by the activeness state, allowing for styling based on whether the card is active or inactive
    return(
            <div className={"project-card " + activeness} onClick={toggleDetails}>
                <img src = {project_img} alt="Project 1"/>
                <h3>{title}</h3>
                <p className="description">
                    {description}
                </p>

                {/*DropDown Content*/}
                <div className="project-details">
                    <p><strong>Technologies:</strong> {technologies}</p>
                    <p><strong>Features:</strong></p>
                    <ul>
                        {features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>

                    <div className="project-buttons">
                        <a href={liveDemoLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
                        <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                </div>

            </div>
                                            
        );
}
export default ProjectCard