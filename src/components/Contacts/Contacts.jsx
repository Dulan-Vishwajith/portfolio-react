import './Contacts.css'
import ContactForm from './ContactForm';

function Contact() {
  return (
    <section className="footer" id="contact">
        {/* Footer Main */}
      <div className="footer-main">
        {/* Contact Information */}
        <div className="footer-container">
            <a href="#contact" className='title-button'>
                <h3 id="contact-title">GET IN TOUCH</h3>
            </a>

            {/* Contact Links */}
            <div className="contact">
                <h2>Let's Connect...</h2>
                    {/* Social Media and Contact Links */}
                    <div className="links">
                    <a href="[github.com](https://github.com/Dulan-Vishwajith)" target="_blank" rel="noreferrer">
                        <i className="fab fa-github"></i> GitHub
                    </a>
                    <a href="[linkedin.com](https://www.linkedin.com/in/dulan-vishwajith-a8a230216/)" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin"></i> LinkedIn
                    </a>
                    <a href="mailto:dulanvishwajithgunarathna@gmail.com">
                        <i className="fas fa-envelope"></i> Email Me
                    </a>
                    </div>
            </div>
        </div>

        {/* Contact Form */}
        <ContactForm />

      </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
            {/* Copyright Notice */}
            <p>© 2026 Dulan Vishwajith. All rights reserved.</p>
        </div>

    </section>
  );
}

export default Contact;
