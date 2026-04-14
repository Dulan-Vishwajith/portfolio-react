import '../styles/Downloads.css';

function Downloads() {
    //return the downloads section of the portfolio
    return(
            <section className="downloads" id="downloads">
                {/*Section Title*/}
                <h2 className="title-text" id="downloads-title">Downloads</h2>
                <div className="downloads-container">
                    
                    {/*Resume Card*/}
                    <div className="download-card">
                        <h3>Download My Resume</h3>
                        <a href="assets/Dulan_Vishwajith_Resume.pdf" target="_blank" className="download-btn"><i className="fas fa-download"></i> Click Me</a>
                    </div>

                
                </div>
            </section>
    )
}
export default Downloads