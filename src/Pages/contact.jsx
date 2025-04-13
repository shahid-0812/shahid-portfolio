import React from 'react'
import "../Styles/contact.css"

const Contact = () => {
    return (
        <div className='contact-container'>
            <div className="projects-header">
                <h1>Contact</h1>
                <p>
                    I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
                </p>
            </div>
            <form action="#" className="contact-form">
                <div className='column'>
                    <input type="text" placeholder='Enter Your Name' className='contact-input' />
                    <input type="email" placeholder='Enter Your E-mail' className='contact-input' />
                </div>
                <div className='column'>
                    <textarea name="message" id="message" placeholder='Enter Your Message' className='contact-input'></textarea>
                    <input type="submit" value="Submit" className='contact-input submit-btn' />
                </div>
            </form>
        </div>
    )
}

export default Contact
