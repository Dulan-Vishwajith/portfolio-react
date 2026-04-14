import profilepic from '../assets/profile.png';
import '../styles/Overview.css';


function Overview(){
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
                        <a href="https://github.com/Dulan-Vishwajith" target="_blank"><i className="fab fa-github"></i>  GitHub</a>
                        <a href="https://www.linkedin.com/in/dulan-vishwajith-a8a230216/" target="_blank"><i className="fab fa-linkedin"></i>  LinkedIn</a>
                        <a href="https://medium.com/@dulanvishwajithgunarathna" target="_blank"><i className="fab fa-medium"></i>  Medium</a>
                    </div>
                </div>

                {/*Profile Picture*/}
                <div className="image">
                    <img src={profilepic} alt="profile"/>
                </div>


            </section>
            );
}
export default Overview;