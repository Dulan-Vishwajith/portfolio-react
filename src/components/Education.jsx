import '../styles/Education.css';

function Education(){
    return(
        <section className="education" id="education">
                {/*Title*/}
                <h2 className="title-text" id="education-title">Education</h2>
                
                {/*Container*/}
                <div className="academic-container">
                    
                    {/*Academic things*/}
                    <div className="academic">
                        
                        {/*Academic Cards*/}
                        {/*Card 1*/}
                        <div className="aca-card">
                            <div className="card-top">
                                <h3 className="title">Bachelor of Science in Software Engineering(UG)</h3>
                                <span className="time">2025-Present</span>
                            </div>

                            <div className="card-middle">
                                <span className="institute">University of Kelaniya</span>
                                <span className="grade">CGPA: 3.94/4.00</span>
                            </div>

                            <p className="summmary">
                                Specializing in Net-Centric Web Application Development, Data Science and Engineering Application, Health Informatics Engineering domains.
                            </p>
                        
                        </div>

                        {/*Card 2*/}
                        <div className="aca-card">
                            <div className="card-top">
                                <h3 className="title">G.C.E. (A/L) EXAMINATION - 2023</h3>
                                <span className="time">2023-2024</span>
                            </div>

                            <div className="card-middle">
                                <span className="institute">Ibbagammuwa Central College</span>
                                <span className="grade">Z-Score: +1.79</span>
                            </div>

                            <p className="summmary">
                                Successfully completed GCE Advanced Level examinations with results of AAB (Mathematics, Physics, Chemistry).
                            </p>

                        </div>

                    </div>
                    
                    {/*Certifications*/}
                    <div className="certifications">

                        {/*Certification title*/}
                        <h2>Certifications</h2>

                        {/*Certification Cards*/}
                        {/*Card 1*/}
                        <div className="cert-card">
                            <p className="cert-title">AWS Cloud Practitioner Essentials training from AWS Training & Certification - Free Courses</p>
                            <p className="cert-title">AWS Networking Fundamentals Assessment - Free Courses</p>
                            
                            <span className="cert-org">AWS • 2026</span>
                        </div>

                        {/*Card 2*/}
                        <div className="cert-card">
                            <p className="cert-title">Develop with DevOps - Badge</p>
                            <p className="cert-title">Describe the core architectural components of Azure - Badge</p>
                            <p className="cert-title">Describe Azure compute and networking services - Badge</p>
                            <p className="cert-title">Accessibility fundamentals - Trophy</p>
                            <p className="cert-title">Introduction to Cloud Infrastructure: Describe Azure architecture and services - Trophy</p>

                            <span className="cert-org">MicrosoftLearn • 2025</span>
                        </div>

                        
                    </div>            
                </div>
            </section>


                        
    )
}
export default Education