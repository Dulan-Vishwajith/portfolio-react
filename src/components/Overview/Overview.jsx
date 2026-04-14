import profilepic from '../../assets/profile.png';
import './Overview.css';


function Overview(){

    const githubLink = "https://github.com/Dulan-Vishwajith";
    const linkedinLink = "https://www.linkedin.com/in/dulan-vishwajith-a8a230216/";
    const mediumLink = "https://medium.com/@dulanvishwajithgunarathna";


    //return the overview section of the portfolio
    return (
            <section className="overview" id="overview">
                {/*Overview Text*/}
                <div className="overview-text">
                    <h1>
                        Dulan Vishwajith, <span>UG, BSc (Hons) in SE</span>
                    </h1>
                    
                    <p className="description">
                        Undergraduate Software Engineering student at the University of Kelaniya with interests in web development, mobile app development and building practical software solutions.
                    </p>
                    
                    {/*Info Buttons*/}
                    <div className="info-buttons"> 
                        <span>Net Centric </span> 
                        <span>Mobile Computing</span> 
                        <span>Backend Development</span>
                        <span>Cybersecurity</span> 
                    </div>
                    
                    {/*Social Media Links*/}
                    <div className="socials">
                        {/*Each anchor tag represents a social media link, allowing users to navigate to the respective profiles when clicked.*/}
                        <a href={githubLink} target="_blank"><i className="fab fa-github"></i>  GitHub</a>
                        <a href={linkedinLink} target="_blank"><i className="fab fa-linkedin"></i>  LinkedIn</a>
                        <a href={mediumLink} target="_blank"><i className="fab fa-medium"></i>  Medium</a>
                    </div>
                </div>

                {/*Profile Picture*/}
                <div className="image">
                    <img src={profilepic} alt="profile-pic"/>
                </div>


            </section>
            );
}
export default Overview;