import React, { useState } from 'react';
// import axios from 'axios'; // 注释掉这行，或者完全删除
import styles from './Contact.module.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('Sending...');
    try {
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Demo version message
      setStatus('Message received! (Note: This is a demo version. No actual email was sent.)');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('Error: Unable to send message. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2>Contact Us</h2>
        <p>We'd love to hear from you! Get in touch to learn more about our services or request a custom proposal.</p>
        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit" className={styles.submitButton} disabled={isLoading}>
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        {status && <p className={styles.statusMessage}>{status}</p>}
      </div>
    </section>
  );
}

export default Contact;
