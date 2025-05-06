import React, { useState } from 'react'
import "../Styles/contact.css"

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlSubmit = async (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        try {
            const response = await fetch("https://shahid-portfolio-vl2h.onrender.com/contact", {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("Message sent Succefully!");
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                });
            } else {
                alert("Failed to send Message!");
            }
        }
        catch (error) {
            console.log(error);
            alert('Something Went wrong');
        }
        setIsSubmitting(false);
    };
    return (
        <div className='contact-container'>
            <div className="projects-header">
                <h1>Contact</h1>
                <p>
                    I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
                </p>
            </div>
            <form action="#" className="contact-form" onSubmit={handlSubmit}>
                <div className='column'>
                    <input type="text" name="name" placeholder='Enter Your Name' value={formData.name} className='contact-input' onChange={handleChange} />
                    <input type="email" name="email" placeholder='Enter Your E-mail' value={formData.email} className='contact-input' onChange={handleChange} />
                </div>
                <div className='column'>
                    <textarea name="message" id="message" placeholder='Enter Your Message' value={formData.message} className='contact-input' onChange={handleChange}></textarea>
                    <input type="submit" value={isSubmitting ? "Sending..." : "Submit"} disabled={isSubmitting} className='contact-input submit-btn' />
                </div>
            </form>
        </div>
    )
}

export default Contact
