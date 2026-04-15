function ProgressCard({category, skills}){ 
    //return a card with progress bars for programming languages
    //category is the title of the card and skills is an array of objects with name, className and level properties
    return(
            <div className="skill-card">
                <h3>{category}</h3>
                
                {/* Iterate through the skills array and create a progress bar for each skill */}
                {skills.map((skill, index) => (
                        <div key={index} className="skill-item">
                            <span>{skill.name} - {skill.level}%</span>
                            <div className="empty-bar"><div className='fill' style = {{ width: `${skill.level}%`}}></div></div>
                        </div>
                    ))
                }
            </div>
        );
    }
    
export default ProgressCard;