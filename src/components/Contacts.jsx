import '../styles/Contacts.css'
function Contact() {
  
  return (
<>
        <button className="back-to-top" id="backToTop" onclick="goTo('overview')"><i class="fas fa-arrow-up"></i></button>
        <section className="footer" id="contact">
            {/*Footer Container*/}
            <div className="footer-container">
                
                {/*Contact Section*/}
                <h3 id="contact-title">GET IN TOUCH</h3>

                {/*Contact Details*/}
                <div className="contact">
                    {/*Contact Title*/}
                    <h2>Let's Connect...</h2>

                    {/*Email*/}
                    <div className="email">
                        <a href="mailto:dulanvishwajithgunarathna@gmail.com"><i class="fas fa-envelope"></i> Email Me</a>
                    </div>
                    {/*Social Links*/}
                    <div className="links">
                        <a href="https://github.com/Dulan-Vishwajith" target="_blank"><i class="fab fa-github"></i>  GitHub</a>
                        <a href="https://www.linkedin.com/in/dulan-vishwajith-a8a230216/"><i class="fab fa-linkedin"></i>  LinkedIn</a>
                    </div>                    

                </div>

            </div>
            
        </section>

 </> );
}

export default Contact;