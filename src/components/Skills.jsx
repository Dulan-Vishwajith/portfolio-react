import '../styles/Skills.css';

function Skills(){
    //return the skills section of the portfolio
    return(
        <section className="skill" id="skill">
                <h2 className="title-text" id="skills-title">Skills</h2>

                <div className="skill-container">

                    {/* Programming Languages */}
                    <div className="skill-card">
                        <h3>Programming Languages</h3>

                        <div className="skill-item">
                            <span>JavaScript</span>
                            <div className="empty-bar"><div className="fill js"></div></div>
                        </div>

                        <div className="skill-item">
                            <span>Python</span>
                            <div className="empty-bar"><div className="fill python"></div></div>
                        </div>

                        <div className="skill-item">
                            <span>C</span>
                            <div className="empty-bar"><div className="fill c"></div></div>
                        </div>

                        <div className="skill-item">
                            <span>Java</span>
                            <div className="empty-bar"><div className="fill java"></div></div>
                        </div>
                    </div>

                    {/* Web Development */}
                    <div className="skill-card">
                        <h3>Web Development</h3>

                        <div className="skill-item">
                            <span>HTML</span>
                            <div className="empty-bar"><div className="fill html"></div></div>
                        </div>

                        <div className="skill-item">
                            <span>CSS</span>
                            <div className="empty-bar"><div className="fill css"></div></div>
                        </div>
                    </div>

                    {/* Frameworks & Libraries */}
                    <div className="skill-card">
                        <h3>Frameworks & Libraries</h3>

                        <div className="skill-item">
                            <span>React</span>
                            <div className="empty-bar"><div className="fill react"></div></div>
                        </div>

                        <div className="skill-item">
                            <span>Node.js</span>
                            <div className="empty-bar"><div className="fill node"></div></div>
                        </div>

                        <div className="skill-item">
                            <span>Express.js</span>
                            <div className="empty-bar"><div className="fill express"></div></div>
                        </div>
                    </div>
                    
                </div>
            </section>
    
    )
}

export default Skills;