import Card from './Card';
import './Education.css';

function Education(){
    return(
        <section className="education" id="education">
                {/*Title*/}
                <a href="#education" className='title-button'><h2 className="title-text" >Education</h2></a>
                
                {/*Container*/}
                <div className="academic-container">
                    
                    {/*Academic things*/}
                    <div className="academic">
                        
                        {/*Academic Cards*/}
                        {/*Card 1*/}
                        <Card 
                            type='aca'
                            title="Bachelor of Science in Software Engineering(UG)"
                            time="2025-Present"
                            institute="University of Kelaniya"
                            grade="CGPA: 3.94/4.00"
                            summary="Specializing in Net-Centric Web Application Development, Data Science and Engineering Application, Health Informatics Engineering domains."
                        />

                        
                        {/*Card 2*/}
                        <Card
                            type='aca'
                            title="G.C.E. (A/L) EXAMINATION - 2023"
                            time="2023-2024"
                            institute="Ibbagammuwa Central College"
                            grade="Z-Score: +1.79"
                            summary="Successfully completed GCE Advanced Level examinations with results of AAB (Mathematics, Physics, Chemistry)."
                        />
                        
                    </div>
                    
                    {/*Certifications*/}
                    <div className="certifications">

                        {/*Certification title*/}
                        <h2>Certifications</h2>

                        {/*Certification Cards*/}
                        {/*Card 1*/}
                        <Card 
                            type='cert'
                            titles = {[
                                        'AWS Cloud Practitioner Essentials training from AWS Training & Certification - Free Courses',
                                        'AWS Networking Fundamentals Assessment - Free Courses'
                                    ]}
                            org = 'AWS'
                            year = '2026'
                        />

                        {/*Card 2*/}
                        <Card
                            type='cert'
                            titles = {[
                                        'Develop with DevOps - Badge',
                                        'Describe the core architectural components of Azure - Badge',
                                        'Describe Azure compute and networking services - Badge',
                                        'Accessibility fundamentals - Trophy',
                                        'Introduction to Cloud Infrastructure: Describe Azure architecture and services - Trophy'
                                    ]}
                            org = 'Microsoft'
                            year = '2025'
                        />

                    </div>            
                </div>
            </section>


                        
    )
}
export default Education