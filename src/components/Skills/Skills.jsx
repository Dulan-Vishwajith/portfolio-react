import ProgressCard from './ProgressCard';
import './Skills.css';

function Skills(){
    //return the skills section of the portfolio
    return(
        <section className="skill" id="skills">
                <a href='#skills' className='title-button'><h2 className="title-text" id="skills-title">Skills</h2></a>

                <div className="skill-container">

                    {/* Programming Languages */}
                    <ProgressCard 
                                category="Programming Languages" 
                                skills={[
                                    { name: "JavaScript",level:50 },
                                    { name: "Python", level: 60 },
                                    { name: "C", level: 65 },
                                    { name: "Java", level: 60 }                                    
                                    ]} 
                    />

                    {/* Web Development */}
                    <ProgressCard
                                category="Web Development & Databases"
                                skills={[
                                    { name: "HTML", level: 75 },
                                    { name: "CSS", level: 45 },
                                    { name: "SQL", level: 60 }
                                ]}
                    />

                    {/* Frameworks & Libraries */}
                    <ProgressCard
                                category="Frameworks & Libraries"
                                skills={[
                                    { name: "React", level: 25 },
                                    { name: "Node.js", level: 5 },
                                    { name: "Express.js", level: 5 }
                                ]}
                    />  
                
                </div>
            </section>
    
    )
}

export default Skills;