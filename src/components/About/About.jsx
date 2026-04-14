import './About.css';

function About(){
    //return the about section of the portfolio
    return(
        <section className="about" id="about">
                {/*Title*/}
                {/*Anchor tag for the about section title, allowing users to navigate to this section when clicked.*/}
                <a href='#about' className='title-button'><h2 className="title-text">About</h2></a> 
                
                {/*About Text*/}
                <div className="about-container">
                    

                    <p className="description">
                    Hello! I'm Dulan, currently a Software Engineering undergraduate at the University of Kelaniya. My studies have given me a strong foundation in software development principles and a keen interest in building technology that makes an impact.
                    </p>

                    <p className="description">
                    As a Full Stack Developer, I enjoy working across both frontend and backend development. This passion enables me to design seamless, interactive user interfaces while also creating efficient and scalable server-side systems.
                    </p>

                    <p className="description">
                    When I'm not coding, I enjoy learning new technologies and improving my skills through personal projects and collaborative work.                    
                    </p>
                </div>
            </section>
    )
}
export default About