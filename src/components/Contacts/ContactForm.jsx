// Import React hook to manage state
import { useState } from 'react';

// Import CSS file for styling
import './ContactForm.css'

// Import EmailJS library to send emails from frontend
import emailjs from "@emailjs/browser";

// Form Component
function ContactForm() {
    
    // State to store form input values
    // This is a controlled form → React manages input values
    const [formData, setFormData] = useState({
        name: '',      // user's name
        email: '',     // user's email
        message: ''    // user's message
    });

    // State to store validation errors
    const [errors, setErrors] = useState({});

    // State to show success message after sending email
    const [success, setSuccess] = useState("");

    // Function runs when user types in input fields
    function handleChange(e) {
        setFormData({
            ...formData, // keep previous values
            [e.target.name]: e.target.value // update only changed field
        });
    }
    
    // Function to validate form inputs
    function validate(){
        let newErrors = {}; // temporary object to store errors

        // Validate name (cannot be empty or spaces)
        if(!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        // Validate email
        if (!formData.email) {
            newErrors.email = "Email is required";
        } 
        // Check email format using regex
        else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }

        // Validate message (cannot be empty)
        if (!formData.message.trim()) {
            newErrors.message = "Message cannot be empty";
        }

        // Return all errors (if any)
        return newErrors;
    }

    // Function runs when form is submitted
    function handleSubmit(e) {
        e.preventDefault(); // prevent page reload

        // Run validation
        const validationErrors = validate();

        // Store errors in state
        setErrors(validationErrors);

        // If no errors → send email
        if (Object.keys(validationErrors).length === 0) {

            // Send email using EmailJS
            emailjs.send(
                "service_t65prg5",   // your EmailJS Service ID
                "template_7j68dxn",  // your EmailJS Template ID
                formData,           // data sent to template (name, email, message)
                "3biT27Zkq2CfFTn4r" // your EmailJS Public Key
            )

            // If email is sent successfully
            .then(() => {
                // Show success message
                setSuccess("Message sent successfully!");

                // Clear form inputs
                setFormData({
                    name: "",
                    email: "",
                    message: ""
                });

                // Remove success message after 3 seconds
                setTimeout(() => setSuccess(""), 3000);
            })

            // If email sending fails
            .catch(() => {
                alert("Failed to send message. Try again.");
            });

        }
    }

    // JSX UI
    return (
    <div className="contact-form-container">

      {/* Form element with submit handler */}
      <form onSubmit={handleSubmit} className="contact-form">

        {/* Title */}
        <h2>Contact Me</h2>

        {/* Success message (only shown if exists) */}
        {success && <p className="success">{success}</p>}

        {/* Name input */}
        <input
          type="text"
          name="name" // must match formData key
          placeholder="Your Name"
          value={formData.name} // controlled value
          onChange={handleChange} // update state on typing
        />
        {/* Show error if exists */}
        {errors.name && <p className="error">{errors.name}</p>}

        {/* Email input */}
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        {/* Message textarea */}
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <p className="error">{errors.message}</p>}

        {/* Submit button */}
        <button type="submit">Send Message</button>

      </form>
    </div>
  );
}

// Export component to use in other files
export default ContactForm;