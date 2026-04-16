import './Downloads.css';
import DownloadCard from './DownloadCard';

function Downloads() {
    //return the downloads section of the portfolio
    return(
            <section className="downloads" id="downloads">
                {/*Section Title*/}
                <a href="#downloads" className='title-button'><h2 className="title-text" id="downloads-title">Downloads</h2></a>
                <div className="downloads-container">
                    
                    {/*Resume Card*/}
                    <DownloadCard
                        title="Resume"
                        description="Download my resume to learn more about my education, skills, and experience."
                        link="/files/Dulan_Vishwajith_Resume.pdf"
                    />
                </div>
            </section>
    )
}
export default Downloads