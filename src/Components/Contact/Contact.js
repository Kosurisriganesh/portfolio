  import React, { useState } from 'react';
  import './Contact.css';
  import emailjs from 'emailjs-com';
  import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

  const Contact = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
    
      emailjs.send(
        'service_my5lyow',
        'template_zfir8ut',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'kosurisriganesh01@gmail.com',
          to_name: 'SRIGANESH',
        },
        'A-ob_LCM-mY7YDRzx'
      )
      .then((response) => {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        alert('Failed to send message. Please try again.');
      });
    };

    return (
      <section className="contact-section" id="contact">
        <h2>Contact Me</h2>
        <p>Feel Free to contact</p>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
          />
          <input 
            type="email" 
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
          />
          <textarea 
            placeholder="Message"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            required
          />
          <button type="submit">Send Message</button>
        </form>

        <footer className="footer">
          <div className="social-links">
            <a href="https://www.linkedin.com/in/kosuri-sri-ganesh" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={25} />
            </a>
            <a href="https://github.com/Kosurisriganesh" target="_blank" rel="noopener noreferrer">
              <FaGithub size={25} />
            </a>
            <a href="https://www.instagram.com/kosurisriganesh" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={25} />
            </a>
          </div>
          <p className="copyright">© 2024 Designed by Kosuri Sri Ganesh</p>
        </footer>

      </section>
    );
  };

  export default Contact;
